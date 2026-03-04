import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { formatCOP, formatDiscount } from "@/lib/format";

export function ProductCard({
  name,
  price,
  originalPrice,
  imageSrc,
  href,
}: {
  name: string;
  price: number;
  originalPrice?: number | null;
  imageSrc: string;
  href?: string;
}) {
  const hasDiscount = originalPrice && originalPrice > price;
  const discountText = hasDiscount
    ? formatDiscount(originalPrice, price)
    : null;

  const CardContent = () => (
    <div className="group relative overflow-hidden rounded-lg border">
      <div className="absolute inset-0 z-10" aria-hidden="true"></div>
      {discountText && (
        <span className="absolute top-2 left-2 z-20 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
          {discountText}
        </span>
      )}
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={name}
          width={300}
          height={300}
          className="object-cover transition-transform group-hover:scale-105"
        />
        <Button
          size="icon"
          variant="secondary"
          className="absolute bottom-2 right-2 h-8 w-8 rounded-full z-20"
        >
          <ShoppingCart className="h-4 w-4" />
          <span className="sr-only">Añadir al carrito</span>
        </Button>
      </div>
      <div className="p-4">
        <h3 className="font-medium">{name}</h3>
        <div className="flex items-center gap-2 mt-1">
          <p className="font-bold">{formatCOP(price)}</p>
          {hasDiscount && (
            <p className="text-sm text-gray-500 line-through">
              {formatCOP(originalPrice)}
            </p>
          )}
        </div>
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block">
        <CardContent />
      </Link>
    );
  }

  return <CardContent />;
}
