import Sahara from "@/components/Sahara";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Team from "@/components/Team";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "About Us | Play SaaS Starter Kit and Boilerplate for Next.js",
  description: "This is About page description",
};

const SaharaPage = () => {
  return (
    <main>
      <Breadcrumb pageName= "Sahara Safari" />
      <Sahara />
    </main>
  );
};

export default SaharaPage;
