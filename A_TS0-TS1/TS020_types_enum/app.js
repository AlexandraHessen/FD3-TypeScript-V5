var Color;
(function (Color) {
    Color[Color["BLACK"] = 0] = "BLACK";
    Color[Color["YELLOW"] = 1] = "YELLOW";
    Color[Color["RED"] = 8] = "RED";
    Color[Color["GREEN"] = 9] = "GREEN";
})(Color || (Color = {}));
;
// каждая последующая переммная увеличивается на 1
// BLACK, =0
// YELLOW, =1
// RED=8, 
// GREEN =9
var col1 = Color.BLACK;
console.log(col1); //0
console.log(Color.YELLOW); //1
console.log(Color.GREEN); //9
console.log(Color[1]);
// это не enum
var myStr;
var myStr2;
myStr = 'Second';
myStr2 = 5;
// myStr='Third'; // ошибка
//# sourceMappingURL=app.js.map