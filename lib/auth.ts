import CredentialsProvider from "next-auth/providers/credentials";
import type { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
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
      authorize: async (credentials) => {
        const { email, password } = credentials ?? {};
        const response = await fetch("/api/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });
        const data = await response.json();
        if (response.status === 201 && data?.data?.token) {
          const resData = data.data;
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
};
