import React, { useContext, useEffect } from "react";
import DonutCard from "../components/DonutCard";
import { DonutContext } from "../context/donuts";
import "./Donuts.css";

const Donuts = () => {
  const { donuts, filteredDonuts, searchInput, filterDonuts } =
    useContext(DonutContext);

  useEffect(() => {
    filterDonuts(searchInput);
  }, [searchInput]);

  return (
    <div className="donuts">
      {searchInput
        ? filteredDonuts?.map((donut) => (
            <DonutCard product={donut} key={donut.id} />
          ))
        : donuts?.map((donut) => <DonutCard product={donut} key={donut.id} />)}
    </div>
  );
};

export default Donuts;
