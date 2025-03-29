"use client"
import Image from "next/image"
import { MainNav } from "@/components/main-nav"
// import { Metadata } from "next";
import { useState } from "react"
import SimpleAudioPlayer from '@/components/audioPlayer';

// export const metadata: Metadata = {
//   title: "Expositions",
//   description: "Expositions de Maurice Rocher",
// };

export default function Expositions() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <main className="flex flex-col h-full w-full bg-black text-white pt-8 pb-36">
      <div className="flex-1 mx-auto w-full max-w-7xl pt-24">
          <h1 className="text-4xl md:text-5xl font-light px-8 mb-8">Expositions</h1>
          <SimpleAudioPlayer
          src="/GUSTAV MAHLER   Symphony No.9 (Adagio)  LEONARD BERNSTEIN.mp3"
          title="GUSTAV MAHLER Symphony No.9 (Adagio) LEONARD BERNSTEIN"
          />
          <h2
          className="text-3xl md:text-4xl font-light absolute px-8 mb-8 text-gray-300 md:ml-10"
        >
          Exposition en cours
        </h2>        
      <div className="grid w-full grid-cols-1 items-start gap-16 px-8 lg:grid-cols-2 mb-16">
          <div 
            className="relative aspect-[3/4] w-full cursor-pointer transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl" 
            onClick={() => setSelectedImage("/expositions/1_EXPOSITION.PNG")}
          >
            <Image src="/expositions/1_EXPOSITION.PNG" alt="Exposition Maurice Rocher" fill className="object-contain" />
          </div>
          <div 
            className="relative aspect-[3/4] w-full cursor-pointer transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl" 
            onClick={() => setSelectedImage("/expositions/2_EXPOSITION.PNG")}
          >
            <Image src="/expositions/2_EXPOSITION.PNG" alt="Exposition Maurice Rocher" fill className="object-contain" />
          </div>
        </div>
        <h2
          className="text-3xl md:text-4xl font-light absolute px-8 mb-8 text-gray-300 md:ml-10"
        >
          Expositions passées
        </h2>  
        <div className="grid w-full grid-cols-1 md:grid-cols-2 items-start gap-8 px-8">
          {[3, 4, 5, 6].map((num) => (
            <div 
              key={num}
              className="relative aspect-[3/4] w-full max-w-3xl mx-auto cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl opacity-80 hover:opacity-100" 
              onClick={() => setSelectedImage(`/expositions/${num}_EXPOSITION.jpg`)}
            >
              <Image 
                src={`/expositions/${num}_EXPOSITION.jpg`} 
                alt="Exposition Maurice Rocher" 
                fill 
                className="object-contain" 
              />
            </div>
          ))}
        </div>

        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4 cursor-pointer transition-opacity duration-300"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative w-full h-full">
              <Image 
                src={selectedImage} 
                alt="Exposition Maurice Rocher" 
                fill 
                className="object-contain"
                priority
              />
            </div>
            <button 
              className="absolute top-8 right-8 text-white opacity-70 hover:opacity-100 transition-opacity duration-200 text-xl"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
          </div>
        )}

        <MainNav className="fixed top-0 left-0 right-0" />
      </div>
    </main>
  )
}
