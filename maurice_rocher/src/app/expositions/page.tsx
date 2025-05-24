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

          <div className="p-6 mb-10">
      <div className="max-w-6xl mx-auto">
        {/* Row 1 */}
        <div className="flex flex-col md:flex-row mb-8 pb-8 border-b border-gray-700">
          {/* Audio player on the left */}
          <div className="w-full md:w-1/3 mb-4 md:mb-0 md:pr-6 flex items-center justify-center">
            <SimpleAudioPlayer
              src="/song/ChoeurDesMoinesDeLAbbayeDeSolesmes.mp3"
              title="Chœur des moines de l’Abbaye de Solesmes - Noël: Matînes - Répons – Sancta"
            />
          </div>
          {/* Text content on the right */}
          <div className="w-full md:w-2/3">
            <div className="bg-black bg-opacity-50 p-6 rounded-lg text-white h-full">
              <h2 className="text-xl md:text-2xl font-bold mb-4">Chœur des moines de l’Abbaye de Solesmes - Noël: Matînes - Répons – Sancta</h2>
              <p className="text-justify">
              MR aimait beaucoup écouter le chant grégorien à l’Abbaye de Solesmes. Il a
              rencontré là Maurice Denis et a ensuite été aux Ateliers d’Art Sacré avec lui et Georges
              Desvallières, puis il a été cofondateur et professeur au Centre d’Art Sacré.
              </p>
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex flex-col md:flex-row mb-8 pb-8 border-b border-gray-700">
          {/* Audio player on the left */}
          <div className="w-full md:w-1/3 mb-4 md:mb-0 md:pr-6 flex items-center justify-center">
            <SimpleAudioPlayer
              src="/song/SiguiriyasCruzadasDeJerez.mp3"
              title="Siguiriya Juan Romero Pantoja, guitarra Luis Morales"
            />
          </div>
          {/* Text content on the right */}
          <div className="w-full md:w-2/3">
            <div className="bg-black bg-opacity-50 p-6 rounded-lg text-white h-full">
              <h2 className="text-xl md:text-2xl font-bold mb-4">Siguiriya Juan Romero Pantoja, guitarra Luis Morales</h2>
              <p className="text-justify">
              MR a fait de nombreux séjours en Espagne, Belgique, Italie, qui ont influencé son
              oeuvre. Il a été pensionnaire à la Casa Vélasquez, à Madrid. Il était passionné de
              Tauromachie et de Flamenco. “Tout est dit dans le “cante Jondo”, ce chant profond où crie le sang de l’homme.” - MR
              </p>
            </div>
          </div>
        </div>

        {/* Row 3 */}
        <div className="flex flex-col md:flex-row mb-8 pb-8 border-b border-gray-700">
          {/* Audio player on the left */}
          <div className="w-full md:w-1/3 mb-4 md:mb-0 md:pr-6 flex items-center justify-center">
            <SimpleAudioPlayer
              src="/song/GUSTAVMAHLER.mp3"
              title="Symphonie n°9 adagio Gustav Malher Leonard Bernstein Wiener Philharmoniker"
            />
          </div>
          {/* Text content on the right */}
          <div className="w-full md:w-2/3">
            <div className="bg-black bg-opacity-50 p-6 rounded-lg text-white h-full">
              <h2 className="text-xl md:text-2xl font-bold mb-4">Symphonie n°9 adagio Gustav Malher Leonard Bernstein Wiener Philharmoniker</h2>
              <p className="text-justify">
              MR a été très marqué par le film de Visconti Mort à Venise dont le personnage
              principal est inspiré de Gustav Mahler, il aimait beaucoup la musique de ce
              compositeur, dont les Kindertotenlieder.
              </p>
            </div>
          </div>
        </div>

        {/* Row 4 */}
        {/* <div className="flex flex-col md:flex-row mb-8 pb-8 border-b border-gray-700">
          <div className="w-full md:w-1/3 mb-4 md:mb-0 md:pr-6 flex items-center justify-center">
            <SimpleAudioPlayer
              src="/GUSTAVMAHLERSymphonyNo9.mp3"
              title="Alim Qasimov Ayriliq Negmesi - Im Traum Wird Geschlafen"
            />
          </div>
          <div className="w-full md:w-2/3">
            <div className="bg-black bg-opacity-50 p-6 rounded-lg text-white h-full">
              <h2 className="text-xl md:text-2xl font-bold mb-4">Alim Qasimov Ayriliq Negmesi - Im Traum Wird Geschlafen</h2>
              <p className="text-justify">
               Cri de Fête ou cri de Douleur à Dieu.
              </p>
            </div>
          </div>
        </div> */}


        {/* Row 5 */}
        <div className="flex flex-col md:flex-row mb-8 pb-8 border-b border-gray-700">
          {/* Audio player on the left */}
          <div className="w-full md:w-1/3 mb-4 md:mb-0 md:pr-6 flex items-center justify-center">
            <SimpleAudioPlayer
              src="/song/SamiYusuf-Veritas.mp3"
              title="Sami Yusuf - Veritas (When Paths Meet)"
            />
          </div>
          {/* Text content on the right */}
          <div className="w-full md:w-2/3">
            <div className="bg-black bg-opacity-50 p-6 rounded-lg text-white h-full">
              <h2 className="text-xl md:text-2xl font-bold mb-4">Sami Yusuf - Veritas (When Paths Meet)</h2>
              <p className="text-justify">
               Cri de Fête ou cri de Douleur à Dieu.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>

          <h2
          className="text-3xl md:text-4xl font-light absolute px-8 mb-8 text-gray-300 md:ml-10"
        >
          Exposition en cours
        </h2>        
        <div className="w-full space-y-4 px-8 mb-16">
          {/* First image - full width on top */}
          <div
            className="relative aspect-[3/4] w-full max-w-2xl mx-auto cursor-pointer transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl"
            onClick={() => setSelectedImage("/Galerie.png")}
          >
            <Image src="/Galerie.png" alt="Exposition Maurice Rocher" fill className="object-contain" />
          </div>

          {/* Two images side by side below */}
          <div className="grid w-full grid-cols-1 items-start gap-8 lg:grid-cols-2">
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
