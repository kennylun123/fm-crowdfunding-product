import { getImageProps } from "next/image";
import ProductHeader from "@/app/ui/ProductHeader";
import ProductStatus from "@/app/ui/ProductStatus";
import AboutProject from "@/app/ui/AboutProject";
import product from "@/app/lib/data";

export default function Home() {
  const common = { alt: "an image of bamboo monitor riser", sizes: "100vw" };
  const {
    props: { srcSet: desktop },
  } = getImageProps({
    ...common,
    width: 1440,
    height: 400,
    quality: 100,
    src: "/assets/image-hero-desktop.jpg",
  });
  const {
    props: { srcSet: mobile, ...rest },
  } = getImageProps({
    ...common,
    width: 750,
    height: 600,
    quality: 70,
    src: "/assets/image-hero-mobile.jpg",
  });

  return (
    <main className="flex min-h-screen flex-col items-center px-6 pb-10">
      {/* Hero product image */}
      <picture className="w-screen">
        <source media="(min-width: 1000px)" srcSet={desktop} />
        <source media="(min-width: 500px)" srcSet={mobile} />
        <img {...rest} className="w-full h-auto max-h-96 object-cover" />
      </picture>

      {/* Funding content */}
      <section className="-translate-y-14 w-full max-w-[46rem] flex flex-col space-y-6">
        <ProductHeader
          title={product.title}
          content={product.content}
          iconUrl={product.iconUrl}
        />

        <ProductStatus
          targetFunding={product.status.target}
          backedFunding={product.status.backed}
          backers={product.status.backers}
          daysLeft={product.status.daysLeft}
        />

        <AboutProject
          contents={product.about.paragraphs}
          pledges={product.about.pledges}
        />
      </section>
    </main>
  );
}
