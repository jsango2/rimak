import { render } from "react-dom";
import { useEffect, useRef } from "react";
import { VideoScroll } from "react-video-scroll";
import usePageBottom from "../helper/pageBottom";

const setStyles = (wrapperEl, videoEl, playbackRate) => {
  wrapperEl.style.marginTop = `calc(180% - ${
    Math.floor(videoEl.duration) * playbackRate + "px"
  })`;
  wrapperEl.style.marginBottom = `calc(180% - ${
    Math.floor(videoEl.duration) * playbackRate + "px"
  })`;
};

const RC4 = () => {
  const reachedBottom = usePageBottom();
  console.log("reachedBottom", reachedBottom);
  useEffect(() => {
    reachedBottom && window.scrollTo(0, 0);
  }, [reachedBottom]);

  return (
    <div style={{ height: "1460vh", position: "relative" }}>
      <VideoScroll
        onLoad={(props) =>
          setStyles(props.wrapperEl, props.videoEl, props.playbackRate)
        }
        playbackRate={45}
        style={{ position: "sticky" }}
      >
        <video
          tabIndex="0"
          autobuffer="autobuffer"
          preload="auto"
          //   style={{ width: "100%", objectFit: "contain" }}
          style={{
            position: "fixed",
            width: "100vw",
            touchAction: "none",
            left: "0",
            top: "0",
          }}
          playsInline
        >
          <source type="video/mp4" src="./RimacMC30fps.mp4" />
        </video>
      </VideoScroll>
    </div>
  );
};
export default RC4;
