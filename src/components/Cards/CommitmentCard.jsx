const CommitmentCard = ({icon, title, subTitle},{idx}) => {
  // console.log('commitments:', commitments);
  console.log(title)
  // commitments props accepted ⬇⬇⬇
  // const commitments = [{icon: '', title: '', subTitle: ''}];
  return (
      // <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-between justify-items-center gap-8">
      //   {commitments?.map((commitment, idx) => (
          <div
            className={`w-[270px] h-full text-left py-9 px-5 space-y-4 border border-accent/20 shadow-lg hover:translate-y-1 duration-300 hover:border-t-4 hover:border-t-secondary ${
              idx === 3 ? "lg:col-span-full xl:col-auto" : ""
            }`}
            key={idx}
          >
            <img src={icon} alt={title} />
            <h2 className="text-xl font-semibold"> {title}</h2>
            <p className="text-sm text-accent">{subTitle}</p>
          </div>
      //   ))}
      // </div>
  );
};

export default CommitmentCard;
