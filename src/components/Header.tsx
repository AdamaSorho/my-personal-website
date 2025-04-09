import React from "react";
import {
  Navbar,
  Avatar,
  Button,
  NavbarCollapse,
  NavbarToggle,
} from "flowbite-react";
// import { HiMenu, HiX } from "react-icons/hi";
import { Link, NavLink } from "react-router-dom";

interface HeaderProps {
  name: string;
  avatarUrl?: string;
  email?: string;
}

const Header: React.FC<HeaderProps> = ({ name, avatarUrl, email }) => {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  // const toggleMenu = () => {
  //   setIsMenuOpen(!isMenuOpen);
  // };

  // Custom active class for NavLink
  const activeClass =
    "text-blue-700 bg-gray-100 md:bg-transparent md:text-blue-700";
  const normalClass =
    "text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700";

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <Navbar fluid className="mx-auto max-w-7xl px-4 py-2.5 lg:px-6">
        <NavLink to={"/"} className="mr-5 flex items-center">
          {avatarUrl && (
            <Avatar
              img={avatarUrl}
              alt={`${name}'s profile`}
              rounded
              className="mr-3"
            />
          )}
          <span className="self-center text-2xl font-semibold whitespace-nowrap">
            {name}
          </span>
        </NavLink>

        <div className="flex md:order-2">
          <NavbarToggle />
        </div>

        <NavbarCollapse id="navbar-menu" className="md:block">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? activeClass : normalClass)}
            end
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? activeClass : normalClass)}
          >
            About
          </NavLink>
          <NavLink
            to="/experience"
            className={({ isActive }) => (isActive ? activeClass : normalClass)}
          >
            Experience
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) => (isActive ? activeClass : normalClass)}
          >
            Projects
          </NavLink>
          <NavLink
            to="/skills"
            className={({ isActive }) => (isActive ? activeClass : normalClass)}
          >
            Skills
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? activeClass : normalClass)}
          >
            Contact
          </NavLink>
        </NavbarCollapse>

        <div className="ml-auto hidden md:flex md:items-center">
          <Button
            as={Link}
            to={`mailto:${email}`}
            className="dark:focus:ring-blue-800> rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 font-medium text-white hover:bg-gradient-to-bl focus:ring-blue-300"
          >
            Contact Me
          </Button>
        </div>
      </Navbar>
    </header>
  );
};

export default Header;
