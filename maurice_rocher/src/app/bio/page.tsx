import Image from "next/image"
import { MainNav } from "@/components/main-nav"

export default function BiographyPage() {
  return (
    <main className="flex flex-col h-full w-full bg-black text-white pt-8 pb-36">
      <div className="flex-1 mx-auto w-full max-w-7xl pt-24">
        {/* First Section */}
        <div className="grid w-full grid-cols-1 items-start gap-16 px-8 lg:grid-cols-2 min-h-screen mb-16">
          <div className="relative w-full h-full">
            <Image src="/bio/bio-1.jpg" alt="Maurice Rocher" fill className="object-cover rounded-md" />
          </div>
          <div className="space-y-12">
            <h1 className="text-4xl md:text-5xl font-light">Maurice Rocher</h1>
            <section>
              <h2 className="text-2xl md:text-3xl font-light mb-6">Biographie</h2>
              <p className="text-lg leading-relaxed mb-6">
                Né le 1er Août 1918 à Evron, Mayenne, ascendances paysannes et artisanales, père employé des chemins de de
                fer, vit à Evron, Mayenne, jusqu'en 1930. Grand-oncle peintre portraitiste à Laval, commence à peindre à
                quatorze ans. études au Mans, de 1930 à 1936, école des Arts Appliqués, Le Mans, 1934-1936. En 1936, voyage
                en Belgique, découverte des Expressionnistes flamands, rencontre de Maurice Denis à l'Abbaye de Solesmes.
                1936-1939, Paris, école des Beaux-Arts et Ateliers d'Art Sacré avec Maurice Denis et Georges Desvallières,
                période mystique, peintures à sujets religieux, vitraux et fresques, nombreux séjours à l'abbaye de
                Solesmes.
              </p>
              <p className="text-lg leading-relaxed">
                Se marie en février 1944 avec Geneviève Chevard. Cinq enfants de 1944 à 1952. 1947, professeur aux Ateliers
                d'Art Sacré, fondés par Maurice Denis, cofondateur et professeur au Centre d'Art Sacré, 1948-1952.
                Pensionnaire à la Casa Vélasquez, Madrid, 1949-1950. 1952, prix de la Jeune Peinture, Paris de 1944 à 1976,
                nombreux séjours en Espagne, Belgique, Italie, vit à paris de 1944 à 1950, à Versailles et près de
                Versailles depuis 1950. Meurt le 12 juillet 1995.
              </p>
            </section>
          </div>
        </div>

        {/* Second Section */}
        <div className="grid w-full grid-cols-1 items-start gap-16 px-8 lg:grid-cols-2 min-h-screen mb-16">
          <div className="relative w-full h-full">
            <Image src="/bio/bio-2.jpg" alt="Maurice Rocher" fill className="object-cover rounded-md" />
          </div>
          <div className="space-y-12">
            <section>
              <h2 className="text-2xl md:text-3xl font-light mb-6">Vie et peinture</h2>
              <blockquote className="text-lg italic leading-relaxed border-l-4 border-gray-500 pl-6 mb-6">
                «… plus j'avance, plus l'acte de peindre est jouissance, celle de peindre avec ses doigts trempés dans la
                pâte colorée, celle de faire des pirouettes, (plastiques), et de retomber sur ses pieds, et à travers ce
                geste, et dans la folie du geste, de dire la passion, la vie, la mort...»
              </blockquote>
              <p className="text-right text-lg">Maurice Rocher, extrait du catalogue de Troyes (Août 1985)</p>
            </section>
          </div>
        </div>

        {/* Third Section */}
        <div className="grid w-full grid-cols-1 items-start gap-16 px-8 lg:grid-cols-2 min-h-screen">
          <div className="space-y-16 h-full">
            <div className="relative w-full h-full">
              <Image src="/bio/bio-3.jpg" alt="Maurice Rocher" fill className="object-cover rounded-md" />
            </div>
            <div className="relative w-full h-full">
              <Image src="/bio/bio-4.jpg" alt="Maurice Rocher" fill className="object-cover rounded-md" />
            </div>
            <div className="relative w-full h-full">
              <Image src="/bio/bio-5.jpg" alt="Maurice Rocher" fill className="object-cover rounded-md" />
            </div>
          </div>
          <div className="space-y-12">
            <section>
              <h2 className="text-2xl md:text-3xl font-light mb-6">
                Regard sur le peintre Maurice Rocher, par Alain Lemoine
              </h2>
              <p className="text-lg leading-relaxed">
                "L'œuvre de Maurice Rocher est un long cri probatoire, un cri déchirant face à notre condition prise dans
                les rets d'un questionnement sans fin. L'expressionnisme de Maurice Rocher n'est pas une approche de l'homme
                en miroir de lui-même, mais se réclame d'une pensée plus haute, plus exigeante, plus profonde, celle de
                témoigner de la tragédie humaine, de l'angoisse au-devant du mystère des choses, de la difficulté d'être.
                Chateaubriand disait que la souffrance était une prière. Dostoïevski s'agenouillait devant elle.
                L'expressionnisme serait donc sacré, avec toute l'ambiguïté du sens de ce mot, heureusement sorti des
                seules sentes religieuses ; sacré dès qu'il rend compte du destin, et de ce qui le compose.
              </p>
              <p className="text-lg leading-relaxed mt-6">
                Les couples de Maurice Rocher suivent leur parcours. Ils naissent, ils vivent, ils meurent. La palette
                traduit magnifiquement ce cheminement. Le rouge violent de la passion le cède au rose pâle de l'amour
                déclinant, survient la couleur fauve des affrontements, et bientôt le gris, la cendre des sentiments
                consumés. De même les suppliciés s'habillent-ils au fil de la palette du même rouge, du même olive, du même
                gris cendré avant que de franchir le Styx, et c'est la manière des dernières toiles que Maurice Rocher
                passait à la lame de rasoir, raclant la pâte jusqu'à la trame pour mieux atteindre l'essence des choses ;
                immatière des suppliciés devenus « vitrail » que la lumière traverse, venue d'un autre monde.
              </p>
              <p className="text-lg leading-relaxed mt-6">
                Cette manière illustre le propos de Rembrandt disant que toute technique renvoie à une métaphysique. Car il
                s'agit bien de cela. Une œuvre entièrement vouée à l'interrogation, transcendante et intemporelle, dans le
                droit fil de celle qui anime la pensée des grands témoins, ces « passants considérables », où la tendresse
                n'est pas absente pour mieux nous convaincre que, peut-être, tout n'est pas perdu puisqu'existe la solitude
                partagée."
              </p>
            </section>
          </div>
        </div>

        <MainNav className="fixed top-0 left-0 right-0" />
      </div>
    </main>
  )
}

