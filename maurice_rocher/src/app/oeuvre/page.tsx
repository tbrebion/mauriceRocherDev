import Image from "next/image"
import Link from "next/link"
import { MainNav } from "@/components/main-nav"

const artworks = [
  {
    id: 1,
    title: "Supplicié-vitrail	et	Vitraux",
    image: "/rubriques/one/1SUPPLICIE.jpg",
  },
  {
    id: 2,
    title: "Période	Brune",
    image: "/rubriques/two/3_2.jpg",
  },
  {
    id: 3,
    title: "Du Bouquet Rose au Rouge",
    image: "/rubriques/three/8_6.JPG",
  },
  {
    id: 4,
    title: "La	Révolte...	aux	Eglises-femme",
    image: "/rubriques/four/11_0.jpg",
  },
  {
    id: 5,
    title: "Notables",
    image: "/rubriques/five/14_3.jpg",
  },
  {
    id: 6,
    title: "Visages	vers	le	Ciel",
    image: "/rubriques/six/17_3MONTAGE.jpg",
  },
  {
    id: 7,
    title: "Masques",
    image: "/rubriques/seven/20_1FEMME.jpg",
  },
  {
    id: 8,
    title: "Couples	de	la	Passion		Femmes	aux	Seins",
    image: "/rubriques/eight/24_2COUPLE.jpg",
  },
  {
    id: 9,
    title: "Suppliciés	'Je	les	peignais	en	alternance	avec	les	Couples.'	MR",
    image: "/rubriques/nine/26_2COUPLE.jpg",
  },
  {
    id: 10,
    title: "Suppliciées	Ange	Noir	Couples	des	Cendres...	au	Supplicié-vitrail",
    image: "/rubriques/ten/29_1FEMME.jpg",
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

