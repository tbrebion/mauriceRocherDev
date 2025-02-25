import Image from "next/image"
import Link from "next/link"
import { MainNav } from "@/components/main-nav"

const artworks = [
  {
    id: 1,
    title: "Sunrise Melody",
    description: "A vibrant exploration of color and light.",
    image: "/Carti.jpeg",
  },
  {
    id: 2,
    title: "Urban Rhythms",
    description: "Capturing the pulse of city life through abstract forms.",
    image: "/spike.jpg",
  },
  {
    id: 3,
    title: "Serene Reflections",
    description: "A meditative piece inspired by still waters.",
    image: "/Carti.jpeg",
  },
  {
    id: 4,
    title: "Fractured Dreams",
    description: "An introspective journey through fragmented memories.",
    image: "/spike.jpg",
  },
  {
    id: 5,
    title: "Cosmic Dance",
    description: "Exploring the movement of celestial bodies.",
    image: "/Carti.jpeg",
  },
  {
    id: 6,
    title: "Whispers of Nature",
    description: "Delicate forms inspired by organic structures.",
    image: "/spike.jpg",
  },
  {
    id: 7,
    title: "Temporal Shift",
    description: "A visual representation of the passage of time.",
    image: "/Carti.jpeg",
  },
  {
    id: 8,
    title: "Harmonic Dissonance",
    description: "Balancing order and chaos in visual composition.",
    image: "/spike.jpg",
  },
  {
    id: 9,
    title: "Ethereal Boundaries",
    description: "Exploring the liminal spaces between reality and imagination.",
    image: "/Carti.jpeg",
  },
  {
    id: 10,
    title: "Chromatic Odyssey",
    description: "A journey through the spectrum of human emotion.",
    image: "/spike.jpg",
  },
]

export default function OeuvrePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="pb-24">
        {" "}
        {/* Added padding at the bottom for the fixed navbar */}
        <h1 className="mb-8 py-8 text-center text-4xl font-light">Oeuvre</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
          {artworks.map((artwork) => (
            <Link key={artwork.id} href={`/oeuvre/${artwork.id}`} className="group block">
              <div className="relative aspect-square">
                <Image
                  src={artwork.image || "/placeholder.svg"}
                  alt={artwork.title}
                  fill
                  className="object-cover duration-300 ease-in-out transition-opacity hover:opacity-30"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                  <h2 className="text-lg font-semibold">{artwork.title}</h2>
                  <p className="mt-1 text-sm text-gray-300">{artwork.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <MainNav className="fixed bottom-0 left-0 right-0" />
    </main>
  )
}

