import {useCallback, useState} from "react";

interface Response {
    uuid: String
}


export default function useFetchUuid(): [(() => void), boolean, (Response | undefined)] {
    const [response, setResponse] = useState<Response>()
    const [loading, setLoading] = useState(false)

    const fetchUuid = useCallback(() => {
        setLoading(true)
        fetch("http://httpbin.org/uuid")
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`${res.status} ${res.statusText}`)
                }
                return res.json()
            })
            .then((data: Response) => {
                setResponse(data)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [response])

    return [fetchUuid, loading, response]
}