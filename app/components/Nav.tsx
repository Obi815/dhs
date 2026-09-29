export default function Nav(){
    return (
    <header className="grid grid-cols-2 items-center px-14 py-4">
      <div className="col-start-1">DHS</div>
      <nav className="col-start-2 flex justify-end gap-8">
        <a href="#about">About</a>
        <a href="#target">Target</a>
        <a href="#activities">Activities</a>
        <a href="#hours">Hours</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
    );
}