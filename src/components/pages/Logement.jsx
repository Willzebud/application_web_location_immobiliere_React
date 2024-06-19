import React, { useState, useEffect } from "react";
import ImageSlider from "../Part/ImageSlider/ImageSlider";
import Tags from "../Part/Tags/Tags";
import HostProfil from '../Part/HostProfil/HostProfil';
import Rating from '../Part/Rating/Rating';
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
      <ImageSlider slides={logement.pictures} />
      <h2>{logement.title}</h2>
      <p>{logement.location}</p>
      <Tags tags={logement.tags} />
      <HostProfil name={logement.host.name} picture={logement.host.picture} />
      <Rating rating={logement.rating} />
  </>
  );
}

export default Logement;
