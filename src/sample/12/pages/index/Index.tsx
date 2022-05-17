import React from 'react'
import Main from "../../../../components/layout/Main";
import {useInitialize} from "../../hooks/useInitialize";
import useFetchUuid from "./hooks/useFetchUuid";
import useFetchBase64Url from "./hooks/useFetchBase64Url";

export default function Index() {
    const [fetchUuid, loadingUuid, uuidResponse] = useFetchUuid()
    const [fetchBase64Url, loadingBase64Url, base64UrlResponse] = useFetchBase64Url()

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