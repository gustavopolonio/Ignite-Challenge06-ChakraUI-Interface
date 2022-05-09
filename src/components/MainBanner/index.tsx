import { Flex, Image } from '@chakra-ui/react'

interface MainBannerProps {
  src: string,
  alt: string
}

export function MainBanner({ src, alt }: MainBannerProps) {

  return (
    <Flex w='100%' minH='500px' align='center' justify='center' overflow='hidden'>
      <Image 
        src={src} 
        alt={alt}
        w='100%'
        h='auto'
      />
    </Flex>
  )
}