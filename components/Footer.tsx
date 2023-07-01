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
    <div className="bg-[#5E097E] py-[100px] mt-24">
      <ul className="flex justify-center gap-[30px]">
        {footerItems.map((item) => (
          <li key={item.title} className="hover:underline transition">
            <a href={item.path}>{item.title}</a>
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
