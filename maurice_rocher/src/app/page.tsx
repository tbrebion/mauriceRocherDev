import Image from "next/image"
import { MainNav } from "@/components/main-nav"

export default function Home() {
  return (
    <main className="relative bg-black text-white">
      <div className="flex flex-col pt-24">
        {/* Main content area */}
        <div className="flex items-center justify-center px-4">
          <div className="w-[60vw] space-y-8 py-12">
            {/* First image (clickable) */}
            <a href="https://www.catherinepennec.com/fr/expositions/expositions-%C3%A0-venir/" target="_blank" className="block relative h-[80vh] w-full">
              <Image
                src="/expositions/1_EXPOSITION.png"
                alt="First Artwork"
                fill
                className="object-contain transition-opacity duration-300 hover:opacity-60"
                priority
              />
            </a>
            
            {/* Second image (original) */}
            <div className="relative h-[80vh] w-full">
              <Image
                src="/rubriques/ten/29_9.jpg"
                alt="Featured Artwork"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Fixed navigation */}
        <MainNav className="fixed top-0 left-0 right-0" />
      </div>
    </main>
  )
}





