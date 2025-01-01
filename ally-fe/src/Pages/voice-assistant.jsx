import React from "react";
import LeftNav from '../components/Custom/LeftNavigation';
import ChatContainer from "../components/Custom/ChatContainer";
import Mobile from "../components/Custom/Mobile";

function Home() {
  return (
    <div className="flex w-screen relative">
      <LeftNav />
      <ChatContainer />
      <span className="flex lg:hidden">
        <Mobile />
      </span>
    </div>
  );
}

export default Home;