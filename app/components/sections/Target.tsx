import Image from "next/image";

export default function Target() {
  return (
    <div id="target" className="flex flex-col gap-4 py-12">

      {/* Row 1 — image left */}
      <div className="grid grid-cols-2 items-center px-14 py-4">

        <div className="col-start-1 col-end-7">
            <h1 className="text-center">Who We Serve</h1>
        </div>
        <div className="col-start-1">
          <Image src="/disabled.png" 
          alt="Adults with disabilities" 
          width={280} height={260} />
        </div>
        <div className="col-start-2 ">
          <h2>Adults with Disabilities</h2>
          <span>A structured, accessible, non-medical daytime environment with social engagement, recreation, life-skills activities, and community participation.</span>
        </div>
      </div>

      {/* Row 2 — image right */}
      <div className="grid grid-cols-2 items-center px-14 py-4">
        <div className="col-start-1">
          <h2>Older Adults</h2>
          <span>Meaningful daytime activities, social interaction, structured routines, recreation, cultural activities, and wellness-focused programming.</span>
        </div>
        <div className="col-start-2">
          <Image src="/oldppl.png" 
          alt="Older adults" 
          width={280} height={260} />
        </div>
      </div>

      {/* Row 3 — image left */}
      <div className="grid grid-cols-2 items-center px-14 py-4">
        <div className="col-start-1">
          <Image src="/veteran.png" 
          alt="Veterans" 
          width={280} height={260} />
        </div>
        <div className="col-start-2">
          <h2>Veterans</h2>
          <span>Social connection, structured activities, community participation, recreational opportunities, and an inclusive community environment.</span>
        </div>
      </div>

      {/* Row 4 — image right */}
      <div className="grid grid-cols-2 items-center px-14 py-4">
        <div className="col-start-1">
          <h2>Families &amp; Caregivers</h2>
          <span>Secondary beneficiaries who gain access to structured daytime programming that may provide additional support and respite opportunities.</span>
        </div>
        <div className="col-start-2">
          <Image src="/familyCare.png" 
          alt="Families and caregivers" 
          width={280} height={260} />
        </div>
      </div>

    </div>
  );
}