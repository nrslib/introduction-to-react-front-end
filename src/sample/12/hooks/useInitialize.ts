import {useEffect, useState} from "react";

export const useInitialize = (callback: () => void) => {
    const [initialize, setInitialize] = useState(false)

    useEffect(() => {
        if (!initialize) {
            return
        }

        callback()
    }, [initialize])

    useEffect(() => {
        setInitialize(true)
    }, [])
}