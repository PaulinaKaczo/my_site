function Header() {
  return (
    <header>
      <div className="header_container">
        <div className="header_logo">
          <a href="#hero">P|K</a>
        </div>
        <input type="checkbox" name="menu" id="menu" className="hamburger"/>
        <nav className="header_navigation">
          <ul>
            <li>
              <a href="#hero">Home</a>
            </li>
            <li>
              <a href="#about-me">About me</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
