"use client"

import Image from "next/image"
import { MainNav } from "@/components/main-nav"
import { useState } from "react"
import { X } from "lucide-react"
import VideoPlayer from "@/components/videoPlayer"
export default function Home() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const openImage = (imageNum: number) => {
    setSelectedImage(imageNum)
  }

  const closeImage = () => {
    setSelectedImage(null)
  }

  return (
    <main className="relative bg-black text-white">
      <div className="flex flex-col pt-24">
        {/* Main content area */}
        <div className="flex items-center justify-center px-4">
          <div className="w-full md:w-[90vw] space-y-8 py-12">
            {/* Two-column layout */}
            <div className="flex flex-col md:flex-row gap-8">
              {/* Left column with first image and 5 images below */}
              <div className="w-full md:w-1/2 space-y-6">
                {/* First image (clickable) */}
                <div className="relative h-[50vh] md:h-[60vh]">
                  <a
                    href="https://www.catherinepennec.com/fr/expositions/expositions-%C3%A0-venir/"
                    target="_blank"
                    className="block h-full relative w-full"
                    rel="noreferrer"
                  >
                    <Image
                      src="/expositions/1_EXPOSITION.PNG"
                      alt="First Artwork"
                      fill
                      className="object-contain transition-opacity duration-300 hover:opacity-60"
                      priority
                    />
                  </a>
                </div>
                {/* 5 images below - 3 on top, 2 centered below */}
                <div className="grid grid-cols-1 gap-4">
                  {/* Top row with 3 images */}
                  <div className="grid grid-cols-3 gap-4">
                    {[1, 2, 3].map((num) => (
                      <div key={num} className="relative h-32 md:h-40 cursor-pointer" onClick={() => openImage(num)}>
                        <Image
                          src={`/vernissage/VERNISSAGE_${num}.jpg`}
                          alt={`Gallery image ${num}`}
                          fill
                          className="object-cover rounded-md transition-opacity duration-300 hover:opacity-60"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Middle row with 2 images */}
                  <div className="grid grid-cols-2 gap-4">
                    {[4, 5].map((num) => (
                      <div
                        key={num}
                        className="relative h-48 md:h-64 cursor-pointer"
                        onClick={() => openImage(num)}
                      >
                        <Image
                          src={`/vernissage/VERNISSAGE_${num}.jpg`}
                          alt={`Gallery image ${num}`}
                          fill
                          className="object-cover rounded-md transition-opacity duration-300 hover:opacity-60"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Bottom row with 1 image */}
                  <div className="grid grid-cols-1 gap-4">
                    <div
                      className="relative h-72 md:h-[85vh] cursor-pointer"
                      onClick={() => openImage(6)}
                    >
                      <Image
                        src="/vernissage/VERNISSAGE_6.jpg"
                        alt="Gallery image 6"
                        fill
                        className="object-cover rounded-md transition-opacity duration-300 hover:opacity-60"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center w-full  pb-12 pt-[14vh]">
                  <VideoPlayer />
                </div>
              </div>

              {/* Right column with text */}
              {/* <div className="w-full flex flex-col gap-4"> */}

                  <div className="flex flex-col w-full md:w-1/2 p-4">
                  <div className="flex flex-col gap-4 text-justify">
                    <h2 className="text-2xl font-bold mb-4">ARTEFACT FUTURIEL</h2>
                    <p className="mb-4">
                      Un des buts de l'exposition: attirer l'attention sur l'Art de Maurice Rocher pour les générations plus
                      jeunes. Actuellement il est très connu par des gens plus âgés.
                    </p>
                    <p className="mb-4">
                      Je remercie la Galériste Catherine Pennec ainsi que Catherine Haas et Antoine Canet - déjà
                      Commissaires d'exposition en 1995 pour la Rétrospective de MR au Musée de Clermont-Ferrand - pour leur
                      efficacité et leur créativité dans la préparation et la réalisation de cette exposition magnifique que
                      je qualifierai de percutante.
                    </p>
                    <p className="mb-4">
                      Quel artefact ! Beaucoup de monde au Vernissage, différentes générations dont des jeunes. Des gens qui
                      connaissent MR. D'autres qui ne le connaissent pas et ont été très attentifs aux explications
                      données sur la peinture par les connaisseurs aux différents endroits de la galerie et ont trouvé un
                      réel intérêt à son œuvre.
                    </p>
                    <p className="mb-4">
                      Une belle présentation des capacités de l'art de MR, une organisation de l'espace d'exposition qui met
                      en valeur beaucoup de toiles, de différents formats, de différentes périodes, de différents thèmes,
                      l'Eglise, les Notables, la Femme, les Suppliciés... ainsi que d'autres supports, gouaches,
                      visages-matière, monotypes... sur les fonds immaculés les oeuvres ont la parole.
                    </p>
                    <p className="mb-4">
                      Mon impression personnelle dans cette préparation de l'exposition en regardant et en choisissant
                      toutes ces toiles : cela me rappelle des choses intéressantes de mon enfance, le retable baroque ,
                      c'est l'Espagne où mon père nous emmenait, l'église classique, c'est Versailles et son Atelier. Par
                      les toiles la personnalité de MR est dévoilée.
                    </p>
                    <p className="mb-4">
                      Comment l'art, l'âme, l'intellect, la personnalité de MR ont influencé ma vie personnelle, mes
                      évènements, expositions, rencontres... Son art était bien relié avec la vie de sa famille, de ses
                      enfants, il m'a rendue créative. La grande âme de MR m'a donné des forces, m'a fait faire le lien
                      entre ma vie spirituelle et son art. La spiritualité, permet de regarder le monde profondément,
                    </p>
                    <p className="mb-4">
                      Je remercie les personnes qui manifestent de l'intérêt pour MR dont l'œuvre n'est pas artificielle.{" "}
                      <br />
                      Par son visionnarisme, Maurice Rocher m'a fait comprendre l'essentiel et peut transmettre ce message
                      universel à tous. C'est pourquoi cette exposition est si importante.
                    </p>
                    <p>Claire Rocher</p>
                    <div className="flex flex-col items-center justify-center w-full  pb-12 pt-[14vh]">
                      <div className="relative h-[50vh] md:h-[90vh] w-full">
                        <Image src="/vernissage/Article.JPG" alt="Featured Artwork Right" fill className="object-contain" />
                      </div>
                    </div>
                  </div>
                  </div>
                </div>
              {/* </div> */}

            {/* Second image (original) - untouched */}
            <div className="relative h-[90vh] w-full">
              <div className="flex flex-col items-center justify-center md:mt-24 mt-12">
                <h2 className="text-2xl font-bold mb-4 text-center">L'ANGE NOIR</h2>
                <Image src="/rubriques/ten/29_9.jpg" alt="Featured Artwork" fill className="object-contain md:mt-24 -mt-12" />
              </div>
            </div>
            {/* <div className="flex flex-col md:flex-row h-[80vh] md:h-[80vh] w-full gap-4"> */}
              {/* <div className="relative flex-1"> */}
                {/* <Image src="/vernissage/Article.JPG" alt="Featured Artwork Right" fill className="object-contain" /> */}
              {/* </div> */}
              {/* <div className="relative flex-1"> */}
                {/* <Image src="/rubriques/ten/29_9.jpg" alt="Featured Artwork Left" fill className="object-contain" /> */}
              {/* </div> */}
            {/* </div> */}
          </div>
        </div>

        {/* Fixed navigation */}
        <MainNav className="fixed top-0 left-0 right-0" />
      </div>

      {/* Fullscreen Image Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-5xl h-[80vh]">
            <button
              onClick={closeImage}
              className="absolute top-4 right-4 z-10 bg-black bg-opacity-50 rounded-full p-2 text-white hover:bg-opacity-70 transition-all"
              aria-label="Close"
            >
              <X size={24} />
            </button>
            <Image
              src={`/vernissage/VERNISSAGE_${selectedImage}.jpg`}
              alt={`Gallery image ${selectedImage} fullscreen`}
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </main>
  )
}
