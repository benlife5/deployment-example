import React from 'react'
import { AccessTokenContext } from '../Contexts/accessTokenContext';
import { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

function HomePage() {
    
    const { accessToken } = useContext(AccessTokenContext);
    const [songs, setSongs] = useState([])
    const [messages, setMessages] = useState([])

    useEffect(() => {
     fetch("/user?token="+ accessToken).then(res => res.json()).then(data => setSongs(data.items))
     fetch("/messages/all").then(res => res.json()).then(data => setMessages(data))
    }, [])
   
    console.log(songs)
    console.log(messages)
    return (
        <div>
            <h1>welcome</h1>
            {songs.length > 0 && 
                songs.map((val, key) => {
                    return <p>{val.track.name} by {val.track.artists[0].name}</p>
            })
            }
            <br />
            {messages.length > 0 && 
                messages.map(message => {
                    return (
                        <div>
                            <h3>{message.username}</h3>
                            <p>{message.text}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default HomePage;