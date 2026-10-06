export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 px-6 py-24">
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <div className="text-center mb-10">
          <h3 className="text-sky-500 font-bold tracking-widest text-sm">CONTACT</h3>
          <h2 className="text-3xl font-bold">Visit Us or Get in Touch</h2>
        </div>

        {/* Grid: 2 columns on bigger screens, 1 column on phones */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-4">

            {/* Hours box */}
            <div className="bg-sky-500 text-white rounded-2xl p-6 shadow-lg">
                <p className="text-xs tracking-widest">HOURS</p>
                <p className="text-3xl font-extrabold leading-tight my-2">
                Mon to Fri<br />8:30 AM to 4:30 PM
                </p>
                <p className="text-xs tracking-widest uppercase">Approximate Schedule</p>
            </div>

            {/* Info box */}
            <div className="bg-white rounded-2xl p-6 shadow-md flex flex-col gap-4">
            <div>
                <p className="text-xs font-bold tracking-widest text-sky-500">LOCATION</p>
                <p>San Jose, California</p>
            </div>
            <div>
                <p className="text-xs font-bold tracking-widest text-sky-500">PHONE</p>
                <a href="tel:5555555555" className="hover:text-sky-500">(555) 555-5555</a>
            </div>
            <div>
                <p className="text-xs font-bold tracking-widest text-sky-500">EMAIL</p>
                <a href="mailto:info@example.com" className="hover:text-sky-500">info@example.com</a>
            </div>
            </div>

            </div>
          {/* Map */}
            <div className="rounded-2xl overflow-hidden shadow-md min-h-72">
            <iframe
                src="https://www.google.com/maps?q=123+Main+St,+San+Jose,+CA&output=embed"
                title="Map of our location"
                className="w-full h-full min-h-72 border-0"
                loading="lazy"
            />
            </div>
          <div className="md:col-span-2 h-48 bg-orange-200 rounded-2xl">Bottom: form</div>
        </div>

      </div>
    </section>
  );
}