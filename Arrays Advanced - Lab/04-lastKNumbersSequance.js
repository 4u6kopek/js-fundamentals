function lastKNumberSequance(n, k) {
  const result = [1];

  for (let i = 1; i < n; i++) {
    let lastK = result.slice(-k);
    let sum = 0;
    for(let num of lastK){
        sum += num
    }
    result.push(sum);
  }
  console.log(result.join(" "));
}
lastKNumberSequance(6, 3);
// lastKNumberSequance(8, 2);
// lastKNumberSequance(9, 5);
