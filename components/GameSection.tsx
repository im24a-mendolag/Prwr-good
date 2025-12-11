'use client'

import { useLanguage } from './LanguageProvider'

interface GameSectionProps {
  title: string
  description: string
  children?: React.ReactNode
  items?: Array<{
    name: string
    description: string
    examples?: string[]
    features?: string[]
    consequences?: string[]
    rewards?: string[]
    impact?: string[]
  }>
  details?: string[]
  tiers?: string[]
}

export default function GameSection({ 
  title, 
  description, 
  children,
  items,
  details,
  tiers 
}: GameSectionProps) {
  const { lang } = useLanguage()
  const labels = lang === 'de'
    ? {
        tiers: 'Ränge/Stufen:',
        details: 'Wichtige Details:',
        examples: 'Beispiele:',
        features: 'Merkmale:',
        rewards: 'Belohnungen:',
        consequences: 'Folgen:',
        impact: 'Auswirkungen:',
      }
    : {
        tiers: 'Ranks/Tiers:',
        details: 'Key Details:',
        examples: 'Examples:',
        features: 'Features:',
        rewards: 'Rewards:',
        consequences: 'Consequences:',
        impact: 'Impact:',
      }

  return (
    <section className="mb-12">
      <h2 className="subsection-title">{title}</h2>
      <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg">{description}</p>
      
      {tiers && (
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">{labels.tiers}</h3>
          <div className="flex flex-wrap gap-2">
            {tiers.map((tier, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
              >
                {tier}
              </span>
            ))}
          </div>
        </div>
      )}

      {details && (
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">{labels.details}</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            {details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        </div>
      )}

      {items && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item, index) => (
            <div key={index} className="card">
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
                {item.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-3">{item.description}</p>
              
              {item.examples && (
                <div>
                  <h4 className="font-semibold mb-2 text-gray-700 dark:text-gray-300">{labels.examples}</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400">
                    {item.examples.map((example, idx) => (
                      <li key={idx}>{example}</li>
                    ))}
                  </ul>
                </div>
              )}

              {item.features && (
                <div className="mt-3">
                  <h4 className="font-semibold mb-2 text-gray-700 dark:text-gray-300">{labels.features}</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400">
                    {item.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}

              {item.rewards && (
                <div className="mt-3">
                  <h4 className="font-semibold mb-2 text-gray-700 dark:text-gray-300">{labels.rewards}</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400">
                    {item.rewards.map((reward, idx) => (
                      <li key={idx}>{reward}</li>
                    ))}
                  </ul>
                </div>
              )}

              {item.consequences && (
                <div className="mt-3">
                  <h4 className="font-semibold mb-2 text-gray-700 dark:text-gray-300">{labels.consequences}</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400">
                    {item.consequences.map((consequence, idx) => (
                      <li key={idx}>{consequence}</li>
                    ))}
                  </ul>
                </div>
              )}

              {item.impact && (
                <div className="mt-3">
                  <h4 className="font-semibold mb-2 text-gray-700 dark:text-gray-300">{labels.impact}</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400">
                    {item.impact.map((impactItem, idx) => (
                      <li key={idx}>{impactItem}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {children}
    </section>
  )
}




