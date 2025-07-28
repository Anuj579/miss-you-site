"use client"

import { motion } from "motion/react"

export default function WelcomeScreen({ onNext, ...motionProps }) {
    return (
        <motion.div {...motionProps} className="min-h-screen flex items-center justify-center text-center px-6 relative">

            <div className="max-w-2xl z-10">
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.3}}
                    className="mb-8 flex justify-center"
                >
                    <div className="mb-4"><img src="/gifs/hey.gif" alt="hey gif" className="w-48" /></div>
                </motion.div>

                <motion.h1
                    className="text-5xl md:text-7xl py-1 font-bold mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                >
                    Hey Beautiful
                </motion.h1>

                <motion.p
                    className="text-xl md:text-2xl text-gray-300 mb-8 font-light"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.9 }}
                >
                    Do you even know how much I miss you?
                    you will get to know from this slide
                </motion.p>

                <motion.div
                    className="space-y-4"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.2 }}
                >
                    <motion.button
                        className="bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 text-white px-10 py-4 rounded-full text-xl font-semibold shadow-2xl hover:shadow-pink-500/25 transition-all relative overflow-hidden"
                        onClick={onNext}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <span className="relative z-10">Open My Heart 💕</span>
                    </motion.button>
                </motion.div>
            </div>
        </motion.div>
    )
}
