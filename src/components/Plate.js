
import Image from "next/image";

export default function Plate({ hue = 100, image, alt = "", className = "" }) {
  if (image) {
    return <Image src={image} alt={alt} width={480} height={480} className={`aspect-square rounded-full object-cover ${className}`} />;
  }
  const bg = `conic-gradient(hsl(${hue} 55% 52%), hsl(${(hue + 40) % 360} 60% 60%), #B8EF75, hsl(${(hue + 300) % 360} 50% 50%), hsl(${hue} 55% 52%))`;
  return (
    <div role="img" aria-label={alt || "Блюдо"} className={`aspect-square rounded-full ${className}`} style={{ background: bg }}>
      <div className="m-[18%] h-[64%] w-[64%] rounded-full bg-milk/15" />
    </div>
  );
}
