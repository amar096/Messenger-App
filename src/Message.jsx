import React, { forwardRef } from 'react'
import { Card, CardContent, Typography } from '@material-ui/core'
import './Message.css';

const Message = forwardRef(({username,message},ref) => {
    const isUSer = username === message.username;
    return (
        <div ref={ref} className={`message ${isUSer && "message_user"}`}>
            <Card className={isUSer? "message_usercard" : "message_guestcard"}>
                <CardContent>
                    <Typography 
                    color="white"
                    variant="h5"
                    component="h2"
                    >
                    {!isUSer && `${message.username || "Unknown"}: ` }{message.message }
                    </Typography>
                </CardContent>
            </Card>
            <p></p>
        </div>
    )
})

export default Message
