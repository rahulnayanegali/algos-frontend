import React, { useRef, useEffect } from "react";

const DynamicLine = ({ id1, id2 }) => {
  const pathRef = useRef(null);

  useEffect(() => {
    const span1 = document.getElementById(id1);
    const span2 = document.getElementById(id2);

    const rect1 = span1.getBoundingClientRect();
    const rect2 = span2.getBoundingClientRect();

    const x1 = rect1.left + rect1.width / 2;
    const y1 = rect1.top + rect1.height / 2;

    const x2 = rect2.left + rect2.width / 2;
    const y2 = rect2.top + rect2.height / 2;

    const dx = x2 - x1;
    const dy = y2 - y1;

    const dist = Math.sqrt(dx * dx + dy * dy);

    const cpX = x1 + dx * 0.5 - dy * 0.5;
    const cpY = y1 + dy * 0.5 + dx * 0.5;

    const d = `M ${x1},${y1} Q ${cpX},${cpY} ${x2},${y2}`;

    pathRef.current.setAttribute("d", d);
    pathRef.current.setAttribute("stroke", "black");
    pathRef.current.setAttribute("fill", "none");
    pathRef.current.setAttribute("marker-start", "url(#arrowhead-start)");
    pathRef.current.setAttribute("marker-end", "url(#arrowhead-end)");
  }, [id1, id2]);

  return (
<svg>
  <defs>
    <marker
      id="arrowhead-start"
      markerWidth="10"
      markerHeight="7"
      refX="0"
      refY="3.5"
      orient="auto-start-reverse"
      markerUnits="strokeWidth"
    >
      <path d="M 0 0 L 10 3.5 L 0 7" fill="black" />
    </marker>
    <marker
      id="arrowhead-end"
      markerWidth="8"
      markerHeight="7"
      refX="8"
      refY="3.5"
      orient="360"
      markerUnits="strokeWidth"
    >
      <path d="M 0 3.5 L 8 0 L 8 7" fill="black" />
    </marker>
  </defs>
  <path ref={pathRef} />
</svg>

  );
};

export default DynamicLine;
