export default function Header() {
  return (
    <header className="relative h-screen">
      <div className="h-full w-full flex items-center justify-center">
        <h2>
          guille<span>IXY</span>
        </h2>
        <h1>
          <span>Guillermo</span> <span>Bernal</span>
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
