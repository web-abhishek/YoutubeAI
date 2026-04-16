import { SiTicktick } from "react-icons/si";


const VideoCard = () => {
    return (
        <div className="flex flex-col">
            <div>
                <img src="https://cdn.pixabay.com/photo/2015/04/19/08/32/flower-729510_1280.jpg"
                    alt="" className="rounded-2xl w-1/3" />
            </div>
            <div className="py-3 flex items-start gap-3">
                <div>
                    <img src="https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png"
                        alt="channel-thumbnail" className="w-15 shadow rounded-full" />
                </div>
                <div className="flex flex-col items-start">
                    <h2 className="font-bold text-[0f0f0f] text-base pb-1">Video Title</h2>
                    <p className="text-[#606060] text-sm flex items-center gap-1">Channel Name <SiTicktick /></p>
                    <p className="text-[#6c6c6c] text-sm">1M views - 1 day ago</p>
                </div>
            </div>
        </div>

    )
}

export default VideoCard;