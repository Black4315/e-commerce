import IconinstagramIcon from "@/assets/icons/iconinstagram";
import IconLinkedin1Icon from "@/assets/icons/IconLinkedin1";
import IconTwitter1Icon from "@/assets/icons/IconTwitter1";
import { creatorData } from "@/constants/constanst";
import React from "react";

// Define the data type for a single creator
type CreatorDataType = {
  name: string;
  desc: string;
  social: string[];
  img: string;
};

// Reusable component for a single creator card
const CreatorCard = ({
  name,
  desc,
  social,
  img,
  upsideDown,
}: { upsideDown?:boolean } & CreatorDataType) => {
  return (
    <div className="flex flex-col items-start space-y-4">
      <div
        className={`w-full aspect-[2/3] bg-secondary-1 rounded-lg overflow-hidden ${upsideDown && "order-4 mt-4 mb-0"}`}
      >
        <img src={img} alt={name} className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-col items-start space-y-1">
        <h3 className="text-xl font-semibold tracking-tight">{name}</h3>
        <p className="text-gray-500">{desc}</p>
      </div>
      <div className="flex items-center space-x-4 text-gray-400">
        {social.map((link, index) => (
          <a
            key={index}
            href={link}
            aria-label={`${name}'s social link`}
            className="hover:text-gray-800 transition-colors duration-200"
          >
            {/* Using inline SVG for social media icons */}
            {link.includes("twitter") && <IconTwitter1Icon />}
            {link.includes("instagram") && <IconinstagramIcon />}
            {link.includes("linkedin") && <IconLinkedin1Icon />}
          </a>
        ))}
      </div>
    </div>
  );
};

const CompanyCreators = () => {
  return (
    <div className="bg-white p-6 md:p-12">
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold tracking-tight mb-8 text-center">
          Meet the Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(creatorData as CreatorDataType[]).map((creator, index) => (
            <CreatorCard key={index} {...creator} upsideDown={index == 1} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyCreators;
