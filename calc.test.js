const sum = require('./calc');

test('test async sum', function() {
    return sum(1,2,'+').then(function (data) {
        expect(data).toEqual(3);
    });
});

test('test async subs', function() {
    return sum(1,2,'-').then(function (data) {
        expect(data).toEqual(-1);
    });
});

test('test async ex', function() {
    return sum(1,2,'loh').catch(function (error) {
        expect(error).toEqual('wrong input');
    });
});
