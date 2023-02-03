
import { Inter } from "@next/font/google";
import Link from "next/link";
import Layout from "@/components/Layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout title="Home Page">
      <h1>Home</h1>
      <Link href="/about">About</Link>
    </Layout>
  );
}
