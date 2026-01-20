import { Minus, Plus } from "lucide-react";
import React, { useState } from "react";

const FaqSection = () => {
  const FAQItem = ({ question, answer }) => {

    const [isOpen, setIsOpen] = useState(false);

    return (
      <div className="border-b border-slate-800">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full py-6 flex justify-between items-center text-left hover:text-blue-400 transition-colors"
        >
          <span className="text-lg font-medium">{question}</span>
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </button>
        {isOpen && (
          <p className="pb-6 text-slate-400 leading-relaxed">{answer}</p>
        )}
      </div>
    );
  };
  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Common Questions
        </h2>
        <div className="space-y-2">
          <FAQItem
            question="Is it really free?"
            answer="Yes! Our core features are free forever. We believe everyone deserves a clear head and an organized day without having to pull out a credit card."
          />
          <FAQItem
            question="How does the AI Assistant help?"
            answer="Think of it as a helpful friend. It can help you break down big projects into smaller steps, summarize your day, or suggest what to tackle next based on your deadlines."
          />
          <FAQItem
            question="Can I use it on multiple devices?"
            answer="Absolutely. Everything stays perfectly synced in real-time whether you're on your desktop, tablet, or phone."
          />
          <FAQItem
            question="Who is SwiftTask for?"
            answer="Anyone who feels a bit overwhelmed! Students, freelancers, parents, and developers—if you have things to do, SwiftTask is for you."
          />
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
