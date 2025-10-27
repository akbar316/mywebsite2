import React from 'react';
import { ToolPageLayout } from '../components/ToolPageLayout';

const TermsPage: React.FC = () => {
  return (
    <ToolPageLayout
      title="Terms of Service"
      description="Please read these terms carefully before using our services."
    >
      <div className="max-w-3xl mx-auto text-brand-text-secondary space-y-8">
        <p className="text-sm">Last Updated: October 26, 2023</p>

        <section>
          <h2 className="text-2xl font-bold text-brand-primary mb-3">1. Acceptance of Terms</h2>
          <p>
            By accessing and using DiceTools (the "Site"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by these terms, please do not use this Site.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-primary mb-3">2. Description of Service</h2>
          <p>
            DiceTools provides users with a collection of free online utilities, including but not limited to text manipulation tools, file converters, and developer tools (the "Service"). You understand and agree that the Service is provided "AS-IS" and that DiceTools assumes no responsibility for the timeliness, deletion, mis-delivery, or failure to store any user communications or personalization settings.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-primary mb-3">3. User Conduct</h2>
          <p>
            You agree to not use the Service to:
          </p>
          <ul className="list-disc list-inside mt-4 space-y-2 pl-4">
            <li>Upload or process any content that is unlawful, harmful, threatening, abusive, harassing, defamatory, vulgar, obscene, or otherwise objectionable.</li>
            <li>Harm minors in any way.</li>
            <li>Interfere with or disrupt the Service or servers or networks connected to the Service.</li>
            <li>Violate any applicable local, state, national, or international law.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-primary mb-3">4. Client-Side Processing and Data Privacy</h2>
          <p>
            A core feature of DiceTools is its commitment to privacy. The majority of our tools, especially those that handle files (e.g., PDF and image converters), perform all processing directly in your web browser ("client-side"). Your files are NOT uploaded to our servers. We do not have access to, nor do we store, the content you process with these tools. You retain all ownership of the content you process.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-primary mb-3">5. Disclaimers and Limitation of Liability</h2>
          <p>
            The tools on this Site are provided for general utility and convenience. While we strive for accuracy, DiceTools makes no warranty that the Service will be uninterrupted, timely, secure, or error-free. The results obtained from the use of the Service may not always be accurate or reliable. You expressly understand and agree that DiceTools shall not be liable for any direct, indirect, incidental, special, consequential, or exemplary damages resulting from the use or the inability to use the service.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-primary mb-3">6. Intellectual Property</h2>
          <p>
            The content on the Site, including the text, graphics, logos, and software, is the property of DiceTools and is protected by copyright and other intellectual property laws. You may not reproduce, duplicate, copy, sell, or exploit any portion of the Service without express written permission from us.
          </p>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold text-brand-primary mb-3">7. Changes to Terms</h2>
          <p>
            We reserve the right to modify or replace these Terms of Service at any time. We will alert you about any changes by updating the “Last Updated” date of these Terms. It is your responsibility to check this page periodically for changes.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-primary mb-3">8. Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us at: <a href="mailto:support@dicetools.com" className="text-brand-accent hover:underline">support@dicetools.com</a>
          </p>
        </section>
      </div>
    </ToolPageLayout>
  );
};

export default TermsPage;
