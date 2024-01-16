import { GameButton } from "@/theme/theme";

type GameButtonPageProps = {
  title: string;
  onButtonClick: (param: string) => void;
};

function GameButtonPage({ title, onButtonClick }: GameButtonPageProps) {
  return <GameButton onClick={() => onButtonClick(title)}>{title}</GameButton>;
}

export default GameButtonPage;
