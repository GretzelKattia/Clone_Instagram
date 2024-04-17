import './Feed.css';

import Post from './Post/Post';

export default function Feed() {
    return (
        <div className="Feed">
            <Post
                title="Post 1"
                imgSrc="https://i.pinimg.com/564x/fb/8a/24/fb8a24d408957e55b2431b3cf0f271cb.jpg"
                body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc." />

            <Post
                title="Post 2"
                imgSrc="https://i.pinimg.com/564x/ca/ac/19/caac19cf51d671fbd2ff7c4b254b23ca.jpg"
                body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc." />
        </div>
    )
}