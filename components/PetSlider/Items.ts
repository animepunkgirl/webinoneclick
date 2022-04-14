import {StaticImageData} from "next/image";

interface Item {
  label: string,
  title: string,
  text: string,
  image: string
}

const Items: Item[] = [
  {
    label: "Pandas",
    title: "Giant pandas: Living proof that conservation works",
    text: "The charismatic giant panda – WWF’s famous symbol – is a conservation icon turned conservation success.",
    image: "/pet-slider/bg1.png"
  },
  {
    label: "Elephants",
    title: "Strong, smart, but vulnerable",
    text: "Following population declines over several decades due to poaching for ivory and loss of habitat, the African forest elephant is now listed as Critically Endangered.",
    image: "/pet-slider/bg2.png"
  },
  {
    label: "Gorillas",
    title: "Mountain gorillas: Close relatives at risk",
    text: "By protecting mountain gorillas we’re helping make sure their environment stays healthy for the wildlife and people that depend on it.",
    image: "/pet-slider/bg3.png"
  }
]

export default Items
