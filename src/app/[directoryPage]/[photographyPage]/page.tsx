import { redirect } from "next/navigation";

const photographyPage = async ({ params }: {
    params: Promise<{ photographyPage: string, directoryPage: string }>
  }) => {
    const { directoryPage, photographyPage } = await params;
    const validDirectoryPages: string[] = ['events', 'street', 'portraits', 'concerts', 'film'];

    if (!validDirectoryPages.includes(directoryPage.toLowerCase())){
        // redirects out of non photography pages not intended to nest
        redirect(`/${directoryPage}`);
    }
    return (
        <div>Photography Page route: {photographyPage} Directory page route: {directoryPage}</div>
    );
};

export default photographyPage;