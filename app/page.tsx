import Image from "next/image";
import { Star, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { StatsSection } from "@/components/stats-section";
import { ProductCard } from "@/components/product-card";
import { ReviewCard } from "@/components/review-card";
import { FeaturedInSection } from "@/components/featured-in-section";
import { CommitmentSection } from "@/components/commitment-section";
import { FeaturedProduct } from "@/components/featured-product";
import { getProducts, getStrapiMedia } from "@/lib/strapi";
import { formatCOP } from "@/lib/format";
import Link from "next/link";

// Página principal
export default async function Home() {
  // Obtener productos destacados de Strapi
  const { data: featuredProducts } = await getProducts({
    featured: true,
    limit: 6,
  });

  // Obtener algunos productos para el hero
  const { data: heroProducts } = await getProducts({ limit: 2 });

  return (
    <main className="flex flex-col min-h-screen w-full">
      {/* Hero Section */}
      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-16">
          <div className="flex flex-col items-center text-center mb-8">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
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

            {/* Opciones de productos */}
            <div className="md:col-span-5 space-y-4">
              {heroProducts.slice(0, 2).map((product) => (
                <Link
                  key={product.id}
                  href={`/producto/${product.slug}`}
                  className="flex items-center gap-4 border rounded-lg p-3 hover:border-gray-400 transition-colors"
                >
                  <Image
                    src={getStrapiMedia(product.image?.url)}
                    width={100}
                    height={100}
                    alt={product.name}
                    className="rounded-full object-cover w-[100px] h-[100px]"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium">{product.name}</h3>
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
                    <p className="font-bold">{formatCOP(product.price)}</p>
                  </div>
                </Link>
              ))}

              {/* Botón de compra */}
              <div className="flex justify-end mt-6">
                <Link href="/hombre">
                  <Button className="rounded-full px-6 bg-black text-white hover:bg-gray-900 flex items-center gap-2">
                    Ver colección
                    <div>
                      <ChevronRight className="w-4 h-4 text-white" />
                    </div>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <StatsSection />

      {/* Sección hecho por nosotros */}
      <section className="py-2 md:py-24">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Hecho por Nosotros, Perfeccionado Por Ti
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.slice(0, 3).map((product) => (
              <ProductCard
                key={product.id}
                name={product.name}
                price={product.price}
                originalPrice={product.originalPrice}
                imageSrc={getStrapiMedia(product.image?.url)}
                href={`/producto/${product.slug}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Productos destacados */}
      <FeaturedInSection />

      {/* Sección de compromiso */}
      <CommitmentSection />

      {/* Sección de reseñas */}
      <section className="py-12 md:py-24 bg-gray-50 w-full ">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Reseñas de nuestros clientes satisfechos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ReviewCard
              name="María G."
              comment="Las camisetas son increíblemente suaves y la calidad es excepcional. ¡Definitivamente compraré más!"
              rating={5}
            />
            <ReviewCard
              name="Carlos R."
              comment="Los jeans son perfectos, tanto en ajuste como en durabilidad. Muy contento con mi compra."
              rating={5}
            />
            <ReviewCard
              name="Laura M."
              comment="El servicio al cliente es excelente y la ropa es de muy buena calidad. Recomiendo totalmente."
              rating={4}
            />
            <ReviewCard
              name="David S."
              comment="Las sudaderas son cómodas y el envío fue rápido. Volveré a comprar pronto."
              rating={4}
            />
          </div>
        </div>
      </section>

      {/* Detalles de productos destacados */}
      {featuredProducts.length >= 2 && (
        <>
          <FeaturedProduct
            title={featuredProducts[0].name}
            description={
              featuredProducts[0].description ||
              "Producto de alta calidad confeccionado con los mejores materiales."
            }
            price={featuredProducts[0].price}
            salePrice={
              featuredProducts[0].originalPrice
                ? featuredProducts[0].price
                : undefined
            }
            features={[
              "Materiales de alta calidad",
              "Diseño exclusivo",
              "Envío gratis en pedidos mayores a $150.000",
            ]}
          />
          <FeaturedProduct
            title={featuredProducts[1].name}
            description={
              featuredProducts[1].description ||
              "Producto premium diseñado para tu comodidad."
            }
            price={featuredProducts[1].price}
            salePrice={
              featuredProducts[1].originalPrice
                ? featuredProducts[1].price
                : undefined
            }
            features={[
              "Confección premium",
              "Comodidad garantizada",
              "Disponible en varios colores",
            ]}
            reversed
          />
        </>
      )}

      {/* Final CTA Section */}
      <section className="py-12 md:py-24 bg-gray-900 text-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                La moda reimaginada. Por Ti.
              </h2>
              <p className="mt-4 text-gray-400 md:text-xl">
                Descubre nuestra colección completa y encuentra tu estilo único
                con prendas diseñadas para durar.
              </p>
              <Link href="/hombre">
                <Button className="mt-6 bg-green-500 hover:bg-green-600">
                  Explorar Colección
                </Button>
              </Link>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=800"
                alt="Colección de ropa"
                width={800}
                height={500}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
