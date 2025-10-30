'use client';

import { useEffect, useState } from 'react';
import { PiCaretLeftBold, PiCaretRightBold } from 'react-icons/pi';
import { useSwiper } from 'swiper/react';

const WorkSliderBtns = ({ containerStyles, btnStyles, iconsStyles }) => {
  const swiper = useSwiper();
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    // Initialize state
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);

    const handleSlideChange = () => {
      setIsBeginning(swiper.isBeginning);
      setIsEnd(swiper.isEnd);
    };

    swiper.on('slideChange', handleSlideChange);
    return () => swiper.off('slideChange', handleSlideChange);
  }, [swiper]);

  return (
    <div className={containerStyles}>
      {/* Previous button */}
      <button
        onClick={() => swiper.slidePrev()}
        disabled={isBeginning}
        className={`${btnStyles} rounded-full w-[44px] h-[44px] flex items-center justify-center transition-all duration-300 ${
          isBeginning
            ? 'bg-gray-800 text-gray-300 cursor-not-allowed'
            : 'bg-accent hover:bg-accent-hover text-primary'
        }`}
      >
        <PiCaretLeftBold className={iconsStyles} />
      </button>

      {/* Next button */}
      <button
        onClick={() => swiper.slideNext()}
        disabled={isEnd}
        className={`${btnStyles} rounded-full w-[44px] h-[44px] flex items-center justify-center transition-all duration-300 ${
          isEnd
            ? 'bg-gray-800 text-gray-300 cursor-not-allowed'
            : 'bg-accent hover:bg-accent-hover text-primary'
        }`}
      >
        <PiCaretRightBold className={iconsStyles} />
      </button>
    </div>
  );
};

export default WorkSliderBtns;
