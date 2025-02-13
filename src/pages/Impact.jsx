import { Card, AspectRatio, Typography, CardContent } from "@mui/joy";
import { ImpactData } from "../assets/myFiles/ImpactData";

export default function Impact() {
  return (
    <article className="fade-in">
      <header>
        <h1>Impact Delivered</h1>
      </header>
      <p>
        Committed to delivering real value, I focus on building scalable,
        high-impact solutions that enhance efficiency and user experience.
        Here’s how a few of my work have made a meaningful difference:
      </p>

      <div className="ProjectContainer" style={{ gap: "1.2em" }}>
        {ImpactData.map((impact) => (
          <Card
            key={impact.id}
            variant="soft"
            sx={{
              width: 300,
              backgroundColor: "transparent",
              transition: "all 0.3s ease",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              cursor: "pointer",
              "&:hover": {
                boxShadow: "0.1px 0.1px 5px var(--muted-color)",
                transform: "translateY(-2px)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                "& .card-title": {
                  color: "aqua",
                },
              },
            }}
          >
            <AspectRatio
              minHeight="120px"
              maxHeight="120px"
              sx={{
                "& img": {
                  objectFit: "contain",
                  width: "60%",
                  height: "60%",
                },
              }}
            >
              <img src={impact.image} alt={impact.title} loading="lazy" />
            </AspectRatio>
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
                position: "relative",
              }}
            >
              <Typography
                className="card-title"
                sx={{
                  fontSize: "sm",
                  color: "white",
                  fontWeight: 300,
                  transition: "color 0.3s ease",
                }}
              >
                {impact.title}
              </Typography>
              <Typography
                level="body-xs"
                sx={{
                  color: "var(--muted-color)",
                  fontWeight: 200,
                  marginBottom: "0.3rem",
                }}
              >
                {impact.content}
              </Typography>
              <Typography
                level="body-xs"
                sx={{
                  color: "var(--muted-color)",
                  fontSize: "0.6rem",
                  fontStyle: "italic",
                  opacity: 0.8,
                  marginTop: "auto",
                  fontWeight: 200,
                  alignSelf: "flex-end",
                }}
              >
                {impact.footer}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
      <br />
      <p>
        Driven by a focus on measurable impact, I build solutions that go beyond
        functionality to deliver real value for end-users. I approach every
        project with a problem-solving mindset, ensuring measurable improvements
        in efficiency, accuracy, and user experience.
      </p>
    </article>
  );
}
