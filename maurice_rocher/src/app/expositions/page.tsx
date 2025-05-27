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

          {/* <div className="p-6 mb-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row mb-8 pb-8 border-b border-gray-700">
          <div className="w-full md:w-1/3 mb-4 md:mb-0 md:pr-6 flex items-center justify-center">
            <SimpleAudioPlayer
              src="/song/ChoeurDesMoinesDeLAbbayeDeSolesmes.mp3"
              title="Chœur des moines de l'Abbaye de Solesmes - Noël: Matînes - Répons – Sancta"
            />
          </div>
          <div className="w-full md:w-2/3">
            <div className="bg-black bg-opacity-50 p-6 rounded-lg text-white h-full">
              <h2 className="text-xl md:text-2xl font-bold mb-4">Chœur des moines de l'Abbaye de Solesmes - Noël: Matînes - Répons – Sancta</h2>
              <p className="text-justify">
              MR aimait beaucoup écouter le chant grégorien à l'Abbaye de Solesmes. Il a
              rencontré là Maurice Denis et a ensuite été aux Ateliers d'Art Sacré avec lui et Georges
              Desvallières, puis il a été cofondateur et professeur au Centre d'Art Sacré.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row mb-8 pb-8 border-b border-gray-700">
          <div className="w-full md:w-1/3 mb-4 md:mb-0 md:pr-6 flex items-center justify-center">
            <SimpleAudioPlayer
              src="/song/SiguiriyasCruzadasDeJerez.mp3"
              title="Siguiriya Juan Romero Pantoja, guitarra Luis Morales"
            />
          </div>
          <div className="w-full md:w-2/3">
            <div className="bg-black bg-opacity-50 p-6 rounded-lg text-white h-full">
              <h2 className="text-xl md:text-2xl font-bold mb-4">Siguiriya Juan Romero Pantoja, guitarra Luis Morales</h2>
              <p className="text-justify">
              MR a fait de nombreux séjours en Espagne, Belgique, Italie, qui ont influencé son
              oeuvre. Il a été pensionnaire à la Casa Vélasquez, à Madrid. Il était passionné de
              Tauromachie et de Flamenco. "Tout est dit dans le "cante Jondo", ce chant profond où crie le sang de l'homme." - MR
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row mb-8 pb-8 border-b border-gray-700">
          <div className="w-full md:w-1/3 mb-4 md:mb-0 md:pr-6 flex items-center justify-center">
            <SimpleAudioPlayer
              src="/song/GUSTAVMAHLER.mp3"
              title="Symphonie n°9 adagio Gustav Malher Leonard Bernstein Wiener Philharmoniker"
            />
          </div>
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

        <div className="flex flex-col md:flex-row mb-8 pb-8 border-b border-gray-700">
          <div className="w-full md:w-1/3 mb-4 md:mb-0 md:pr-6 flex items-center justify-center">
            <SimpleAudioPlayer
              src="/song/SamiYusuf-Veritas.mp3"
              title="Sami Yusuf - Veritas (When Paths Meet)"
            />
          </div>
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
    </div> */}

          <h2
          className="text-3xl md:text-4xl font-light absolute px-8 mb-8 text-gray-300 md:ml-10"
        >
          Exposition en cours
        </h2>        
        <div className="w-full space-y-4 px-8 mt-24 mb-16">

          <div
            className="relative aspect-[4/3] w-full max-w-2xl mx-auto cursor-pointer transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl"
            onClick={() => setSelectedImage("/Galerie.png")}
          >
            <Image src="/Galerie.png" alt="Exposition Maurice Rocher" fill className="object-contain" />
          </div>

        </div>
        <h2
          className="text-3xl md:text-4xl font-light absolute px-8 mb-8 text-gray-300 md:ml-10"
        >
          Expositions passées
        </h2>  

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

          <div className="p-8  space-y-10">
            
            <p className="text-2xl bold leading-relaxed mt-6 text-justify">
              EXPOSITIONS
            </p>
            <ul className="text-sm md:text-md leading-relaxed mt-0 text-justify list-none space-y-2">
              <li>Galerie Catherine Pennec, Clermont-Ferrand, 2025</li>
              <li>Galerie Ories, Lyon, 2024</li>
              <li>Cabana Georgina, Marseille, 2024</li>
              <li>Musée Lambinet, " Versailles au XXe siècle, muse des artistes, " 2020</li>
              <li>Galerie Pierre Marie Vitoux, Paris, " Peintures expressionnistes  Visages-matière ", 2017</li>
              <li>Galerie Pierre Marie Vitoux, Paris, 2014</li>
              <li>Galerie Olivier Nouvellet, Paris, 2014</li>
              <li>Galerie Bourdette, Honfleur, 2014</li>
              <li>Galerie Zafman, Paris, " The Passion Paintings ", 2008</li>
              <li>Ville d'Evron, 5è Festival d'Arts Sacrés, Exposition Maurice Rocher, 2007</li>
              <li>Galerie Pierre Marie Vitoux, Paris, 2005, 2007</li>
              <li>Galerie Olivier Nouvellet, Paris, 1998, 2002, 2006</li>
              <li>Galerie 17, Clermont-Ferrand, 1998</li>
              <li>Musée d'art Roger-Quilliot, Clermont-Ferrand, " Rétrospective en 4 thèmes ", 1995</li>
              <li>Musée Lambinet, Versailles, " Oeuvres de 1965 à 1985 ", 1994</li>
              <li>Rétrospective à l'Abbaye de Saint-Riquier, (Somme), " Peintures 1981-1987 ", 1994</li>
              <li>Galerie Olivier Nouvellet, Paris, 1993</li>
              <li>Bibliothèque nationale de France, Paris, 1992 " De Bonnard à Baselitz - Dix ans d'enrichissements du cabinet des estampes, 1978-1988 "</li>
              <li>Galerie Pierre Marie Vitoux, Paris, 1991, 1992, 1996, 1997</li>
              <li>Rétrospective à la Chapelle de la Sorbonne, Paris, " Femmes et Visages ", 1991</li>
              <li>Rétrospective Couvent des Cordeliers, Châteauroux, 1988, " Peintures 1966-1986 "</li>
              <li>Rétrospective à l'Abbaye de Veruela Province de Saragosse, 1988</li>
              <li>Rétrospective à l'Abbaye de l'Escaladieu, Bonnemazon, Tarbes, 1988</li>
              <li>Centre d'Art Contemporain de Mont-de-Marsan, 1988</li>
              <li>Les figurations des années 60 à nos jours, exposition itinérante (Dunkerque, Cagnes-sur-Mer, Troyes, Carcassonne, Châteauroux), 1986-1987</li>
              <li>Rétrospective Musée de la Castre à Cannes, " L'Expressionnisme et le Sacré ", 1986</li>
              <li>Rétrospective Musée d'art moderne de Troyes, 1986</li>
              <li>Galerie Convergence, Nantes, 1982, 1986</li>
              <li>Rétrospective, Mairie du 18e arrondissement de Paris, 1985</li>
              <li>Rétrospective, Mairie du Chesnay, Le Chesnay (Versailles), 1985</li>
              <li>Galerie Suzanne Pons, Cannes, 1984, 1986</li>
              <li>Galerie Protée, Paris, 1983, 1984, 1988</li>
              <li>Galerie Serge Garnier, Paris, 1983</li>
              <li>Palais de l'Europe, Le Touquet, 1983</li>
              <li>Musée du Vieux Château, Laval, 1981</li>
              <li>L'hospitalet, Barèges, 1981</li>
              <li>Galerie Syn'art, Paris, 1980</li>
              <li>Galerie Anne Blanc, Marly-le-Roi, 1979</li>
              <li>L'hospitalet, Centre Culturel International, Barèges, " 40 Eglises 1952-1978 ", 1978</li>
              <li>Galeria Valle Orti, Valence, Espagne, 1978</li>
              <li>Maison des Arts, Thonon-les-Bains, 1977</li>
              <li>Galeria Altex, " Exposicion Antologica ", Madrid, Espagne, 1977</li>
              <li>C.M.A.M, Forum des Cholettes, Sarcelles, 1977</li>
              <li>Galerie Ariel, Paris, 1976, 1979</li>
              <li>Galerie Noëlla Gest, Saint-Rémy de Provence, 1976</li>
              <li>MJC Poterne des Peupliers, Paris, 1976</li>
              <li>MJC les Hauts de Belleville, Paris, Exposition itinérante dans les centres culturels français, 1976</li>
              <li>Centre d'animation culturel, Arles</li>
              <li>Château de Braux " Cent visages ", Sainte-Cohière, 1976</li>
              <li>Parc Régional d'Armorique, 1975</li>
              <li>Musée de l'Hôtel Sandelin, Saint-Omer, 1974</li>
              <li>Galerie Fouillen, Quimper, 1974</li>
              <li>Galerie Veranneman, Bruxelles, 1970</li>
              <li>Galerie de l 'A.P.I.A.W, Liège, 1970</li>
              <li>Paris, C.I.R.E.C. " Itinéraires " 1954-1968</li>
              <li>Galerie Jacques Massol, Paris, 1968, 1970, 1972</li>
              <li>Galerie Ariel, Paris, 1967</li>
              <li>Galerie Anne Colin, Paris, " 40 Visages ", 1965</li>
              <li>Galerie des Beaux-Arts, Rennes, 1965</li>
              <li>Galerie Alice Juillard, Versailles, 1964</li>
              <li>Galerie Drouant, Paris, 1964</li>
              <li>Galerie Saint-Placide, Paris, 1956</li>
              <li>Musée de Poitiers, 1953</li>
              <li>Association des amateurs de peinture, Galerie Jacques Leuvraix, Paris, janvier 1949</li>
              <li>Galerie des Beaux-Arts, Rennes, 1947</li>
            </ul>
            <p className="text-2xl bold leading-relaxed mt-6 text-justify">
              SALONS
            </p>
            <ul className="text-sm md:text-md leading-relaxed mt-0 text-justify list-none space-y-2">
              <li>Paris, Salon des Réalités nouvelles, 1968 à 1985</li>
              <li>Paris, Salon Grands et Jeunes d'Aujourd'hui, 1976 à 1981</li>
              <li>Téhéran, Première Exposition Internationale des Arts, décembre 1974 - janvier 1975</li>
              <li>Salon d'Automne, 1960 à 1970</li>
              <li>Tokyo, Exposition Internationale d'Art Figuratif, 1964</li>
              <li>Exposition Universelle de Bruxelles, 1958</li>
              <li>Paris, Biennale des Jeunes Artistes, 1957</li>
              <li>Paris, Musée Galliera, Célébrités et Révélations de la Peinture Contemporaine, 1953</li>
              <li>Paris, Galerie Charpentier, Cent Chefs-d'œuvre d'Art Sacré, 1952</li>
              <li>Paris, Salon d'Art Sacré, 1945-1949</li>
              <li>Paris, Salon des Moins de Trente ans, 1941</li>
            </ul>
            </div>

        <MainNav className="fixed top-0 left-0 right-0" />
      </div>
    </main>
  )
}
