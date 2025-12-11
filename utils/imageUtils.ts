/**
 * Converts an item name to an image path
 * Example: "Ranked Rewards" -> "/assets/images/ranked-rewards.jpg"
 */
export function getImagePathFromName(itemName: string, gamePrefix: string = '', extension: string = 'jpg'): string {
  // Convert to lowercase, replace spaces and special chars with hyphens
  const normalized = itemName
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-') // Replace non-alphanumeric with hyphens
    .replace(/^-+|-+$/g, '') // Remove leading/trailing hyphens
  
  const prefix = gamePrefix ? `${gamePrefix}-` : ''
  return `/assets/images/${prefix}${normalized}.${extension}`
}

/**
 * Helper to add images to items based on their names
 */
export function addImagesToItems<T extends { name: string }>(
  items: T[] | undefined,
  gamePrefix: string = '',
  extension: string = 'jpg'
): (T & { image?: string; imageAlt?: string })[] | undefined {
  if (!items) return undefined
  
  return items.map((item) => {
    const imagePath = getImagePathFromName(item.name, gamePrefix, extension)
    return {
      ...item,
      image: imagePath,
      imageAlt: `${item.name}`,
    }
  })
}

