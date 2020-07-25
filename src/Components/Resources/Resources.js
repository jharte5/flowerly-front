import React from 'react'
import Player from './Player'
import './Resources.css'

export default function Resources() {
    return (
        <div className="resources logo">
            <h2>Check CNN's documentary video about cannabis</h2>
            <Player />
            <h2>
                <a
                    className="resource-link"
                    href="https://www.healtheuropa.eu/health-benefits-of-cannabis/92499/"
                >
                &rarr; Click here for 20 Health benefits of cannabis that everyone should know!
                </a>
            </h2>
        </div>
    )
}
