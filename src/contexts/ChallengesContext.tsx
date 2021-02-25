import { createContext, ReactNode, useState } from 'react';

interface ChallengeContextData {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  levelUp:() => void;
  startNewChallenge: () => void;
}

interface ChallengesProviderProps {
  children: ReactNode;
}

export const ChallengeContext = createContext({} as ChallengeContextData);


export function ChallengeProvider({ children }: ChallengesProviderProps) {
  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [challengesCompleted, setChallengesCompleted] = useState(1);

  function levelUp() {
    setLevel(level + 1);
  }

  function startNewChallenge() {
    console.log('New challenge');
    
  }

  return (
    <ChallengeContext.Provider
      value={{
        level,
        currentExperience,
        challengesCompleted,
        levelUp,
        startNewChallenge,
      }}>
      {children}
    </ChallengeContext.Provider>
  );
}