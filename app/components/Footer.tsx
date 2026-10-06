//* Quick links, same as the nav
const links = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Activities', href: '#activities' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  //* Gets the current year, so you never have to update it by hand
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 px-6 md:px-14 py-12">

      {/* 3 columns on laptops, stacked on phones */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Column 1: name and short description */}
        <div>
          <h3 className="text-sky-400 font-bold text-xl">Direct Health Services</h3>
          <p className="mt-2 text-sm italic">Where Every Day Has Purpose</p>
          <p className="mt-3 text-sm">
            A non-medical adult day program serving San Jose, California.
          </p>
        </div>

        {/* Column 2: quick links */}
        <div>
          <h4 className="text-white font-semibold mb-3">Quick Links</h4>
          <ul className="flex flex-col gap-2 text-sm">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:text-sky-400">{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: contact info */}
        <div>
          <h4 className="text-white font-semibold mb-3">Contact</h4>
          <ul className="flex flex-col gap-2 text-sm">
            <li>San Jose, California</li>
            <li><a href="tel:5555555555" className="hover:text-sky-400">(555) 555-5555</a></li>
            <li><a href="mailto:info@example.com" className="hover:text-sky-400">info@example.com</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom line */}
      <div className="max-w-6xl mx-auto border-t border-slate-700 mt-10 pt-6 text-xs text-center">
        &copy; {year} Direct Health Services. All rights reserved.
      </div>
    </footer>
  );
}