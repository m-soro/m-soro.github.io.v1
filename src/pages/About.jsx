import TransitionImage from "../components/TransitionImage";
export default function About() {
  return (
    <article className="About fade-in">
      <h1>About Me</h1>

      <hr></hr>
      <br />
      <p>
        Hey there, welcome to my side of the web! 🌐 I'm a passionate Salesforce
        developer with a background in web development using the MERN stack. I
        completed a transformative four-month Software Engineering Certificate
        Program at Per Scholas in 2023, a major step in my software development
        journey.
      </p>
      <p>
        Before focusing into this awesome tuition-free program, I spent
        considerable time self-studying and working on personal projects,
        gearing up for the challenges ahead.
      </p>
      <p>
        Balancing a full-time role in a different field, I managed to set aside
        enough resources to cover my expenses, allowing me to fully immerse
        myself in the program.
      </p>
      <p>
        In 2023, I finally got my United States citizenship — huge moment
        considering I first landed from the Philippines with just one contact
        person. Being a first-gen American, I'm truly thankful for the
        opportunities this country has opened up for me. 🇵🇭🇺🇸
      </p>
      <p>
        What sets me apart? Definitely my never-give-up attitude, optimism, and
        relentless determination. 💪
      </p>
      <p>
        Fluent in both English and Tagalog, I'm soaking up life in the buzzing
        DC area with my amazing partner! 🌟🏙️
      </p>
      <article>
        <figure>
          <TransitionImage
            src="https://github.com/m-soro/m-soro.github.io/blob/main/src/assets/images/z_profilePics/me002.jpg?raw=true"
            alt="Mark Soro, in his U.S. Citizenhip ceremony"
          />
          <figcaption>In my U.S. citizenship oath taking ceremony</figcaption>
        </figure>
      </article>
    </article>
  );
}
