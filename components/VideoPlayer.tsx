import React, { FC } from "react"
import Video from "next-video"

const VideoPlayer: FC = () => {
  return (
    <div className="video-width flex justify-center">
      <Video
        className="w-full max-w-lg"
        src="https://2xnbgz8473.ufs.sh/f/8xJfnpQsLChAchmho3wTlfkxeBIMgrntpPDjJuysYqQSGKhw"
        suppressHydrationWarning={true}
      />
    </div>
  )
}

export default VideoPlayer
