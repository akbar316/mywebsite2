import React from 'react';
import { ToolPageLayout } from '../components/ToolPageLayout';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <ToolPageLayout
      title="Privacy Policy"
      description="Your privacy is important to us. This policy explains what information we collect and how we use it."
    >
      <div className="max-w-3xl mx-auto text-brand-text-secondary space-y-8">
        <p className="text-sm">Last Updated: October 26, 2023</p>

        <section>
          <h2 className="text-2xl font-bold text-brand-primary mb-3">1. Introduction</h2>
          <p>
            Welcome to DiceTools (“we,” “us,” or “our”). We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, dicetools.com, including any other media form, media channel, mobile website, or mobile application related or connected thereto (collectively, the “Site”). Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-primary mb-3">2. Information We Collect</h2>
          <p>
            We may collect limited technical information about you automatically as you navigate our Site. This information may include your IP address, browser type, operating system, referring URLs, and pages visited. This data is primarily collected through analytics and advertising services like Google Analytics and Google AdSense to understand how users interact with our tools.
          </p>
          <p>
            For most of our tools, especially our file converters (PDF, images, etc.), all processing is done locally in your browser. We do not upload, store, or have access to the files you use with these tools.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-primary mb-3">3. Use of Information</h2>
          <p>
            Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:
          </p>
          <ul className="list-disc list-inside mt-4 space-y-2 pl-4">
            <li>Monitor and analyze usage and trends to improve your experience with the Site.</li>
            <li>Deliver targeted advertising, coupons, newsletters, and other information regarding promotions and the Site to you.</li>
            <li>Compile anonymous statistical data and analysis for use internally or with third parties.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-primary mb-3">4. Cookies</h2>
          <p>
            We use cookies to help customize the Site and improve your experience. A cookie is a string of information that a website stores on a visitor’s computer, and that the visitor’s browser provides to the website each time the visitor returns. We use cookies for analytics and advertising purposes. Most browsers are set to accept cookies by default. You can remove or reject cookies, but be aware that such action could affect the availability and functionality of the Site.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-primary mb-3">5. Google AdSense and Third-Party Services</h2>
          <p>
            We use third-party advertising companies, like Google AdSense, to serve ads when you visit the Site. These companies may use information (not including your name, address, email address, or telephone number) about your visits to this and other websites in order to provide advertisements about goods and services of interest to you.
          </p>
          <ul className="list-disc list-inside mt-4 space-y-2 pl-4">
            <li>Third-party vendors, including Google, use cookies to serve ads based on a user's prior visits to our website or other websites.</li>
            <li>Google's use of advertising cookies enables it and its partners to serve ads to our users based on their visit to our sites and/or other sites on the Internet.</li>
            <li>Users may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-brand-accent hover:underline">Ads Settings</a>.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-primary mb-3">6. Data Security</h2>
          <p>
            We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse. We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-primary mb-3">7. Children’s Privacy</h2>
          <p>
            Our services are not directed to children under the age of 13. We do not knowingly collect personally identifiable information from children under 13. If we become aware that we have collected personal information from a child under age 13 without verification of parental consent, we will take steps to remove that information from our servers.
          </p>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold text-brand-primary mb-3">8. Links to Other Websites</h2>
          <p>
            Our website may contain links to other websites of interest. However, once you have used these links to leave our site, you should note that we do not have any control over that other website. Therefore, we cannot be responsible for the protection and privacy of any information which you provide whilst visiting such sites and such sites are not governed by this privacy statement.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-primary mb-3">9. Your Consent</h2>
          <p>
            By using our Site, you hereby consent to our Privacy Policy and agree to its terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-primary mb-3">10. Updates to This Policy</h2>
          <p>
            We reserve the right to make changes to this Privacy Policy at any time and for any reason. We will alert you about any changes by updating the “Last Updated” date of this Privacy Policy. You are encouraged to periodically review this Privacy Policy to stay informed of updates.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-primary mb-3">11. Contact Us</h2>
          <p>
            If you have questions or comments about this Privacy Policy, please contact us at: <a href="mailto:support@dicetools.com" className="text-brand-accent hover:underline">support@dicetools.com</a>
          </p>
        </section>
      </div>
    </ToolPageLayout>
  );
};

export default PrivacyPolicyPage;