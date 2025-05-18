"use client";

import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";

export function PricingSection() {
  const features = [
    "24/7 Always-on AI Voice Agent",
    "Unlimited Inbound Call Handling",
    "Natural Conversational AI",
    "CRM Integration",
    "Custom Voice & Personality",
    "Appointment Scheduling",
    "Lead Qualification",
    "Email & SMS Notifications",
    "Call Recording & Analytics",
    "24/7 Technical Support",
    "Monthly Performance Reviews",
    "Regular AI Model Updates",
  ];

  return (
    <>
      {/* Hero section with page title */}
      <section className="relative overflow-hidden py-32 md:py-40 lg:py-48">
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23d1d8e0' fill-opacity='0.2' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='1'/%3E%3C/g%3E%3C/svg%3E\")",
              backgroundSize: "20px 20px",
              opacity: 0.3,
            }}
          />
        </div>

        <div className="st-container relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1976d2] mb-8 leading-tight">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed">
              One powerful plan to transform your business with AI voice
              technology. No hidden fees, just results.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing card section */}
      <section className="py-20 md:py-28 lg:py-32 bg-[#f8f9fa]">
        <div className="st-container">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
              {/* Premium banner */}
              <div className="bg-[#1976d2] py-4 text-center">
                <h3 className="text-white font-semibold text-xl">
                  PREMIUM PLAN
                </h3>
              </div>

              {/* Card content */}
              <div className="p-10 md:p-14">
                <div className="grid md:grid-cols-2 gap-10 md:gap-14">
                  {/* Left column with pricing */}
                  <div>
                    <div className="flex items-baseline mb-8">
                      <span className="text-6xl font-bold text-gray-900">
                        $1,000
                      </span>
                      <span className="text-xl text-gray-600 ml-3">/month</span>
                    </div>

                    <div className="mb-8">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#1976d2]/10 flex items-center justify-center">
                          <span className="text-[#1976d2] font-bold">$</span>
                        </div>
                        <div>
                          <span className="block text-gray-800 font-semibold">
                            One-time setup fee
                          </span>
                          <span className="block text-2xl font-bold text-gray-900">
                            $5,000
                          </span>
                        </div>
                      </div>
                      <p className="text-gray-600 mt-2 text-sm">
                        Includes custom AI voice creation, integration setup,
                        and initial training.
                      </p>
                    </div>

                    <div className="space-y-4 mb-8">
                      <p className="text-gray-700">
                        Ideal for businesses looking to transform customer
                        engagement with AI voice technology.
                      </p>
                      <p className="text-gray-700">
                        Our premium plan includes everything you need to deploy
                        your custom AI voice agent with no call limits.
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button className="bg-[#1976d2] hover:bg-[#1565c0] text-white rounded-lg py-6 px-8 text-lg shadow-lg">
                        Start Your 14-Day Trial
                      </Button>
                      <Button
                        variant="outline"
                        className="text-[#1976d2] border-[#1976d2] hover:bg-[#1976d2]/5 rounded-lg"
                      >
                        Schedule a Demo
                      </Button>
                    </div>
                  </div>

                  {/* Right column with features */}
                  <div>
                    <h4 className="text-xl font-semibold mb-6 text-gray-900">
                      Everything included:
                    </h4>
                    <ul className="space-y-3">
                      {features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <Check className="h-5 w-5 text-[#1976d2] mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Card footer */}
              <div className="border-t border-gray-100 bg-gray-50 p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="relative h-12 w-12">
                      <Image
                        src="/logo-blue-nobox.png"
                        alt="AIBotcaller Logo"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="text-sm text-gray-600">
                      Trusted by businesses across industries
                    </span>
                  </div>
                  <div className="hidden md:flex items-center gap-1">
                    <span className="text-sm text-gray-600">Questions?</span>
                    <Link
                      href="#"
                      className="text-sm text-[#1976d2] font-medium"
                    >
                      Contact our sales team
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ section */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
                Frequently Asked Questions
              </h3>

              <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-semibold text-lg mb-2 text-gray-900">
                    What's included in the setup fee?
                  </h4>
                  <p className="text-gray-700">
                    The $5,000 setup fee covers custom AI voice creation based
                    on your brand, integration with your existing systems,
                    initial training, and configuration of call flows and
                    responses.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-semibold text-lg mb-2 text-gray-900">
                    Is there a limit to the number of calls?
                  </h4>
                  <p className="text-gray-700">
                    No, our premium plan includes unlimited inbound call
                    handling. Your AI agent can handle as many simultaneous
                    calls as needed without additional charges.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-semibold text-lg mb-2 text-gray-900">
                    How long does implementation take?
                  </h4>
                  <p className="text-gray-700">
                    Typically, your custom AI voice agent can be fully
                    implemented and operational within 2-3 weeks from signing
                    up, depending on your specific requirements and
                    integrations.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-semibold text-lg mb-2 text-gray-900">
                    Can I cancel anytime?
                  </h4>
                  <p className="text-gray-700">
                    Yes, you can cancel your monthly subscription at any time
                    with 30 days' notice. The setup fee is non-refundable as it
                    covers the custom creation of your AI voice agent.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA section */}
            <div className="mt-16 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to transform your business?
              </h3>
              <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
                Join businesses that are saving time, reducing costs, and
                improving customer experience with AIBotcaller.
              </p>
              <Button className="bg-[#1976d2] hover:bg-[#1565c0] text-white rounded-lg py-6 px-8 text-lg shadow-lg">
                Get Started Today
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
