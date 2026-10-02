import Image from "next/image";

export default function Services() {
  return (
    <div id="target" className="grid grid-cols-4 gap-10 px-14 py-12 pb-6">

      {/* Who We Server Title  */}
      <div className="col-span-4 justify-items-center m-10 font-medium p-4">
        <h1 className="text-5xl">Who We Server</h1>
      </div>
      {/* Card 1 — Adults with Disabilities */}
      <div className="flex flex-col gap-2 p-6 rounded-2xl bg-white border-2 border-gray-400">
        <Image
          src="/disabled.png"
          alt="Adults with disabilities"
          width={100}
          height={48}
          className="justify-center"
        />
        <h3 className="font-bold text-sky-500">Adults with Disabilities</h3>
        <p className="text-sm">Adults with disabilities who can benefit from a structured, accessible, 
          non-medical daytime environment, social engagement, 
          recreation, life-skills activities, and community participation.</p>
      </div>

      {/* Older Adults Card */}
      <div className="flex flex-col gap-2 p-6 rounded-2xl bg-white border-2 border-gray-400">
        <Image
          src="/oldppl.png"
          alt="Adults with disabilities"
          width={100}
          height={48}
        />
        <h3 className="font-bold text-sky-500">Older Adults</h3>
        <p className="text-sm">Older adults who may benefit from meaningful daytime activities, 
          social interaction, structured routines, recreation, 
          cultural activities, wellness-focused programming, and community engagement.</p>
      </div>
      
      {/* Veterans Card  */}
      <div className="flex flex-col gap-4 p-6 rounded-2xl bg-white border-2 border-gray-400">
        <Image
          src="/veteran.png"
          alt="Adults with disabilities"
          width={100}
          height={60}
        />
        <h3 className="font-bold text-sky-500">Veterans</h3>
        <p className="text-sm">Veterans who may benefit from social connection, structured activities, 
          community participation, recreational opportunities, and access to an inclusive community environment</p>
      </div>

      {/* Familes & Caregivers card */}
      <div className="flex flex-col gap-2 p-6 rounded-2xl bg-white border-2 border-gray-400">
        <Image
          src="/familyCare.png"
          alt="Adults with disabilities"
          width={100}
          height={48}
        />
        <h3 className="font-bold text-sky-500">Families & Caregivers</h3>
        <p className="text-sm">Families and caregivers will be secondary beneficiaries of the program through access to 
          structured daytime programming that may provide additional support and respite opportunities.</p>
      </div>
      <div className="col-span-4 justify-items-center m-10 font-medium p-4">
        <p className="text-lg">The categories above are planning categories and may overlap. 
          They are not intended to establish eligibility requirements or guarantee a particular demographic distribution.</p>
      </div>
    </div>
    // <div id="target" className="flex flex-col gap-4 py-12">

    //   {/* Row 1 — image left */}
    //   <div className="grid grid-cols-2 items-center px-14 py-4">

    //     <div className="col-start-1 col-end-7">
    //         <h1 className="text-center">Who We Serve</h1>
    //     </div>
    //     <div className="col-start-1">
    //       <Image src="/disabled.png" 
    //       alt="Adults with disabilities" 
    //       width={280} height={260} />
    //     </div>
    //     <div className="col-start-2 ">
    //       <h2>Adults with Disabilities</h2>
    //       <span>A structured, accessible, non-medical daytime environment with social engagement, recreation, life-skills activities, and community participation.</span>
    //     </div>
    //   </div>

    //   {/* Row 2 — image right */}
    //   <div className="grid grid-cols-2 items-center px-14 py-4">
    //     <div className="col-start-1">
    //       <h2>Older Adults</h2>
    //       <span>Meaningful daytime activities, social interaction, structured routines, recreation, cultural activities, and wellness-focused programming.</span>
    //     </div>
    //     <div className="col-start-2">
    //       <Image src="/oldppl.png" 
    //       alt="Older adults" 
    //       width={280} height={260} />
    //     </div>
    //   </div>

    //   {/* Row 3 — image left */}
    //   <div className="grid grid-cols-2 items-center px-14 py-4">
    //     <div className="col-start-1">
    //       <Image src="/veteran.png" 
    //       alt="Veterans" 
    //       width={280} height={260} />
    //     </div>
    //     <div className="col-start-2">
    //       <h2>Veterans</h2>
    //       <span>Social connection, structured activities, community participation, recreational opportunities, and an inclusive community environment.</span>
    //     </div>
    //   </div>

    //   {/* Row 4 — image right */}
    //   <div className="grid grid-cols-2 items-center px-14 py-4">
    //     <div className="col-start-1">
    //       <h2>Families &amp; Caregivers</h2>
    //       <span>Secondary beneficiaries who gain access to structured daytime programming that may provide additional support and respite opportunities.</span>
    //     </div>
    //     <div className="col-start-2">
    //       <Image src="/familyCare.png" 
    //       alt="Families and caregivers" 
    //       width={280} height={260} />
    //     </div>
    //   </div>

    // </div>
  );
}