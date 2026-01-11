import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import WelcomeSection from "@/components/home/WelcomeSection";
import CoursesSection from "@/components/home/CoursesSection";
import FounderSection from "@/components/home/FounderSection";
import WhyOneStyleSection from "@/components/home/WhyOneStyleSection";
import ActivitiesSection from "@/components/home/ActivitiesSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import FAQSection from "@/components/home/FAQSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <WelcomeSection />
      <CoursesSection />
      <FounderSection />
      <WhyOneStyleSection />
      <ActivitiesSection />
      <WhyChooseUs />
      <FAQSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
