import { Flex, Text, Stack, Heading, SimpleGrid, Image, HStack } from '@chakra-ui/react'
import { Header } from '../components/Header'
import { MainBanner } from '../components/MainBanner'
import { ContinentHighlight } from '../components/ContinentHighlight'
import { Footer } from '../components/Footer'

export default function Continent() {

  return (
    <Flex flexDir='column' h='100vh'>
      <Header hasIconBack />
      <MainBanner 
        src='https://images.unsplash.com/photo-1571778650479-ebcd46a2fecf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' 
        alt='Bla'
      />

      <HStack spacing='70' w='100%' maxW={1240} px='4' mx='auto' mt='20'>
        <Text maxW='600' fontSize='24' lineHeight={9} color='#47585B'>A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste</Text>
        <Flex align='center' justify='space-between' flex='1'>
          <ContinentHighlight number={50} title='países' />
          <ContinentHighlight number={60} title='línguas' />
          <ContinentHighlight number={27} title='cidades +100' hasTooltip />
          {/* <Stack textAlign='center'>
            <Text as='strong' fontWeight={600} fontSize='48' color='#FFBA08'>50</Text>
            <Text as='span' fontWeight={600} fontSize='24' color='#47585B' mt='0 !important'>países</Text>
          </Stack>
          <Stack textAlign='center'>
            <Text as='strong' fontWeight={600} fontSize='48' color='#FFBA08'>60</Text>
            <Text as='span' fontWeight={600} fontSize='24' color='#47585B' mt='0 !important'>línguas</Text>
          </Stack>
          <Stack textAlign='center'>
            <Text as='strong' fontWeight={600} fontSize='48' color='#FFBA08'>27</Text>
            <Text as='span' display='flex' alignItems='center' fontWeight={600} fontSize='24' color='#47585B' mt='0 !important'>
              cidades +100
              <Tooltip label='Informação'>
                <Text as='span' ml='1'>
                  <AiOutlineInfoCircle fontSize='16' color='#999999' />
                </Text>
              </Tooltip>  
            </Text>
          </Stack> */}
        </Flex>
      </HStack>

      <Stack maxW={1240} px='4' mt='20' mx='auto' w='100%'>
        <Heading fontSize='36' fontWeight='500' color='#47585B' lineHeight='54px'>Cidades +100</Heading>
        
        <SimpleGrid minChildWidth='260px' spacing='46px' mt='40px !important'>
          <Stack maxW={400} borderRadius='4px' overflow='hidden'>
            <Image 
              src='https://images.unsplash.com/photo-1589871090211-7f2efeec05b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' 
              alt=''
            />
            <Flex 
              align='center' 
              justify='space-between' 
              p='18px 24px' 
              mt='0 !important' 
              border='1px solid #FFBA08'
              borderRadius='4px'
              borderTop='0'
            >
              <Stack spacing='12px'>
                <Heading fontSize='20' fontWeight='600' color='#47585B'>Londres</Heading>
                <Text fontSize='16' fontWeight='500' color='#999999'>Reino Unido</Text>
              </Stack>
              <Image 
                src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAFVBMVEX///8AI5XtKTkAFZJ2frnzgYftHTARpUz/AAAA/klEQVR4nO3QSQ0AIAADsHH6l4yKPUhaCc2oWTs9586aOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHy4ckD5KrN4eD2boIAAAAASUVORK5CYII=' 
                alt='' 
                borderRadius='full'
                width='30px'
                height='30px'
              />
            </Flex>
          </Stack>

          <Stack maxW={400} borderRadius='4px' overflow='hidden'>
            <Image 
              src='https://images.unsplash.com/photo-1589871090211-7f2efeec05b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' 
              alt=''
            />
            <Flex 
              align='center' 
              justify='space-between' 
              p='18px 24px' 
              mt='0 !important' 
              border='1px solid #FFBA08'
              borderRadius='4px'
              borderTop='0'
            >
              <Stack spacing='12px'>
                <Heading fontSize='20' fontWeight='600' color='#47585B'>Londres</Heading>
                <Text fontSize='16' fontWeight='500' color='#999999'>Reino Unido</Text>
              </Stack>
              <Image 
                src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAFVBMVEX///8AI5XtKTkAFZJ2frnzgYftHTARpUz/AAAA/klEQVR4nO3QSQ0AIAADsHH6l4yKPUhaCc2oWTs9586aOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHy4ckD5KrN4eD2boIAAAAASUVORK5CYII=' 
                alt='' 
                borderRadius='full'
                width='30px'
                height='30px'
              />
            </Flex>
          </Stack>

          <Stack maxW={400} borderRadius='4px' overflow='hidden'>
            <Image 
              src='https://images.unsplash.com/photo-1589871090211-7f2efeec05b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' 
              alt=''
            />
            <Flex 
              align='center' 
              justify='space-between' 
              p='18px 24px' 
              mt='0 !important' 
              border='1px solid #FFBA08'
              borderRadius='4px'
              borderTop='0'
            >
              <Stack spacing='12px'>
                <Heading fontSize='20' fontWeight='600' color='#47585B'>Londres</Heading>
                <Text fontSize='16' fontWeight='500' color='#999999'>Reino Unido</Text>
              </Stack>
              <Image 
                src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAFVBMVEX///8AI5XtKTkAFZJ2frnzgYftHTARpUz/AAAA/klEQVR4nO3QSQ0AIAADsHH6l4yKPUhaCc2oWTs9586aOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHy4ckD5KrN4eD2boIAAAAASUVORK5CYII=' 
                alt='' 
                borderRadius='full'
                width='30px'
                height='30px'
              />
            </Flex>
          </Stack>

          <Stack maxW={400} borderRadius='4px' overflow='hidden'>
            <Image 
              src='https://images.unsplash.com/photo-1589871090211-7f2efeec05b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' 
              alt=''
            />
            <Flex 
              align='center' 
              justify='space-between' 
              p='18px 24px' 
              mt='0 !important' 
              border='1px solid #FFBA08'
              borderRadius='4px'
              borderTop='0'
            >
              <Stack spacing='12px'>
                <Heading fontSize='20' fontWeight='600' color='#47585B'>Londres</Heading>
                <Text fontSize='16' fontWeight='500' color='#999999'>Reino Unido</Text>
              </Stack>
              <Image 
                src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAFVBMVEX///8AI5XtKTkAFZJ2frnzgYftHTARpUz/AAAA/klEQVR4nO3QSQ0AIAADsHH6l4yKPUhaCc2oWTs9586aOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHy4ckD5KrN4eD2boIAAAAASUVORK5CYII=' 
                alt='' 
                borderRadius='full'
                width='30px'
                height='30px'
              />
            </Flex>
          </Stack>
        </SimpleGrid>
      </Stack>

      <Footer />
    </Flex>
  )
}