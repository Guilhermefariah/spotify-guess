import React from 'react';
import { Button } from '../Buttons/Button';
import { Anchor } from '../Anchor';
import Popup from '../Popup';
import { ShowDefeatPopupProps } from './types';

export const ShowDefeatPopup: React.FC<ShowDefeatPopupProps> = ({
  setShowDefeatPopup,
  showDefeatPopup,
  score,
  setScore,
  randomizeLeftMusic,
  randomizeRightMusic,
}) => {
  const handlePlayAgain = () => {
    setShowDefeatPopup(false);
    randomizeLeftMusic()
    randomizeRightMusic()
    
    setScore(0);

  };

  return showDefeatPopup ? (
    <Popup
      description="Mas não se preocupe, você pode jogar novamente!"
      setShowState={setShowDefeatPopup}
      showState={showDefeatPopup}
      title="😭 Você perdeu..."
    >
      <div className="flex flex-col gap-4 items-center w-full">
        <div className="my-8">
          <span className="font-semibold text-lg lg:text-2xl">
            Você teve <span className="text-green-500 text-lg lg:text-2xl">{score}</span> acertos!
          </span>
        </div>
        <Button
          label="Jogar novamente"
          onClick={handlePlayAgain}
          className="w-full max-w-full"
        />
        <Anchor label="Ir para home" href="/" className="w-full max-w-full" />
      </div>
    </Popup>
  ) : null;
};
