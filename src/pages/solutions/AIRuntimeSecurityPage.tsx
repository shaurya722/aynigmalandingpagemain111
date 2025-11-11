import { Eye } from 'lucide-react';
import IndustryPage from '../../components/IndustryPage';
import { useTranslation } from 'react-i18next';

export default function AIRuntimeSecurityPage() {
    const { t } = useTranslation()
  const aiRuntimeSecurityData = {
   title: t('solutions.items.runtimeProtection.title'),
    subtitle: t('solutions.items.runtimeProtection.subtitle'),
    badgeText: t('solutions.items.runtimeProtection.badgeText'),
    badgeIcon: Eye,
    badgeIconColor: 'text-red-500',
    challengeContent: t('solutions.items.runtimeProtection.challengeContent'),
    solutionContent: t('solutions.items.runtimeProtection.solutionContent'),
    keyCapabilities: [
      {
        title: t('solutions.items.runtimeProtection.keyCapabilities.anomaly.title'),
        description: t('solutions.items.runtimeProtection.keyCapabilities.anomaly.description'),
        icon: Eye,
      },
      {
        title: t('solutions.items.runtimeProtection.keyCapabilities.shield.title'),
        description: t('solutions.items.runtimeProtection.keyCapabilities.shield.description'),
        icon: Eye,
      },
      {
        title: t('solutions.items.runtimeProtection.keyCapabilities.isolation.title'),
        description: t('solutions.items.runtimeProtection.keyCapabilities.isolation.description'),
        icon: Eye,
      },
      {
        title: t('solutions.items.runtimeProtection.keyCapabilities.soc.title'),
        description: t('solutions.items.runtimeProtection.keyCapabilities.soc.description'),
        icon: Eye,
      },
    ],
    businessOutcomes: [
      {
        title: t('solutions.items.runtimeProtection.businessOutcomes.prevention.title'),
        description: t('solutions.items.runtimeProtection.businessOutcomes.prevention.description'),
      },
      {
        title: t('solutions.items.runtimeProtection.businessOutcomes.compliance.title'),
        description: t('solutions.items.runtimeProtection.businessOutcomes.compliance.description'),
      },
      {
        title: t('solutions.items.runtimeProtection.businessOutcomes.trust.title'),
        description: t('solutions.items.runtimeProtection.businessOutcomes.trust.description'),
      },
      {
        title: t('solutions.items.runtimeProtection.businessOutcomes.response.title'),
        description: t('solutions.items.runtimeProtection.businessOutcomes.response.description'),
      },
    ],
    ctaTitle: t('solutions.items.runtimeProtection.ctaTitle'),
    ctaSubtitle: t('solutions.items.runtimeProtection.ctaSubtitle'),
    trustIndicators: [
      { text: t('solutions.items.runtimeProtection.trustIndicators.monitoring'), delay: 0 },
      { text: t('solutions.items.runtimeProtection.trustIndicators.soc'), delay: 0.5 },
      { text: t('solutions.items.runtimeProtection.trustIndicators.protection'), delay: 1 },
    ],
  };

  return <IndustryPage {...aiRuntimeSecurityData} />;
}
