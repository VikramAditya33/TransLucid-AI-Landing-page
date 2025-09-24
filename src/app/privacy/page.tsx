import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | TransLucid AI",
  description:
    "Read how TransLucid AI handles data. No storage of selected text; real-time processing for translation and explanations.",
};

export default function PrivacyPolicy() {
  return (
    <div className="font-sans min-h-screen">
      <Navbar />
      <main className="mx-auto max-w-4xl px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl mb-8" style={{ fontFamily: 'var(--font-pt-sans-narrow)' }}>
            Privacy Policy
          </h1>
          <p className="text-sm text-black/60 dark:text-white/60 mb-8">
            Last updated: September 2025
          </p>

          <div className="prose prose-gray max-w-none dark:prose-invert">
            <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
            <p className="mb-6">
              Translucid AI Chrome Extension processes text that you select on web pages to provide translation and explanation services. We do not store, log, or retain any of the text you select or translate.
            </p>

            <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
            <p className="mb-6">
              The text you select is processed in real-time to provide translation and AI-powered explanations. This processing happens locally in your browser and through secure API calls to provide the translation and explanation services.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Data Storage</h2>
            <p className="mb-6">
              We do not store any of your selected text, translations, or explanations. All processing is done in real-time and no data is retained on our servers.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Third-Party Services</h2>
            <p className="mb-6">
              Our extension uses Google Gemini API for AI-powered explanations. Please review Google&apos;s privacy policy for information about how they handle data.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Browser Permissions</h2>
            <p className="mb-6">
              The extension requires permission to access web page content to enable text selection and translation features. This permission is only used for the intended functionality.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Changes to This Policy</h2>
            <p className="mb-6">
              We may update this privacy policy from time to time. We will notify users of any material changes by updating the &quot;Last updated&quot; date at the top of this policy.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="mb-6">
              If you have any questions about this privacy policy, please contact us at{" "}
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
