import React from 'react'
import './Feed.css';
import TweetBox from './TweetBox';
import Post from './Post';
import { get, ref } from 'firebase/database'
import { db } from './Firebase';


export default function Feed() {
    const [posts, setPosts] = React.useState([])

    React.useEffect(() => {
        const postsRef = ref(db, 'Posts')
        get(postsRef).then((snapshot) => {
            if (snapshot.exists()) {
                const postsArray = Object.entries(snapshot.val()).map((userID, data) => ({
                    userID,
                    ...data,
                }));
                setPosts(postsArray[0].userID[1]);
            }
            else {
                console.log("no dta available");
            }
        }).catch((error) =>{
            console.error(error);
        })
}, []);

return (
    <div className="feed">
        {/* Header */}
        <div className="feed__header">
            <h1>Home</h1>
        </div>

        {/* Tweetbox */}
        <TweetBox />

        {/* post component*/}
        {posts.map(post =>
            <Post
                displayName={post.displayName}
                username={post.username}
                verified={post.verified}
                text={post.text}
                image={post.image}
                avatar={post.avatar}
            />
        )}
    </div>
)
}
