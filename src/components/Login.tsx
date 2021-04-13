import { FaGithub, FaArrowRight } from 'react-icons/fa'

import styles from '../styles/components/Login.module.css';

export default function Login() {
  return (
    <div className={styles.container}>
      <div className={styles.backgroundImg}>
      </div>
      <div className={styles.content}>
          <img src="/logo-login.svg" alt="Logo Escrito Move.it"/>

          <span>Bem-vindo</span>
          <p>
            <FaGithub size={52} color="#b2b9ff" />
            Faça login com seu Github
            para começar
          </p>

          <button>
            Entre com GitHub
            <p>
              <FaArrowRight size={32} color="#fff" />
            </p>
          </button>
        </div>
    </div>
  );
}