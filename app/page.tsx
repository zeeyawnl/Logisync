import Link from "next/link";
import { stackServerApp } from "@/stack/server";
import { redirect } from "next/navigation";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import { url } from "inspector/promises";
import Image from "next/image";

export default async function Home() {
  const user = await stackServerApp.getUser();
  if (user) {
    redirect("/dashboard");
  }
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background image layer */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/abcd.jpg" // must be in /public
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Optional overlay for text readability */}
      <div className="absolute inset-0 bg-black/20 -z-10"></div>

      {/* Foreground content */}
      <Navbar />
      <Hero />
    </div>
  );
}