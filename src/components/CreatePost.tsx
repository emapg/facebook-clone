import React, { useState } from 'react';
import { Image, Video, Smile } from 'lucide-react';
import Avatar from './ui/Avatar';
import Button from './ui/Button';
import { currentUser } from '../data/sampleData';

export default function CreatePost() {
  const [post, setPost] = useState('');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!post.trim()) return;
    
    // Handle post creation here
    console.log('New post:', post);
    setPost('');
  };

  return (
    <div className="bg-white rounded-lg shadow p-4 mb-4">
      <form onSubmit={handleSubmit}>
        <div className="flex items-center space-x-4 mb-3">
          <Avatar src={currentUser.avatar} alt={currentUser.name} />
          <input
            type="text"
            value={post}
            onChange={(e) => setPost(e.target.value)}
            placeholder="What's on your mind?"
            className="flex-1 bg-gray-100 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div className="border-t pt-3 flex flex-wrap justify-between items-center gap-2">
          <div className="flex flex-wrap gap-2">
            <Button type="button" variant="ghost" size="sm">
              <Video className="h-5 w-5 text-red-500 mr-2" />
              <span className="hidden sm:inline">Live Video</span>
            </Button>
            <Button type="button" variant="ghost" size="sm">
              <Image className="h-5 w-5 text-green-500 mr-2" />
              <span className="hidden sm:inline">Photo/Video</span>
            </Button>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={() => setShowEmojiPicker(!showEmojiPicker)}
            >
              <Smile className="h-5 w-5 text-yellow-500 mr-2" />
              <span className="hidden sm:inline">Feeling/Activity</span>
            </Button>
          </div>
          <Button
            type="submit"
            disabled={!post.trim()}
            size="sm"
          >
            Post
          </Button>
        </div>
      </form>
    </div>
  );
}