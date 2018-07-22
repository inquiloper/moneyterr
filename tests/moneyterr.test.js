const moneyterr = require('../src/moneyterr');

test('should return the value with the currency symbol as prefix', () => {
    expect(moneyterr(1500, {
        symbol: '$',
    })).toBe('$1,500.00');
});

test('should return the value with 0 decimals', () => {
    expect(moneyterr(12000, {
        symbol: '$',
        decimals: 0
    })).toBe('$12,000');
});

test('should return the value with 3 decimals', () => {
    expect(moneyterr(124.5434, {
        decimals: 3,
        symbol: '$',
    })).toBe('$124.543');
});

test('should return the value with the currency symbol USD', () => {
    expect(moneyterr(25650, {
        decimals: 0,
        symbol:'USD'
    })).toBe('USD25,650');
});

test('should throw an exception when trying to pass a wrong number', () => {
    expect( () => {
        moneyterr("12,343.5.5",{
            decimals:0,
        });
    } ).toThrowError();
});

test('should use . as thousands separator', () => {

    expect( moneyterr('150324.13',{
        decimals:0,
        thousandsSeparator: '.'
    }) ).toBe('$150.324');
});

test('should use , as decimals separator', () => {
    expect( moneyterr('123.54', {
        decimals:2,
        decimalsSeparator: ','
    })).toBe('$123,54');
})
