import './Header.css';
function Header(props) {
    return (
        <header>
            <div className="logo">
                <img src={props.logo} alt="logo" />
            </div>
            <div className="menu">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className="search">
                <input type="text" placeholder="Search" />
                <button>Search</button>
            </div>
            <div className="login">
                <button>Login</button>
                <button>Sign Up</button>
            </div>
            
        </header>

    )
}
export default  Header;