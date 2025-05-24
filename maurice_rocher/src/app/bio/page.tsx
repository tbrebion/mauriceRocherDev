import Image from "next/image"
import { MainNav } from "@/components/main-nav"
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Biographie",
  description: "Biographie de Maurice Rocher",
};
export default function BiographyPage() {
  return (
    <main className="flex flex-col h-full w-full bg-black text-white pt-8 pb-36">
      <div className="flex-1 mx-auto w-full max-w-7xl pt-24">
        {/* First Section */}
        <div className="grid w-full grid-cols-1 items-start gap-16 px-8 lg:grid-cols-2 min-h-screen mb-16">
          <div className="relative aspect-[3/4] w-full">
            <Image src="/bio/bio-1.jpg" alt="Maurice Rocher" fill className="object-contain" />
          </div>
          <div className="space-y-12">
            <section>
              <h2 className="text-2xl md:text-3xl font-light mb-6">Sa vie avec son oeuvre</h2>
              <p className="text-md leading-relaxed mb-6 text-justify font-garamond italic">
              «… plus j’avance, plus l’acte de peindre est jouissance, celle de peindre avec ses doigts trempés dans la pâte colorée, celle de faire des pirouettes, (plastiques), et de retomber sur ses pieds, et à travers ce geste, et dans la folie du geste, de dire la passion, la vie, la mort. <br /><br />
Bien sûr, il a fallu payer le prix, la liberté est chère, mais demeure la toile gagnée…, cette toile dont je ne comprends pas qu’elle soit sortie de moi, dans une bataille folle, et à laquelle je ne peux plus toucher parce que tout est dit pour l’éternité.<br /><br />
Connu ou inconnu, qu’importe, le vent de l’Histoire balaiera tout et chacun prendra sa place, je ne sais quelle sera la mienne, mais je sais qu’on ne m’enlèvera pas que ma vie et ma peinture ne furent qu’une seule chose. » 
              </p>
              <div className="flex flex-row justify-end">
                <p className="text-md font-garamond font-bold leading-relaxed text-justify">
                MR extrait du catalogue de Troyes
                </p>
                <p className="font-garamond">
                ,  Août 1985
                </p>
              </div>
            </section>
          </div>
        </div>

        {/* Second Section */}
        <div className="grid w-full grid-cols-1 items-start gap-16 px-8 lg:grid-cols-2 min-h-screen mb-16">
          <div className="relative aspect-[3/4] w-full">
            <Image src="/bio/bio-2.jpg" alt="Maurice Rocher" fill className="object-contain" />
          </div>
          <div className="space-y-12">
            <section>
              <div className="mb-6 leading-none">
                <h2 className="text-2xl md:text-3xl font-light">Maurice Rocher</h2> <br />
                <p className="text-xl md:text-2xl font-light">1918 - 1995</p>
              </div>
              <p className="text-lg leading-relaxed mb-6 text-justify">
              Né le 1er août 1918 à Evron, Mayenne, ascendance paysanne et artisanale , père employé des chemins de fer. Découvre, dans sa ville natale, les ambiances de foire et chevaux, du Café de sa grand-mère. Vit à Evron jusqu’en 1930. Grand-oncle peintre portraitiste à Laval, commence à peindre à 14 ans. Etudes au Mans, de 1930 à 1936, Ecole des Arts Appliqués, Le Mans, 1934-1936. En 1936, voyage en Belgique, découverte des Expressionnistes flamands, rencontre de Maurice Denis à l’Abbaye de Solesmes. 1936-1939, Paris, École des Beaux-Arts, et Ateliers d’Art Sacré avec Maurice Denis et Georges Desvallières, période mystique, peintures à sujets religieux, vitraux et fresques, nombreux séjours à l'Abbaye de Solesmes. Il se marie en 1944 avec Geneviève Chevard avec qui il a eu cinq enfants de 1944 à 1952.
              </p>
              <p className="text-lg leading-relaxed mb-6 text-justify">1947 : professeur aux Ateliers d’Art Sacré, fondés par Maurice Denis.</p>
              <p className="text-lg leading-relaxed mb-6 text-justify">1948-1952 : cofondateur et professeur au Centre d’Art Sacré.</p>
              <p className="text-lg leading-relaxed mb-6 text-justify">1949-1950 : pensionnaire à la Casa Vélasquez, Madrid.</p>
              <p className="text-lg leading-relaxed mb-6 text-justify">1952 : Prix de la Jeune Peinture, nombreux séjours en Espagne, Belgique, Italie.</p>
              <p className="text-lg leading-relaxed mb-6 text-justify">1944-67 : vit à Paris de 1944 à 1950, à Versailles et près de Versailles depuis 1950.</p>
            </section>
          </div>
        </div>

        {/* Third Section */}
        <div className="grid w-full grid-cols-1 items-start gap-16 px-8 lg:grid-cols-2 min-h-screen">
          <div className="space-y-16">
            <div className="relative aspect-[3/4] w-full">
              <Image src="/bio/bio-3.jpg" alt="Maurice Rocher" fill className="object-contain" />
            </div>
            <div className="relative aspect-[3/4] w-full">
              <Image src="/bio/bio-4.jpg" alt="Maurice Rocher" fill className="object-contain" />
            </div>

          </div>
          <div className="space-y-12">
            <section>
                <p className="text-lg leading-relaxed text-justify">
                Joseph Pichard, du Centre d’art sacré :
                </p>
                <p className="text-lg leading-relaxed text-justify italic">
                « Maurice Rocher est arrivé à Paris juste à temps pour recueillir les leçons de Denis et Desvallières. Et c’est en partie grâce à lui que, dans les lieux mêmes où enseignèrent pendant vingt-cinq ans ces deux maîtres, une école demeure où de jeunes artistes peuvent encore s’initier aux programmes et aux techniques spéciales à l’art d’église. Maurice Rocher était d’autant mieux désigné pour prendre leur succession… [...] qu’il fut parmi leurs élèves un des seuls à ne pas les imiter. Ainsi s’affirmait tôt une personnalité qui se manifesta par un dessin très construit, une palette qui ne devait bientôt plus connaître que le blanc et le noir (à peine quelques terres…). Maurice Rocher fut tenté par le vitrail et il se passa là une sorte de miracle. Lui, dont on peut dire qu’il n’a jamais vu sortir du tube un rouge de cadmium, un vert émeraude, un bleu de cobalt, voilà qu’il commence à jouer avec ces explosifs que sont les verres de couleur… Maurice Rocher est de ceux qui sont venus, à la coupure du demi-siècle, assurer fort à propos, une relève nécessaire ».
                </p>
                <p className="text-lg leading-relaxed mt-6 text-justify">
                Maurice Rocher gagne sa vie en réalisant des vitraux. Principalement  avec le maître-verrier Jacques Degusseau.
                </p>
                <p className="text-lg leading-relaxed mt-6 text-justify">
                1957 : Il s'installe à Versailles dans une grande maison au milieu des arbres, mais sans atelier véritable. Il se fait construire, plus tard, dans le jardin, une maison dont l'atelier a la lumière et le volume  désirés.
                </p>
                <p className="text-lg leading-relaxed italic mt-6 text-justify font-garamond">
                « A Rome ..., je ne pouvais plus séparer les façades d’église, les palais, les places, de l’air respiré, des fruits sur la table, et surtout des femmes rencontrées et de cet air sensuel qui y règne, de cette volupté des choses et des gestes dans la ville... »
                  <span className="text-lg leading-relaxed text-justify not-italic font-garamond"> MR</span>
                </p>
                <p className="text-lg leading-relaxed italic mt-6 text-justify font-garamond">
                  <span className="text-lg not-italic leading-relaxed text-justify font-light">1968 : </span>
                  « De douloureux évènements comme la mort de son fils unique, Jean-Baptiste, une longue recherche picturale d’une rigueur telle que rien - et surtout pas le goût du public ou les intérêts des marchands - ne vient jamais l’infléchir, obligent Maurice Rocher à se confronter aux grandes interrogations que sont la vie, la mort, l’amour, Dieu, l’échec et l’absurdité de la vie humaine. »
                  <span className="text-lg leading-relaxed text-justify not-italic font-garamond"> Son ami mayennais le Père Maurice Gruau, 1990</span>
                </p>
                <p className="text-lg leading-relaxed italic mt-6 text-justify font-garamond">
                  <span className="text-lg not-italic leading-relaxed text-justify font-light">1972 : </span>
                  « P... hier, enfin venu, mais qui me redit qu’il ne peut rien faire pour moi tout en appréciant semble-t-il ma peinture... Je suis donc contraint à exposer chez M... »
                  <span className="text-lg leading-relaxed text-justify not-italic font-garamond"> MR</span>
                </p>
                <p className="text-lg leading-relaxed mt-6 text-justify">
                Exposition « Vingt églises » Galerie Jacques Massol, Paris :
                </p>
                <p className="text-lg leading-relaxed italic mt-6 text-justify font-garamond">
                « En quittant le vernissage de Lindström, P..., beaucoup de monde…, je retrouve mes églises exposées chez M… et ... le désert... Alors que peut valoir une peinture dont personne ne veut. »
                  <span className="text-lg leading-relaxed text-justify not-italic font-garamond"> MR</span>
                </p>
                <p className="text-lg leading-relaxed italic mt-6 text-justify font-garamond">
                  <span className="text-lg not-italic leading-relaxed text-justify font-light">1975 : </span>
                  « Je ne fais plus de vitraux, je ne vends pas de peinture… Il fallait, de toute façon vendre cette grande maison… » ; « Des toiles sont partout dans le couloir, les unes sur les autres… »
                  <span className="text-lg leading-relaxed text-justify not-italic font-garamond"> MR</span>
                </p>
                <p className="text-lg leading-relaxed mt-6 text-justify">
                1976, Exposition Galerie Ariel, Jean Pollac, Paris : 
                </p>
                <p className="text-lg leading-relaxed text-justify">
                Il côtoie là les peintres John Christoforou, Bengt Lindström, Karel Appel, Orlando Pelayo, avec qui il se lie d’amitié, et Roger-Edgar Gillet. <span className="text-lg leading-relaxed italic mt-6 text-justify font-garamond"> « Il aurait dit hier soir, d’une part, « il fallait faire quelque chose pour cet homme là » </span><span className="text-lg leading-relaxed text-justify font-light">et encore : </span>
                <span className="text-lg leading-relaxed italic mt-6 text-justify font-garamond">
                « je sais que je ne gagnerai pas d’argent avec lui. C’est de la grande peinture, mais invendable… » »
                </span>
                <span className="text-lg leading-relaxed text-justify not-italic font-garamond"> MR</span>
                </p>

                <p className="text-lg leading-relaxed italic mt-6 text-justify font-garamond">
                  <span className="text-lg not-italic leading-relaxed text-justify font-light">1979 : </span>
                  « Hier… vernissage chez « Ariel » et signature de mon livre. »
                  <span className="text-lg leading-relaxed text-justify not-italic font-garamond"> MR</span>
                </p>
                <p className="text-lg leading-relaxed italic mt-6 text-justify font-garamond">
                « sortir par zéro degré représente une aventure... hier, j’avais sur moi, en plus de la chemise et du gilet de corps, quatre pull-overs, une veste, trois peaux de mouton... mon pardessus et un autre pardessus jeté sur les épaules. Malgré cela... je ressentais le froid comme si je m’étais plongé dans l’eau froide … »
                  <span className="text-lg leading-relaxed text-justify not-italic font-garamond"> MR</span>
                </p>

            </section>
          </div>
        </div>



        {/* Third Section */}
        <div className="grid w-full grid-cols-1 items-start gap-16 px-8 lg:grid-cols-2 min-h-screen">

          
          
          <div className="space-y-10">
            
            
            
            <p className="text-2xl bold leading-relaxed mt-6 text-justify">
              EXPOSITIONS
            </p>
            <p className="text-md leading-relaxed mt-0 text-justify">
            Galerie Catherine Pennec, Clermont-Ferrand, 2025 <br />
            Galerie Ories, Lyon, 2024 <br />
            Cabana Georgina, Marseille, 2024 <br />
            Musée Lambinet, " Versailles au XXe siècle, muse des artistes, " 2020 <br />
            Galerie Pierre Marie Vitoux, Paris, " Peintures expressionnistes  Visages-matière ", 2017 <br />
            Galerie Pierre Marie Vitoux, Paris, 2014 <br />
            Galerie Olivier Nouvellet, Paris, 2014 <br />
            Galerie Bourdette, Honfleur, 2014 <br />
            Galerie Zafman, Paris, " The Passion Paintings ", 2008 <br />
            Ville d'Evron, 5è Festival d'Arts Sacrés, Exposition Maurice Rocher, 2007 <br />
            Galerie Pierre Marie Vitoux, Paris, 2005, 2007 <br />
            Galerie Olivier Nouvellet, Paris, 1998, 2002, 2006 <br />
            Galerie 17, Clermont-Ferrand, 1998 <br />
            Musée d'art Roger-Quilliot, Clermont-Ferrand, " Rétrospective en 4 thèmes ", 1995 <br />
            Musée Lambinet, Versailles, " Oeuvres de 1965 à 1985 ", 1994 <br />
            Rétrospective à l'Abbaye de Saint-Riquier, (Somme), " Peintures 1981-1987 ", 1994 <br />
            Galerie Olivier Nouvellet, Paris, 1993 <br />
            Bibliothèque nationale de France, Paris, 1992 " De Bonnard à Baselitz - Dix ans d'enrichissements du cabinet des estampes, 1978-1988 " <br />
            Galerie Pierre Marie Vitoux, Paris, 1991, 1992, 1996, 1997 <br />
            Rétrospective à la Chapelle de la Sorbonne, Paris, " Femmes et Visages ", 1991 <br />
            Rétrospective Couvent des Cordeliers, Châteauroux, 1988, " Peintures 1966-1986 " <br />
            Rétrospective à l'Abbaye de Veruela Province de Saragosse, 1988 <br />
            Rétrospective à l'Abbaye de l'Escaladieu, Bonnemazon, Tarbes, 1988 <br />
            Centre d'Art Contemporain de Mont-de-Marsan, 1988 <br />
            Les figurations des années 60 à nos jours, exposition itinérante (Dunkerque, Cagnes-sur-Mer, Troyes, Carcassonne, Châteauroux), 1986-1987 <br />
            Rétrospective Musée de la Castre à Cannes, " L'Expressionnisme et le Sacré ", 1986  <br />
            Rétrospective Musée d'art moderne de Troyes, 1986 <br />
            Galerie Convergence, Nantes, 1982, 1986 <br />
            Rétrospective, Mairie du 18e arrondissement de Paris, 1985 <br />
            Rétrospective, Mairie du Chesnay, Le Chesnay (Versailles), 1985 <br />
            Galerie Suzanne Pons, Cannes, 1984, 1986 <br />
            Galerie Protée, Paris, 1983, 1984, 1988 <br />
            Galerie Serge Garnier, Paris, 1983 <br />
            Palais de l'Europe, Le Touquet, 1983 <br />
            Musée du Vieux Château, Laval, 1981 <br />
            L'hospitalet, Barèges, 1981  <br />
            Galerie Syn'art, Paris, 1980 <br />
            Galerie Anne Blanc, Marly-le-Roi, 1979 <br />
            L'hospitalet, Centre Culturel International, Barèges, " 40 Eglises 1952-1978 ", 1978 <br />
            Galeria Valle Orti, Valence, Espagne, 1978 <br />
            Maison des Arts, Thonon-les-Bains, 1977 <br />
            Galeria Altex, " Exposicion Antologica ", Madrid, Espagne, 1977 <br />
            C.M.A.M, Forum des Cholettes, Sarcelles, 1977 <br />
            Galerie Ariel, Paris, 1976, 1979 <br />
            Galerie Noëlla Gest, Saint-Rémy de Provence, 1976 <br />
            MJC Poterne des Peupliers, Paris, 1976 <br />
            MJC les Hauts de Belleville, Paris, Exposition itinérante dans les centres culturels français, 1976 <br />
            Centre d'animation culturel, Arles <br />
            Château de Braux " Cent visages ", Sainte-Cohière, 1976 <br />
            Parc Régional d'Armorique, 1975 <br />
            Musée de l'Hôtel Sandelin, Saint-Omer, 1974 <br />
            Galerie Fouillen, Quimper, 1974 <br />
            Galerie Veranneman, Bruxelles, 1970 <br />
            Galerie de l 'A.P.I.A.W, Liège, 1970 <br />
            Paris, C.I.R.E.C. " Itinéraires " 1954-1968 <br />
            Galerie Jacques Massol, Paris, 1968, 1970, 1972 <br />
            Galerie Ariel, Paris, 1967 <br />
            Galerie Anne Colin, Paris, " 40 Visages ", 1965 <br />
            Galerie des Beaux-Arts, Rennes, 1965 <br />
            Galerie Alice Juillard, Versailles, 1964 <br />
            Galerie Drouant, Paris, 1964 <br />
            Galerie Saint-Placide, Paris, 1956 <br />
            Musée de Poitiers, 1953 <br />
            Association des amateurs de peinture, Galerie Jacques Leuvraix, Paris, janvier 1949 <br />
            Galerie des Beaux-Arts, Rennes, 1947 <br />
            </p>
            <p className="text-2xl bold leading-relaxed mt-6 text-justify">
              SALONS
            </p>
            <p className="text-md leading-relaxed mt-0 text-justify">
            Paris, Salon des Réalités nouvelles, 1968 à 1985 <br />
            Paris, Salon Grands et Jeunes d’Aujourd’hui, 1976 à 1981 <br />
            Téhéran, Première Exposition Internationale des Arts, décembre 1974 - janvier 1975 <br />
            Salon d'Automne, 1960 à 1970 <br />
            Tokyo, Exposition Internationale d'Art Figuratif, 1964 <br />
            Exposition Universelle de Bruxelles, 1958 <br />
            Paris, Biennale des Jeunes Artistes, 1957<br />
            Paris, Musée Galliera, Célébrités et Révélations de la Peinture Contemporaine, 1953<br />
            Paris, Galerie Charpentier, Cent Chefs-d'œuvre d'Art Sacré, 1952<br />
            Paris, Salon d’Art Sacré, 1945-1949 <br />
            Paris, Salon des Moins de Trente ans, 1941 <br />
            </p>
            <p className="text-2xl bold leading-relaxed mt-6 text-justify">
            OEUVRES dans les MUSEES
            </p>
            <p className="text-lg bold leading-relaxed mt-6 text-justify">
            En FRANCE: 
            </p>
            <div>
              <p className="text-lg bold leading-relaxed mt-6 text-justify -mb-6">
              Versailles, Musée Lambinet :
              </p>
              <ul className="text-md bold leading-relaxed mt-6 text-justify">
                <li> - L'Usine à gaz de Versailles, vers 1950, dessin, 29x37.</li>
                <li> - L'Usine à gaz de Versailles,vers 1950, gouache, 31x38.</li>
              </ul>
            </div>
            <div>
              <p className="text-lg bold leading-relaxed mt-6 text-justify -mb-6">
              Poitiers, Musée Sainte-Croix :
              </p>
              <ul className="text-md bold leading-relaxed mt-6 text-justify">
                <li> - Piéta huile sur toile, 33x42, Collection des Musées de Poitiers.</li>
                <li> - Lithographie originale, 32x22, illustration du poème J'arriverai à défaire la mort dans le livre Douze Poètes Douze Peintres, Collection des Musées de Poitiers.</li>
              </ul>
            </div>
            <div>
              <p className="text-lg bold leading-relaxed mt-6 text-justify -mb-6">
              Paris, Centre National des Arts Plastiques CNAP, Fonds National d’art contemporain FNAP : 
              </p>
              <ul className="text-md bold leading-relaxed mt-6 text-justify">
                <li> - Fresque Résurrection, 1946, Eglise Saint Dominique, Paris.</li>
                <li> - Cortège du Mort, 1953, 210x280, Mairie de Saint-Sever, Aquitaine.</li>
                <li> - L' homme en prière, 1952, huile sur toile, 195x130.</li>
                <li> - Le Décoré vert, 1979, huile sur toile, 100x81, Réalités Nouvelles de 1980.</li>
              </ul>
            </div>
            <div>
              <p className="text-lg bold leading-relaxed mt-6 text-justify -mb-6">
              Cannes, Musée de la Castre : 
              </p>
              <ul className="text-md bold leading-relaxed mt-6 text-justify">
                <li> - Crucifixion, vers 1960, huile sur toile.</li>
                <li> - Supplicié, vers 1985, huile sur toile.</li>
              </ul>
            </div>
            <div>
              <p className="text-lg bold leading-relaxed mt-6 text-justify -mb-6">
              Laval, Musée  de Laval : 
              </p>
              <ul className="text-md bold leading-relaxed mt-6 text-justify">
                <li> - La Grande Noce, vers 1966, huile sur toile, 161x215, Collection des Musées de Laval.</li>
              </ul>
            </div>
            <div>
              <p className="text-lg bold leading-relaxed mt-6 text-justify -mb-6">
              Saint-Omer, Musée de l'Hôtel Sandelin : 
              </p>
              <ul className="text-md bold leading-relaxed mt-6 text-justify">
                <li> - Maire-Oiseau, 1973, 73x60.</li>
              </ul>
            </div>
            <div>
              <p className="text-lg bold leading-relaxed mt-6 text-justify -mb-6">
              Nantes, Musée des Beaux-Arts : 
              </p>
              <ul className="text-md bold leading-relaxed mt-6 text-justify">
                <li> - Couple n°28, vers 1980-83, huile sur toile, 100x81.</li>
              </ul>
            </div>
            <div>
              <p className="text-lg bold leading-relaxed mt-6 text-justify -mb-6">
              Troyes, Musée d'Art Moderne : 
              </p>
              <ul className="text-md bold leading-relaxed mt-6 text-justify">
                <li> -  Carmen n°3, 1984, huile sur toile, 146x114.</li>
              </ul>
            </div>
            <div>
              <p className="text-lg bold leading-relaxed mt-6 text-justify -mb-6">
              Pontoise, Musée Tavet-Delacour : 
              </p>
              <ul className="text-md bold leading-relaxed mt-6 text-justify">
                <li> - Couple,1977 dessin  32x23</li>
                <li> - 1978, encre de Chine et gouache, 37x26.</li>
                <li> - Le salon, 1978, encre de Chine et gouache, 32x24.</li>
              </ul>
            </div>
            <div>
              <p className="text-lg bold leading-relaxed mt-6 text-justify -mb-6">
              Brest, Artothèque du Musée des Beaux-arts de Brest : 
              </p>
              <ul className="text-md bold leading-relaxed mt-6 text-justify">
                <li> - Couple, 1979, gouache, 37x27.</li>
                <li> - Femmes et visages, 1981, gouache, 31x24.</li>
                <li> - Couple, 1981, gouache, 40x30.</li>
                <li> - Femme, 1982, gouache, 37x27.</li>
              </ul>
            </div>
            <p className="text-2xl bold leading-relaxed mt-6 text-justify">
            A L’ÉTRANGER : 
            </p>
            <p className="text-lg bold leading-relaxed mt-6 text-justify">
            Bruxelles, Belgique: 
            </p>
            <ul className="text-md bold leading-relaxed mt-6 text-justify">
              <li> - Musée Royal d'Art Moderne, La Grande Veuve Noire, 1981, huile sur toile, 146x114.</li>
            </ul>
            <p className="text-lg bold leading-relaxed mt-6 text-justify">
            Kruishoutem, Belgique  Fondation Veranneman 
            </p>
            <p className="text-lg bold leading-relaxed mt-6 text-justify">
            Wiesbaden, Allemagne, Ministère des Sciences et des Arts de Hesse: 
            </p>
            <ul className="text-md bold leading-relaxed mt-6 text-justify">
              <li> - Nativité, 1956, huile sur toile, 130x162.</li>
            </ul>
            <p className="text-lg bold leading-relaxed mt-6 text-justify">
            Rome, Italie, Cité du Vatican, Musée d'Art Sacré Contemporain 
            </p>
            <p className="text-lg bold leading-relaxed mt-6 text-justify">
            Chihuahua, Mexique, Musée de Cuauhtemoc 
            </p>
            <p className="text-lg bold leading-relaxed mt-6 text-justify">
            Taïchoung, Taïwan, Musée d'Art Contemporain de Taïchoung 
            </p>

            <p className="text-2xl bold leading-relaxed mt-6 text-justify">
            VITRAUX 
            </p>
            <p className="text-md bold leading-relaxed mt-6 text-justify">
            Versailles, Eglise Sainte-Jeanne d'Arc : vitraux, 1977 <br />
            Pontmain, Basilique Notre-Dame : vitraux, 1975 <br />
            Solesmes, Abbatiale Saint-Pierre : vitraux, 1974 <br />
            Auray, Basilique : vitraux, 1973 <br />
            L'Isle-Adam, Eglise Saint-Martin : vitraux, 1970 <br />
            Plouharnel, Abbaye Sainte-Anne de Kergonan : vitraux, 1970 <br />
            Vitré, Chapelle de la Maison Mère des Sœurs de Guilmarais : vitraux, 1970 <br />
            </p>

            <p className="text-lg bold leading-relaxed mt-6 text-justify">
            Irlande : <br />
            <span>
            Dublin, City Gallery The Hugh Lane, The Scourging La Flagellation vitrail, 1970, 38x28
            </span>
            </p>
            <p className="text-lg bold leading-relaxed mt-6 text-justify">
            Belgique : <br />
            <span>
            Bastogne, Eglise : vitraux, 1969 <br />
            Humain et Hargimont, Eglise de Réchrival : vitraux, 1958  <br />
            Marloie, Eglise Saint-Georges : vitraux, 1955 
            </span>
            </p>
            <p className="text-md bold leading-relaxed mt-6 text-justify">
            Elnes, Cathédrale : vitraux, 1969 <br />
            Caen, Abbaye-aux-Dames, Eglise de la Trinité : vitraux, 1968  <br />
            Kermaria, Chapelle de la Maison Mère des Sœurs : vitraux, 1968 <br />
            Abbeville, Eglise Saint-Gilles : vitraux, 1966 <br />
            Auray, Petit séminaire Sainte-Anne : vitraux, 1965 <br />
            Landévennec, Abbaye bénédictine : vitraux, 1966 <br />
            Langrune-sur-Mer, Eglise : vitraux, 1966 <br />
            </p>

            <p className="text-lg bold leading-relaxed mt-6 text-justify">
            Mexique : <br /> 
            <span>
            Guadalajara, temple expiatoire : vitraux, 1966
            </span>
            </p>
            <p className="text-md bold leading-relaxed mt-6 text-justify">
            Versailles, Chapelle du Grand Séminaire : vitraux, 1964 <br />
            Châteaulin, Juvénat des frères de Plöermel : vitraux, 1963 <br />
            Le Pecq, Eglise Saint Thibault : vitraux, 1962 <br />
            Toulouse, Cathédrale Saint-Étienne : vitraux, 1962 <br />
            Cavigny, Eglise : vitraux, 1961 <br />
            Merville, Grand séminaire : vitraux, 1961 <br />
            Nantes, Basilique Saint-Nicolas : vitraux, 1961 <br />
            Caen, Abbaye-aux-Dames : vitraux, 1960 <br />
            </p>

            <p className="text-lg bold leading-relaxed mt-6 text-justify">
            Grand-Duché du Luxembourg : <br />
            <span>
            Clervaux, Abbaye : vitraux, 1960
            </span>
            </p>

            <p className="text-md bold leading-relaxed mt-6 text-justify">
            Hagondange, Eglise : vitraux, 1960 <br />
            Évron, Chapelle de la Maison Mère des Sœurs de la Charité : vitraux, 1959 <br />
            Sainteny, Eglise Saint-Pierre Saint-Paul : 1959  <br />
            </p>

            <p className="text-lg bold leading-relaxed mt-6 text-justify">
            Belgique : <br /> 
            <span>
            Humain et Hargimont, Eglise de Réchrival : vitraux, 1958
            </span>
            </p>
            <p className="text-md bold leading-relaxed mt-6 text-justify">
            Bretteville-sur-Laize, Eglise Notre-Dame de la Visitation : vitraux, 1958 <br />
            Lyon-Vaise, Eglise : vitraux, 1958 <br />
            Nantes, Eglise Notre-Dame-de-Toutes-Aides : vitraux, 1958 <br />
            Wimereux, Eglise Immaculée Conception : vitraux, 1958 <br />
            Aron, Eglise : vitraux, 1957 <br />
            Royan, Eglise Notre-Dame-de-l'Assomption : vitraux, 1957 <br />
            Brest, Eglise Saint-Louis : vitraux, 1956 <br />
            Château-Gontier, Basilique Saint-Jean : vitraux, 1956 <br />
            Mayenne, Basilique Notre-Dame : vitraux, 1956, Eglise Saint-Martin d'Aron : vitraux <br />
            </p>


            <p className="text-lg bold leading-relaxed mt-6 text-justify">
            Belgique : <br />
            <span>
            Marloie, Eglise Saint-Georges : vitraux, 1955 
            </span>
            </p>
            <p className="text-md bold leading-relaxed mt-6 text-justify">
            Guernes, Eglise Notre-Dame : vitraux, 1955 <br />
            Saint-Nazaire, Couvent des Franciscains : vitraux, 1955 <br />
            Athis-Mons, Eglise Notre-Dame-de-la-Voie : vitraux, 1954 <br />
            Coutances, Chapelle du séminaire : vitraux, 1954 <br />
            Le Mesnil-Véneron, Eglise Notre-Dame-de-la-Salette : vitraux, 1953 <br />
            Thaon, Eglise : vitraux, 1953 <br />
            Courseulles, Eglise Saint-Germain : vitraux, 1952 <br />
            Royan, Eglise : vitraux, 1952 <br />
            Strasbourg, Institut Notre-Dame de Sion : vitraux, 1951 <br />
            Sainte-Suzanne-et-Chammes : église Saint-Pierre de Chammes: vitraux, 1951; 14 tableaux du Chemin de Croix. <br />
            Beaumont-en-Auge, Eglise : vitraux, 1950 <br />
            Nyoiseau, Eglise : vitraux, 1948 <br />
            Paris, Eglise Saint-Dominique : Le Verbe et la Parole, fresque ornant la voûte en cul-de-four, 1946 <br />
            </p>

            <p className="text-2xl bold leading-relaxed mt-6 text-justify">
              BIBLIOGRAPHIE
            </p>
            <p className="text-md bold leading-relaxed mt-6 text-justify">
            " Maurice Rocher, Peintures 1986-1993 ", Texte de Nathalie Cottin, Editions Altamira, Paris, 1994, reprod. <br />
            " Entretiens avec Maurice Rocher, Le Peintre, Dieu, la Femme ", Nathalie Cottin, Editions Altamira, Paris, 1994. <br />
            " Maurice Rocher Journal 1945-1983 ", Laval, Éditions Siloë, 1990. <br />
            " Maurice Rocher " Peintures 1937-86, Gérard Xuriguera, Editions Mayer, Paris, 1987, reprod. <br />
            " Maurice Rocher, Femmes et Notables ", Textes de J.M. Dunoyer, J. Lemanceau, G. Xuriguera, 
            Editions Art Moderne, Paris, 1983, reprod. <br />
            " Maurice Rocher Journal ", extraits, Centre International de l'Hospitalet, Barèges, 1981, reprod. <br />
            " Maurice Rocher " Gérard Xuriguera, Editions Art Moderne, Paris, 1979, reprod. <br /> <br />
            <span className="text-xl bold leading-relaxed mt-6 text-justify">
            Catalogues monographiques <br /><br />
            </span>
            1995, Musée des Beaux-Arts de Clermont-Ferrand, Exposition Rétrospective en quatre thèmes, Textes de N. Cottin , M. Rocher. <br />
            1994, Abbaye de St-Riquier, Exposition Rétrospective, Textes de N. Cottin , M. Rocher. <br />
            1991, Paris Chapelle de La Sorbonne, Exposition Rétrospective, Textes de N. Cottin , M. Rocher. <br />
            1986, Musée de la Castre, Cannes, Exposition Rétrospective, Textes de F. Nédellec, J. Clair, M. Rocher. <br />
            1986, Musée d'Art Moderne de Troyes, Exposition Rétrospective, Textes de M. Rocher, Ph. Chabert,      G. Xuriguera, B. Dorival, J.J. Lévèque, M. Lelong, J.M. Dunoyer. <br />
            1981, Musée de Laval, Exposition Rétrospective, Textes de Ch. Schaettel, G. Xuriguera, M. Rocher, "Journal " extraits. <br /> <br />
            <span className="text-xl bold leading-relaxed mt-6 text-justify">
            Films <br /><br />
            </span>
            Maurice Rocher, Exposition Rétrospective, Musée de Laval, Charles Schaettel, 1981, 14'. <br />
            Maurice Rocher, " Itinéraire " par Philippe Huneau, I.N.A. 1986, 15'. <br />
            " Maurice Rocher, l'Expressionniste ", Film court, Montage de Tioma Tchoulanov, images tirées du Film de Franck Saint-Cast " Maurice Rocher, l'Expressionniste ", 2014, 8'. <br />
            " Cinq peintres expressionnistes " Maurice Rocher, Orlando Pelayo, John Christoforou, Bengt Lindström,  Vladimir  Veličković, T.F.1, I.N.A, film réalisé par Charles Chaboud avec Gérard Xuriguera, 1984. <br />
            Audio-cassette, " Entretiens de Françoise Monnin avec Maurice Rocher ", Dart, Paris. <br />

            </p>


          </div>
          
          
          
          <div className="space-y-12">
            <section>
            <p className="text-lg leading-relaxed mt-6 text-justify">
            1981, Rétrospective au Musée de Laval : <span className="text-lg leading-relaxed italic mt-6 text-justify font-garamond">« Bien sûr, il fallait faire un choix et décider de ce qui serait mis en évidence, du peintre ou du verrier. Ce fut la peinture qui l’emporta… »</span> 
            </p>
            <p className="text-lg leading-relaxed italic mt-6 text-justify font-garamond">
            « Une maison blanche, un homme apparemment tranquille, un salon paisible… Puis quelques marches, l’Atelier… là seulement il vit, démesurément… Maurice Rocher va vous faire assister au défilé de ses personnages, de sa vision, de son interrogation sur l’homme et sur la société… J’ai souvent accompli ce rite de la visite à l’Atelier. Je suis toujours sorti de ce cérémonial éprouvé par la vision d’une réalité du monde impliquant questions et exigences. » <span className="text-lg leading-relaxed text-justify font-light">Jean Lemanceau, L'Hospitalet</span> 
            </p>
            <p className="text-lg leading-relaxed italic mt-6 text-justify font-garamond">
              <span className="text-lg not-italic leading-relaxed text-justify font-light">1982 : </span>
              « Hier dans l’atelier, un nouveau couple, passionné par ma peinture. Ressentant tout cela par le dedans… [...] cet homme hier, me disait devant l’ensemble de mes toiles  « vous affirmez n’avoir plus la foi, et pourtant toute votre peinture dit le contraire. Quelque chose de religieux, de sacré en émane malgré vous. » »
              <span className="text-lg leading-relaxed text-justify not-italic font-garamond"> MR</span>
            </p>
            <p className="text-lg leading-relaxed italic mt-6 text-justify font-garamond">
              <span className="text-lg not-italic leading-relaxed text-justify font-light">1983 : </span>
              « Les D… et la façon extraordinaire dont ils ont accueilli mes toiles chez eux et les ont encadrées. »
              <span className="text-lg leading-relaxed text-justify not-italic font-garamond"> MR</span>
            </p>
            <p className="text-lg leading-relaxed italic mt-6 text-justify font-garamond">
            « Je saurai sans doute plus tard que cette période actuelle était peut-être une sorte de bonheur, où jour après jour, je pouvais peindre, dépassant mes ennuis de santé, dans une sorte de paix domestique et l’attention tendre et sans faille de G… »
              <span className="text-lg leading-relaxed text-justify not-italic font-garamond"> MR</span>
            </p>
            <p className="text-lg leading-relaxed italic mt-6 text-justify font-garamond">
            « M… M… revient demain. Tout semble démarrer sur le plan peinture… Cinq cents toiles dans sa fondation… »
              <span className="text-lg leading-relaxed text-justify not-italic font-garamond"> MR</span>
            </p>
            <p className="text-lg leading-relaxed italic mt-6 text-justify font-garamond">
              <span className="text-lg not-italic leading-relaxed text-justify font-light">Août 1983 : </span>
              « Mes dernières toiles de ces trois derniers mois vont plus loin que jamais. Celle d’hier, d’aujourd’hui m’effraie par sa liberté précisément… Dans ces derniers couples, tout semble dit, et davantage sans doute cette sorte d’imperfection technique du premier jet. »
              <span className="text-lg leading-relaxed text-justify not-italic font-garamond"> MR</span>
            </p>
            <p className="text-lg leading-relaxed italic mt-6 text-justify font-garamond">
            « Malgré mon seul œil et mes genoux malades ai peint un 60…, un 100... et je voudrais peindre sans souffler un 80… Est-ce la peur de ne pouvoir bientôt plus peindre. »
              <span className="text-lg leading-relaxed text-justify not-italic font-garamond"> MR</span>
            </p>
            <p className="text-lg leading-relaxed not-italic mt-6 text-justify font-light">
            1984 : La photographie du prêtre polonais Jerzy Popieluszko à la morgue l'entraîne dans un nouveau thème, celui des
              <span className="text-lg leading-relaxed italic mt-6 text-justify font-garamond"> « Suppliciés ».</span>
            </p>
            <p className="text-lg leading-relaxed italic mt-6 text-justify font-garamond">
            « Hier seconde visite de deux « amateurs » A.L… et R.Ch… Ils m’ont acheté plusieurs toiles… « Maintenant que nous connaissons votre peinture, plus rien d’autre n’existe… On voudrait tout avoir ». »
              <span className="text-lg leading-relaxed text-justify not-italic font-garamond"> MR</span>
            </p>
            <p className="text-lg leading-relaxed not-italic mt-6 text-justify font-light">
            Exposition de gouaches, Galerie de Bellechasse, Paris, et signature du livre de gouaches, lavis et monotypes :
              <span className="text-lg leading-relaxed text-justify italic font-garamond"> « Femmes et Notables »</span>.  A l’occasion de la sortie de ce livre,  Jean-Marie Dunoyer écrit : <span className="text-lg leading-relaxed text-justify italic font-garamond"> « N’admettant l’art que poussé à son paroxysme, Maurice Rocher était rangé parmi les expressionnistes les plus véhéments d’un siècle en effervescence, phénomène exceptionnel dans un pays épris de clarté et de mesure. »</span> 
            </p>
            <p className="text-lg leading-relaxed italic mt-6 text-justify font-garamond">
            « M… M… J’apprends beaucoup de choses qui me font douter de tout ce qu’il m’a promis… » 
              <span className="text-lg leading-relaxed text-justify not-italic font-garamond"> MR</span>
            </p>
            <p className="text-lg leading-relaxed italic mt-6 text-justify font-garamond">
            « Quelques visiteurs nouveaux…Tous subjugués… Je termine toujours par la série des « suppliciés » parce qu’ensuite ils ne veulent plus rien voir…  « comment, ici, cette peinture énorme, et vous êtes inconnu »… » 
              <span className="text-lg leading-relaxed text-justify not-italic font-garamond"> MR</span>
            </p>
            <p className="text-lg leading-relaxed text-justify not-italic font-light">
            1985 : Rétrospective 1965 - 1985, Mairie du XVIIIè arrondissement, Paris. 
            </p>
            <p className="text-lg leading-relaxed not-italic mt-6 text-justify font-light">
            1986, Rétrospective Musée d’Art Moderne, Troyes 
            <span className="text-lg leading-relaxed text-justify italic font-garamond"> « le choix du peintre » : « Hier, en découvrant cette centaine de toiles, ces quarante ans de peinture accrochés dans ce musée j’ai dit : « que tout reste dans l’état, je donne tout… et je meurs… »… Ma peinture ainsi présentée prenant sa dimension de musée. » »</span>
              <span className="text-lg leading-relaxed text-justify not-italic font-garamond"> MR</span>
            </p>
            <p className="text-lg leading-relaxed not-italic mt-6 text-justify font-light">
            1986 : Rétrospective 
            <span className="text-lg leading-relaxed text-justify italic font-garamond"> « L’Expressionnisme et le Sacré » </span>
            Musée de la Castre, Cannes Chapelle  Ste-Anne.
            </p>

            <p className="text-lg leading-relaxed not-italic mt-6 text-justify font-light">
            1987 : Édition du 1er tome  
            <span className="text-lg leading-relaxed text-justify italic font-garamond"> « Maurice Rocher »</span>
            , préface de Gérard Xuriguera aux éditions Mayer.
            </p>

            <p className="text-lg leading-relaxed italic mt-6 text-justify font-garamond">
            « Je viens de conduire G… à l’hôpital. Comme je voudrais qu’elle soit déjà revenue… je sais mieux encore ce qu’elle fût, ce qu’elle est de générosité, d’abnégation, de fidélité... je sais aussi que mon œuvre lui est liée, qu’elle s’est faite avec elle, par elle, … elle m’a donné plus que tout autre femme. »  
            <span className="text-lg leading-relaxed text-justify not-italic font-light"> MR</span>
            </p>

            <p className="text-lg leading-relaxed not-italic mt-6 text-justify font-light">
            1988 : Rétrospective  
            <span className="text-lg leading-relaxed text-justify italic font-garamond"> « Expresionismo frances »</span>
            , dans le cadre de l’échange d'expositions Maurice Rocher/Pedro Giralt, peintre et sculpteur, Abbaye de l’Escaladieu (France) /Abbaye de Veruela (Espagne).
            </p>

            <p className="text-lg leading-relaxed not-italic mt-6 text-justify font-light">
            1988 : Rétrospective  
            <span className="text-lg leading-relaxed text-justify italic font-garamond"> « Peintures 1966-1988 » </span>
            les Cordeliers, Châteauroux. Intervention de la cantaora flamenca, Mona Arenas et du guitariste Vicente Pradal :
            <span className="text-lg leading-relaxed text-justify italic font-garamond"> « Que sont depuis quelques années mes « suppliciés » si ce n’est l’écho de la voix du vieux « cantador » qui dit la souffrance de l’homme,  l’amour jamais comblé, et ce cri vers un ciel qui ne s’ouvrira plus… » </span>
            <span className="text-lg leading-relaxed text-justify not-italic font-garamond"> MR</span>
            </p>

            <p className="text-lg leading-relaxed not-italic mt-6 text-justify font-light">
            1989 : Ouverture de la Galerie Pierre Marie Vitoux avec Maurice Rocher, Ben-Ami Koller et Rustin, Paris. Expositions de 1989 à 2017.
            </p>

            <p className="text-lg leading-relaxed not-italic mt-6 text-justify font-light">
            1990 : Édition du Journal 1945/1983.   
            <span className="text-lg leading-relaxed text-justify italic font-garamond"> « … mon journal, qui dans sa totalité (que je ne verrai pas publier) fera une œuvre, un tout. Aussi important et indissociable de mon œuvre de peintre… » </span>
            <span className="text-lg leading-relaxed text-justify not-italic font-garamond"> MR</span>
            </p>

            <p className="text-lg leading-relaxed not-italic mt-6 text-justify font-light">
            1991, Rétrospective Chapelle de la Sorbonne   
            <span className="text-lg leading-relaxed text-justify italic font-garamond"> « Femmes et Visages 1946-1991 », Paris :
« Je n’ai peint rien d’autre que l’Homme. Essentiellement le visage, le couple, la femme, la femme enceinte, la mère, l’épouse, l’amante… Sur cinquante ans, que de femmes, de couples…, de la paix douloureuse des premiers au déchaînement consumé des plus récents. » </span>
            <span className="text-lg leading-relaxed text-justify not-italic font-garamond"> MR</span>
            </p>

            <p className="text-lg leading-relaxed italic mt-6 text-justify font-garamond">
            « Une autre pensée m’obsède depuis des semaines : ce que deviendront l’ensemble de ces toiles et dessins ».   
            <span className="text-lg leading-relaxed text-justify not-italic font-garamond"> MR</span>
            </p>

            <p className="text-lg leading-relaxed not-italic mt-6 text-justify font-light">
            1993, Exposition   
            <span className="text-lg leading-relaxed text-justify italic font-garamond"> « Notables » </span>
            Galerie Olivier Nouvellet, Paris :
            <span className="text-lg leading-relaxed text-justify italic font-garamond"> « Hier, c’était ce marchand de la rue de Seine, inconditionnel de ma peinture, qui est là souvent, me vend, et pour lui-même a acheté 14 petites toiles depuis avril. » </span>
            <span className="text-lg leading-relaxed text-justify not-italic font-garamond"> MR</span>
            </p>

            <p className="text-lg leading-relaxed not-italic mt-6 text-justify font-light">
            1994, Rétrospective   
            <span className="text-lg leading-relaxed text-justify italic font-garamond"> « Peintures 1981-1987 » </span>
            à l’Européenne des Arts et des Evénements, Paris, signature des 2 ouvrages de Nathalie Cottin :
            <span className="text-lg leading-relaxed text-justify italic font-garamond"> « Maurice Rocher peintures 1986-1993 » et « Entretiens avec Maurice Rocher, Le Peintre, Dieu et La Femme ». </span>
            </p>

            <p className="text-lg leading-relaxed not-italic mt-6 text-justify font-light">
            16 juin – 19 novembre 1995,   
            <span className="text-lg leading-relaxed text-justify italic font-garamond"> « Rétrospective en 4 thèmes », </span>
            Musée des Beaux-Arts de Clermont-Ferrand : Eglises, Notables, Femmes et Couples,  Suppliciés. <br />
            <span className="text-lg leading-relaxed text-justify italic font-garamond"> « Maurice Rocher, le dernier des maudits » </span>
            F. Monnin. <br />
            <span className="text-lg leading-relaxed text-justify italic font-garamond">«… de la période de l’Art Sacré jusqu’au « non retour » de ces dernières années. Ainsi, les Notables d’orgueils et de vanités se perdront dans l’illusion et la frivolité, les Couples d’étreintes et de passion finiront dans les abîmes et le néant, l’Homme de chair et de sang disparaîtra dans l’éternité, les Eglises de pierres et d’ornements deviendront révolte et cri du corps. » </span>
            A. Canet, C. Haas Commissaires de l’exposition
            </p>

            <p className="text-lg leading-relaxed not-italic mt-6 text-justify font-light">
            Décède le 12 juillet 1995.
            </p>

            <p className="text-lg leading-relaxed not-italic mt-6 text-justify font-light">
            « Son décès… aura suscité peu d’échos. Ce presque-inconnu, comme il aimait à se nommer, malgré les nombreuses rétrospectives qui se sont succédé…, l’est resté jusqu’au bout… peut-être saurons-nous ce que nous venons de perdre : un grand peintre. Une puissance de feu, de sexe et de Dieu, un crucifié de la société…
Blessé par la vie, diminué par la vue, Maurice Rocher semblait avoir trouvé une sorte d’apaisement vers la fin. Les lunettes obstruées d’un mauvais Scotch noir, les chaussures rafistolées, portant souvent cravate élimée et veste rapiécée, mais encore capable de rire, ce pessimiste fiévreux peignait ses noirs démons à la façon de fantômes du passé. Des anges des ténèbres devenus épures, enfin débarrassés de leur chair féminine, trop féminine, pour s’absorber dans un au-delà auquel il ne croyait plus, mais que sa peinture entière appelait de toutes ses forces. » Emmanuel Daydé
            </p>
            </section>
          </div>
        </div>




        <MainNav className="fixed top-0 left-0 right-0" />
      </div>
    </main>
  )
}

