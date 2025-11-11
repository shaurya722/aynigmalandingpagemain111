import { Users } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import CompanyPage from '../../components/CompanyPage';

export default function AboutUsPage() {
  const { t } = useTranslation()

  const aboutUsData = {
    title: t('aboutUs.title'),
    subtitle: t('aboutUs.subtitle'),
    badgeText: t('aboutUs.badgeText'),
    badgeIcon: Users,
    badgeIconColor: "text-blue-500",
    sections: [
      {
        title: t('aboutUs.whoWeAre.title'),
        content: t('aboutUs.whoWeAre.content')
      },
      {
        title: t('aboutUs.vision.title'),
        content: t('aboutUs.vision.content')
      },
      {
        title: t('aboutUs.coreValues.title'),
        items: [
          t('aboutUs.coreValues.items.0'),
          t('aboutUs.coreValues.items.1'),
          t('aboutUs.coreValues.items.2'),
          t('aboutUs.coreValues.items.3')
        ]
      },
      {
        title: t('aboutUs.differentiators.title'),
        items: [
          t('aboutUs.differentiators.items.0'),
          t('aboutUs.differentiators.items.1'),
          t('aboutUs.differentiators.items.2'),
          t('aboutUs.differentiators.items.3')
        ]
      }
    ],
    ctaTitle: t('aboutUs.ctaTitle'),
    ctaSubtitle: t('aboutUs.ctaSubtitle'),
    trustIndicators: [
      { text: t('aboutUs.trustIndicators.saudiFounded'), delay: 0 },
      { text: t('aboutUs.trustIndicators.vision2030'), delay: 0.5 },
      { text: t('aboutUs.trustIndicators.globalReach'), delay: 1 },
    ],
  };

  return <CompanyPage {...aboutUsData} />;
}
