import Image from "next/image";

export default function Home() {
  return (
    <div className="relative h-[900px]"> {/* pick a height that looks right */}
      <Image
        src="/walkingPpl.png"
        alt="Adults with disabilities"
        fill
        className="object-cover object-top"
      />

      <div className="absolute inset-0 bg-black/40" />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
        {/* TODO: company name */}
        <h1 className="text-8xl text-sky-500 font-semibold p-4">Direct Health Services</h1>
        {/* TODO: slogan span */}
        <p className="text-6xl italic font-[cursive] text-sky-500 font-semibold">Where Every Day Has Purpose</p>
        {/* TODO: location span */}
        <span className="text-4xl text-sky-500 font-semibold p-4">Serving San Jose California! </span>
      </div>
    </div>
  );
}