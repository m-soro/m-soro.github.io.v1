export default function BackToTop() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    // <img src="src/assets/images/rocketBlue.svg" onClick={scrollToTop} alt="" />
    <div className="BackToTopContainer" onClick={scrollToTop}>
      <small style={{ color: "aqua" }}>Back to top</small>
      <span className="material-symbols-outlined">stat_2</span>
    </div>
  );
}
