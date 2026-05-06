import { useRef, useEffect, useState } from 'react';

const CollapseBody = ({ content, isActive }) => {
  const refEl = useRef(null);
  const [height, setHeight] = useState(0);
  useEffect(() => {
    if (refEl.current) {
      setHeight(refEl.current.scrollHeight);
    }
  }, [content]);
  return (
    <div
      style={{
        maxHeight: isActive ? height : 0,
        overflow: 'hidden',
        transition: 'max-height 0.5s ease',
      }}
    >
      <div ref={refEl}>{content}</div>
    </div>
  );
};

export default CollapseBody;
