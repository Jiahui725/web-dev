"use client";

import React from "react";
import { useSearchParams  } from "next/navigation";

const grids = [
  {
    id: 1,
    icon: "https://cdn.prod.website-files.com/61702af2e3966e09c4101538/666c9d63924765eeab936f18_Salesforce.com_logo.svg.avif",
    text: "SALESFORCE",
    link: "https://www.clay.com/integrations/data-provider/salesforce",
    categories: ["CRM"],
  },
  {
    id: 2,
    icon: "https://cdn.prod.website-files.com/61702af2e3966e09c4101538/65d5dc30aded346cf3b92900_img-logo-hubspot.svg",
    text: "HUBSPOT",
    link: "https://www.clay.com/integrations/data-provider/hubspot",
    categories: ["CRM"],
  },
  {
    id: 3,
    icon: "https://cdn.prod.website-files.com/61702af2e3966e09c4101538/666c9d8630502ae9bf5dd9a8_salesloft.avif",
    text: "SALESLOFT",
    link: "https://www.clay.com/integrations/data-provider/salesloft",
    categories: ["Marketing and Outreach Automation"],
  },
  {
    id: 4,
    icon: "https://cdn.prod.website-files.com/61702af2e3966e09c4101538/65d5cb63b43c09bc7fbf3cc1_img-logo-outreach.svg",
    text: "OUTREACH",
    link: "https://www.clay.com/integrations/data-provider/outreach",
    categories: ["Marketing and Outreach Automation"],
  },
  {
    id: 5,
    icon: "https://cdn.prod.website-files.com/61702af2e3966e09c4101538/668c7115135db2aa64efec09_ocean.io-1.avif",
    text: "OCEAN.IO",
    link: "https://www.clay.com/integrations/data-provider/ocean-io",
  },
  {
    id: 6,
    icon: "https://cdn.prod.website-files.com/61702af2e3966e09c4101538/664821c15143ce16ced7f556_typeform.svg",
    text: "TYPEFORM",
    link: "https://www.clay.com/integrations/data-provider/typeform",
    categories: ["Marketing and Outreach Automation"],
  },
  {
    id: 7,
    icon: "https://cdn.prod.website-files.com/61702af2e3966e09c4101538/6671a5da1f7318ffd1cb2d5a_smartlead-logo.svg",
    text: "SMARTLEAD.AI",
    link: "https://www.clay.com/integrations/data-provider/smartlead-ai",
    categories: ["Marketing and Outreach Automation"],
  },
  {
    id: 8,
    icon: "https://cdn.prod.website-files.com/61702af2e3966e09c4101538/666c9dbbee67ff84b8b3e230_instantlyapp_logo.avif",
    text: "INSTANTLY",
    link: "https://www.clay.com/integrations/data-provider/instantly",
    categories: ["Marketing and Outreach Automation"],
  },
  {
    id: 9,
    icon: "https://cdn.prod.website-files.com/61702af2e3966e09c4101538/664821938ff98e075339fc62_Vector-(2).svg",
    text: "OPENAI",
    link: "https://www.clay.com/integrations/data-provider/openai",
    categories: ["AI"],
  },
];

const Homepage = ({ searchTerm: propSearchTerm, selectedCategories: propSelectedCategories }) => {
  const searchParams = useSearchParams();
  
  const searchTerm = propSearchTerm || searchParams.get("search") || "";

  const selectedCategories = propSelectedCategories || [];

  const filteredGrids = grids.filter((grid) => {
    const matchesSearch = grid.text
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesCategories =
      selectedCategories.length === 0 ||
      (grid.categories &&
        grid.categories.some((cat) => selectedCategories.includes(cat)));

    return matchesSearch && matchesCategories;
  });

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="grid grid-cols-3">
        {filteredGrids.map((grid) => (
          <a
            key={grid.id}
            href={grid.link}
            className="bg-white p-4 transition border border-gray-200 h-48 flex flex-col justify-center items-center"
          >
            <img src={grid.icon} alt={grid.text} className="h-8 mx-auto mb-6" />
            <div className="text-center text-xs font-bold">{grid.text}</div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Homepage;
