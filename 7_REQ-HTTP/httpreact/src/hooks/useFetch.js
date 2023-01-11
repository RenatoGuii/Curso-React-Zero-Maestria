import { useState, useEffect } from "react";


// 4° Custom Hook

export const useFetch = (url) => {
    const [data, setData] = useState(null)
    
    // 5° Refatorando POST
    const [config, setConfig] = useState(null)
    const [method, setMethod] = useState(null)
    const [callFetch, setCallFetch] = useState(false)

    // 6° Loading
    const [loading, setLoading] = useState(false) 

    // 7° Tratando erros
    const [error, setError] = useState(null)

    // 8° Deletar Produtos (CHALLENGE)
    const [itemId, setItemId] = useState(null)

    const httpConfig = (data, method) => {
        if (method === 'POST') {
            setConfig({
                method,
                headers: {
                    'Content-Type': 'application/json'
                }, 
                body: JSON.stringify(data),
            })

            setMethod(method)
        } else if (method === 'DELETE') {
            setConfig({
                method,
                headers: {
                    'Content-Type': 'application/json'
                }, 
            })

            setMethod(method)
            setItemId(data)
        }
    }

    useEffect (() => {
        const fetchData = async () => {
            
            // 6° Loading
            setLoading(true)

            try {
                const res = await fetch(url)

                const json = await res.json()

                setData(json)
            } catch (error) {
                console.log(error.message)

                setError('Houve algum erro ao carregar os dados')
            }

            setLoading(false)
        }

        fetchData()
    }, [url, callFetch])

    // 5° Refatorando POST
    useEffect(() => {
        const httpRequest = async () => {
            
            let json

            if (method === 'POST') {
                let fetchOptions = [url, config]

                const res = await fetch(...fetchOptions)

                json = await res.json()

                setCallFetch(json)
            } else if (method === 'DELETE') {

                const deleteUrl = `${url}/${itemId}`

                const res = await fetch(deleteUrl, config)

                json = await res.json()

            }
            
            setCallFetch(json)
        }

        httpRequest()
    }, [config, method, url])

    return { data, httpConfig, loading, error }
}