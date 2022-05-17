import React from "react";

// TODO: Props を定義して children を受け取り利用する
export default function Agree() {
    return (
        <>
            <input type="checkbox" id="checkAgree"/>
            <label htmlFor="checkAgree">同意する</label>
        </>
    )
}