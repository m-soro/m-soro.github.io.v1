import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ProjectData } from "/src/assets/myFiles/ProjectData.jsx";

export default function Project() {
  const [project, setProject] = useState("");
  const [created, setCreated] = useState("");
  const [updated, setUpdated] = useState("");
  const [tags, setTags] = useState([]);

  const params = useParams();
  const projectId = params.projectId;

  const getProject = () => {
    for (let project of ProjectData) {
      if (projectId == project.id) {
        return project;
      }
    }
  };

  useEffect(() => {
    setProject(getProject());
    setCreated(getData());
    setUpdated(getData());
  }, [project]);

  const getBullets = () => {
    return project.projectBullets.map((bullet, index) => (
      <li key={index}>{bullet}</li>
    ));
  };

  // const convertToLink = (string) => {
  //   let stringArray = string.split(" ");
  //   let url = stringArray.filter((url) => url.includes(".com", "http"));
  //   return string.replace(url, <a href={url}>Link</a>);
  //   // return string.replace(url, <a href={url}>Link</a>);
  // };

  const getMoreDetails = () => {
    return project.moreDetail.map((detail, index) => (
      <p key={index}>
        {detail}
        {/* {detail.indexOf("https", 0) >= 1 ? convertToLink(detail) : detail} */}
      </p>
    ));
  };

  const getImages = () => {
    return project.images.map((image, index) => (
      <swiper-slide key={index}>
        <img src={image} alt={project.projectName} />
      </swiper-slide>
    ));
  };

  const getIcons = () => {
    return project.stack.map((icon, index) => (
      <img
        src={icon}
        alt={icon.split(".")[1].split("/").pop()}
        key={index}
        className="TechIcons"
      />
    ));
  };

  const createTags = (tags) => {
    return tags.map((tag, index) => {
      return (
        <li className="Project-Tags" key={index}>
          {tag}
        </li>
      );
    });
  };

  const getData = async () => {
    try {
      let response = await fetch(project.repoAPI);
      if (response.ok) {
        const json = await response.json();
        const [createdAt, updatedAt] = [json.created_at, json.pushed_at];
        setCreated(createdAt);
        setUpdated(updatedAt);
        setTags(json.topics);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const createElement = (label, data) => {
    const timestamp = Date.parse(data);
    const date = new Date(timestamp);
    const formattedDate = `${date.toDateString().substring(4)}`;
    return (
      <p>
        {label} {formattedDate}
      </p>
    );
  };

  return (
    <div className="ProjectDetail">
      <article>
        <section>
          <h1>{project.projectName}</h1>
          <div className="ProjectDates">
            {created ? createElement("created: ", created) : <p></p>}
            {updated ? createElement("updated: ", updated) : <p></p>}
          </div>
          <hr />

          <br />
          <p>{project.summary}</p>
          <div className="ProjectSwiperContainer">
            <swiper-container
              slides-per-view="1"
              loop="true"
              navigation="true"
              pagination="true"
              grabCursor="true"
              simulateTouch="true"
              loopedSlides={project.images ? project.images.length : null}
            >
              {project.images ? getImages() : <div></div>}
            </swiper-container>
          </div>
        </section>

        <section>
          {project.projectBullets ? <ul>{getBullets()}</ul> : <div></div>}
        </section>
        <section>
          <h4>About</h4>
          <br />
          <hgroup>
            {project.moreDetail ? <div>{getMoreDetails()}</div> : <div></div>}
            <a href={project.repoLink}>GitHub Repo</a>
            <p></p>
          </hgroup>

          <section>
            <hgroup>
              {tags ? (
                <>
                  <h6>Tags</h6>
                  <ul className="Tags-Container">{createTags(tags)}</ul>
                  <p></p>
                </>
              ) : (
                <div></div>
              )}
            </hgroup>
          </section>

          <hgroup>
            <h4>Built with</h4>
            <br />
            {project.stack ? getIcons() : <div></div>}
          </hgroup>
          <div className="ProjectNavButtons">
            <button className="outline BackToProjects">
              <Link to="/projects">back</Link>
            </button>
            <button className="outline DemoButton">
              <a href={project.demoLink}>launch it!</a>
            </button>
          </div>
        </section>
      </article>
    </div>
  );
}
