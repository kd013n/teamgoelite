import { Category, Product } from "./ProductsTypes";
import SampleImage from "../../public/images/Home/HomeMissionBanner.jpg";
import {
  HeartIcon,
  CreditCardIcon,
  AcademicCapIcon,
  HomeIcon,
  BanknotesIcon,
  PlusCircleIcon,
  Squares2X2Icon,
  GlobeAsiaAustraliaIcon,
} from "@heroicons/react/20/solid";

export const categories: Category[] = [
  { id: "all", title: "All Products", icon: Squares2X2Icon },
  { id: "health", title: "Health and Critical Illness", icon: HeartIcon },
  { id: "income", title: "Income Protection", icon: CreditCardIcon },
  { id: "education", title: "Education", icon: AcademicCapIcon },
  { id: "retirement", title: "Retirement", icon: HomeIcon },
  { id: "savings", title: "Savings and Investment", icon: BanknotesIcon },
  { id: "travel", title: "Travel Insurance", icon: GlobeAsiaAustraliaIcon },
  { id: "general", title: "General Insurance", icon: PlusCircleIcon },
];

export const products: Product[] = [
  {
    id: 1,
    name: "Global Health Access",
    imageSrc: SampleImage,
    category: { id: "health", title: "Health and Critical Illness" },
    description:
      "Comprehensive worldwide health insurance offering up to &#8369;175 million coverage for various medical needs, ensuring peace of mind globally.",
    href: "#",
  },
  {
    id: 2,
    name: "Health Care Access",
    imageSrc: SampleImage,
    category: { id: "health", title: "Health and Critical Illness" },
    description:
      "Affordable health plan covering hospitalization and emergencies up to ₱ 5 million, tailored to fit personal health and financial needs.",
    href: "#",
  },
  {
    id: 3,
    name: "Health Max",
    imageSrc: SampleImage,
    category: { id: "health", title: "Health and Critical Illness" },
    description:
      "Extensive health insurance providing high coverage for critical illnesses and hospitalization, ensuring quality medical care when needed most.",
    href: "#",
  },
  {
    id: 4,
    name: "Health Max Elite",
    imageSrc: SampleImage,
    category: { id: "health", title: "Health and Critical Illness" },
    description:
      "Premium health insurance plan with enhanced benefits, covering extensive medical expenses and critical illnesses for comprehensive healthcare protection.",
    href: "#",
  },
  {
    id: 5,
    name: "Health Start",
    imageSrc: SampleImage,
    category: { id: "health", title: "Health and Critical Illness" },
    description:
      "Basic health insurance plan designed for young individuals, offering essential coverage for hospitalization and outpatient services at affordable rates.",
    href: "#",
  },
  {
    id: 6,
    name: "Health Start Lite",
    imageSrc: SampleImage,
    category: { id: "health", title: "Health and Critical Illness" },
    description:
      "Entry-level health plan providing essential medical coverage, ideal for those seeking budget-friendly options without compromising on healthcare access.",
    href: "#",
  },
  {
    id: 7,
    name: "My Life Choice Health",
    imageSrc: SampleImage,
    category: { id: "health", title: "Health and Critical Illness" },
    description:
      "Flexible health insurance allowing customization of coverage options, ensuring tailored healthcare solutions that meet individual and family needs.",
    href: "#",
  },
  {
    id: 8,
    name: "My Life Choice Protect",
    imageSrc: SampleImage,
    category: { id: "income", title: "Income Protection" },
    description:
      "Income protection plan offering financial security during critical illness or disability, ensuring continued support for families during challenging times.",
    href: "#",
  },
  {
    id: 9,
    name: "FlexiProtect",
    imageSrc: SampleImage,
    category: { id: "income", title: "Income Protection" },
    description:
      "Versatile income protection insurance providing financial assistance during unforeseen circumstances, allowing policyholders to maintain their lifestyle and obligations.",
    href: "#",
  },
  {
    id: 10,
    name: "Assure",
    imageSrc: SampleImage,
    category: { id: "income", title: "Income Protection" },
    description:
      "Income protection plan designed to safeguard against loss of income due to illness or injury, providing financial stability during recovery.",
    href: "#",
  },
  {
    id: 11,
    name: "My Life Choice Education",
    imageSrc: SampleImage,
    category: { id: "education", title: "Education" },
    description:
      "Education savings plan ensuring funds are available for children’s education, supporting their future academic endeavors with guaranteed returns.",
    href: "#",
  },
  {
    id: 12,
    name: "My Life Choice Retirement",
    imageSrc: SampleImage,
    category: { id: "retirement", title: "Retirement" },
    description:
      "Retirement savings plan designed to help individuals build a secure financial future, ensuring a comfortable lifestyle post-retirement through investments.",
    href: "#",
  },
  {
    id: 13,
    name: "My Life Choice",
    imageSrc: SampleImage,
    category: { id: "savings", title: "Savings and Investment" },
    description:
      "Flexible savings plan allowing individuals to save towards various goals, offering competitive interest rates and easy access to funds.",
    href: "#",
  },
  {
    id: 14,
    name: "Goal Getter",
    imageSrc: SampleImage,
    category: { id: "savings", title: "Savings and Investment" },
    description:
      "Targeted savings plan designed to help achieve specific financial goals through disciplined saving and attractive interest rates over time.",
    href: "#",
  },
  {
    id: 15,
    name: "Asset Protect",
    imageSrc: SampleImage,
    category: { id: "savings", title: "Savings and Investment" },
    description:
      "Savings plan focused on asset preservation, providing a secure way to grow wealth while safeguarding against unforeseen financial challenges.",
    href: "#",
  },
  {
    id: 16,
    name: "Asset Master",
    imageSrc: SampleImage,
    category: { id: "savings", title: "Savings and Investment" },
    description:
      "Comprehensive savings solution combining investment growth with risk management, helping individuals build wealth while protecting their financial assets.",
    href: "#",
  },
  {
    id: 17,
    name: "AXA Secure Future",
    imageSrc: SampleImage,
    category: { id: "savings", title: "Savings and Investment" },
    description:
      "Long-term savings plan aimed at securing financial independence through disciplined saving and investment strategies for future needs and goals.",
    href: "#",
  },
  {
    id: 18,
    name: "Travel Insurance",
    imageSrc: SampleImage,
    category: { id: "travel", title: "Travel Insurance" },
    description:
      "Comprehensive travel insurance covering medical emergencies, trip cancellations, and lost belongings, ensuring peace of mind while traveling abroad.",
    href: "#",
  },
  {
    id: 19,
    name: "Car Insurance",
    imageSrc: SampleImage,
    category: { id: "general", title: "General Insurance" },
    description:
      "Comprehensive car insurance offering protection against accidents, theft, and third-party liabilities, ensuring drivers are safeguarded on the road.",
    href: "#",
  },
  {
    id: 20,
    name: "Home Insurance",
    imageSrc: SampleImage,
    category: { id: "general", title: "General Insurance" },
    description:
      "Home insurance providing coverage against property damage, theft, and natural disasters, protecting homeowners&#39; investments and personal belongings effectively.",
    href: "#",
  },
  {
    id: 21,
    name: "Commercial Property",
    imageSrc: SampleImage,
    category: { id: "general", title: "General Insurance" },
    description:
      "Insurance designed for businesses covering property damage and liability risks, ensuring commercial properties are protected against unforeseen events.",
    href: "#",
  },
  {
    id: 22,
    name: "Liability and Other Casualty",
    imageSrc: SampleImage,
    category: { id: "general", title: "General Insurance" },
    description:
      "Liability insurance protecting against legal claims due to injuries or damages caused by policyholders, safeguarding personal and business assets.",
    href: "#",
  },
  {
    id: 23,
    name: "Marine",
    imageSrc: SampleImage,
    category: { id: "general", title: "General Insurance" },
    description:
      "Marine insurance covering cargo loss or damage during transit over water, ensuring businesses are protected from maritime risks effectively.",
    href: "#",
  },
  {
    id: 24,
    name: "Engineer",
    imageSrc: SampleImage,
    category: { id: "general", title: "General Insurance" },
    description:
      "Specialized insurance for engineering projects covering risks associated with construction and design errors, protecting professionals from potential liabilities.",
    href: "#",
  },
  {
    id: 25,
    name: "Surety (Bonds)",
    imageSrc: SampleImage,
    category: { id: "general", title: "General Insurance" },
    description:
      "Surety bonds providing financial guarantees for contractual obligations, ensuring compliance with project requirements and protecting against defaults.",
    href: "#",
  },
  {
    id: 26,
    name: "SME",
    imageSrc: SampleImage,
    category: { id: "general", title: "General Insurance" },
    description:
      "Insurance tailored for small and medium enterprises covering various business risks including property damage and liability claims comprehensively.",
    href: "#",
  },
  {
    id: 27,
    name: "SMEX",
    imageSrc: SampleImage,
    category: { id: "general", title: "General Insurance" },
    description:
      "Insurance solution designed specifically for micro-enterprises offering essential coverage options to protect small businesses from unforeseen risks.",
    href: "#",
  },
];
