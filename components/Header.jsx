
function Header() {
    return (
        <header>
            <div className='header_container'>
        <div className="header_logo"><a href="#home">P|K</a></div>
        <nav className="header_navigation">
             <ul>
                 <li><a href="#home">Home</a></li>
                 <li><a href="#about-me">About me</a></li>
                 <li><a href="#projects">Projects</a></li>
                 <li><a href="#contact">Contact</a></li>
             </ul>
        </nav>
            </div>
        </header>
    );
}

export default Header;