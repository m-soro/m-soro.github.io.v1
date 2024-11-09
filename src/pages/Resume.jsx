import { useState } from "react";
import resume from "../assets/myFiles/Mark_Soro_CV.pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import { pdfjs, Document, Page } from "react-pdf";
import { Skeleton } from "@mui/material";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

export default function Resume() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [zoom, setZoom] = useState(1.2);
  const [cursor, setCursor] = useState("zoom-in");
  const [pdfLoaded, setPdfLoaded] = useState(false);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setPageNumber(1);
    setPdfLoaded(true);
  };

  const toggleZoom = () => {
    setZoom(zoom === 1.2 ? 1.5 : 1.2);
    setCursor(zoom === 1.2 ? "zoom-out" : "zoom-in");
  };
  return (
    <div className="Resume">
      <div className="NameLocationDownload">
        <div className="name-location">
          <h4>Mark Soro</h4>
          <p>Alexandria, Virginia</p>
        </div>
        <div className="download-and-certs">
          <div className="cert-logos">
            <img
              src="https://github.com/m-soro/m-soro.github.io/blob/main/src/assets/images/z_other/pd1-logo.png?raw=true"
              alt="Salesforce Certified Platform Developer 1 Logo"
              // style={{ height: "70px", width: "auto" }}
            />
            <img
              src="https://github.com/m-soro/m-soro.github.io/blob/main/src/assets/images/z_other/sys-admin-logo.png?raw=true"
              alt="Salesforce Certified Adminstrator Logo"
              // style={{ height: "70px", width: "auto" }}
            />
          </div>
          <a
            href="https://github.com/m-soro/m-soro.github.io/blob/main/src/assets/myFiles/Mark_Soro_CV.pdf?raw=true"
            download="Mark_Soro_Software_Developer"
            role="button"
            className="outline DownloadResume"
          >
            Download Copy
          </a>
        </div>
      </div>
      <div className="PdfContainer fade-in">
        <div>
          {!pdfLoaded && (
            <Skeleton
              variant="rectangular"
              width={595} // Standard PDF width
              height={842} // Standard PDF height
              animation="wave"
              sx={{
                bgcolor: "rgba(255, 255, 255, 0.1)",
                "&::after": {
                  background:
                    "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)",
                  animation: "wave 1.6s linear 0.5s infinite",
                },
              }}
            />
          )}
          <Document file={resume} onLoadSuccess={onDocumentLoadSuccess}>
            <div style={{ cursor, display: pdfLoaded ? "block" : "none" }}>
              <Page onClick={toggleZoom} scale={zoom} pageNumber={pageNumber} />
            </div>
          </Document>
        </div>
        <br />
        <p>
          Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
        </p>
      </div>
    </div>
  );
}
