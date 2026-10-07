import Image from "next/image";

//* the info for the 4 small cards. Change the words to whatever you want.
const highlights = [
  { title: "CSC", text: "Community & Social Connection" },
  { title: "EP", text: "Engaging Programs" },
  { title: "SSE", text: "Safe & Supportive Environment" },
  { title: "SFC", text: "Supporting Families & Caregivers" },
];

export default function About() {
  return (
    //* max-w-3xl to max-w-6xl (more room for 2 columns)
    //* grid-cols-2 to grid-cols-1 md:grid-cols-2 (1 column on phones, 2 on bigger screens)
    //* gap-12 (space between the two columns), scroll-mt-20 (for your fixed nav)
    <section id="about" className="scroll-mt-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto px-6 py-24">
      {/* this box is now the portrait frame. relative + aspect-3/4 makes it taller than wide */}
      <div className="relative w-full aspect-3/4 rounded-2xl overflow-hidden shadow-lg">
        {/* fill makes the photo fill the box, so width and height are removed */}
        <Image
          src="/aboutUs.png"
          alt="About US"
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover object-top blur-[2px] scale-100"
        />
      </div>

      <div>
        <h3 className="text-2xl font-bold text-sky-500 pb-4">ABOUT US</h3>
        <h1 className="font-bold text-3xl">Enriching lives through connection, community, and meaningful experiences.</h1>
        <p className="mt-4 text-[#3C4A4E] text-lg">
          At Direct Health Services (DHS), we specialize in providing a welcoming, non-medical Adult Social Day Program for 
          adults with disabilities, older adults, and veterans.<br/><br/>
          Our team is committed to creating an inclusive environment where participants can build friendships, explore new interests, 
          and remain active members of their community. Our program offers a variety of social, recreational, educational, cultural, 
          and wellness-focused activities designed to support each participant’s unique interests, abilities, and goals. <br/><br/>
          From creative arts and technology classes to community outings, gentle physical activities, 
          and life-skills programming, every experience is thoughtfully designed to promote independence, confidence, 
          and a greater quality of life while giving families and caregivers peace of mind.
        </p>

        {/* the 2x2 cards */}
        <div className="grid grid-cols-2 gap-4 mt-8">
          {highlights.map((item) => (
            <div key={item.title} className="rounded-2xl bg-white p-4  border border-sky-100 shadow-md">
              <h4 className="font-bold text-sky-500">{item.title}</h4> 
              <p className="text-sm text-[#3C4A4E] mt-1">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}