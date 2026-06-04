import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

const faqItems = [
  {
    question: "What is Prosite and who is it for?",
    answer:
      "Prosite is your professional identity on Atives — a portfolio, storefront, and networking hub in one place. It's built for designers, photographers, filmmakers, musicians, coaches, and any creative who wants one link that actually converts.",
  },
  {
    question: "Is membership a one-time payment or a subscription?",
    answer:
      "Our launch offer is a lifetime membership — one payment for long-term access to Prosite, mobile apps, and core features. Pricing and inclusions are always shown clearly on the pricing section before you checkout.",
  },
  {
    question: "Can I use only specific features?",
    answer:
      "Yes. You can start with what matters most — portfolio, services, store, courses, or NFC sharing — and add more over time. Every module lives on one Prosite, so you don't need separate tools for each use case.",
  },
  {
    question: "What if I need help after I launch?",
    answer:
      "You can reach our team at hello@1atives.com for setup questions, review status, or account issues. We're also expanding guided resources inside the platform so you can grow your Prosite without starting from scratch.",
  },
  {
    question: "Is there a review before my Prosite goes live?",
    answer:
      "Yes. Prosites go through a quality and authenticity review so the network stays trustworthy. Timelines vary by plan — verified members often see approval within 24–72 hours; standard submissions may take longer depending on completeness.",
  },
  {
    question: "How do I get started — are calls required?",
    answer:
      "No mandatory sales calls. Choose membership, complete checkout, build your Prosite, and submit for review. If you want strategic help, you can always email us — but the default path is self-serve and fast.",
  },
  {
    question: "How does Prosite help me monetize my work?",
    answer:
      "Sell products, services, courses, and event tickets from one page. Use QR and NFC sharing, analytics, and Atives networking to drive traffic. Affiliate and engagement rewards on Atives can add extra upside depending on your plan.",
  },
  {
    question: "Can I share my Prosite with NFC and QR?",
    answer:
      "Yes. Every Prosite supports QR sharing out of the box. Optional NFC cards let people tap to open your page — ideal for events, studios, and in-person networking.",
  },
];

export default function FAQ() {
  return (
    <section
      id="faq"
      data-testid="faq-section"
      className="relative border-t border-white/[0.06] bg-prosite-bg py-20 sm:py-28"
    >
      <div className="mx-auto max-w-[720px] px-5 sm:px-8">
        <h2 className="mb-12 text-center font-display text-[32px] font-semibold leading-tight tracking-tight text-white sm:mb-16 sm:text-[40px] lg:text-[44px]">
          Frequently asked questions
        </h2>

        <Accordion
          type="single"
          collapsible
          className="w-full"
        >
          {faqItems.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-white/[0.12] border-b last:border-b"
            >
              <AccordionTrigger
                className={cn(
                  "py-5 sm:py-6 text-[15px] sm:text-base font-medium text-white/90 hover:no-underline hover:text-white",
                  "[&>svg]:h-4 [&>svg]:w-4 [&>svg]:text-white/40 [&>svg]:transition-transform"
                )}
              >
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-[14px] sm:text-[15px] leading-relaxed text-white/55 font-body pb-5 sm:pb-6">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
