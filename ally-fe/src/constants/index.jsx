import {RiChatVoiceLine, RiDatabase2Line, RiSettings2Line, RiTeamLine, RiTimer2Line, RiUserStarLine } from "react-icons/ri";

export const FOOTER_CONTENT = {
  sections: [
    {
      title: "TOOLS & FEATURES",
      links: [
        { text: "Natural Language Processing", url: "#" },
        { text: "Real-Time Sentiment Analysis", url: "#" },
        { text: "Automated Call Routing", url: "#" },
        { text: "Knowledge Base Integration", url: "#" },
        { text: "24/7 Availability", url: "#" },
        { text: "Multi-Language Support", url: "#" },
        { text: "Call Transcription", url: "#" },
        { text: "Customizable Workflows", url: "#" },
      ],
    },
    {
      title: "SUPPORT & RESOURCES",
      links: [
        { text: "Pricing Plans", url: "#" },
        { text: "Integration Guides", url: "#" },
        { text: "Frequently Asked Questions", url: "#" },
        { text: "Product Blog", url: "#" },
        { text: "Subscribe to Updates", url: "#" },
        { text: "Feature Updates", url: "#" },
        { text: "Case Studies", url: "#" },
        { text: "Webinars & Events", url: "#" },
      ],
    },
    {
      title: "CONNECT WITH US",
      links: [
        { text: "Twitter", url: "#" },
        { text: "LinkedIn", url: "#" },
        { text: "Facebook", url: "#" },
        { text: "YouTube", url: "#" },
        { text: "GitHub", url: "#" },
        { text: "Medium", url: "#" },
        { text: "Slack Community", url: "#" },
      ],
    },
    {
      title: "LEARN & EXPLORE",
      links: [
        { text: "Enhancing Customer Support with AI", url: "#" },
        { text: "Using NLP for Better Conversations", url: "#" },
        { text: "Top Features for Call Center Efficiency", url: "#" },
        { text: "How to Implement AI in Call Centers", url: "#" },
        { text: "Boosting Customer Satisfaction with AI", url: "#" },
        { text: "Automating Common Support Queries", url: "#" },
        { text: "Analyzing Calls for Actionable Insights", url: "#" },
      ],
    },
  ],
  platformsText:
    "Supported Platforms | Twilio | AWS Connect | Microsoft Teams | Slack",
  copyrightText: "© Ally AI Solutions. All rights reserved.",
};


  export const HERO_CONTENT = {
    badgeText: "🚀 New Feature: Conversation Analytics 2.0 Now Live!",
    mainHeading: "The Ultimate \n Conversation Toolkit+",
    subHeading:
      " Transforming the way businesses engage with their customers",
    callToAction: {
      primary: "Start Free Trial",
      secondary: "Request a Demo",
    },
    trustedByText: "Trusted by Leading Streaming Brands & Creators",
  };

  export const KEY_FEATURES_CONTENT = {
    sectionTitle: "Enhance Customer Support with These Key Features",
    sectionDescription:
      "Revolutionize your call center operations with advanced AI-powered solutions.",
    features: [
      {
        id: 1,
        icon: <RiChatVoiceLine className="w-8 h-8" />,
        title: "Natural Language Processing",
        description:
          "Understand and respond to customer queries with human-like accuracy using NLP.",
      },
      {
        id: 2,
        icon: <RiSettings2Line className="w-8 h-8" />,
        title: "Automated Call Routing",
        description:
          "Efficiently route calls to the right department or agent based on intent detection.",
      },
      {
        id: 3,
        icon: <RiTeamLine className="w-8 h-8" />,
        title: "Real-Time Sentiment Analysis",
        description:
          "Gauge customer emotions and adapt responses for improved satisfaction.",
      },
      {
        id: 4,
        icon: <RiDatabase2Line className="w-8 h-8" />,
        title: "Knowledge Base Integration",
        description:
          "Provide instant and accurate answers by integrating with your existing knowledge base.",
      },
      {
        id: 5,
        icon: <RiUserStarLine className="w-8 h-8" />,
        title: "Personalized Customer Interaction",
        description:
          "Deliver tailored solutions by analyzing customer history and preferences.",
      },
      {
        id: 6,
        icon: <RiTimer2Line className="w-8 h-8" />,
        title: "24/7 Availability",
        description:
          "Ensure round-the-clock customer support without the need for human agents.",
      },
    ],
  };
  