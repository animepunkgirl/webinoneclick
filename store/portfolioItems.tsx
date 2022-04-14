import PortfolioItem from "../types/PortfolioItem";
import React from "react";
import FeelzImage from "../public/portfolio/feelz.png";
import ECommerceImage from "../public/portfolio/pets-ecommerce.png";
import PetSliderImage from "../public/portfolio/pet-slider.png";

export const portfolioItems: PortfolioItem[] = [
  {
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
  }
]