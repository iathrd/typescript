class List<T> {
    private data: T[];

    constructor(...elements: T[]) {
        this.data = elements;
    }

    addData(elements: T): void {
        this.data.push(elements)
    }

    addMuliple(...elements: T[]): void {
        this.data.push(...elements)
    }

    getAll(): T[] {
        return this.data;
    }
}

// let data = new List(1, 2, 3);
// data.addData(1);
// data.addMuliple(9, 8, 0);
// console.log(data.getAll());

let random = new List<number | string>(2, "a", "b", 3);
console.log(random.getAll())
