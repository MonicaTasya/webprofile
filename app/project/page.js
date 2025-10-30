import DefaultLayout from "@/components/Layout/DefaultLayout";
import Project from "@/modules/project/Project";
import { NavbarResolver } from "@/components/Elemen/layout/NavbarResolver";

const Projects = () => {
  return (
    <DefaultLayout className="bg-linear-to-b from-[#ACC9FC] to-[#DEEAFF]">
      <NavbarResolver />
      <Project />
    </DefaultLayout>
  );
};

export default Projects;
