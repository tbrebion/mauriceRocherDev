import Image from "next/image"
import Link from "next/link"
import { MainNav } from "@/components/main-nav"

// This is a placeholder. In a real application, you'd fetch this data from an API or database
const getArtwork = (id: string) => {
  const artworks = [
    {
      id: 1,
      title: "Sunrise Melody",
      description: "A vibrant exploration of color and light.",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: 2,
      title: "Urban Rhythms",
      description: "Capturing the pulse of city life through abstract forms.",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: 3,
      title: "Serene Reflections",
      description: "A meditative piece inspired by still waters.",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: 4,
      title: "Fractured Dreams",
      description: "An introspective journey through fragmented memories.",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: 5,
      title: "Cosmic Dance",
      description: "Exploring the movement of celestial bodies.",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: 6,
      title: "Whispers of Nature",
      description: "Delicate forms inspired by organic structures.",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: 7,
      title: "Temporal Shift",
      description: "A visual representation of the passage of time.",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: 8,
      title: "Harmonic Dissonance",
      description: "Balancing order and chaos in visual composition.",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: 9,
      title: "Ethereal Boundaries",
      description: "Exploring the liminal spaces between reality and imagination.",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: 10,
      title: "Chromatic Odyssey",
      description: "A journey through the spectrum of human emotion.",
      image: "/placeholder.svg?height=600&width=800",
    },
  ]
  return artworks.find((artwork) => artwork.id === Number.parseInt(id))
}

export default function ArtworkPage({ params }: { params: { id: string } }) {
  const artwork = getArtwork(params.id)

  if (!artwork) {
    return <div>Artwork not found</div>
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <Link href="/oeuvre" className="mb-8 inline-block text-sm text-gray-400 hover:text-white">
          ← Back to Oeuvre
        </Link>
        <h1 className="mb-8 text-4xl font-light">{artwork.title}</h1>
        <div className="mb-8">
          <Image
            src={artwork.image || "/placeholder.svg"}
            alt={artwork.title}
            width={800}
            height={600}
            className="rounded-lg"
          />
        </div>
        <p className="text-lg text-gray-300">{artwork.description}</p>
        {/* You can add more detailed content for each artwork here */}
      </div>
      <MainNav className="fixed bottom-0 left-0 right-0" />
    </main>
  )
}

