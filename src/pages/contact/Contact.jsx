import React from 'react';
import styled from 'styled-components';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { MainLayout, InnerLayout } from '../../style/thyme'
// import ContactItem from '../Components/ContactItem';


function onSubmit() {
    console.log("sended data")
}

function Contact() {
    const phone = <PhoneIcon />
    const email = <EmailIcon />
    const location = <LocationOnIcon />
    const linkedIN = <LinkedInIcon />
    return (
        <MainLayout>
            <div className="centerDiv">
                <h2>Contact</h2>
            </div>
            {/* <Title title={'Contact'} span={'Contact'} /> */}
            <ContactPageStyled >
                <InnerLayout className={'contact-section'}>
                    <div className="left-content">
                        <div className="contact-title">
                            <h4>Get In Touch</h4>
                        </div>
                        <form className="form">
                            <div className="form-field">
                                <label htmlFor="name"  >Enter your name*</label>
                                <input type="text" id="name" />
                            </div>
                            <div className="form-field">
                                <label htmlFor="email"  >Enter your email*</label>
                                <input type="email" id="email" />
                            </div>
                            <div className="form-field">
                                <label htmlFor="subject"  >Enter your subject</label>
                                <input type="text" id="subject" />
                            </div>
                            <div className="form-field">
                                <label htmlFor="text-area">Enter your Message*</label>
                                <textarea name="textarea" id="textarea" cols="30" rows="10"></textarea>
                            </div>
                            <div className="form-field f-button">
                                {/* <PrimaryButton disabled title={'Send Email'} /> */}
                            </div>
                        </form>
                        <div className="centerDiv">
                            <button className="btn " onClick={onSubmit}>Send Data</button>
                        </div>
                    </div>
                    <div className="right-content">
                        <div>
                            <div>{phone}</div>
                            <h6>Phone</h6>
                            <p>+919479306254</p>
                        </div>
                        <div>
                            <div>{linkedIN}</div>
                            <h6>LindedIn</h6>
                            <p>https://www.linkedin.com/in/prakash-pandey-b10143170/</p>
                        </div>
                        <div>
                            <div>{email}</div>
                            <h6>Email</h6>
                            <p>prakashpandey1912@gmail.com</p>
                        </div>
                        <div>
                            <div>{location}</div>
                            <h6>Address</h6>
                            <p>I 122/19 Shivagi Nagar Bhopal near Pragati Petrol Pump M.P.Nagar Bhopal</p>
                        </div>
                        {/* <ContactItem title={'Phone'} icon={phone} cont1={'+919479306254'}/>
                        <ContactItem title={'Email'} icon={email} cont1={'mchrif000@yandex.com'} cont2={'mchrif000@gmail.com'} />
                        <ContactItem title={'Address'} icon={location} cont1={'Tunisia, Bizerte'} cont2={'Tunis'} /> */}

                    </div>
                </InnerLayout>
            </ContactPageStyled>
        </MainLayout>
    )
}

const ContactPageStyled = styled.section`
    .contact-section{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 2rem;
        @media screen and (max-width: 978px){
            grid-template-columns: repeat(1, 1fr);
            .f-button{
                margin-bottom: 3rem;
            }
        }
        .right-content{
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            @media screen and (max-width: 502px){
                width: 70%;
            }
        }
        .contact-title{
            h4{
                color: var(--white-color);
                padding: 0.5rem 0;
                font-size: 1.8rem;
            }
        }
        .form{
            width: 100%;
            @media screen and (max-width: 502px){
                width: 100%;
            }
            .form-field{
                margin-top: 2rem;
                position: relative;
                width: 100%;
                label{
                    position: absolute;
                    left: 20px;
                    top: -19px;
                    display: inline-block;
                    background-color: var(--background-dark-color);
                    padding:0 .5rem;
                    color: inherit;
                }
                input{
                    border: 1px solid var(--border-color);
                    outline: none;
                    background: transparent;
                    height: 50px;
                    padding:0 15px;
                    width: 100%;
                    color: inherit;
                }
                textarea{
                    background-color: transparent;
                    border: 1px solid var(--border-color);
                    outline: none;
                    color: inherit;
                    width: 100%;
                    padding: .7rem 1rem;
                }
                
            }

            
        }
        
    }
`;

export default Contact
