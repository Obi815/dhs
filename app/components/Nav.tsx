export default function Nav(){
    return (
    <header className="grid grid-cols-2 items-center px-14 py-4">
      <div className="col-start-1 text-lg text-sky-500 font-bold ">DHS</div>
      <nav className="col-start-2 flex justify-end gap-8">
        <a href="#home" className="hover:text-sky-500">Home</a>
        <a href="#services" className="hover:text-sky-500">Services</a>
        <a href="#activities" className="hover:text-sky-500">Activities</a>
        <a href="#about" className="hover:text-sky-500">About</a>
        <a href="#hours" className="hover:text-sky-500">Hours</a>
        <a href="#contact" className="hover:text-sky-500">Contact</a>
      </nav>
    </header>
    );
}