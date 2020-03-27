import React from 'react'
import '../bulma.css'
import PropTypes from 'prop-types'

const BulCard = props => {
    let { name, value, idName, textColor, delay, loading } = props

    return (
        <div className="column is-3">
            <div className={`card animated fadeIn delay-${delay}s`} id={ idName }>
                <div className="card-content">
                    <div className="media">
                        <div className="media-content" style={{ overflow: 'hidden' }}>
                            <p className={`title is-1 has-text-centered counter has-text-${textColor}`} id="kasus">{ loading ? "Loading..." : value }</p>
                            <p className="title is-4 has-text-black has-text-centered">{ name }</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

BulCard.propTypes = {
    name: PropTypes.string,
    value: PropTypes.any,
    idName: PropTypes.string,
    textColor: PropTypes.string,
    delay: PropTypes.any,
    loading: PropTypes.bool
}

export default BulCard

