
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, ArrowDown, Zap, Layers, Shield, Code, Terminal, Database, Cpu } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedCircuit from "@/components/AnimatedCircuit";
import DataFlowAnimation from "@/components/DataFlowAnimation";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="gradient-bg py-20 md:py-32 relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-1 mb-6 rounded-full border border-rspamd-accent/30 bg-white/10 backdrop-blur-sm">
              <span className="text-sm font-medium text-rspamd-dark flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-rspamd-accent animate-pulse"></span>
                Next-gen Spam Protection
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-rspamd-dark mb-6 leading-tight">
              Advanced spam <span className="text-rspamd-accent">filtering</span> system
            </h1>
            <p className="text-lg md:text-xl text-rspamd-dark/80 mb-10 max-w-2xl">
              Fast, free and open-source spam filtering system with high performance and flexibility.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="btn-primary flex items-center gap-2 relative overflow-hidden group">
                <span className="relative z-10">Get Started</span>
                <ArrowRight size={16} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              </Button>
              <Button variant="outline" className="btn-secondary flex items-center gap-2 relative overflow-hidden group">
                <span className="relative z-10">Read Docs</span>
                <ArrowDown size={16} className="relative z-10 group-hover:translate-y-1 transition-transform" />
                <span className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              </Button>
            </div>
          </div>
        </div>
        <AnimatedCircuit />
        <DataFlowAnimation />
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white" id="overview">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-6 text-center">Overview</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-center text-lg leading-relaxed mb-8">
              Rspamd is an advanced spam filtering system that allows evaluation of messages by using rules, 
              statistical analysis, and custom services such as URL black lists. Each message is analyzed by Rspamd 
              and given a spam score, allowing for flexible and fine-grained control over mail filtering.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-rspamd-gray" id="features">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="feature-card relative group hover:border-rspamd-accent/30 hover:border transition-all">
              <div className="text-rspamd-accent mb-4 group-hover:scale-110 transition-transform">
                <Zap size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast</h3>
              <p className="text-gray-600">
                Written in C/Lua for high performance, processing hundreds of messages per second.
              </p>
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-rspamd-accent/20 rounded-2xl transition-all pointer-events-none"></div>
            </div>
            <div className="feature-card relative group hover:border-rspamd-accent/30 hover:border transition-all">
              <div className="text-rspamd-accent mb-4 group-hover:scale-110 transition-transform">
                <Layers size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Scalable</h3>
              <p className="text-gray-600">
                Designed for high-load systems with built-in load balancing and proxying.
              </p>
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-rspamd-accent/20 rounded-2xl transition-all pointer-events-none"></div>
            </div>
            <div className="feature-card relative group hover:border-rspamd-accent/30 hover:border transition-all">
              <div className="text-rspamd-accent mb-4 group-hover:scale-110 transition-transform">
                <Shield size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure</h3>
              <p className="text-gray-600">
                Advanced techniques for detection of spam, phishing, and malware in emails.
              </p>
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-rspamd-accent/20 rounded-2xl transition-all pointer-events-none"></div>
            </div>
            <div className="feature-card relative group hover:border-rspamd-accent/30 hover:border transition-all">
              <div className="text-rspamd-accent mb-4 group-hover:scale-110 transition-transform">
                <Code size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Flexible</h3>
              <p className="text-gray-600">
                Fully configurable and extensible with Lua for writing custom plugins and rules.
              </p>
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-rspamd-accent/20 rounded-2xl transition-all pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-16 bg-white" id="downloads">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">Downloads</h2>
          <div className="max-w-2xl mx-auto text-center">
            <p className="mb-8 text-lg">
              Rspamd is available for various platforms and can be installed through multiple methods.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <a 
                href="#" 
                className="p-6 rounded-xl border border-gray-200 hover:border-rspamd-accent transition-colors group relative overflow-hidden"
              >
                <div className="relative z-10">
                  <h3 className="text-xl font-semibold mb-2">GitHub</h3>
                  <p className="text-gray-600 mb-3">Get the latest source code</p>
                  <div className="flex justify-center">
                    <Github size={24} className="text-rspamd-dark group-hover:text-rspamd-accent transition-colors" />
                  </div>
                </div>
                <div className="absolute inset-0 bg-rspamd-accent/5 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              </a>
              <a 
                href="#" 
                className="p-6 rounded-xl border border-gray-200 hover:border-rspamd-accent transition-colors group relative overflow-hidden"
              >
                <div className="relative z-10">
                  <h3 className="text-xl font-semibold mb-2">Packages</h3>
                  <p className="text-gray-600 mb-3">Pre-built packages for major platforms</p>
                  <div className="flex justify-center">
                    <ArrowDown size={24} className="text-rspamd-dark group-hover:text-rspamd-accent transition-colors" />
                  </div>
                </div>
                <div className="absolute inset-0 bg-rspamd-accent/5 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              </a>
            </div>
            <Button className="btn-primary relative overflow-hidden group">
              <span className="relative z-10">Installation Guide</span>
              <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
