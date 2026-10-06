import Image from "next/image";

export default function Home() {
  return (
    //* (shorter hero on phones and tablets)
    <div id='home' className="relative h-[600px] md:h-[800px] lg:h-[900px]">
      <Image
        src="/walkingPpl.png"
        alt="Adults with disabilities"
        fill
        sizes="100vw"  //* tells the browser this photo is full screen width
        className="object-cover object-top"
      />

      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
        <h1 className="text-4xl sm:text-6xl lg:text-8xl leading-tight text-sky-500 font-semibold p-2 md:p-4">Direct Health Services</h1>
        <p className="text-2xl sm:text-4xl lg:text-6xl italic font-[cursive] text-sky-500 font-semibold">Where Every Day Has Purpose</p>
        <span className="text-lg sm:text-2xl lg:text-4xl text-sky-500 font-semibold p-2 md:p-4">Serving San Jose California! </span>
      </div>
    </div>
  );
}