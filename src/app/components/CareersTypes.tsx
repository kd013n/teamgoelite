import { StaticImageData } from "next/image";

export interface Category {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface Description {
  id: number;
  name: string;
  value?: string;
  overview: string;
  imageSrc: StaticImageData;
  resource?: string;
  forms?: string;
  qualifications?: string[];
  keytasks?: string[];
  category?: { id: string; title: string };
}

export interface AppFormModalProps {
  isOpen: boolean;
  appForm: Description | null;
  onClose: () => void;
}

export enum ModalView {
  AppForm = "appForm",
  CareersInfo = "careersInfo",
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
  position: string;
  file: File | null;
}
