import { atom } from 'jotai'
import { useAtomValue } from 'jotai/utils'

import { Laptop, Tablet } from '@/lib/media'

import { Grid } from './grid'

export const gridsHiddenAtom = atom(true)

export function Grids() {
  const hidden = useAtomValue(gridsHiddenAtom)
  if (hidden) return null

  return (
    <>
      <Tablet>
        <Grid columns={4} margin={16} gutter={26} />
      </Tablet>
      <Laptop>
        <Grid columns={12} margin={82} gutter={24} />
      </Laptop>
    </>
  )
}
