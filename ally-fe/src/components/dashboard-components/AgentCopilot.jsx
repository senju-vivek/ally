import { PhoneCall } from 'lucide-react';

function AgentCopilot() {

    return (
        <>
            <div>
                <nav className="flex items-center justify-between bg-white text-black p-4">
                    <span className="font-bold">Agent Copilot</span>
                    <PhoneCall className="text-black" />
                </nav>
                <div className="h-[1px] bg-gray-600"></div>
                <div>
                    hello
                </div>
            </div>

        </>
    )
}
export default AgentCopilot