//135 bytes
console.log(require('fs').readFileSync('../input.txt').toString().split('\n').reduce((a,c)=>a+Math.max(0,Math.floor(Number(c)/3-2)),0))