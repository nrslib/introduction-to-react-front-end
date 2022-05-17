import React, {useCallback, useEffect, useState} from 'react'
import Main from "../../../../components/layout/Main";

interface Base64UrlResponse {
    url: String
}

interface UuidResponse {
    uuid: String
}

// TODO: http://httpbin.org/uuid に問い合わせをして UuidResponse にバインドして受け取った UUID を描画する
export default function Index() {
    const [initialize, setInitialize] = useState(false)
    const [base64UrlResponse, setBase64UrlResponse] = useState<Base64UrlResponse>()
    const [loadingBase64Url, setLoadingBase64Url] = useState(false)

    const fetchBase64Url = useCallback(() => {
        setLoadingBase64Url(true)
        const now = new Date()
        const jpDate = now.getFullYear() + "年" + now.getMonth() + "月" + now.getDate() + "日"
        fetch("http://httpbin.org/base64/" + jpDate)
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`${res.status} ${res.statusText}`)
                }

                return res
            })
            .then((base64Response: Base64UrlResponse) => {
                setBase64UrlResponse(base64Response)

                return base64Response
            })
            .finally(() => {
                setLoadingBase64Url(false)
            })
    }, [base64UrlResponse])

    useEffect(() => {
        if (!initialize) {
            return
        }

        fetchBase64Url()
    }, [initialize])

    useEffect(() => {
        setInitialize(true)
    }, [])

    return (
        <Main>
            <h1>Index</h1>
            <p>
                Base64 URL: {loadingBase64Url ? "Loading" : base64UrlResponse?.url}
            </p>
            <p>
                UUID: "Loading"
            </p>
        </Main>
    )
}