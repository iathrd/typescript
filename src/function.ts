//function

function getName(): string {
    return "harus di return"
}

console.log(getName())

function printName(): void {
    console.log("tidak bisa di return")
}

printName()

function multiply(var1: number, var2: number): number {
    return var1 * var2;
}

const result = multiply(14, 27);
console.log(result)

//function as type

type Tambah = (val1: number, val2: number) => number;

const Add: Tambah = (val1: number, val2: number): number => {
    return val1 + val2;
}

console.log(Add(10, 29))

//default parameter
const fullName = (firs: string, last: string = "athorid"): string => {
    return firs + " " + last
}

console.log(fullName("iqbal", "hahah"))

//optional parameter
// const getUmur = (val1: number, val2?: string): string => {
//     return val1 * val2;
// }

// console.log(getUmur(5, "4"))
