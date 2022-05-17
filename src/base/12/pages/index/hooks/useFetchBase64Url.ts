import {useCallback, useState} from "react";

interface Response {
    url: String
}

export default function useFetchBase64Url(): [(() => void), boolean, (Response | undefined)] {
    const [response, setResponse] = useState<Response>()
    const [loading, setLoading] = useState(false)

    const fetchBase64Url = useCallback(() => {
        setLoading(true)
        const now = new Date()
        const jpDate = now.getFullYear() + "年" + now.getMonth() + "月" + now.getDate() + "日"
        fetch("http://httpbin.org/base64/" + jpDate)
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`${res.status} ${res.statusText}`)
                }

                return res
            })
            .then((base64Response: Response) => {
                setResponse(base64Response)

                return base64Response
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

    return [fetchBase64Url, loading, response]
}