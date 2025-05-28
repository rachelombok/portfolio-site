"use client";
import MasonryPhotoGallery from "@/components/MasonryPhotoGallery";
import { fetcher } from "@/utils/utils";
import ContentLayout from "@/components/ContentLayout";
import useSWR from "swr";
const FilmPage = () => {
  const { data } = useSWR(
    `https://api.imagekit.io/v1/files?type=file&sort=ASC_CREATED&path=/film/`,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );
  return (
    <div className="mx-auto">
      <ContentLayout>
        <MasonryPhotoGallery photos={data || []} />
      </ContentLayout>
    </div>
  );
};

export default FilmPage;
