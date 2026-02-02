"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    q: "Where is your office located?",
    a: "Our office is situated opposite of WonderLand (Shishu Mela) at Sel HUQ Skypark Building, Level 4, Shamoli, Dhaka.",
  },
  {
    q: "How many services do you provide?",
    a: "We primarily provide Digital Marketing, Web Development, and CRM/ERP Solutions tailored to business needs.",
  },
  {
    q: "Why choose EasyTech Solutions?",
    a: "We offer 3 months of free after-sales support, seamless communication, and a client-first approach that ensures long-term success.",
  },
];

export default function AboutFAQ() {
  return (
    <section className="relative py-28 bg-[#f7faf8] overflow-hidden">
      {/* background glow */}
      <div className="absolute -top-20 left-0 w-72 h-72 bg-green-200/30 blur-3xl rounded-full" />
      <div className="absolute -bottom-20 right-0 w-72 h-72 bg-green-300/30 blur-3xl rounded-full" />

      <div className="relative max-w-4xl mx-auto py-4 px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h5 className="text-green-600 font-semibold uppercase tracking-widest mb-4">
            FAQ
          </h5>
          <h2 className="text2xl md:text-3xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 mt-4">
            Everything you need to know about our services, process, and support.
          </p>
        </div>

        {/* Accordion */}
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="bg-white rounded-2xl shadow-sm border px-6"
            >
              <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline py-3">
                <div className="flex items-center gap-3">
                  <HelpCircle className="text-green-600" size={20} />
                  {faq.q}
                </div>
              </AccordionTrigger>

              <AccordionContent className="text-gray-600 pb-6 leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
