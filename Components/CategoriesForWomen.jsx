import React from 'react'
import Container from './Container'
import Flex from './Flex'
import Categories from './Categories'
import whomenImgOne from '../public/assets/whomenimgOne.png'
import whomenImgTow from '../public/assets/whomenimgTow.png'
import whomenImgThree from '../public/assets/whomenimgThree.png'
import whomenImgFour from '../public/assets/whomenimgFour.png'
import Title from './Title'

const CategoriesForWomen = () => {
  return (
    <section className='bg-white lg:pt-[100px] pt-20 pb-16 lg:pb-[100px]'>
      <Container>
        <Title Name='Categories For Women'/>
        <Flex className=' mt-10 lg:mt-[60px] justify-between lg:flex-row flex-col items-center lg:gap-0 gap-8 sm:flex-wrap sm:flex-row sm:justify-normal sm:gap-10 sm:pl-8 little-lg:p-0 little-lg:justify-between little-lg:flex-wrap'>
            <Categories ImageUrl={whomenImgOne} Name='Hoodies & Sweetshirt'/>
            <Categories ImageUrl={whomenImgTow} Name='Coats & Parkas'/>
            <Categories ImageUrl={whomenImgThree} Name='Tees & T-Shirt'/>
            <Categories ImageUrl={whomenImgFour} Name='Boxers'/>
        </Flex>
      </Container>
    </section>
  )
}

export default CategoriesForWomen
