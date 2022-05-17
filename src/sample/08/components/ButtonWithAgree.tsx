import React, {useState} from "react";
import Agree from "./Agree";

export default function ButtonWithAgree() {
    const [agree, setAgree] = useState(false)

    const handleClick = () => {
        alert("ok")
    }

    return (
        <>
            <p>
                <Agree checked={agree} onChange={setAgree}>同意する</Agree>
            </p>
            <p>
                <button onClick={handleClick} disabled={!agree}>実行</button>
            </p>
        </>
    )
}