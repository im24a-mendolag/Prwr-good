import { games } from '@/data/games'

interface ComparisonData {
  [key: string]: {
    [gameId: string]: string | string[]
  }
}

interface ComparisonTableProps {
  data: ComparisonData
  title: string
}

export default function ComparisonTable({ data, title }: ComparisonTableProps) {
  const gameNames = games.reduce((acc, game) => {
    acc[game.id] = game.name
    return acc
  }, {} as Record<string, string>)

  const categories = Object.keys(data)

  return (
    <div className="card mb-8">
      <h2 className="subsection-title mb-6">{title}</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b-2 border-gray-300 dark:border-gray-700">
              <th className="text-left p-4 font-semibold text-gray-800 dark:text-gray-200">Category</th>
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
                        <span className="text-sm">{value || 'N/A'}</span>
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




