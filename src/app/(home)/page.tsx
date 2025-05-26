import Header from "@/components/Header";
import { About, Projects, Writing } from "./components";

export default function Home() {
  return (
    <>
      <Header />
      <About />
      <Projects />
      <Writing />
    </>
  );
}
