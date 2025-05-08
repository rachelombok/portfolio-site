import { redirect } from "next/navigation";
import {
  AllowedDirectoryPages,
  AllowedPhotographyPageFolders,
} from "@/utils/utils";

const photographyPage = async ({
  params,
}: {
  params: Promise<{ photographyPage: string; directoryPage: string }>;
}) => {
  const { directoryPage, photographyPage } = await params;
  const validDirectoryPages: AllowedDirectoryPages[] = [
    "events",
    "street",
    "portraits",
    "concerts",
    "film",
  ];
  const validPhotographyPages: string[] = ["dreamers"];

  // @ts-ignore
  // eslint-disable-next-line
  if (!validDirectoryPages.includes(directoryPage.toLowerCase())) {
    // redirects out of non photography pages not intended to nest
    redirect(`/`);
  } else if (!validPhotographyPages.includes(photographyPage)) {
    redirect(`/${directoryPage}`);
  }
  return (
    <div>
      Photography Page route: {photographyPage} Directory page route:{" "}
      {directoryPage}
    </div>
  );
};

export default photographyPage;
