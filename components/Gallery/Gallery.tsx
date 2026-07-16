"use client";

import Image, { StaticImageData } from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import FullscreenButton from "../About/FullscreenButton";
import { useGalleryContext } from "../PropertyGallery/PropertyGallery";
import { useFourGalleryContext } from "./FourGallery";
import { useGlobalContext } from "./Photogalleries";
import { usePropertyGalleryContext } from "./ShowcaseGallery";
import { useShowcaseGallery2Context } from "./ShowcaseGallery2";

type Props = {
  initIndex: number;
  library: { src: StaticImageData; alt: string }[];
};

function Gallery({ initIndex, library }: Props) {
  const { setFourGalleryContext } = useFourGalleryContext();
  const { setOpenIndex } = useGlobalContext();
  const { setOpenIndexPropertyGallery } = usePropertyGalleryContext();
  const { setOpenIndexShowcaseGallery2Context } = useShowcaseGallery2Context();
  const { setOpenGalleryContext } = useGalleryContext();
  const firstIndex = initIndex >= 0 && initIndex < library.length ? initIndex : 0;
  const [currentSlide, setCurrentSlide] = useState(firstIndex);
  const touchStartX = useRef<number | null>(null);

  const showSlide = useCallback(
    (index: number) => {
      if (!library.length) return;
      setCurrentSlide((index + library.length) % library.length);
    },
    [library.length]
  );

  const showPrevious = useCallback(() => showSlide(currentSlide - 1), [currentSlide, showSlide]);
  const showNext = useCallback(() => showSlide(currentSlide + 1), [currentSlide, showSlide]);

  const handleClose = useCallback(() => {
    setOpenIndexPropertyGallery(false);
    setOpenIndex(false);
    setOpenIndexShowcaseGallery2Context(false);
    setOpenGalleryContext(false);
    setFourGalleryContext(false);
    if (document.fullscreenElement) void document.exitFullscreen();
  }, [
    setFourGalleryContext,
    setOpenGalleryContext,
    setOpenIndex,
    setOpenIndexPropertyGallery,
    setOpenIndexShowcaseGallery2Context,
  ]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflowY;
    document.body.style.overflowY = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
      if (event.key === "Escape") handleClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflowY = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleClose, showNext, showPrevious]);

  const thumbnailIndexes = useMemo(() => {
    const count = Math.min(5, library.length);
    return Array.from({ length: count }, (_, offset) =>
      (currentSlide - Math.floor(count / 2) + offset + library.length) % library.length
    );
  }, [currentSlide, library.length]);

  if (!library.length) return null;
  const currentImage = library[currentSlide];

  return (
    <section
      role="dialog"
      aria-modal="true"
      aria-label="Image gallery"
      className="fixed inset-0 z-[1000] flex h-dvh w-screen flex-col overflow-hidden bg-black text-white"
    >
      <header className="relative z-20 flex h-16 shrink-0 items-center justify-between border-b border-white/10 px-3 sm:px-6">
        <p className="min-w-16 text-sm font-semibold tabular-nums" aria-live="polite">
          {currentSlide + 1} / {library.length}
        </p>
        <div className="flex items-center gap-1 rounded-lg bg-white/90 text-black shadow-lg">
          <FullscreenButton />
          <button
            type="button"
            aria-label="Close gallery"
            autoFocus
            onClick={handleClose}
            className="cursor-pointer rounded-md p-2 transition hover:bg-black/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <RxCross2 className="text-2xl" aria-hidden="true" />
          </button>
        </div>
      </header>

      <div
        className="relative min-h-0 flex-1 px-12 py-3 sm:px-24 sm:py-5"
        onTouchStart={(event) => {
          touchStartX.current = event.touches[0]?.clientX ?? null;
        }}
        onTouchEnd={(event) => {
          if (touchStartX.current === null) return;
          const distance = event.changedTouches[0].clientX - touchStartX.current;
          touchStartX.current = null;
          if (Math.abs(distance) < 45) return;
          if (distance > 0) showPrevious();
          else showNext();
        }}
      >
        <button
          type="button"
          aria-label="Previous image"
          onClick={showPrevious}
          className="absolute inset-y-0 left-0 z-10 flex w-12 cursor-pointer items-center justify-center bg-gradient-to-r from-black/80 to-transparent text-white transition hover:from-black sm:w-24"
        >
          <IoChevronBack className="text-4xl drop-shadow" aria-hidden="true" />
        </button>

        <div className="relative h-full w-full overflow-hidden">
          <Image
            key={currentSlide}
            src={currentImage.src}
            alt={currentImage.alt}
            fill
            priority
            placeholder="blur"
            sizes="100vw"
            className="select-none object-contain"
          />
        </div>

        <button
          type="button"
          aria-label="Next image"
          onClick={showNext}
          className="absolute inset-y-0 right-0 z-10 flex w-12 cursor-pointer items-center justify-center bg-gradient-to-l from-black/80 to-transparent text-white transition hover:from-black sm:w-24"
        >
          <IoChevronForward className="text-4xl drop-shadow" aria-hidden="true" />
        </button>
      </div>

      <footer className="shrink-0 border-t border-white/10 bg-black px-3 py-3 sm:px-6">
        <p className="mb-2 truncate text-center text-xs text-white/75 sm:text-sm">{currentImage.alt}</p>
        <div className="flex justify-center gap-2" aria-label="Nearby images">
          {thumbnailIndexes.map((index) => {
            const image = library[index];
            const active = index === currentSlide;
            return (
              <button
                key={index}
                type="button"
                aria-label={`Show image ${index + 1}`}
                aria-current={active ? "true" : undefined}
                onClick={() => showSlide(index)}
                className={`relative h-11 w-16 cursor-pointer overflow-hidden rounded border-2 transition sm:h-14 sm:w-20 ${
                  active ? "border-yellow opacity-100" : "border-transparent opacity-60 hover:opacity-100"
                }`}
              >
                <Image src={image.src} alt="" fill sizes="80px" className="object-cover" />
              </button>
            );
          })}
        </div>
      </footer>
    </section>
  );
}

export default Gallery;