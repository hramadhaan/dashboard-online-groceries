import { NuxtAuthHandler } from "#auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { instance } from "~/utils/axios-client";

export default NuxtAuthHandler({
  secret: useRuntimeConfig().authSecret,
  pages: {
    signIn: "/authentication/login",
    signOut: "/authentication/login",
    error: "/authentication/login",
  },
  providers: [
    // @ts-expect-error Use .default here for it to work during SSR.
    CredentialsProvider.default({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "Enter your email address",
        },
        password: {
          type: "password",
          label: "Password",
          placeholder: "Enter your password",
        },
      },
      authorize: async (credentials, request) => {
        const { email, password } = credentials ?? {};
        const response = await instance.post("/auth/login", {
          email,
          password,
        });
        console.log('Response: ', response.data)
        if (response.status === 200 && response.data?.data?.token) {
          const resData = response.data.data;
          const user = {
            id: resData.user._id,
            email: resData.user.email,
            name: resData.user.name,
            role: resData.user.role,
            token: resData.token,
          };
          return Promise.resolve(user);
        }
        return Promise.resolve(null);
      },
    }),
  ],
  callbacks: {
    session: async ({ session, token }) => {
      if (session?.user) {
        session.user.id = token?.sub;
        session.user.token = token?.token as string;
        session.user.role = token.role as string;
      }
      return session;
    },
    jwt: async ({ user, token }) => {
      if (user) {
        token.uid = user.id;
        token.token = user.token;
        token.role = user.role;
      }
      return token;
    },
  },
  session: {
    strategy: "jwt",
  },
});
