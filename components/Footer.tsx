'use client'

import { useContent } from '@/hooks/useContent'

export default function Footer() {
  const { content } = useContent()

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-16">
      <div className="container-custom py-8">
        <div className="text-center text-gray-600 dark:text-gray-400">
          <p className="mb-2">
            {content.footer.line1}
          </p>
          <p className="text-sm">
            {content.footer.line2}
          </p>
        </div>
      </div>
    </footer>
  )
}
