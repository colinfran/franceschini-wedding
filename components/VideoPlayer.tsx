/* eslint-disable jsx-a11y/media-has-caption */
import React, { FC } from "react"
// import proposalVideo from "../videos/Tahoe2024Vertical.mp4"

const VideoPlayer: FC = () => {
  return (
    <div className="flex justify-center">
      <video
        className="w-full max-w-xs"
        src="https://2xnbgz8473.ufs.sh/f/8xJfnpQsLChAchmho3wTlfkxeBIMgrntpPDjJuysYqQSGKhw"
      />
    </div>
  )
}

export default VideoPlayer
