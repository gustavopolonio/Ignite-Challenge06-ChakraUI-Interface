import { AttractionBox } from './AttractionBox'
import { Flex } from '@chakra-ui/react'

interface InformativeBarProps {

}

export function InformativeBar() {

  return (
    <Flex 
      w='100%' 
      maxW={1440} 
      mx='auto' 
      mt='20'
      px='4' 
      align='center' 
      justify='space-between'
    >
      <AttractionBox image='cocktail' title='vida noturna' />
      <AttractionBox image='surf' title='praia' />
      <AttractionBox image='building' title='moderno' />
      <AttractionBox image='museum' title='clássico' />
      <AttractionBox image='earth' title='e mais...' />
    </Flex>
  )
}