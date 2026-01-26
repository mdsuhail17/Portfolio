"use client";

import * as React from "react";
import { useState, useRef } from "react";
import { PlayCircle, Youtube, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

const cn = (...inputs) => {
  return inputs.filter(Boolean).join(' ');
};

const Card = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border bg-white text-gray-900 shadow-sm",
      className,
    )}
    {...props}
  />
));
Card.displayName = "Card";

const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

const VideoCard = ({
  title,
  description,
  thumbnailUrl,
  videoUrl,
  channelName,
  channelUrl,
  views = "1.2M views",
  duration = "10:24",
  publishedAt = "2 days ago",
  className,
  style,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotationX = (y - centerY) / 30;
      const rotationY = -(x - centerX) / 30;
      
      setRotation({ x: rotationX, y: rotationY });
    }
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handlePlayVideo = () => {
    setIsPlaying(true);
  };

  const handleVisitChannel = () => {
    window.open(channelUrl, '_blank');
  };

  return (
    <div 
      className={cn("perspective-1000 group h-full", className)}
      style={{ perspective: '1000px', ...style }}
    >
      <Card
        ref={cardRef}
        className={cn(
          "relative overflow-hidden bg-white border-gray-200 transition-all duration-500 ease-out transform-gpu h-full flex flex-col",
          "hover:shadow-2xl hover:shadow-blue-500/20",
          isHovered && "scale-[1.02]"
        )}
        style={{ 
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
      >
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
        
        {/* Glass overlay */}
        <div className="absolute inset-0 bg-white/5 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
        
        <CardContent className="p-0 relative z-20 flex flex-col h-full">
          {/* Video/Thumbnail Section */}
          <div className="relative aspect-video overflow-hidden">
            {isPlaying ? (
              <iframe
                src={videoUrl}
                title={title}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <>
                <img
                  src={thumbnailUrl}
                  alt={title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Duration badge */}
                <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                  {duration}
                </div>
                
                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <button
                    onClick={handlePlayVideo}
                    className="transform transition-all duration-300 hover:scale-110 active:scale-95"
                  >
                    <PlayCircle className="w-16 h-16 text-white drop-shadow-2xl" />
                  </button>
                </div>
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </>
            )}
          </div>
          
          {/* Content Section */}
          <div className="p-6 space-y-4">
            {/* Title */}
            <h3 className="text-xl font-semibold text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
              {title}
            </h3>
            
            {/* Description */}
            <p className="text-gray-600 text-sm line-clamp-3 leading-relaxed">
              {description}
            </p>
            
            {/* Video metadata */}
            <div className="flex items-center justify-between text-xs text-gray-500">
              <span>{views}</span>
              <span>{publishedAt}</span>
            </div>
            
            {/* Channel info and action button */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-200">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center">
                  <Youtube className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">{channelName}</p>
                  <p className="text-xs text-gray-500">YouTube Channel</p>
                </div>
              </div>
              
              <button
                onClick={handleVisitChannel}
                className={cn(
                  "relative overflow-hidden px-4 py-2 rounded-full text-sm font-medium",
                  "bg-blue-600 text-white",
                  "transition-all duration-300 transform",
                  "hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25",
                  "active:scale-95",
                  "before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent",
                  "before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700"
                )}
              >
                <span className="relative flex items-center space-x-2">
                  <span>View Channel</span>
                  <ExternalLink className="w-3 h-3" />
                </span>
              </button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const YouTubeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  const videos = [
    {
      title: "E-Commerce website using React, SpringBoot and Mysql",
      description: "Build a complete e-commerce website from scratch using React for frontend, Spring Boot for backend, and MySQL for database. Learn full-stack development with this comprehensive project tutorial.",
      thumbnailUrl: "https://img.youtube.com/vi/cg52C_uXVxQ/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/embed/cg52C_uXVxQ",
      channelName: "Learn Tech with Suhail",
      channelUrl: "https://youtube.com/@learntechwithsuhail",
      views: "1.2K views",
      duration: "45:30",
      publishedAt: "1 week ago"
    },
    {
      title: "HTTP Methods and Headers",
      description: "Understand HTTP methods (GET, POST, PUT, DELETE) and headers in web development. Learn how to work with HTTP protocols and implement proper API communication.",
      thumbnailUrl: "https://img.youtube.com/vi/G5lfwO0J4Ps/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/embed/G5lfwO0J4Ps",
      channelName: "Learn Tech with Suhail",
      channelUrl: "https://youtube.com/@learntechwithsuhail",
      views: "856 views",
      duration: "38:15",
      publishedAt: "3 days ago"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  return (
    <section id="youtube" className="py-20 px-6 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div 
            variants={itemVariants}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              My <span className="text-blue-600">YouTube</span> Channel
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Learn Tech with Suhail - Your go-to destination for web development tutorials and tech insights
            </p>
          </motion.div>
          
          {/* Video Grid */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto items-stretch"
          >
            {videos.map((video, index) => (
              <VideoCard
                key={index}
                {...video}
                className="animate-fadeIn"
                style={{ animationDelay: `${index * 0.2}s` }}
              />
            ))}
          </motion.div>
          
          {/* Channel CTA */}
          <motion.div 
            variants={itemVariants}
            className="text-center px-4 sm:px-6"
          >
            <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-4 bg-white border border-gray-200 rounded-2xl sm:rounded-full px-6 sm:px-8 py-5 sm:py-4 shadow-lg hover:shadow-xl transition-all duration-300 group w-full sm:w-auto max-w-md sm:max-w-none mx-auto">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                <Youtube className="w-5 h-5 sm:w-6 sm:h-6 text-white flex-shrink-0" />
              </div>
              <div className="text-center sm:text-left flex-1">
                <p className="text-base sm:text-lg font-semibold text-gray-900">Learn Tech with Suhail</p>
                <p className="text-xs sm:text-sm text-gray-600">Subscribe for web development tutorials</p>
              </div>
              <button
                onClick={() => window.open('https://youtube.com/@learntechwithsuhail?si=TrgcGlvkD9FzFutN', '_blank')}
                className="bg-red-600 hover:bg-red-700 text-white px-5 sm:px-6 py-2 rounded-full text-sm sm:text-base font-medium transition-all duration-300 hover:scale-105 active:scale-95 w-auto flex-shrink-0"
              >
                Subscribe
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default YouTubeSection;