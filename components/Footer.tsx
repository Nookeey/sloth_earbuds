import Link from "next/link";
import React from "react";

const footerItems = [
  {
    title: "FAQ",
    path: "/faq",
  },
  {
    title: "Kontakt",
    path: "/contact",
  },
  {
    title: "Regulamin",
    path: "/terms",
  },
  {
    title: "Polityka prywatności",
    path: "/privacy",
  },
];

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <div className="bg-[#5E097E] py-[40px] sm:py-[100px] mt-24">
      <ul className="flex flex-wrap sm:flex-nowrap justify-center sm:gap-[30px]">
        {footerItems.map((item) => (
          <li
            key={item.title}
            className="hover:underline transition w-full sm:w-fit text-center"
          >
            <Link href={item.path}>{item.title}</Link>
          </li>
        ))}
      </ul>
      <p className="text-center text-sm mt-6">
        © {year} Wszelkie prawa zastrzeżone
      </p>
    </div>
  );
};

export default Footer;
