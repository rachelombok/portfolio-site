import Image from "next/image";

const About = () => {
  return (
    <div>
      <p className="md:text-5xl text-4xl font-bold my-8">hi, this is rachel 👋</p>
      <div className="space-y-8 md:text-lg text-md mb-8">
        <p >
          i am a hobbyist photographer, and this is my portfolio. i received a
          DSLR camera as a graduation present from my grandma in high school,
          and began seriously taking photos in college. i prefer photographing
          live events and concerts, and people in general. i am a contributing
          photographer and writer to{" "}
          <a href="https://midnightriotmag.com/" className="link underline text-zinc-800 hover:text-pink-200" target="_blank"
            rel="noopener">midnight riot magazine.</a>
        </p>
        <p>
          most pictures here were shot with a nikon d3200 or a minolta xg7.{" "}
        </p>
      </div>
      <Image src="/me.JPG" alt="A photo of me sitting on a bench in Elizabeth Garden in NYC, on Canon EOD." width={500} height={100} className="mx-auto"/>
    </div>
  );
};

export default About;
