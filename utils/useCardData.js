import { useState } from 'react'

export default function useCardData(initialValue = [], variant = '') {
  const [data, setData] = useState(initialValue)

  //   Sorts our Data by Variant
  function reducer(list, item) {
    if (item.variant === variant.slice(0, -1)) {
      list.push(item)
    }
    return list
  }

  let sortedData = data.reduce(reducer, [])

  return [data, sortedData]
}
