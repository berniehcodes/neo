//Create an event listener to calculate the totals for each item

//Create a price list that can be updated easily, use objects??
// Take in the quantity for each item
// multiply by the min and max price
// output the price in a range
//calculate the total


document.querySelector('.calculate').addEventListener('click', calculate)

class PriceList{
    constructor(item, quantity, minCost, maxCost){
        this.item = item
        this.quantity = quantity
        this.minCost = minCost
        this.maxCost = maxCost
    }
}

let balloons = new PriceList()

function calculate(balloon, centerpiece, tableSettings, partyFavours, giftBasket, invitations){
    
    document.querySelector('#nBalloon').value = balloon 

}

