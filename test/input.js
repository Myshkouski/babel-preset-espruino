class A {
    constructor() {
        this._isA = true
    }
}

class B extends A {
    _isB = true
}

const a = new A()
const b = new B()

console.log(a, b)