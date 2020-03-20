import React from "react";

//@desc View video
//@route /videos/:id
//@access public
const VideoPage = (props) => {
    const videoId = props.videoId;

    return (
      <div>Video page #{videoId}</div>
    );
}

export default VideoPage;