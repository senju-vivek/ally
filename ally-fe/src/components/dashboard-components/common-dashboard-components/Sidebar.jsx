import React, { useEffect, useState } from "react";
import {
    BarChart2,
    DollarSign,
    Settings,
    ShoppingBag,
    ShoppingCart,
    TrendingUp,
    Users,
    Menu,
    LandPlot,
    PackageCheck,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import ally from "../../../assets/ally.png";

const SIDEBAR_ITEMS = [
    { name: "Dashboard", icon: BarChart2, color: "#FFFFFF", href: "/dashboard" },
    { name: "Users", icon: Users, color: "#FFFFFF", href: "/users" },
    { name: "Products", icon: ShoppingBag, color: "#FFFFFF", href: "/products" },
    { name: "Metrics", icon: LandPlot, color: "#FFFFFF", href: "/metrics" },
    { name: "Configurations", icon: PackageCheck, color: "#FFFFFF", href: "/configurations" },
    { name: "Analytics", icon: TrendingUp, color: "#FFFFFF", href: "/analytics" },
    { name: "Sales", icon: DollarSign, color: "#FFFFFF", href: "/sales" },
    { name: "Orders", icon: ShoppingCart, color: "#FFFFFF", href: "/orders" },
];

const Sidebar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 768px)");

        const handleMediaQueryChange = (e) => {
            setIsMobile(e.matches);
            setIsSidebarOpen(!e.matches);
        };

        handleMediaQueryChange(mediaQuery);
        mediaQuery.addEventListener("change", handleMediaQueryChange);

        return () => mediaQuery.removeEventListener("change", handleMediaQueryChange);
    }, []);

    return (
        <motion.div
            className={`relative z-10 transition-all duration-300 ease-in-out flex-shrink-0 ${
                isSidebarOpen ? "w-64" : "w-20"
            } h-screen`}
            animate={{ width: isSidebarOpen ? 220 : 80 }}
        >
            <div className="h-full bg-gray-950 bg-opacity-50 backdrop-blur-md p-4 flex flex-col border-r border-gray-700">
                 
                <div className="flex items-center mb-6">
                    <img
                        src={ally}
                        alt="Ally Logo"
                        className="w-10 h-10 rounded-full"
                    />
                    <AnimatePresence>
                        {isSidebarOpen && (
                            <motion.span
                                className="ml-4 text-white font-semibold text-lg"
                                initial={{ opacity: 0, width: 0 }}
                                animate={{ opacity: 1, width: "auto" }}
                                exit={{ opacity: 0, width: 0 }}
                                transition={{ duration: 0.2, delay: 0.3 }}
                            >
                                Ally
                            </motion.span>
                        )}
                    </AnimatePresence>
                </div>

                
                <motion.button
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    className="p-2 rounded-full hover:bg-gray-700 transition-colors max-w-fit mb-6"
                    disabled={isMobile}
                >
                    <Menu className="text-white" size={26} />
                </motion.button>

                
                <nav className="flex-grow">
                    {SIDEBAR_ITEMS.map((item) => (
                        <Link key={item.href} to={item.href}>
                            <motion.div
                                className="flex items-center font-medium p-4 mb-2 text-white text-sm rounded-lg hover:bg-gray-700 transition-colors"
                            >
                                {typeof item.icon === "string" ? (
                                    <img
                                        src={item.icon}
                                        alt={item.name}
                                        className="w-5 h-5"
                                        style={{ minWidth: "20px" }}
                                    />
                                ) : (
                                    <item.icon size={20} style={{ color: item.color, minWidth: "20px" }} />
                                )}
                                <AnimatePresence>
                                    {isSidebarOpen && (
                                        <motion.span
                                            className="ml-4 whitespace-nowrap"
                                            initial={{ opacity: 0, width: 0 }}
                                            animate={{ opacity: 1, width: "auto" }}
                                            exit={{ opacity: 0, width: 0 }}
                                            transition={{ duration: 0.2, delay: 0.3 }}
                                        >
                                            {item.name}
                                        </motion.span>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        </Link>
                    ))}

                    
                    <div className="h-px my-4 bg-gray-700" />

                    
                    <Link to="/settings">
                        <motion.div
                            className="flex items-center font-medium p-4 mb-1 text-white text-sm rounded-lg hover:bg-gray-700 transition-colors"
                        >
                            <Settings size={20} style={{ color: "#FFFFFF", minWidth: "20px" }} />
                            <AnimatePresence>
                                {isSidebarOpen && (
                                    <motion.span
                                        className="ml-4 whitespace-nowrap"
                                        initial={{ opacity: 0, width: 0 }}
                                        animate={{ opacity: 1, width: "auto" }}
                                        exit={{ opacity: 0, width: 0 }}
                                        transition={{ duration: 0.2, delay: 0.3 }}
                                    >
                                        Settings
                                    </motion.span>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    </Link>

                   
                    <div className="flex justify-center items-center  w-10 bg-gray-800 text-white font-bold rounded mt-1 mx-auto">
                        VS
                    </div>
                </nav>
            </div>
        </motion.div>
    );
};

export default Sidebar;
