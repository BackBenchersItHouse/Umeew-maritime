const LeaderCard = ({ person }) => {
  const { name, position, img } = person;
  return (
    <div className="text-center flex flex-col">
      <img className="mb-2 w-[338px] h-[438px]" src={img} alt="person" />
      <p className="font-semibold text-xl">{name}</p>
      <p className="text-lg">{position}</p>
    </div>
  );
};

export default LeaderCard;
