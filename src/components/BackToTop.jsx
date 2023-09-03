export default function BackToTop() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <span className="material-symbols-outlined" onClick={scrollToTop}>
      stat_2
    </span>
  );
}
