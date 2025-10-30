import React from "react";
import DefaultLayout from "@/components/Layout/DefaultLayout";
import { HS1, HA2 } from "@/components/Elemen/Typography";

const NotFound = () => {
  return (
    <DefaultLayout className="bg-linear-to-b from-[#DEEAFF] to-[#ACC9FC] flex flex-col items-center text-center min-h-screen gap-4">
      <HS1>404 - Not Found</HS1>
      <HA2>Bentar ya, admin lagi budreg -peace out✌️</HA2>
    </DefaultLayout>
  );
};

export default NotFound;
