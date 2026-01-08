import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What kind of visa do I need to join the course in Bali?",
    answer: "Most students apply for a tourist visa to attend the training. We will guide you with the process once your booking is confirmed.",
  },
  {
    question: "Is Bali safe for solo travelers, especially women?",
    answer: "Yes, Bali is generally very safe for solo travelers, including women. With friendly locals and a vibrant travel community, it's easy to explore safely by following basic precautions and local guidelines.",
  },
  {
    question: "How do I reach the school from the airport?",
    answer: "We arrange airport pickup from Denpasar (Ngurah Rai International Airport) to make your arrival smooth and easy.",
  },
  {
    question: "What is the best time of year to join the training?",
    answer: "The course runs year-round, but April to October (dry season) is the most pleasant time for yoga and outdoor activities.",
  },
  {
    question: "Will I have free time during the course?",
    answer: "Yes, you will get short breaks between classes and free evenings. Weekends are lighter and often include excursions, giving you time to explore Bali.",
  },
  {
    question: "Can I stay longer in Bali after the course ends?",
    answer: "Yes, many students extend their stay. Our team can guide you with local stays, travel tips, and activities.",
  },
];

export default function FAQSection() {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg">
            Everything you need to know about our yoga teacher training courses in Bali
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-lg px-6 shadow-soft border-none"
              >
                <AccordionTrigger className="text-left font-heading text-lg font-semibold hover:text-primary transition-colors py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
