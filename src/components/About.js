import react from "react";

const About = ({image, about}) => {
    return (
        <div>
            <aside></aside>
            <img src={image ? image : 'https://via.placeholder.com/215'} alt='blog logo' />
            <p>{about}</p>
        </div>
    )
}

export default About