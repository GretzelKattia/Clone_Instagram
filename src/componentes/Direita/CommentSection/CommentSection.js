import { useState } from 'react';
import './CommentSection.css';

export default function CommentSection() {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newComment.trim()) {
            setComments([...comments, {
                id: Date.now(),
                text: newComment,
                user: 'Você',
                time: 'Agora'
            }]);
            setNewComment('');
        }
    };

    return (
        <div className="comment-section">
            <h3>Comentários</h3>
            <div className="comments-list">
                {comments.map(comment => (
                    <div key={comment.id} className="comment">
                        <strong>{comment.user}</strong>
                        <p>{comment.text}</p>
                        <span className="comment-time">{comment.time}</span>
                    </div>
                ))}
            </div>
            <form onSubmit={handleSubmit} className="comment-form">
                <input
                    type="text"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Adicione um comentário..."
                />
                <button type="submit">Publicar</button>
            </form>
        </div>
    );
}