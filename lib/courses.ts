export type Difficulty = "Beginner" | "Intermediate" | "Advanced";

export type CourseCategory = {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  courses: Course[];
};

export type Course = {
  title: string;
  description: string;
  difficulty: Difficulty;
  duration: string;
  lessons: number;
  outcome: string;
  status: "published" | "in-development";
};

export const categories: CourseCategory[] = [
  {
    id: "ai-automation",
    name: "Artificial Intelligence & Automation",
    description: "Master AI tools, chatbots, and workflow automation to deliver work faster and charge more.",
    icon: "AI",
    color: "#2563eb",
    courses: [
      { title: "AI Fundamentals and Productivity", description: "Understand AI basics and use AI tools to work faster and smarter.", difficulty: "Beginner", duration: "4 weeks", lessons: 18, outcome: "Use AI daily to boost productivity", status: "published" },
      { title: "Prompt Engineering for Work and Business", description: "Write prompts that get reliable, useful results from AI models.", difficulty: "Beginner", duration: "3 weeks", lessons: 14, outcome: "Craft effective prompts for any task", status: "published" },
      { title: "AI Tools for Students and Professionals", description: "Discover and use the best AI tools for your field.", difficulty: "Beginner", duration: "3 weeks", lessons: 12, outcome: "Build an AI-powered workflow", status: "published" },
      { title: "AI Chatbot Development", description: "Build conversational chatbots for websites and WhatsApp.", difficulty: "Intermediate", duration: "5 weeks", lessons: 20, outcome: "Deploy a working chatbot", status: "in-development" },
      { title: "WhatsApp Business Automation", description: "Automate customer communication on WhatsApp Business.", difficulty: "Intermediate", duration: "4 weeks", lessons: 16, outcome: "Automate WhatsApp replies", status: "in-development" },
      { title: "AI Agents and Workflow Automation", description: "Build AI agents that handle multi-step tasks autonomously.", difficulty: "Advanced", duration: "6 weeks", lessons: 24, outcome: "Build and deploy AI agents", status: "in-development" },
      { title: "No-Code Automation with Make and n8n", description: "Connect apps and automate workflows without writing code.", difficulty: "Intermediate", duration: "5 weeks", lessons: 22, outcome: "Build automated workflows", status: "in-development" },
      { title: "API Integration Fundamentals", description: "Connect services using APIs to build powerful automations.", difficulty: "Intermediate", duration: "4 weeks", lessons: 18, outcome: "Integrate third-party APIs", status: "in-development" },
      { title: "Building AI-Powered Business Solutions", description: "Create AI solutions that solve real business problems.", difficulty: "Advanced", duration: "6 weeks", lessons: 26, outcome: "Deliver AI solutions to clients", status: "in-development" },
      { title: "Responsible AI, Data Privacy and AI Safety", description: "Use AI ethically and protect user data.", difficulty: "Beginner", duration: "2 weeks", lessons: 10, outcome: "Apply responsible AI practices", status: "in-development" },
    ],
  },
  {
    id: "web-development",
    name: "Website Design & Development",
    description: "Learn to build and deploy websites, from HTML basics to full-stack Next.js applications.",
    icon: "WD",
    color: "#0ea5e9",
    courses: [
      { title: "HTML and CSS Fundamentals", description: "Build web pages with HTML and style them with CSS.", difficulty: "Beginner", duration: "4 weeks", lessons: 20, outcome: "Build a static website", status: "published" },
      { title: "JavaScript for Beginners", description: "Learn JavaScript to make websites interactive.", difficulty: "Beginner", duration: "5 weeks", lessons: 24, outcome: "Write interactive web apps", status: "published" },
      { title: "Responsive Web Design", description: "Make websites work on every screen size.", difficulty: "Beginner", duration: "3 weeks", lessons: 14, outcome: "Build mobile-friendly sites", status: "published" },
      { title: "WordPress Website Development", description: "Build professional websites with WordPress.", difficulty: "Beginner", duration: "4 weeks", lessons: 18, outcome: "Launch a WordPress site", status: "in-development" },
      { title: "React Fundamentals", description: "Build modern user interfaces with React.", difficulty: "Intermediate", duration: "6 weeks", lessons: 28, outcome: "Build React components", status: "in-development" },
      { title: "Next.js Fundamentals", description: "Build full-stack web apps with Next.js.", difficulty: "Intermediate", duration: "6 weeks", lessons: 26, outcome: "Deploy a Next.js app", status: "in-development" },
      { title: "Website Deployment and Hosting", description: "Deploy websites to the internet with confidence.", difficulty: "Beginner", duration: "2 weeks", lessons: 10, outcome: "Deploy live websites", status: "in-development" },
      { title: "Domains, DNS and Business Email", description: "Set up domains, DNS records and professional email.", difficulty: "Beginner", duration: "2 weeks", lessons: 8, outcome: "Configure domains and email", status: "in-development" },
      { title: "Website Maintenance and Client Handover", description: "Maintain sites and hand over to clients professionally.", difficulty: "Intermediate", duration: "3 weeks", lessons: 12, outcome: "Deliver sites to clients", status: "in-development" },
      { title: "Building Websites for Paying Clients", description: "Land and deliver website projects for real clients.", difficulty: "Intermediate", duration: "4 weeks", lessons: 16, outcome: "Land your first web client", status: "in-development" },
    ],
  },
  {
    id: "graphic-design",
    name: "Graphic Design & Branding",
    description: "Master visual design, branding, and create professional graphics for clients.",
    icon: "GD",
    color: "#ec4899",
    courses: [
      { title: "Canva Masterclass", description: "Design professional graphics using Canva.", difficulty: "Beginner", duration: "3 weeks", lessons: 16, outcome: "Create professional designs", status: "published" },
      { title: "Graphic Design Fundamentals", description: "Learn core design principles: layout, colour, typography.", difficulty: "Beginner", duration: "4 weeks", lessons: 18, outcome: "Design with purpose", status: "published" },
      { title: "Social Media Design", description: "Create engaging social media graphics and templates.", difficulty: "Beginner", duration: "3 weeks", lessons: 14, outcome: "Design social media content", status: "in-development" },
      { title: "Flyer and Poster Design", description: "Design print and digital flyers and posters.", difficulty: "Beginner", duration: "2 weeks", lessons: 10, outcome: "Design marketing materials", status: "in-development" },
      { title: "Logo and Brand Identity Fundamentals", description: "Create logos and brand identity systems.", difficulty: "Intermediate", duration: "4 weeks", lessons: 16, outcome: "Design brand identities", status: "in-development" },
      { title: "Presentation Design", description: "Design compelling presentations and slide decks.", difficulty: "Beginner", duration: "2 weeks", lessons: 10, outcome: "Create professional slides", status: "in-development" },
      { title: "Marketing Creative Design", description: "Design ads and marketing creatives that convert.", difficulty: "Intermediate", duration: "3 weeks", lessons: 14, outcome: "Design marketing creatives", status: "in-development" },
      { title: "Building a Professional Design Portfolio", description: "Showcase your design work to win clients.", difficulty: "Intermediate", duration: "3 weeks", lessons: 12, outcome: "Build a design portfolio", status: "in-development" },
    ],
  },
  {
    id: "video-editing",
    name: "Video Editing & Content Creation",
    description: "Edit videos, create short-form content, and produce content for clients.",
    icon: "VE",
    color: "#8b5cf6",
    courses: [
      { title: "CapCut Video Editing", description: "Edit videos professionally with CapCut.", difficulty: "Beginner", duration: "3 weeks", lessons: 16, outcome: "Edit videos with CapCut", status: "published" },
      { title: "Short-Form Video Production", description: "Produce short-form videos for social platforms.", difficulty: "Beginner", duration: "3 weeks", lessons: 14, outcome: "Produce short-form content", status: "published" },
      { title: "Reels, TikTok and YouTube Shorts", description: "Create platform-optimised short videos.", difficulty: "Beginner", duration: "2 weeks", lessons: 12, outcome: "Create platform content", status: "in-development" },
      { title: "Video Storytelling and Hooks", description: "Hook viewers and tell stories that retain attention.", difficulty: "Intermediate", duration: "3 weeks", lessons: 14, outcome: "Write video hooks", status: "in-development" },
      { title: "Captions, Subtitles and Audio", description: "Add captions, subtitles and clean audio to videos.", difficulty: "Beginner", duration: "2 weeks", lessons: 10, outcome: "Add captions and audio", status: "in-development" },
      { title: "AI-Assisted Content Creation", description: "Use AI to speed up content creation.", difficulty: "Beginner", duration: "2 weeks", lessons: 10, outcome: "Use AI for content", status: "in-development" },
      { title: "Content Repurposing", description: "Turn one piece of content into many formats.", difficulty: "Intermediate", duration: "2 weeks", lessons: 8, outcome: "Repurpose content", status: "in-development" },
      { title: "Video Editing for Business Clients", description: "Deliver video editing services to paying clients.", difficulty: "Intermediate", duration: "4 weeks", lessons: 16, outcome: "Land video clients", status: "in-development" },
    ],
  },
  {
    id: "digital-marketing",
    name: "Digital Marketing & Sales",
    description: "Learn to market, sell, and retain clients through digital channels.",
    icon: "DM",
    color: "#10b981",
    courses: [
      { title: "Social Media Management", description: "Manage social media accounts for businesses.", difficulty: "Beginner", duration: "4 weeks", lessons: 18, outcome: "Manage social accounts", status: "published" },
      { title: "Digital Marketing Fundamentals", description: "Understand the core of digital marketing.", difficulty: "Beginner", duration: "3 weeks", lessons: 14, outcome: "Plan digital campaigns", status: "published" },
      { title: "Copywriting for Sales", description: "Write copy that sells products and services.", difficulty: "Beginner", duration: "3 weeks", lessons: 14, outcome: "Write sales copy", status: "in-development" },
      { title: "Search Engine Optimisation", description: "Rank websites on search engines.", difficulty: "Intermediate", duration: "4 weeks", lessons: 18, outcome: "Optimise for search", status: "in-development" },
      { title: "Content Strategy and Planning", description: "Plan and execute a content strategy.", difficulty: "Intermediate", duration: "3 weeks", lessons: 14, outcome: "Build a content plan", status: "in-development" },
      { title: "Meta Advertising Fundamentals", description: "Run ads on Facebook and Instagram.", difficulty: "Intermediate", duration: "4 weeks", lessons: 16, outcome: "Run Meta ad campaigns", status: "in-development" },
      { title: "Lead Generation", description: "Generate leads for businesses.", difficulty: "Intermediate", duration: "3 weeks", lessons: 14, outcome: "Generate quality leads", status: "in-development" },
      { title: "Customer Acquisition Systems", description: "Build systems that acquire customers consistently.", difficulty: "Advanced", duration: "5 weeks", lessons: 20, outcome: "Build acquisition systems", status: "in-development" },
      { title: "Email Marketing", description: "Build and run email marketing campaigns.", difficulty: "Intermediate", duration: "3 weeks", lessons: 14, outcome: "Run email campaigns", status: "in-development" },
      { title: "Marketing Analytics and Reporting", description: "Measure and report marketing performance.", difficulty: "Intermediate", duration: "3 weeks", lessons: 14, outcome: "Report marketing metrics", status: "in-development" },
      { title: "Client Retention and Monthly Marketing Contracts", description: "Retain clients and secure recurring contracts.", difficulty: "Advanced", duration: "3 weeks", lessons: 12, outcome: "Secure recurring contracts", status: "in-development" },
    ],
  },
  {
    id: "freelancing",
    name: "Freelancing & Remote Work",
    description: "Learn to find legitimate online work, win clients, and build a freelance career.",
    icon: "FR",
    color: "#f59e0b",
    courses: [
      { title: "Choosing a Profitable Skill", description: "Pick a skill that pays and matches your strengths.", difficulty: "Beginner", duration: "1 week", lessons: 6, outcome: "Choose your skill", status: "published" },
      { title: "Creating a Freelance Profile", description: "Build profiles on Upwork, Fiverr and LinkedIn.", difficulty: "Beginner", duration: "2 weeks", lessons: 10, outcome: "Create winning profiles", status: "published" },
      { title: "Finding Legitimate Online Opportunities", description: "Find real remote jobs and freelance gigs.", difficulty: "Beginner", duration: "2 weeks", lessons: 10, outcome: "Find legitimate work", status: "published" },
      { title: "Writing Client Proposals", description: "Write proposals that win clients.", difficulty: "Beginner", duration: "2 weeks", lessons: 10, outcome: "Write winning proposals", status: "in-development" },
      { title: "Direct Client Outreach", description: "Reach out to clients directly and consistently.", difficulty: "Intermediate", duration: "3 weeks", lessons: 12, outcome: "Master cold outreach", status: "in-development" },
      { title: "Discovery Calls and Client Communication", description: "Run discovery calls and communicate professionally.", difficulty: "Intermediate", duration: "2 weeks", lessons: 10, outcome: "Run discovery calls", status: "in-development" },
      { title: "Pricing Services", description: "Price your services for profit.", difficulty: "Intermediate", duration: "2 weeks", lessons: 8, outcome: "Price your services", status: "in-development" },
      { title: "Negotiation and Handling Revisions", description: "Negotiate rates and manage revisions.", difficulty: "Intermediate", duration: "2 weeks", lessons: 8, outcome: "Negotiate confidently", status: "in-development" },
      { title: "Project Delivery and Client Retention", description: "Deliver on time and keep clients coming back.", difficulty: "Intermediate", duration: "2 weeks", lessons: 8, outcome: "Retain clients", status: "in-development" },
      { title: "Building a Freelance Portfolio", description: "Build a portfolio that wins work.", difficulty: "Beginner", duration: "3 weeks", lessons: 12, outcome: "Build a portfolio", status: "in-development" },
      { title: "Working with International Clients", description: "Work with clients across borders.", difficulty: "Intermediate", duration: "2 weeks", lessons: 8, outcome: "Work globally", status: "in-development" },
      { title: "Avoiding Freelance Scams", description: "Spot and avoid online scams.", difficulty: "Beginner", duration: "1 week", lessons: 6, outcome: "Avoid scams", status: "in-development" },
    ],
  },
  {
    id: "virtual-assistance",
    name: "Virtual Assistance & Business Support",
    description: "Learn to support businesses remotely with admin, research, and operations.",
    icon: "VA",
    color: "#06b6d4",
    courses: [
      { title: "Virtual Assistance Fundamentals", description: "Understand the VA role and how to get started.", difficulty: "Beginner", duration: "2 weeks", lessons: 10, outcome: "Start as a VA", status: "published" },
      { title: "Email and Calendar Management", description: "Manage inboxes and schedules for clients.", difficulty: "Beginner", duration: "2 weeks", lessons: 10, outcome: "Manage email and calendars", status: "in-development" },
      { title: "Online Research", description: "Conduct thorough online research.", difficulty: "Beginner", duration: "2 weeks", lessons: 8, outcome: "Research effectively", status: "in-development" },
      { title: "Spreadsheet and Document Management", description: "Organise data and documents professionally.", difficulty: "Beginner", duration: "2 weeks", lessons: 10, outcome: "Manage spreadsheets", status: "in-development" },
      { title: "Customer Support", description: "Provide excellent customer support remotely.", difficulty: "Beginner", duration: "2 weeks", lessons: 10, outcome: "Support customers", status: "in-development" },
      { title: "E-commerce Administration", description: "Manage e-commerce stores and orders.", difficulty: "Intermediate", duration: "3 weeks", lessons: 12, outcome: "Administer e-commerce", status: "in-development" },
      { title: "CRM Fundamentals", description: "Use CRM tools to manage client relationships.", difficulty: "Beginner", duration: "2 weeks", lessons: 8, outcome: "Use CRM tools", status: "in-development" },
      { title: "Remote Work Productivity", description: "Stay productive working remotely.", difficulty: "Beginner", duration: "1 week", lessons: 6, outcome: "Work productively", status: "in-development" },
      { title: "Professional Communication", description: "Communicate professionally in remote settings.", difficulty: "Beginner", duration: "2 weeks", lessons: 8, outcome: "Communicate professionally", status: "in-development" },
    ],
  },
  {
    id: "data-analytics",
    name: "Data Analytics & Programming",
    description: "Learn data analysis, SQL, Python, and build dashboards that tell stories.",
    icon: "DA",
    color: "#6366f1",
    courses: [
      { title: "Excel and Google Sheets", description: "Master spreadsheets for data work.", difficulty: "Beginner", duration: "3 weeks", lessons: 16, outcome: "Master spreadsheets", status: "published" },
      { title: "Data Cleaning and Visualisation", description: "Clean and visualise data effectively.", difficulty: "Beginner", duration: "3 weeks", lessons: 14, outcome: "Clean and visualise data", status: "in-development" },
      { title: "SQL Fundamentals", description: "Query databases with SQL.", difficulty: "Beginner", duration: "4 weeks", lessons: 18, outcome: "Query databases", status: "in-development" },
      { title: "Python Programming", description: "Learn Python from scratch.", difficulty: "Beginner", duration: "6 weeks", lessons: 28, outcome: "Write Python code", status: "in-development" },
      { title: "Data Analysis with Python", description: "Analyse data using Python libraries.", difficulty: "Intermediate", duration: "5 weeks", lessons: 22, outcome: "Analyse data with Python", status: "in-development" },
      { title: "Power BI or equivalent dashboard tools", description: "Build interactive dashboards.", difficulty: "Intermediate", duration: "4 weeks", lessons: 16, outcome: "Build dashboards", status: "in-development" },
      { title: "Basic Statistics for Data Analysis", description: "Apply statistics to data problems.", difficulty: "Intermediate", duration: "3 weeks", lessons: 14, outcome: "Apply statistics", status: "in-development" },
      { title: "Building a Data Analytics Portfolio", description: "Showcase data projects to win work.", difficulty: "Intermediate", duration: "3 weeks", lessons: 12, outcome: "Build a data portfolio", status: "in-development" },
    ],
  },
  {
    id: "ecommerce",
    name: "E-commerce & Digital Products",
    description: "Build online stores, sell digital products, and run e-commerce marketing.",
    icon: "EC",
    color: "#14b8a6",
    courses: [
      { title: "E-commerce Fundamentals", description: "Understand how e-commerce works.", difficulty: "Beginner", duration: "2 weeks", lessons: 10, outcome: "Understand e-commerce", status: "published" },
      { title: "Building an Online Store", description: "Build a store with Shopify or WooCommerce.", difficulty: "Beginner", duration: "4 weeks", lessons: 18, outcome: "Launch an online store", status: "in-development" },
      { title: "Product Listings and Catalogue Management", description: "Manage product listings effectively.", difficulty: "Beginner", duration: "2 weeks", lessons: 10, outcome: "Manage product catalogues", status: "in-development" },
      { title: "Product Research", description: "Find winning products to sell.", difficulty: "Intermediate", duration: "3 weeks", lessons: 12, outcome: "Research products", status: "in-development" },
      { title: "Order and Customer Management", description: "Handle orders and customer service.", difficulty: "Beginner", duration: "2 weeks", lessons: 10, outcome: "Manage orders", status: "in-development" },
      { title: "Digital Product Creation", description: "Create and sell digital products.", difficulty: "Beginner", duration: "3 weeks", lessons: 14, outcome: "Create digital products", status: "in-development" },
      { title: "Selling Templates and Downloads", description: "Sell templates and digital downloads.", difficulty: "Beginner", duration: "2 weeks", lessons: 10, outcome: "Sell digital downloads", status: "in-development" },
      { title: "Affiliate Marketing Fundamentals", description: "Earn through affiliate marketing.", difficulty: "Beginner", duration: "3 weeks", lessons: 12, outcome: "Start affiliate marketing", status: "in-development" },
      { title: "E-commerce Marketing", description: "Market your online store.", difficulty: "Intermediate", duration: "4 weeks", lessons: 16, outcome: "Market your store", status: "in-development" },
      { title: "Store Analytics and Optimisation", description: "Analyse and optimise store performance.", difficulty: "Intermediate", duration: "3 weeks", lessons: 12, outcome: "Optimise your store", status: "in-development" },
    ],
  },
  {
    id: "digital-education",
    name: "Online Tutoring & Digital Education",
    description: "Learn to teach online, create courses, and sell educational resources.",
    icon: "DE",
    color: "#a855f7",
    courses: [
      { title: "Online Tutoring Fundamentals", description: "Start tutoring students online.", difficulty: "Beginner", duration: "2 weeks", lessons: 10, outcome: "Start online tutoring", status: "published" },
      { title: "Preparing Digital Learning Materials", description: "Create effective learning materials.", difficulty: "Beginner", duration: "2 weeks", lessons: 10, outcome: "Create learning materials", status: "in-development" },
      { title: "Teaching Online", description: "Deliver engaging online lessons.", difficulty: "Beginner", duration: "2 weeks", lessons: 10, outcome: "Teach online effectively", status: "in-development" },
      { title: "Creating Educational Videos", description: "Produce educational video content.", difficulty: "Intermediate", duration: "3 weeks", lessons: 14, outcome: "Create educational videos", status: "in-development" },
      { title: "Course Creation", description: "Build and sell your own online course.", difficulty: "Intermediate", duration: "4 weeks", lessons: 16, outcome: "Create a course", status: "in-development" },
      { title: "Selling Educational Resources", description: "Sell worksheets, templates and resources.", difficulty: "Beginner", duration: "2 weeks", lessons: 10, outcome: "Sell educational resources", status: "in-development" },
      { title: "Student Communication and Learning Support", description: "Support students effectively.", difficulty: "Beginner", duration: "2 weeks", lessons: 8, outcome: "Support learners", status: "in-development" },
    ],
  },
  {
    id: "online-business",
    name: "Online Business & Entrepreneurship",
    description: "Build and scale a digital service business from scratch.",
    icon: "OB",
    color: "#ef4444",
    courses: [
      { title: "Starting a Digital Service Business", description: "Launch a digital service business.", difficulty: "Beginner", duration: "3 weeks", lessons: 14, outcome: "Start a business", status: "published" },
      { title: "Creating Service Packages", description: "Package your services for clients.", difficulty: "Beginner", duration: "2 weeks", lessons: 10, outcome: "Create service packages", status: "in-development" },
      { title: "Pricing and Profit Fundamentals", description: "Price for profit and sustainability.", difficulty: "Beginner", duration: "2 weeks", lessons: 10, outcome: "Price for profit", status: "in-development" },
      { title: "Business Branding", description: "Brand your business professionally.", difficulty: "Beginner", duration: "3 weeks", lessons: 12, outcome: "Brand your business", status: "in-development" },
      { title: "Sales Funnels", description: "Build funnels that convert.", difficulty: "Intermediate", duration: "3 weeks", lessons: 14, outcome: "Build sales funnels", status: "in-development" },
      { title: "Client Onboarding", description: "Onboard clients smoothly.", difficulty: "Beginner", duration: "2 weeks", lessons: 8, outcome: "Onboard clients", status: "in-development" },
      { title: "Invoicing and Record Keeping", description: "Invoice and keep financial records.", difficulty: "Beginner", duration: "2 weeks", lessons: 8, outcome: "Invoice and track", status: "in-development" },
      { title: "Building Recurring Revenue", description: "Create recurring revenue streams.", difficulty: "Intermediate", duration: "3 weeks", lessons: 12, outcome: "Build recurring revenue", status: "in-development" },
      { title: "Customer Relationship Management", description: "Manage customer relationships.", difficulty: "Intermediate", duration: "3 weeks", lessons: 12, outcome: "Manage customers", status: "in-development" },
      { title: "Scaling a Digital Service Business", description: "Scale your business sustainably.", difficulty: "Advanced", duration: "4 weeks", lessons: 16, outcome: "Scale your business", status: "in-development" },
    ],
  },
  {
    id: "career-readiness",
    name: "Career Readiness & Professional Development",
    description: "Prepare for jobs, interviews, and professional growth.",
    icon: "CR",
    color: "#64748b",
    courses: [
      { title: "CV and Cover Letter Development", description: "Write CVs and cover letters that get interviews.", difficulty: "Beginner", duration: "2 weeks", lessons: 10, outcome: "Write a strong CV", status: "published" },
      { title: "LinkedIn and Professional Profiles", description: "Optimise your LinkedIn profile.", difficulty: "Beginner", duration: "2 weeks", lessons: 8, outcome: "Optimise LinkedIn", status: "published" },
      { title: "Interview Preparation", description: "Prepare for job interviews.", difficulty: "Beginner", duration: "2 weeks", lessons: 10, outcome: "Ace interviews", status: "in-development" },
      { title: "Workplace Communication", description: "Communicate effectively at work.", difficulty: "Beginner", duration: "2 weeks", lessons: 8, outcome: "Communicate professionally", status: "in-development" },
      { title: "Digital Portfolio Development", description: "Build a digital portfolio.", difficulty: "Beginner", duration: "3 weeks", lessons: 12, outcome: "Build a portfolio", status: "in-development" },
      { title: "Professional Ethics", description: "Understand professional ethics.", difficulty: "Beginner", duration: "1 week", lessons: 6, outcome: "Apply professional ethics", status: "in-development" },
      { title: "Time Management", description: "Manage your time effectively.", difficulty: "Beginner", duration: "1 week", lessons: 6, outcome: "Manage time", status: "in-development" },
      { title: "Personal Finance for Freelancers", description: "Manage your freelance finances.", difficulty: "Beginner", duration: "2 weeks", lessons: 10, outcome: "Manage finances", status: "in-development" },
      { title: "Client Project Management", description: "Manage client projects end to end.", difficulty: "Intermediate", duration: "3 weeks", lessons: 12, outcome: "Manage projects", status: "in-development" },
    ],
  },
];

export const totalCourses = categories.reduce((sum, c) => sum + c.courses.length, 0);
export const publishedCourses = categories.reduce((sum, c) => sum + c.courses.filter((x) => x.status === "published").length, 0);
