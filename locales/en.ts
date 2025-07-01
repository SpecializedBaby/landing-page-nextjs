export default {
  ads: {
    bannerText: "10-Year Warranty on All Roofs"
  },
  nav: {
    services: "Services",
    portfolio: "Portfolio",
    about: "About",
    contact: "Contact",
    getAQuote: "Get a Quote",
    languageSwitcherTitle: "Change language to {locale}" // Для title кнопки
  },
  hero: {
    mainHeadingPart1: "Flat Roofs",
    // mainHeadingPart2: "Built to Last.", // Для <span className="text-green-400">Built to Last.</span>
    subheading: "High-performance waterproof roofing solutions",
    ctaStartProject: "Start Your Project",
    ctaViewWork: "View Our Work"
  },
  servicesSection: {
    title: "Our Services",
    subheading: "Comprehensive flat roofing solutions for residential and commercial properties.",
    item1_title: "Waterproof Installation",
    item1_desc: "Premium waterproof membrane systems designed to protect your property for decades.",
    item2_title: "Fast Installation",
    item2_desc: "Efficient installation process that minimizes disruption to your daily operations.",
    item3_title: "24/7 Support",
    item3_desc: "Round-the-clock support and emergency services for your peace of mind."
  },
  portfolioSection: {
    title: "Our Portfolio",
    subheading: "Showcasing our expertise in flat roof installations across various property types.",
    projectTitle: "Project {number}", // Для Project 1, Project 2 и т.д.
    projectType: "Commercial Flat Roof"
  },
  aboutSection: {
    title: "Why Choose RoofTech?",
    description: "With over 15 years of experience in flat roof installation, we combine cutting-edge technology with time-tested techniques to deliver roofing solutions that exceed expectations.",
    point1: "10-year warranty on all installations",
    point2: "Licensed and insured professionals",
    point3: "Premium waterproof materials",
    point4: "Free quotes within 24 hours"
  },
  contactSection: {
    title: "Get Your Free Quote",
    subheading: "Ready to protect your property with a premium flat roof? Contact us today.",
    form: {
      namePlaceholder: "Your Name",
      phonePlaceholder: "Phone Number",
      emailPlaceholder: "Email Address",
      messagePlaceholder: "Tell us about your roofing project...",
      sendButton: "Send Message"
    }
  }
} as const;