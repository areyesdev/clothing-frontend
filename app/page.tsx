import Image from "next/image";
import { Star, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { StatsSection } from "@/components/stats-section";
import { ProductCard } from "@/components/product-card";

//esta es la pagina principal
export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-16">
          <div className="flex flex-col items-center text-center mb-8">
            <h1 className="text-3xl font-bold tracking-tight sm:texxt-4xl md:text-5xl">
              Ropa personalizada Diseñada Para{" "}
              <span className="bg-yellow-300 px-1">Tu Estilo</span>
            </h1>
            <p className="mt-4 max-w-[700px] text-gray-500 text-sm">
              Cada prenda está confeccionada con los mejores materiales,
              diseñada para máximo confort, estilo y durabilidad - lo que
              necesitas para expresar tu estilo único.
            </p>
          </div>

          <div className="grid md:grid-cols-12 gap-6 items-center">
            {/* Avatars clientes */}
            <div className="md:col-span-1 flex md:flex-col items-center gap-2 ">
              <div className="flex md:flex-col gap-1">
                {[1, 2, 3].map((i) => (
                  <div
                    className="w-8 h-8 rounded-full overflow-hidden border-2 border-white"
                    key={i}
                  >
                    <Image
                      src={`/placeholder.svg?height=32&width=32&text=${i}`}
                      width={32}
                      height={32}
                      alt={`Cliente ${i}`}
                      className="object-cover rounded-full"
                    />
                  </div>
                ))}
              </div>
              <span className="text-xs text-gray-500">
                Clientes Satisfechos
              </span>
            </div>

            {/* Imagen principal */}
            <div className="md:col-span-6 relative">
              <Image
                src="/placeholder.svg?height=600&width=800"
                width={800}
                height={600}
                alt="Colección destacada"
                className="rounded-lg object-cover w-full"
              />
            </div>

            {/* Opciones de preductos */}
            <div className="md:col-span-5 space-y-4">
              {/* producto 1 */}
              <div className="flex items-center gap-4 border rounded-lg p-3">
                <Image
                  src="/placeholder.svg?height=100&width=100&text=1"
                  width={100}
                  height={100}
                  alt="Camisetas premium"
                  className="rounded-full object-cover"
                />
                <div className="flex-1">
                  <h3 className="font-medium">Camisetas Premium</h3>
                  <div className="flex items-center mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold">$130.000COP</p>
                </div>
              </div>

              {/* producto 2 */}
              <div className="flex items-center gap-4 border rounded-lg p-3">
                <Image
                  src="/placeholder.svg?height=100&width=100&text=1"
                  width={100}
                  height={100}
                  alt="Sudaderas Premium"
                  className="rounded-full object-cover"
                />
                <div className="flex-1">
                  <h3 className="font-medium">Sudaderas Premium</h3>
                  <div className="flex items-center mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold">$150.000COP</p>
                </div>
              </div>

              {/* Bóton de compra */}
              <div className="flex justify-end mt-6">
                <Button className="rounded-full px-6 bg-black text-white hover:bg-gray-900 flex items-center gap-2">
                  Ver colección
                  <div>
                    <ChevronRight className="w-4 h-4 text-white" />
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <StatsSection />

      {/* Seccion hecho por nosotros */}
      <section className="py-2 md:py-24">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Hecho por Nosotros, Perfeccionado Por Ti
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProductCard
              name="Camisetas Esencial"
              price={130.466}
              imageSrc="/placeholder.svg?height=300&width=300"
              href="/producto/camiseta-ensecial-1"
            />
            <ProductCard
              name="Camisetas Esencial"
              price={130.466}
              imageSrc="/placeholder.svg?height=300&width=300"
              href="/producto/camiseta-ensecial-1"
            />
            <ProductCard
              name="Camisetas Esencial"
              price={130.466}
              imageSrc="/placeholder.svg?height=300&width=300"
              href="/producto/camiseta-ensecial-1"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
