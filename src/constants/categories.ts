export const CATEGORIES = [
  { id: 'web', label: 'Développement Web' },
  { id: 'mobile', label: 'Applications Mobiles' },
  { id: 'marketing', label: 'Marketing Digital' },
  { id: 'formation', label: 'Formation & Conseil' },
] as const

export type CategoryId = typeof CATEGORIES[number]['id']
export type CategoryLabel = typeof CATEGORIES[number]['label']
