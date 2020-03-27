import React from 'react'
import PropTypes from 'prop-types'
import '../bulma.css'

const BulHero = props => {
    let { children, NameClass } = props
    return (
        <section className={`hero is-fullheight ${NameClass}`}>
            <div className="hero-body">
                <div className="container">
                    {children}
                </div>
            </div>
        </section>
    )
}

BulHero.propTypes = {
    children: PropTypes.any,
    NameClass: PropTypes.any
}

export default BulHero


