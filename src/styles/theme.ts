import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    gray: {
      "700": "#47585B"
    }
  },
  styles: {
    global: {
      body: {
        '.swiper-button-prev': {
          color: '#FFBA08',
          left: '40px'
        },
        '.swiper-button-next': {
          color: '#FFBA08',
          right: '40px'
        },
        '.swiper-pagination-bullet': {
          w: '16px',
          h: '16px',
          bg: '#999999',
          opacity: '1',
          m: '0 6px !important'
        },
        '.swiper-pagination-bullet-active': {
          bg: '#FFBA08'
        }
      }
    }
  }
})