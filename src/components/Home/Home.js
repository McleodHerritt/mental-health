import React from "react";
import "../Home/Home.css";
import HomeImage from "../../Images/home-image.png";
const Home = () => {
  return (
    <main>
      <section className="section-one-home">
        <div className="homeImg">
          <img src={HomeImage} alt="Mental Health Matters" />
        </div>
        <div className="homeText">
          <article>
            <div className="intro-1">
              <p>Welcome to Mind Space!</p>
            </div>
            <div className="intro-para">
              <p className="intro">This is a place where you can learn about Workplace mental health and wellness.</p>
              <p className="intro">A place to find resources and information on mental health and wellness. </p>
              <p className="intro">Information on workplace mental health, and how to</p>
              <p className="intro">find work-Life balance.</p>
              <p className="intro">You can find links to online support groups, mental health organizations, </p>
              <p className="intro">and mental health professionals.</p>
              <p className="intro">We are here to help you learn more about mental health and wellness.</p>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
};

export default Home;
