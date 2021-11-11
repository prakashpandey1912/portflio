import PrakashPhoto from '../../assests/Prakash_photo1.jpg'
import styled from "styled-components";
import { MainLayout, InnerLayout } from '../../style/thyme'
function About() {
    return (
        <>
            <MainLayout>
                <div className="centerDiv">
                    <h2>About</h2>
                    <br />
                    <AboutStyled>
                        <div className="all-contain">
                            <div className="left-content">
                                <img src={PrakashPhoto} alt="Avatar" />
                            </div>
                            <div className="right-content">
                                <p>
                                    I am a Full Stack developer at Ronin labs, Pune
                                    creating projects in Web development, Spark AR, Playable Ad and IOT.
                                    I have a better understanding of Nodejs, JavaScript, Reactjs, C++.
                                    Most of my work done is in Reactjs JavaScript and Nodejs.
                                </p>
                            </div>
                        </div>
                    </AboutStyled>
                </div>
            </MainLayout>
        </>
    )
}

const AboutStyled = styled.section`
            .all-contain{
                display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-column-gap: 2rem;
            text-align: left;
            //   margin: auto;
            @media screen and (max-width: 1000px) {
                flex - direction: column;
            .left-content{
                width: 100%!important;
    }
  }
            .left-content {
                width: 50%;
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
            margin:auto;
            width: 80%;
            //grid-template-columns: repeat(1, 1fr);
            @media screen and (max-width: 502px){
                width: 70%;
    }
}
}
            `
export default About;