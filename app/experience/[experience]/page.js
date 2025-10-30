import Image from "next/image";
import { HS1 } from "@/components/Elemen/Typography";
import { events } from "@/modules/data/dataExperience";
import DefaultLayout from "@/components/Layout/DefaultLayout";

export default async function ExperienceDetail({ params }) {
  const { experience } = await params;
  const event = events.find((e) => e.slug === experience);

  if (!event) {
    return (
      <div className="p-10">
        <h1 className="text-4xl font-bold">Experience not found</h1>
      </div>
    );
  }

  return (
    <DefaultLayout className="bg-[#DEEAFF] min-h-screen">
      <h1 className="text-4xl font-bold">{event.title}</h1>
      <p className="mt-4">{event.description}</p>
      <Image src={event.src} alt={event.title} width={100} height={100} />
    </DefaultLayout>
  );
}
