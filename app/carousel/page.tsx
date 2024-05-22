import React from 'react'
import Container from '../_components/Container'
import Carousel from './_components/Carousel'

const Page = () => {
  return (
    <div>
        <Container>
            <div className="tw-text-center tw-font-bold tw-text-2xl">
                Carousel
            </div>
            <div>
                <Carousel/>
            </div>
        </Container>
    </div>
  )
}

export default Page