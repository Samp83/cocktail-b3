


const Header = () => {
    const isAuthenticated = false;
    return (
        <header>
            <h1>Welcome to My Application</h1>
            <nav>
                <p><a href="/">Home</a></p>
            </nav>

        {isAuthenticated ? <p>oui connecté</p> : <p>non pas connecté</p>}
        </header>
    );
};

export default Header;
