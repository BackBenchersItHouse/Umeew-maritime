const CommitmentCard = ({ id, icon, title, subTitle }) => {
  // console.log(title);
  return (
    <div
      className={`min-w-[270px] max-w-[370px] max-h-full text-left py-9 px-5 space-y-4 border border-t-4 border-t-accent/5 border-accent/20 shadow-lg hover:translate-y-1 duration-300 hover:border-t-4 hover:border-t-secondary ${
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
