import { Link } from "react-router-dom";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const socials = [
  {
    icon: <FaGithub />,
    path: ""
  },
  {
    icon: <FaLinkedinIn />,
    path: ""
  }
]

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((social, index) => (
        <Link key={index} to={social.path} className={iconStyles}>
          {social.icon}
        </Link>
      ))}

    </div>
  );
}

export default Social;