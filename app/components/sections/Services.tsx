import Image from "next/image";

export default function Services() {
  return (
    <div id="services" className="grid grid-cols-4 gap-10 px-14 py-12 pb-10">

      {/* Who We Server Title  */}
      <div className="col-span-4 m-8 font-medium pt-4">
        <h1 className="text-5xl text-center font-semibold">Who We Serve</h1>
        <p className="text-medium text-center p-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis, natus.</p>
      </div>
      {/* Card 1 — Adults with Disabilities */}
      <div className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-white">
        <Image
          src="/disabled.png"
          alt="Adults with disabilities"
          width={100}
          height={48}
          className="h-auto"
        />
        <h3 className="font-bold text-lg text-sky-500">Adults with Disabilities</h3>
        <p className="text-lg text-center">Adults with disabilities who can benefit from a structured, accessible, 
          non-medical daytime environment, social engagement, 
          recreation, life-skills activities, and community participation.</p>
      </div>

      {/* Older Adults Card */}
      <div className="flex flex-col items-center gap-2 p-6 rounded-2xl bg-white">
        <Image
          src="/oldppl.png"
          alt="Adults with disabilities"
          width={100}
          height={48}
          className="h-auto"
        />
          <h3 className="font-bold text-lg text-sky-500 text-center">Older Adults</h3>
          <p className="text-lg text-center">Older adults who may benefit from meaningful daytime activities, 
            social interaction, structured routines, recreation, 
            cultural activities, wellness-focused programming, and community engagement.</p>
      </div>
      
      {/* Veterans Card  */}
      <div className="flex flex-col items-center gap-2 p-6 rounded-2xl bg-white">
        <Image
          src="/veteran.png"
          alt="Adults with disabilities"
          width={100}
          height={48}
          className="h-auto"
        />
        <h3 className="font-bold text-lg text-sky-500 text-center">Veterans</h3>
        <p className="text-lg text-center">Veterans who may benefit from social connection, structured activities, 
          community participation, recreational opportunities, and access to an inclusive community environment</p>
      </div>

      {/* Familes & Caregivers card */}
      <div className="flex flex-col items-center gap-2 p-6 rounded-2xl bg-white">
        <Image
          src="/familyCare.png"
          alt="Adults with disabilities"
          width={100}
          height={48}
          className="h-auto"
        />
        <h3 className="font-bold text-lg text-sky-500">Families & Caregivers</h3>
        <p className="text-lg text-center">Families and caregivers will be secondary beneficiaries of the program through access to 
          structured daytime programming that may provide additional support and respite opportunities.</p>
      </div>
      <div className="col-span-4 justify-items-center m-10 font-medium p-4">
        <p className="tex-lg">The categories above are planning categories and may overlap. 
          They are not intended to establish eligibility requirements or guarantee a particular demographic distribution.</p>
      </div>
    </div>
  );
}