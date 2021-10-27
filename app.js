let pronoun = ["the", "our"];
let adjs = ["great", "big"];
let noun = ["jogger", "racoon"];
let dom = [".com", ".es", ".net"]

for (let index = 0; index < pronoun.length; index++) {
  const pronombre = pronoun[index]; //the
  for (let index2 = 0; index2 < adjs.length; index2++) {
    const adj = adjs[index2]; //great
    for (let index3 = 0; index3 < noun.length; index3++) {
      const sustantivo = noun[index3]; //jogger
      
      for (let index4 = 0; index4 < dom.length; index4++) {
        const dominio = dom[index4];
        console.log(pronombre + adj + sustantivo + dominio);
    }
    }
  }
}