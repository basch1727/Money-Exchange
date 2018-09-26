// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    
    if (currency <= 0) return {};
    if (currency > 10000) return {error: "You are rich, my friend! We don't have so much coins for exchange"};

    let amount = {};
    const name = ['H', 'Q', 'D', 'N', 'P'];
    const cost = [50, 25, 10, 5, 1];

    for (let i = 0; i < cost.length; i++) {
        let int = Math.floor(currency / cost[i]);
        let percent = currency % cost[i];
        if (int) {
            amount[name[i]] = int;
            currency = percent;
        }
    }
    return amount;
}
