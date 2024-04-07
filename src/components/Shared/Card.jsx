const Card = ({ data }) => {
  const { title, text, iconSrc } = data;
  return (
    <div className="text-left w-[370px] border-gray/20  p-5  | space-y-4 border border-t-4 border-t-accent/5 border-accent/20 shadow-lg hover:translate-y-1 duration-300 hover:border-t-4 hover:border-t-secondary">
      <img src={iconSrc} alt="" />
      <h2 className="text-xl font-bold"> {title}.</h2>
      <p>{text}</p>
    </div>
  );
};

export default Card;

