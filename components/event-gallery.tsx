"use client";

import { useEffect, useRef, useState } from "react";

type EventGalleryProps = {
  title: string;
  photos: string[];
};

export function EventGallery({ title, photos }: EventGalleryProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (selectedPhoto && dialog && !dialog.open) dialog.showModal();
  }, [selectedPhoto]);

  return (
    <>
      <div className="event-gallery">
        {photos.map((photo, index) => (
          <button
            className={`gallery-photo gallery-photo-${index + 1}`}
            key={photo}
            type="button"
            aria-label={`הגדלת תמונה ${index + 1}: ${title}`}
            onClick={() => setSelectedPhoto(photo)}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={photo} alt={`${title} — תמונה ${index + 1}`} />
          </button>
        ))}
      </div>
      <dialog
        className="image-lightbox"
        ref={dialogRef}
        aria-label={`תמונה מוגדלת: ${title}`}
        onClick={(event) => {
          if (event.target === event.currentTarget) dialogRef.current?.close();
        }}
        onClose={() => setSelectedPhoto(null)}
      >
        {selectedPhoto && (
          <>
            <button
              className="image-lightbox-close"
              type="button"
              aria-label="סגירה"
              onClick={() => dialogRef.current?.close()}
            >
              ×
            </button>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={selectedPhoto} alt={`תמונה מוגדלת: ${title}`} />
          </>
        )}
      </dialog>
    </>
  );
}
