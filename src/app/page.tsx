import Header from "@/app/Header";
import Image from "next/image";
import Card from "./card";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Image  src={'/images/Avatar.png'} alt="avarta" width={500} height={500} quality={100}/>
      <Card />
    </main>
  ); 
}
