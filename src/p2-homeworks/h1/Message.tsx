import React from 'react'
import s from './Message.module.css'

type messageType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: messageType) {
    return (
        <div className={s.message}>
            <div><img className={s.ava} src={props.avatar}/></div>
            <div className={s.cloud}>
            <div className={s.name}>{props.name}</div>
            <div className={s.cloudmessage}>{props.message}</div>
            <div className={s.time}>{props.time}</div>
            </div>
        </div>
    )
}

export default Message
