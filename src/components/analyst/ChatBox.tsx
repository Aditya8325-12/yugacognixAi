import React, { useState } from "react";
import { FiThumbsUp, FiCopy, FiVolume2 } from "react-icons/fi"; // icons
import MiniNavBar from "./MiniNavBar";
import Summary from "./Summary";

const ChatBox = () => {
  const [showSummary, setShowSummary] = useState(false);

  // Array of sample Q&A
  const messages = [
    {
      type: "assistant",
      title: "Risk Management",
      content: [
        "The company presents both GAAP and non-GAAP financial measures and provides a reconciliation of the two in their quarterly report on Form 10-Q and earnings press release.",
        "The company makes forward-looking statements based on assumptions as of today and does not guarantee updates or revisions in the future.",
      ],
      relevance:
        "Effective risk management can protect the company from financial and reputational damage. Transparency in financial reporting can also earn trust from investors and stakeholders, potentially leading to increased investment and support for the company.",
    },
    {
      type: "user",
      question: "What is the strategy to increase the store productivity?",
    },
    {
      type: "assistant",
      content: [
        "The strategy to increase store productivity includes leveraging the power of the membership program.",
      ],
      relevance:
        "Transparency in financial reporting can also earn trust from investors and stakeholders, potentially leading to increased investment and support for the company which has approximately 20 million members in North America.",
    },
    {
      type: "user",
      question: "How can technology improve customer engagement?",
    },
    {
      type: "assistant",
      content: [
        "Technology such as AI chatbots, personalized recommendations, and mobile apps improve engagement.",
      ],
      relevance:
        "Better engagement leads to stronger customer loyalty, repeat sales, and improved overall brand reputation.",
    },
  ];

  return (
    <div className="w-9/12 pl-4">
      {/* Pass toggle function into MiniNavBar */}
      <MiniNavBar onSummaryClick={() => setShowSummary(true)} />

      {/* Conditionally render Summary or Chat */}
      {showSummary ? (
        <Summary onClose={() => setShowSummary(false)} />
      ) : (
        <div className="w-full h-11/12">
          {/* Chat Section */}
          <div className="bg-gray-100 mt-4 h-5/6 p-4 rounded-lg overflow-y-auto space-y-4">
            {messages.map((msg, index) => (
              <div key={index}>
                {/* Assistant Message */}
                {msg.type === "assistant" && (
                  <div className="bg-white p-4 rounded-lg shadow-sm text-sm text-gray-700">
                    {msg.title && (
                      <h2 className="font-semibold text-gray-800 mb-2">
                        {msg.title}
                      </h2>
                    )}
                    {msg.content && (
                      <ul className="list-disc pl-5 space-y-1">
                        {msg.content.map((c, i) => (
                          <li key={i}>{c}</li>
                        ))}
                      </ul>
                    )}
                    {msg.relevance && (
                      <p className="mt-2">
                        <span className="font-semibold">
                          Relevance to Company:
                        </span>{" "}
                        {msg.relevance}
                      </p>
                    )}

                    {/* Action Icons */}
                    <div className="flex gap-4 mt-3 text-gray-500">
                      <button className="hover:text-sky-600">
                        <FiThumbsUp size={18} />
                      </button>
                      <button className="hover:text-sky-600">
                        <FiCopy size={18} />
                      </button>
                      <button className="hover:text-sky-600">
                        <FiVolume2 size={18} />
                      </button>
                    </div>
                  </div>
                )}

                {/* User Message */}
                {msg.type === "user" && (
                  <div className="flex justify-end">
                    <div className="bg-sky-100 px-4 py-2 rounded-lg shadow-sm max-w-lg text-sm text-gray-800">
                      {msg.question}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Input Section */}
          <div className="flex w-full mt-4 bg-sky-200 justify-start items-center ">
            <input
              className="appearance-none border-2 pl-4 border-gray-300 hover:border-gray-400 transition-colors rounded-md w-full py-1.5 px-3 text-gray-800 leading-tight focus:outline-none focus:ring-sky-600 focus:border-sky-600 bg-sky-200 focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Type a message..."
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBox;
