function calc(a, b, op) {
    return new Promise(function(resolve, reject) {
        window.setTimeout(function() {
            var res = 0;
            switch (op) {
                case '+': res = a + b; break;
                case '-': res = a - b; break;
                case '*': res = a * b; break;
                case '/': res = a / b; break;
                default: reject('wrong input');
            }
            resolve(res);
        }, 2000);
    });
}
module.exports = calc;
