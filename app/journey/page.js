import DefaultLayout from "@/components/Layout/DefaultLayout";
import { HS1 } from "@/components/Elemen/Typography";
import Button from "@/components/Elemen/layout/Button";
import { NavbarResolver } from "@/components/Elemen/layout/NavbarResolver";

const Journey = () => {
  return (
    <DefaultLayout className="bg-linear-to-b flex from-[#ACC9FC] to-[#DEEAFF]">
      <NavbarResolver />
      <HS1> Journey</HS1>
      <div className="flex flex-col items-center gap-3">
        <div className="w-[50vw] h-[30vw] rounded-xl overflow-hidden justify-center mx-auto shadow-xl">
          <iframe
            src="https://drive.google.com/file/d/1zBDt2CR1qoQFeaH3QZ6RPdjceyql5JW7/preview"
            width="100%"
            height="100%"
            className="md:scale-105 origin-center"
          ></iframe>
        </div>
        <Button name_xs="Download cv" href="/CV_Monica.pdf" />
      </div>
    </DefaultLayout>
  );
};

export default Journey;
