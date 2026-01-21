import React, { useState, useRef, useEffect } from "react";
import { Send, Bot, User, Sparkles } from "lucide-react";
import ComingSoonModal from "../../components/ui/ComingSoonModal";

const AiAssistant = () => {
  const [messages, setMessages] = useState([
    { role: "ai", content: "Hello! I'm your SwiftTask AI. How can I help you organize your day?" }
  ]);
  const [input, setInput] = useState("");
  const scrollRef = useRef(null);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    // Add User Message
    const userMsg = { role: "user", content: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    // Simulate AI Response (You can connect this to OpenAI/Gemini API later)
    setTimeout(() => {
      const aiMsg = { role: "ai", content: "That sounds like a great plan! Would you like me to help you set a priority for that task?" };
      setMessages((prev) => [...prev, aiMsg]);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-120px)] max-w-4xl mx-auto p-4">
      <ComingSoonModal />
      {/* Header */}
      <div className="flex items-center gap-3 mb-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-2xl border border-blue-100 dark:border-blue-800">
        <div className="p-2 bg-blue-500 rounded-lg text-white">
          <Bot size={24} />
        </div>
        <div>
          <h1 className="text-xl font-bold dark:text-white flex items-center gap-2">
            AI Assistant <Sparkles size={16} className="text-amber-500" />
          </h1>
          <p className="text-xs text-slate-500">Ask me anything about your tasks or productivity.</p>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto space-y-4 mb-4 pr-2 custom-scrollbar">
        {messages.map((msg, index) => (
          <div key={index} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
            <div className={`flex gap-3 max-w-[80%] ${msg.role === "user" ? "flex-row-reverse" : ""}`}>
              <div className={`h-8 w-8 rounded-full flex items-center justify-center shrink-0 ${
                msg.role === "ai" ? "bg-blue-500 text-white" : "bg-slate-200 dark:bg-slate-700"
              }`}>
                {msg.role === "ai" ? <Bot size={16} /> : <User size={16} />}
              </div>
              <div className={`p-4 rounded-2xl text-sm ${
                msg.role === "ai" 
                ? "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 dark:text-slate-200 shadow-sm" 
                : "bg-blue-600 text-white shadow-md shadow-blue-500/20"
              }`}>
                {msg.content}
              </div>
            </div>
          </div>
        ))}
        <div ref={scrollRef} />
      </div>

      {/* Input Bar */}
      <div className="relative">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          placeholder="Message AI Assistant..."
          className="w-full pl-4 pr-14 py-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:ring-2 focus:ring-blue-500 outline-none dark:text-white transition-all shadow-lg"
        />
        <button 
          onClick={handleSend}
          className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors shadow-md"
        >
          <Send size={20} />
        </button>
      </div>
    </div>
  );
};

export default AiAssistant;