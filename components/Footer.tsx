import { navLogo } from "@/constants/images";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";

// Reusable list component for links
interface LinkListProps {
  title: string;
  links: { href: string; label: string }[];
}

const LinkList: FC<LinkListProps> = ({ title, links }) => (
  <div>
    <p className="text-sm font-semibold text-red-600">{title}</p>
    <ul className="mt-4 space-y-2 text-sm">
      {links.map(({ href, label }) => (
        <li key={label}>
          <Link href={href} className="text-red-500 hover:text-red-600 transition">
            {label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

// Reusable SocialIcon component
interface SocialIconProps {
  href: string;
  label: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const SocialIcon: FC<SocialIconProps> = ({ href, label, Icon }) => (
  <li>
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="text-red-500 hover:text-red-600 transition"
      aria-label={label}
    >
      <Icon className="w-6 h-6" />
    </a>
  </li>
);

const Footer: FC = () => {
  const socialLinks = [
    { href: "/", label: "Facebook", Icon: FaFacebook },
    { href: "/", label: "Instagram", Icon: FaInstagram },
    { href: "/", label: "Twitter", Icon: FaTwitter },
    { href: "/", label: "GitHub", Icon: FaGithub },
  ];

  const linkSections = [
    {
      title: "Discover",
      links: [{ href: "/", label: "Trending Restaurants" }],
    },
    {
      title: "Top Cuisines",
      links: [
        { href: "/", label: "Chinese" },
        { href: "/", label: "Italian" },
        { href: "/", label: "South Indian" },
      ],
    },
    {
      title: "Top Facilities",
      links: [
        { href: "/", label: "5 Star" },
        { href: "/", label: "Rooftop" },
        { href: "/", label: "Fine Dining" },
      ],
    },
    {
      title: "Top Locations",
      links: [
        { href: "/", label: "Delhi" },
        { href: "/", label: "Mumbai" },
        { href: "/", label: "Varanasi" },
        { href: "/", label: "Lucknow" },
      ],
    },
  ];

  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Company Information Section */}
          <div>
            <Link href="/" className="flex items-center">
              <Image
                src={navLogo}
                alt="Navigation Logo"
                width={150}
                height={80}
                className="object-contain"
                priority
              />
            </Link>
            <p className="mt-2 text-sm text-red-500">
              Find the best Restaurants, Deals, Discounts & Offers
            </p>
            <p className="text-sm text-red-500">
              Write to us at:{" "}
              <Link href="mailto:readitable@gmail.com" className="font-bold">
                readitable@gmail.com
              </Link>
            </p>

            {/* Social Media Links */}
            <ul className="mt-4 flex gap-4">
              {socialLinks.map((link) => (
                <SocialIcon key={link.label} {...link} />
              ))}
            </ul>
          </div>

          {/* Discover, Cuisines, Facilities, Location Sections */}
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {linkSections.map((section) => (
              <LinkList key={section.title} {...section} />
            ))}
          </div>
        </div>

        {/* Footer Copyright */}
        <hr className="my-4" />
        <p className="text-center text-sm text-red-600">
          &copy; {new Date().getFullYear()}. Redytable.com. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
