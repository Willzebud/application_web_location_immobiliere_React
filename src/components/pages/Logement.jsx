import React, { useState, useEffect } from "react";
import ImageSlider from "../Part/ImageSlider/ImageSlider";
import logementsData from "../../Data/logements.json";
import { useParams } from "react-router";

function Logement() {
  const [logement, setLogement] = useState({
    title: "",
    tags: [],
    equipments: [],
    pictures: [],
    rating: "",
    host: { name: "", picture: "" },
  });

  const { id } = useParams();

  useEffect(() => {
    logementsData.map((house) => {
      // Si l'id dans l'url correspond à l'id d'un data
      if (house.id === id) {
        setLogement(house);
        console.log(house);
      }
      return null;
    });
  }, [id]);

  console.log(logement);

  return (
    <>
      <h2>{logement.title}</h2>
      <ImageSlider slides={logement.pictures} />
      <p>toto</p>

      {logement.tags.map((tag) => {
        return <p key={tag}>{tag}</p>;
      })}


  </>
  );
}

export default Logement;
