import { About, Projects, Writing } from "./components";

export default function Home() {
  return (
    <>
      <About />
      <div className="flex flex-col md:flex-row md:justify-between gap-20 !mb-20">
        <Projects />
        <Writing />
      </div>
    </>
  );
}
