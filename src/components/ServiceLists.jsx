import React from "react";

const ServiceLists = ({...data}) => {
  const {title, description, lists} = {...data};
  return (
    <section className="mt-14 md:mt-[120px] mb-6 md:mb-[60px]">
      <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4">
        {title}
      </h3>
      <p className="mb-4 text-accent">{description}</p>
      <ul>
        {lists.map((list) => (
          <li key={list.listId} className="my-4">
            <div className="flex items-center gap-4">
              <div className="w-4 h-4 bg-secondary hexagon">
                {/* Hexagon Icon */}
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

export default ServiceLists;
