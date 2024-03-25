import React from "react";

const Avatar = ({ size = 100, text = "", bgColor = "#aaa", textColor = "#fff" }) => {
  const styles = {
    width: size,
    height: size,
    borderRadius: "50%",
    backgroundColor: bgColor,
    color: textColor,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: size / 2
  };

  return (
    <div style={styles}>
      {text}
    </div>
  );
};

export default Avatar;
