function rand(min=0, max=3) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
  }
  
function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if(typeof msg !== 'string') {
          reject('CAI NO ERRO');
          return;
        }
  
        resolve(msg.toUpperCase() + ' - Passei na promise');
        return;
      }, tempo);
    });
}

// esperaAi('Fase 1', rand())
// .then((valor) => {
//     console.log(valor) 
//     return esperaAi('Fase 2', rand())
// })
// .then((valor) => {
//     console.log(valor) 
//     return esperaAi('Fase 3', rand())
// })
// .then((valor) => {
//     console.log(valor) 
// })
// .catch(e => console.log(e))

async function executa() {
  try {
    const fase_1 = await esperaAi('Fase 1', rand())
    console.log(fase_1)

    const fase_2 = await esperaAi('Fase 2', rand())
    console.log(fase_2)

    const fase_3 = await esperaAi('Fase 3', rand())
    console.log(fase_3)
    
  } catch(e) {
    console.log(e)
  }
}

executa()