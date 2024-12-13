import logoImg from "../../assets/imgs/logo.png";

function Navbar() {
    return (
        <header>
        <nav id="navbar">
            <div className="nav-brand">
            <img src={logoImg} alt="Logo" />
            <h1>Space Flight News</h1>
            </div>

            <ul className="nav-list">
            <li><link href="#">Home</link></li>
            <li><link href="#">Trending</link></li>
            <li><link href="#">Categories</link></li>
            <li><link href="#">About us</link></li>
            </ul>
        </nav>
        </header>
    )
    
}

export default Navbar;
