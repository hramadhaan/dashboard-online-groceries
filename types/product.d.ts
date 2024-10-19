type Product = {
  _id: string;
  name: string;
  description: string;
  price: number;
  brand?: string;
  category: Category;
  image: string[];
  stock: Stock;
  sku: string;
  status: "inactive" | "active";
  createdAt: string;
  updatedAt: string;
};
