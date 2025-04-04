import React from "react";
import {
  Footer as FlowbiteFooter,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
} from "flowbite-react";
import { BsLinkedin, BsEnvelope, BsTelephone } from "react-icons/bs";

interface FooterProps {
  name: string;
  email: string;
  phone?: string;
  linkedinUrl: string;
  location?: string;
}

const Footer: React.FC<FooterProps> = ({
  name,
  email,
  phone,
  linkedinUrl,
  location,
}) => {
  const currentYear = new Date().getFullYear();

  return (
    <FlowbiteFooter container className="rounded-none bg-gray-900 text-white">
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid w-full grid-cols-1 gap-8 px-6 py-8 md:grid-cols-3">
          <div>
            <FooterTitle title={name} className="text-white" />
            <FooterLinkGroup col>
              <p className="text-gray-300">
                Senior Software Engineer specializing in Java, Python, and AI/ML
                solutions
              </p>
              {location && (
                <p className="mt-2 text-gray-300">Based in {location}</p>
              )}
            </FooterLinkGroup>
          </div>

          <div>
            <FooterTitle title="Quick Links" className="text-white" />
            <FooterLinkGroup col>
              <FooterLink href="/">Home</FooterLink>
              <FooterLink href="/about">About</FooterLink>
              <FooterLink href="/experience">Experience</FooterLink>
              <FooterLink href="/projects">Projects</FooterLink>
              <FooterLink href="/skills">Skills</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
            </FooterLinkGroup>
          </div>

          <div>
            <FooterTitle title="Contact" className="text-white" />
            <FooterLinkGroup col>
              <FooterLink
                href={`mailto:${email}`}
                className="flex items-center"
              >
                <BsEnvelope className="mr-2" />
                {email}
              </FooterLink>

              {phone && (
                <FooterLink href={`tel:${phone}`} className="flex items-center">
                  <BsTelephone className="mr-2" />
                  {phone}
                </FooterLink>
              )}

              <FooterLink
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <BsLinkedin className="mr-2" />
                LinkedIn
              </FooterLink>
            </FooterLinkGroup>
          </div>
        </div>

        <div className="w-full bg-gray-800 px-6 py-4 text-center">
          <span className="text-sm text-gray-300">
            © {currentYear} {name}. All Rights Reserved.
          </span>
        </div>
      </div>
    </FlowbiteFooter>
  );
};

export default Footer;
