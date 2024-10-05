import Image from "next/image";
import home_bird from '@/public/img/home_bird.png'

export default function Home() {
  return (
    <div className="container mx-auto flex flex-col md:flex-row gap-5 h-[calc(100vh-4rem)]">
      <div className="basis-full flex flex-col justify-center md:basis-2/3">
        <p className="special-word text-xs">Protect All the Birds</p>
        <h1 className="pb-5">
          The World's <span className="special-word">Rarest</span><br /> Birds
        </h1>

        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
      </div>

      <div className="hidden md:block basis-1/3">
        <Image 
          src={home_bird}
          alt="Home bird"
          sizes="100vw"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
}
