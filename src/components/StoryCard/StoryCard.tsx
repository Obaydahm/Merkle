import { MouseEventHandler } from "react";
import { Story } from "../../types/Story";
import "./StoryCard.style.scss";

type StoryCardProps = {
  story: Story;
  onClick: MouseEventHandler<HTMLDivElement>;
};

const StoryCard = ({ story, onClick }: StoryCardProps) => {
  return (
    <div className="story-card" onClick={onClick}>
      <img
        className="thumbnail"
        src="https://picsum.photos/100/100"
        alt="random"
      />
      <div className="info">
        <div className="header">
          <div className="title">{story.title}</div>
          <div className="score">{story.score}</div>
        </div>
        <div className="author">{story.author.id}</div>
      </div>
    </div>
  );
};

export default StoryCard;
