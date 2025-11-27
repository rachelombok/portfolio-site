import base64 from "base-64";

// MY SITE TYPES

export type PhotographyGalleryDetailsType = {
  name: string;
  year: string;
  description: string;
};

export type PhotographyPageDetailsType = {
  [id in string]: PhotographyGalleryDetailsType;
};

export const photographyPageDetails: PhotographyPageDetailsType = {
  dreamers: {
    name: "Dreamers",
    year: "2022",
    description:
      "Dreamers during their headlining tour for their NYC show in November 2022.",
  },
  v100: {
    name: "NYU V100",
    year: "2022",
    description:
      "New York University's annual Violet 100 spirit week concert. Featuring performances from CamilosGarden, Destroy Lonely, Ken Carson, and headliner Baby Keem.",
  },
  almostmonday_feb: {
    name: "almostmonday - FEB",
    year: "2025",
    description:
      "almostmonday headlining at Gramercy Theatre for the DIVE tour in February 2025. With opening act Adrian Lyles.",
  },
  almostmonday_nov: {
    name: "almostmonday - NOV",
    year: "2025",
    description:
      "almostmonday opening for The Band Camino at the Brooklyn Paramount in November 2025.",
  },
  youngrisingsons: {
    name: "Young Rising Sons",
    year: "2022",
    description:
      "Young Rising Sons opening for DREAMERS at the Gramercy Theatre in November 2022.",
  },
  kaashpaige: {
    name: "kaash paige",
    year: "2023",
    description:
      "Kaash Paige on her 'Me vs. Myself' tour at Baby's All Right in February 2023.",
  },
  embeihold: {
    name: "Em Beihold",
    year: "2025",
    description:
      "Em Beihold performs at her super small semi-secret piano tour at Joe's Pub in NYC. Featuring opening set by E. Woolf.",
  },
  theamericans: {
    name: "The Americans",
    year: "2023",
    description:
      "The Americans during their exclusive show at The Bitter End in NYC.",
  },
  haidenhenderson: {
    name: "Haiden Henderson",
    year: "2025",
    description: "Haiden Henderson at his late show on The Tension Tour at Mercury Lounge in NYC."
  },
  thebandcamino: {
    name: "The Band Camino",
    year: "2025",
    description: "The Band Camino plays the Brooklyn Paramount on their 'The NeverAlways' tour in November 2025."
  },
  littleimage: {
    name: "Little Image",
    year: "2025",
    description: "Little Image opens for The Academy Is... at Warsaw Concerts in Brooklyn, NY, November 2025.",
  },
  theacademyis: {
    name: "The Academy Is...",
    year: "2025",
    description: "Final NYC show of 'The Academy Is... - Almost Here. 20th Anniversary Tour' at Warsaw Concerts in November 2025.",
  },
  patricia: {
    name: "patricia",
    year: "2019",
    description: "",
  },
  minji: {
    name: "minji",
    year: "2018",
    description: "",
  },
  theo: {
    name: "theo",
    year: "2022",
    description: "",
  },
  cindy: {
    name: "cindy",
    year: "",
    description: "",
  },
  isabel: {
    name: "isabel",
    year: "2022",
    description: "Headshots for actress Isabel.",
  },
  bebe: {
    name: "bebe",
    year: "2022",
    description:
      'Artist Bebe Stockwell photographed for her summer single "Love Me Back".',
  },
  hana: {
    name: "hana",
    year: "2025",
    description: "Hana Yang."
  },
  alexandra_audrey: {
    name: "Alexanda & Audrey",
    year: "2025",
    description: "Alexandra Hutchinson & Audrey Marinda."
  },
  jordyn: {
    name: "jordyn",
    year: "2025",
    description: "Jordyn Thompson."
  },
  adrian: {
    name: "adrian",
    year: "2025",
    description: "Adrian Arellano."
  },
  jolynn: {
    name: "jolynn",
    year: "2025",
    description: "Jolynn Michelle Carpenter."
  },
  shannon: {
    name: "shannon",
    year: "2025",
    description: "Shannon Milligan."
  },
  bkbg: {
    name: "Brooklyn Botanical Garden",
    year: "2022",
    description: "",
  },
  chinatown: {
    name: "Chinatown",
    year: "2022",
    description: "",
  },
  nybg: {
    name: "New York Botanical Garden",
    year: "2020",
    description: "New York Botanical Garden during annual Orchid Show.",
  },
  rooseveltisland: {
    name: "Roosevelt Island",
    year: "2022",
    description: "",
  },
  sanfrancisco: {
    name: "San Francisco",
    year: "2021",
    description: "",
  },
  strawberryfest: {
    name: "Strawberry Fest",
    year: "2022",
    description:
      "New York University's Strawberry Fest, the annual free, open-to-the-public, music and arts festival organized by the student-run organization, Program Board. A tradition for the past 35 years, held every year at the beginning of May, where NYU and NYC communities come together to celebrate local art vendors, enjoy music, games, free food, and a 160-foot strawberry cake. Live performance by the artist Nicknames.",
  },
  comedyshow: {
    name: "NYU Comedy Show",
    year: "2019",
    description:
      "NYU Alumni Rachel Sennott and Ayo Edebiri host a stand-up comedy show for the student body.",
  },
};

export const modifiedObjectCovers = {
  dreamers: "50%_20%",
  patricia: "50%_80%",
  minji: "50%_40%",
  youngrisingsons: "center_40%",
  almostmonday_feb: "center_20%",
  hana: "center_20%",
  jordyn: "center_25%",
  adrian: "center_25%",
  jolynn: "center_5%",
  shannon: "center_40%",

};

export const fetcher = (url: string) =>
  fetch(url, {
    method: "GET",
    headers: new Headers({
      Authorization: `Basic ${base64.encode(
        process.env.NEXT_PUBLIC_IMAGEKIT_PRIVATE_KEY || ''
      )}`,
    }),
  }).then((res) => res.json());

// IMAGEKIT TYPES

type ImageKitAITagType = {
  name: string;
  confidence: number;
  source: string;
};

export type ImageKitImageResponseType = {
  fileId: string;
  type: "file" | "file-version";
  name: string;
  filePath: string;
  tags?: string[];
  AITags?: ImageKitAITagType[];
  versionInfo?: {
    id: string;
    name: string;
  };
  isPrivateFile?: boolean;
  customCoordinates?: string;
  url: string;
  thumbnail?: string;
  fileType: "image" | "non-image";
  mime?: string;
  width: number;
  height: number;
  size?: number;
  hasAlpha?: boolean;
  customMetadata?: Record<string, string>;
  createdAt: string;
  updatedAt: string;
};

export type ImageKitFolderResponseType = {
  folderId: string;
  type: "folder";
  name: string;
  createdAt: string;
  updatedAt: string;
  folderPath: string;
};
