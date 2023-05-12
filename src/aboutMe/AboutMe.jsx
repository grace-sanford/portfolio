import "../App.css";

const AboutMe = () => {
  return (
    <div className="App">
      <div className="text">
        <p>
          Grace Sanford brings analytic, inclusive, and creative thinking
          to software development. Grace recieved her training in the Grace
          Hopper web development immersive program, where she spent over 553
          hours on full stack JavaScript development, including{" "}
          <span className="yellowgreen">React</span> and{" "}
          <span className="yellowgreen">Redux</span>,{" "}
          <span className="yellowgreen">Node</span>,{" "}
          <span className="lightblue">Express</span>, and{" "}
          <span className="lightblue">Sequelize</span> object relational mapping for{" "}
          <span className="lightblue">Postgres</span> databases.
        </p>
        <p>
          Professionally, Grace is interested in creating{" "}
          <span className="pink">accessible</span>,
          <span className="pink">performant</span>, and{" "}
          <span className="pink">financially optimal</span> solutions by
          building <span className="pink">technology that helps people</span>.
          Grace has experience in fast-paced, client-facing roles, as a
          Marketing Strategist for a gut-health podcast, an Assistant Publicist
          for business and non-fiction authors, and most recently a
          reservationist for an upscale bar and restaurant, where she designed
          and implemented a single system for tracking 1000+ clients accross 3
          platforms and 4 businesses. Grace holds a B.A. in Sociology, with a
          cerficate in Social, Cultural, and Critical Theory from Wesleyan
          University. Grace lives in New York City.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
