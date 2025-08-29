import { FC } from "react";
import { FaMobileAlt, FaServer, FaNetworkWired } from "react-icons/fa";
import { SiWeb3Dotjs } from "react-icons/si";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { AiOutlineRobot } from "react-icons/ai";

interface BuildCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const BuildCard: FC<BuildCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-[#0A0F1C] border border-gray-800 rounded-2xl p-6 flex flex-col gap-4 hover:border-blue-500 transition">
      <div className="text-3xl text-blue-400">{icon}</div>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  );
};

const WhatWeBuild: FC = () => {
  const items = [
    {
      icon: <AiOutlineRobot />,
      title: "AI Apps & Agents",
      description: "Gen-AI products, voice bots, RAG apps, and analytics copilots built to scale."
    },
    {
      icon: <MdOutlineDashboardCustomize />,
      title: "SaaS Platforms",
      description: "Subscriptions, roles, dashboards, and billing systems — end-to-end SaaS foundations."
    },
    {
      icon: <SiWeb3Dotjs />,
      title: "Web3 DApps",
      description: "Wallets, NFT gating, and on-chain logic — built where Web3 is truly used."
    },
    {
      icon: <FaMobileAlt />,
      title: "Mobile Apps",
      description: "Cross-platform builds with a native feel and smooth performance."
    },
    {
      icon: <FaNetworkWired />,
      title: "Enterprise Integrations",
      description: "CRM/ERP connections, data pipelines, and automations that unify your workflows."
    },
    {
      icon: <FaServer />,
      title: "Data & DevOps",
      description: "Secure infrastructure, CI/CD pipelines, and observability baked in from day one."
    }
  ];

  return (
    <section className="py-16 bg-[#050A16]">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          What We Build
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <BuildCard
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeBuild;
