import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import RightSidebar from './components/RightSidebar';
import CreatePost from './components/CreatePost';
import Post from './components/Post';
import { samplePosts } from './data/sampleData';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      
      <div className="flex">
        {/* Left Sidebar - hidden on mobile */}
        <div className="hidden md:block w-64 fixed left-0 top-14">
          <Sidebar />
        </div>
        
        {/* Main Content */}
        <main className="flex-1 pt-20 px-4 md:pl-72 lg:pr-72">
          <div className="max-w-2xl mx-auto">
            <CreatePost />
            {samplePosts.map((post) => (
              <Post key={post.id} {...post} />
            ))}
          </div>
        </main>
        
        {/* Right Sidebar */}
        <RightSidebar />
      </div>
    </div>
  );
}

export default App;