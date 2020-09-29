import React from "react";
import UseAnimation from "react-useanimations";
import volume from "react-useanimations/lib/volume";

const SoundToggle = ({ muted, setMuted }) => {
  return (
    <UseAnimation
      wrapperStyle={{ cursor: "pointer" }}
      reverse={muted}
      onClick={() => {
        setMuted(!muted);
      }}
      size={40}
      animation={volume}
    />
  );
};

export default SoundToggle;
