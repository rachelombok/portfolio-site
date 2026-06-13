const ContentLayout = ({ children }: Readonly<{
    children: React.ReactNode;
  }>) => {
    return(
        <div className="md:w-[70vw] w-[80vw] xl:max-w-screen-2xl m-auto">
          {children}
        </div>
    )
};

export default ContentLayout;