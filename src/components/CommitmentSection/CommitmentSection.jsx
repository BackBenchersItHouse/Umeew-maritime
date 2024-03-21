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
        <div className="text-center">
            <h1 className="text-4xl font-bold">Our Commitment <br /> to Your Success</h1>
            <div>
                {commitments.map(commitment => console.log(commitment))}
            </div>

            <div className="text-left">
            <img src={CommitmentIcon} alt="" />
            <h2 className="text-xl font-bold"> Competitive Rates</h2>
            <p>Our team of highly skilled and certified professionals possesses years of experience in all aspects of ship maintenance and repair</p>

            </div>
            
        </div>
    );
};

export default CommitmentSection;