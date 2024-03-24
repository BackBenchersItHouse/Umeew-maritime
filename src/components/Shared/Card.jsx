const Card = ({ work }) => {
  const { title, text, iconSrc } = work;
  return (
    <div className="text-left w-[370px] space-y-5 border-[1px] border-gray/20 shadow-md p-5 rounded-lg">
      <img src={iconSrc} alt="" />
      <h2 className="text-xl font-bold"> Lorem ipsum dolor sit amet.</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea dignissimos
        eum officia nam magnam obcaecati molestiae fugit mollitia possimus
        necessitatibus.
      </p>
    </div>
  );
};

export default Card;
