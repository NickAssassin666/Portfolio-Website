import Profile from "../../assets/img/hero-img.jpg";
const HeroMain = () => {
  return (
    <main className="hero-main">
      <div className="container">
        <div className="headings">
          <h1>Mechanical Engineer, Full Stack Developer & A Noobie Designer</h1>
          <h4>
            I design and code beautifully simple things, and I love what I do.
          </h4>
          <div className="main-img">
            <img src={Profile} alt="hero image" />
          </div>
        </div>
      </div>
    </main>
  );
};
export default HeroMain;
