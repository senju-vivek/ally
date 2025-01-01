import React from "react";
import { useParams } from "react-router-dom";
import AgentInterface from "./AgentInterface";
 

const App1 = () => {
  const { agentId } = useParams(); // Extract agentId from URL

  return (
    <div>
      <AgentInterface agentId={agentId} />
    </div>
  );
};

export default App1;
