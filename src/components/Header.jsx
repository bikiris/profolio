const Header = () => {
    return (
        <header className="flex items-center justify-around mx-auto">
            <h1>Header</h1>
            <nav>
              <ul className="flex items-center gap-12">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </nav>
        </header>
    )
}

export default Header;