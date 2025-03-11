"use client"
import React, { FC, useEffect, useRef } from "react"
// import Video from "next-video"
import Player from "next-video/player"

const VideoPlayer: FC = () => {
  const playerRef = useRef<HTMLVideoElement | null>(null)

  useEffect(() => {
    const handleFullscreenChange = (): void => {
      if (document.fullscreenElement) {
        // When in fullscreen mode, center the video
        if (playerRef.current) {
          playerRef.current.classList.add("h-full", "object-contain")
          playerRef.current.classList.remove("max-w-xs")
        }
      } else {
        // Reset styles when exiting fullscreen
        if (playerRef.current) {
          playerRef.current.classList.remove("h-full", "object-contain")
          playerRef.current.classList.add("max-w-xs")
        }
      }
    }
    document.addEventListener("fullscreenchange", handleFullscreenChange)
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange)
    }
  }, [])

  return (
    <div className="flex justify-center">
      <Player
        className="w-full max-w-xs"
        ref={playerRef}
        src="https://2xnbgz8473.ufs.sh/f/8xJfnpQsLChAchmho3wTlfkxeBIMgrntpPDjJuysYqQSGKhw"
      />
    </div>
  )
}

export default VideoPlayer
