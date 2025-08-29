import { FC } from "react";
import Image from "next/image";
import Image1 from "../../../public/assets/whatwebuild/1.svg";
import Image2 from "../../../public/assets/whatwebuild/2.svg";
import Image3 from "../../../public/assets/whatwebuild/3.svg";
import Image4 from "../../../public/assets/whatwebuild/4.svg";
import Image5 from "../../../public/assets/whatwebuild/5.svg";
import Image6 from "../../../public/assets/whatwebuild/6.svg";

interface BuildCardProps {
  image: any;
  title: string;
}

const BuildCard: FC<BuildCardProps> = ({ image, title }) => {
  return (
    <div className="hover:scale-105 transition-transform duration-300">
      <Image 
        src={image} 
        alt={title}
        width={400}
        height={300}
        className="object-contain w-full h-auto"
      />
    </div>
  );
};

const WhatWeBuild: FC = () => {
  const items = [
    {
      image: Image1,
      title: "AI Apps & Agents"
    },
    {
      image: Image2,
      title: "SaaS Platforms"
    },
    {
      image: Image3,
      title: "Web3 DApps"
    },
    {
      image: Image4,
      title: "Mobile Apps"
    },
    {
      image: Image5,
      title: "Enterprise Integrations"
    },
    {
      image: Image6,
      title: "Data & DevOps"
    }
  ];

  return (
    <section className="py-16 bg-[#161616]">
      <div className="container mx-auto px-6">
       <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-7xl font-bold font-sora leading-tight mb-12 text-center"
                        style={{
                            background: 'linear-gradient(180deg, #FFF 30%, #A5C7D4 100%)',
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent'
                        }}>
                        What we Build
                    </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <BuildCard
              key={index}
              image={item.image}
              title={item.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeBuild;