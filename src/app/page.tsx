'use client'

import { css } from '@/styled-system/css';
import { buttonRecipe } from '@/theme/recipes/button.recipe';
import { panda } from '@/styled-system/jsx'


export default function Home() {
  return (
    <panda.div position="absolute" top="6" width="full" zIndex="10">
    <div className={css({ fontSize: "2xl", fontWeight: 'bold' })}>
      Hello 🐼!
      <button
        className={buttonRecipe({ visual: 'primary', size: 'lg' })}
      >
        Light Mode
      </button>

      <button
        className={buttonRecipe({ visual: 'secondary', size: 'sm' })}
      >
        Dark Mode
      </button>
    </div>
    </panda.div>
  )
}
