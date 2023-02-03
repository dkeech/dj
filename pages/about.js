import Link from "next/link";
import Layouts from "@/components/Layout";

export default function About() {
  return (
    <Layouts title="About DJ Events">
      <h1>About</h1>
      <p className="">This is a page to view details about events</p>
      <a href="/" className="home">
        Home
      </a>
    </Layouts>
  );
}
