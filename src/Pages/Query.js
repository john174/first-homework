import React from 'react'
import { useSearchParams } from 'react-router-dom'

export default function Query() {
    const [query] = useSearchParams()
  return (
    <div>Query: {query.get("search")} </div>
  )
}
