const Filters = () => {

    const list = [
        "All", "Live", "Gaming", "News", "Music", "Sports", "Learning", "Fashion", "Beauty", "Comedy",
        "Movies", "Shows", "Trailers", "Travel", "VR180", "Shorts", "Clips", "VR180", "Shorts", "Clips",
        "Movies", "Shows", "Trailers", "Travel", "VR180", "Shorts", "Clips", "VR180", "Shorts", "Clips"
    ]

    return (
        <div className="overflow-hidden">
            <ul className="flex items-center gap-3 px-4 py-2 overflow-x-auto whitespace-nowrap scrollbar-hide">
                {list.map((item) => (
                    <li key={item} className="shrink-0 cursor-pointer px-3 py-1 bg-gray-200 rounded-lg text-sm">
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Filters;