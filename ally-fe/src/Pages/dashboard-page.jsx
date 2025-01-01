import DashboardHeader from "../components/dashboard-components/common-dashboard-components/Header";
import Sidebar from "../components/dashboard-components/common-dashboard-components/Sidebar";
import AgentCopilot from "../components/dashboard-components/AgentCopilot";
import KnowledgeBase from "../components/dashboard-components/KnowledgeBase";
import RealTimeTranscription from "../components/dashboard-components/RealTimeTranscription";
import CustomerHistory from "../components/dashboard-components/CustomerHistory";
import CustomerProfile from "../components/dashboard-components/CustomerProfile";
import QuickActions from "../components/dashboard-components/QuickActions";

function Dashboard() {
    return (
        <div className="flex h-screen bg-black">
            <Sidebar />

            <div className="flex-1 overflow-auto relative z-10 flex flex-col">
                <DashboardHeader title="Call Dashboard" />

                 
                <div className="flex-1 grid grid-cols-[1fr_2fr_1fr] gap-4 p-4">
                    <div className="bg-white grid grid-rows-[2fr_1fr] gap-2 p-4 h-full">
                        <div className="bg-gray-200 rounded-md">
                            <AgentCopilot/>
                        </div>
                        <div className="bg-gray-200 rounded-md overflow-hidden border-gray-400 ">
                            <KnowledgeBase/>
                        </div>
                    </div>


                    <div className="bg-white rounded-lg p-4 grid grid-rows-2 gap-2"> {/* Center Column */}
                        <div className="bg-gray-200 rounded-md   h-full">
                           <RealTimeTranscription/>
                        </div>
                        <div className="bg-gray-200 rounded-md h-full">
                           <CustomerHistory/>
                        </div>
                    </div>

                   
                    <div className="bg-white grid grid-rows-[2fr_1fr] gap-2 p-4">
  <div className="bg-gray-200 rounded-md">
    <CustomerProfile />
  </div>
  <div className="bg-gray-200 rounded-md h-full overflow-hidden">
    <div className="h-full overflow-y-auto">
      <QuickActions />
    </div>
  </div>
</div>

                    
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
