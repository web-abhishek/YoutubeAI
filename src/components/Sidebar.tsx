import Home from "../assets/home.png";
import Shorts from "../assets/shorts.png";
import Subscriptions from "../assets/subscribe.png";
import Library from "../assets/library.png";
import History from "../assets/history.png";
import WatchLater from "../assets/clock.png";
import LikedVideos from "../assets/video.png";


const Sidebar = () => {
    return (
        <div className="w-64 px-4 py-6 font-[roboto]">
            <ul className="space-y-2 border-b border-gray-300 pb-4">
                <li className="bg-gray-200 px-4 py-2 rounded-xl font-semibold text-sm flex items-center cursor-pointer">
                    <img src={Home} alt="" className="pr-4 w-8" />
                    Home</li>
                <li className="px-4 py-2 font-normal text-sm flex items-center cursor-pointer">
                    <img src={Shorts} alt="" className="pr-4 w-8" />
                    Shorts</li>
               <li className="px-4 py-2 font-normal text-sm flex items-center cursor-pointer">
                    <img src={Subscriptions} alt="" className="pr-4 w-8" />
                    Subscriptions</li>
            </ul>
            <ul className="space-y-2">
                <li className="px-4 py-2 font-normal text-sm flex items-center cursor-pointer">
                    <img src={Library} alt="" className="pr-4 w-8" />
                    Library</li>
                <li className="px-4 py-2 font-normal text-sm flex items-center cursor-pointer">
                    <img src={History} alt="" className="pr-4 w-8" />
                    History</li>
                <li className="px-4 py-2 font-normal text-sm flex items-center cursor-pointer">
                    <img src={WatchLater} alt="" className="pr-4 w-8" />
                    Watch Later</li>
                <li className="px-4 py-2 font-normal text-sm flex items-center cursor-pointer">
                    <img src={LikedVideos} alt="" className="pr-4 w-8" />
                    Liked Videos</li>
                
                <li className="px-4 py-2 font-normal text-sm flex items-center cursor-pointer">
                    <img src={Library} alt="" className="pr-4 w-8" />
                    Library</li>
                <li className="px-4 py-2 font-normal text-sm flex items-center cursor-pointer">
                    <img src={History} alt="" className="pr-4 w-8" />
                    History</li>
                <li className="px-4 py-2 font-normal text-sm flex items-center cursor-pointer">
                    <img src={WatchLater} alt="" className="pr-4 w-8" />
                    Watch Later</li>
                <li className="px-4 py-2 font-normal text-sm flex items-center cursor-pointer">
                    <img src={LikedVideos} alt="" className="pr-4 w-8" />
                    Liked Videos</li>
            </ul>
        </div>
    )
}

export default Sidebar;