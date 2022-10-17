import React,{useState } from 'react';
import styles  from './App.module.scss';
import Card from './../Card/Card.jsx';

import {data} from './../data';

function App() {
  const [category, setCategory] = useState(1);

  let filtered = data.find(el => el.category_id === category);

  return (
    <div className={styles.app}>
      <div className={styles.sitebar}>
        <ul className={styles.nav}>
          <button onClick={() => setCategory(1)}  className={styles.navitem}>
            Jaxon xabarlari
          </button>

          <button onClick={() => setCategory(2)} className={styles.navitem}>
            O'zbekiston xabarlari
          </button>

          <button onClick={() => setCategory(3)}  className={styles.navitem}>
            Sport yangiliklari
          </button>
        </ul>
      </div>
      
      <div className={styles.box}>
        <Card data={filtered} />
      </div>
    </div>
  );
}

export default App;