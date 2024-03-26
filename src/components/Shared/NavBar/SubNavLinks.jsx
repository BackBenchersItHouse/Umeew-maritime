import React, { useState } from "react";
import { Link } from "react-router-dom";

const SubNavLinks = () => {
  const [click, setClick] = useState(false);

  const links = [
    {
      pathName: "page",
      isSubMenu: true,
      subLinks: [
        { subPathName: "page blog", path: "/a111" },
        { subPathName: "page 2", path: "/b222" },
        { subPathName: "page 3", path: "/c333" },
      ],
    },
  ];
  return (
    <>
      {links.map((link, idx) => (
        <div key={idx}>
          <div className="text-left md:cursor-pointer group">
            <h3 className={`py-2.5 px-3 md:py-7 capitalize hover:text-secondary ${click ? 'border-b border-secondary' : 'border-b border-neutral/20 md:border-neutral/0'}`} onClick={() => setClick(!click)}>{link.pathName}</h3>
            {link.isSubMenu && (
              <div className="relative">
                <div className={`absolute -top-5 md:top-0 w-full duration-500 ${click? 'block' : 'hidden'}`}>
                  <div className="py-3">
                    <div className="bg-primary/80 backdrop-blur-3xl w-4 h-4 hidden md:block absolute left-3 mt-1.5 rotate-45">
                    </div>
                  </div>
                  <div className="bg-primary md:bg-primary/95 backdrop-blur-3xl w-full md:w-52 py-2.5 px-5 md:p-3.5">
                    {
                      link.subLinks.map((subLink, idx) => {
                        return(
                          <li className="text-lg text-neutral py-2.5 px-5 md:px-0 hover:text-secondary border-b border-neutral/20 capitalize" key={idx}>
                            <Link to={subLink.path}>{subLink.subPathName}</Link>
                          </li>
                        )
                      })
                    }
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
