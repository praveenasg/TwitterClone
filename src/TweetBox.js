import React from 'react'
import './TweetBox.css'
import Button from '@mui/material/Button';
import { Avatar } from '@mui/material';

function TweetBox() {
    return (
        <div className='tweetBox'>
            <form>
                <div className='tweetBox__input'>
                    <Avatar src='https://play-lh.googleusercontent.com/C9CAt9tZr8SSi4zKCxhQc9v4I6AOTqRmnLchsu1wVDQL0gsQ3fmbCVgQmOVM1zPru8UH=w240-h480-rw' />
                    <input placeholder="what's happening ?" type='text'></input>
                </div>
                <input
                    className='tweetBox__imageInput'
                    placeholder="Optional: Enter the image URL"
                    type='text'
                />

                <Button className='tweetBox__tweetButton'> Tweet </Button>
            </form>
        </div>
    )
}

export default TweetBox