"use client";
import ProjectCover from "./ProjectCover";
import {
  fetcher,
  ImageKitFolderResponseType
} from "@/utils/utils";
import useSWR from "swr";
import ErrorChip from "./ErrorChip";
import { Key } from "react";

const PicturesLayout = ({
  directory,
}: {
  directory: string;
}) => {
  const sort = directory == 'portraits' ? 'DESC_CREATED' : 'ASC_CREATED';
  const { data, error, isLoading } = useSWR(
    `https://api.imagekit.io/v1/files?type=folder&sort=${sort}&path=/${directory}/`,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );
  if (!!error) {
    console.error(error);
    return <ErrorChip customClassName="mx-auto mt-6" />;
  }
  if (!isLoading && !data?.length) {
    return (
      <div className="flex w-full">
        <div className="text-3xl mx-auto mt-6 font-semibold ">
          Nothing to see here.
        </div>
      </div>
    );
  }
  return (
    <div className="grid md:grid-cols-4 grid-cols-1">
      {(data || []).map((folder: ImageKitFolderResponseType, i: Key | null | undefined) => (
        <ProjectCover
          imagePath={folder.name}
          key={i}
          directory={directory}
          isLoading={isLoading}
        />
      ))}
    </div>
  );
};

export default PicturesLayout;
