import { Flex, Image, Link as ChakraLink } from '@chakra-ui/react'
import { MdKeyboardArrowLeft } from 'react-icons/md'
import Link from 'next/link'

interface HeaderProps {
  hasIconBack?: boolean
}

export function Header({ hasIconBack = false }: HeaderProps) {

  return (
    <Flex as='header' w='100%'>
      <Flex 
        position='relative'
        w='100%' 
        align='center' 
        justify='center'
        py='7'
        px='4'
        maxW={1440}
        m='0 auto'
      >
        {hasIconBack && (
          <Link href='/' passHref>
            <ChakraLink position='absolute' left='16px'>
              <MdKeyboardArrowLeft fontSize={32} color='#47585B' />
            </ChakraLink>
          </Link>
        )}
        <Image src='/logo.png' alt='World trip' />
      </Flex>
    </Flex>
  )
}