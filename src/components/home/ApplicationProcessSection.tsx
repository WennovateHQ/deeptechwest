import React from 'react';
import Link from 'next/link';

const ProcessStep = ({ 
  number, 
  title, 
  description 
}: { 
  number: number; 
  title: string; 
  description: string;
}) => {
  return (
    <div className="flex">
      <div className="flex-shrink-0 mr-6">
        <div className="bg-[#1B365D] text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold">
          {number}
        </div>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-neutral-grey">{description}</p>
      </div>
    </div>
  );
};

const ApplicationProcessSection = () => {
  const steps = [
    {
      number: 1,
      title: "Application Review",
      description: "Submit detailed application including venture/research description, technology readiness level, and goals"
    },
    {
      number: 2,
      title: "Community Fit Assessment",
      description: "Brief interview to ensure mutual value and community alignment"
    },
    {
      number: 3,
      title: "Welcome & Integration",
      description: "Onboarding process including mentor matching and goal-setting session"
    }
  ];

  return (
    <section className="section bg-light-tech">
      <div className="container-inner">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Western Canada's Premier Deep Tech Network</h2>
          <p className="text-lg text-neutral-grey max-w-3xl mx-auto">
            Our application process is designed to ensure a high-quality community that delivers value to all members.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-12 mb-12">
          {steps.map((step) => (
            <ProcessStep
              key={step.number}
              number={step.number}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>

        <div className="text-center">
          <Link href="/apply" className="btn-primary inline-flex items-center gap-2">
            Start Your Application
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ApplicationProcessSection;
