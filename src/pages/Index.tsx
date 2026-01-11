import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import WelcomeSection from "@/components/home/WelcomeSection";
import CoursesSection from "@/components/home/CoursesSection";
import FounderSection from "@/components/home/FounderSection";
import WhyOneStyleSection from "@/components/home/WhyOneStyleSection";
import GoogleReviewsSection from "@/components/home/GoogleReviewsSection";
import YTTCSupportSection from "@/components/home/YTTCSupportSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import FAQSection from "@/components/home/FAQSection";
import WebinarSection from "@/components/home/WebinarSection";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <YTTCSupportSection />
      <WelcomeSection />
      <CoursesSection />
      <FounderSection />
      <WhyOneStyleSection />
      <GoogleReviewsSection />
      <WhyChooseUs />
      <WebinarSection />
      <FAQSection />
    </Layout>
  );
};

export default Index;
