import React, { useContext, useEffect, useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { DonutContext } from "../context/donuts";
import { AccountContext } from "../context/account";

const FavoriteButton = ({ product }) => {
  const { favorites, removeToFavorites, addToFavorites } =
    useContext(DonutContext);
  const { user } = useContext(AccountContext);

  const [isFavourite, setIsFavourite] = useState(
    favorites?.filter((f) => f.donut_id == product.id) || false
  );

  useEffect(() => {
    setIsFavourite(favorites?.filter((f) => f.donut_id == product.id) || false);
  }, [favorites, product.id]);

  return (
    <div className="favorite-button">
      {isFavourite.length ? (
        <AiFillHeart
          onClick={() => {
            if (user) {
              removeToFavorites({
                id: favorites?.filter((f) => f.donut_id == product.id)[0].id,
              });
            } else {
              window.alert("You need to login to perform is action.");
            }
          }}
        />
      ) : (
        <AiOutlineHeart
          onClick={() => {
            if (user) {
              addToFavorites({ donut_id: product.id });
            } else {
              window.alert("You need to login to perform is action.");
            }
          }}
        />
      )}
    </div>
  );
};

export default FavoriteButton;
