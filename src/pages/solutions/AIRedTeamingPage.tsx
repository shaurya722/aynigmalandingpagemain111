import { Shield } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import IndustryPage from '../../components/IndustryPage';

export default function AIRedTeamingPage() {
    const { t } = useTranslation()

  const aiRedTeamingData = {
    title: t('solutions.items.redTeaming.title'),
    subtitle: t('solutions.items.redTeaming.subtitle'),
    badgeText: t('solutions.items.redTeaming.badgeText'),
    badgeIcon: Shield,
    badgeIconColor: 'text-red-500',
    challengeContent: t('solutions.items.redTeaming.challengeContent'),
    solutionContent: t('solutions.items.redTeaming.solutionContent'),
    keyCapabilities: [
      {
        title: t('solutions.items.redTeaming.keyCapabilities.attacks.title'),
        description: t('solutions.items.redTeaming.keyCapabilities.attacks.description'),
        icon: Shield,
      },
      {
        title: t('solutions.items.redTeaming.keyCapabilities.probes.title'),
        description: t('solutions.items.redTeaming.keyCapabilities.probes.description'),
        icon: Shield,
      },
      {
        title: t('solutions.items.redTeaming.keyCapabilities.scoring.title'),
        description: t('solutions.items.redTeaming.keyCapabilities.scoring.description'),
        icon: Shield,
      },
      {
        title: t('solutions.items.redTeaming.keyCapabilities.sandbox.title'),
        description: t('solutions.items.redTeaming.keyCapabilities.sandbox.description'),
        icon: Shield,
      },
    ],
    businessOutcomes: [
      {
        title: t('solutions.items.redTeaming.businessOutcomes.vulnerability.title'),
        description: t('solutions.items.redTeaming.businessOutcomes.vulnerability.description'),
      },
      {
        title: t('solutions.items.redTeaming.businessOutcomes.trust.title'),
        description: t('solutions.items.redTeaming.businessOutcomes.trust.description'),
      },
      {
        title: t('solutions.items.redTeaming.businessOutcomes.regulatory.title'),
        description: t('solutions.items.redTeaming.businessOutcomes.regulatory.description'),
      },
      {
        title: t('solutions.items.redTeaming.businessOutcomes.cost.title'),
        description: t('solutions.items.redTeaming.businessOutcomes.cost.description'),
      },
    ],
    ctaTitle: t('solutions.items.redTeaming.ctaTitle'),
    ctaSubtitle: t('solutions.items.redTeaming.ctaSubtitle'),
    trustIndicators: [
      { text: t('solutions.items.redTeaming.trustIndicators.owasp'), delay: 0 },
      { text: t('solutions.items.redTeaming.trustIndicators.nca'), delay: 0.5 },
      { text: t('solutions.items.redTeaming.trustIndicators.safe'), delay: 1 },
    ],
  };

  return <IndustryPage {...aiRedTeamingData} />;
}
