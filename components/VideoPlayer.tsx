import React, { FC } from "react"
import Video from "next-video"
import proposalVideo from "../videos/proposal.mp4"

const VideoPlayer: FC = () => {
  return (
    <div className="flex justify-center">
      <Video
        className="w-full max-w-xs"
        src={proposalVideo}
      />
    </div>
  )
}

export default VideoPlayer
