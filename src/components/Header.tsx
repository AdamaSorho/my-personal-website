import React, { useState } from "react";
import {
  Navbar,
  Avatar,
  Button,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
} from "flowbite-react";
import { HiMenu, HiX } from "react-icons/hi";

interface HeaderProps {
  name: string;
  avatarUrl?: string;
}

const Header: React.FC<HeaderProps> = ({ name, avatarUrl }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <Navbar fluid className="mx-auto max-w-7xl px-4 py-2.5 lg:px-6">
        <NavbarBrand href="/" className="flex items-center">
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
        </NavbarBrand>

        <div className="flex items-center md:hidden">
          <button
            onClick={toggleMenu}
            className="ml-3 inline-flex items-center rounded-lg p-2 text-gray-500 hover:bg-gray-100 focus:ring-2 focus:ring-gray-200 focus:outline-none"
            aria-controls="navbar-menu"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            {isMenuOpen ? (
              <HiX className="h-6 w-6" />
            ) : (
              <HiMenu className="h-6 w-6" />
            )}
          </button>
        </div>

        <NavbarCollapse id="navbar-menu" className="md:block">
          <NavbarLink href="/" active>
            Home
          </NavbarLink>
          <NavbarLink href="/about">About</NavbarLink>
          <NavbarLink href="/experience">Experience</NavbarLink>
          <NavbarLink href="/projects">Projects</NavbarLink>
          <NavbarLink href="/skills">Skills</NavbarLink>
          <NavbarLink href="/contact">Contact</NavbarLink>
        </NavbarCollapse>

        <div className="ml-auto hidden md:flex md:items-center">
          <Button className="rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 font-medium text-white hover:bg-gradient-to-bl focus:ring-blue-300 dark:focus:ring-blue-800">
            Contact Me
          </Button>
        </div>
      </Navbar>
    </header>
  );
};

export default Header;
