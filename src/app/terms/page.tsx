import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TermsOfService() {
  return (
    <div className="font-sans min-h-screen">
      <Navbar />
      <main className="mx-auto max-w-4xl px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl mb-8" style={{ fontFamily: 'var(--font-pt-sans-narrow)' }}>
            Terms of Service
          </h1>
          <p className="text-sm text-black/60 dark:text-white/60 mb-8">
            Last updated: September 2025
          </p>

          <div className="prose prose-gray max-w-none dark:prose-invert">
            <h2 className="text-2xl font-semibold mb-4">Acceptance of Terms</h2>
            <p className="mb-6">
              By using the Translucid AI Chrome Extension, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our extension.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Description of Service</h2>
            <p className="mb-6">
              Translucid AI is a Chrome Extension that provides real-time translation and AI-powered explanations of selected text on web pages. The service is provided &quot;as is&quot; without warranties of any kind.
            </p>

            <h2 className="text-2xl font-semibold mb-4">User Responsibilities</h2>
            <p className="mb-6">
              You are responsible for:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Using the extension in compliance with applicable laws and regulations</li>
              <li>Not using the extension for illegal or unauthorized purposes</li>
              <li>Respecting the intellectual property rights of content owners</li>
              <li>Not attempting to reverse engineer or modify the extension</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
            <p className="mb-6">
              Translucid AI shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or other intangible losses resulting from your use of the extension.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Accuracy of Translations</h2>
            <p className="mb-6">
              While we strive to provide accurate translations and explanations, we cannot guarantee the accuracy, completeness, or reliability of any translation or explanation provided by the extension.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Third-Party Services</h2>
            <p className="mb-6">
              Our extension uses third-party services including Google Gemini API. Your use of these services is subject to their respective terms of service and privacy policies.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Modifications</h2>
            <p className="mb-6">
              We reserve the right to modify or discontinue the extension at any time without notice. We may also update these terms from time to time.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Governing Law</h2>
            <p className="mb-6">
              These terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <p className="mb-6">
              If you have any questions about these Terms of Service, please contact us at{" "}
              <a href="mailto:vikramadityaverma87@gmail.com" className="text-blue-600 hover:underline">
                vikramadityaverma87@gmail.com
              </a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
