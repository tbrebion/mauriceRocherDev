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
  const [selectedArtworks, setSelectedArtworks] = useState<Artwork[]>([])

  // Helper function to find related artworks
  const getRelatedArtworks = (artwork: Artwork) => {
    // Extract base filename without extension (e.g., "15_8" from "15_8.jpg")
    const baseFilename = artwork.image.split('/').pop()?.split('.')[0]
    if (!baseFilename) return [artwork]

    // Define specific groups of related images
    const relatedGroups = [
      ['15_8', '15_9'],
      ['24_4', '24_5', '24_6'],
    ]

    // Check if the current image is part of a related group
    const group = relatedGroups.find(group => group.includes(baseFilename))
    
    if (group) {
      // If it's part of a group, return all artworks from that group
      return artworks.filter(a => {
        const filename = a.image.split('/').pop()?.split('.')[0]
        return filename && group.includes(filename)
      })
    }

    // If not part of a group, return just this artwork
    return [artwork]
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {artworks.map((artwork) => (
          <div 
            key={artwork.id} 
            className="group relative aspect-square cursor-pointer"
            onClick={() => setSelectedArtworks(getRelatedArtworks(artwork))}
          >
            <Image
              src={artwork.image || "/placeholder.svg"}
              alt={artwork.title}
              fill
              className="object-cover duration-300 ease-in-out transition-opacity hover:opacity-30"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 max-h-[50%] overflow-hidden">
              <h2 className="text-lg font-semibold truncate">{artwork.title}</h2>
              {/* <p className="mt-1 text-sm text-gray-300 line-clamp-3">{artwork.description}</p> */}
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedArtworks.length > 0 && (
        <div 
          className="fixed inset-0 backdrop-blur-sm bg-black/70 z-50 flex items-center justify-center p-4 overflow-y-auto pt-24"
          onClick={() => setSelectedArtworks([])}
        >
          <div 
            className="relative max-w-6xl w-full rounded-lg overflow-hidden bg-transparent my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-black/50 hover:bg-black/70 transition-colors"
              onClick={() => setSelectedArtworks([])}
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
            
            <div className={`grid gap-4 ${selectedArtworks.length > 1 ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1 max-w-2xl mx-auto'}`}>
              {selectedArtworks.map((artwork) => (
                <div key={artwork.id}>
                  <div className="relative aspect-square">
                    <Image
                      src={artwork.image || "/placeholder.svg"}
                      alt={artwork.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="p-4">
                    <h2 className="text-xl font-semibold">{artwork.title}</h2>
                    {artwork.description && (
                      <p className="mt-2 text-gray-300 text-justify">{artwork.description}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

