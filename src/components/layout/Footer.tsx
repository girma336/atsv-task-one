"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="mt-4 w-full bg-black py-20 text-white ">
      <div className="container block max-w-7xl px-8 lg:mx-auto lg:flex">
        <div className="block w-full justify-start gap-6 md:flex">
          <div>
            <h3 className="mb-10 text-xl font-medium">Sitemap</h3>
            <ul className="space-y-2">
              {[
                "Arifget Digital Assets",
                "Arifget Online Courses",
                "Arifget Freelancers",
              ].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-sm font-bold hover:text-primary">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="py-16 md:py-0">
            <h3 className="mb-10 text-xl font-medium">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-2 text-sm font-normal">
                <MapPin size={20} />
                Addis Ababa, Ethiopia
              </li>
              <li className="flex items-center gap-2 text-sm font-normal">
                <Phone size={20} />
                <p className="text-primary">+251911000000</p>
              </li>
              <li className="flex items-center gap-2 text-sm font-normal">
                <Mail size={20} />
                <a href="mailto:contact@arifget.com" className="text-primary">
                  contact@atsvgirma.com
                </a>
              </li>
            </ul>
          </div>
          <div className="py-16 md:py-0">
            <h3 className="mb-10 text-xl font-medium">Legal</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-2 text-sm font-normal">
                <MapPin size={20} />
                Addis Ababa, Ethiopia
              </li>
              <li className="flex items-center gap-2 text-sm font-normal">
                <Phone size={20} />
                <p className="text-primary">+251911000000</p>
              </li>
              <li className="flex items-center gap-2 text-sm font-normal">
                <Mail size={20} />
                <a href="mailto:contact@arifget.com" className="text-primary">
                  contact@girma.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className=" grid w-full grid-cols-1 flex-col items-start justify-start pt-6 lg:flex lg:items-end lg:justify-end lg:pt-0">
          <div className="ml-0 w-[180px]">
            <Image
              src="/images/food1.png"
              width={160}
              height={160}
              alt="Hero image"
              className="mx-auto"
            />
            <p className="pt-4 text-center text-base font-medium">
              Copyright 2024 © AtsvGirma.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
