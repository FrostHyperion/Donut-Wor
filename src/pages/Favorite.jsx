import { useContext, useEffect } from "react";
import DonutCard from "../components/DonutCard";
import { DonutContext } from "../context/donuts";
import "./Favorite.css";

function Favorite() {
  const { favorites } = useContext(DonutContext);

  return (
    <div className="favorite">
      {favorites.map((product) => (
        <DonutCard key={product.id} product={product.donut} />
      ))}
    </div>
  );
}

export default Favorite;
