import { div } from "three/tsl";

export default function TextEditorTab() {
  const lines = [
    <div className="ml-2">
      export default function <span className="text-red-500">Intro</span>
      ( )&#123;
    </div>,
    <div className="ml-10">return (</div>,
    <div className="ml-18">&lt;div&gt;</div>,
    <div className="ml-26 text-white">
      As an aspiring &#123;
      <span className="text-[var(--color-blue)]">softwareEngineer</span>&#125;
    </div>,
    <div className="ml-26 text-white">
      i focus on <span>refining</span> my
      &lt;span&gt;programmingSkills&lt;/span&gt;
    </div>,
    <div className="ml-26 text-white">at every level of</div>,
    <div className="ml-26 text-white"><span>abstraction.map(()=>&#123;</span></div>,
    <div className="ml-26">&#125;)</div>,
    <div className="ml-26 text-white">to write clean and maintainable code</div>,
    <div className="ml-18">&lt;/div&gt;</div>,
    <div className="ml-10">)</div>,
    <div className="ml-2">&#125;</div>,
  ];

  return (
    <div className="backdrop-blur-sm  inline-block text-white/20">
      <div>
        <div className="border-1 border-white border-b-0 inline-block p-2">Intro.tsx</div>
      </div>
      <div className="p-2 border-1 border-white ">
      {lines.map((line, idx) => (
        <div className="flex items-center" key={idx}>
          <div>{String(idx + 1).padStart(3, "0")}</div>
          {line}
        </div>
      ))}
      </div>

    </div>
  );
}
