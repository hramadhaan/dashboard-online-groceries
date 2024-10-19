type Category = {
  _id: string;
  name: string;
  level: number;
  image: string;
  parent: Category | null;
};
