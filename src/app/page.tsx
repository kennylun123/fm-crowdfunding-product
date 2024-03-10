"use client";

import { getImageProps } from "next/image";
import ProductHeader from "@/app/ui/ProductHeader";
import ProductStatus from "@/app/ui/ProductStatus";
import AboutProject from "@/app/ui/AboutProject";
import Dialog from "@/app/ui/Dialog";
import product from "@/app/lib/data";
import { useEffect, useState } from "react";
import { ProductState } from "@/app/lib/definitions";

export default function Home() {
  const [toggleDialog, setToggleDialog] = useState(false);
  const [selectedPledgeId, setSelectedPledgeId] = useState("0");

  const toggleDialogById = (id: string) => {
    setToggleDialog(true);
    setSelectedPledgeId(id);
  };

  // Set initial state with the defined shape
  const [data, setData] = useState<ProductState>({
    status: {
      backed: 0,
      backers: 0,
    },
    pledges: [],
  });

  useEffect(() => {
    // Import the data and seed to the state
    // Usually we should fetch the data on every page load to make sure the data is updated
    setData({
      status: {
        backed: product.status.backed,
        backers: product.status.backers,
      },
      pledges: product.about.pledges,
    });
  }, []);

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
          isDialogOpened={toggleDialog}
          toggleDialogById={toggleDialogById}
        />

        <ProductStatus
          targetFunding={product.status.target}
          backedFunding={data.status.backed}
          backers={data.status.backers}
          daysLeft={product.status.daysLeft}
        />

        <AboutProject
          contents={product.about.paragraphs}
          pledges={data.pledges}
          toggleDialogById={toggleDialogById}
        />

        {toggleDialog && (
          <Dialog
            title={product.title}
            content={`Want to support us in bringing ${product.title}
            out in the world?`}
            pledges={data.pledges}
            selectedOpt={selectedPledgeId}
            setData={setData}
            closeModal={() => setToggleDialog(false)}
          />
        )}
      </section>
    </main>
  );
}
