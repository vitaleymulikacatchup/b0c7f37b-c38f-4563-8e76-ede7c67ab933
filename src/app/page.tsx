"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Award, Bot, Building, DollarSign, HelpCircle, Linkedin, Mail, MessageCircle, Network, Rocket, Shield, Sparkles, Star, TrendingUp, Twitter, Users, Zap } from "lucide-react";

export default function Page() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="reveal-blur"
      borderRadius="soft"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "Features", id: "features" },
            { name: "Pricing", id: "pricing" },
            { name: "About", id: "about" },
            { name: "Team", id: "team" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="AI SaaS"
          button={{
            text: "Get Started",
            href: "https://app.aisaas.com/signup"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Transform Your Business with AI"
          description="Unlock the power of artificial intelligence to automate workflows, analyze data, and accelerate growth. Join thousands of companies already using our AI platform."
          tag="AI-Powered"
          tagIcon={Zap}
          buttons={[
            {
              text: "Start Free Trial",
              href: "https://app.aisaas.com/signup"
            },
            {
              text: "Watch Demo",
              href: "https://demo.aisaas.com"
            }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/uploaded-1761944112745-1oxye7oq.png"
          imageAlt="An individual viewing glowing numbers on a screen, symbolizing technology and data."
          imagePosition="right"
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="About Our AI Platform"
          description={[
            "We're building the future of business intelligence with cutting-edge AI technology that adapts to your needs.",
            "Our mission is to democratize artificial intelligence, making powerful AI tools accessible to businesses of all sizes."
          ]}
          buttons={[
            {
              text: "Learn More",
              href: "about"
            }
          ]}
          showBorder={true}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardTwo
          title="Powerful AI Features"
          description="Discover the comprehensive suite of AI tools designed to transform your business operations"
          tag="Features"
          tagIcon={Sparkles}
          features={[
            {
              title: "Intelligent Automation",
              description: "Automate repetitive tasks and workflows with AI that learns from your business patterns",
              icon: Bot,
              button: {
                text: "Learn More",
                href: "features/automation"
              }
            },
            {
              title: "Advanced Analytics",
              description: "Get deep insights from your data with machine learning-powered analytics and predictions",
              icon: TrendingUp,
              button: {
                text: "Explore",
                href: "features/analytics"
              }
            },
            {
              title: "Smart Integrations",
              description: "Connect with 100+ popular business tools and platforms seamlessly",
              icon: Network,
              button: {
                text: "View All",
                href: "features/integrations"
              }
            }
          ]}
          layout="default"
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardTwo
          title="Choose Your AI Plan"
          description="Select the perfect plan to unlock AI-powered growth for your business"
          tag="Pricing"
          tagIcon={DollarSign}
          plans={[
            {
              id: "starter",
              badge: "Starter",
              badgeIcon: Rocket,
              price: "$29/mo",
              subtitle: "Perfect for small teams getting started with AI",
              buttons: [
                {
                  text: "Start Free Trial",
                  href: "https://app.aisaas.com/signup"
                },
                {
                  text: "Learn More",
                  href: "pricing/starter"
                }
              ],
              features: [
                "Up to 5 team members",
                "1,000 AI operations/month",
                "Basic analytics dashboard",
                "Email support",
                "5 integrations"
              ]
            },
            {
              id: "professional",
              badge: "Professional",
              badgeIcon: Star,
              price: "$79/mo",
              subtitle: "Advanced AI tools for growing businesses",
              buttons: [
                {
                  text: "Start Free Trial",
                  href: "https://app.aisaas.com/signup"
                },
                {
                  text: "Contact Sales",
                  href: "contact"
                }
              ],
              features: [
                "Up to 25 team members",
                "10,000 AI operations/month",
                "Advanced analytics & predictions",
                "Priority support",
                "Unlimited integrations",
                "Custom AI models"
              ]
            }
          ]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardOne
          title="Our Impact"
          description="See how businesses are transforming with our AI platform"
          tag="Results"
          tagIcon={Award}
          metrics={[
            {
              id: "1",
              value: "10K+",
              title: "Companies",
              description: "Businesses trust our AI platform",
              icon: Building
            },
            {
              id: "2",
              value: "95%",
              title: "Efficiency",
              description: "Average productivity increase",
              icon: TrendingUp
            },
            {
              id: "3",
              value: "50M+",
              title: "Operations",
              description: "AI-powered tasks completed",
              icon: Zap
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardTwo
          title="Meet Our Team"
          description="The AI experts and visionaries building the future of business intelligence"
          tag="Team"
          tagIcon={Users}
          members={[
            {
              id: "1",
              name: "Sarah Chen",
              role: "CEO & Founder",
              description: "Former VP of AI at Google. PhD in Machine Learning from Stanford. 15 years building AI products.",
              imageSrc: "https://images.pexels.com/photos/6894103/pexels-photo-6894103.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              socialLinks: [
                {
                  icon: Twitter,
                  url: "https://twitter.com/sarahchen"
                },
                {
                  icon: Linkedin,
                  url: "https://linkedin.com/in/sarahchen"
                }
              ]
            },
            {
              id: "2",
              name: "Michael Rodriguez",
              role: "CTO",
              description: "Former Principal Engineer at OpenAI. Expert in large language models and neural networks.",
              imageSrc: "https://images.pexels.com/photos/5716001/pexels-photo-5716001.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              socialLinks: [
                {
                  icon: Twitter,
                  url: "https://twitter.com/mikeer"
                }
              ]
            },
            {
              id: "3",
              name: "Lisa Thompson",
              role: "Head of Product",
              description: "Former Product Lead at Salesforce. Specialized in AI-powered business applications.",
              imageSrc: "https://images.pexels.com/photos/3727463/pexels-photo-3727463.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              socialLinks: [
                {
                  icon: Linkedin,
                  url: "https://linkedin.com/in/lisathompson"
                }
              ]
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="What Our Customers Say"
          description="Discover how businesses are achieving remarkable results with our AI platform"
          tag="Testimonials"
          tagIcon={MessageCircle}
          testimonials={[
            {
              id: "1",
              name: "John Martinez",
              role: "Marketing Director",
              company: "TechFlow Inc",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/5716001/pexels-photo-5716001.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "2",
              name: "Emma Watson",
              role: "Operations Manager",
              company: "InnovateCorp",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/6694547/pexels-photo-6694547.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "3",
              name: "David Kim",
              role: "Founder",
              company: "StartupXYZ",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/7414112/pexels-photo-7414112.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "4",
              name: "Maria Garcia",
              role: "AI Consultant",
              company: "DataVision",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/4458554/pexels-photo-4458554.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            }
          ]}
        />
      </div>

      <div id="socialproof" data-section="socialproof">
        <SocialProofOne
          title="Trusted by Industry Leaders"
          description="Join thousands of companies that rely on our AI platform for business transformation"
          tag="Partners"
          tagIcon={Shield}
          logos={[
            "https://images.pexels.com/photos/10142683/pexels-photo-10142683.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          ]}
          speed={40}
          showCard={true}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqDouble
          title="Frequently Asked Questions"
          description="Everything you need to know about our AI platform and how it can transform your business"
          tag="FAQ"
          tagIcon={HelpCircle}
          faqs={[
            {
              id: "1",
              title: "What is AI SaaS and how does it work?",
              content: "Our AI SaaS platform combines machine learning, natural language processing, and automation to help businesses streamline operations, analyze data, and make intelligent decisions. Simply connect your data sources and let our AI do the rest."
            },
            {
              id: "2",
              title: "How quickly can I see results?",
              content: "Most customers see measurable improvements within the first week. Our AI begins learning your business patterns immediately and typically shows significant productivity gains within 30 days."
            },
            {
              id: "3",
              title: "Is my data secure and private?",
              content: "Yes, absolutely. We use enterprise-grade security with end-to-end encryption, SOC 2 compliance, and GDPR compliance. Your data is never shared with third parties and remains completely under your control."
            },
            {
              id: "4",
              title: "Can I integrate with my existing tools?",
              content: "Yes, we support 100+ popular business tools including Salesforce, HubSpot, Slack, Microsoft 365, Google Workspace, and many more. Our API also allows custom integrations."
            },
            {
              id: "5",
              title: "What kind of support do you provide?",
              content: "We offer 24/7 email support for all plans, priority phone support for Professional plans, and dedicated success managers for Enterprise customers. We also provide comprehensive documentation and training resources."
            },
            {
              id: "6",
              title: "Can I cancel or change my plan anytime?",
              content: "Yes, you can upgrade, downgrade, or cancel your subscription at any time. There are no long-term contracts required, and we offer a 30-day money-back guarantee for new customers."
            }
          ]}
          animationType="smooth"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Get Started"
          tagIcon={Mail}
          title="Ready to Transform Your Business?"
          description="Join thousands of companies already using AI to automate workflows, analyze data, and accelerate growth. Start your free trial today."
          inputPlaceholder="Enter your work email"
          buttonText="Start Free Trial"
          termsText="By signing up, you agree to our Terms of Service and Privacy Policy. No credit card required for trial."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="AI SaaS"
          columns={[
            {
              items: [
                {
                  label: "Features",
                  href: "features"
                },
                {
                  label: "Pricing",
                  href: "pricing"
                },
                {
                  label: "Integrations",
                  href: "integrations"
                },
                {
                  label: "API Documentation",
                  href: "https://docs.aisaas.com"
                }
              ]
            },
            {
              items: [
                {
                  label: "About Us",
                  href: "about"
                },
                {
                  label: "Team",
                  href: "team"
                },
                {
                  label: "Careers",
                  href: "careers"
                },
                {
                  label: "Press",
                  href: "press"
                }
              ]
            },
            {
              items: [
                {
                  label: "Help Center",
                  href: "https://help.aisaas.com"
                },
                {
                  label: "Contact Support",
                  href: "contact"
                },
                {
                  label: "Status",
                  href: "https://status.aisaas.com"
                },
                {
                  label: "Community",
                  href: "https://community.aisaas.com"
                }
              ]
            },
            {
              items: [
                {
                  label: "Privacy Policy",
                  href: "privacy"
                },
                {
                  label: "Terms of Service",
                  href: "terms"
                },
                {
                  label: "Security",
                  href: "security"
                },
                {
                  label: "GDPR",
                  href: "gdpr"
                }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}