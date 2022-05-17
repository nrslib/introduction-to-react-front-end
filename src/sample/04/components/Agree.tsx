import React, {useState} from "react";

export default function Agree() {
    const [agree, setAgree] = useState(false)

    const handleAgreeChanged = () => {
        setAgree(!agree)
    }

    return (
        <>
            <input type="checkbox" id="checkAgree" checked={agree} onChange={handleAgreeChanged}/>
            <label htmlFor="checkAgree">同意する</label>
        </>
    )
}