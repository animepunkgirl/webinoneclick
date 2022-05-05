import PortfolioItem from "@Types/PortfolioItem";
import React from "react";
import FeelzImage from "portfolio/feelz.png";
import ECommerceImage from "/portfolio/pets-ecommerce.png";
import PetSliderImage from "/portfolio/pet-slider.png";
import HomeImage from "/portfolio/home.jpg";

export const portfolioItems: PortfolioItem[] = [
  {
    id: 0,
    image: FeelzImage,
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
    id: 1,
    image: ECommerceImage,
    isPetProject: true,
    title: "E-Commerce (not ready)",
    url: "/pets-commerce",
    description: "My pet project based on the [Hekto](https://www.figma.com/community/file/967759864749832815) design",
    features: [
      "Responsive design",
      "Responsive sliders",
      "Implementing **basket** and **wishlist**",
    ],
    madeWith: "React, Swiper, Styled Components"
  },
  {
    id: 2,
    image: PetSliderImage,
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
    image: HomeImage,
    url: "/#",
    isPetProject: true,
    title: "WebInOne.Click",
    description: "Actually my portfolio website where you are right now",
    features: [
      "Responsive design",
      "Using Swiper for full page slider at PC"
    ],
    madeWith: "React / Next.js, Swiper, Styled Components, Recoil"
  }
]