import Image from "next/image"
import { MainNav } from "@/components/main-nav"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col pt-24">
        <div className="flex flex-1 items-center">
          <div className="grid w-full grid-cols-1 items-center gap-16 px-8 lg:grid-cols-2">
            {/* Image section */}
            <div className="relative mx-auto aspect-[3/4] w-full max-w-xl">
              <Image
                src="/contact/maurice.jpg"
                alt="Historic black and white photograph"
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Contact information section */}
            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-light leading-relaxed">
                  Pour toute question, organisation d&apos;événements, d&apos;exposition, de colloque, de vente ou
                  d&apos;achat d&apos;œuvres
                </h2>
              </div>

              <div className="space-y-4">
                <p className="text-lg">Veuillez prendre contact avec Claire Tchoulanov Rocher</p>
                <a href="mailto:contact@maurice-rocher.com" className="block text-lg hover:text-gray-300">
                  contact@maurice-rocher.com
                </a>
                <p className="text-lg">+ 33 6 85 11 98 10</p>
              </div>

              <p className="text-sm text-gray-400">© 2017 Famille Rocher</p>
            </div>
          </div>
        </div>

        <MainNav className="fixed top-0 left-0 right-0" />
      </div>
    </main>
  )
}

