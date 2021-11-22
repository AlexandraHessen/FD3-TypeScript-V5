var friend = { fam: "Иванов", im: "Иван", otch: "Иванович", age: 25 };
// только 4 ключа больше нельзя добавлять
console.log(friend);
var friendKey;
// friendKey:keyof означает что переменная может быть только одним из ключей
friendKey = "fam";
// friendKey="fam2"; // ошибка
console.log(friendKey);
//# sourceMappingURL=app.js.map