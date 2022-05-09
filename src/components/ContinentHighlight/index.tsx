import { Tooltip, Text, Stack } from '@chakra-ui/react'
import { AiOutlineInfoCircle } from 'react-icons/ai'

interface ContinentHighlightProps {
  number: number,
  title: string,
  hasTooltip?: boolean
}

export function ContinentHighlight({ number, title, hasTooltip = false }: ContinentHighlightProps) {

  return (
    <Stack textAlign='center'>
      <Text 
        as='strong' 
        fontWeight={600} 
        fontSize='48' 
        color='#FFBA08'
      >
        {number}
      </Text>
      <Text 
        as='span'
        display='flex' 
        alignItems='center'
        fontWeight={600} 
        fontSize='24' 
        color='#47585B' 
        mt='0 !important'
      >
        {title}
        {hasTooltip && (
          <Tooltip label='Cidades que estão entre as 100 cidades mais visitadas do mundo.'>
            <Text as='span' ml='1'>
              <AiOutlineInfoCircle fontSize='16' color='#999999' />
            </Text>
          </Tooltip> 
        )}
      </Text>
    </Stack>
  )
}