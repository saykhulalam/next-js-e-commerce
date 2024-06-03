import React from 'react'
import Container from './Container'
import Flex from './Flex'
import Link from 'next/link'
import Image from 'next/image'
import brandImageOne from '../public/assates/brandOne.png'
import brandImageTow from '../public/assates/brandTow.png'
import brandImageThree from '../public/assates/brandThree.png'
import brandImageFour from '../public/assates/brandFour.png'
import brandImageFive from '../public/assates/brandFive.png'

const TopBrandsDeal = () => {
  return (
    <section className='bg-[#3C4242] py-[43px]'>
      <Container>
        <h2 className='lg:text-[50px] text-[35px] font-coresance font-semibold text-white text-center'>Top Brands Deal</h2>
        <h4 className='lg:text-[22px] text-[15px] font-normal font-causten text-white text-center mt-[25px]'>Up To <span className='text-[#FBD103]'>60%</span> off on brands</h4>
        <Flex className='mt-10 lg:mt-[67px] justify-between flex-wrap lg-flex-row flex-col items-center gap-4 sm:flex-row sm:justify-normal sm:justify-center'>
          <Link href='#'>
            <Image src={brandImageOne}/>
          </Link>
          <Link href='#'>
            <Image src={brandImageTow}/>
          </Link>
          <Link href='#'>
            <Image src={brandImageThree}/>
          </Link>
          <Link href='#'>
            <Image src={brandImageFour}/>
          </Link>
          <Link href='#'>
            <Image src={brandImageFive}/>
          </Link>
        </Flex>
      </Container>
    </section>
  )
}

export default TopBrandsDeal
