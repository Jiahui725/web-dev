"use client";
import React, { useContext, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import MainHeader from "./MainHeader";
import HeroText from "./HeroText";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import { GoSearch } from "react-icons/go";
import { FilterContext } from "@/context/FilterContext";
import Homepage from "@/app/page";
import "../styles/style.css";

const categoryOptions = [
  "AI",
  "By Clay",
  "CRM",
  "Company Firmographics",
  "Contact Data Validation",
  "Databases",
  "Development Tools",
  "E-commerce and Retail",
  "Mapping and Location",
  "Marketing and Outreach Automation",
  "People Data Enrichment",
  "Social Media, Content & News",
];

const MainLayout = ({ children }) => {
  const router = useRouter();
  
  const { toggle } = useContext(FilterContext);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);

  const toggleCategory = () => {
    setIsCategoryOpen(!isCategoryOpen);
  };

  const handleCategoryChange = (category) => {
    const updatedCategories = selectedCategories.includes(category)
      ? selectedCategories.filter((cat) => cat !== category)
      : [...selectedCategories, category];
    setSelectedCategories(updatedCategories);
  
    const searchParams = new URLSearchParams();
    if (updatedCategories.length > 0) {
      searchParams.set('category', updatedCategories.join(','));
    }
    if (searchTerm) {
      searchParams.set('search', searchTerm);
    }
  
    router.push(`?${searchParams.toString()}`);
  };

  const handleSearch = (e) => {
    const newSearchTerm = e.target.value;
    setSearchTerm(newSearchTerm);
  
    const searchParams = new URLSearchParams();
    if (newSearchTerm) {
      searchParams.set('search', newSearchTerm);
    }
    if (selectedCategories.length > 0) {
      searchParams.set('category', selectedCategories.join(','));
    }
  
    router.push(`?${searchParams.toString()}`);
  };

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategories([]);
    router.push("/");
  };

  return (
    <div className="bg-gray-100 w-screen min-h-screen">
      <MainHeader />
      <HeroText />
      <div className="flex justify-start items-start">
        <aside className="bg-white p-4 border-r sidebar">
          <div className="flex justify-between mb-4">
            <div className="text-xs">FILTERS</div>
            <button onClick={clearFilters} className="text-xs">
              Clear all
            </button>
          </div>
          <div className="flex justify-center mb-4">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search"
                className="p-2 border rounded w-full pr-10"
                value={searchTerm}
                onChange={handleSearch}
              />
              <div className="absolute right-2 top-2">
                <GoSearch />
              </div>
            </div>
          </div>
          <ul>
            <li
              className="flex justify-start items-center rounded hover:bg-gray-100 h-12 cursor-pointer"
              onClick={toggleCategory}
            >
              <span className="flex-1 pl-4">Category</span>
              {isCategoryOpen ? <IoIosArrowDown /> : <IoIosArrowForward />}
            </li>
            {isCategoryOpen && (
              <div className="pl-4 space-y-4 category-options">
                {categoryOptions.map((option, index) => (
                  <label
                    key={index}
                    className="flex items-center border-b border-gray-300 pb-2 pt-2 truncate text-xs"
                  >
                    <input
                      type="checkbox"
                      className="mr-2 align-middle"
                      checked={selectedCategories.includes(option)}
                      onChange={() => handleCategoryChange(option)}
                    />
                    <span className="truncate">{option}</span>
                  </label>
                ))}
              </div>
            )}
          </ul>
        </aside>
        <main className="flex-1">
          <Homepage
            searchTerm={searchTerm}
            selectedCategories={selectedCategories}
          />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
