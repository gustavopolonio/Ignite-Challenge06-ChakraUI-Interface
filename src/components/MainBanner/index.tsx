import { Flex, Image } from '@chakra-ui/react'

export function MainBanner() {

  return (
    <Flex w='100%'>
      <Image 
        src='/mainBanner.png' 
        alt='Main banner' 
        w='100%'
        h='auto'
      />
    </Flex>
  )
}