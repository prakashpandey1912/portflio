import FacebookIcon from '@material-ui/icons/Facebook';
import GithubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function Footer() {
    return (
        <>
            <div className="icons">
                <a href="https://www.facebook.com/sichrife/" className="icon i-facebook">
                    <FacebookIcon />
                </a>
                <a href="https://github.com/sichrif" className="icon i-github">
                    <GithubIcon />
                </a>
                <a href="https://www.linkedin.com/in/med-cherif-js/" className="icon i-linkedin">
                    <LinkedInIcon />
                </a>

            </div>
        </>
    );

}

export default Footer;
