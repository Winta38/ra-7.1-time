import React from "react";
import DateTime from "./DateTime";
import withPretty from "./Pretty";

const DateTimePretty = withPretty(DateTime);

const Video = (props) => {
  return (
    <div className="video">
      <iframe
        title={props.url}
        src={props.url}
        allow="autoplay; encrypted-media"
        allowFullScreen
      />
      <DateTimePretty date={props.date} />
    </div>
  );
};

export default Video;
