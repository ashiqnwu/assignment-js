/*Assignment-1 start*/

function mindGame(number) {
    if ((number < 0) || (typeof (number)) !== 'number') {
        return 'Enter valid number';
    }
    else {
        let result = (((3 * number) + 10) / 2) - 5;
        return result;
    }
}

/*Assignment-1 end*/

/*Assignment-2 start*/

function evenOdd(string) {
    if (typeof (string) !== 'string') {
        return "Enter valid string";
    }
    else {
        let stringLength = string.length;
        let output = '';
        if (stringLength % 2 === 1) {
            output = 'odd';
        }
        else if (stringLength % 2 === 0) {
            output = 'even';
        }
        return output;
    }

}
/*Assignment-2 end*/

/*Assignment-3 start*/

function isLGSeven(number) {
    if (typeof (number) !== 'number') {
        return "Enter valid number";
    }
    else {
        let sum = (number - 7);
        let output = 0;
        if (sum < 7) {
            output = sum;
        }
        else {
            output = number * 2;
        }
        return output;
    }
}


/*Assignment-3 end*/

/*Assignment-4 start*/

function findingBadData(givenArray) {
    if (Array.isArray(givenArray) === true) {
        let arrayLength = givenArray.length;
        let badDataSum = 0;
        for (let i = 0; i < arrayLength; i++) {
            if (typeof (givenArray[i]) !== 'number') {
                return 'Enter a valid Array';
            }

            if (givenArray[i] < 0) {
                badDataSum++;
            }
        }
        return badDataSum;
    }
    else {
        return 'Enter a valid Array';
    }
}

/*Assignment-4 end*/

/*Assignment-5 start*/

function gemsToDiamond(number1, number2, number3) {
    if ((typeof (number1) !== 'number') || (typeof (number2) !== 'number') || (typeof (number3) !== 'number')) {
        let returnDiamond = '';
        returnDiamond = "Please Enter valid number";
        return returnDiamond;
    }
    else if ((number1 < 0) || number2 < 0 || number3 < 0) {
        let returnDiamond = '';
        returnDiamond = "Please Enter valid number";
        return returnDiamond;
    }
    else {
        let totalDiamonds = number1 * 21 + number2 * 32 + number3 * 43;
        let returnDiamond = 0;
        if (totalDiamonds > 2000) {
            returnDiamond = totalDiamonds - 2000;
        }
        else {
            returnDiamond = totalDiamonds;
        }
        return returnDiamond;
    }

}

/*Assignment-5 end*/