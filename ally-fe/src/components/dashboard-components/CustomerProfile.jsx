import { User, Edit, DollarSign, Calendar, MessageCircle } from "lucide-react";

function CustomerProfile() {
    return (
        <>
            
            <nav className="flex items-center justify-between text-black p-4">
                <span className="font-bold">Customer Profile</span>
            </nav>
            <div className="h-[1px] bg-gray-600"></div>

            
            <div className="p-4 space-y-4">
                
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        
                        <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                            <User className="text-white" size={24} />
                        </div>
                        
                        <div>
                            <h2 className="font-bold text-lg">John Doe</h2>
                            <p className="text-gray-500 text-sm">Customer active 19h ago</p>
                        </div>
                    </div>
                    {/* Edit Icon */}
                    <button className="text-blue-500">
                        <Edit size={20} />
                    </button>
                </div>

                
                <h3 className="font-semibold text-lg text-gray-700">Ally</h3>

                
                <div className="space-y-2">
                     
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2 text-gray-700">
                            <DollarSign size={16} />
                            <span className="font-medium">Lifetime Value</span>
                        </div>
                        <span className="font-bold text-gray-900">$2000</span>
                    </div>

                     
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2 text-gray-700">
                            <Calendar size={16} />
                            <span className="font-medium">Last Order</span>
                        </div>
                        <span className="font-bold text-gray-900">15/12/24</span>
                    </div>

                    
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2 text-gray-700">
                            <MessageCircle size={16} />
                            <span className="font-medium">Customer Language</span>
                        </div>
                        <span className="font-bold text-gray-900">08/19/24</span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CustomerProfile;
