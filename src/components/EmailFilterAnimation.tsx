
import React, { useEffect, useState, useRef } from "react";
import { Mail, MailCheck, Zap, Shield, X } from "lucide-react";

type Email = {
  id: number;
  status: "incoming" | "processing" | "legitimate" | "spam";
  position: number;
};

const EmailFilterAnimation = () => {
  const [emails, setEmails] = useState<Email[]>([]);
  const [stats, setStats] = useState({ total: 0, spam: 0, legitimate: 0 });
  const animationRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Generate a new email
  const generateEmail = () => {
    const isSpam = Math.random() > 0.6; // 40% chance of being spam
    const newEmail: Email = {
      id: Date.now(),
      status: "incoming",
      position: 0,
    };
    
    setEmails((prev) => [...prev, newEmail]);
    setStats(s => ({ ...s, total: s.total + 1 }));
    
    // Process email after a short delay
    setTimeout(() => {
      setEmails((prev) => 
        prev.map(email => 
          email.id === newEmail.id ? { ...email, status: "processing" } : email
        )
      );
      
      // Classify as spam or legitimate after processing
      setTimeout(() => {
        setEmails((prev) => 
          prev.map(email => {
            if (email.id === newEmail.id) {
              const status = isSpam ? "spam" : "legitimate";
              setStats(s => ({ 
                ...s, 
                spam: status === "spam" ? s.spam + 1 : s.spam,
                legitimate: status === "legitimate" ? s.legitimate + 1 : s.legitimate
              }));
              return { ...email, status };
            }
            return email;
          })
        );
        
        // Remove email after it's been classified
        setTimeout(() => {
          setEmails((prev) => prev.filter(email => email.id !== newEmail.id));
        }, 1000);
      }, 800);
    }, 600);
  };

  useEffect(() => {
    // Start generating emails
    intervalRef.current = setInterval(() => {
      generateEmail();
    }, 2000);
    
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div ref={animationRef} className="relative mx-auto mt-8 w-full max-w-md h-64 cyber-border rounded-md overflow-hidden bg-black/10 backdrop-blur-md">
      {/* Filter Machine Header */}
      <div className="absolute top-0 left-0 right-0 bg-rspamd-accent/80 py-2 px-4 flex justify-between items-center z-10">
        <div className="flex items-center gap-2">
          <Shield size={16} className="text-white" />
          <span className="text-white text-sm font-semibold">Rspamd Filter</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-white text-xs">
            <span className="mr-1">Speed:</span>
            <span className="font-mono">100/s</span>
          </div>
          <Zap size={14} className="text-white animate-pulse" />
        </div>
      </div>
      
      {/* Processing Area */}
      <div className="absolute top-12 left-0 right-0 bottom-0 px-4 py-3">
        {/* Incoming zone */}
        <div className="absolute top-2 left-4 right-4 h-12 border-b border-rspamd-accent/20">
          {emails.filter(e => e.status === "incoming").map((email) => (
            <div 
              key={email.id}
              className="absolute top-1 left-0 transform transition-all duration-500 flex items-center" 
            >
              <Mail size={18} className="text-rspamd-accent mr-2 animate-pulse" />
              <span className="text-xs font-mono text-white">Incoming mail...</span>
            </div>
          ))}
        </div>
        
        {/* Processing zone with scanning animation */}
        <div className="absolute top-16 left-4 right-4 h-14 border-b border-rspamd-accent/20">
          {emails.filter(e => e.status === "processing").map((email) => (
            <div 
              key={email.id}
              className="absolute top-3 left-0 flex items-center" 
            >
              <div className="relative mr-2">
                <Mail size={18} className="text-rspamd-accent" />
                <div className="absolute inset-0 bg-rspamd-accent/30 animate-scan"></div>
              </div>
              <div>
                <span className="text-xs font-mono text-white">Analyzing...</span>
                <div className="w-24 h-1 bg-rspamd-accent/20 mt-1 rounded-full overflow-hidden">
                  <div className="h-full bg-rspamd-accent animate-progress-scan"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Results zone */}
        <div className="absolute top-32 left-0 right-0 bottom-0 flex">
          {/* Legitimate emails */}
          <div className="flex-1 border-r border-rspamd-accent/20 relative">
            {emails.filter(e => e.status === "legitimate").map((email) => (
              <div 
                key={email.id} 
                className="absolute top-3 left-4 flex items-center transition-all duration-500 fade-out"
              >
                <MailCheck size={18} className="text-green-500 mr-2" />
                <span className="text-xs font-mono text-green-400">Legitimate</span>
              </div>
            ))}
            <div className="absolute bottom-2 left-0 right-0 text-center">
              <span className="text-xs text-green-400 font-mono">{stats.legitimate}</span>
            </div>
          </div>
          
          {/* Spam emails */}
          <div className="flex-1 relative">
            {emails.filter(e => e.status === "spam").map((email) => (
              <div 
                key={email.id}
                className="absolute top-3 right-4 flex items-center transition-all duration-500 fade-out"
              >
                <span className="text-xs font-mono text-red-400">Spam</span>
                <X size={18} className="text-red-500 ml-2" />
              </div>
            ))}
            <div className="absolute bottom-2 left-0 right-0 text-center">
              <span className="text-xs text-red-400 font-mono">{stats.spam}</span>
            </div>
          </div>
        </div>
        
        {/* Binary data overlay effect */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
          <div className="binary-rain"></div>
        </div>
      </div>
      
      {/* Scanning line effect */}
      <div className="absolute top-12 left-0 right-0 h-0.5 bg-rspamd-accent/50 animate-scan-line"></div>
    </div>
  );
};

export default EmailFilterAnimation;
