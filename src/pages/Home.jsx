import Hero from "../components/Hero";
import ValueCards from "../components/ValueCards";
import FeaturedProjects from "../components/FeaturedProjects";
import SkillsPreview from "../components/SkillsPreview";

export default function Home() {
  return (
    <main id="main">
      <Hero />
      <ValueCards />
      <FeaturedProjects />
      <SkillsPreview />
    </main>
  );
}
