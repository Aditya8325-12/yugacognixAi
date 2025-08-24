"use client";
import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

interface FaqItem {
  question: string;
  answer: string | string[]; // ✅ can be text or list
}

const faqData: FaqItem[] = [
  {
    question: "How can I get started?",
    answer: [
      "Sign up for a free account.",
      "Verify your email address.",
      "Log in and access the dashboard.",
    ],
  },
  {
    question: "What is the pricing structure?",
    answer: [
      "Free plan with limited features.",
      "Basic plan starting at $10/month.",
      "Enterprise plan with custom pricing.",
    ],
  },
  {
    question: "What kind of support do you provide?",
    answer: [
      "Email support (24/7).",
      "Live chat during business hours.",
      "Comprehensive documentation & tutorials.",
    ],
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer: [
      "Yes, you can cancel anytime.",
      "No hidden fees or penalties.",
      "Access remains until the end of your billing cycle.",
    ],
  },
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {faqData.map((item, index) => (
        <div
          key={index}
          className="transition-all duration-200 bg-white border border-blue-500 rounded-lg shadow-lg hover:bg-gray-50"
        >
          {/* Question Button */}
          <button
            type="button"
            onClick={() => toggleFaq(index)}
            className="flex items-center justify-between w-full px-3 py-3 bg-gradient-to-r  from-sky-400 to-blue-600 rounded-lg"
          >
            <span className="flex text-sm font-semibold text-white">
              {item.question}
            </span>
            <MdKeyboardArrowDown
              className={`w-6 h-6 text-white transform transition-transform duration-300 ${
                openIndex === index ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* Answer Section */}
          {openIndex === index && (
            <div className="">
              {Array.isArray(item.answer) ? (
                <ul className=" list-inside text-gray-600 ">
                  {item.answer.map((point, i) => (
                    <li className="border-b border-gray-400 py-1 px-4" key={i}>
                      {point}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-600">{item.answer}</p>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
