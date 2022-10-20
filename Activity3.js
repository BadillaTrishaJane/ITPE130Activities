function alphabet_order(str)
  {
    let p1 = str.split("");
    p2 = p1.sort().join("");
    p3 = p2.replace(/[.,/#!?$%^&*;:{}=\-_`~()1234567890/]/,"");
    return p3;
  }
console.log(alphabet_order("webmaster"));
