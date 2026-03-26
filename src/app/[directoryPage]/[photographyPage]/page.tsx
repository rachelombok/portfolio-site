import { photographyPageDetails } from "@/utils/utils";
import GalleryContainer from "@/components/GalleryContainer";
import Gallery from "@/components/Gallery";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ photographyPage: string; directoryPage: string }>;
}): Promise<Metadata> {
  const { photographyPage, directoryPage } = await params;
  const photographDetails = photographyPageDetails[photographyPage];
  return {
    title: photographDetails?.name,
    description: photographDetails?.description,
    keywords: [
      'photography',
      'nyc photography',
      'photography portfolio',
      photographDetails?.name || '',
    ],
    openGraph: {
      title: photographDetails?.name,
      description: photographDetails?.description,
      images: [
        {
          url: `https://ik.imagekit.io/miaszjuo8/${directoryPage}/${photographyPage}/${photographyPage}_01`,
          width: 1200,
          height: 630,
          alt: photographDetails?.name,
        },
      ],
    },
  };
}

const photographyPage = async ({
  params,
}: {
  params: Promise<{ photographyPage: string; directoryPage: string }>;
}) => {
  const { directoryPage, photographyPage } = await params;

  const photographDetails = photographyPageDetails[photographyPage];
  return (
    <>
      <div className="md:mx-20 md:my-16 my-8 md:space-y-8 space-y-4">
        <h1 className="text-5xl titleFont font-bold uppercase">
          {photographDetails?.name}
        </h1>
        <p className="text-lg">{photographDetails?.description}</p>
      </div>
      <GalleryContainer>
        <Gallery folderPath={`/${directoryPage}/${photographyPage}/`} />
      </GalleryContainer>
    </>
  );
};

export default photographyPage;
