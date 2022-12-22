import CtaList from "./CtaList";
const CtaSection = () => {
  return (
    <section id="cta-section" className="cta-section">
      <div className="container">
        <h2 className="cta-title">Contact Me</h2>
        <div className="cta-group">
          <div className="row">
            <CtaList />
          </div>
        </div>
      </div>
    </section>
  );
};
export default CtaSection;
