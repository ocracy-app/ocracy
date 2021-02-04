import '../styles/index.css';

import React from "react";

import { Helmet } from "react-helmet";

import backgrond from '../images/backgrond.svg';

import twitter from '../images/twitter.svg';
import instagram from '../images/instagram.svg';
import github from '../images/github.svg';
import email from '../images/email.svg';

const styles = {
  app: {
    display: "flex",
    flex: 1,
    backgroundImage: `url(${backgrond})`,
    minHeight: "100vh",
    flexDirection: "column",
    fontSize: "calc(10px + 2vmin)",
    padding: "calc(20px + 2vmin)",
    paddingLeft: "calc(40px + 2vmin)",
    paddingRight: "calc(40px + 2vmin)",
    marginBottom: 0,
    color: "#C9E8FE",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    backgroundPosition: "bottom left",
  },
  logo: {
    fontSize: "calc(46px + 2vmin)",
    color: "#3742FA",
    marginBottom: 0,
    fontWeight: 700,
  },
  divider: {
    width: "calc(46px + 2vmin)",
    height: "calc(0px + 2vmin)",
    backgroundColor: "#3742FA",
  },
  section: {
    maxWidth: "100vh",
  },
  title: {
    fontWeight: 900,
    color: "#3742FA",
    textTransform: "uppercase",
    marginTop: "calc(46px + 2vmin)",
  },
  paragraph: {
    lineHeight: "calc(16px + 2vmin)",
  },
  strong: {
    fontWeight: 700,
    color: "#3742FA",
  },
  social: {
    width: "calc(32px + 2vmin)",
    height: "calc(32px + 2vmin)",
    marginRight: "calc(10px + 2vmin)",
  },
};

// markup
const IndexPage = () => {
  console.log(
    `
      OCRACY:
      Ciao, sei uno sviluppatore? Contribuisci a ocracy scrivi a info@ocracy.app
    `
  );

  return (
    <div style={styles.app}>
      <Helmet>
        <html lang="it" />
        <meta charSet="utf-8" />
        <title>Ocracy | La nuova era della Democrazia</title>
        <meta name="description" content="Ocracy è la rivoluzione digitale per instaurare una nuova forma di democrazia: decentralizzata, trasparente, incorruttibile e programmabile." />
      </Helmet>
      <header style={styles.header}>
        <h1 style={styles.logo}>ocracy</h1>
        <div style={styles.divider} />
      </header>
      <main style={styles.section}>
        <h2 style={styles.title}># Cover Letter</h2>

        <p style={styles.paragraph}>Ocracy è la <strong style={styles.strong}>rivoluzione digitale</strong> per instaurare una nuova forma di <strong style={styles.strong}>democrazia</strong>.</p>

        <p style={styles.paragraph}>Tramite un protocollo innovativo con particolare attenzione alla <strong style={styles.strong}>privacy</strong> verrà creata una rete <strong style={styles.strong}>decentralizzata</strong>, trasparente, <strong style={styles.strong}>incorruttibile</strong> e programmabile.</p>

        <p style={styles.paragraph}>La missione principale è permettere a qualsiasi cittadino di essere parte attiva del processo di <strong style={styles.strong}>proposta</strong> ed <strong style={styles.strong}>approvazione</strong> di <strong style={styles.strong}>leggi</strong> e decreti, abolendo così la necessità di essere rappresentati da un <strong style={styles.strong}>governo centrale</strong>.</p>

        <p style={styles.paragraph}>Ocracy è l'unione delle parole <strong style={styles.strong}>open democracy</strong> e si autogestisce e autofinanzia in un <strong style={styles.strong}>ecosistema programmabile</strong>, basato su codice <strong style={styles.strong}>open source</strong>.</p>

        <p style={styles.paragraph}>Nessuno è <strong style={styles.strong}>proprietario assoluto</strong> della rete, ogni azione sarà sempre condivisa ed approvata dalla maggioranza.</p>

        <p style={styles.paragraph}>Tutti i <strong style={styles.strong}>dati</strong> sono <strong style={styles.strong}>pubblici</strong> e <strong style={styles.strong}>accessibili</strong>, verranno definite regole comuni per far sì che la rete garantisca <strong style={styles.strong}>meritocrazia</strong> e incorruttibilità.</p>

        <p style={styles.paragraph}>Verranno esaminati tutti gli scenari possibili <strong style={styles.strong}>semplificando</strong> e <strong style={styles.strong}>migliorando</strong> i <strong style={styles.strong}>processi burocratici</strong> per garantirne l'equità.</p>

        <p style={styles.paragraph}>Vuoi contribuire o saperne di più? <strong style={styles.strong}>Seguici</strong> sui social o <strong style={styles.strong}>scrivici</strong> un'email.</p>
      </main>
      <footer style={styles.footer}>
        <a href="https://twitter.com/ocracy_app" rel="noreferrer" target="_blank">
          <img style={styles.social} alt="twitter" src={twitter} />
        </a>
        <a href="https://instagram.com/ocracy.app" rel="noreferrer" target="_blank">
          <img style={styles.social} alt="instagram" src={instagram} />
        </a>
        <a href="https://github.com/ocracy-app" rel="noreferrer" target="_blank">
          <img style={styles.social} alt="github" src={github} />
        </a>
        <a href="mailto:info@ocracy.app" rel="noreferrer" target="_blank">
          <img style={styles.social} alt="email" src={email} />
        </a>
      </footer>
    </div>
  )
}

export default IndexPage
