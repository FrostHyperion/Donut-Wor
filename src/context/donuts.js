import { createContext, useEffect, useState } from "react";
import { Donut } from "../models";
import { v4 as uuidv4 } from "uuid";
import config from "../aws-exports";
import { Storage, DataStore } from "aws-amplify";

const {
  aws_user_files_s3_bucket_region: region,
  aws_user_files_s3_bucket: bucket,
} = config;

const DonutContext = createContext();

const DonutProvider = ({ children }) => {
  const [donuts, setDonuts] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [filteredDonuts, setFilteredDonuts] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const fetchDonuts = async () => {
    try {
      const response = await DataStore.query(Donut);
      setDonuts(response);
    } catch (error) {
      throw error;
    }
  };

  const fetchFavorites = async () => {};

  const createDonut = async (createDonutDetails) => {
    try {
      if (
        !createDonutDetails.name ||
        !createDonutDetails.price ||
        !createDonutDetails.description
      )
        return;

      createDonutDetails.image = await createS3ImageLink(
        createDonutDetails.image
      );

      const response = await DataStore.save(new Donut(createDonutDetails));
      console.log(response);
      return response;
    } catch (err) {
      throw err;
    }
  };

  const fetchImage = async (imageUrl) => {
    const key = `images${imageUrl.split("images")[1]}`;
    console.log(key);
    try {
      const image = await Storage.get(key, { level: "public" });
      console.log(image);
      return image;
    } catch (error) {
      throw error;
    }
  };

  const createS3ImageLink = async (imageFile) => {
    const extension = imageFile.name.split(".")[1];
    const name = imageFile.name.split(".")[0];
    const key = `images/${uuidv4()}${name}.${extension}`;
    const url = `https://${bucket}.s3.${region}.amazonaws.com/public/${key}`;
    try {
      // Upload the file to s3 with public access level.
      await Storage.put(key, imageFile, {
        level: "public",
        contentType: imageFile.type,
      });

      return url;
    } catch (err) {
      console.log(err);
    }
  };

  const fetchDonut = async () => {};

  const createFavorite = async () => {};

  const filterDonuts = (searchInput) => {
    const filtered = [...donuts].filter((donut) => {
      return donut.name.toLowerCase().includes(searchInput.toLowerCase());
    });
    setFilteredDonuts(filtered);
  };

  useEffect(() => {
    fetchDonuts();
  }, []);

  return (
    <DonutContext.Provider
      value={{
        donuts,
        searchInput,
        setSearchInput,
        filteredDonuts,
        favorites,
        createDonut,
        fetchDonut,
        createFavorite,
        fetchDonuts,
        fetchFavorites,
        filterDonuts,
        fetchImage,
      }}
    >
      {children}
    </DonutContext.Provider>
  );
};

export { DonutContext, DonutProvider };
