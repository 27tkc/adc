"use client";
import { Button } from "./components/ui/Button";
// import { Card } from "./components/ui/Card";
// import { Input } from "./components/ui/Input";
import { Modal } from "./components/ui/Modal";
import { useState } from "react";
import Hero from "./sections/Hero";
import Footer from "./sections/Footer";
import About from "./sections/About";
import Services from "./sections/Services";

export default function Home() {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans ">
      <main className="flex min-h-screen w-full flex-col items-center justify-between py-2 px-2 bg-white sm:items-start">
        <Hero />
        <Services />
        <About />
        <Footer />
      </main>
    </div>
  );
}
