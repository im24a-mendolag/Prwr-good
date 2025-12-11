'use client'

import { useContent } from '@/hooks/useContent'
import { ComparisonContent } from '@/content/types'

interface ComparisonTableProps {
  data: ComparisonContent['ranking'] | ComparisonContent['rewards'] | ComparisonContent['progression'] | ComparisonContent['behavior'] | ComparisonContent['ecosystem']
  title: string
}

export default function ComparisonTable({ data, title }: ComparisonTableProps) {
  const { content, lang } = useContent()
  const games = Object.values(content.games)
  const categories = Object.keys(data)
  const categoryLabel = lang === 'de' ? 'Kategorie' : 'Category'
  const notAvailable = lang === 'de' ? 'k. A.' : 'N/A'

  return (
    <div className="card mb-8">
      <h2 className="subsection-title mb-6">{title}</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b-2 border-gray-300 dark:border-gray-700">
              <th className="text-left p-4 font-semibold text-gray-800 dark:text-gray-200">{categoryLabel}</th>
              {games.map((game) => (
                <th
                  key={game.id}
                  className="text-left p-4 font-semibold text-gray-800 dark:text-gray-200"
                >
                  {game.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {categories.map((category, index) => (
              <tr
                key={category}
                className={`border-b border-gray-200 dark:border-gray-700 ${
                  index % 2 === 0 ? 'bg-gray-50 dark:bg-gray-800/50' : ''
                }`}
              >
                <td className="p-4 font-medium text-gray-700 dark:text-gray-300">
                  {category}
                </td>
                {games.map((game) => {
                  const value = data[category]?.[game.id]
                  return (
                    <td key={game.id} className="p-4 text-gray-600 dark:text-gray-400">
                      {Array.isArray(value) ? (
                        <ul className="list-disc list-inside space-y-1">
                          {value.map((item, idx) => (
                            <li key={idx} className="text-sm">{item}</li>
                          ))}
                        </ul>
                      ) : (
                        <span className="text-sm">{value || notAvailable}</span>
                      )}
                    </td>
                  )
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
