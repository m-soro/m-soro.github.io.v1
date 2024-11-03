import { Card, AspectRatio, Typography, CardContent } from "@mui/joy";
import { useState } from "react";

export default function Impact() {
  const [flipped, setFlipped] = useState({});

  const impactData = [
    {
      id: 1,
      title: "Enhanced USPS Data Accuracy",
      image:
        "https://img.icons8.com/external-flat-lima-studio/256/external-data-data-analytics-flat-lima-studio.png",
      content:
        "Streamlined service request forms across multiple platforms improving data consistency and user experience",
      details:
        "Updated 'Did this mailpiece contain?' field label across multiple interfaces and expanded the picklist options. Maintained single-select functionality and ensured all validation rules, API names, and page layouts remained consistent.",
    },
    {
      id: 2,
      title: "Optimized Customer Feedback",
      image:
        "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/256/external-feedback-customer-feedback-flaticons-lineal-color-flat-icons-2.png",
      content:
        "Redesigned personnel compliment system enabling effective recognition while maintaining service transparency",
      details:
        "Adjusted auto-close rules in Email Us for personnel compliments, modified flow logic to allow re-open cases, and updated confirmation message templates. Enhanced handling of 1-800-ASK-USPS agent compliments.",
    },
    {
      id: 3,
      title: "Smart Request Management",
      image:
        "https://img.icons8.com/external-flaticons-flat-flat-icons/256/external-automation-computer-programming-flaticons-flat-flat-icons.png",
      content:
        "Implemented intelligent package tracking rules reducing unnecessary requests and improving service efficiency",
      details:
        "Modified C360_EUPackageInquiry flow to restrict service request creation based on USPS possession days. Implemented sophisticated logic for handling different package scenarios and updated multiple formulas and decision nodes.",
    },
  ];

  const handleFlip = (id) => {
    setFlipped((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="fade-in">
      <h1>Impact Delivered</h1>
      <br />
      <p>
        Although I'm still in the early stages of my career, I've been focused
        on delivering tangible benefits to my team and for my clients. Ensuring
        high-impact solutions that scale across diverse user bases.
      </p>
      <p>Here's how my work has driven meaningful outcomes:</p>

      <div className="ProjectContainer" style={{ gap: "2em" }}>
        {impactData.map((impact) => (
          <div
            key={impact.id}
            className="card-container"
            style={{
              perspective: "1000px",
              width: "375px",
              height: "400px",
            }}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "100%",
                transformStyle: "preserve-3d",
                transition: "transform 0.6s",
                transform: flipped[impact.id] ? "rotateY(180deg)" : "",
              }}
              onClick={() => handleFlip(impact.id)}
            >
              {/* Front of card */}
              <Card
                variant="soft"
                sx={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  backfaceVisibility: "hidden",
                  backgroundColor: "transparent",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  cursor: "pointer",
                  "&:hover": {
                    boxShadow: "0.1px 0.1px 5px var(--muted-color)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                  },
                }}
              >
                <AspectRatio minHeight="150px" maxHeight="150px">
                  <img src={impact.image} alt={impact.title} loading="lazy" />
                </AspectRatio>
                <CardContent>
                  <Typography level="h2" className="card-title">
                    {impact.title}
                  </Typography>
                  <Typography
                    level="body-md"
                    sx={{ color: "var(--muted-color)" }}
                  >
                    {impact.content}
                  </Typography>
                </CardContent>
              </Card>

              {/* Back of card */}
              <Card
                variant="soft"
                sx={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  backfaceVisibility: "hidden",
                  backgroundColor: "transparent",
                  transform: "rotateY(180deg)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  padding: "2em",
                }}
              >
                <Typography
                  level="body-md"
                  sx={{ color: "var(--muted-color)" }}
                >
                  {impact.details}
                </Typography>
              </Card>
            </div>
          </div>
        ))}
      </div>

      <p>
        <br />
        Every line of code I write is driven by the impact it will have on the
        end-user. I'm passionate about building solutions that not only work but
        deliver real value at scale.
      </p>
    </div>
  );
}
