import axios from 'axios'
import { useEffect, useState } from 'react'

export const useFetch = <T>(url: string) => {
  const [data, setData] = useState<T>()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios(url)
      .then(({ data }) => setData(data))
      .finally(() => setLoading(false))
  }, [url])

  return {
    data,
    loading
  }
}
