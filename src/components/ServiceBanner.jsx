import React from "react";

const ServicesBanner = ({ ...data }) => {
  const { id, title, subTitle, description, src, listItem } = { ...data };
  const { itemTitle, itemDescription, lists } = listItem;
  // const {listId, listHead, listPara} = lists[0];
  // console.log("recevied data:", listHead);

  return (
    <section>
      <img
        className="float-none md:float-right mx-auto md:ml-7"
        src={src}
        alt={`${title}'s Image`}
      />
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10 leading-normal">
        {title}
      </h1>
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">
        {subTitle}
      </h2>
      <p className="mb-8 text-accent">{description}</p>
      <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4">
        {itemTitle} :
      </h3>
      <p className="mb-4 text-accent">{itemDescription}</p>
      <ul>
        {lists.map((list) => (
          <li key={list.listId}>
            <div className="flex items-center gap-4">
              <div className="w-4 h-4 bg-secondary hexagon text-secondary">
                Hexagon Icon
              </div>
              <h4 className="text-lg font-semibold">{list.listHead} :</h4>
            </div>
            <p className="text-accent ml-8">{list.listPara}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ServicesBanner;
