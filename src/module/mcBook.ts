import Laptop from './BaseLaptop';

class McBook<T> extends Laptop<T> {
    constructor(type: T, numeric: boolean, touchButton: boolean) {
        super("mcBook", type, numeric, touchButton)
    }
}

export default McBook;