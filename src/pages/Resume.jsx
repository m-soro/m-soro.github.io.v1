import { ResumeData } from "/src/assets/myFiles/ResumeData.jsx";

export default function Resume() {
  return (
    <div className="Resume">
      <section>
        <h4>{ResumeData.name}</h4>
        <p>{ResumeData.location}</p>
      </section>
      <h4>Profile</h4>
      <p className="ProfileText">{ResumeData.profile}</p>
      <section>
        <h4>Tech Skills</h4>
        <div className="TechSkills">
          {ResumeData.techSkills.map((skill, index) => (
            <p key={index}>{skill}</p>
          ))}
        </div>
      </section>
      <section>
        <h4 className="ExperienceText">Experience</h4>
        {ResumeData.workExp.map((info, index) => (
          <section className="EachJob" key={index}>
            <h5>{info.jobTitle}</h5>
            <p>{info.companyName}</p>
            <p>{info.location}</p>
            <p>{info.duration}</p>

            {info.bullets.map((bullet, index) => (
              <ul key={index}>
                <li>{bullet}</li>
              </ul>
            ))}
          </section>
        ))}
      </section>
      <section className="Education">
        <h4>Education</h4>
        <br />
        {ResumeData.education.map((info, index) => (
          <hgroup key={index}>
            <h5>{info.field}</h5>
            <p>{info.institution}</p>
            <p></p>
          </hgroup>
        ))}
      </section>
      <br />
      <section>
        <h5>Language</h5>
        <p>{ResumeData.languange}</p>
      </section>
    </div>
  );
}
