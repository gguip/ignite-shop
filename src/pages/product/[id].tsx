import { useRouter } from 'next/router'
import React from 'react'

const Product = () => {
  const { query } = useRouter()
  console.log("🚀 ~ file: [id].tsx:6 ~ product ~ pathname:", query)

  return (
    <h2>product</h2>
  )
}

export default Product