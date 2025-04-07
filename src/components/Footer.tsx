
import React from "react";
import { Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-rspamd-gray py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-lg font-semibold mb-4">Rspamd</h3>
            <p className="text-gray-600">
              Advanced spam filtering system with high performance and flexibility.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-rspamd-accent">Documentation</a></li>
              <li><a href="#" className="text-gray-600 hover:text-rspamd-accent">Installation Guide</a></li>
              <li><a href="#" className="text-gray-600 hover:text-rspamd-accent">API Reference</a></li>
              <li><a href="#" className="text-gray-600 hover:text-rspamd-accent">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Community</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-rspamd-accent">GitHub</a></li>
              <li><a href="#" className="text-gray-600 hover:text-rspamd-accent">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-rspamd-accent">Issues</a></li>
              <li><a href="#" className="text-gray-600 hover:text-rspamd-accent">Discussions</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-rspamd-accent">License</a></li>
              <li><a href="#" className="text-gray-600 hover:text-rspamd-accent">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-rspamd-accent">Terms of Use</a></li>
              <li><a href="#" className="text-gray-600 hover:text-rspamd-accent">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 mb-4 md:mb-0">
            © {new Date().getFullYear()} Rspamd Project. All rights reserved.
          </p>
          <div className="flex items-center space-x-4">
            <a 
              href="https://github.com/rspamd/rspamd" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-rspamd-accent"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
