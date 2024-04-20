import React from 'react'
import RatingComponent from './_components/ratingcomponent'

const Page = () => {
  return (
    <div className="tw-max-w-7xl tw-m-auto">
        <div className="tw-p-3">
            <div className="tw-flex tw-flex-col tw-items-center tw-gap-3">
                <span className="tw-font-bold tw-text-[28px]">Star Rating Component</span>
                {/* Here is the star rating component, in which we will make the 5 stars for selecting the stars 
                by the users and will show star rating count just below the stars selected */}
                <RatingComponent/>
            </div>
        </div>
    </div>
  )
}

export default Page