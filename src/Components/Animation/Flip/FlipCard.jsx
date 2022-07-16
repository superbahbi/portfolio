import "./FlipCard.css";
import ProjectBox from "../../ProjectBox";
/* FlipCard Components
  @params {string} projectImg - project image of the flip card  
  @params {string} projectTitle - project title of the flip card
  @params {array[object]} projectStack - list of technology used in the project
  @params {string} projectDesc - project description of the flip card
  @params {string} demoLink - demo link of the project
  @params {string} codeLink - code link of the project
*/
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
