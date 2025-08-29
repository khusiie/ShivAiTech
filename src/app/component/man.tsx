// components/HighlightBox.tsx
import React from "react";

const HighlightBox: React.FC = () => {
  return (
    <div className="relative rounded-[30.169px] bg-[rgba(0,102,153,0.20)] w-[400px] h-[100px] flex-shrink-0 overflow-hidden">
      {/* Base ellipse */}
      <div
        className="
          absolute
          bottom-0
          left-0
          w-[180px]
          h-[150px]
          rounded-full
          bg-[rgba(0,147,221,0.30)]
          blur-[30.705px]
        "
      ></div>
      {/* Smaller ellipse to create the moon cut-out */}
      <div
        className="
          absolute
          bottom-0
          left-[90px]
          w-[130px]
          h-[150px]
          rounded-full
          bg-[rgba(0,102,153,0.20)]
          blur-[30.705px]
        "
      ></div>
    </div>
  );
};

export default HighlightBox;
