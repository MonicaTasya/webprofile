import DefaultLayout from "@/components/Layout/DefaultLayout";
import { HS1 } from "@/components/Elemen/Typography";
import Card from "@/components/Elemen/Card";
import { events } from "@/modules/data/dataExperience";
import { NavbarResolver } from "@/components/Elemen/layout/NavbarResolver";

const Experiences = () => {
  return (
    <DefaultLayout className="bg-linear-to-b from-[#ACC9FC] to-[#DEEAFF]">
      <NavbarResolver />
      <HS1> Experience</HS1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-[3vw]">
        {events.map((exp) => (
          <Card
            key={exp.slug}
            src={exp.src}
            title={exp.title}
            description={exp.description}
            href={`/experience/${exp.slug}`}
          />
        ))}
      </div>
    </DefaultLayout>
  );
};

export default Experiences;
