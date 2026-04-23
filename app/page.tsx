import { Nav } from "@/components/Nav";
import { Process } from "@/components/Process";
import { Paths } from "@/components/Paths";
import { Questions } from "@/components/Questions";
import { Iteration } from "@/components/Iteration";
import { CTA } from "@/components/CTA";

export default function Home() {
  return (
    <main className="flex-1 relative" id="top">
      <Nav />
      <Process />
      <Paths />
      <Questions />
      <Iteration />
      <CTA />
    </main>
  );
}
