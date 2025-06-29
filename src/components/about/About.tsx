"use client";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useThreeStore } from "@/store/useThreeStore";
gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const triggerRef = useRef<HTMLDivElement>(null);
  const gradientTopRef = useRef<HTMLDivElement>(null);
  const gradientBottomRef = useRef<HTMLDivElement>(null);
  const camera = useThreeStore((state) => state.camera);
  const scene = useThreeStore((state) => state.scene);
  const modelRef = useThreeStore((state) => state.model);
  const redLightRef = useThreeStore((state) => state.redLight);

  useGSAP(
    () => {
      if (!camera) return;
      gsap.to(gradientTopRef.current, {
        y: -30,
        ease: "power1.in",
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top center",
          end: "center center",
          scrub: true,
        },
      });
      gsap.to(gradientBottomRef.current, {
        y: 30,
        ease: "power1.in",
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top center",
          end: "center center",
          scrub: true,
        },
      });
      // gsap.to(camera.position, {
      //   x: 1,
      //   y: 2,
      //   z: 5,
      //   scrollTrigger: {
      //     trigger: triggerRef.current,
      //     start: "top center",
      //     end: "center center",
      //     scrub: true,
      //   },
      // });
      // gsap.to(scene, {
      //   environmentIntensity: 0.01,
      //   scrollTrigger: {
      //     trigger: triggerRef.current,
      //     start: "top center",
      //     end: "center center",
      //     scrub: true,
      //   },
      // });
    },
    { scope: triggerRef, dependencies: [camera] }
  );
  return (
    <section id="about" className="">
      <article className="h-screen relative">
        <p>I'd say I have</p>
        <div ref={triggerRef} className="relative">
          <div
            ref={gradientTopRef}
            id="two-sides-gradient-top"
            className="bg-gradient-to-b from-[var(--color-black)] to-[var(--color-red)] h-104 w-full z-1 relative "
          ></div>
          <p className="absolute flex inset-0 items-center justify-center z-0 text-9xl text-[var(--color-state)] tracking-widest transform scale-y-95">
            TWO SIDES
          </p>
          <div
            ref={gradientBottomRef}
            id="two-sides-gradient-bottom"
            className="bg-gradient-to-b from-[var(--color-state)] to-[var(--color-black)] h-104 w-full z-1 relative"
          ></div>
        </div>
      </article>

      <article className="mt-86 w-full p-[var(--page-padding)] text-2xl">
        <p className="flex flex-col text-right gap-26">
          <span>
            As an aspiring
            <span className="text-[var(--color-blue)]"> software engineer</span>
          </span>
          <span>I focus on refining my programming skills</span>
          <span>at every level of abstraction</span>
          <span>to write clean and maintainable code</span>
        </p>

        <p className="text-center mt-72 flex flex-col gap-1">
          <span>I have hands-on experience with web development and AI</span>
          <span>these are some of the technologies I use the most:</span>
        </p>
        <ul>
          <li>NextJS</li>
          <li>ThreeJS</li>
          <li>Python</li>
        </ul>
        <p>
          But all this is too boring, so if you wanna learn more, you can just
          check my <a>CV</a> or my <a>LinkedIn</a>
        </p>
      </article>
      <article className="h-screen" id="creative">
        <p>
          I also have a creative side, where I like to explore the intersection
          of art and technology. My believe is that Creative Coding and Web
          Development are also forms of art, and as such, they should focus on
          transmiting emotions.
        </p>
        <p>I looooove music. Here you can check out my latests obsessions:</p>
        <p>And what I am listenig right now (literally)</p>
        <p>I also love videogames, movies and anime</p>
        <p>
          One of the projects i am the most proud is this music video, which i
          animated frame by frame
        </p>
        <p>
          I made it for my band. I play bass and guitar, and I am in charge of
          the creative part
        </p>
        <p>I have made tons of posters and cool stuff</p>
        <p>(aqui los posters)</p>
        <p>
          And now i am focusing on creating a clear visual identity for the band
        </p>
      </article>
    </section>
  );
}
