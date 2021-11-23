// <новыйтип>значение
// или так:
// значение as новыйтип
// Например:
// var val:number|string=5;  //НЕ РАБОТАЕТ
// var nval1:number=<number>val;
// var nval2:number=val as number;
var n1 = 5;

var s1 = n1;
// у n1 всегда type any и его можно привести всегда к string и т.д.
// TS НИКОГДА не преобразует типы как js он их только проверяет
// т.е. нельзя сделать из '5' число 5
console.log(s1); // число 5

var s2 = n1;
console.log(s2); // число 5
var s3 = n1;
console.log(s3); // число 5
//# sourceMappingURL=app.js.map