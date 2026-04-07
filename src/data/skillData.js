// src/data/skillData.js

import Canva from "../assets/icon/canva.png";
import Chatgpt from "../assets/icon/chatgpt.png";
import Css from "../assets/icon/css.png";
import Figma from "../assets/icon/figma.png";
import Git from "../assets/icon/git.png";
import Github from "../assets/icon/github.png";
import Html from "../assets/icon/html-icon.png";
import JS from "../assets/icon/js.png";
import Motion from "../assets/icon/motion.png";
import Prototype from "../assets/icon/prototype.png";
import React from "../assets/icon/react.png";
import Responsive from "../assets/icon/responsive-design.png";
import Tailwind from "../assets/icon/tailwind.png";
import User from "../assets/icon/user-research.png";
import Vercel from "../assets/icon/vercel.png";
import VS from "../assets/icon/vs-code.png";
import Wireframe from "../assets/icon/wireframing.png";

export const skillData = [
  {
    category: "Frontend Development",
    items: [
      { name: "HTML", icon: Html },
      { name: "CSS", icon: Css },
      { name: "JavaScript", icon: JS },
      { name: "Tailwind", icon: Tailwind },
      { name: "React JS", icon: React },
      { name: "Framer Motion", icon: Motion },
    ],
  },

  {
    category: "UI/UX Design",
    items: [
      { name: "Figma", icon: Figma },
      { name: "Canva", icon: Canva },
      { name: "Wireframe", icon: Wireframe },
      { name: "Prototyping", icon: Prototype },
      { name: "User Research", icon: User },
      { name: "Responsive", icon: Responsive },
    ],
  },
  {
    category: "Tools & Others",
    items: [
      { name: "Git", icon: Git },
      { name: "Github", icon: Github },
      { name: "VS Code", icon: VS },
      { name: "Vercel", icon: Vercel },
      { name: "ChatGPT", icon: Chatgpt },
    ],
  },
];
