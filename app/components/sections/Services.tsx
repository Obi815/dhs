import Image from "next/image";

export default function Services() {
  return (
    //* grid-cols-4 to grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 (1 across on phones, 2 on tablets, 4 on laptops)
    //* gap-10 to gap-6 md:gap-10, px-14 to px-6 md:px-14 (smaller spacing on phones)
    <div id="services" className="scroll-mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 px-6 md:px-14 py-12 pb-10">

      {/* Who We Serve Title */}
      {/* col-span-4 to col-span-full (spans all columns, however many there are) */}
      {/* m-8 to my-4 md:m-8 (less margin on phones) */}
      <div className="col-span-full my-4 md:m-8 font-medium pt-4">
        {/* text-5xl to text-3xl md:text-5xl (smaller title on phones) */}
        <h1 className="text-3xl md:text-5xl text-center font-semibold">Who We Serve</h1>
        <p className="text-base md:text-lg text-center p-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis, natus.</p>
      </div>

      {/* Card 1: Adults with Disabilities */}
      {/* p-4 to p-6 so all four cards match */}
      <div className="flex flex-col items-center gap-2 p-6 rounded-2xl bg-white">
        <Image
          src="/disabled.png"
          alt="Adults with disabilities"
          width={100}
          height={48}
          className="h-auto"
        />
        {/* added text-center */}
        <h3 className="font-bold text-lg text-sky-500 text-center">Adults with Disabilities</h3>
        <p className="text-lg lg:text-base text-center">Adults with disabilities who can benefit from a structured, accessible, 
          non-medical daytime environment, social engagement, 
          recreation, life-skills activities, and community participation.</p>
      </div>

      {/* Card 2: Older Adults */}
      <div className="flex flex-col items-center gap-2 p-6 rounded-2xl bg-white">
        <Image
          src="/oldppl.png"
          alt="Older adults"
          width={100}
          height={48}
          className="h-auto"
        />
        <h3 className="font-bold text-lg text-sky-500 text-center">Older Adults</h3>
        <p className="text-lg lg:text-base text-center">Older adults who may benefit from meaningful daytime activities, 
          social interaction, structured routines, recreation, 
          cultural activities, wellness-focused programming, and community engagement.</p>
      </div>

      {/* Card 3: Veterans */}
      <div className="flex flex-col items-center gap-2 p-6 rounded-2xl bg-white">
        <Image
          src="/veteran.png"
          alt="Veterans"
          width={100}
          height={48}
          className="h-auto"
        />
        <h3 className="font-bold text-lg text-sky-500 text-center">Veterans</h3>
        <p className="text-lg lg:text-base text-center">Veterans who may benefit from social connection, structured activities, 
          community participation, recreational opportunities, and access to an inclusive community environment</p>
      </div>

      {/* Card 4: Families and Caregivers */}
      <div className="flex flex-col items-center gap-2 p-6 rounded-2xl bg-white">
        <Image
          src="/familyCare.png"
          alt="Families and caregivers"
          width={100}
          height={48}
          className="h-auto"
        />
        <h3 className="font-bold text-lg text-sky-500 text-center">Families &amp; Caregivers</h3>
        <p className="text-lg lg:text-base text-center">Families and caregivers will be secondary beneficiaries of the program through access to 
          structured daytime programming that may provide additional support and respite opportunities.</p>
      </div>

      {/* Note at the bottom */}
      <div className="col-span-full text-center my-4 md:m-10 font-medium p-4">
        <p className="text-base md:text-lg">The categories above are planning categories and may overlap. 
          They are not intended to establish eligibility requirements or guarantee a particular demographic distribution.</p>
      </div>
    </div>
  );
}