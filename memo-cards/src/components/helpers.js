const importAll = (r) => (r.keys().map(r))

const shuffle = (arr) => {
    let currentIndex = arr.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [arr[currentIndex], arr[randomIndex]] = [
        arr[randomIndex], arr[currentIndex]];
    }
  
    return arr;
}

export default function updateImgLinks() {
  let newImgLinks = importAll(require.context('../images/', false, /\.(png|jpe?g|svg)$/));
  shuffle(newImgLinks)
  return newImgLinks
}

