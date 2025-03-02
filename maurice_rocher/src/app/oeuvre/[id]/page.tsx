import Link from "next/link"
import { MainNav } from "@/components/main-nav"
import { Gallery } from "@/components/gallery"

// This is now a static object instead of a function
const sections = [
  { id: 1, title: "Supplicié-vitrail	et	Vitraux", description: "The formative years of artistic exploration." },
  { id: 2, title: "Période	Brune", description: "A journey into non-representational art." },
  { id: 3, title: "Du Bouquet Rose au Rouge", description: "Inspired by the beauty of the natural world." },
  { id: 4, title: "La	Révolte...	aux	Eglises-femme", description: "Capturing the essence of city life." },
  { id: 5, title: "Notables", description: "Exploring the human form and expression." },
  { id: 6, title: "Visages	vers	le	Ciel", description: "Pushing the boundaries of conventional art." },
  { id: 7, title: "Masques", description: "Three-dimensional explorations of form." },
  { id: 8, title: "Couples	de	la	Passion		Femmes	aux	Seins", description: "Embracing technology in artistic expression." },
  { id: 9, title: "Suppliciés	'Je	les	peignais	en	alternance	avec	les	Couples.'	MR", description: "Works created with fellow artists." },
  { id: 10, title: "Suppliciées	Ange	Noir	Couples	des	Cendres...	au	Supplicié-vitrail", description: "The latest creations and ongoing projects." },
]

