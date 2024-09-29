import React from "react";
import { Position } from "./types/type";

const LINE_LENGTH_FACTOR = 1.7;

export const CurvedNonOverlappingArrow: React.FC<{
  start: Position;
  end: Position;
  nodes: Position[]; 
}> = ({ start, end, nodes }) => { 

  return (    
    <svg>
    </svg>
  );
};