import { PropertyGalleryLib } from "@/lib/property_gallery";
import Image from "next/image";

type Props = {
  handleImageClick: (index: number) => void;
};

function PhotogalleriesImages({ handleImageClick }: Props) {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {PropertyGalleryLib.images.slice(0, 4).map((image, index) => (
        <button
          key={index}
          type="button"
          aria-label={image.alt}
          className="relative w-full aspect-[3/2] rounded-md overflow-hidden"
          onClick={() => handleImageClick(index)}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            placeholder="blur"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="cursor-pointer object-cover rounded-md block w-full h-full hover:opacity-90"
          />
        </button>
      ))}
    </div>
  );
}

export default PhotogalleriesImages;
