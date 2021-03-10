module.exports = function toReadable(number) {
    let str = "";
    if (number === 0) {
        return 'zero'
    }
    if (number === 1) {
        return 'one'
    }
    if (number === 2) {
        return 'two'
    }
    if (number === 3) {
        return 'three'
    }
    if (number === 4) {
        return 'four'
    }
    if (number === 5) {
        return 'five'
    }
    if (number === 6) {
        return 'six'
    }
    if (number === 7) {
        return 'seven'
    }
    if (number === 8) {
        return 'eight'
    }
    if (number === 9) {
        return 'nine'
    }
    if (number === 10) {
        return 'ten'
    }
    if (number === 11) {
        return 'eleven'
    }
    if (number === 12) {
        return 'twelve'
    }
    if (number === 13) {
        return 'thirteen'
    }
    if (number === 14) {
        return 'fourteen'
    }
    if (number === 15) {
        return 'fifteen'
    }
    if (number === 16) {
        return 'sixteen'
    }
    if (number === 17) {
        return 'seventeen'
    }
    if (number === 18) {
        return 'eighteen'
    }
    if (number === 19) {
        return 'nineteen'
    }
    if (number === 20) {
        return 'twenty'
    }
    if (number === 30) {
        return 'thirty'
    }
    if (number === 40) {
        return 'forty'
    }
    if (number === 50) {
        return 'fifty'
    }
    if (number === 60) {
        return 'sixty'
    }
    if (number === 70) {
        return 'seventy'
    }
    if (number === 80) {
        return 'eighty'
    }
    if (number === 90) {
        return 'ninety'
    }
    if (number === 100) {
        return 'one hundred'
    }
    let numberArray = number.toString().split('');
    if (number > 100) {
        if (numberArray[0] == 1) {
            str += 'one hundred'
        }
        if (numberArray[0] == 2) {
            str += 'two hundred'
        }
        if (numberArray[0] == 3) {
            str += 'three hundred'
        }
        if (numberArray[0] == 4) {
            str += 'four hundred'
        }
        if (numberArray[0] == 5) {
            str += 'five hundred'
        }
        if (numberArray[0] == 6) {
            str += 'six hundred'
        }
        if (numberArray[0] == 7) {
            str += 'seven hundred'
        }
        if (numberArray[0] == 8) {
            str += 'eight hundred'
        }
        if (numberArray[0] == 9) {
            str += 'nine hundred'
        }
        //-------------------------------------
        if (numberArray[1] < 2) {
            if (numberArray[1] + numberArray[2] == '01') {
                str += ' one'
            }
            if (numberArray[1] + numberArray[2] == '02') {
                str += ' two'
            }
            if (numberArray[1] + numberArray[2] == '03') {
                str += ' three'
            }
            if (numberArray[1] + numberArray[2] == '04') {
                str += ' four'
            }
            if (numberArray[1] + numberArray[2] == '05') {
                str += ' five'
            }
            if (numberArray[1] + numberArray[2] == '06') {
                str += ' six'
            }
            if (numberArray[1] + numberArray[2] == '07') {
                str += ' seven'
            }
            if (numberArray[1] + numberArray[2] == '08') {
                str += ' eight'
            }
            if (numberArray[1] + numberArray[2] == '09') {
                str += ' nine'
            }
            if (numberArray[1] + numberArray[2] == '10') {
                str += ' ten'
            }
            if (numberArray[1] + numberArray[2] == '11') {
                str += ' eleven'
            }
            if (numberArray[1] + numberArray[2] == '12') {
                str += ' twelve'
            }
            if (numberArray[1] + numberArray[2] == '13') {
                str += ' thirteen'
            }
            if (numberArray[1] + numberArray[2] == '14') {
                str += ' fourteen'
            }
            if (numberArray[1] + numberArray[2] == '15') {
                str += ' fifteen'
            }
            if (numberArray[1] + numberArray[2] == '16') {
                str += ' sixteen'
            }
            if (numberArray[1] + numberArray[2] == '17') {
                str += ' seventeen'
            }
            if (numberArray[1] + numberArray[2] == '18') {
                str += ' eighteen'
            }
            if (numberArray[1] + numberArray[2] == '19') {
                str += ' nineteen'
            }
        } else {
            if (numberArray[1] == 2) {
                str += ' twenty'
            }
            if (numberArray[1] == 3) {
                str += ' thirty'
            }
            if (numberArray[1] == 4) {
                str += ' forty'
            }
            if (numberArray[1] == 5) {
                str += ' fifty'
            }
            if (numberArray[1] == 6) {
                str += ' sixty'
            }
            if (numberArray[1] == 7) {
                str += ' seventy'
            }
            if (numberArray[1] == 8) {
                str += ' eighty'
            }
            if (numberArray[1] == 9) {
                str += ' ninety'
            }
            if (numberArray[2] == 1) {
                str += ' one'
            }
            if (numberArray[2] == 2) {
                str += ' two'
            }
            if (numberArray[2] == 3) {
                str += ' three'
            }
            if (numberArray[2] == 4) {
                str += ' four'
            }
            if (numberArray[2] == 5) {
                str += ' five'
            }
            if (numberArray[2] == 6) {
                str += ' six'
            }
            if (numberArray[2] == 7) {
                str += ' seven'
            }
            if (numberArray[2] == 8) {
                str += ' eight'
            }
            if (numberArray[2] == 9) {
                str += ' nine'
            }
        }
    }
    if (number < 100 && number >20){
        if (numberArray[0] == 2) {
            str += 'twenty'
        }
        if (numberArray[0] == 3) {
            str += 'thirty'
        }
        if (numberArray[0] == 4) {
            str += 'forty'
        }
        if (numberArray[0] == 5) {
            str += 'fifty'
        }
        if (numberArray[0] == 6) {
            str += 'sixty'
        }
        if (numberArray[0] == 7) {
            str += 'seventy'
        }
        if (numberArray[0] == 8) {
            str += 'eighty'
        }
        if (numberArray[0] == 9) {
            str += 'ninety'
        }
        if (numberArray[1] == 1) {
            str += ' one'
        }
        if (numberArray[1] == 2) {
            str += ' two'
        }
        if (numberArray[1] == 3) {
            str += ' three'
        }
        if (numberArray[1] == 4) {
            str += ' four'
        }
        if (numberArray[1] == 5) {
            str += ' five'
        }
        if (numberArray[1] == 6) {
            str += ' six'
        }
        if (numberArray[1] == 7) {
            str += ' seven'
        }
        if (numberArray[1] == 8) {
            str += ' eight'
        }
        if (numberArray[1] == 9) {
            str += ' nine'
        }
    }
    return str
}
