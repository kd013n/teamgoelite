import { StaticImageData } from "next/image";

export interface Category {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface Product {
  id: number;
  name: string;
  imageSrc: StaticImageData;
  category: { id: string; title: string };
  description: string;
  href: string;
}

export enum ModalView {
  ProductInfo = "productInfo",
  Description = "description",
  Form = "form",
  Confirmation = "confirmation",
}

export interface FormData {
  lastName: string;
  firstName: string;
  middleInitial: string;
  suffix: string;
  sex: string;
  contactNumber: string;
  email: string;
  productAvailed: string;
}
