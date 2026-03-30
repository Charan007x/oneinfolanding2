"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

interface Comment {
  id: number;
  text: string;
  isHighlighted?: boolean;
  name?: string;
  profilePic?: string;
}

// Module-level state to persist likes across scene remounts
let persistentIsLiked = false;
let persistentLikeCount = 1284;

export default function InstagramScene() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [isLiked, setIsLiked] = useState(persistentIsLiked);
  const [likeCount, setLikeCount] = useState(persistentLikeCount);
  const [showHeartOverlay, setShowHeartOverlay] = useState(false);
  const [heartKey, setHeartKey] = useState(0); // Add a key to force re-render the animation

  const handleDoubleTap = () => {
    if (!isLiked) {
      setIsLiked(true);
      setLikeCount(prev => {
        persistentLikeCount = prev + 1;
        return prev + 1;
      });
      persistentIsLiked = true;
    }
    
    // Show heart overlay animation and force re-trigger
    setHeartKey(prev => prev + 1);
    setShowHeartOverlay(true);
    setTimeout(() => {
      setShowHeartOverlay(false);
    }, 1000); // Hide after animation
  };

  const handleLikeToggle = () => {
    const newIsLiked = !isLiked;
    setIsLiked(newIsLiked);
    setLikeCount(prev => {
      const newCount = newIsLiked ? prev + 1 : prev - 1;
      persistentLikeCount = newCount;
      return newCount;
    });
    persistentIsLiked = newIsLiked;
  };

  const commentsData: Comment[] = [
    { id: 1, text: "Nice", name: "Priya", profilePic: "/priya.png" },
    { id: 2, text: "Price?", name: "Dhivya", profilePic: "/dhivya.png" },
    { id: 3, text: "link", isHighlighted: true, name: "Alekya", profilePic: "/alekya.png" },
  ];

  useEffect(() => {
    // Reset comments on mount
    setComments([]);

    // Animate comments appearing sequentially
    const timers: NodeJS.Timeout[] = [];
    commentsData.forEach((comment, index) => {
      const timer = setTimeout(() => {
        setComments((prev) => [...prev, comment]);
      }, index * 800);
      timers.push(timer);
    });

    return () => {
      timers.forEach(clearTimeout);
    };
  }, []); // Empty dependency ensures it runs on every mount

  return (
    <div className="w-full h-full overflow-y-auto bg-obsidian">
      {/* Instagram Post Container */}
      <div className="w-full h-full flex flex-col pt-9">
        {/* Post Header */}
        <div className="flex items-center gap-3 p-3 bg-obsidian border-b border-white/10">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-blue-500" />
          <div>
            <p className="text-white font-semibold text-sm">oneinfo.ai</p>
            <p className="text-gray-400 text-xs">Sponsored</p>
          </div>
        </div>

        {/* Product Image */}
        <div 
          className="w-full aspect-square bg-gradient-to-br from-purple-900/20 to-blue-900/20 relative overflow-hidden cursor-pointer select-none"
          onDoubleClick={handleDoubleTap}
        >
          <Image
            src="/hoodie.png"
            alt="Red Hoodie"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
          
          {/* Heart Animation Overlay */}
          <AnimatePresence>
            {showHeartOverlay && (
              <motion.div
                key={`heart-${heartKey}`}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1.2 }}
                exit={{ opacity: 0, scale: 1 }}
                transition={{ duration: 0.4, type: "spring", bounce: 0.6 }}
                className="absolute inset-0 flex items-center justify-center pointer-events-none z-10"
              >
                <svg className="w-32 h-32 text-white drop-shadow-[0_0_15px_rgba(0,0,0,0.5)]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Post Actions */}
        <div className="p-3 border-b border-white/10 bg-obsidian">
          <div className="flex items-center gap-4">
            <button onClick={handleLikeToggle} className="focus:outline-none transition-transform active:scale-75">
              <svg 
                className={`w-6 h-6 transition-colors duration-300 ${isLiked ? 'text-red-500' : 'text-white'}`} 
                fill={isLiked ? "currentColor" : "none"} 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={isLiked ? 0 : 2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg>
          </div>
          <p className="text-white font-semibold text-sm mt-2">{likeCount.toLocaleString()} likes</p>
          <p className="text-white text-sm mt-1">
            <span className="font-semibold">oneinfo.ai</span> Premium streetwear hoodie - Limited edition
          </p>
        </div>

        {/* Comments Section */}
        <div className="p-3 space-y-2 bg-obsidian flex-1">
          <p className="text-gray-400 text-xs">View all 47 comments</p>
          {comments.map((comment) => (
            <motion.div
              key={comment.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className={`flex items-center gap-2 ${
                comment.isHighlighted ? "bg-primary/20 -mx-3 px-3 py-1.5 rounded-lg" : ""
              }`}
            >
              <div className="w-6 h-6 rounded-full overflow-hidden flex-shrink-0 relative">
                <Image
                  src={comment.profilePic || "/favicon.ico"}
                  alt={`${comment.name}'s profile picture`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-white text-sm font-semibold">
                  {comment.name}
                </span>
                <span
                  className={`text-sm ${
                    comment.isHighlighted
                      ? "text-white font-bold"
                      : "text-gray-300"
                  }`}
                >
                  {comment.text}
                </span>
              </div>
              {comment.isHighlighted && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3, type: "spring" }}
                  className="ml-auto"
                >
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
