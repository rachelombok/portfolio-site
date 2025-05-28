import TransitionPageWrapper from "./TransitionPageWrapper";
const ContentLayout = ({ children }: Readonly<{
    children: React.ReactNode;
  }>) => {
    return(
        <div className="md:w-[70vw] w-[80vw] xl:max-w-screen-2xl m-auto">
         <TransitionPageWrapper>
         {children}
         </TransitionPageWrapper>
           
        </div>
    )
};

export default ContentLayout;