"use client"
import Image from "next/image"
import { useState } from "react"

interface Artwork {
  id: number
  title: string
  description: string
  image: string
}

interface GalleryProps {
  artworks: Artwork[]
}

export function Gallery({ artworks }: GalleryProps) {
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null)

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {artworks.map((artwork) => (
          <div 
            key={artwork.id} 
            className="group relative aspect-square cursor-pointer"
            onClick={() => setSelectedArtwork(artwork)}
          >
            <Image
              src={artwork.image || "/placeholder.svg"}
              alt={artwork.title}
              fill
              className="object-cover duration-300 ease-in-out transition-opacity hover:opacity-30"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 max-h-[50%] overflow-hidden">
              <h2 className="text-lg font-semibold truncate">{artwork.title}</h2>
              <p className="mt-1 text-sm text-gray-300 line-clamp-3">{artwork.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedArtwork && (
        <div 
          className="fixed inset-0 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedArtwork(null)}
        >
          <div 
            className="relative max-w-4xl w-full rounded-lg overflow-hidden bg-transparent"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-black/50 hover:bg-black/70 transition-colors"
              onClick={() => setSelectedArtwork(null)}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={2} 
                stroke="currentColor" 
                className="w-5 h-5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="relative aspect-square md:aspect-[16/9]">
              <Image
                src={selectedArtwork.image || "/placeholder.svg"}
                alt={selectedArtwork.title}
                fill
                className="object-contain"
              />
            </div>
            <div className="p-6 bg-black/50 backdrop-blur-sm rounded-b-lg">
              <h2 className="text-2xl font-semibold">{selectedArtwork.title}</h2>
              <p className="mt-2 text-gray-300">{selectedArtwork.description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

