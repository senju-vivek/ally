



function DashboardHeader({ title }) {
    return (
        <>
            <header className="bg-gray-950 bg-opacity-50 backdrop-blur-lg shadow-lg border-b border-gray-700 text-white">
                <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex items-center justify-between">
                   
                    <h1 className="text-2xl font-semibold text-white">{title}</h1>

                    
                    <div className="flex items-center space-x-4">
                         
                        <input
                            type="text"
                            placeholder="Search..."
                            className="bg-white text-white px-4 py-2 rounded-lg placeholder-gray-400 focus:outline-none focus:ring focus:ring-blue-500"
                        />

                       
                        <button className="text-gray-400 hover:text-white">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6 text-white"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M14.828 21a2.828 2.828 0 01-5.656 0M12 3a9 9 0 019 9v4.5l1.5 1.5v1.5h-18v-1.5l1.5-1.5V12a9 9 0 019-9z"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </header>

        </>
    )
}
export default DashboardHeader