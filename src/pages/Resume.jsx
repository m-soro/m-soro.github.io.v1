import { ResumeData } from "/src/assets/myFiles/ResumeData.jsx";

export default function Resume() {
  return (
    <div className="Resume">
      <section className="NameLocationDownload">
        <div>
          <h4>{ResumeData.name}</h4>
          <p>{ResumeData.location}</p>
        </div>
        <div>
          <a
            href="src/assets/myFiles/Mark_Soro_Software_Developer.pdf"
            download="Mark_Soro_Software_Developer"
            role="button"
            className="outline DownloadResume"
          >
            Download a copy
          </a>
        </div>
      </section>

      <section>
        <h4>Profile</h4>
        <ul className="ProfileBullets">
          {ResumeData.profile.map((bullet, index) => (
            // eslint-disable-next-line react/jsx-key
            <li key={index}>{bullet}</li>
          ))}
        </ul>
      </section>

      <section>
        <h4>Tech Skills</h4>
        <div className="TechSkills">
          {ResumeData.techSkills.map((skill, index) => (
            <p key={index}>{skill}</p>
          ))}
        </div>
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
        <h4>Technical Certifications</h4>
        <br />
        {ResumeData.technicalCertifications.map((certificate, index) => (
          <ul key={index} className="TechnicalCertifications">
            <li>
              <a href={certificate.certificateUrl}>
                {certificate.certificateName}
              </a>
            </li>
            <li>{certificate.certificateDetails}</li>
          </ul>
        ))}
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

      <br />
      <section>
        <h5>Languages</h5>
        <p>{ResumeData.languange}</p>
      </section>
    </div>
  );
}
