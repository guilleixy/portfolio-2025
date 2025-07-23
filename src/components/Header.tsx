export default function Header() {
  return (
    <header className="relative h-screen">
      <div className="h-full w-full flex items-center justify-center flex-col">
        <h1 className="uppercase text-7xl transform scale-y-125 font-akira">
          Guillermo Bernal
        </h1>
        <h2>Creative Developer</h2>
      </div>

      <nav className="fixed top-0 w-full">
        <ul className="flex justify-between">
          <li>IXY</li>
          <div className="flex">
            <li>About</li>
            <li>Projects</li>
          </div>
        </ul>
      </nav>
    </header>
  );
}
