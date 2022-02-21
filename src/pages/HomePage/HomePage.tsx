import React, { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import StoryCard from "../../components/StoryCard/StoryCard";
import { useStoriesProvider } from "../../providers/StoriesContext";
import { Author } from "../../types/Author";
import { Item } from "../../types/Item";
import { Story } from "../../types/Story";

const HomePage: FC = () => {
  const navigate = useNavigate();
  const { stories, setStories, setSelectedStory } = useStoriesProvider();
  const [loading, setLoading] = useState(true);

  const fetchStories = async () => {
    const topStories = await fetch(
      "https://hacker-news.firebaseio.com/v0/topstories.json"
    ).then((res) => res.json());

    var randomId = Math.floor(Math.random() * (topStories.length - 10));
    var randomStories: number[] = topStories.slice(randomId, randomId + 10);

    const _stories: Story[] = await Promise.all(
      randomStories.map(async (id: number) => {
        const item = (await fetch(
          `https://hacker-news.firebaseio.com/v0/item/${id}.json`
        ).then((res) => res.json())) as Item;

        const author = (await fetch(
          `https://hacker-news.firebaseio.com/v0/user/${item.by}.json`
        ).then((res) => res.json())) as Author;

        return {
          id: item.id,
          title: item.title,
          time: item.time,
          score: item.score,
          author: {
            id: author.id,
            karma: author.karma,
          },
        } as Story;
      })
    );

    _stories.sort((a, b) => a.score - b.score);

    setStories(_stories);
  };

  useEffect(() => {
    if (stories.length === 0) {
      fetchStories();
    }
    setLoading(false);
  }, []);

  const onStoryClicked = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    story: Story
  ): void => {
    setSelectedStory(story);
    navigate("/story");
  };

  if (loading) return <div>Loading</div>;

  return (
    <div className="container">
      {stories.map((story, i) => (
        <StoryCard
          key={i}
          story={story}
          onClick={(e) => onStoryClicked(e, story)}
        />
      ))}
    </div>
  );
};
export default HomePage;
