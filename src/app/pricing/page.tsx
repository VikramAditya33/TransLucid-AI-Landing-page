import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const pricingPlans = [
  {
    id: 1,
    name: "Free Plan",
    price: "$0",
    period: "forever",
    description: "Perfect for trying out Translucid AI",
    features: [
      "Limited translations",
      "Basic language support",
      "Limited standard explanations",
      "Community support"
    ],
    buttonText: "Get Started Free",
    buttonStyle: "border border-black/10 hover:bg-black/5",
    popular: false
  },
  {
    id: 2,
    name: "Monthly Plan",
    price: "$2.99",
    period: "per month",
    description: "Perfect for regular users",
    features: [
      "Unlimited translations",
      "50+ more language support",
      "Chat history access",
      "Priority support",
      "Usage analytics"
    ],
    buttonText: "Subscribe Monthly",
    buttonStyle: "bg-foreground text-background hover:bg-black/80 dark:hover:bg-white/80",
    popular: true
  },
  {
    id: 3,
    name: "Yearly Plan",
    price: "$29.9",
    period: "per year",
    description: "Best value for long-term users",
    features: [
      "Everything in Monthly",
      "1+1 month free for first time",
      "Priority support",
      "Early access to features",
      "Usage analytics"
    ],
    buttonText: "Subscribe Yearly",
    buttonStyle: "bg-foreground text-background hover:bg-black/80 dark:hover:bg-white/80",
    popular: true
  }
];

export default function PricingPage() {
  return (
    <div className="font-sans min-h-screen">
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl mb-8" style={{ fontFamily: 'var(--font-pt-sans-narrow)' }}>
            Pricing
          </h1>
          <p className="text-lg text-black/70 dark:text-white/70 mb-8">
            Choose the perfect plan for your translation needs. Start free and upgrade anytime.
          </p>
          <div className="inline-flex items-center rounded-lg bg-blue-50 dark:bg-blue-900/20 px-4 py-2 text-sm text-blue-700 dark:text-blue-300">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            All plans include 50+ language support
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-16">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`relative flex flex-col rounded-xl border p-8 shadow-sm transition-all duration-300 hover:shadow-md ${
                plan.popular 
                  ? 'border-blue-200 bg-blue-50/50 dark:border-blue-400/30 dark:bg-blue-900/10' 
                  : 'border-black/10 bg-white dark:bg-black/20'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="inline-flex items-center rounded-full bg-blue-600 px-3 py-1 text-xs font-medium text-white">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                <div className="mb-2">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-black/60 dark:text-white/60">/{plan.period}</span>
                </div>
                <p className="text-sm text-black/70 dark:text-white/70">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    <span className="text-sm text-black/70 dark:text-white/70">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full rounded-md px-4 py-2 text-sm font-medium transition-colors ${plan.buttonStyle}`}>
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="rounded-xl border border-black/10 bg-white p-8 shadow-sm dark:bg-black/20">
            <h3 className="text-xl font-semibold mb-4">Frequently Asked Questions</h3>
            <div className="grid gap-6 sm:grid-cols-2 text-left">
              <div>
                <h4 className="font-medium mb-2">Can I change plans anytime?</h4>
                <p className="text-sm text-black/70 dark:text-white/70">
                  Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Is there a free trial?</h4>
                <p className="text-sm text-black/70 dark:text-white/70">
                  Yes, all paid plans come with a 14-day free trial. No credit card required.
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-2">What languages are supported?</h4>
                <p className="text-sm text-black/70 dark:text-white/70">
                  We support 50+ languages including Spanish, French, German, Chinese, Japanese, and many more.
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-2">How does billing work?</h4>
                <p className="text-sm text-black/70 dark:text-white/70">
                  All plans are billed monthly. You can cancel anytime with no cancellation fees.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-black/60 dark:text-white/60 mb-4">
            Need a custom plan for your organization?
          </p>
          <a
            href="mailto:vikramadityaverma87@gmail.com"
            className="inline-flex items-center text-blue-600 hover:underline"
          >
            Contact us for enterprise pricing
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}
