const firstCont = document.querySelector(".firstContainer");

const secondCont = document.querySelector(".secondContainer");

function Counter(element, value) {
    this.element = element;
    this.value = value;
    this.valueDom = element.querySelector(".value");
    this.valueDom.innerText = this.value;
    this.resetBtn = element.querySelector(".reset")


    this.increaseBtn = element.querySelector(".increase")

    this.decreaseBtn = element.querySelector(".decrease")

    //bind this to all function 
    this.increaseFun = this.increaseFun.bind(this)
    this.decreaseFun = this.decreaseFun.bind(this)

    this.resetFun = this.resetFun.bind(this);

    this.increaseBtn.addEventListener("click", this.increaseFun)

    this.decreaseBtn.addEventListener("click", this.decreaseFun)

    this.resetBtn.addEventListener("click", this.resetFun)


}

Counter.prototype.increaseFun = function () {
    this.value++;
    this.valueDom.innerText = this.value
}

Counter.prototype.resetFun = function () {
    this.value = 0;
    this.valueDom.innerText = this.value
}

Counter.prototype.decreaseFun = function () {
    this.value--;
    this.valueDom.innerText = this.value
}

const firstCounter = new Counter(firstCont, 100)

const secondCounter = new Counter(secondCont, 200)

// firstCounter.increaseFun()
