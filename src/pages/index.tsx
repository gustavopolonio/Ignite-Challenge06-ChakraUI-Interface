import { Header } from '../components/Header'
import { MainBanner } from '../components/MainBanner'
import { InformativeBar } from '../components/InformativeBar'
import { Flex, Divider, Heading, Image } from '@chakra-ui/react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import 'swiper/css/bundle'

// SwiperCore.use([Navigation])

export default function Home() {

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

      <Flex maxW={1240} h={500} mx='auto'>
        <Swiper navigation={true} pagination={{ clickable: true }} modules={[Navigation, Pagination]}>
          <SwiperSlide style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <Image src='/bg1.png' alt='assa' />
          </SwiperSlide>
          <SwiperSlide style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <Image src='/bg2.png' alt='' />
          </SwiperSlide>
          <SwiperSlide style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <Image src='/bg3.png' alt='' />
          </SwiperSlide>
        </Swiper>
      </Flex>
    </Flex>
  )
}