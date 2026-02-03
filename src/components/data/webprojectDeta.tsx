import medical from "@/assets/img/web_project/medical.jpg";
import vegetable from "@/assets/img/web_project/vagitable.jpg";
import realestate from "@/assets/img/web_project/realstated.jpg";
import shopping from "@/assets/img/web_project/shoping.jpg";
import ecommerce from "@/assets/img/web_project/ecommarce.jpg";
import education from "@/assets/img/web_project/education.jpg";

export const webProjects = [
  {
    id: "feryala-fashion",
    name: "Feryala Fashion Ecommerce",
    image: ecommerce,
    category: "E-Commerce",
    startDate: "January 2024",
    endDate: "March 2024",
    status: "Live",
    website: "https://feryalafashion.com",
    description:
      "A modern fashion ecommerce platform designed for high performance, smooth checkout, and conversion-focused user experience.",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Stripe Payment",
      "Tailwind CSS",
    ],
    facilities: [
      "Custom UI/UX Design",
      "Product & Order Management",
      "Secure Payment Integration",
      "Admin Dashboard",
      "Performance Optimization",
    ],
  },

  {
    id: "premium-city",
    name: "Premium City Real Estate Portal",
    image: realestate,
    category: "Real Estate",
    startDate: "October 2023",
    endDate: "December 2023",
    status: "Live",
    website: "https://premiumcitybd.com",
    description:
      "A professional real estate portal for showcasing properties, managing agents, and generating quality leads.",
    technologies: [
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "Tailwind CSS",
      "Google Maps API",
    ],
    facilities: [
      "Property Listing System",
      "Agent Management",
      "Lead & Inquiry System",
      "SEO Optimization",
      "Admin Panel",
    ],
  },

  {
    id: "bonoful-medical",
    name: "Bonoful Medical & Healthcare Website",
    image: medical,
    category: "Medical",
    startDate: "August 2023",
    endDate: "September 2023",
    status: "Live",
    website: "https://bonofulmedical.com",
    description:
      "A healthcare-focused website designed for clinics and medical service providers to present services and build trust.",
    technologies: [
      "React",
      "Laravel",
      "MySQL",
      "Tailwind CSS",
    ],
    facilities: [
      "Medical Service Pages",
      "Doctor Profiles",
      "Appointment Request Form",
      "Mobile Responsive Design",
      "Fast & Secure Hosting Setup",
    ],
  },

  {
    id: "green-farm",
    name: "Green Farm Agro & Vegetable Platform",
    image: vegetable,
    category: "Agriculture",
    startDate: "May 2023",
    endDate: "July 2023",
    status: "Live",
    website: "https://greenfarmbd.com",
    description:
      "An agriculture-focused platform for showcasing fresh vegetables, farming services, and supplier information.",
    technologies: [
      "Vue.js",
      "Node.js",
      "MongoDB",
      "Tailwind CSS",
    ],
    facilities: [
      "Product Showcase",
      "Supplier Information Pages",
      "Order Inquiry System",
      "Mobile Optimization",
      "Admin Management Panel",
    ],
  },

  {
    id: "macherhat-marketplace",
    name: "Macherhat Online Shopping Marketplace",
    image: shopping,
    category: "Online Marketplace",
    startDate: "February 2024",
    endDate: "April 2024",
    status: "Live",
    website: "https://macherhat.com",
    description:
      "A multi-vendor online shopping platform enabling vendors to sell products and customers to shop easily.",
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "JWT Authentication",
      "Stripe",
    ],
    facilities: [
      "Multi-Vendor System",
      "Shopping Cart & Checkout",
      "Order & Delivery Tracking",
      "Vendor Dashboard",
      "Admin Control Panel",
    ],
  },

  {
    id: "smart-education",
    name: "Smart Education & Learning Platform",
    image: education,
    category: "Education",
    startDate: "June 2023",
    endDate: "August 2023",
    status: "Live",
    website: "https://smarteduplatform.com",
    description:
      "An online education platform for institutions to manage courses, students, and digital learning content.",
    technologies: [
      "Next.js",
      "Node.js",
      "MongoDB",
      "Video Streaming API",
    ],
    facilities: [
      "Course Management System",
      "Student Registration",
      "Online Learning Resources",
      "Teacher Dashboard",
      "Admin Analytics Panel",
    ],
  },
];
