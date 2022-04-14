import React, {FC, useEffect, useState, VFC} from 'react';
import { TextWrapper, Cursor } from './TypingSubtitle.styles'
import { Text } from '@Home/UI'
import { TextProps } from "@Home/UI/Text";

const initialTiming = 1000;
const endingTiming = 1500;

const finalText = [
  "const",
  " Info =",
  " {",
  " fullStackDeveloper, React, NodeJs ",
  "}"
]

const textSettings: Partial<TextProps> = {
  type: "span",
  adaptiveFont: [24, 20],
  lineHeight: 34/24
}

const TypingSubtitle: VFC = () => {
  const [animeState, setAnimeState] = useState<"initial" | "typing" | "ending" | "end">("initial")
  const [texts, setTexts] = useState(["", "", "", "", ""])
  const [currentText, setCurrentText] = useState(0)

  useEffect(() => {
    if(animeState === "initial")
      setTimeout(() => {
        setAnimeState("typing")
      }, initialTiming)

    if(animeState === "ending")
      setTimeout(() => {
        setAnimeState("end")
      }, endingTiming)
  }, [animeState])

  useEffect(() => {
    if(animeState !== "typing")
      return

    const current = texts[currentText]
    const final = finalText[currentText]

    const min = 40
    const max = 50
    const delay = Math.random() * (max - min + 1) + min

    if(!final)
      return

    if(current?.length !== final.length) {
      setTimeout(() => {
        const copy = [...texts]

        const nextSymbol = final[current?.length ?? 0]
        copy[currentText] += nextSymbol
        setTexts(copy)
      }, delay)

      return
    }

    if(currentText !== texts.length - 1) {
      setTimeout(() => {
        setCurrentText(prev => prev + 1)
      }, delay)

      return
    }

    setAnimeState("ending")
  }, [animeState, texts, currentText])


  return (
    <TextWrapper>
      <Text
        color={"lightBg"}
        {...textSettings}
      >W</Text>
      <Text
        color="purple"
        {...textSettings}
      >
        {texts[0]}
      </Text>
      <Text
        color="white"
        {...textSettings}
      >
        {texts[1]}
      </Text>
      <Text
        color="blue"
        {...textSettings}
      >
        {texts[2]}
      </Text>
      <Text
        color="white"
        {...textSettings}
      >
        {texts[3]}
      </Text>
      <Text
        color="blue"
        {...textSettings}
      >
        {texts[4]}
      </Text>
      {animeState !== "end" &&
          <Text
              color="purple"
              {...textSettings}
          >
              <Cursor ending={animeState === "ending" && true} typing={animeState === "typing" && true}{...textSettings}>|</Cursor>
          </Text>
      }
    </TextWrapper>
  );
};

export default TypingSubtitle;