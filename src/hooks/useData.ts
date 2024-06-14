import { useEffect, useState } from "react"
import apiClient from "../services/api-client"
import { AxiosRequestConfig, CanceledError } from 'axios';


interface FetchResponse <T>{
    id : number;
    results : T[];
}

const useData =<T>(endpoint : string , reqestConfig ?: AxiosRequestConfig , dept?: any[]) => {
    const [data, setData] = useState<T[]>([])
    const [error, setError] = useState("")
    const [isLoading ,setLoading] = useState(false)
  
    useEffect(() => {


        const controller = new AbortController()

      setLoading(true)
      apiClient
        .get<FetchResponse<T>>(endpoint , { signal: controller.signal , ...reqestConfig})
        .then((response) => {
          setData(response.data.results)
          setLoading(false)
        })
        .catch((err) => {
            if(err instanceof CanceledError) return
            setError(err.message)
            setLoading(false)
        })

      return () => controller.abort()
    } ,dept ? [...dept] : [])
  
    return {data , error , isLoading}
}

export default useData;