import { Post, User } from '../types';

export const currentUser: User = {
  id: '1',
  name: 'Current User',
  avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
};

export const samplePosts: Post[] = [
  {
    id: '1',
    author: {
      id: '2',
      name: 'John Doe',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    content: 'Just finished a great workout! 💪 Feeling energized and ready for the day ahead. #fitness #motivation',
    timestamp: '2 hours ago',
    likes: 42,
    shares: 5,
    comments: [
      {
        id: '1',
        author: {
          id: '3',
          name: 'Sarah Wilson',
          avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
        },
        content: 'Keep up the great work! 💪',
        timestamp: '1 hour ago',
        likes: 3
      }
    ]
  },
  {
    id: '2',
    author: {
      id: '4',
      name: 'Jane Smith',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    content: 'Beautiful sunset at the beach today! 🌅 Nature never fails to amaze me.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
    timestamp: '4 hours ago',
    likes: 128,
    shares: 12,
    comments: []
  },
  {
    id: '3',
    author: {
      id: '5',
      name: 'Mike Johnson',
      avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    content: 'Just launched my new website! 🚀 Check it out and let me know what you think! #webdev #coding',
    timestamp: '6 hours ago',
    likes: 89,
    shares: 8,
    comments: [
      {
        id: '2',
        author: {
          id: '6',
          name: 'Emily Brown',
          avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
        },
        content: 'Looks amazing! Great job! 👏',
        timestamp: '5 hours ago',
        likes: 5
      }
    ]
  }
];