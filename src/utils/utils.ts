export type AllowedDirectoryPages =
  | "concerts"
  | "portraits"
  | "street"
  | "film"
  | "events";

export type AllowedPhotographyPageFolders = "dreamers";

type DirectoryPageConstantsType = {
  [id in AllowedDirectoryPages]: AllowedPhotographyPageFolders[];
};

type PhotographyPageDetailsType = {
  [id in AllowedPhotographyPageFolders]: {
    name: string;
  };
};

export const directoryPagesConstants: DirectoryPageConstantsType = {
  concerts: ["dreamers"],
  portraits: [],
  street: [],
  film: [],
  events: [],
};

export const photographyPageDetails: PhotographyPageDetailsType = {
  dreamers: { name: "Dreamers" },
};
