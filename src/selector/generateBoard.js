let setBoard = () => {
  let aux = [];

  for (let i = 0; i <= 10; i++) {
    for (let j = 0; j <= 10; j++) {
      let square = {
        id: `${i},${j}`,
        code: 0
      }
      aux.push(square);
    }
  }
  return aux;
}

export default setBoard;