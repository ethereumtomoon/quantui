import { type Ref, ref } from 'vue'

interface Button {
  index: number
  name: string
  isActive: Ref<boolean>
}

export const button: Button[] = [
  {
    index: 1,
    name: 'Sector1',
    isActive: ref(false),
  },
  {
    index: 2,
    name: 'Sector2',
    isActive: ref(false),
  },
  {
    index: 3,
    name: 'Sector3',
    isActive: ref(false),
  },
  {
    index: 4,
    name: '其他',
    isActive: ref(false),
  },
]
