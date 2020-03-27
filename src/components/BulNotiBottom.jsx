import React from 'react'
import '../bulma.css'

// eslint-disable-next-line no-unused-vars
let DummyData = [
    {
        name: "Kasus",
        color: "black",
        value: Math.floor(Math.random() * 1000) + 1,
    },
    {
        name: "Terjangkit",
        color: "black",
        value: Math.floor(Math.random() * 1000) + 1,
    },
    {
        name: "Sembuh",
        color: "success",
        value: Math.floor(Math.random() * 1000) + 1,
    },
    {
        name: "Meninggal",
        color: "danger",
        value: Math.floor(Math.random() * 1000) + 1,
    },
]


const BulNotiBottom = () => {
    return (
        <div className="container">
            <div className="notification has-text-black">
                Bismantaka Aldila @ 2020
            </div>
        </div>
    )
}

export default BulNotiBottom
