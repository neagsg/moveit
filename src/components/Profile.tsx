import { useContext } from 'react';
import { useSession } from 'next-auth/client'
import { ChallengeContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';
import Login from './Login';

export default function Profile() {
  const { level } = useContext(ChallengeContext);
  const [ session ]  = useSession()

  if (session) {
    return(
      <div className={styles.profileContainer}>
        <img src={session.user.image} alt="Imagem do perfil"/>
  
        <div>
          <strong>{session.user.name}</strong>
          <p>
            <img src="icons/level.svg" alt="Level"/>
            Level {level}
          </p>
        </div>
      </div>
    );
  }

  return <Login />
}