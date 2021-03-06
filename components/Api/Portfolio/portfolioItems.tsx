import PortfolioItem from "@Types/PortfolioItem";
import React from "react";

export const portfolioItems: PortfolioItem[] = [
  {
    id: 0,
    image: "/portfolio/feelz.jpg",
    isPetProject: false,
    title: "FeelzApp",
    url: "https://thefeelzapp.com",
    description: `My first order on [Upwork](${process.env.NEXT_PUBLIC_UPWORK_LINK}), made a fully working website from Figma design`,
    features: [
      "Responsive design",
      "Implementing registration",
      "Implementation of the ability to **take selfies online**, crop a photo",
      "Implementing **\"Expression Collage\"**: uploading images, adding text entries and selecting emoji from a list of available"
    ],
    madeWith: "MongoDB, Express, React, Node.js, AWS S3"
  },
  {
    id: 2,
    image: "/portfolio/pet-slider.jpg",
    isPetProject: true,
    title: "Fullscreen Slider",
    url: "/pet-slider",
    description: "My pet project based on the [Animated slider](https://www.figma.com/file/HArpRF5MQ6AEt3DoktJE8W) design",
    features: [
      "Fullscreen",
      "**Fully responsive** slider that changes its appearance depending on the screen size"
    ],
    madeWith: "React, Swiper, Styled Components"
  },
  {
    id: 3,
    image: "/portfolio/home.jpg",
    url: process.env.NEXT_PUBLIC_GITHUB_LINK!,
    isPetProject: true,
    title: "WebInOne.Click",
    description: "This is my portfolio website, where you are now",
    features: [
      "Responsive design",
      "Using Swiper for full page slider at Tablet / PC",
      "Using custom hooks for media-queries and menu scrolling"
    ],
    madeWith: "React / Next.js, Swiper, Styled Components, Recoil"
  },
  {
    id: 4,
    image: "/portfolio/smartannie.jpg",
    url: "https://smartannie.com",
    isPetProject: false,
    title: "SmartAnnie",
    description: "I was developing the UI on React and RESTful API on Node.js/Express.\n" +
      "I worked on supporting and rewriting legacy code, scaling functionality and layout of the new design, discussed and implemented various improvements to optimize code and user experience",
    remarkable: [
      "Uploading images using AWS S3 as storage",
      "Working with animations (including animations of the appearance/disappearance of components, such as modal windows)",
      "Navigation on the sidebar using the hash router",
      "Functionality of user notifications via SMS and Email after a certain time (for example, reminder of an upcoming meeting for the user)"
    ],
    madeWith: "React, Express / Node.js, Styled Components, MongoDB"
  }
]