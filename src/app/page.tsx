import Image from "next/image";
import { Header } from "../components/Header"
import { Top } from "@/components/top";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer"

export default function Home() {
  return (
    <>
      <Header/>
      <Top/>
      <About/>
      <Footer/>
    </>
  );
}
