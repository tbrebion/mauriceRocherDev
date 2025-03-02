import Image from "next/image"

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
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {artworks.map((artwork) => (
        <div key={artwork.id} className="group relative aspect-square">
          <Image
            src={artwork.image || "/placeholder.svg"}
            alt={artwork.title}
            fill
            className="object-cover duration-300 ease-in-out transition-opacity hover:opacity-30"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <h2 className="text-lg font-semibold">{artwork.title}</h2>
            <p className="mt-1 text-sm text-gray-300">{artwork.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

