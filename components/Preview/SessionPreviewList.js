import React, { useState, useRef } from 'react';

import cx from 'clsx';

import SessionPreview from '../Preview/SessionPreview';
import RightArrow from '../RightArrow';
import LeftArrow from '../LeftArrow';

const isHorizontalScrollReachedEnd = e =>
  e.target.scrollWidth - e.target.clientWidth - e.target.scrollLeft === 0;

function SessionPreviewList({ previewData, backgroundGradient }) {
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isEndReached, setIsEndReached] = useState(false);
  const scrollBarRef = useRef(null);

  const updateScrollLeft = e => {
    setScrollLeft(e.target.scrollLeft);
    setIsEndReached(isHorizontalScrollReachedEnd(e));
  };

  const scrollByOffset = 300;
  const scrollToLeft = () => {
    scrollBarRef.current.scrollBy({
      left: -scrollByOffset,
      behavior: 'smooth'
    });
  };
  const scrollToRight = () => {
    scrollBarRef.current.scrollBy({
      left: scrollByOffset,
      behavior: 'smooth'
    });
  };

  return (
    <div className="w-full h-52 flex items-center">
      <span
        className={cx(
          { visible: scrollLeft > 0 },
          { invisible: scrollLeft === 0 }
        )}
        onClick={scrollToLeft}
      >
        <LeftArrow />
      </span>

      <div
        className={cx(
          'flex justify-between items-center gap-x-3 px-2 h-full w-full overflow-x-hidden'
        )}
        onScroll={updateScrollLeft}
        ref={scrollBarRef}
      >
        {previewData.map(data => (
          <SessionPreview
            key={data.title}
            data={data}
            backgroundGradient={backgroundGradient}
          />
        ))}
      </div>
      <span
        className={cx({ visible: !isEndReached }, { invisible: isEndReached })}
        onClick={scrollToRight}
      >
        <RightArrow />
      </span>
    </div>
  );
}

export default SessionPreviewList;
