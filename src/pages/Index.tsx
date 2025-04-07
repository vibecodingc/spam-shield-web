
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, ArrowDown, Zap, Layers, Shield, Code } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="gradient-bg py-20 md:py-32 relative">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-rspamd-dark mb-6 leading-tight">
              Advanced spam filtering system
            </h1>
            <p className="text-lg md:text-xl text-rspamd-dark/80 mb-10 max-w-2xl">
              Fast, free and open-source spam filtering system with high performance and flexibility.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="btn-primary flex items-center gap-2">
                Get Started <ArrowRight size={16} />
              </Button>
              <Button variant="outline" className="btn-secondary flex items-center gap-2">
                Read Docs <ArrowDown size={16} />
              </Button>
            </div>
          </div>
        </div>
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
            <div className="feature-card">
              <div className="text-rspamd-accent mb-4">
                <Zap size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast</h3>
              <p className="text-gray-600">
                Written in C/Lua for high performance, processing hundreds of messages per second.
              </p>
            </div>
            <div className="feature-card">
              <div className="text-rspamd-accent mb-4">
                <Layers size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Scalable</h3>
              <p className="text-gray-600">
                Designed for high-load systems with built-in load balancing and proxying.
              </p>
            </div>
            <div className="feature-card">
              <div className="text-rspamd-accent mb-4">
                <Shield size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure</h3>
              <p className="text-gray-600">
                Advanced techniques for detection of spam, phishing, and malware in emails.
              </p>
            </div>
            <div className="feature-card">
              <div className="text-rspamd-accent mb-4">
                <Code size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Flexible</h3>
              <p className="text-gray-600">
                Fully configurable and extensible with Lua for writing custom plugins and rules.
              </p>
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
                className="p-6 rounded-xl border border-gray-200 hover:border-rspamd-accent transition-colors"
              >
                <h3 className="text-xl font-semibold mb-2">GitHub</h3>
                <p className="text-gray-600 mb-3">Get the latest source code</p>
                <div className="flex justify-center">
                  <Github size={24} className="text-rspamd-dark" />
                </div>
              </a>
              <a 
                href="#" 
                className="p-6 rounded-xl border border-gray-200 hover:border-rspamd-accent transition-colors"
              >
                <h3 className="text-xl font-semibold mb-2">Packages</h3>
                <p className="text-gray-600 mb-3">Pre-built packages for major platforms</p>
                <div className="flex justify-center">
                  <ArrowDown size={24} className="text-rspamd-dark" />
                </div>
              </a>
            </div>
            <Button className="btn-primary">
              Installation Guide
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
