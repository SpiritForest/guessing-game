class GuessingGame {
    constructor() {}


    setRange(min, max) {
		this.max = max;
		this.min = min;
    }

    guess() {
    	const middle = Math.ceil((this.max + this.min)/2);
    	this.middle = middle;
    	return middle;
    }

    lower() {
    	this.max = this.middle;
    }

    greater() {
    	this.min = this.middle;
    }
}

module.exports = GuessingGame;
