import type { CategoryId } from '../../../../constants/categories'

export type CardType = {
  id: string
  title: string
  desc: string
  tabId?: CategoryId
}
