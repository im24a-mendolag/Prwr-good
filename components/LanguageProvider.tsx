'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { Language } from '@/content/types'
import { defaultLanguage } from '@/content'

interface LanguageContextValue {
  lang: Language
  setLang: (lang: Language) => void
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: defaultLanguage,
  setLang: () => {},
})

export default function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>(defaultLanguage)

  useEffect(() => {
    const stored = localStorage.getItem('site-lang') as Language | null
    if (stored) {
      setLangState(stored)
    }
  }, [])

  const setLang = (value: Language) => {
    setLangState(value)
    localStorage.setItem('site-lang', value)
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}


