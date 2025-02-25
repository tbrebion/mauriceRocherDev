import Image from "next/image"
import { MainNav } from "@/components/main-nav"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white">
      <div className="flex min-h-screen flex-col">
        {/* Main content area */}
        <div className="flex-1 px-4">
          <div className="relative mx-auto aspect-[16/9] max-w-4xl pt-20">
            <Image
              src="/placeholder.svg?height=800&width=1200"
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

