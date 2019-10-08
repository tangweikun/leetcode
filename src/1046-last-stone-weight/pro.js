/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    while (stones.length > 1) {
        stones.sort((x, y) => y - x);
        const foo = stones[0] - stones[1];
        stones.splice(0, 2, foo);
    }

    return ~~stones[0];
};