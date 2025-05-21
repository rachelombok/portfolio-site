import { photographyPageDetails } from "@/utils/utils";
import GalleryContainer from "@/components/GalleryContainer";
import Gallery from "@/components/Gallery";

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
