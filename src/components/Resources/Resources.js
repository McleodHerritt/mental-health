import React from "react";
import "./Resources.css";
import copingImg from "../../Images/work-stress-title-image_tcm7-212368.jpg";
import managmentIng from "../../Images/Workplace-Stress-Management-300x150.webp";
import TipsImg from "../../Images/Tips.jpg";
import stressImg from "../../Images/handle-stress.jpg";
import manageStressImg from "../../Images/stress-management.jpg";
import workLifeImg from "../../Images/work-life-balance.jpg";
// List of resources
const resources = [
  {
    Image: copingImg,
    id: 1,
    title: "Coping with stress at work",
    url: "https://novascotia.cmha.ca/mental-health-in-the-workplace/",
    description: "Provides insights into common workplace stressors and offers practical advice for managing stress.",
  },
  {
    Image: managmentIng,
    id: 2,
    title: "Healthy minds at work: Workplace stress management",
    url: "https://www.ccohs.ca/healthyminds",
    description: "Offers strategies and worksheets to help manage and mitigate stress in the workplace.",
  },
  {
    Image: TipsImg,
    id: 3,
    title: "14 Tips to Manage Work Stress and Avoid Burnout",
    url: "https://www.williamoslerhs.ca/en/news/workplace-burnout-and-fatigue-causes_-symptoms-and-coping-strategies.aspx",
    description: "Explore various tips to handle stress effectively and avoid burnout, enhancing overall workplace wellbeing.",
  },
  {
    Image: stressImg,
    id: 4,
    title: "How to handle stress at work",
    url: "https://www.mindwell-leeds.org.uk/myself/exploring-your-mental-health/stress/finding-helpful-coping-strategies/ten-strategies-for-coping-with-stress-at-work/",
    description: "Strategies for coping with stress at work.",
  },
  {
    Image: manageStressImg,
    id: 5,
    title: "Managing Work Stress: Effective Strategies",
    url: "https://psychology.org.au/for-the-public/psychology-topics/stress-in-the-workplace/evidence-based-psychological-approaches-and-strate",
    description: "Learn effective strategies to cope with stress in professional settings, promoting better mental health.",
  },
  {
    Image: workLifeImg,
    id: 6,
    title: "Finding Work-Life Balance in Stressful Jobs",
    url: "https://www.verywellmind.com/maintaining-balance-in-your-lifestyle-3144738",
    description: "Explore practical tips for managing work stress and maintaining a healthy balance with home life.",
  },
];

const StressResources = () => {
  return (
    <div>
      <h1 className="resource-title">Work-Related Stress Resources</h1>
      <ul className="stress-resources">
        {resources.map((resource) => (
          <li key={resource.id}>
            <div className="container-1">
              <img src={resource.Image} alt="Coping with stress" />
              <a href={resource.url} target="_blank" rel="noopener noreferrer">
                {resource.title}
                <p>{resource.description}</p>
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StressResources;
