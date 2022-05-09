import { Header } from '../components/Header'
import { MainBanner } from '../components/MainBanner'
import { InformativeBar } from '../components/InformativeBar'
import { Footer } from '../components/Footer'
import { api } from '../services/api'
import { Flex, Divider, Heading, Image, Text, Stack } from '@chakra-ui/react'
import { GetStaticProps } from 'next'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface Continent {
  id: number,
  title: string,
  subtitle: string,
  imageHome: string,
  imageSecondary: string,
  description: string
}

interface HomeProps {
  continents: Continent[]
}

export default function Home({ continents }: HomeProps) {

  return (
    <Flex flexDir='column' h='100vh'>
      <Header />
      <MainBanner />
      <InformativeBar />

      <Divider 
        mt='20' 
        mx='auto' 
        w='24' 
        borderColor='gray.700'
        bgColor='gray.700'
        borderWidth='1px'
      />

      <Heading 
        as='h1' 
        maxW={1440} 
        mx='auto' 
        mt='14' 
        textAlign='center'
        color='gray.700'
        fontWeight={500}
        lineHeight='56px'
      >
        Vamos nessa?<br/>Então escolha seu continente
      </Heading>

      <Flex maxW={1240} h={500} mx='auto' mt='14'>
        <Swiper navigation={true} pagination={{ clickable: true }} modules={[Navigation, Pagination]}>
          {continents.map(continent => (
            <SwiperSlide
              key={continent.id} 
              style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <Stack 
                position='absolute' 
                spacing={4} 
                textAlign='center' 
                color='#F5F8FA' 
                zIndex={1}
              >
                <Heading fontSize={48}>{continent.title}</Heading>
                <Text fontSize={24} fontWeight='700'>{continent.subtitle}</Text>
              </Stack>
              <Image 
                src={continent.imageHome} 
                alt={continent.title} 
                w='100%' 
                filter='brightness(0.6)' 
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Flex>

      <Footer />
    </Flex>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await api.get('continent')
  const continents = response.data

  return {
    props: {
      continents
    },
    revalidate: 60 * 60 * 24 // Revalidate every 24h
  }
}