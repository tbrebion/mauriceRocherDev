import Image from "next/image"
import Link from "next/link"
import { MainNav } from "@/components/main-nav"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Oeuvres",
  description: "Oeuvres de Maurice Rocher",
};

const artworks = [
  {
    id: 1,
    title: "1 - Supplicié-vitrail	et	Vitraux",
    image: "/rubriques/one/1SUPPLICIE.jpg",
  },
  {
    id: 2,
    title: "2 - Période	Brune",
    image: "/rubriques/two/4_8.jpg",
  },
  {
    id: 3,
    title: "3 - Du Bouquet Rose au Rouge",
    image: "/rubriques/three/10_0.JPG",
  },
  {
    id: 4,
    title: "4 - La	Révolte...	aux	Eglises-femme",
    image: "/rubriques/four/11_0.jpg",
  },
  {
    id: 5,
    title: "5 - Notables",
    image: "/rubriques/five/17_1.jpg",
  },
  {
    id: 6,
    title: "6 - Visages	vers	le	Ciel",
    image: "/rubriques/six/17_4.jpg",
  },
  {
    id: 7,
    title: "7 - Masques",
    image: "/rubriques/seven/22_0.jpg",
  },
  {
    id: 8,
    title: "8 - Couples	de	la	Passion		Femmes	aux	Seins",
    image: "/rubriques/eight/25_7.jpg",
  },
  {
    id: 9,
    title: "9 - Suppliciés	'Je	les	peignais	en	alternance	avec	les	Couples.'	MR",
    image: "/rubriques/nine/26_2.jpg",
  },
  {
    id: 10,
    title: "10 - Suppliciées	Ange	Noir	Couples	des	Cendres...	au	Supplicié-vitrail",
    image: "/rubriques/ten/29_1.jpg",
  },
]

export default function OeuvrePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="pt-24">
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
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <MainNav className="fixed top-0 left-0 right-0" />
    </main>
  )
}

