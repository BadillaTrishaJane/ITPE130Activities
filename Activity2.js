function uppercase(str)
{
  let p1 = str.split(' ');
  let p2 = [];
    
  for(let x = 0; x < p1.length; x++){
      p2.push(p1[x].charAt(0).toUpperCase()+p1[x].slice(1));
  }
  return p2.join(' ');
}
console.log(uppercase("the quick brown fox"));