export default function Footer() {
  const dateObj = new Date();
  const year = dateObj.getFullYear();
  return (
    <div className="Footer">
      <p>&copy; msoro {year} </p>
    </div>
  );
}
