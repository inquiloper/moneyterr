const moneyterr = function(value, options = {}){

    if(!value || isNaN(value))
        throw "Invalid argument value";

    let defaults = {
        symbol: '$',
        decimals: 2,
        thousandsSeparator: ',',
        decimalsSeparator: '.',
    }

    //Mergin the passed options with the defaults.
    const moneyOptions = Object.assign({}, defaults, options);

    let numberToFixed = parseFloat(value).toFixed(moneyOptions.decimals);

    let [whole, decimals] = numberToFixed.toString().split(".");

    let formatted = whole.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1"+moneyOptions.thousandsSeparator);

    let finalFormat = decimals ? formatted + moneyOptions.decimalsSeparator + decimals : formatted;
    
    return moneyOptions.symbol+ finalFormat;
}

module.exports = moneyterr;