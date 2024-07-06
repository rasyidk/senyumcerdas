import React from "react";
import Image from "next/image";
import { IoLocationSharp, IoTime } from "react-icons/io5";
import PropTypes from "prop-types";
import {
  IoChatbubbleEllipses,
  IoGlobeOutline,
  IoLogoLinkedin,
  IoMail,
} from "react-icons/io5";
import {
  SiFacebook,
  SiLine,
  SiTiktok,
  SiTwitter,
  SiYoutube,
  SiInstagram,
  SiX,
} from "react-icons/si";

const medsos = [
  {
    type: "instagram",
    link: "https://www.instagram.com/porsenigama/",
    icon1: "type1_instagram",
    icon: <SiInstagram />,
  },
  {
    type: "tiktok",
    link: "https://www.tiktok.com/@porsenigama",
    icon1: "type1_tiktok",
    icon: <SiTiktok />,
  },
  {
    type: "youtube",
    link: "https://www.youtube.com/@porsenigamatv3221",
    icon1: "type1_youtube",
    icon: <SiYoutube />,
  },

  {
    type: "twitter",
    link: "https://twitter.com/porsenigama",
    icon1: "type1_x",
    icon: <SiX />,
  },
  {
    type: "line",
    link: "https://page.line.me/porsenigama?openQrModal=true",
    icon1: "type1_line",
    icon: <SiLine />,
  },
];

export function Footer({ type }) {
  return (
    <footer className=" bg-primary w-full items-center justify-center">
      <div className="flex justify-between px-[16px] pb-4 md:px-[32px] lg:px-[72px] lg:pb-0">
        <div className="  w-full rounded-[40px]   p-4 md:p-8 lg:flex lg:justify-between ">
          <div>
            <div className="mt-12 font-rockwell text-[16px] font-bold  md:text-[20px]">
              <p>Rumah Korea Indonesia</p>
            </div>

            <div className="flex flex-row mt-4 items-start">
              <div className="flex items-center">
                <IoLocationSharp className=" mr-2 h-6 w-6 text-gray-500" />
              </div>
              <p className=" max-w-[530px] font-montserrat text-[12px]  md:text-[16px]">
                Gelanggang Mahasiswa Universitas Gadjah Mada Jl. Pancasila No.1,
                Bulaksumur, Caturtunggal, Sleman, Daerah Istimewa Yogyakarta
                55281
              </p>
            </div>

            <div className="flex flex-row mt-4 items-start">
              <div className="flex items-center">
                <IoTime className=" mr-2 h-6 w-6 text-gray-500" />
              </div>
              <div className=" items-center w-full">
                <p className=" max-w-[530px] font-montserrat text-[12px]  md:text-[16px]">
                  08.00-16.00 WIB
                </p>
              </div>
            </div>
          </div>
          <div className=" lg:items-center  lg:flex lg:mt-0 mt-8">
            <div className="grid grid-cols-6 md:gap-9">
              {medsos.map((link, i) => (
                <a
                  key={i}
                  href={link.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="hover:bg-green-30 flex w-[24px] items-center justify-center ">
                    {link.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        className={`flex  h-10 w-full items-center justify-center text-center lg:h-16`}
      >
        <h4 className=" font-montserrat text-[12px]  text-white  md:text-[16px]">
          © Rumah Korea Indonesia. All rights reserved.
        </h4>
      </div>
    </footer>
  );
}
Footer.propTypes = {
  type: PropTypes.string,
};

Footer.defaultProps = {
  type: "type1",
};

export default Footer;
