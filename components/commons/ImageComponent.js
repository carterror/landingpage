import React from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'

const ImageComponent = ({ alt , src , isDetailPage}) => {

  return (
    <div className={isDetailPage ? '  position-relative' : '  position-relative'} >
    
     <Image alt = {alt} layout={'fill'} src={src} objectFit='fill' objectPosition='center'/>

    </div>
  )
}

ImageComponent.propTypes = {

    alt: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    isDetailPage: PropTypes.bool
}

export default ImageComponent