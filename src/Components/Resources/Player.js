import React from 'react'
import ReactPlayer from 'react-player'

export default function Player() {
    return (
        <div className='player-wrapper'>
            <ReactPlayer
            className="player"
            url="https://www.youtube-nocookie.com/embed/PRLYV0_6zY8?rel=0&amp;showinfo=0"
            />
        </div>
    )
}
