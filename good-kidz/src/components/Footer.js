import './Footer.css';

function Footer(props) {

    return (
        <footer>
            <div className="img-container">
                <img src={props.logo} alt="logo" />
            </div>
            <div className='text-container'>
                <p>Copyright &copy; 2021</p>
                <p>Good Kidz</p>
                <p>All Rights Reserved</p>
                <p>Privacy Policy</p>
                <p>Terms of Use</p>
                <a href = "www.instagram.com"><p>Contact Us</p></a>
            </div>
        </footer>
    )
}

export default Footer;