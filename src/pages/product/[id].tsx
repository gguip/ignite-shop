import { useRouter } from 'next/router'
import React from 'react'

const Product = () => {
  const { query } = useRouter()

  return (
    <h2>product</h2>
  )
}

export default Product