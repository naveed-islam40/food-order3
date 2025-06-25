import { useIsMobile } from "@/hooks/useMobile";

export default function Banner() {
  const isMobile = useIsMobile(640);
  return (
    <div className="relative w-full h-[400px] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: isMobile
            ? "url('/png/mobile_blog.png')"
            : "url('/png/blog_banner.png')",
        }}
      />
    </div>
  );
}
