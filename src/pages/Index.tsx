
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import Categories from "@/components/Categories";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import NewsletterSection from "@/components/NewsletterSection";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Categories />
      <FeaturedProducts />
      <Features />
      <Testimonials />
      <NewsletterSection />
    </Layout>
  );
};

export default Index;
