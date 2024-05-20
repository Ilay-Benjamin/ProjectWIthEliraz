import React from 'react';

import { Footer, Header } from './containers';
import { Navbar } from './components';

import styles from './App.module.css';

const App = () => (
  <div className={styles.app}>
    <div className={styles.gradientBg}>
      <Navbar />
      <Header />
    </div>
    <Footer />
  </div>
);

export default App;
