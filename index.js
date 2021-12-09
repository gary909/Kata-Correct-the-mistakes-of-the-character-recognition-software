function correct(string)
{
    return string.replace(/0/g, "O").replace(/1/g, "I").replace(/5/g, "S")
}

console.log(correct("L0ND0N")); // return 'LONDON'
console.log(correct("DUBL1N")); // return 'DUBLIN'
console.log(correct("51NGAP0RE")); // return "SINGAPORE"
console.log(correct("BUDAPE5T")); // return "BUDAPEST"
console.log(correct("PAR15")); // return 'PARIS'