// This is now a static object with artworks for each section
const artworksPerSection = {
  "1": [
    {
      id: 1,
      title: "First Steps",
      description: "The artist's earliest work",
      image: "/rubriques/one/1SUPPLICIE.jpg",
    },
    {
      id: 2,
      title: "Foundations",
      description: "Exploring basic techniques",
      image: "/rubriques/one/1_2SUPPLICIE.jpg",
    },
    {
      id: 3,
      title: "Emerging Style",
      description: "The beginnings of a unique voice",
      image: "/rubriques/one/1_3VITRAIL.jpg",
    },
    {
      id: 4,
      title: "Emerging Style",
      description: "The beginnings of a unique voice",
      image: "/rubriques/one/1_4VITRAIL.jpg",
    },
    {
      id: 5,
      title: "Emerging Style",
      description: "The beginnings of a unique voice",
      image: "/rubriques/one/1_5VITRAIL.jpg",
    },
    {
      id: 6,
      title: "Emerging Style",
      description: "The beginnings of a unique voice",
      image: "/rubriques/one/1_6VITRAIL.jpg",
    },
    {
      id: 7,
      title: "Emerging Style",
      description: "The beginnings of a unique voice",
      image: "/rubriques/one/1_7VITRAIL.jpg",
    },
    {
      id: 8,
      title: "Emerging Style",
      description: "The beginnings of a unique voice",
      image: "/rubriques/one/1_8CROQUIS.jpg",
    },
    {
      id: 9,
      title: "Emerging Style",
      description: "The beginnings of a unique voice",
      image: "/rubriques/one/1_9EGLISE.jpg",
    },
    {
      id: 10,
      title: "Emerging Style",
      description: "The beginnings of a unique voice",
      image: "/rubriques/one/2_1MAQUETTE.jpg",
    },
    {
      id: 11,
      title: "Emerging Style",
      description: "The beginnings of a unique voice",
      image: "/rubriques/one/2_2VITRAUX.jpg",
    },
    {
      id: 12,
      title: "Emerging Style",
      description: "The beginnings of a unique voice",
      image: "/rubriques/one/2_3GUADALAJARA.jpg",
    },
    {
      id: 13,
      title: "Emerging Style",
      description: "The beginnings of a unique voice",
      image: "/rubriques/one/2_4BASILIQUE.jpg",
    },
    {
      id: 14,
      title: "Emerging Style",
      description: "The beginnings of a unique voice",
      image: "/rubriques/one/2_5_LES_SAINTS.jpg",
    },
    {
      id: 15,
      title: "Emerging Style",
      description: "The beginnings of a unique voice",
      image: "/rubriques/one/2_6EGLISE.jpg",
    },
    {
      id: 16,
      title: "Emerging Style",
      description: "The beginnings of a unique voice",
      image: "/rubriques/one/2_7CHAPELLE.jpg",
    },
    {
      id: 17,
      title: "Emerging Style",
      description: "The beginnings of a unique voice",
      image: "/rubriques/one/2_8EGLISE.jpg",
    },
    {
      id: 18,
      title: "Emerging Style",
      description: "The beginnings of a unique voice",
      image: "/rubriques/one/2_9CENTREdART.jpg",
    },
    {
      id: 19,
      title: "Emerging Style",
      description: "The beginnings of a unique voice",
      image: "/rubriques/one/3_0MAURICEROCHER.jpg",
    },
    {
      id: 20,
      title: "Emerging Style",
      description: "The beginnings of a unique voice",
      image: "/rubriques/one/3_1FRESQUE.JPG",
    },
  ],
  "2": [
    {
      id: 1,
      title: "Color Fields",
      description: "Experiments in pure color",
      image: "/rubriques/two/3_2.jpg",
    },
    {
      id: 2,
      title: "Geometric Harmony",
      description: "Balancing shapes and forms",
      image: "/rubriques/two/3_3.JPG",
    },
    {
      id: 3,
      title: "Emotional Abstractions",
      description: "Conveying feelings through non-representational art",
      image: "/rubriques/two/3_4.JPG",
    },
    {
      id: 4,
      title: "Emotional Abstractions",
      description: "Conveying feelings through non-representational art",
      image: "/rubriques/two/3_5.JPG",
    },
    {
      id: 5,
      title: "Emotional Abstractions",
      description: "Conveying feelings through non-representational art",
      image: "/rubriques/two/3_6.jpg",
    },
    {
      id: 6,
      title: "Emotional Abstractions",
      description: "Conveying feelings through non-representational art",
      image: "/rubriques/two/3_7.jpg",
    },
    {
      id: 7,
      title: "Emotional Abstractions",
      description: "Conveying feelings through non-representational art",
      image: "/rubriques/two/3_8.JPG",
    },
    {
      id: 8,
      title: "Emotional Abstractions",
      description: "Conveying feelings through non-representational art",
      image: "/rubriques/two/3_9.jpg",
    },
    {
      id: 9,
      title: "Emotional Abstractions",
      description: "Conveying feelings through non-representational art",
      image: "/rubriques/two/4_0.jpg",
    },
    {
      id: 10,
      title: "Emotional Abstractions",
      description: "Conveying feelings through non-representational art",
      image: "/rubriques/two/4_1.jpg",
    },
    {
      id: 11,
      title: "Emotional Abstractions",
      description: "Conveying feelings through non-representational art",
      image: "/rubriques/two/4_2.jpg",
    },
    {
      id: 12,
      title: "Emotional Abstractions",
      description: "Conveying feelings through non-representational art",
      image: "/rubriques/two/4_3.jpg",
    },
    {
      id: 13,
      title: "Emotional Abstractions",
      description: "Conveying feelings through non-representational art",
      image: "/rubriques/two/4_4.jpg",
    },
    {
      id: 14,
      title: "Emotional Abstractions",
      description: "Conveying feelings through non-representational art",
      image: "/rubriques/two/4_5.jpg",
    },
    {
      id: 15,
      title: "Emotional Abstractions",
      description: "Conveying feelings through non-representational art",
      image: "/rubriques/two/4_6.jpg",
    },
    {
      id: 16,
      title: "Emotional Abstractions",
      description: "Conveying feelings through non-representational art",
      image: "/rubriques/two/4_7.jpg",
    },
    {
      id: 17,
      title: "Emotional Abstractions",
      description: "Conveying feelings through non-representational art",
      image: "/rubriques/two/4_8.jpg",
    },
    {
      id: 18,
      title: "Emotional Abstractions",
      description: "Conveying feelings through non-representational art",
      image: "/rubriques/two/4_9.jpg",
    },
    {
      id: 19,
      title: "Emotional Abstractions",
      description: "Conveying feelings through non-representational art",
      image: "/rubriques/two/5_0.jpg",
    },
    {
      id: 20,
      title: "Emotional Abstractions",
      description: "Conveying feelings through non-representational art",
      image: "/rubriques/two/5_1.jpg",
    },
    {
      id: 21,
      title: "Emotional Abstractions",
      description: "Conveying feelings through non-representational art",
      image: "/rubriques/two/5_2.jpg",
    },
    {
      id: 22,
      title: "Emotional Abstractions",
      description: "Conveying feelings through non-representational art",
      image: "/rubriques/two/5_3.jpg",
    },
    {
      id: 23,
      title: "Emotional Abstractions",
      description: "Conveying feelings through non-representational art",
      image: "/rubriques/two/5_4.jpg",
    },
    {
      id: 24,
      title: "Emotional Abstractions",
      description: "Conveying feelings through non-representational art",
      image: "/rubriques/two/5_5.jpg",
    },
    {
      id: 25,
      title: "Emotional Abstractions",
      description: "Conveying feelings through non-representational art",
      image: "/rubriques/two/5_6.jpg",
    },
    {
      id: 26,
      title: "Emotional Abstractions",
      description: "Conveying feelings through non-representational art",
      image: "/rubriques/two/5_7.jpg",
    },
    {
      id: 27,
      title: "Emotional Abstractions",
      description: "Conveying feelings through non-representational art",
      image: "/rubriques/two/5_8.jpg",
    },
    {
      id: 28,
      title: "Emotional Abstractions",
      description: "Conveying feelings through non-representational art",
      image: "/rubriques/two/5_9.jpg",
    },
    {
      id: 29,
      title: "Emotional Abstractions",
      description: "Conveying feelings through non-representational art",
      image: "/rubriques/two/6_0.jpg",
    },
    {
      id: 30,
      title: "Emotional Abstractions",
      description: "Conveying feelings through non-representational art",
      image: "/rubriques/two/6_1.jpg",
    },
    {
      id: 31,
      title: "Emotional Abstractions",
      description: "Conveying feelings through non-representational art",
      image: "/rubriques/two/6_2.jpg",
    },
    {
      id: 32,
      title: "Emotional Abstractions",
      description: "Conveying feelings through non-representational art",
      image: "/rubriques/two/6_3.jpg",
    },
    {
      id: 33,
      title: "Emotional Abstractions",
      description: "Conveying feelings through non-representational art",
      image: "/rubriques/two/6_4.jpg",
    },
    {
      id: 34,
      title: "Emotional Abstractions",
      description: "Conveying feelings through non-representational art",
      image: "/rubriques/two/6_5.jpg",
    },
    {
      id: 35,
      title: "Emotional Abstractions",
      description: "Conveying feelings through non-representational art",
      image: "/rubriques/two/6_6.jpg",
    },
    {
      id: 36,
      title: "Emotional Abstractions",
      description: "Conveying feelings through non-representational art",
      image: "/rubriques/two/6_7.jpg",
    },
    {
      id: 37,
      title: "Emotional Abstractions",
      description: "Conveying feelings through non-representational art",
      image: "/rubriques/two/6_8.jpg",
    },
    {
      id: 38,
      title: "Emotional Abstractions",
      description: "Conveying feelings through non-representational art",
      image: "/rubriques/two/6_9.jpg",
    },
    {
      id: 39,
      title: "Emotional Abstractions",
      description: "Conveying feelings through non-representational art",
      image: "/rubriques/two/7_0.png",
    },
    {
      id: 40,
      title: "Emotional Abstractions",
      description: "Conveying feelings through non-representational art",
      image: "/rubriques/two/7_1.jpg",
    },
    {
      id: 41,
      title: "Emotional Abstractions",
      description: "Conveying feelings through non-representational art",
      image: "/rubriques/two/7_2.jpg",
    },
    {
      id: 42,
      title: "Emotional Abstractions",
      description: "Conveying feelings through non-representational art",
      image: "/rubriques/two/7_3.jpg",
    },
    {
      id: 43,
      title: "Emotional Abstractions",
      description: "Conveying feelings through non-representational art",
      image: "/rubriques/two/7_4.JPG",
    },
    {
      id: 44,
      title: "Emotional Abstractions",
      description: "Conveying feelings through non-representational art",
      image: "/rubriques/two/7_5.JPG",
    },
    {
      id: 45,
      title: "Emotional Abstractions",
      description: "Conveying feelings through non-representational art",
      image: "/rubriques/two/7_6.jpg",
    },
    {
      id: 46,
      title: "Emotional Abstractions",
      description: "Conveying feelings through non-representational art",
      image: "/rubriques/two/7_7.jpg",
    },
    {
      id: 47,
      title: "Emotional Abstractions",
      description: "Conveying feelings through non-representational art",
      image: "/rubriques/two/7_8.jpg",
    },
    {
      id: 48,
      title: "Emotional Abstractions",
      description: "Conveying feelings through non-representational art",
      image: "/rubriques/two/7_9.jpg",
    },
    {
      id: 49,
      title: "Emotional Abstractions",
      description: "Conveying feelings through non-representational art",
      image: "/rubriques/two/8_0.jpg",
    },
    {
      id: 50,
      title: "Emotional Abstractions",
      description: "Conveying feelings through non-representational art",
      image: "/rubriques/two/8_1.JPG",
    },
    {
      id: 51,
      title: "Emotional Abstractions",
      description: "Conveying feelings through non-representational art",
      image: "/rubriques/two/8_2.jpg",
    },
    {
      id: 52,
      title: "Emotional Abstractions",
      description: "Conveying feelings through non-representational art",
      image: "/rubriques/two/8_3.jpg",
    },
    {
      id: 53,
      title: "Emotional Abstractions",
      description: "Conveying feelings through non-representational art",
      image: "/rubriques/two/8_4.jpg",
    },
    {
      id: 54,
      title: "Emotional Abstractions",
      description: "Conveying feelings through non-representational art",
      image: "/rubriques/two/8_5.jpg",
    },
  ],
  // Add more sections here with their respective artworks
}

export default function SectionPage({ params }: { params: { id: string } }) {
  const section = sections.find((s) => s.id === Number.parseInt(params.id))
  const artworks = artworksPerSection[params.id as keyof typeof artworksPerSection] || []

  if (!section) {
    return <div>Section not found</div>
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="pb-24">
        <div className="mb-8 p-8">
          <Link href="/oeuvre" className="mb-4 inline-block text-sm text-gray-400 hover:text-white">
            ← Back to Oeuvre
          </Link>
          <h1 className="mb-2 text-4xl font-light">{section.title}</h1>
          <p className="text-lg text-gray-300">{section.description}</p>
        </div>
        <Gallery artworks={artworks} />
      </div>
      <MainNav className="fixed bottom-0 left-0 right-0" />
    </main>
  )
}

