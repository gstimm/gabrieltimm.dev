import React, { useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface SmoothCarouselProps {
  children: React.ReactNode;
  speed?: number; // Duration in seconds for one complete loop
  pauseOnHover?: boolean;
  className?: string;
  gap?: string; // Tailwind gap class
}

export function SmoothCarousel({
  children,
  speed = 30,
  pauseOnHover = true,
  className,
  gap = 'gap-4',
}: SmoothCarouselProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Convert "gap-X" class to padding-right styled class for the set container
  // This is a simple heuristic mapping.
  const paddingRightClass = gap.replace('gap-', 'pr-');

  // Convert children to array
  const childrenArray = React.Children.toArray(children);
  
  // We duplicate the entire SET of children.
  // We need enough sets to fill the screen + buffer for the animation loop.
  // 3 sets is usually safe for infinite loop illusion:
  // Set 1: Visible
  // Set 2: Follows Set 1
  // Set 3: Buffer
  const duplicateCount = 4;
  const sets = Array(duplicateCount).fill(null);

  return (
    <div className={cn('relative overflow-hidden', className)}>
      <style>
        {`
          @keyframes smooth-scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-${100 / duplicateCount}%);
            }
          }

          .animate-smooth-scroll {
            animation: smooth-scroll linear infinite;
          }

          .animate-smooth-scroll.paused {
            animation-play-state: paused;
          }
        `}
      </style>
      <div
        className={cn(
          'flex',
          'w-fit', // Ensure container wraps content
          'animate-smooth-scroll',
          pauseOnHover && isHovered && 'paused'
        )}
        style={{
          animationDuration: `${speed}s`,
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {sets.map((_, setIndex) => (
          <div 
            key={setIndex} 
            className={cn(
              "flex shrink-0 items-stretch", 
              gap, 
              // Add padding to the right of the set equal to the gap
              // This ensures the gap between the last item of Set A and first item of Set B
              paddingRightClass 
            )}
          >
            {childrenArray.map((child, index) => (
              <div 
                key={`${setIndex}-${index}`} 
                className="shrink-0 h-full"
              >
                {child}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

interface SmoothCarouselItemProps {
  children: React.ReactNode;
  className?: string;
}

export function SmoothCarouselItem({
  children,
  className,
}: SmoothCarouselItemProps) {
  return <div className={cn('h-full', className)}>{children}</div>;
}
