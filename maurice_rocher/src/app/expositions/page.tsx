import Image from "next/image"
import { MainNav } from "@/components/main-nav"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Expositions",
  description: "Expositions de Maurice Rocher",
};

export default function Expositions() {
  return (
    <main className="flex flex-col h-full w-full bg-black text-white pt-8 pb-36">
      <div className="flex-1 mx-auto w-full max-w-7xl pt-24">
        <h1 className="text-4xl md:text-5xl font-light px-8 mb-16">Expositions</h1>
        
        <div className="grid w-full grid-cols-1 items-start gap-16 px-8 lg:grid-cols-2">
          <div className="relative aspect-[3/4] w-full">
            <Image src="/expositions/1_EXPOSITION.png" alt="Exposition Maurice Rocher" fill className="object-contain" />
          </div>
          <div className="relative aspect-[3/4] w-full">
            <Image src="/expositions/2_EXPOSITION.png" alt="Exposition Maurice Rocher" fill className="object-contain" />
          </div>
        </div>

        <MainNav className="fixed top-0 left-0 right-0" />
      </div>
    </main>
  )
}
