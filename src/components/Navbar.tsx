import { RxHamburgerMenu } from "react-icons/rx";
import logo from "../assets/youtube-logo.png";
import { IoIosSearch } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";

const Navbar = () => {

    return (
        <section className="max-w-9xl mx-auto px-4 py-4 font-[roboto]">
            <nav className="flex items-center justify-between">
                <div className="flex items-center">
                    <RxHamburgerMenu className="text-2xl" />
                    <img src={logo} alt="Youtube Logo" className="w-36 pl-5" />
                </div>
                <div className="flex items-center">
                    <input type="text" placeholder="Search" className="w-lg border border-gray-300 rounded-4xl rounded-tr-none rounded-br-none px-5 py-2 outline-none" />
                    <button className="border border-gray-300 rounded-4xl rounded-tl-none rounded-bl-none px-5 py-2 cursor-pointer">
                        <IoIosSearch className="text-2xl" />
                    </button>
                </div>
                <div className="flex items-center">
                    <BsThreeDotsVertical />
                    <button className="text-blue-500 flex items-center border border-gray-300 shadow rounded-4xl px-5 py-2 ml-4 cursor-pointer">
                        <FaRegUserCircle className="text-2xl pr-2 m-0 pb-0" />
                        <span className="font-bold text-sm m-0 pb-0">Sign in</span>
                    </button>
                </div>
            </nav>
        </section>
    )
}

export default Navbar;