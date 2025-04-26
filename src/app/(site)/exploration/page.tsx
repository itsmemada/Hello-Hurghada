import Exploration from "@/components/Exploration";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Team from "@/components/Team";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "About Us | Play SaaS Starter Kit and Boilerplate for Next.js",
  description: "This is About page description",
};

const ExplorationPage = () => {
  return (
    <main>
      <Breadcrumb pageName="Zwiedzanie" />
      <Exploration />
    </main>
  );
};

export default ExplorationPage;
