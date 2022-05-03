import React, {useEffect, useState} from 'react';
import { Typing } from "./Subtitle.styles";
import {Text} from "@Home/UI";
import {useRecoilValue} from "recoil";
import {isWideAtom} from "@store/Home";

const finalText = [
  "const",
  " Info =",
  " {",
  " fullStackDeveloper, React, NodeJs ",
  "}"
]

const Subtitle = () => {
  const [animeState, setAnimeState] = useState<"initial" | "typing" | "ending" | "end">("initial")
  const isWide = useRecoilValue(isWideAtom)
  const [currentWord, setCurrentWord] = useState(-1)
  const [text, setText] = useState<string[]>(["", "", "", "", ""])

  useEffect(() => {
    setCurrentWord(isWide ? 0 : 2)
    if(animeState === "initial")
      setTimeout(() => {
        setAnimeState("typing")
      }, 2000)

    if(animeState === "ending")
      setTimeout(() => {
        setAnimeState("end")
      }, 1500)
  }, [isWide, animeState])

  useEffect(() => {
    if(animeState !== "typing")
      return

    const current = text[currentWord]
    const final = finalText[currentWord]

    const min = 40
    const max = 50
    const delay = Math.random() * (max - min + 1) + min

    if(!final)
      return;

    if(current?.length !== final.length) {
      setTimeout(() => {
        const copy = [...text]
        const nextSymbol = final[current?.length ?? 0]
        copy[currentWord] += nextSymbol
        setText(copy)
      }, delay)

      return;
    }

    if(currentWord !== text.length - 1) {
      setTimeout(() => {
        setCurrentWord(prev => prev + 1)
      }, delay)
      return;
    } else {
      setAnimeState("ending")
    }

  }, [animeState, text, currentWord])

  useEffect(() => {
    console.log(animeState, currentWord)
  }, [animeState, currentWord])

  return (
    <Typing
      isCursorFlickering={animeState !== "typing"}
    >
      <Text type="h2" lineHeight={1} adaptiveFont={[22, 15]}>
        <span className="constant">{text[0]}</span>
        <span>{text[1]}</span>
        <span className="bracket">{text[2]}</span>
        <span>{text[3]}</span>
        <span className="bracket">{text[4]}</span>
      </Text>
    </Typing>
  );
};

export default Subtitle;