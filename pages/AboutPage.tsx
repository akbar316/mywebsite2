import React from 'react';
import { ToolPageLayout } from '../components/ToolPageLayout';

const AboutPage: React.FC = () => {
  return (
    <ToolPageLayout
      title="About DiceTools"
      description="Your futuristic toolkit for digital convenience. Learn more about our mission and our commitment to your privacy."
    >
      <div className="max-w-3xl mx-auto text-brand-text-secondary space-y-8">
        <section>
          <h2 className="text-2xl font-bold text-brand-primary mb-3">Our Mission</h2>
          <p>
            In a digital world cluttered with slow, ad-heavy, and insecure websites, DiceTools was created to be different. Our mission is simple: to provide a comprehensive suite of fast, free, and fundamentally secure online tools. We believe that utility should not come at the cost of your privacy or your time. Every tool on this platform is designed to be intuitive, powerful, and accessible to everyone.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-primary mb-3">How It Works: Privacy First</h2>
          <p>
            The magic of DiceTools lies in its architecture. Unlike most online tools that require you to upload your files to a server for processing, our tools work entirely within your web browser.
          </p>
          <ul className="list-disc list-inside mt-4 space-y-2 pl-4">
            <li>
              <strong>No Server Uploads:</strong> When you use our PDF or image converters, your files are never sent over the internet. All the merging, splitting, and converting happens directly on your own computer.
            </li>
            <li>
              <strong>Instantaneous Speed:</strong> By cutting out the upload/download cycle, our tools perform incredibly fast. The only limit is the processing power of your own device.
            </li>
            <li>
              <strong>Absolute Security:</strong> Your data remains yours. Since your files never leave your machine, you can use our tools with complete confidence, even for sensitive documents.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-primary mb-3">Our Features</h2>
          <p>
            We've built DiceTools with a focus on a high-quality user experience.
          </p>
          <ul className="list-disc list-inside mt-4 space-y-2 pl-4">
            <li>
              <strong>Comprehensive Toolkit:</strong> From powerful PDF manipulation to essential developer utilities and simple text converters, we aim to be your all-in-one hub.
            </li>
            <li>
              <strong>Stunning & Responsive Design:</strong> Our futuristic, glowing interface is not just for show. It's designed to be clean, intuitive, and fully responsive, working beautifully on desktops, tablets, and mobile devices.
            </li>
            <li>
              <strong>Completely Free:</strong> All tools are provided free of charge, with no hidden fees or limitations.
            </li>
          </ul>
        </section>

        <section className="text-center pt-4">
          <p className="text-lg">
            Thank you for choosing DiceTools. We're constantly working on adding new features and improving existing ones. Explore our collection and make your digital life a little easier!
          </p>
        </section>
      </div>
    </ToolPageLayout>
  );
};

export default AboutPage;
