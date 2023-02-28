import React from "react";
import Banner from "../components/Banner";
import BannerImg from "../assets/img_banner_about.png";
import Dropdown from "../components/Dropdown";

function About() {
  const aboutText = (title) => {
    switch (title) {
      case "fiability":
        return "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.";
      case "respect":
        return "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.";
      case "service":
        return "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.";
      case "security":
        return "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.";
      default:
        console.log("error");
        break;
    }
  };

  return (
    <main className="main">
      <div className="main__banner">
        <Banner image={BannerImg} />
      </div>
      <div className="main__dropdowns">
        <Dropdown title="Fiabilité" content={aboutText("fiability")} />
        <Dropdown title="Respect" content={aboutText("respect")} />
        <Dropdown title="Service" content={aboutText("service")} />
        <Dropdown title="Sécurité" content={aboutText("security")} />
      </div>
    </main>
  );
}

export default About;
