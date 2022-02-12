import banana from './assets/banana.png';
import barrel from './assets/barrel.png';
import beer from './assets/beer.png';
import bones from './assets/bones.png';
import cake from './assets/cake.png';
import gem from './assets/gem.png';
import key from './assets/key.png';
import lamp from './assets/lamp.png';
import logs from './assets/logs.png';
import paper from './assets/paper.png';
import pie from './assets/pie.png';
import pizza from './assets/pizza.png';

const items = [
  {
    src: banana,
    name: 'Banana',
  },
  {
    src: barrel,
    name: 'Barrel',
  },
  {
    src: beer,
    name: 'Beer',
  },
  {
    src: bones,
    name: 'Bones',
  },
  {
    src: cake,
    name: 'Cake',
  },
  {
    src: gem,
    name: 'Gem',
  },
  {
    src: key,
    name: 'Key',
  },
  {
    src: lamp,
    name: 'Lamp',
  },
  {
    src: logs,
    name: 'Logs',
  },
  {
    src: paper,
    name: 'Paper',
  },
  {
    src: pie,
    name: 'Pie',
  },
  {
    src: pizza,
    name: 'Pizza',
  },
];

function shuffle(array) {
  let currentIndex = array.length;
  let randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

export { items, shuffle };
