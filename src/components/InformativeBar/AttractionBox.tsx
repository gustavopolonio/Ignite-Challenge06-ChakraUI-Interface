import { Stack, Image, Heading } from '@chakra-ui/react'

interface AttractionBoxProps {
  image: string,
  title: string
}

export function AttractionBox({ image, title }: AttractionBoxProps) {

  return (
    <Stack align='center' spacing='6' w={140}>
      <Image src={`/icons/${image}.svg`} alt={image} w={85} h={85} />
      <Heading 
        fontSize='24' 
        fontWeight={600} 
        lineHeight='9' 
        color='gray.700'
      >
        {title}
      </Heading>
    </Stack>
  )
}