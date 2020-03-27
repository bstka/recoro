import React from 'react'
import '../bulma.css'


const Tips = [
    'Cuci tangan secara berkala',
    'Hindari menyentuh wajah',
    'Jika batuk, dan bersin gunakan tisu atau siku',
    'Hindari kerumunan dan berdekatan dengan yang lain',
    'Jika mengalami demam, batuk atau sesak nafas, ikuti langkah yang diberikan petugas terdekat'
]

function randomTips() {
	const randomINT = Math.floor(Math.random() * (5-0)+0)
	const res = Tips[randomINT]
	return res
}

setInterval(() => {
    document.getElementById('howto').innerHTML = randomTips()
}, 5000);

const BulTips = () => {
    return (
        // eslint-disable-next-line
        <h1 className="title animated fadeIn delay-1s" id="howto"></h1>
    )
}

export default BulTips


