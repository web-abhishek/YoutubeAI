import { RxHamburgerMenu } from "react-icons/rx";
import logo from "../assets/youtube-logo.png";


const Navbar = () => {
    return (
        <section className="max-w-7xl mx-auto px-4 py-6">
            <nav className="flex items-center justify-between">
                <RxHamburgerMenu />
                <img src={logo} alt="Youtube Logo" />
            </nav>
        </section>
    )
}

export default Navbar;