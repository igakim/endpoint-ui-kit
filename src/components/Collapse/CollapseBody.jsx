import { useRef, useEffect, useState } from 'react';

const CollapseBody = ({ content, isActive, contentClass }) => {
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
        transition: 'max-height 0.2s ease',
      }}
    >
      <div ref={refEl} className={contentClass}>{content}</div>
    </div>
  );
};

export default CollapseBody;
