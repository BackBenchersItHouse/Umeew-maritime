const Card = ({ data }) => {
  const { title, text, iconSrc } = data;
  return (
    <div className="text-left w-[370px] space-y-5 border-[1px] border-gray/20 shadow-md p-5 rounded-lg">
      <img src={iconSrc} alt="" />
      <h2 className="text-xl font-bold"> {title}.</h2>
      <p>{text}</p>
    </div>
  );
};

export default Card;
