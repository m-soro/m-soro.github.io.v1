import TransitionImage from "../components/TransitionImage";
export default function Home() {
  return (
    <div className="Home fade-in">
      <section className="container">
        <h1>Hi,</h1>
        <blockquote className="loader">
          <p className="home-text">
            I'm Mark, a Salesforce-certified software developer based in
            Alexandria, Virginia. I specialize in creating intuitive
            applications using Apex, JavaScript, Python, and web technologies.
          </p>
          <p className="home-text">
            With experience in developing and customizing robust Salesforce
            applications, I thrive on transforming ideas into seamless digital
            experiences. My diverse skill set and passion for coding enable me
            to excel in both Salesforce-specific projects and general software
            development roles.
          </p>
        </blockquote>
      </section>
      <section>
        <TransitionImage
          src="https://avatars.githubusercontent.com/u/63247801?v=4"
          alt="Mark Soro"
        />
      </section>
    </div>
  );
}
