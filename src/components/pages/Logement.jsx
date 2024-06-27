import React, { useState, useEffect } from "react";
import ImageSlider from "../Part/ImageSlider/ImageSlider";
import Tags from "../Part/Tags/Tags";
import HostProfil from "../Part/HostProfil/HostProfil";
import Rating from "../Part/Rating/Rating";
import Headband from "../Part/Headband/Headband";
import logementsData from "../../Data/logements.json";
import { useParams, useNavigate } from "react-router";

function Logement() {
  const [logement, setLogement] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const foundLogement = logementsData.find((house) => house.id === id);
    if (foundLogement) {
      setLogement(foundLogement);
    } else {
      navigate("/404");
    }
  }, [id, navigate]);

  if (!logement) return null;

  return (
    <div>
      <div>
        <ImageSlider slides={logement.pictures} />
      </div>
      <div className="LogementBox">
        <div className="LogementInfo">
          <h1 className="title">{logement.title}</h1>
          <p className="LogementLocation">{logement.location}</p>
          <Tags tags={logement.tags} />
        </div>
        <div className="BoxHost">
          <div className="InfoHost">
            <HostProfil name={logement.host.name} picture={logement.host.picture} />
          </div>
          <Rating rating={logement.rating} />
        </div>
      </div>
      <div className="BoxHeadband">
        <Headband title={"Description"} content={logement.description} />
        <Headband
          title={"Equipements"}
          content={
            <ul>
              {logement.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          }
        />
      </div>
    </div>
  );
}

export default Logement;

