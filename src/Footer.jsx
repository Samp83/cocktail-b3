
const Footer = ({userName}) => {
    return (
        <footer>
            <p>© {new Date().getFullYear()} {userName}</p>
        </footer>
    );
}

export default Footer;
