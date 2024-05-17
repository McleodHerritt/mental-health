import React, { useState } from "react";
import "./WorkStress.css";
import QuoteImg from "../../Images/Work-Stress-Quotes-Funny-Meme.png";
import hopeImg from "../../Images/hope.png";

const WorkStress = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleAddComment = () => {
    if (newComment.trim() !== "") {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  return (
    <div className="work-stress-content">
      <section className="work-stress-section-one">
        <article>
          <div className="intro-container">
            <h1 className="intro-title">Work Stress</h1>
            <p className="work-stress-intro">
              Work stress is the harmful physical and emotional response that occurs when there is a poor match between job demands and the
              capabilities, resources, or needs of the worker. Work stress can lead to poor health and even injury.
            </p>
          </div>
          <div className="common-causes-container">
            <div className="QuoteImg">
              <img src={QuoteImg} alt="funny joke" />
            </div>
            <div className="work-stress-container">
              <p className="section-intro">Common causes of work stress include:</p>
              <ul className="section-list">
                <li>Long hours</li>
                <li>Heavy workload</li>
                <li>Job insecurity</li>
                <li>Conflicts with coworkers or bosses</li>
                <li>Low job satisfaction</li>
              </ul>
            </div>
          </div>
          <div className="effects-container">
            <p className="section-intro">
              It is important to manage work stress to prevent negative health effects. Some strategies for managing work stress include:
            </p>
            <ul className="section-list">
              <li>Setting boundaries between work and personal life</li>
              <li>Practicing relaxation techniques</li>
              <li>Exercising regularly</li>
              <li>Seeking support from friends, family, or a therapist</li>
            </ul>
          </div>
          <div className="end-container">
            <p className="section-intro">
              Remember, it is okay to ask for help if you are feeling overwhelmed by work stress. Your health and well-being are important.
            </p>
          </div>
        </article>
      </section>
    </div>
  );
};

export default WorkStress;
