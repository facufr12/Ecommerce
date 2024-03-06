import Image from "next/image";
import Navbar from "./components/Navbar";
import Card from "./components/Card"

export default function Home() {
  return (
    <main className=" flex min-h-screen flex-col items-center justify-between p-10">
     <>
     <Navbar />
    <Card />
     
     
     </>
    </main>
  );
}
