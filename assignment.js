//problem1: kilometerToMeter
//problem2: budgetCalculator
//problem3: hotelCost
//problem4: megaFriend


function kilometerToMeter(kilometer) {
    if (kilometer < 0) {                /* Kilometer must be a positive number */
        return false;
    }
    else {
        var meter = kilometer * 1000;        /* 1 kilometer = 1000 meter */
        return meter;
    }
}
var result1 = kilometerToMeter(25);
//console.log(result1);
 

function budgetCalculator(watchNo, phoneNo, laptopNo) {
    var watchBudget = watchNo * 50;         /*  each watch price 50, phone price 100, laptop price 500 */
    var phoneBudget = phoneNo * 100;
    var laptopBudget = laptopNo * 500;
    var totalBudget = watchBudget + phoneBudget + laptopBudget;
    return totalBudget;
}
var result2 = budgetCalculator(3, 4, 2);
//console.log(result2);


function hotelCost(days) {
    var total = 0;          /* first 10 days cost 100/night, 11-20 days cost 80/night, 21+ days cost 50/night */
    if (days <= 10) {
        var total = 10 * 100;
    }

    else if (days <= 20) {
        var firstTen = 10 * 100;
        var remainingDays = (days - 10) * 80;
        total = firstTen + remainingDays;
    }
    else {
        var firstTen = 10 * 100;
        var secondTen = 10 * 80;
        var remainingDays = (days - 20) * 50;
        total = firstTen + secondTen + remainingDays ;
    }
    return total;
}
var total = hotelCost(71);
//console.log(total);


function megaFriend(friends) {
    var element = 0;
    for (var i = 0; i < friends.length; i++) {
        if (typeof friends[i] != "string") {
            return false;
        }
        if (friends[i].length > element) {
            var element = friends[i].length;
            var longestName = friends[i];
        }
    }
    return longestName;
}

var friends = ['Aminul', 'Amin', 'Kolimuddin', 'RahimBakshi'];      /* Must be a string */
var result = megaFriend(friends);
//console.log(result);