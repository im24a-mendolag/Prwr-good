import { enContent } from './en'
import { deContent } from './de'
import { Language, SiteContent } from './types'

export const contents: Record<Language, SiteContent> = {
  en: enContent,
  de: deContent,
}

export const defaultLanguage: Language = 'en'

export function getContent(lang: Language): SiteContent {
  return contents[lang] ?? contents[defaultLanguage]
}


