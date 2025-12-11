'use client'

import { useContent } from '@/hooks/useContent'
import { useLanguage } from './LanguageProvider'

export default function LanguageToggle() {
  const { lang, setLang } = useLanguage()
  const { content } = useContent()

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-gray-600 dark:text-gray-300 hidden sm:inline">
        {content.nav.brand}
      </span>
      <div className="flex items-center rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
        <button
          className={`px-3 py-1 text-sm font-medium ${
            lang === 'en'
              ? 'bg-blue-600 text-white dark:bg-blue-500'
              : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
          }`}
          onClick={() => setLang('en')}
        >
          EN
        </button>
        <button
          className={`px-3 py-1 text-sm font-medium ${
            lang === 'de'
              ? 'bg-blue-600 text-white dark:bg-blue-500'
              : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
          }`}
          onClick={() => setLang('de')}
        >
          DE
        </button>
      </div>
    </div>
  )
}


