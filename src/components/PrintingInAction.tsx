'use client';

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Play, Pause, Volume2, VolumeX, Info } from "lucide-react";

interface PrintingVideo {
  id: number;
  title: string;
  technique: string;
  videoSrc: string;
  description: string;
  benefits: string[];
  equipment: string;
}

interface PrintingInActionProps {
  title?: string;
  subtitle?: string;
  videos?: PrintingVideo[];
  className?: string;
}

export function PrintingInAction({
  title = "Our Printing Excellence in Action",
  subtitle = "Witness 30+ years of KGN Xerox craftsmanship through state-of-the-art equipment and proven processes",
  videos = [],
  className = "",
}: PrintingInActionProps) {
  const [activeVideo, setActiveVideo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const handleVideoClick = (index: number) => {
    // Pause all videos first
    videoRefs.current.forEach((video) => {
      if (video) {
        video.pause();
      }
    });

    setActiveVideo(index);
    setIsPlaying(true);

    // Play the selected video
    setTimeout(() => {
      const video = videoRefs.current[index];
      if (video) {
        video.play();
      }
    }, 100);
  };

  const togglePlayPause = () => {
    const video = videoRefs.current[activeVideo];
    if (video) {
      if (isPlaying) {
        video.pause();
      } else {
        video.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    const video = videoRefs.current[activeVideo];
    if (video) {
      video.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  if (videos.length === 0) {
    return null;
  }

  return (
    <section ref={sectionRef} className={`py-16 bg-gray-50 ${className}`}>
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="text-center mb-12"
        >
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mb-4">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              KGN Xerox Quality Assurance
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{title}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="grid lg:grid-cols-3 gap-8"
        >
          {/* Video Player Section */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <div className="relative bg-black rounded-xl overflow-hidden shadow-2xl">
              <div className="aspect-[9/16] relative">
                {videos.map((video, index) => (
                  <video
                    key={video.id}
                    ref={(el) => (videoRefs.current[index] = el)}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                      activeVideo === index ? 'opacity-100' : 'opacity-0'
                    }`}
                    src={video.videoSrc}
                    muted={isMuted}
                    loop
                    playsInline
                    preload="metadata"
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                  />
                ))}

                {/* Video Controls Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <button
                        onClick={togglePlayPause}
                        className="bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-3 transition-all"
                      >
                        {isPlaying ? (
                          <Pause className="w-6 h-6 text-gray-900" />
                        ) : (
                          <Play className="w-6 h-6 text-gray-900 ml-1" />
                        )}
                      </button>
                      <button
                        onClick={toggleMute}
                        className="bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-3 transition-all"
                      >
                        {isMuted ? (
                          <VolumeX className="w-5 h-5 text-gray-900" />
                        ) : (
                          <Volume2 className="w-5 h-5 text-gray-900" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Video Title Overlay */}
                <div className="absolute top-4 left-4 right-4">
                  <div className="bg-black bg-opacity-70 rounded-lg p-3">
                    <h3 className="text-white font-semibold text-lg">{videos[activeVideo]?.title}</h3>
                    <p className="text-blue-300 text-sm">{videos[activeVideo]?.technique}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Video Selection & Info */}
          <motion.div variants={itemVariants} className="space-y-6">
            {/* Video Thumbnails */}
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Production Processes</h3>
              {videos.map((video, index) => (
                <button
                  key={video.id}
                  onClick={() => handleVideoClick(index)}
                  className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                    activeVideo === index
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      activeVideo === index ? 'bg-blue-500' : 'bg-gray-300'
                    }`}>
                      <Play className={`w-4 h-4 ${activeVideo === index ? 'text-white' : 'text-gray-600'} ml-0.5`} />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">{video.title}</h4>
                      <p className="text-sm text-gray-600">{video.technique}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Active Video Details */}
            {videos[activeVideo] && (
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="flex items-center space-x-2 mb-3">
                  <Info className="w-5 h-5 text-blue-600" />
                  <h4 className="font-semibold text-gray-900">Process Details</h4>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h5 className="font-medium text-gray-900 mb-2">Equipment</h5>
                    <p className="text-sm text-gray-600">{videos[activeVideo].equipment}</p>
                  </div>
                  
                  <div>
                    <h5 className="font-medium text-gray-900 mb-2">Description</h5>
                    <p className="text-sm text-gray-600">{videos[activeVideo].description}</p>
                  </div>
                  
                  <div>
                    <h5 className="font-medium text-gray-900 mb-2">Quality Benefits</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {videos[activeVideo].benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* Quality Assurance Badge */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-6 text-white">
              <h4 className="font-semibold mb-2">30+ Years of Excellence</h4>
              <p className="text-sm text-blue-100">Every business card is crafted using proven techniques and state-of-the-art KGN Xerox equipment, ensuring consistent quality and professional results.</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}