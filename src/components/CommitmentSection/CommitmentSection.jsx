import CommitmentIcon from "../../../public/commitmentIcon.svg"


const CommitmentSection = () => {

    const commitments =[
        {
            icon: {CommitmentIcon},
            title:'Unparalleled Expertise',
            subTitle:'Our team of highly skilled and certified professionals possesses years of experience in all aspects of ship maintenance and repair'

        },
        {
            icon: {CommitmentIcon},
            title:'Quality You Can Trust',
            subTitle:'We use only the finest parts and materials to ensure long-lasting repairs and optimal performance.'

        },
        {
            icon: {CommitmentIcon},
            title:'Streamlined Efficiency',
            subTitle:'We prioritize clear communication and efficient service delivery to minimize downtime and keep your operations on schedule.'

        },
        {
            icon: {CommitmentIcon},
            title:'Competitive Rates',
            subTitle:'We offer competitive pricing and transparent cost structures to fit your budget.'

        },
    ]
    console.log(commitments)
    return (
        <div className="text-center w-3/4 mx-auto my-10">
            <h1 className="text-4xl font-bold mb-10">Our Commitment <br /> to Your Success</h1>
            <div className="grid grid-cols-4 gap-10 ">
                {commitments.map(commitment =><div className="text-left space-y-5">
            <img src={CommitmentIcon} alt="" />
            <h2 className="text-xl font-bold"> {commitment.title}</h2>
            <p>{commitment.subTitle}</p>

            </div> )}
            </div>

            {/* <div className="text-left">
            <img src={CommitmentIcon} alt="" />
            <h2 className="text-xl font-bold"> Competitive Rates</h2>
            <p>Our team of highly skilled and certified professionals possesses years of experience in all aspects of ship maintenance and repair</p>

            </div> */}
            
        </div>
    );
};

export default CommitmentSection;