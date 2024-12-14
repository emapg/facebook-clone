import React, { useState } from 'react';
import { Heart, MessageCircle, Share2, MoreHorizontal } from 'lucide-react';
import Avatar from './ui/Avatar';
import Button from './ui/Button';
import { Post as PostType, Comment } from '../types';
import { currentUser } from '../data/sampleData';

interface PostProps extends PostType {}

export default function Post({ author, content, image, timestamp, likes, comments, shares }: PostProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [newComment, setNewComment] = useState('');
  const [localComments, setLocalComments] = useState<Comment[]>(comments);

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  const handleComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const comment: Comment = {
      id: Date.now().toString(),
      author: currentUser,
      content: newComment,
      timestamp: 'Just now',
      likes: 0
    };

    setLocalComments([...localComments, comment]);
    setNewComment('');
  };

  return (
    <div className="bg-white rounded-lg shadow mb-4">
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <Avatar src={author.avatar} alt={author.name} />
            <div>
              <h3 className="font-semibold">{author.name}</h3>
              <p className="text-gray-500 text-sm">{timestamp}</p>
            </div>
          </div>
          <Button variant="ghost" size="sm">
            <MoreHorizontal className="h-5 w-5" />
          </Button>
        </div>
        
        <p className="mb-4 whitespace-pre-wrap">{content}</p>
        
        {image && (
          <img src={image} alt="Post content" className="rounded-lg w-full object-cover mb-4" />
        )}
        
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <span>{likes + (isLiked ? 1 : 0)} likes</span>
          <div className="space-x-4">
            <span>{localComments.length} comments</span>
            <span>{shares} shares</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between pt-2 border-t">
          <Button
            variant="ghost"
            onClick={handleLike}
            className={isLiked ? 'text-blue-500' : ''}
          >
            <Heart className={`h-5 w-5 mr-2 ${isLiked ? 'fill-current' : ''}`} />
            Like
          </Button>
          
          <Button
            variant="ghost"
            onClick={() => setShowComments(!showComments)}
          >
            <MessageCircle className="h-5 w-5 mr-2" />
            Comment
          </Button>
          
          <Button variant="ghost">
            <Share2 className="h-5 w-5 mr-2" />
            Share
          </Button>
        </div>
      </div>
      
      {showComments && (
        <div className="p-4 bg-gray-50 border-t space-y-4">
          {localComments.map((comment) => (
            <div key={comment.id} className="flex space-x-3">
              <Avatar src={comment.author.avatar} alt={comment.author.name} size="sm" />
              <div className="flex-1">
                <div className="bg-white rounded-lg p-3">
                  <p className="font-semibold text-sm">{comment.author.name}</p>
                  <p className="text-sm">{comment.content}</p>
                </div>
                <div className="flex items-center space-x-4 mt-1 text-xs text-gray-500">
                  <button className="hover:text-blue-500">Like</button>
                  <button className="hover:text-blue-500">Reply</button>
                  <span>{comment.timestamp}</span>
                </div>
              </div>
            </div>
          ))}
          
          <form onSubmit={handleComment} className="flex items-center space-x-2">
            <Avatar src={currentUser.avatar} alt={currentUser.name} size="sm" />
            <input
              type="text"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Write a comment..."
              className="flex-1 bg-white rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </form>
        </div>
      )}
    </div>
  );
}