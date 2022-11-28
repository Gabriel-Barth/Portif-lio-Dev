import React from "react";
import Avatar from "../img/photo.png";
import "../styles/components/sidebar.sass";
import SocialNetwork from "./SocialNetwork";
import InformationContainer from './InformationContainer'
const sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Gabriel de Paiva" />
      <p className="title">Desenvolvedor</p>
      <SocialNetwork />
      <InformationContainer/>
      <a href='../download/curriculo.pdf'  attributes-list download ="Gabriel Barth" className="btn">
        Download currículo
      </a>
    </aside>
  );
};

export default sidebar;
