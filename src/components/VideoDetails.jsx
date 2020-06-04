import React, { Fragment } from "react";
import { Paper, Typography } from "@material-ui/core";
const VideoDetails = ({ video }) => {
  if (video === null)
    return <h2>Please search a video to start watching ...</h2>;

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <Fragment>
      <Paper elevation={6} style={{ height: "50%" }}>
        <iframe
          frameBorder="0"
          height="100%"
          width="100%"
          title="Title of the Video"
          src={videoSrc}
        ></iframe>
      </Paper>
      <Paper elevation={6} style={{ padding: "20px" }}>
        <Typography variant="h4">{video.snippet.title}</Typography>
        <Typography variant="subtitle2">
          {video.snippet.channelTitle}
        </Typography>
        <Typography variant="subtitle1">{video.snippet.description}</Typography>
      </Paper>
    </Fragment>
  );
};

export default VideoDetails;
