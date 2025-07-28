"use client"

import { Heart } from "lucide-react";
import { motion } from "motion/react"
import { useEffect, useState } from "react";

export default function Loader() {
    const [stars, setStars] = useState([]);

    useEffect(() => {
        const starArray = [...Array(80)].map(() => ({
            left: Math.random() * 100,
            top: Math.random() * 100,
            duration: Math.random() * 4 + 3,
            delay: Math.random() * 3,
        }));
        setStars(starArray);
    }, []);

    const SubtleStars = () => (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="fixed inset-0 overflow-hidden pointer-events-none"
        >
            {stars.map((star, i) => (
                <motion.div
                    key={i}
                    className="absolute w-0.5 h-0.5 bg-white rounded-full"
                    style={{
                        left: `${star.left}%`,
                        top: `${star.top}%`,
                    }}
                    animate={{
                        opacity: [0.3, 0.8, 0.3],
                        scale: [0.5, 1, 0.5],
                    }}
                    transition={{
                        duration: star.duration,
                        repeat: Infinity,
                        delay: star.delay,
                    }}
                />
            ))}
        </motion.div>
    )

    // More realistic ECG heartbeat pattern
    const heartbeatPath = "M0,50 L30,50 L35,50 L40,30 L45,70 L50,10 L55,90 L60,50 L90,50 L95,50 L100,35 L105,65 L110,15 L115,85 L120,50 L150,50 L155,50 L160,40 L165,60 L170,20 L175,80 L180,50 L210,50 L215,50 L220,45 L225,55 L230,25 L235,75 L240,50 L270,50 L275,50 L280,50 L300,50"

    return (
        <div className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden p-4">
            <SubtleStars />

            <div className="text-center z-10">
                <div className="mb-12 relative">
                    <motion.div
                        className="w-32 h-32 mx-auto mb-6 relative"
                        initial={{ opacity: 0, y: -40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.6,
                            ease: "easeOut",
                        }}
                    >
                        <motion.div
                            className="flex items-center justify-center w-full h-full"
                            animate={{
                                rotate: [0, 10, -10, 0],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                repeatType: "loop",
                                ease: "linear",
                            }}
                        >
                            <span className="text-7xl">💖</span>
                        </motion.div>
                    </motion.div>


                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: .5 }}
                        className="bg-gray-950/50 backdrop-blur-sm border border-pink-500/10 rounded-2xl p-6 shadow-2xl">
                        <svg width="300" height="100" viewBox="0 0 300 100" className="overflow-visible">
                            {/* Grid lines */}
                            <defs>
                                <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(244, 114, 182, 0.1)" strokeWidth="0.5" />
                                </pattern>
                            </defs>
                            <rect width="300" height="100" fill="url(#grid)" />

                            {/* Heartbeat line */}
                            <motion.path
                                d={heartbeatPath}
                                stroke="#f472b6"
                                strokeWidth="2.5"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={{ pathLength: 1, opacity: 1 }}
                                transition={{ duration: 1, ease: "easeInOut" }}
                                style={{
                                    filter: "drop-shadow(0 0 8px rgba(244, 114, 182, 0.6))",
                                }}
                            />

                            {/* Moving pulse dot that follows the heartbeat line */}
                            <motion.circle
                                r="4"
                                fill="#f472b6"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1 }}
                            >
                                <animateMotion
                                    dur="4.24s"
                                    repeatCount="indefinite"
                                    path={heartbeatPath}
                                />
                            </motion.circle>

                            {/* Additional glow effect for the pulse */}
                            <motion.circle
                                r="8"
                                fill="rgba(244, 114, 182, 0.3)"
                                style={{
                                    filter: "blur(4px)",
                                }}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1 }}
                            >
                                <animateMotion
                                    dur="4.24s"
                                    repeatCount="indefinite"
                                    path={heartbeatPath}
                                />
                            </motion.circle>
                        </svg>
                    </motion.div>
                </div>

                <motion.p
                    className="text-pink-300/80 text-lg font-light tracking-wide"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2 }}
                >
                   from this moment you get to know how much I am missing you
                </motion.p>

                <motion.div
                    className="mt-6 flex justify-center space-x-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.5 }}
                >
                    {[...Array(3)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="w-2 h-2 bg-pink-400/60 rounded-full"
                            animate={{
                                scale: [1, 1.5, 1],
                                opacity: [0.4, 1, 0.4],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                delay: i * 0.3,
                            }}
                        />
                    ))}
                </motion.div>
            </div>
        </div>
    )
}