import DefaultLayout from "@/components/Layout/DefaultLayout";
import { HS1 } from "@/components/Elemen/Typography";
import { SocialMediaButtons } from "@/components/Elemen/beranda/Sosmed";
import EmailContact from "@/components/Elemen/beranda/EmailContact";

const Connect = () => {
  return (
    <DefaultLayout
      id="Connect"
      className="bg-linear-to-b from-[#DEEAFF] to-[#ACC9FC]"
    >
      <HS1 className="mb-[5vw]">Let&apos;s connect!</HS1>
      <div className="flex flex-col gap-2 md:flex-row-reverse md:justify-between">
        <EmailContact />
        <SocialMediaButtons />
      </div>
    </DefaultLayout>
  );
};

export default Connect;
