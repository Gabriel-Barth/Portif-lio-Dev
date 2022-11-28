import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

import "../styles/components/socialnetworks.sass";
const socialnetworks = [
  {
    name: "linkedin",
    icon: <FaLinkedinIn />,
    media: "https://www.linkedin.com/in/gabriel-de-paiva-barth-639270228/",
  },
  {
    name: "github",
    icon: <FaGithub />,
    media: "https://github.com/Gabriel-Barth",
  },
  {
    name: "instagram",
    icon: <FaInstagram />,
    media: "https://www.instagram.com/",
  },
];

const SocialNetwork = () => {
  return (
    <section id="social-networks">
      {socialnetworks.map((network) => (
        <a
          href={network.media} target='_blank'
          className="social-btn"
          id={network.name}
          key={network.name}
        >
          {network.icon}
        </a>
      ))}
    </section>
  );
};

export default SocialNetwork;
