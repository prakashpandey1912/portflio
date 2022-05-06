import PrakashPhoto from '../../assests/Prakash_photo1.jpg'
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import { MainLayout, InnerLayout } from '../../style/thyme'

function About() {
    const navigate = useNavigate();

    function _calculateAge(birthday) { // birthday is a date
        var ageDifMs = Date.now() - birthday.getTime();
        var ageDate = new Date(ageDifMs); // miliseconds from epoch
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    return (
        <>
            <MainLayout>
                <div className="centerDiv">
                    <h2>About</h2>
                </div>
                <AboutStyled>
                    <div className=" all-contain">
                        <div className=" centerDiv left-content">
                            <img src={PrakashPhoto} alt="Avatar" />
                        </div>
                        <div className="right-content">
                            <p>
                                Graduated as a Computer Science Engineer, now I am a Senior Software Engineer at Encora Inc, Pune
                                have 2 years of experience creating projects in Web development, Spark AR, Playable Ad and IOT.
                                I have a better understanding of Nodejs, JavaScript, TypeScript, Reactjs, C++.
                                Most of my work done is in Reactjs JavaScript and Nodejs.
                            </p><br />
                        </div>
                    </div>
                </AboutStyled>
                <div>
                    <div>Full Name: - Prakash Pandey</div>
                    <div>Age: - {_calculateAge(new Date(2000, 11, 19, 0, 0, 1, 1))} (19/12/2000)</div>
                    <div>Nationality: - Indian</div>
                    <div>Languages: - English, Hindi, Nepali</div>
                    <br />
                    <div >
                        <div className="centerDiv">Tech Skill</div><br />
                        Languages<div>➼JavaScript, TypeScript, C, C++, Core Java, Python</div>
                        Databases<div>➼MySQL, Java Derby, MongoDB</div>
                        Web Technologies<div>➼HTML, J2EE, CSS, ReactJS, Redux, ExpressJS, ThreeJS, A-Frame, NodeJS, babylon js</div>
                        Other Skills<div>➼Data Structures and Algorithms, Image Processing, React Native, Spark AR Studio,Lens Studio, Unity.</div>
                    </div>
                    <br />
                    <br />
                    <div className="centerDiv"><button onClick={() => {
                        navigate('/portfolio')
                    }} className="btn">Portfolio</button></div>
                </div>
            </MainLayout>
        </>
    )
}

const AboutStyled = styled.section`
            .all-contain{
            // display: grid;
            // grid-template-columns: repeat(2, 1fr);
            // grid-column-gap: 2rem;
            // text-align: left;
            //   margin: auto;
            @media screen and (max-width: 1000px) {
                // flex - direction: column;
            .left-content{
                width: 50%!important;
    }
  }
            .left-content {
                width: 20%;
            display:block;
            margin:auto;
            img{
                width: 100%;
            object-fit: cover;
            border-radius: 50%;
}
}
            .right-content {
                //display: grid;
                display:block;
                justify-content: center;
            margin:auto;
            //grid-template-columns: repeat(1, 1fr);
            @media screen and (max-width: 502px){
                // width: 70%;
    }
}
}
            `
export default About;