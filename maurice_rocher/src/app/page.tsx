import Image from "next/image"
import { MainNav } from "@/components/main-nav"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white">
      <div className="flex min-h-screen flex-col">
        {/* Main content area */}
        <div className="flex flex-1 items-center justify-center px-4">
          <div className="relative h-[80vh] w-[60vw]">
            <Image
              src="/rubriques/ten/29_9_ANGE_NOIR.jpg"
              alt="Featured Artwork"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Fixed navigation */}
        <MainNav className="fixed bottom-0 left-0 right-0" />
      </div>
    </main>
  )
}





