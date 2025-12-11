'use client'

import { getContent } from '@/content'
import { useLanguage } from '@/components/LanguageProvider'

export function useContent() {
  const { lang } = useLanguage()
  return { content: getContent(lang), lang }
}


