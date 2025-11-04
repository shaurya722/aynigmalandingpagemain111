import { GraduationCap } from 'lucide-react';
import IndustryPage from '../components/IndustryPage';

export default function EducationPage() {
  const educationData = {
    title: "Securing the Future of Digital Learning",
    subtitle: "Comprehensive protection for student data, learning platforms, and AI-powered education systems.",
    badgeText: "Education Security",
    badgeIcon: GraduationCap,
    badgeIconColor: "text-teal-400",
    challengeContent: "Schools and universities are rapidly digitizing — adopting AI tutors, LMS platforms, and online exams. These systems store sensitive student data and are prime targets for breaches or manipulation.",
    solutionContent: "Aynigma provides cybersecurity and AI protection tailored for education institutions. We secure learning management systems, AI-powered tools, and institutional data in compliance with PDPL and national education IT standards.",
    keyCapabilities: [
      {
        title: "Data Encryption",
        description: "Student and faculty data encryption and access controls",
        icon: GraduationCap,
      },
      {
        title: "AI Integrity Checks",
        description: "AI system integrity checks for education tools",
        icon: GraduationCap,
      },
      {
        title: "Platform Monitoring",
        description: "Continuous monitoring of LMS and e-learning platforms",
        icon: GraduationCap,
      },
      {
        title: "Security Training",
        description: "Phishing and awareness training for staff and students",
        icon: GraduationCap,
      },
    ],
    businessOutcomes: [
      {
        title: "Privacy Safeguarding",
        description: "Safeguard student privacy and institutional reputation",
      },
      {
        title: "Learning Continuity",
        description: "Maintain continuity of digital learning and exams",
      },
      {
        title: "Responsible AI",
        description: "Promote responsible AI use in academic environments",
      },
      {
        title: "Standards Compliance",
        description: "Meet data protection and Ministry of Education standards",
      },
    ],
    ctaTitle: "Secure your learning ecosystem.",
    ctaSubtitle: "Empower digital education with Aynigma's protection.",
    trustIndicators: [
      { text: "Student Privacy", delay: 0 },
      { text: "PDPL Compliant", delay: 0.5 },
      { text: "AI Secure", delay: 1 },
    ],
  };

  return <IndustryPage {...educationData} />;
}
