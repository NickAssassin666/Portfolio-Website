import ProjectList from "./ProjectList";

const ProjectSection = () => {
  return (
    <section id="projects-section" className="projects-section">
      <div className="container">
        <div className="projects-group">
          <h2 className="projects-title">My projects</h2>
          <div className="projects-info">
            <div className="projects">
              <div className="row">
                <ProjectList />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
