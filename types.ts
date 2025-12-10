import { LucideIcon } from 'lucide-react';

export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface CaseStudy {
  client: string;
  title: string;
  description: string;
  result: string;
  tags: string[];
  imagePlaceholder: string;
  accentColor: string;
}

export interface NavItem {
  label: string;
  href: string;
}