import React from "react";

interface GenderFilterProps {
  genderFilter: string;
  setGenderFilter: React.Dispatch<React.SetStateAction<string>>;
}

const GenderFilter: React.FC<GenderFilterProps> = ({
  genderFilter,
  setGenderFilter,
}) => {
  return (
    <div className="flex gap-4 mt-5 lg:mt-0">
      <button
        className={`px-4 py-2 rounded-md ${
          genderFilter === "female" ? "bg-rick-skyBlue" : "bg-rick-gray"
        }`}
        onClick={() => setGenderFilter("female")}
      >
        Female
      </button>
      <button
        className={`px-4 py-2 rounded-md ${
          genderFilter === "male" ? "bg-rick-skyBlue" : "bg-rick-gray"
        }`}
        onClick={() => setGenderFilter("male")}
      >
        Male
      </button>
      <button
        className={`px-4 py-2 rounded-md ${!genderFilter ? "bg-rick-skyBlue" : "bg-rick-gray"}`}
        onClick={() => setGenderFilter("")}
      >
        All
      </button>
    </div>
  );
};

export default GenderFilter;
