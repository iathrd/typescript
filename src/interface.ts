interface Laptop {
    name: string;
    on(): void;
    off(): void;
}

class Asus implements Laptop {
    name: string;
    isGaming: boolean = true;

    constructor(name: string) {
        this.name = name;
    }

    on(): void {
        console.log("nyala");
    }

    off(): void {
        console.log("mati");
    }
}

class mcBook implements Laptop {
    name: string;
    keyboardLight: boolean = true;

    constructor(name: string) {
        this.name = name;
    }

    on(): void {
        console.log("nyala")
    }

    off(): void {
        console.log("mati")
    }
}

let asus = new Asus("Asus a51");
console.log(asus.name);
asus.on();
asus.off();

let mc = new mcBook("mcBook Pro");
console.log(mc.name)
mc.on()
mc.off()