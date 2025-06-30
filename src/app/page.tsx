import About from "@/components/about/About";
import Header from "@/components/Header";
import Scene from "@/components/Three/Scene";
export default function Home() {
  return (
    <>
      <div className="fixed h-screen w-screen z-[-1]">
        <Scene />
      </div>
      <Header />
      <main>
        <About />
        <section id="projects">
          <p>
            Combining this two parts, these are some of the projects I am the
            most proud of:
          </p>
        </section>
      </main>
      <footer>
        <p>I always wanted to make a footer with an actual foot</p>`
      </footer>
    </>
  );
}
