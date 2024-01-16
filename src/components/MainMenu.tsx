"use client";

import { MainMenuFrame, Title } from "@/theme/theme";
import { Box } from "@mui/material";
import { useState } from "react";
import GameButtonPage from "./GameButton";

function MainMenu() {
  const [selection, setSelection] = useState<string | undefined>();
  const handleButtonClick = (param: string) => {
    setSelection(param);
  };
  return (
    <Box textAlign={"center"}>
      <Title variant="h6">{selection}</Title>
      <MainMenuFrame>
        <GameButtonPage title="new game" onButtonClick={handleButtonClick} />
        <GameButtonPage title="continue" onButtonClick={handleButtonClick} />
        <GameButtonPage title=" options" onButtonClick={handleButtonClick} />
        <GameButtonPage title="quit" onButtonClick={handleButtonClick} />
      </MainMenuFrame>
    </Box>
  );
}

export default MainMenu;
