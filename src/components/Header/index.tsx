import { Flex, Image } from '@chakra-ui/react'

export function Header() {

  return (
    <Flex as='header' w='100%'>
      <Flex 
        w='100%' 
        align='center' 
        justify='center' 
        py='7'
        px='4'
        maxW={1440}
        m='0 auto'
      >
        <Image src='/logo.png' alt='World trip' />
      </Flex>
    </Flex>
  )
}