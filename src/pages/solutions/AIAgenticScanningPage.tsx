import { Bot } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import IndustryPage from '../../components/IndustryPage'

export default function AIAgenticScanningPage() {
  const { t } = useTranslation()

  const aiAgenticScanningData = {
    title: t('solutions.items.agenticSecurity.title'),
    subtitle: t('solutions.items.agenticSecurity.subtitle'),
    badgeText: t('solutions.items.agenticSecurity.badgeText'),
    badgeIcon: Bot,
    badgeIconColor: 'text-indigo-400',
    challengeContent: t('solutions.items.agenticSecurity.challengeContent'),
    solutionContent: t('solutions.items.agenticSecurity.solutionContent'),
    keyCapabilities: [
      {
        title: t('solutions.items.agenticSecurity.keyCapabilities.policy.title'),
        description: t('solutions.items.agenticSecurity.keyCapabilities.policy.description'),
        icon: Bot,
      },
      {
        title: t('solutions.items.agenticSecurity.keyCapabilities.scanning.title'),
        description: t('solutions.items.agenticSecurity.keyCapabilities.scanning.description'),
        icon: Bot,
      },
      {
        title: t('solutions.items.agenticSecurity.keyCapabilities.decision.title'),
        description: t('solutions.items.agenticSecurity.keyCapabilities.decision.description'),
        icon: Bot,
      },
      {
        title: t('solutions.items.agenticSecurity.keyCapabilities.compatibility.title'),
        description: t('solutions.items.agenticSecurity.keyCapabilities.compatibility.description'),
        icon: Bot,
      },
    ],
    businessOutcomes: [
      {
        title: t('solutions.items.agenticSecurity.businessOutcomes.safe.title'),
        description: t('solutions.items.agenticSecurity.businessOutcomes.safe.description'),
      },
      {
        title: t('solutions.items.agenticSecurity.businessOutcomes.regulatory.title'),
        description: t('solutions.items.agenticSecurity.businessOutcomes.regulatory.description'),
      },
      {
        title: t('solutions.items.agenticSecurity.businessOutcomes.secure.title'),
        description: t('solutions.items.agenticSecurity.businessOutcomes.secure.description'),
      },
      {
        title: t('solutions.items.agenticSecurity.businessOutcomes.trust.title'),
        description: t('solutions.items.agenticSecurity.businessOutcomes.trust.description'),
      },
    ],
    ctaTitle: t('solutions.items.agenticSecurity.ctaTitle'),
    ctaSubtitle: t('solutions.items.agenticSecurity.ctaSubtitle'),
    trustIndicators: [
      { text: 'Multi-Agent Secure', delay: 0 },
      { text: 'Framework Compatible', delay: 0.5 },
      { text: 'Real-Time Monitoring', delay: 1 },
    ],
  }

  return <IndustryPage {...aiAgenticScanningData} />
}
