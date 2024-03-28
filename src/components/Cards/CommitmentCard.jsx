const CommitmentCard = ({commitments}) => {
  // console.log('commitments:', commitments);
  return (
    <section className="text-center my-[120px]">
      <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-[60px]">
        Our Commitment <br /> to Your Success
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-between justify-items-center gap-8">
        {commitments?.map((commitment, idx) => (
          <div className={`w-[270px] text-left py-9 px-5 space-y-4 border border-accent/20 shadow-lg hover:translate-y-1 duration-300 hover:border-t-4 hover:border-t-secondary ${idx === 3 ? 'lg:col-span-full xl:col-auto' : ''}`} key={idx}>
            <img src={commitment.icon} alt={commitment.title} />
            <h2 className="text-xl font-semibold"> {commitment.title}</h2>
            <p className="text-sm text-accent">{commitment.subTitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CommitmentCard;
