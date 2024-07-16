import { useState } from "react";
import resume from "../assets/myFiles/Mark_Soro_CV.pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import { pdfjs, Document, Page } from "react-pdf";
import { ResumeData } from "/src/assets/myFiles/ResumeData.jsx";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

export default function Resume() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [zoom, setZoom] = useState(1.2);
  const [cursor, setCursor] = useState("zoom-in");

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setPageNumber(1);
  };

  const toggleZoom = () => {
    setZoom(zoom === 1.2 ? 1.5 : 1.2);
    setCursor(zoom === 1.2 ? "zoom-out" : "zoom-in");
  };

  return (
    <div className="Resume">
      <div className="NameLocationDownload">
        <div>
          <h4>{ResumeData.name}</h4>
          <p>{ResumeData.location}</p>
        </div>
        <div>
          <a
            href="https://github.com/m-soro/m-soro.github.io/blob/main/src/assets/myFiles/Mark_Soro_CV.pdf?raw=true"
            download="Mark_Soro_Software_Developer"
            role="button"
            className="outline DownloadResume"
          >
            Download a copy
          </a>
        </div>
      </div>
      <div className="PdfContainer fade-in">
        <div>
          <Document file={resume} onLoadSuccess={onDocumentLoadSuccess}>
            <div style={{ cursor }}>
              <Page onClick={toggleZoom} scale={zoom} pageNumber={pageNumber} />
            </div>
          </Document>
        </div>
        <br />
        <div className="cert-logos">
          <img
            src="src/assets/images/z_other/pd1-logo.png"
            alt="Salesforce Certified Platform Developer 1 Logo"
          />
          <img
            src="src/assets/images/z_other/sys-admin-logo.png"
            alt="Salesforce Certified Adminstrator Logo"
          />
        </div>
        <br />
        <br />
        <p>
          Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
        </p>
      </div>
    </div>
  );
}
