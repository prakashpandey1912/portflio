import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import GithubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import styled from 'styled-components';

function HomePage() {
    return (
        <>
            <HomePageStyled>
                <div className="typography">
                    <h2 style={{ paddingTop: "100px" }} ><div>Hello Everybody, I am</div><span>Prakash Pandey</span><br /><div> Full Stack Developer</div></h2>
                    <p className="dataHomePage">
                        <h2><div> Welcome to my portfolio</div></h2>
                    </p>
                    <div className="icons">
                        <a href="https://www.facebook.com/profile.php?id=100009302766028" target="_blank" className="icon i-facebook">
                            <FacebookIcon />
                        </a>
                        <a href="https://twitter.com/Prakash19122000" target="_blank" className="icon i-twitter">
                            <TwitterIcon />
                        </a>
                        <a href="https://github.com/prakashpandey1912" target="_blank" className="icon i-github">
                            <GithubIcon />
                        </a>
                        <a href="https://www.linkedin.com/in/prakash-pandey-b10143170/" target="_blank" className="icon i-linkedin">
                            <LinkedInIcon />
                        </a>

                    </div>
                </div>
            </HomePageStyled>
        </>
    );

}

const HomePageStyled = styled.header`
    width: 100%;
    height: 100vh;
    position: absolute;
   .dataHomePage{
    display: flex;
    justify-content: center;
    margin-top: 10rem;
   }

    .typography{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        width: 90%;
        height:100vh;

        .icons{
            display: flex;
            justify-content: center;
            margin-top: 12rem;
            .icon{
                border: 2px solid var(--border-color);
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: all .4s ease-in-out;
                cursor: pointer;
                &:hover{
                    border: 2px solid var(--primary-color);
                    color: var(--primary-color);
                }
                &:not(:last-child){
                    margin-right: 1rem;
                }
                svg{
                    margin: .5rem;
                }
            }
           

            .i-youtube{
                &:hover{
                    border: 2px solid red;
                    color: red;
                }
            }
            .i-github{
                &:hover{
                    border: 2px solid #5F4687;
                    color: #5F4687;
                }
            }
        }
        @media screen and (max-width:1200px){
            .icons{
                margin-top: 8rem;
            }
            .dataHomePage{
                margin-top:8rem;
            }
        }
    }
`;

export default HomePage;
