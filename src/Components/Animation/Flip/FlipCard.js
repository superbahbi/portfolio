import "./FlipCard.css";
import ProjectBox from "../../ProjectBox";

export default function FlipCard({
  projectImg,
  projectTitle,
  projectStack,
  projectSubTitle,
  projectDescription,
  demoLink,
  codeLink,
}) {
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-back">
          <ProjectBox
            projectTitle={projectTitle}
            projectStack={projectStack}
            projectSubTitle={projectSubTitle}
            projectDescription={projectDescription}
            demoLink={demoLink}
            codeLink={codeLink}
          />
        </div>
        <div className="card-front">
          <ProjectBox projectImg={projectImg} />
        </div>
      </div>
    </div>
  );
}
