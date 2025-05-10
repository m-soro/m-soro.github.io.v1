import { useInView } from "react-intersection-observer";

export default function TransitionImage({ src, alt }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <img
      ref={ref}
      src={src}
      alt={alt}
      style={{
        filter: inView ? "grayscale(0%)" : "grayscale(100%)",
        transition: "all 1.5s ease-in-out",
        boxShadow: inView ? "0 15px 25px -12px rgba(0, 0, 0, 0.4)" : "none",
        transform: inView
          ? "perspective(1000px) rotateX(2deg) rotateY(-2deg) translateZ(20px)"
          : "perspective(1000px) rotateX(0) rotateY(0) translateZ(0)",
        transformStyle: "preserve-3d",
        transformOrigin: "center center",
      }}
    />
  );
}
