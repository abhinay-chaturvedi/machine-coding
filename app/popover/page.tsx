import React from 'react'
import Container from '../_components/Container'
import PopOver from './_components/popover'

const Page = () => {
  return (
    <div>
        <Container>
            <div className="tw-flex tw-flex-col tw-items-center tw-gap-3">
                <span className="tw-font-bold tw-text-4xl">Pop Over</span>
                <PopOver/>
            </div>
        </Container>
    </div>
  )
}

export default Page