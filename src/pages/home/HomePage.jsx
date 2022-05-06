import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import GithubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useEffect } from 'react';
import Loading from '../../component/loader/Loading';
import store from '../../store/store';

function HomePage(props) {
    const navigate = useNavigate();
    useEffect(() => {

        setTimeout(() => {
            store.dispatch({
                type: 'FIRST', payload: {
                    firstTime: false
                }
            })
        }, 5000)
    }, [])
    return (
        <>
            {store.getState().app.firstTime ? (<Loading />) : (
                <HomePageStyled>
                    <div className="typography">
                        <h2 style={{ paddingTop: "100px" }} ><div>Hello Everybody, I am</div><span>Prakash Pandey</span><br /><div> Senior Software Engineer</div></h2>
                        <p className="dataHomePage">
                            <h2><div> Welcome to my portfolio website</div></h2>
                        </p>
                        <br />
                        <button className="btn" onClick={() => {
                            navigate('/about')
                            console.log("clickS")
                        }}>Lets Explore<span> »</span></button>
                        <div className="icons">
                            <a href="https://www.facebook.com/profile.php?id=100009302766028" rel="noopener noreferrer" target="_blank" className="icon i-facebook">
                                <FacebookIcon />
                            </a>
                            <a href="https://twitter.com/Prakash19122000" rel="noopener noreferrer" target="_blank" className="icon i-twitter">
                                <TwitterIcon />
                            </a>
                            <a href="https://github.com/prakashpandey1912" rel="noopener noreferrer" target="_blank" className="icon i-github">
                                <GithubIcon />
                            </a>
                            <a href="https://www.linkedin.com/in/prakash-pandey-b10143170/" rel="noopener noreferrer" target="_blank" className="icon i-linkedin">
                                <LinkedInIcon />
                            </a>

                        </div>
                    </div>
                </HomePageStyled>)
            }
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
    margin-top: 8rem;
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
            margin-top: 8rem;
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
                margin-top: 7rem;
            }
            .dataHomePage{
                margin-top:6rem;
            }
        }
    }
`;

export default HomePage;
