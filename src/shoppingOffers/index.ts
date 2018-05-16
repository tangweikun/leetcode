// HELP:

export const shoppingOffers = (
  price: number[],
  special: number[][],
  needs: number[],
) => {
  return calculateCost(price, special, needs)
}

function calculateCost(price: number[], special: number[][], needs: number[]) {
  let currCost = needs.reduce((acc, curr, i) => acc + curr * price[i], 0)

  for (let offer of special) {
    if (canUseOffer(needs, offer)) {
      const newNeed = needs.map((val, i) => val - offer[i])
      currCost = Math.min(
        currCost,
        offer[needs.length] + calculateCost(price, special, newNeed),
      )
    }
  }
  return currCost
}

function canUseOffer(need: number[], offer: number[]) {
  for (let i = 0; i < need.length; i++) {
    if (need[i] < offer[i]) return false
  }
  return true
}
