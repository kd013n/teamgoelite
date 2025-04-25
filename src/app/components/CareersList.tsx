import { Category, Description } from "../components/CareersTypes";
import SampleImage from "../../public/images/Home/HomeMissionBanner.jpg";
import {
  BuildingOfficeIcon,
  ChatBubbleLeftRightIcon,
  UsersIcon,
  UserPlusIcon,
} from "@heroicons/react/20/solid";

export const categories: Category[] = [
  {
    id: "faHiring",
    title: "Financial Advisers Hiring Program",
    icon: ChatBubbleLeftRightIcon,
  },
  {
    id: "abhHiring",
    title: "Associate Branch Head Hiring Program",
    icon: BuildingOfficeIcon,
  },
  { id: "mgHiring", title: "Manager Hiring Program", icon: UserPlusIcon },
  { id: "mgDev", title: "Manager Development Program", icon: UsersIcon },
];

export const descriptions: Description[] = [
  {
    id: 1,
    name: "Financial Advisers Hiring Program",
    value: "faHiring",
    overview:
      "AHP Program is a 12-36 months extensive advisor developmental training to prepare the candidate/s to become a highly productive financial advisors.",
    imageSrc: SampleImage,
    qualifications: [
      "Open to candidates with atleast 5 years sales experience in Retail Banking, Life Insurance sales experience or Bancassurance",
    ],
    category: { id: "faHiring", title: "Financial Advisers Hiring Program" },
  },
  {
    id: 2,
    name: "Associate Branch Head Hiring Program",
    value: "abhHiring",
    overview:
      "ABH Program is a 12 months extensive leadership training to prepare the candidate/s to become future Branch Head",
    imageSrc: SampleImage,
    qualifications: [
      "Good follower & obedient",
      "With atleast 3 years sales management experience in the life insurance industry",
      "Must have an existing sales team",
    ],
    keytasks: [
      "To recruit business partners as direct Unit Heads & Financial Advisors",
      "Undergo & finish all mandatory courses & trainings",
      "Monitor/track the daily activities of his/her direct team",
      "Reports directly to recruiting leader for mentoring",
    ],
    category: {
      id: "abhHiring",
      title: "Associate Branch Head Hiring Program",
    },
  },
  {
    id: 3,
    name: "Manager Hiring Program",
    value: "mgHiring",
    overview:
      "MHP Program is a 12 months extensive leadership training to prepare the candidate/s to become a regular Unit Head",
    imageSrc: SampleImage,
    qualifications: [
      "Good follower & obedient",
      "With atleast 3 years field sales & management experience from industries such as pharmaceutical, banking, healthcare, investment, real estate, travel, FMCG, etc.",
    ],
    keytasks: [
      "To recruit business partners as direct Financial Advisors",
      "Undergo & finish all mandatory courses & trainings",
      "Monitor/track the daily activities of his/her direct team",
      "Reports directly to recruiting leader for mentoring",
    ],
    category: { id: "mgHiring", title: "Manager Hiring Program" },
  },
  {
    id: 4,
    name: "Manager Development Program",
    value: "mgDev",
    overview:
      "Internal MDP Program is a 12 months extensive leadership training to prepare the candidate/s to become an appointed Unit Head.",
    imageSrc: SampleImage,
    qualifications: [
      "Good follower & obedient",
      "Open to existing Financial Advisors (organic)",
      "Must have recruited atleast 5 advisors prior to promotion to Unit Head",
    ],
    keytasks: [
      "To recruit direct Financial Advisors",
      "Finish all mandatory courses & trainings",
      "Monitor/track the daily activities of his/her direct team",
      "Reports directly to recruiting leader for mentoring",
    ],
    category: { id: "mgDev", title: "Manager Development Program" },
  },
];
