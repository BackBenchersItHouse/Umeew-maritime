import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import scrollToTop from "./ScrollToTop";

const SubNavLinks = ({ open, setOpen = () => {} }) => {
  const [click, setClick] = useState(false);

  let clickRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!clickRef.current.contains(e.target)) {
        setClick(false);
      }
    };

    document.addEventListener("mousedown", handler);

    // return () => document.removeEventListener("mousedown", handler);
  }, []);

  const links = [
    {
      pathName: "Services",
      isSubMenu: true,
      subLinks: [
        { subPathName: "Ship Chandlery", path: "/service/ship-chandlery" },
        { subPathName: "Ship Repair", path: "/service/ship-repair" },
        { subPathName: "Ship Supply", path: "/service/ship-supply" },
        {
          subPathName: "Logistics",
          path: "/service/logistics",
        },
        {
          subPathName: "Export Products",
          path: "/service/export-products",
        },
      ],
    },
  ];
  return (
    <>
      {links?.map((link, idx) => (
        <div key={idx}>
          <div className="text-left md:cursor-pointer group" ref={clickRef}>
            <h3
              className={`py-2.5 px-3 md:py-7 flex items-center gap-2 capitalize hover:text-secondary hover:border-secondary group duration-300 ${
                click
                  ? "border-b-2 border-secondary"
                  : "border-b-2 border-neutral/20 md:border-neutral/0"
              }`}
              onClick={() => setClick(!click)}
            >
              {link.pathName}
              <i
                className={`w-2 h-2 border-r-2 border-b-2 border-black group-hover:border-secondary ${
                  click
                    ? "-rotate-[135deg] scale-110 duration-300"
                    : "rotate-45 duration-300"
                }`}
              >
                {/* Drop Down Icon */}
              </i>
            </h3>
            {link.isSubMenu && (
              <div className="relative">
                <div
                  className={`absolute -top-5 md:top-0 w-full duration-500 ${
                    click ? "block" : "hidden"
                  }`}
                >
                  <div className="py-3">
                    <div className="bg-white/50 backdrop-blur-3xl w-4 h-4 hidden md:block absolute left-3 mt-1.5 rotate-45">
                      {/* Sub Links arrow icon */}
                    </div>
                  </div>
                  <div className="bg-white/50 backdrop-blur-3xl w-full md:w-64 py-2.5 px-5 md:p-3.5">
                    {link?.subLinks?.map((subLink, idx) => {
                      return (
                        <NavLink to={subLink.path} key={idx}>
                          <li
                            onClick={() =>
                              setClick(!click) ||
                              setOpen(!open) ||
                              scrollToTop()
                            }
                            className="text-lg text-accent py-2.5 px-5 md:px-0 hover:text-secondary border-b border-neutral/20 hover:border-secondary capitalize"
                          >
                            {subLink.subPathName}
                          </li>
                        </NavLink>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default SubNavLinks;
