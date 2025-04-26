import Cruises from "@/components/Cruises";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Team from "@/components/Team";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "About Us | Play SaaS Starter Kit and Boilerplate for Next.js",
  description: "This is About page description",
};

const CruisesPage = () => {
  return (
    <main>
      <Breadcrumb pageName="Rejsy" />
      <Cruises />
    </main>
  );
};

export default CruisesPage;
