import {useState, useEffect } from 'react'

export function useFetch(api) {
    const [data, setData] = useState(null)
  
    useEffect(() => {
      fetch(api)
      .then( res => res.json())
      .then(data => setData(data))
    }, [])

    return {data}
}
