export default function Footer() {
  const dateObj = new Date();
  const year = dateObj.getFullYear();
  return (
    <div className="Footer">
      <p>
        &copy; msoro {year} |{" "}
        <a href="https://m-soro.github.io/#/contact">contact</a>
      </p>
    </div>
  );
}
