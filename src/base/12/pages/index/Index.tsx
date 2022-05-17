import React, {useCallback, useState} from 'react'
import Main from "../../../../components/layout/Main";
import {useInitialize} from "../../hooks/useInitialize";
import useFetchBase64Url from "./hooks/useFetchBase64Url";

interface UuidResponse {
    uuid: String
}

// TODO: fetchUuid の Hook を作る
export default function Index() {
    const [fetchBase64Url, loadingBase64Url, base64UrlResponse] = useFetchBase64Url()
    const [uuidResponse, setUuidResponse] = useState<UuidResponse>()
    const [loadingUuid, setLoadingUuid] = useState(false)

    const fetchUuid = useCallback(() => {
        setLoadingUuid(true)
        fetch("http://httpbin.org/uuid")
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`${res.status} ${res.statusText}`)
                }
                return res.json()
            })
            .then((data: UuidResponse) => {
                setUuidResponse(data)
            })
            .finally(() => {
                setLoadingUuid(false)
            })
    }, [uuidResponse])

    useInitialize(() => {
        fetchUuid()
        fetchBase64Url()
    })

    return (
        <Main>
            <h1>Index</h1>
            <p>
                Base64 URL: {loadingBase64Url ? "Loading" : base64UrlResponse?.url}
            </p>
            <p>
                UUID: {loadingUuid ? "Loading" : uuidResponse?.uuid}
            </p>
        </Main>
    )
}