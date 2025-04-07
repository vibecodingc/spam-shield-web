import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, ArrowDown, Zap, Search, Download, FileCode, Link, Code, Shield, Globe, MailCheck } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedCircuit from "@/components/AnimatedCircuit";
import DataFlowAnimation from "@/components/DataFlowAnimation";
import EmailFilterAnimation from "@/components/EmailFilterAnimation";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="gradient-bg py-20 md:py-32 relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="max-w-3xl">
              <div className="inline-block px-4 py-1 mb-6 rounded-full border border-rspamd-accent/30 bg-white/10 backdrop-blur-sm">
                <span className="text-sm font-medium text-rspamd-dark flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-rspamd-accent animate-pulse"></span>
                  Next-gen Spam Protection
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-rspamd-dark mb-6 leading-tight">
                Fast, free and <span className="text-rspamd-accent cyber-text">open-source</span> spam filtering system
              </h1>
              <p className="text-lg md:text-xl text-rspamd-dark/80 mb-10 max-w-2xl">
                Advanced spam filtering with high performance and flexibility.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="btn-primary flex items-center gap-2 relative overflow-hidden group cyber-border">
                  <span className="relative z-10">Get Started</span>
                  <ArrowRight size={16} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                  <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                </Button>
                <Button variant="outline" className="btn-secondary flex items-center gap-2 relative overflow-hidden group">
                  <span className="relative z-10">Documentation</span>
                  <ArrowDown size={16} className="relative z-10 group-hover:translate-y-1 transition-transform" />
                  <span className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <EmailFilterAnimation />
            </div>
          </div>
        </div>
        <AnimatedCircuit />
        <DataFlowAnimation />
      </section>

      {/* News Section */}
      <section className="py-16 bg-white" id="news">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-10 text-center relative">
            Latest News
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-rspamd-accent"></span>
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="news-item cyberpunk-card">
              <h3 className="text-xl font-semibold mb-2">Rspamd 3.11.1 has been released</h3>
              <p className="news-date">2025-03-10</p>
              <p className="text-gray-700">New stable release is now available.</p>
            </div>
            <div className="news-item cyberpunk-card">
              <h3 className="text-xl font-semibold mb-2">Study: Rspamd and GPT integration</h3>
              <p className="news-date">2024-07-03</p>
              <p className="text-gray-700">We have studied the efficiency of the new GPT plugin to access LLM (large language models) intelligence.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid Section */}
      <section className="py-16 bg-rspamd-gray" id="features">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="feature-card relative group hover:border-rspamd-accent/30 hover:border transition-all cyberpunk-feature">
              <div className="text-rspamd-accent mb-4 group-hover:scale-110 transition-transform feature-icon-container">
                <Zap size={32} strokeWidth={1.5} className="feature-icon" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Performance</h3>
              <p className="text-gray-600">
                Rspamd is designed to be fast and can process up to 100 emails per second using a single CPU core.
              </p>
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-rspamd-accent/20 rounded-2xl transition-all pointer-events-none"></div>
            </div>
            
            <div className="feature-card relative group hover:border-rspamd-accent/30 hover:border transition-all cyberpunk-feature">
              <div className="text-rspamd-accent mb-4 group-hover:scale-110 transition-transform feature-icon-container">
                <Code size={32} strokeWidth={1.5} className="feature-icon" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Features</h3>
              <p className="text-gray-600">
                Learn about the wide range of technologies supported by Rspamd to filter spam.
              </p>
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-rspamd-accent/20 rounded-2xl transition-all pointer-events-none"></div>
            </div>
            
            <div className="feature-card relative group hover:border-rspamd-accent/30 hover:border transition-all cyberpunk-feature">
              <div className="text-rspamd-accent mb-4 group-hover:scale-110 transition-transform feature-icon-container">
                <Search size={32} strokeWidth={1.5} className="feature-icon" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Compare</h3>
              <p className="text-gray-600">
                Compare Rspamd with other spam filtering systems.
              </p>
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-rspamd-accent/20 rounded-2xl transition-all pointer-events-none"></div>
            </div>
            
            <div className="feature-card relative group hover:border-rspamd-accent/30 hover:border transition-all cyberpunk-feature">
              <div className="text-rspamd-accent mb-4 group-hover:scale-110 transition-transform feature-icon-container">
                <FileCode size={32} strokeWidth={1.5} className="feature-icon" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Documentation</h3>
              <p className="text-gray-600">
                Study how to install, configure and extend Rspamd using the documentation provided.
              </p>
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-rspamd-accent/20 rounded-2xl transition-all pointer-events-none"></div>
            </div>
            
            <div className="feature-card relative group hover:border-rspamd-accent/30 hover:border transition-all cyberpunk-feature">
              <div className="text-rspamd-accent mb-4 group-hover:scale-110 transition-transform feature-icon-container">
                <Link size={32} strokeWidth={1.5} className="feature-icon" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Media</h3>
              <p className="text-gray-600">
                Watch videos and presentations about Rspamd.
              </p>
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-rspamd-accent/20 rounded-2xl transition-all pointer-events-none"></div>
            </div>
            
            <div className="feature-card relative group hover:border-rspamd-accent/30 hover:border transition-all cyberpunk-feature">
              <div className="text-rspamd-accent mb-4 group-hover:scale-110 transition-transform feature-icon-container">
                <Github size={32} strokeWidth={1.5} className="feature-icon" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Donation & Support</h3>
              <p className="text-gray-600">
                Check this page if you need help or want to make a donation or contribute to Rspamd.
              </p>
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-rspamd-accent/20 rounded-2xl transition-all pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-white" id="testimonials">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-10 text-center relative">
            What People Say
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-rspamd-accent"></span>
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="testimonial-card cyber-border bg-gradient-to-r from-white to-rspamd-gray/30">
              <div className="absolute -top-6 -left-6 w-12 h-12 rounded-full bg-rspamd-accent flex items-center justify-center text-white text-2xl font-bold">
                "
              </div>
              <p className="text-lg italic mb-6">
                "Locaweb is the largest email provider in Brazil, Locaweb supports more than 10 million inbound email addresses and processes more than 200 million email messages a day.
              </p>
              <p className="text-lg italic mb-6">
                Beyond the Rspamd's performance can be only compared with some extremely expensive brands available on the market, it has a bunch of powerful features and algorithms that constitute an amazing tool against Spam and other email abuses.
              </p>
              <p className="text-lg italic mb-6">
                Rspamd is broadly customizable and allows multiple strategies to avoid Spam and false positives. In conclusion, Rspamd team is not only giving an incredible support for Locaweb but it has also been a great partner."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-rspamd-accent/20 flex items-center justify-center mr-4">
                  <MailCheck size={24} className="text-rspamd-accent" />
                </div>
                <div>
                  <p className="font-semibold">Rafael Abdo</p>
                  <p className="text-sm text-gray-600">Computer Security Incident Coordinator</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-16 bg-rspamd-gray" id="downloads">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center relative">
            Downloads
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-rspamd-accent"></span>
          </h2>
          <div className="max-w-2xl mx-auto text-center">
            <p className="mb-8 text-lg">
              Rspamd is available for various platforms and can be installed through multiple methods.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <a 
                href="#" 
                className="p-6 rounded-xl border border-gray-200 hover:border-rspamd-accent transition-colors group relative overflow-hidden cyberpunk-download-card"
              >
                <div className="relative z-10">
                  <h3 className="text-xl font-semibold mb-2">GitHub</h3>
                  <p className="text-gray-600 mb-3">Get the latest source code</p>
                  <div className="flex justify-center">
                    <Github size={24} className="text-rspamd-dark group-hover:text-rspamd-accent transition-colors" />
                  </div>
                </div>
                <div className="absolute inset-0 bg-rspamd-accent/5 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                <div className="absolute top-0 right-0 border-t-[20px] border-r-[20px] border-t-transparent border-r-rspamd-accent/20"></div>
              </a>
              <a 
                href="#" 
                className="p-6 rounded-xl border border-gray-200 hover:border-rspamd-accent transition-colors group relative overflow-hidden cyberpunk-download-card"
              >
                <div className="relative z-10">
                  <h3 className="text-xl font-semibold mb-2">Packages</h3>
                  <p className="text-gray-600 mb-3">Pre-built packages for major platforms</p>
                  <div className="flex justify-center">
                    <Download size={24} className="text-rspamd-dark group-hover:text-rspamd-accent transition-colors" />
                  </div>
                </div>
                <div className="absolute inset-0 bg-rspamd-accent/5 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                <div className="absolute top-0 right-0 border-t-[20px] border-r-[20px] border-t-transparent border-r-rspamd-accent/20"></div>
              </a>
            </div>
            <Button className="btn-primary relative overflow-hidden group cyber-border">
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
