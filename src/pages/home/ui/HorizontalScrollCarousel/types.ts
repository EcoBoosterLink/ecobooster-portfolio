import { type TabType } from '../../helpers/constants'

export type CardType = {
  id: string
  title: string
  desc: string
  tabId?: TabType
}
