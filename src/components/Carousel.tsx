import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import type { Article } from "../types";
import { Button } from "./ui/button";
import { cn } from "../lib/utils";

interface CarouselProps {
  items: Article[];
}

const Carousel = ({ items }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [prevIndex, setPrevIndex] = useState<number>(0);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const intervalRef = useRef<number | null>(null);
  const touchStartX = useRef<number>(0); 

  const goToNext = () => {
    setPrevIndex(currentIndex);
    setDirection("right");
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const goToPrevious = () => {
    setPrevIndex(currentIndex);
    setDirection("left");
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  const startAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = window.setInterval(() => {
      goToNext();
    }, 5000);
  };

  useEffect(() => {
    if (!items || items.length === 0) return;
    startAutoSlide();

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [items]);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => {
    setIsPaused(false);
    startAutoSlide();
  };

  useEffect(() => {
    if (isPaused && intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    } else if (!isPaused && !intervalRef.current) {
      startAutoSlide();
    }
  }, [isPaused]);

  if (!items || items.length === 0) {
    return null;
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    setIsPaused(true);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        goToNext();
      } else {
        goToPrevious();
      }
    }

    setIsPaused(false);
  };

  const currentItem = items[currentIndex];
  const prevItem = items[prevIndex];

  return (
    <div
      className="relative w-full h-[500px] overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Previous Image (for animation) */}
      <div
        className={cn(
          "absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out",
          direction === "right" ? "-translate-x-full" : "translate-x-full"
        )}
        style={{
          backgroundImage: `url(${prevItem.image || "/placeholder.png?height=800&width=1200"})`,
        }}
      />

      {/* Current Image */}
      <div
        className={cn(
          "absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out",
          direction === "right" ? "translate-x-0" : "translate-x-0"
        )}
        style={{
          backgroundImage: `url(${currentItem.image || "/placeholder.png?height=800&width=1200"})`,
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50" />

      {/* Content */}
      <div className="relative h-full flex flex-col justify-center px-6 md:px-12 z-10">
        <div className={cn("max-w-3xl transition-opacity duration-500")}>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white animate-fadeIn">
            {currentItem.title}
          </h1>
          <p className="text-white/90 mb-6 text-lg animate-fadeIn animation-delay-200">
            {currentItem.excerpt}
          </p>
          <Button asChild className="animate-fadeIn animation-delay-300">
            <Link to={`/articles/${currentItem.id}`}>Read More</Link>
          </Button>
        </div>
      </div>

      <div
        className="absolute left-0 top-0 w-1/5 h-full cursor-pointer z-10 opacity-0"
        onClick={goToPrevious}
        aria-label="Previous slide"
      />
      <div
        className="absolute right-0 top-0 w-1/5 h-full cursor-pointer z-10 opacity-0"
        onClick={goToNext}
        aria-label="Next slide"
      />

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {items.map((_, index) => (
          <button
            key={index}
            type="button"
            className={cn(
              "w-3 h-3 rounded-full transition-all duration-300",
              index === currentIndex
                ? "bg-white w-6"
                : "bg-white/50 hover:bg-white/70"
            )}
            onClick={() => {
              setPrevIndex(currentIndex);
              setDirection(index > currentIndex ? "right" : "left");
              setCurrentIndex(index);
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
