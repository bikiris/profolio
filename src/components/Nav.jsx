import { Link, useLocation } from "react-router-dom";

const links = [
  {
    name: "Home",
    path:"/"
  },
  {
    name: "About",
    path:"/about"
  },
  {
    name: "Projects",
    path:"/projects"
  },
  {
    name: "Contact",
    path:"/contact"
  }
]

const Nav = () => {
  const location = useLocation();

  return (
    <nav className="flex gap-9 ">
      {links.map((link, index) => (
        <Link 
          key={index}
          to={link.path} 
          className={`${location.pathname === link.path ? "text-blue-500 border-b-2" : "text-gray-500"} capitalize font-medium hover:text-blue-500 transition-all`} 
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
}

export default Nav;