import {useCallback, useState} from "react";

export default function usePostForm(): [() => Promise<any>, boolean] {
    const [loading, setLoading] = useState(false)

    const fetchPost = useCallback(() => {
        setLoading(true)
        const a = fetch("http://httpbin.org/delay/3", {
            method: "POST"
        })
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`${res.status} ${res.statusText}`)
                }
                return res.json()
            })
            .finally(() => {
                setLoading(false)
            })
        return a
    }, [])

    return [fetchPost, loading]
}