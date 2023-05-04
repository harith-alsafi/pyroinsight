import React, { useState } from "react";
import "./Site.css";
import { UilSitemap } from "@iconscout/react-unicons";
import { motion } from "framer-motion";

const Site = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="dropup">
      <select className="id_dropup" value={selectedOption} onChange={handleChange}>
        <option value="option1"> Site 1</option>
        <option value="option2">Site 2</option>
        <option value="option3">Site 3</option>
      </select>
    </div>
  );
};

export default Site;
