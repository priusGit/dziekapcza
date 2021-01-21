import React from 'react';
import classes from './option1.module.css';

function App() {
    //zrobic z tego element klasowy
    return (
      <div className={classes.option1}>
          <div className={classes.option1Content}>
        <div className={classes.left}>
                <input type="checkbox" id="scales" name="scales"/>
                <label for="scales">Nie jestem dziekanem</label>
        </div>
        <div className={classes.right}>
            <img className={classes.logo} src="http://placehold.jp/50x50.png"alt="piwo"/>
            <div><a href="/">Prywatność</a>
            <a href="/">Warunki</a>
            </div>
        </div>
    </div>
      </div>
    );
  }
  
  export default App;
//   <div className={classes.ldsring}><div></div><div></div><div></div><div></div></div>