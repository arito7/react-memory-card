import CardsContainer from './components/Card/CardsContainer';
import { items as uItems, shuffle } from './Util';
import { useEffect, useState } from 'react';
import Score from './components/Score/Score';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
function App() {
  const [score, setScore] = useState({ score: 0, currentHighest: 0 });
  const [selectedItems, setSelectedItems] = useState([]);
  const [items, setItems] = useState(uItems);

  const onCardClick = (item) => {
    setSelectedItems((prevState) => {
      if (!prevState.includes(item.name)) {
        setScore({ ...score, score: score.score + 1 });
        setItems(shuffle(items));
        return selectedItems.concat(item.name);
      }
      setScore((prevState) => {
        if (prevState.currentHighest > score.score) {
          return { ...score, score: 0 };
        }
        return { currentHighest: score.score, score: 0 };
      });
      setItems(shuffle(items));
      return [];
    });
  };

  return (
    <div className="App">
      <Header />
      <Score score={score} />
      <CardsContainer items={items} cardClickHandler={onCardClick} />
      <Footer />
    </div>
  );
}

export default App;
