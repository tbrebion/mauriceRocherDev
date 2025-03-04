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
      title: "SUPPLICIE 125 1992 116x89",
      description: "Au rasoir... supplicié-vitrail. \"La matière s'élime, épuisée,... déserte son faciès... Exsangue, de moins en moins lisible, il affleure, relique estampillée dans le linceuil de la toile. Alors le peintre parvient à mettre au jour sa lumière la plus enfouie. Car l'éternité ne se découvre qu'en s'approchant de ce qu'il y a de plus vivant.\" - Nathalie Cottin Ayache",
      image: "/rubriques/one/1SUPPLICIE.jpg",
    },
    {
      id: 2,
      title: "SUPPLICIE 142 1994 100x81",
      description: "",
      image: "/rubriques/one/1_2SUPPLICIE.jpg",
    },
    {
      id: 3,
      title: "VITRAIL WIMEREUX 1958 ST JEAN MARIE VIANNEY",
      description: "LA LUMIÈRE, JOYEUX et TENDRE",
      image: "/rubriques/one/1_3VITRAIL.jpg",
    },
    {
      id: 4,
      title: "VITRAIL WIMEREUX EGLISE IMMACULEE CONCEPTION",
      description: "",
      image: "/rubriques/one/1_4VITRAIL.jpg",
    },
    {
      id: 5,
      title: "VITRAIL WIMEREUX",
      description: "",
      image: "/rubriques/one/1_5VITRAIL.jpg",
    },
    {
      id: 6,
      title: "VITRAIL WIMEREUX",
      description: "",
      image: "/rubriques/one/1_6VITRAIL.jpg",
    },
    {
      id: 7,
      title: "VITRAIL WIMEREUX",
      description: "",
      image: "/rubriques/one/1_7VITRAIL.jpg",
    },
    {
      id: 8,
      title: "CROQUIS FUSAIN VIERGE de GUERNES 1954 58 150x65",
      description: "Maurice Rocher a fait des vitraux de 1946 à 1966.",
      image: "/rubriques/one/1_8CROQUIS.jpg",
    },
    {
      id: 9,
      title: "EGLISE NOTRE DAME DE GUERNES",
      description: "",
      image: "/rubriques/one/1_9EGLISE.jpg",
    },
    {
      id: 10,
      title: "MAQUETTE VITRAUX GUADALAJARA TEMPLO EXPIATORIO 1966 85",
      description: "",
      image: "/rubriques/one/2_1MAQUETTE.jpg",
    },
    {
      id: 11,
      title: "VITRAUX GUADALAJARA 1966 85",
      description: "",
      image: "/rubriques/one/2_2VITRAUX.jpg",
    },
    {
      id: 12,
      title: "VITRAUX GUADALAJARA 1966 85",
      description: "",
      image: "/rubriques/one/2_3GUADALAJARA.jpg",
    },
    {
      id: 13,
      title: "BASILIQUE d EVRON 1951",
      description: "",
      image: "/rubriques/one/2_4BASILIQUE.jpg",
    },
    {
      id: 14,
      title: "LES SAINTS EGLISE SAINT LOUIS BREST 1959",
      description: "",
      image: "/rubriques/one/2_5_LES_SAINTS.jpg",
    },
    {
      id: 15,
      title: "EGLISE-NOTRE DAME de CAVIGNY 1961",
      description: "",
      image: "/rubriques/one/2_6EGLISE.jpg",
    },
    {
      id: 16,
      title: "CHAPELLE du JUVENAT CHATEAULIN 1963",
      description: "",
      image: "/rubriques/one/2_7CHAPELLE.jpg",
    },
    {
      id: 17,
      title: "EGLISE NOTRE-DAME- DE-TOUTES-AIDES NANTES 1958",
      description: "",
      image: "/rubriques/one/2_8EGLISE.jpg",
    },
    {
      id: 18,
      title: "au CENTRE d ART SACRE 1948 avec G. Desvallières et J. Pichard",
      description: "MR a été aux Ateliers d'art sacré avec Maurice Denis et Georges Desvallières. \"Ce que m'apportait Denis sur le plan plastique, Desvallières me l'apportait sur le plan spirituel.\" - MR",
      image: "/rubriques/one/2_9CENTREdART.jpg",
    },
    {
      id: 19,
      title: "MAURICE ROCHER vers 1946 PEIGNANT 1 FRESQUE",
      description: "",
      image: "/rubriques/one/3_0MAURICEROCHER.jpg",
    },
    {
      id: 20,
      title: "FRESQUE Le VERBE et la PAROLE EGLISE ST DOMINIQUE PARIS 1946",
      description: "",
      image: "/rubriques/one/3_1FRESQUE.JPG",
    },
  ],
  "2": [
    {
      id: 1,
      title: "ÉTUDE EGLISE D'ÉVRON FONDS BAPTISMAUX, 1937-38",
      description: "Pendant 20 ans sa palette se limite à du noir et du brun.",
      image: "/rubriques/two/3_2.jpg",
    },
    {
      id: 2,
      title: "HARENGS 1946 64x100",
      description: "",
      image: "/rubriques/two/3_3.JPG",
    },
    {
      id: 3,
      title: "DESSIN L'USINE A GAZ de VERSAILLES 1950 MUSEE LAMBINET",
      description: "",
      image: "/rubriques/two/3_4.JPG",
    },
    {
      id: 4,
      title: "GOUACHE L'USINE A GAZ de VERSAILLES 1950 MUSEE LAMBINET",
      description: "",
      image: "/rubriques/two/3_5.JPG",
    },
    {
      id: 5,
      title: "PAYSAGE FOUR A CHAUX 1954 125x166",
      description: "",
      image: "/rubriques/two/3_6.jpg",
    },
    {
      id: 6,
      title: "SAINTE MADELEINE 1946 130x85",
      description: "",
      image: "/rubriques/two/3_7.jpg",
    },
    {
      id: 7,
      title: "LITHOGRAPHIE MUSEE de POITIERS",
      description: "",
      image: "/rubriques/two/3_8.JPG",
    },
    {
      id: 8,
      title: "SA FEMME GENEVIEVE 1944",
      description: "",
      image: "/rubriques/two/3_9.jpg",
    },
    {
      id: 9,
      title: "COUPLE, 1949 130x97",
      description: "Un voyage en Belgique lui fait découvrir le peintre expressionniste flamand Permek.",
      image: "/rubriques/two/4_0.jpg",
    },
    {
      id: 10,
      title: "MATERNITE 1950 156x120",
      description: "",
      image: "/rubriques/two/4_1.jpg",
    },
    {
      id: 11,
      title: "MATERNITE 1950 162x97",
      description: "",
      image: "/rubriques/two/4_2.jpg",
    },
    {
      id: 12,
      title: "FEMME ENCEINTE 1951 175x100",
      description: "",
      image: "/rubriques/two/4_3.jpg",
    },
    {
      id: 13,
      title: "MATERNITE 1952 116x81",
      description: "",
      image: "/rubriques/two/4_4.jpg",
    },
    {
      id: 14,
      title: "COUPLE 03 1954 162x97",
      description: "",
      image: "/rubriques/two/4_5.jpg",
    },
    {
      id: 15,
      title: "SAINT JEAN BAPTISTE 1953 239x68",
      description: "",
      image: "/rubriques/two/4_6.jpg",
    },
    {
      id: 16,
      title: "PETIT CORTEGE DU MORT 1953 89x116",
      description: "",
      image: "/rubriques/two/4_7.jpg",
    },
    {
      id: 17,
      title: "L'HOMME EN PRIERE 1952 FOND NATIONAL D ART CONTEMPORAIN 195x130",
      description: "",
      image: "/rubriques/two/4_8.jpg",
    },
    {
      id: 18,
      title: "HOMME EN PRIERE 1953 130x195",
      description: "",
      image: "/rubriques/two/4_9.jpg",
    },
    {
      id: 19,
      title: "L'HOMME A LA FOURCHE 1953 195x114",
      description: "",
      image: "/rubriques/two/5_0.jpg",
    },
    {
      id: 20,
      title: "L'HOMME A LA PELLE 1953",
      description: "",
      image: "/rubriques/two/5_1.jpg",
    },
    {
      id: 21,
      title: "ECCE HOMO 1953 231x63",
      description: "",
      image: "/rubriques/two/5_2.jpg",
    },
    {
      id: 22,
      title: "ECCE HOMO 1960 100x50",
      description: "",
      image: "/rubriques/two/5_3.jpg",
    },
    {
      id: 23,
      title: "ECCE HOMO 1960 120x80",
      description: "",
      image: "/rubriques/two/5_4.jpg",
    },
    {
      id: 24,
      title: "ECCE HOMO 1964 73x60",
      description: "",
      image: "/rubriques/two/5_5.jpg",
    },
    {
      id: 25,
      title: "SAINTE FACE 1960 73x60",
      description: "",
      image: "/rubriques/two/5_6.jpg",
    },
    {
      id: 26,
      title: "PROPHETE 1961 130x81",
      description: "",
      image: "/rubriques/two/5_7.jpg",
    },
    {
      id: 27,
      title: "CRUCIFIXION 1956 194x160",
      description: "",
      image: "/rubriques/two/5_8.jpg",
    },
    {
      id: 28,
      title: "CRUCIFIXION n°2 1963 100x81",
      description: "",
      image: "/rubriques/two/5_9.jpg",
    },
    {
      id: 29,
      title: "CRUCIFIXION 1964 100x73",
      description: "",
      image: "/rubriques/two/6_0.jpg",
    },
    {
      id: 30,
      title: "FUSAIN sur TOILE CRUCIFIXION 1960 220x139",
      description: "",
      image: "/rubriques/two/6_1.jpg",
    },
    {
      id: 31,
      title: "CRUCIFIXION 1984 85 46x38",
      description: "",
      image: "/rubriques/two/6_2.jpg",
    },
    {
      id: 32,
      title: "SCENE DE TAUROMACHIE, 1959 73x92",
      description: `De nombreux séjours en Espagne influencent son œuvre.
« Tout est dit, tout est résumé dans le geste du Torero dans l'arène, qui crée la beauté, éphémère de surcroît,
au risque de sa vie. » - MR`,
      image: "/rubriques/two/6_3.jpg",
    },
    {
      id: 33,
      title: "TAUROMACHIE 1962 41x33",
      description: "",
      image: "/rubriques/two/6_4.jpg",
    },
    {
      id: 34,
      title: "MAURICE ROCHER FLAMENCO",
      description: `« Tout est dit dans le "cante Jondo", ce chant profond où crie le sang de l’homme. » - MR`,
      image: "/rubriques/two/6_5.jpg",
    },
    {
      id: 35,
      title: "MAURICE ROCHER FLAMENCO",
      description: "",
      image: "/rubriques/two/6_6.jpg",
    },
    {
      id: 36,
      title: "TAUROMACHIE 1963 41x33",
      description: "",
      image: "/rubriques/two/6_7.jpg",
    },
    {
      id: 37,
      title: "SCENE de PICADOR 1963",
      description: "",
      image: "/rubriques/two/6_8.jpg",
    },
    {
      id: 38,
      title: "TORERO 1962 40,5x32",
      description: "",
      image: "/rubriques/two/6_9.jpg",
    },
    {
      id: 39,
      title: "TORERO 1963 55x46",
      description: "",
      image: "/rubriques/two/7_0.png",
    },
    {
      id: 40,
      title: "TORERO SUR PIED 1963 200x75",
      description: "",
      image: "/rubriques/two/7_1.jpg",
    },
    {
      id: 41,
      title: "TORERO 1963 70x23 ",
      description: "",
      image: "/rubriques/two/7_2.jpg",
    },
    {
      id: 42,
      title: "EGLISE 04, 1962 100x73",
      description: `« Je suis venu habiter Versailles en 1950, et c’est de là que sont nées ces façades baroques inspirées par la
cathédrale Saint-Louis… » - MR`,
      image: "/rubriques/two/7_3.jpg",
    },
    {
      id: 43,
      title: "MONOTYPE EGLISE 1965",
      description: "",
      image: "/rubriques/two/7_4.JPG",
    },
    {
      id: 44,
      title: "MONOTYPE EGLISE 1965",
      description: "",
      image: "/rubriques/two/7_5.JPG",
    },
    {
      id: 45,
      title: "EGLISE 10 1963 81x60",
      description: "",
      image: "/rubriques/two/7_6.jpg",
    },
    {
      id: 46,
      title: "EGLISE 04 1963 100x81",
      description: "",
      image: "/rubriques/two/7_7.jpg",
    },
    {
      id: 47,
      title: "EGLISE 09 1963 81x65",
      description: "",
      image: "/rubriques/two/7_8.jpg",
    },
    {
      id: 48,
      title: "RETABLE 1963 100x65",
      description: "",
      image: "/rubriques/two/7_9.jpg",
    },
    {
      id: 49,
      title: "RETABLE 1963 100x73",
      description: "",
      image: "/rubriques/two/8_0.jpg",
    },
    {
      id: 50,
      title: "MONOTYPE EGLISE 1966",
      description: "",
      image: "/rubriques/two/8_1.JPG",
    },
    {
      id: 51,
      title: "EGLISE 07 CATHEDRALE de NAMUR 1963 100x81",
      description: "",
      image: "/rubriques/two/8_2.jpg",
    },
    {
      id: 52,
      title: "EGLISE-TRAIN 14bis 1964 30x59",
      description: "",
      image: "/rubriques/two/8_3.jpg",
    },
    {
      id: 53,
      title: "GOUACHE EGLISE 1977 43x56",
      description: "",
      image: "/rubriques/two/8_4.jpg",
    },
    {
      id: 54,
      title: "NOCE 1964 65x100",
      description: "",
      image: "/rubriques/two/8_5.jpg",
    },
  ],
  "3": [
    {
      id: 1,
      title: "BOUQUET,1964 100x81",
      description: "« Le rose timide sur mes fleurs est devenu le rouge des lèvres de mes premiers visages de femme. » - MR",
      image: "/rubriques/three/8_6.JPG",
    },
    {
      id: 2,
      title: "LA GRANDE NOCE 1966 MUSEES de LAVAL 161x215",
      description: "",
      image: "/rubriques/three/8_7.jpg",
    },
    {
      id: 3,
      title: "CHRIST MEXICAIN 1964 130x162",
      description: "",
      image: "/rubriques/three/8_8.jpg",
    },
    {
      id: 4,
      title: "VISAGE 1965 46x38",
      description: "",
      image: "/rubriques/three/8_9.jpg",
    },
    {
      id: 5,
      title: "LES DEUX FEMMES 1965 100x81",
      description: "",
      image: "/rubriques/three/9_0.jpg",
    },
    {
      id: 6,
      title: "LA NOCE 1966 195x114",
      description: "",
      image: "/rubriques/three/9_1.jpg",
    },
    {
      id: 7,
      title: "NU METAPHYSIQUE 1966 97x195",
      description: "",
      image: "/rubriques/three/9_2.jpg",
    },
    {
      id: 8,
      title: "L'HOMME A L'OREILLE 1966 100x65",
      description: "",
      image: "/rubriques/three/9_3.JPG",
    },
    {
      id: 9,
      title: "BOUCHER n°1 1966 100x81",
      description: "",
      image: "/rubriques/three/9_4.JPG",
    },
    {
      id: 10,
      title: "TORERO n°9 1965 81x65",
      description: "",
      image: "/rubriques/three/9_5.jpg",
    },
    {
      id: 11,
      title: "TORERO 1965 65x54",
      description: "",
      image: "/rubriques/three/9_6.jpg",
    },
    {
      id: 12,
      title: "VEUVE DU TORERO 1966 100x65",
      description: "",
      image: "/rubriques/three/9_7.JPG",
    },
    {
      id: 13,
      title: "TORERO 1966 100x65",
      description: "",
      image: "/rubriques/three/9_8.JPG",
    },
    {
      id: 14,
      title: "VITRAIL LA FLAGELLATION 1970 HUGH LANE GALLERY DUBLIN 38x28",
      description: "",
      image: "/rubriques/three/9_8_2.JPG",
    },
    {
      id: 15,
      title: "CAMILO TORRES N° 2, 1966 100x81",
      description: `MORT de CAMILO TORRES
« Il est certain que mon "Révolutionnaire assassiné" est mon "Ecce Homo" d’hier. » - MR`,
      image: "/rubriques/three/9_9.JPG",
    },
    {
      id: 16,
      title: "MONOTYPE LE REVOLUTIONNAIRE ASSASSINE CAMILLO TORRES 1970",
      description: "",
      image: "/rubriques/three/10_0.JPG",
    },
    {
      id: 17,
      title: "MONOTYPE VISAGE 1969",
      description: "",
      image: "/rubriques/three/10_1.JPG",
    },
    {
      id: 18,
      title: "MONOTYPE VISAGE 1969",
      description: "",
      image: "/rubriques/three/10_2.JPG",
    },
    {
      id: 19,
      title: "MONOTYPE VISAGE 1969",
      description: "",
      image: "/rubriques/three/10_3.JPG",
    },
    {
      id: 20,
      title: "SON FILS JEAN-BAPTISTE mort en 1968",
      description: "La mort brutale de son fils noyé.",
      image: "/rubriques/three/10_4.jpg",
    },
    {
      id: 21,
      title: "FETE n°4 1968 162x130",
      description: "",
      image: "/rubriques/three/10_5.jpg",
    },
    {
      id: 22,
      title: "MANGEUSE D'HOMME n°1, 1968 130x97",
      description: `« cette « mangeuse d’homme » tant de fois peinte qu’il fallait donc que j’expérimente moi-même un jour » - MR`,
      image: "/rubriques/three/10_6.jpg",
    },
    {
      id: 23,
      title: "MANGEUSE D'HOMME n°1 1984 130x97",
      description: "",
      image: "/rubriques/three/10_7.jpg",
    },
    {
      id: 24,
      title: "FEMME LA GUERRE 1969 100x81",
      description: "",
      image: "/rubriques/three/10_8.jpg",
    },
    {
      id: 25,
      title: "BAIGNEUSE n°2 1970 162x97",
      description: "",
      image: "/rubriques/three/10_9.jpg",
    },
  ],
  "4": [
    {
      id: 1,
      title: "EGLISE 73 1972 74 81x54",
      description: "",
      image: "/rubriques/four/11_0.jpg",
    },
    {
      id: 2,
      title: "ÉGLISE 73, 1972-74 81x54",
      description: `1965
« Ces églises qui sont devenues des déserts, où « dans l’esprit du Concile » on a voulu tout changer... » - MR
« Il y avait là les plans de l’église qui allait être construite... En voyant ce projet j'ai dit « Vous ne pouvez pas
laisser construire cela » On m'a répondu « Que faire ? Démissionner ? » Quand on a une petite autorité en
général on n'a pas ce courage. L'église a été construite… En constatant que je me heurtais toujours à ce mur
d'incompétence... je suis rentré dans mon atelier et j'ai peint, à la suite, cinq visages rouges… Je n'avais plus le
désir de mettre ma peinture au service de la foi. » Entretiens avec Nathalie Cottin Ayache, 1988
« Comme un abcès qui mûrit (ou comme un fruit) il a fallu cette lente évolution, ou révolution, qui, à travers
les « états » et les problèmes de ma vie m’ont amené a cet éclatement, à cette violence qui a pris corps à
partir de 1965 dans mes visages et par le rouge. » - MR
« J’ai tourné le dos à la foi » MR n’a pas renié sa foi, il était en recherche de Dieu, il a cherché des réponses
par ses oeuvres jusqu à sa mort, toute sa vie son art a été transpercé par un dialogue avec Dieu, conflictuel
mais dialogue, à travers l’Ecce Homo ou l’Ange Noir...`,
      image: "/rubriques/four/11_1.jpg",
    },
    {
      id: 3,
      title: "ÉGLISE CARNAVAL DE RIO n°2, 1972 116x89",
      description: `« Deux seules choses peuvent me délivrer : ou retrouver Dieu, ou céder à l’aventure.
Très vite, ces façades allaient devenir des visages, églises-femmes, carnaval…, gueule ouverte… ou
anthropomorphe…, sur la fin, cette église des angoisses couverte d’ulcères. » - MR`,
      image: "/rubriques/four/11_2.jpg",
    },
    {
      id: 4,
      title: "EGLISE 74 des TENEBRES 1974 81x65",
      description: "",
      image: "/rubriques/four/11_3.jpg",
    },
    {
      id: 5,
      title: "EGLISE DU REQUIEM ALLEMAND 1974 116x89",
      description: "",
      image: "/rubriques/four/11_4.jpg",
    },
    {
      id: 6,
      title: "EGLISE 92 DES ANGOISSES, 1975 100x81",
      description: `« la façade baroque se métamorphose progressivement en être vivant, elle se désarticule, s’étire, s’anime, se
met en route. L’Église de la rédemption est devenue l’Église des angoisses. » - Jean-Marie Dunoyer`,
      image: "/rubriques/four/11_5.jpg",
    },
    {
      id: 7,
      title: "LAVIS EGLISE 1976",
      description: "",
      image: "/rubriques/four/11_6.JPG",
    },
    {
      id: 8,
      title: "LAVIS EGLISE 1976",
      description: "",
      image: "/rubriques/four/11_7.JPG",
    },
    {
      id: 9,
      title: "EGLISE 65 DES ORAGES, 1973-84 130x97",
      description: "« parcours douloureux d’un homme qui va des certitudes de la Foi vers un Ciel à jamais vide » - MR , 1995",
      image: "/rubriques/four/11_8.JPG",
    },
    {
      id: 10,
      title: "EGLISE 78 CATHEDRALE ITALIENNE IL DUOMO non daté 100x81",
      description: "",
      image: "/rubriques/four/11_9.JPG",
    },
    {
      id: 11,
      title: "EGLISE 110 1977 100x81",
      description: "",
      image: "/rubriques/four/12_0.jpg",
    },
    {
      id: 12,
      title: "EGLISE SACRE COEUR n°6 1990 100x81",
      description: "",
      image: "/rubriques/four/12_1.jpg",
    },
    {
      id: 13,
      title: "GOUACHE EGLISE 1977",
      description: "",
      image: "/rubriques/four/12_2.JPG",
    },
    {
      id: 14,
      title: "GOUACHE EGLISE 1977",
      description: "",
      image: "/rubriques/four/12_3.jpg",
    },
    {
      id: 15,
      title: "GOUACHE EGLISE 1977",
      description: "",
      image: "/rubriques/four/12_4.jpg",
    },
    {
      id: 16,
      title: "GOUACHE EGLISE 1977",
      description: "",
      image: "/rubriques/four/12_5.jpg",
    },
    {
      id: 17,
      title: "GOUACHE EGLISE-FEMME 1977",
      description: "",
      image: "/rubriques/four/12_6.jpg",
    },
    {
      id: 18,
      title: "GOUACHE EGLISE-FEMME 77ou78",
      description: "",
      image: "/rubriques/four/12_7.JPG",
    },
    {
      id: 19,
      title: "GOUACHE EGLISE 1977",
      description: "",
      image: "/rubriques/four/12_8.jpg",
    },
    {
      id: 20,
      title: "GOUACHE EGLISE 1978",
      description: "",
      image: "/rubriques/four/12_9.JPG",
    },
    {
      id: 21,
      title: "GOUACHE EGLISE-CHAT 1978",
      description: "",
      image: "/rubriques/four/13_0.jpg",
    },
    {
      id: 22,
      title: "GOUACHE EGLISE 1978",
      description: "",
      image: "/rubriques/four/13_1.jpg",
    },
    {
      id: 23,
      title: "GOUACHE EGLISE 1978",
      description: "",
      image: "/rubriques/four/13_2.JPG",
    },
    {
      id: 24,
      title: "VISAGE-MATIÈRE ÉGLISE PERSONNAGE, 1981 82",
      description: `VISAGES-MATIÈRES : Petites Sculptures
« Conservant des restes de couleur, il se prit à les déposer sur un support cartonné, laissant toute latitude au
hasard qui allait donner corps d’abord à des façades d’églises avant de les muer en visages. » - Nathalie Cottin
Ayache
« en revoyant ce matin la dizaine de petites « églises-matières »en cours qui deviennent toutes des visages, je
ne pouvais m’empêcher de penser que j’atteignais peut-être dans ces visages, l’expressionnisme encore, mais
dépassé. Comme un terme, et plus un terme qu’un aboutissement, comme si un "plus loin" pour la première
fois n’était plus possible.
Ces « visages-matières » ont une évolution très différente de celle des toiles. Ces épaisseurs sont posées les
unes sur les autres. J’ajoute des couleurs, des matières au fil des mois, des années. Certains sont en cours
depuis dix ans. Je les reprends sans cesse. Ils sont tous de très petit format, autour de 25x16 cms. Je les
retouche ou je les casse. J’en sélectionne fort peu. » - MR`,
      image: "/rubriques/four/13_3.jpg",
    },
    {
      id: 25,
      title: "VISAGE-MATIERE L USURIER 1982-83",
      description: "",
      image: "/rubriques/four/13_4.jpg",
    },
    {
      id: 26,
      title: "VISAGE-MATIERE 1977-95",
      description: "",
      image: "/rubriques/four/13_5.jpg",
    },
    {
      id: 27,
      title: "VISAGE-MATIERE BUSTE FEMME 1981-88",
      description: "",
      image: "/rubriques/four/13_6.jpg",
    },
    {
      id: 28,
      title: "VISAGE-MATIERE 1977-95",
      description: "",
      image: "/rubriques/four/13_7.jpg",
    },
    {
      id: 29,
      title: "VISAGE-MATIERE MARIEE 1977-95",
      description: "",
      image: "/rubriques/four/13_8.jpg",
    },
    {
      id: 30,
      title: "VISAGE-MATIERE 1977-95",
      description: "",
      image: "/rubriques/four/13_9.jpg",
    },
    {
      id: 31,
      title: "VISAGE- MATIERE BUSTE PERSONNAGE 1985-86",
      description: "",
      image: "/rubriques/four/14_0.jpg",
    },
    {
      id: 32,
      title: "VISAGE-MATIERE 1977-95",
      description: "",
      image: "/rubriques/four/14_1.jpg",
    },
    {
      id: 33,
      title: "VISAGE-MATIERE 1977-95",
      description: "",
      image: "/rubriques/four/14_2.jpg",
    },
  ],
  "5": [
    {
      id: 1,
      title: "JUGE, 1967 61x50",
      description: `NOTABLES
« .. la caricature sort de ses gonds, sublimée... Maurice Rocher... fouille les viandes avariées, en fait gicler la
hideur morale. » - Jean-Marie Dunoyer`,
      image: "/rubriques/five/14_3.jpg",
    },
    {
      id: 2,
      title: "GENERAL n°1 1968 100x81",
      description: "",
      image: "/rubriques/five/14_4.jpg",
    },
    {
      id: 3,
      title: "GENERAL n°3 1968 100x81",
      description: "",
      image: "/rubriques/five/14_5.jpg",
    },
    {
      id: 4,
      title: "GENERAL n°6 AUTRICHIEN 1969 100x81",
      description: "",
      image: "/rubriques/five/14_6.jpg",
    },
    {
      id: 5,
      title: "GENERAL n° 5 1969 100x81",
      description: "",
      image: "/rubriques/five/14_7.jpg",
    },
    {
      id: 6,
      title: "FEMME du GENERAL La Générale 1971 100x81",
      description: "",
      image: "/rubriques/five/14_8.jpg",
    },
    {
      id: 7,
      title: "MINISTRE 1971 92x73",
      description: "",
      image: "/rubriques/five/14_9.jpg",
    },
    {
      id: 8,
      title: "L'HOMME AU CHAPEAU 1969 100x81",
      description: "",
      image: "/rubriques/five/15_0.jpg",
    },
    {
      id: 9,
      title: "LE VIEUX CHANOINE 1975 100x81",
      description: "",
      image: "/rubriques/five/15_1.jpg",
    },
    {
      id: 10,
      title: "MARECHAL 1977 116x89",
      description: "",
      image: "/rubriques/five/15_2.jpg",
    },
    {
      id: 11,
      title: "FEMME LULU 1979 100x81",
      description: "",
      image: "/rubriques/five/15_3.jpg",
    },
    {
      id: 12,
      title: "AMIRAL SEBASTOPOL 1973 100x81",
      description: "",
      image: "/rubriques/five/15_4.jpg",
    },
    {
      id: 13,
      title: "GRAND VISAGE n°1 1974 162x130",
      description: "",
      image: "/rubriques/five/15_5.jpg",
    },
    {
      id: 14,
      title: "AMBASSADEUR BLEU 1974 89x116",
      description: "",
      image: "/rubriques/five/15_6.jpg",
    },
    {
      id: 15,
      title: "LE MARECHAL DECORE 1975 116x89",
      description: "",
      image: "/rubriques/five/15_7.jpg",
    },
    {
      id: 16,
      title: "AUDIENCE n°2 L Attente n°1 1976 89x116",
      description: "",
      image: "/rubriques/five/15_8.jpg",
    },
    {
      id: 17,
      title: "AUDIENCE n°1 1976 89x116",
      description: "",
      image: "/rubriques/five/15_9.jpg",
    },
    {
      id: 18,
      title: "AMBASSADEUR CORDON ROUGE 1977 65x54",
      description: "",
      image: "/rubriques/five/16_0.jpg",
    },
    {
      id: 19,
      title: "MORT DU PRESIDENT 1976 97x130",
      description: "",
      image: "/rubriques/five/16_1.jpg",
    },
    {
      id: 20,
      title: "CROQUIS PETITE MORT DE FRANCO 1976",
      description: "",
      image: "/rubriques/five/16_2.jpg",
    },
    {
      id: 21,
      title: "MORT DE FRANCO n°2 1977 130x97",
      description: "",
      image: "/rubriques/five/16_3.jpg",
    },
    {
      id: 22,
      title: "MORT DE LA PRESIDENTE 1982 146x114",
      description: "",
      image: "/rubriques/five/16_4.jpg",
    },
    {
      id: 23,
      title: "INVALIDE 1979 116x89",
      description: "",
      image: "/rubriques/five/16_5.jpg",
    },
    {
      id: 24,
      title: "GOUACHE L INVALIDE 1979",
      description: "",
      image: "/rubriques/five/16_6.jpg",
    },
    {
      id: 25,
      title: "ACADEMICIEN n°1 1979 116x89",
      description: "",
      image: "/rubriques/five/16_7.jpg",
    },
    {
      id: 26,
      title: "VISAGE-MATIERE MARIEE-COQ 1977-95",
      description: "",
      image: "/rubriques/five/16_8.jpg",
    },
    {
      id: 27,
      title: "ENCRE de CHINE BUSTE 1970",
      description: "",
      image: "/rubriques/five/16_9.JPG",
    },
    {
      id: 28,
      title: "NOTAIRE n°5 1982 100x81",
      description: "",
      image: "/rubriques/five/17_0.jpg",
    },
    {
      id: 29,
      title: "HOMME VERT 1987 162x130",
      description: "",
      image: "/rubriques/five/17_1.jpg",
    },
    {
      id: 30,
      title: "LAVIS VISAGE 1971",
      description: "",
      image: "/rubriques/five/17_2.JPG",
    },
  ],
  "6": [
    {
      id: 1,
      title: "MONTAGE n°1, 1965 164x115",
      description: `VISAGES
« ... visages tendus, angoissés, presque toujours levés vers le haut, en interrogation, attendant une réponse
qui ne viendra jamais, d’un ciel qui, au fil des années se fermera... Visages toujours et encore, des centaines
de visages, visages qui devenaient des façades d’églises, ou l’inverse parfois, torturés, laminés, pour aboutir à
ces visages-matières de maintenant. » - MR`,
      image: "/rubriques/six/17_3.jpg",
    },
    {
      id: 2,
      title: "MONTAGE n°2 1972 167X132",
      description: "",
      image: "/rubriques/six/17_4.jpg",
    },
    {
      id: 3,
      title: "VISAGE BLEU 1973 46x38",
      description: "",
      image: "/rubriques/six/17_5.jpg",
    },
    {
      id: 4,
      title: "LAVIS VISAGE 1969",
      description: "",
      image: "/rubriques/six/17_6.JPG",
    },
    {
      id: 5,
      title: "HOMME AU CIGARE 1975 41x33",
      description: "",
      image: "/rubriques/six/17_7.jpg",
    },
    {
      id: 6,
      title: "LAVIS VISAGE 1970",
      description: "",
      image: "/rubriques/six/17_8.JPG",
    },
    {
      id: 7,
      title: "SUPPLICIE 1988 46x38",
      description: "",
      image: "/rubriques/six/17_9.jpg",
    },
    {
      id: 8,
      title: "LAVIS VISAGE 1977",
      description: "",
      image: "/rubriques/six/18_0.JPG",
    },
    {
      id: 9,
      title: "LAVIS VISAGE 1970",
      description: "",
      image: "/rubriques/six/18_1.JPG",
    },
    {
      id: 10,
      title: "LAVIS VISAGE 1969",
      description: "",
      image: "/rubriques/six/18_2.JPG",
    },
    {
      id: 11,
      title: "LAVIS VISAGE 1977",
      description: "",
      image: "/rubriques/six/18_3.JPG",
    },
    {
      id: 12,
      title: "LAVIS VISAGE 1970",
      description: "",
      image: "/rubriques/six/18_4.JPG",
    },
    {
      id: 13,
      title: "LAVIS VISAGE 1970",
      description: "",
      image: "/rubriques/six/18_5.JPG",
    },
    {
      id: 14,
      title: "LAVIS VISAGE 1975",
      description: "",
      image: "/rubriques/six/18_6.JPG",
    },
    {
      id: 15,
      title: "LAVIS VISAGE 1969",
      description: "",
      image: "/rubriques/six/18_7.jpg",
    },
    {
      id: 16,
      title: "LAVIS VISAGE 1970",
      description: "",
      image: "/rubriques/six/18_8.JPG",
    },
    {
      id: 17,
      title: "LAVIS VISAGE 1970",
      description: "",
      image: "/rubriques/six/18_9.JPG",
    },
    {
      id: 18,
      title: "LAVIS VISAGE 1970",
      description: "",
      image: "/rubriques/six/19_0.JPG",
    },
    {
      id: 19,
      title: "LAVIS VISAGE 1970",
      description: "",
      image: "/rubriques/six/19_1.JPG",
    },
    {
      id: 20,
      title: "LAVIS VISAGE 1969",
      description: "",
      image: "/rubriques/six/19_2.JPG",
    },
    {
      id: 21,
      title: "LAVIS VISAGE 1970",
      description: "",
      image: "/rubriques/six/19_3.JPG",
    },
    {
      id: 22,
      title: "LAVIS VISAGE 1976",
      description: "",
      image: "/rubriques/six/19_4.JPG",
    },
    {
      id: 23,
      title: "LAVIS VISAGE",
      description: "",
      image: "/rubriques/six/19_5.jpg",
    },
    {
      id: 24,
      title: "LAVIS VISAGE 1975",
      description: "",
      image: "/rubriques/six/19_6.JPG",
    },
    {
      id: 25,
      title: "MONTAGE n°23 1981 173x116",
      description: "",
      image: "/rubriques/six/19_7.jpg",
    },
    {
      id: 26,
      title: "EURIPIDE n°2 1982 65x54",
      description: "",
      image: "/rubriques/six/19_8.jpg",
    },
    {
      id: 27,
      title: "EXPOSITION 21 Mars 24 Mai 2025",
      description: "",
      image: "/rubriques/six/19_9.png",
    },
  ],
  "7": [
    {
      id: 1,
      title: "EXPOSITION du Sacré à la Comédie Humaine",
      description: "",
      image: "/rubriques/seven/20_0.png",
    },
    {
      id: 2,
      title: "FEMME-COQ, 1978 100x73",
      description: `« Maurice Rocher vit et peint dans l’absolu. Il bouscule les bornes du marivaudage et arrache ses masques à la
société bien pensante. Il lui en plaque d’autres qui lui collent à la peau... Le profil de telle ; sur laquelle un
soupirant se penche, ne s’allonge-t-il pas en groin ? » - Jean-Marie Dunoyer`,
      image: "/rubriques/seven/20_1.jpg",
    },
    {
      id: 3,
      title: "GOUACHE LA FEMME-COQ 1978",
      description: "",
      image: "/rubriques/seven/20_2.jpg",
    },
    {
      id: 4,
      title: "FEMME COURTISEE 1982 130x81",
      description: "",
      image: "/rubriques/seven/20_3.jpg",
    },
    {
      id: 5,
      title: "COURTISANE n°3 Melle JULIE 1983 97x130",
      description: "",
      image: "/rubriques/seven/20_4.jpg",
    },
    {
      id: 6,
      title: "RECEPTION CHEZ LA GENERALE 1982 146x114",
      description: "",
      image: "/rubriques/seven/20_5.jpg",
    },
    {
      id: 7,
      title: "VEUVE AU BOUQUET 1982 146x114",
      description: "",
      image: "/rubriques/seven/20_6.jpg",
    },
    {
      id: 8,
      title: "VEUVE AU FESTIVAL 1982 162x130",
      description: "",
      image: "/rubriques/seven/20_7.jpg",
    },
    {
      id: 9,
      title: "ENCRE de CHINE GOUACHE LE SALON 1978 MUSEE TAVET-DELACOUR",
      description: "",
      image: "/rubriques/seven/20_8.jpg",
    },
    {
      id: 10,
      title: "GOUACHE L'ANNIVERSAIRE de la REINE LA TRIBUNE PRINCIERE 1981",
      description: "",
      image: "/rubriques/seven/20_9.JPG",
    },
    {
      id: 11,
      title: "PRESENTATION n°1 1983 130x97",
      description: "",
      image: "/rubriques/seven/21_0.jpg",
    },
    {
      id: 12,
      title: "PRESIDENTE n°4 1984 130x97",
      description: "",
      image: "/rubriques/seven/21_1.jpg",
    },
    {
      id: 13,
      title: "PRESIDENTE ROUGE 1984 116x89",
      description: "",
      image: "/rubriques/seven/21_2.jpg",
    },
    {
      id: 14,
      title: "VISAGE-MATIERE 1986-87",
      description: "",
      image: "/rubriques/seven/21_3.jpg",
    },
    {
      id: 15,
      title: "FEMME AU FESTIVAL 1986 162x97",
      description: "",
      image: "/rubriques/seven/21_4.jpg",
    },
    {
      id: 16,
      title: "TRIO 1984 116 x 89",
      description: "",
      image: "/rubriques/seven/21_5.jpg",
    },
    {
      id: 17,
      title: "ENTREMETTEUSE n°4 1984 89x116",
      description: "",
      image: "/rubriques/seven/21_6.jpg",
    },
    {
      id: 18,
      title: "GOUACHE SCENE 1981",
      description: "",
      image: "/rubriques/seven/21_7.jpg",
    },
    {
      id: 19,
      title: "ENTREMETTEUSE n°5 1984 97x130",
      description: "",
      image: "/rubriques/seven/21_8.jpg",
    },
    {
      id: 20,
      title: "LES 2 FEMMES n°5 1985 89x116",
      description: "",
      image: "/rubriques/seven/21_9.jpg",
    },
    {
      id: 21,
      title: "1988 DANS L ATELIER",
      description: "",
      image: "/rubriques/seven/22_0.jpg",
    },
    {
      id: 22,
      title: "MANGEUSE D'HOMME n°8 1984 130x162",
      description: "",
      image: "/rubriques/seven/22_1.jpg",
    },
    {
      id: 23,
      title: "PROTECTEUR 1986 130x162",
      description: "",
      image: "/rubriques/seven/22_2.jpg",
    },
    {
      id: 24,
      title: "NOCE n°3 1985 87 130x162",
      description: "",
      image: "/rubriques/seven/22_3.jpg",
    },
    {
      id: 25,
      title: "GOUACHE SCENE 1978",
      description: "",
      image: "/rubriques/seven/22_4.jpg",
    },
    {
      id: 26,
      title: "GOUACHE LE SOFA 2 1978",
      description: "",
      image: "/rubriques/seven/22_5.jpg",
    },
    {
      id: 27,
      title: "GOUACHE LA GRILLE 3 1978",
      description: "",
      image: "/rubriques/seven/22_6.jpg",
    },
    {
      id: 28,
      title: "GOUACHE LES 3 FEMMES 1978",
      description: "",
      image: "/rubriques/seven/22_7.JPG",
    },
    {
      id: 29,
      title: "GOUACHE SCENE 1981",
      description: "",
      image: "/rubriques/seven/22_8.jpg",
    },
    {
      id: 30,
      title: "GOUACHE 1983",
      description: "",
      image: "/rubriques/seven/22_8_1.jpg",
    },
    {
      id: 31,
      title: "GOUACHE SCENE 1981",
      description: "",
      image: "/rubriques/seven/22_9.jpg",
    },
    {
      id: 32,
      title: "GOUACHE SCENE 1981",
      description: "",
      image: "/rubriques/seven/23_0.jpg",
    },
    {
      id: 33,
      title: "GOUACHE SCENE 1978",
      description: "",
      image: "/rubriques/seven/23_1.jpg",
    },
    {
      id: 34,
      title: "GOUACHE FEMME 1980",
      description: "",
      image: "/rubriques/seven/23_2.jpg",
    },
    {
      id: 35,
      title: "CARMEN n°1 1984 130 x 97",
      description: "",
      image: "/rubriques/seven/23_3.jpg",
    },
    {
      id: 36,
      title: "CARMEN n°3 1984 MUSEE de TROYES",
      description: "",
      image: "/rubriques/seven/23_4.jpg",
    },
    {
      id: 37,
      title: "CARMEN n°7 1987 88 146x114",
      description: "",
      image: "/rubriques/seven/23_5.jpg",
    },
    {
      id: 38,
      title: "GOUACHE 1980",
      description: "",
      image: "/rubriques/seven/23_6.jpg",
    },
    {
      id: 39,
      title: "GRANDE DEVOREUSE n°1 1988 146x114",
      description: "",
      image: "/rubriques/seven/23_7.jpg",
    },
    {
      id: 40,
      title: "MARIEE n°4 1988 146x114",
      description: "",
      image: "/rubriques/seven/23_8.jpg",
    },
    {
      id: 41,
      title: "ENCRE de CHINE SCENE",
      description: "",
      image: "/rubriques/seven/23_9.JPG",
    },
    {
      id: 42,
      title: "VISAGE-MATIERE 1977-95",
      description: "",
      image: "/rubriques/seven/24_0.jpg",
    },
    {
      id: 43,
      title: "VISAGE-MATIERE BUSTE FEMME 1982",
      description: "",
      image: "/rubriques/seven/24_1.jpg",
    },
  ],
  "8": [
    {
      id: 1,
      title: "COUPLE 23, 1978 92x73",
      description: `« Dans ma vie, la femme a été une obsession. Dans les moments où j’avais tous les éléments pour être
heureux, la Femme mythique s’est toujours interposée. C’était la femme de chair que je rencontrais en allant
dans la rue. Elle s’interposait comme un écran. » - MR`,
      image: "/rubriques/eight/24_2.jpg",
    },
    {
      id: 2,
      title: "COUPLE 31 1981 130x97",
      description: "",
      image: "/rubriques/eight/24_3.jpg",
    },
    {
      id: 3,
      title: "COUPLE 26 1980 100x81",
      description: "",
      image: "/rubriques/eight/24_4.jpg",
    },
    {
      id: 4,
      title: "COUPLE 27 1980 100x81",
      description: "",
      image: "/rubriques/eight/24_5.jpg",
    },
    {
      id: 5,
      title: "COUPLE 28bis AU VIEILLARD DECORE 1983 100x81",
      description: "",
      image: "/rubriques/eight/24_6.jpg",
    },
    {
      id: 6,
      title: "MONOTYPE COUPLE 1969",
      description: "",
      image: "/rubriques/eight/24_7.JPG",
    },
    {
      id: 7,
      title: "GOUACHE COUPLE 1977",
      description: "",
      image: "/rubriques/eight/24_8.jpg",
    },
    {
      id: 8,
      title: "GOUACHE COUPLE 1978",
      description: "",
      image: "/rubriques/eight/24_9.JPG",
    },
    {
      id: 9,
      title: "GOUACHE COUPLE",
      description: "",
      image: "/rubriques/eight/25_0.jpg",
    },
    {
      id: 10,
      title: "GOUACHE COUPLE 1980",
      description: "",
      image: "/rubriques/eight/25_1.JPG",
    },
    {
      id: 11,
      title: "LAVIS COUPLE 1970",
      description: "",
      image: "/rubriques/eight/25_2.jpg",
    },
    {
      id: 12,
      title: "LAVIS COUPLE 1971",
      description: "",
      image: "/rubriques/eight/25_3.JPG",
    },
    {
      id: 13,
      title: "LAVIS LA GENERALE ET SON AMANT 1969",
      description: "",
      image: "/rubriques/eight/25_4.JPG",
    },
    {
      id: 14,
      title: "LAVIS COUPLE 1976",
      description: "",
      image: "/rubriques/eight/25_5.JPG",
    },
    {
      id: 15,
      title: "COUPLE 52 1983 100x81",
      description: "",
      image: "/rubriques/eight/25_6.jpg",
    },
    {
      id: 16,
      title: "COUPLE 58, 1985 100x81",
      description: `« Il n’y eut que quarante couples entre 1944 et 1983 mais cent cinquante furent exécutés de 1983 à 1987. » -
Nathalie Cottin Ayache, 1994`,
      image: "/rubriques/eight/25_7.jpg",
    },
    {
      id: 17,
      title: "GOUACHE COUPLE 1980",
      description: "",
      image: "/rubriques/eight/25_8.jpg",
    },
    {
      id: 18,
      title: "GOUACHE LOULOU, 1980",
      description: `OEUVRES-PAPIER
« Vu le fim « Loulou » de Pabst... Stupéfait d’y retrouver tous les thèmes de mes gouaches... tout est là et ces
mille gouaches peintes depuis 2 ans étaient déjà dans ce film. » - MR`,
      image: "/rubriques/eight/25_9.jpg",
    },
    {
      id: 19,
      title: "COUPLE 93 1984 130x97",
      description: "",
      image: "/rubriques/eight/26_0.jpg",
    },
    {
      id: 20,
      title: "ENCRE de CHINE 1978",
      description: "",
      image: "/rubriques/eight/26_1.JPG",
    },
  ],
  "9": [
    {
      id: 1,
      title: "COUPLE 100 de la PASSION, 1984 130x97",
      description: "",
      image: "/rubriques/nine/26_2.jpg",
    },
    {
      id: 2,
      title: "PERE JERZY POPIELUSZCO ASSASSINE 1984",
      description: "MR a vu une photographie du peintre polonais POPIELUSZKO, prise à la morgue.",
      image: "/rubriques/nine/26_3_0.jpg",
    },
    {
      id: 3,
      title: "SUPPLICIE 1, 1984 100x81",
      description: `« Entre janvier 1986 et le 25 juillet 1986, j’ai peint 25 suppliciés : des visages laminés, déchirés, boursouflés,
sanglants. Je les peignais en alternance avec les couples. Je les mettais souvent par panneau de six, je lesinstallais dans le fond de l’atelier pour les regarder, de façon fraternelle. Je m’y retrouvais, j’avais besoin d’
eux. Ils m’aidaient à vivre.
... des visages en interrogation ayant dépassé la notion physique de l’homme supplicié pour atteindre une
sorte d’intemporalité. Rouges toujours, de ce rouge sang séché avec sa connotation espagnole et
tauromachique à laquelle je ne puis échapper. Je ne puis rien peindre d’autre, je continue à les contempler
côte à côte au fond de l’atelier souvent, ils sont ma force, personne n’a peint cela. » - MR`,
      image: "/rubriques/nine/26_3_2.jpg",
    },
    {
      id: 4,
      title: "LAVIS VISAGE 1969",
      description: "",
      image: "/rubriques/nine/26_4.JPG",
    },
    {
      id: 5,
      title: "COUPLE 105, 1984 130x97",
      description: "« le couple 105... fut le point de départ de la série des femmes aux seins. Dix-huit en tout. » - MR",
      image: "/rubriques/nine/26_5.jpg",
    },
    {
      id: 6,
      title: "COUPLE 107, Femme aux seins",
      description: "« j’avais cette liberté du geste... cette audace dans le choix des couleurs posées au doigt... » - MR",
      image: "/rubriques/nine/26_6.jpg",
    },
    {
      id: 7,
      title: "COUPLE 49bis 1985 81x65",
      description: "",
      image: "/rubriques/nine/26_7.jpg",
    },
    {
      id: 8,
      title: "COUPLE 109 1984 130x97",
      description: "",
      image: "/rubriques/nine/26_8.jpg",
    },
    {
      id: 9,
      title: "VISAGE-MATIERE JULIETTE 1985-88",
      description: "",
      image: "/rubriques/nine/26_9.jpg",
    },
    {
      id: 10,
      title: "COUPLE 159 1985 130x97",
      description: "",
      image: "/rubriques/nine/27_0.jpg",
    },
    {
      id: 11,
      title: "SUPPLICIE 15 1985 100x81",
      description: "",
      image: "/rubriques/nine/27_1.jpg",
    },
    {
      id: 12,
      title: "COUPLE 143 1985 86 130x97",
      description: "",
      image: "/rubriques/nine/27_2.jpg",
    },
    {
      id: 13,
      title: "COUPLE 157 1985 86 100x81",
      description: "",
      image: "/rubriques/nine/27_3.jpg",
    },
    {
      id: 14,
      title: "COUPLE 180 FURIE GOYESQUE, 1986 116x89",
      description: `« Peindre c’est déchirer de sa chair pour l’étaler sur la toile... C’est livrer ce que les autres cachent...
L’expressionnisme naît non de l’intelligence, mais du coeur, de l’instinct, de la passion. Il n’est ni figuratif ni
abstrait, il est comme une forme vitale, au-delà du conscient.
L’expressionnisme est sacré.
Cri des profondeurs, appel angoissé, interrogation existentielle, il naît de la souffrance, jamais du bonheur.
On a toujours tué les prophètes, on ne supporte pas les expressionnistes. Ils disent ce que les autres taisent. »
- MR`,
      image: "/rubriques/nine/27_4.jpg",
    },
    {
      id: 15,
      title: "COUPLE 164 1986 100x81",
      description: "",
      image: "/rubriques/nine/27_5.jpg",
    },
    {
      id: 16,
      title: "COUPLE 203 COUPLE DESCENTE DE CROIX 1988 116x89",
      description: "",
      image: "/rubriques/nine/27_6.jpg",
    },
    {
      id: 17,
      title: "FEMME GRISE n°1 COUPLE 218 1988 130x97",
      description: "",
      image: "/rubriques/nine/27_7.jpg",
    },
    {
      id: 18,
      title: "SUPPLICIE vers 1985 MUSEE de la CASTRE",
      description: "",
      image: "/rubriques/nine/27_8.jpg",
    },
    {
      id: 19,
      title: "SUPPLICIE 12 1985 100x81",
      description: "",
      image: "/rubriques/nine/27_9.jpg",
    },
    {
      id: 20,
      title: "SUPPLICIE 21 CHRISTIQUE, 1986 120x80",
      description: `« Combien de temps vais-je jouer ainsi avec le feu avant moi aussi de devenir, physiquement, comme l’un d’
entre eux... Demain, demain, serai-je le №21... » - MR`,
      image: "/rubriques/nine/28_0.jpg",
    },
    {
      id: 21,
      title: "SUPPLICIE 24 TAUROMACHIQUE, 1986 100x81",
      description: `« Ce soir, je me reconnais totalement dans ce "supplicié" au cou penché. Je ne voudrais vendre aucun de ces
"suppliciés", les vingt derniers en tout cas, les "sangs séchés", j’en ai trop besoin pour vivre, à moins que ce ne
soit pour mourir car que pourrai-je peindre après cela. » - MR`,
      image: "/rubriques/nine/28_1.jpg",
    },
    {
      id: 22,
      title: "SUPPLICIE 42 1986 100x81",
      description: "",
      image: "/rubriques/nine/28_2.jpg",
    },
    {
      id: 23,
      title: "VISAGE-MATIERE L AVOCAT 1983-90",
      description: "",
      image: "/rubriques/nine/28_3.jpg",
    },
    {
      id: 24,
      title: "SUPPLICIE 19 1988 100x81",
      description: "",
      image: "/rubriques/nine/28_4.JPG",
    },
    {
      id: 25,
      title: "COUPLE 178 1988 89x116",
      description: "",
      image: "/rubriques/nine/28_5.jpg",
    },
    {
      id: 26,
      title: "COUPLE 227, 1989 130x97",
      description: "Pour l’homme c’est le dernier affrontement.",
      image: "/rubriques/nine/28_6.jpg",
    },
    {
      id: 27,
      title: "SUPPLICIE 69 1990 100x81",
      description: "",
      image: "/rubriques/nine/28_7.jpg",
    },
    {
      id: 28,
      title: "SUPPLICIE 114 1990 100x81",
      description: "",
      image: "/rubriques/nine/28_8.jpg",
    },
    {
      id: 29,
      title: "SUPPLICIE 102 1991 100x81",
      description: "",
      image: "/rubriques/nine/28_9.jpg",
    },
    {
      id: 30,
      title: "SUPPLICIE 118 1992 100x81",
      description: "",
      image: "/rubriques/nine/29_0.jpg",
    },
  ],
  "10": [
    {
      id: 1,
      title: "FEMME PERDUE n°16, 1991 100x81",
      description: `« Au delà du Styx... Aux franges de l’abîme, le couple survit, enchaîné dans les mailles de son histoire
inextricable, et dont nul, pas même lui, ne parvient à déchiffrer l’énigme. Une fois accoutumé à la pénombre,
le regard ne distingue plus que les spectres de la vieillesse, bien vivante, et ceux de la mort, immanente.
Condamnés, ils poursuivent le temps, implorent son répit, mais se plient à ses instances exigeantes. Ils
s’aggrippent l’un à l’autre, soudés, enlacés peut-être, à l’aube de leur chute irréversible. Ils s’estompent,
s’enfoncent plutôt, engloutis bientôt, dans l’antre de la toile... ces êtres se montrent, tout entier, désincarnés,c’est à dire à l’image d’eux-mêmes et non celle falsifiable et perfide de l’apparence qui les avait dénaturés. » -
Nathalie Cottin Ayache`,
      image: "/rubriques/ten/29_1.jpg",
    },
    {
      id: 2,
      title: "FEMME PERDUE n°14 ENTRE FEMME et SUPPLICIE 1993 100x81",
      description: "",
      image: "/rubriques/ten/29_2.jpg",
    },
    {
      id: 3,
      title: "NU CRUCIFIE n°1 1971 162x114",
      description: "",
      image: "/rubriques/ten/29_3.bmp",
    },
    {
      id: 4,
      title: "NU CRUCIFIE n°2 1988 162x114",
      description: "",
      image: "/rubriques/ten/29_4.jpg",
    },
    {
      id: 5,
      title: "NU CRUCIFIE n°3, 1991 162x97",
      description: '« La femme crucifiée qui a tout donné, tout perdu et ce "styx" enfin traversé. » - MR, 1995',
      image: "/rubriques/ten/29_5.jpg",
    },
    {
      id: 6,
      title: "NU CRUCIFIE n°4 1992 146x97",
      description: "",
      image: "/rubriques/ten/29_6.jpg",
    },
    {
      id: 7,
      title: "GOUACHE NU CRUCIFIE 1986",
      description: "",
      image: "/rubriques/ten/29_7.JPG",
    },
    {
      id: 8,
      title: "ANGE NOIR n°1 1989 130x97",
      description: "",
      image: "/rubriques/ten/29_8.jpg",
    },
    {
      id: 9,
      title: "ANGE NOIR n°2 FEMME PELICAN COUPLE 231, 1989 130x97",
      description: `« Dans une intensité douloureuse et parfois tragique, sa vie a été « l’éternel combat avec l’Ange ». D’une part
ce Dieu sur lequel il avait bâti sa vie, et ailleurs, la Femme, obsessionnelle et mythique. » Note journal MR
« La chair refusée, la chair triomphante et l’Ange Noir qui attend son heure, comme les vautours très haut
dans le ciel. » - MR`,
      image: "/rubriques/ten/29_9.jpg",
    },
    {
      id: 10,
      title: "ANGE NOIR 3 COUPLE 244 1990 130x97",
      description: "",
      image: "/rubriques/ten/30_0.jpg",
    },
    {
      id: 11,
      title: "ANGE NOIR n°4 COUPLE 268 1992 130x97",
      description: "",
      image: "/rubriques/ten/30_1.jpg",
    },
    {
      id: 12,
      title: "GOUACHE ANGE NOIR 1988",
      description: "",
      image: "/rubriques/ten/30_2.JPG",
    },
    {
      id: 13,
      title: "DUCHESSE D'ALBE n°3 1992 130x97",
      description: "",
      image: "/rubriques/ten/30_3.jpg",
    },
    {
      id: 14,
      title: "FEMME AU BALCON 1991 130x97",
      description: "",
      image: "/rubriques/ten/30_4.jpg",
    },
    {
      id: 15,
      title: "GOUACHE FEMME AU BALCON 1982",
      description: "",
      image: "/rubriques/ten/30_5.jpg",
    },
    {
      id: 16,
      title: "PRISONNIERE n°1 COUPLE DES CENDRES 1991 130x97",
      description: "",
      image: "/rubriques/ten/30_6.jpg",
    },
    {
      id: 17,
      title: "GOUACHE L ESCALIER 1980",
      description: "",
      image: "/rubriques/ten/30_7.jpg",
    },
    {
      id: 18,
      title: "COUPLE 264 1991 130x97",
      description: "",
      image: "/rubriques/ten/30_8.jpg",
    },
    {
      id: 19,
      title: "COUPLE 259 1991 130x97",
      description: "",
      image: "/rubriques/ten/30_9.jpg",
    },
    {
      id: 20,
      title: "L'ANGE DES TENEBRES 1992 146x114",
      description: "",
      image: "/rubriques/ten/31_0.jpg",
    },
    {
      id: 21,
      title: "COUPLE 252 TOUTE LA PALETTE, 1990-93 100x81",
      description: "Toute la palette de Maurice Rocher.",
      image: "/rubriques/ten/31_1.JPG",
    },
    {
      id: 22,
      title: "SUPPLICIE-VITRAIL 125, 1992 116x89",
      description: `Alors le peintre parvient à mettre au jour sa lumière la plus enfouie. Car l’éternité ne se découvre qu’en
s’approchant de ce qu’il y a de plus vivant - Nathalie Cottin Ayache`,
      image: "/rubriques/ten/31_2.jpg",
    },
    {
      id: 23,
      title: "SUPPLICIE-VITRAIL 116 1992 100x81",
      description: "",
      image: "/rubriques/ten/31_3.jpg",
    },
    {
      id: 24,
      title: "SUPPLICIE 122 VEUVE ou FEMME PERDUE n°21 1993 100x81",
      description: "",
      image: "/rubriques/ten/31_4.jpg",
    },
    {
      id: 25,
      title: "SUPPLICIE-VITRAIL 130 1993 100x81",
      description: "",
      image: "/rubriques/ten/31_5.JPG",
    },
    {
      id: 26,
      title: "VISAGE-MATIERE BUSTE FEMME 1983-94",
      description: "",
      image: "/rubriques/ten/31_6.jpg",
    },
    {
      id: 27,
      title: "SUPPLICIE-VITRAIL 140 1994 100x81",
      description: "",
      image: "/rubriques/ten/31_7.jpg",
    },
    {
      id: 28,
      title: "SUPPLICIE-VITRAIL 142 1994 100x81",
      description: "",
      image: "/rubriques/ten/31_8.jpg",
    },
    {
      id: 29,
      title: "SUPPLICIE-VITRAIL 144 1994 95 100x81",
      description: "",
      image: "/rubriques/ten/31_9.JPG",
    },
  ],
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

