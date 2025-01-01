import { User, PhoneCall, CheckCircle, Clock } from "lucide-react";

function CustomerHistory() {
    const customers = [
        {
            id: 1,
            name: "John Doe",
            salesCall: "Sales Call",
            status: "Resolved",
            date: "10/21/24",
            time: "2:00 PM",
        },
        {
            id: 2,
            name: "Jane Smith",
            salesCall: "Sales Call",
            status: "Resolved",
            date: "10/21/24",
            time: "3:00 PM",
        },
    ];

    return (
        <>
            <nav className="flex items-center justify-between text-black p-4">
                <span className="font-bold">Customer History</span>
            </nav>
            <div className="h-[1px] bg-gray-600"></div>

            <div className="p-4 space-y-4">
                {customers.map((customer) => (
                    <div
                        key={customer.id}
                        className="flex items-center justify-between border-b border-gray-300 pb-2"
                    >
                        {/* User Info */}
                        <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                                <User className="text-white" size={16} />
                            </div>
                            <span className="font-semibold">{customer.name}</span>
                        </div>

                        {/* Sales Call */}
                        <div className="flex items-center space-x-1 text-gray-700">
                            <PhoneCall size={16} />
                            <span>{customer.salesCall}</span>
                        </div>

                        {/* Status */}
                        <div className="flex items-center space-x-1 text-green-500">
                            <CheckCircle size={16} />
                            <span>{customer.status}</span>
                        </div>

                        {/* Date */}
                        <div className="flex items-center space-x-1 text-gray-700">
                            <span>{customer.date}</span>
                        </div>

                        {/* Time */}
                        <div className="flex items-center space-x-1 text-gray-700">
                            <Clock size={16} />
                            <span>{customer.time}</span>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default CustomerHistory;
