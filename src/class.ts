export class User {
    public name: string;

    constructor(name: string, public age: number) {
        this.name = name;
    }

    setName(value: string): void {
        this.name = value;
    }

    getName = (): string => {
        return this.name;
    }
}
//public = bisa di akses di semua class/ dari luar class
//protected = hanya bisa di akses dari class tersebut, dan kelas turunannya
//private = hanya bisa di akses dari class itu sendiri

class Admin extends User {
    read: boolean = true;
    write: boolean = true;
    phone: string;
    private _email: string = "";
    static getNamaa: string = "iqbal";

    constructor(phone: string, name: string, age: number) {
        super(name, age);
        this.phone = phone;
    }

    static getNama() {
        return "saya iqbal"
    }

    getRole(): { read: boolean, write: boolean } {
        return {
            read: this.read,
            write: this.write
        };
    };

    set email(value: string) {
        this._email = value;
    }

    get email(): string {
        return this._email;
    }
}

// let admin = new Admin("0813226565", "iqbal", 17);
// console.log(admin)
// console.log(admin.getRole())
// console.log(admin.setName("dsa"))
// admin.email = "iqbal@gmail.com";
// console.log(admin.email)
let admin = Admin.getNama();
console.log(admin)
