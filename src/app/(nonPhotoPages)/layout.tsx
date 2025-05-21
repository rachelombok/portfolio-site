import ContentLayout from "@/components/ContentLayout";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ContentLayout>
      <main>{children}</main>
    </ContentLayout>
  );
}
