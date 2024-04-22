import React from 'react'

const Container = ({children}: {children: React.ReactNode}) => {
  return (
    <div className="tw-max-w-7xl tw-m-auto tw-p-3">
        {children}
    </div>
  )
}

export default Container