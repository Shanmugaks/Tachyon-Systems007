import React from "react";
import { Position } from "./types/type";

const LINE_LENGTH_FACTOR = 1.7;

export const CurvedArrow: React.FC<{ start: Position; end: Position }> = ({
  start,
  end,
}) => {
  
  return (
    <svg className="absolute top-0 left-0 w-full h-full pointer-events-none">
     
    </svg>
  );
};
