import React from 'react';
import { Code2, Cpu, GitBranch, Globe, Shield, Workflow } from 'lucide-react';

const features = [
  {
    icon: Code2,
    title: 'Multiple Languages',
    description: 'Support for all major programming languages and frameworks'
  },
  {
    icon: Shield,
    title: 'Security First',
    description: 'Built-in security best practices and vulnerability scanning'
  },
  {
    icon: Globe,
    title: 'Cloud Ready',
    description: 'Deploy to any major cloud provider with one click'
  },
  {
    icon: GitBranch,
    title: 'Version Control',
    description: 'Integrated Git workflow and collaboration tools'
  },
  {
    icon: Cpu,
    title: 'AI Powered',
    description: 'Advanced AI models for intelligent code transformation'
  },
  {
    icon: Workflow,
    title: 'CI/CD Pipeline',
    description: 'Automated testing and deployment workflows'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Powerful Features</h2>
          <p className="mt-4 text-xl text-gray-600">Everything you need to transform your code into production applications</p>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-lg blur opacity-0 group-hover:opacity-25 transition duration-1000 group-hover:duration-200" />
                <div className="relative p-8 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
                  <Icon className="w-8 h-8 text-indigo-600" />
                  <div className="space-y-2">
                    <p className="text-xl font-semibold text-gray-900">{feature.title}</p>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}