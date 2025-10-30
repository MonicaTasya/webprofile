import Card from "@/components/Elemen/Card";
import { HS1 } from "@/components/Elemen/Typography";

const Project = () => {
  const projects = [
    {
      src: "/image/project/nesco.webp",
      title: "Nesco 2025",
      description:
        "First experience as a Front-end staff, learning Tailwind and Next.js through sub-page development",
      href: "https://nesco.id/",
    },
    {
      src: "/image/project/aisummarize.webp",
      title: "AI Summarizer",
      description:
        "A text summarization website where I learned to connect React with an AI model via OpenRouter API.",
      href: "https://nesco.id/",
    },
    {
      src: "/image/project/kesat.webp",
      title: "Pionir Kesatria 2025",
      description:
        "Built the Pionir Kesatria 2025 website, applying skills from previous projects.",
      href: "https://pionir-kesatria-ft.vercel.app/",
    },
    {
      src: "/image/project/porse.webp",
      title: "Porsenigama 2025",
      description:
        "I also became a front-end staff at Porsenigama 2025. I gained more and more knowledge from here.",
      href: "https://ukm.ugm.ac.id/2025/porsenigama/",
    },
  ];
  return (
    <>
      <HS1 className="mb-[5vw]"> Projects</HS1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-[2vw]">
        {projects.map((project, index) => (
          <Card
            key={index}
            src={project.src}
            title={project.title}
            description={project.description}
            href={project.href}
          />
        ))}
      </div>
    </>
  );
};

export default Project;
