
import ReactPlayer from "react-player/lazy";
import { useState } from "react";

import Quiz from "../Quiz";

const VideoPlayer = ({url, quiz, showQuizAfterSeconds}) => {
    const [player, setPlayer] = useState(null);
    const [isPlaying, setIsPlaying] = useState(true);
    const [playedSeconds, setPlayedSeconds] = useState(0);
    const [isPlayerHidden, setIsPlayerHidden] = useState(false);
    const [hasAnsweredQuestion, setHasAnsweredQuestion] = useState(false);
  
    const hidePlayer = () => {
      setPlayedSeconds(player.getCurrentTime());
      setIsPlaying(false);
      setIsPlayerHidden(true);
    };
  
    const handleReady = () => {
      if (playedSeconds) {
        player.seekTo(playedSeconds, "seconds");
        setPlayedSeconds(0);
      }
    };
  
    const handlePlay = () => setIsPlaying(true);
  
    const handleProgress = (state) => {
      if (!hasAnsweredQuestion && isPlaying && state.playedSeconds > showQuizAfterSeconds) {
        hidePlayer();
      }
    };
  
    const continueVideo = () => {
      setHasAnsweredQuestion(true);
      setIsPlayerHidden(false);
    };
  
    return (
      <div>
        {isPlayerHidden ? (
          <Quiz
            {...quiz}
            handleCorrectAnswer={continueVideo}
          />
        ) : (
          <ReactPlayer
            url={url}
            ref={(_player) => setPlayer(_player)}
            playing={isPlaying}
            controls
            onReady={handleReady}
            onPlay={handlePlay}
            onProgress={handleProgress}
            width="100%"
          />
        )}
      </div>
    );
  };
  
  export default VideoPlayer;