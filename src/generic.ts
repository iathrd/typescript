function getData(value: any) {
    return value;
}

console.log(getData("iqbal").length);
console.log(getData(123).length);

//generic

function getNama<T>(value: T) {
    return value;
}

console.log(getNama("iqbal".length))
console.log(getNama(123))

const arrowFunct = <T>(value: T) => {
    return value;
}