const CommitmentCard = ({ id, icon, title, subTitle }) => {
  // console.log(title);
  return (
    <div
      className={`min-w-[270px] max-w-[370px] min-h-full bg-white text-left py-9 px-5 space-y-4 border-4 border-accent/20 hover:border-secondary shadow-lg hover:scale-110 duration-300 ${
        id === 3 ? "lg:col-span-full xl:col-auto" : ""
      }`}
      key={id}
    >
      <img src={icon} alt={title} />
      <h2 className="text-xl font-semibold"> {title}</h2>
      <p className="text-sm text-accent">{subTitle}</p>
    </div>
  );
};

export default CommitmentCard;
