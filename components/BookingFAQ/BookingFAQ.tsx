import { useTranslations } from "next-intl";

export default function BookingFAQ() {
  const q = useTranslations("Booking_FAQ");
  const terms = useTranslations("Payment_conditions");
  const items = [
    { question: q("reserve"), answer: terms("des2") },
    { question: q("cancel"), answer: terms("des4") },
    { question: q("times"), answer: terms("des5") },
    { question: q("pets"), answer: terms("des6") },
  ];
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <section className="container mb-24" aria-labelledby="booking-faq-title">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="rounded-xl border border-white/15 bg-white/5 p-4 md:p-8">
        <h2 id="booking-faq-title" className="mb-5 text-2xl font-bold text-white md:text-3xl">
          {q("title")}
        </h2>
        <div className="space-y-3">
          {items.map((item) => (
            <details key={item.question} className="rounded-lg border border-white/15 bg-[#032552] p-4">
              <summary className="cursor-pointer font-semibold text-white">{item.question}</summary>
              <p className="mt-3 text-sm leading-6 text-gray-200">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
