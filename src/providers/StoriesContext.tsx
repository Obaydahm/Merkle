import React, { FC, useState } from "react";
import { Story } from "../types/Story";

type Stories = {
  stories: Story[];
  setStories: React.Dispatch<React.SetStateAction<Story[]>>;
  selectedStory: Story | undefined;
  setSelectedStory: React.Dispatch<React.SetStateAction<Story | undefined>>;
};

const Context = React.createContext<Stories>({} as Stories);

const StoriesProvider: FC = ({ children }) => {
  const [stories, setStories] = useState<Story[]>([]);
  const [selectedStory, setSelectedStory] = useState<Story | undefined>();

  return (
    <Context.Provider
      value={{ stories, setStories, selectedStory, setSelectedStory }}
    >
      {children}
    </Context.Provider>
  );
};

export default StoriesProvider;
export const useStoriesProvider = () => React.useContext(Context);
