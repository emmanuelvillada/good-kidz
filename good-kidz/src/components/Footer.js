
function Footer(props) {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="img-container">
                    <img src={props.logo} alt="logo" />
                </div>
                <div className="text-container">
                    <p>&copy; 2024 Good Kidz. All Rights Reserved.</p>
                    <ul>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="https://www.instagram.com">Contact Us</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
