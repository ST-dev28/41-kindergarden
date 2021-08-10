class Kindergarden {
    constructor(kindergardenName) {
        this.kindergarden = kindergardenName;
        this.childrenList = [];
        this.childrenLimit = 3;

    }
    intro() {
        console.log(`"${this.kindergarden}" can accept ${this.childrenLimit} kids.`);
    }
    updateKidsLimit(newLimit) {
        if (this.childrenList.length > newLimit) {

            console.log(`"${this.kindergarden}" can not update kids limit right now.`);
        } else {
            this.childrenLimit = newLimit;
            console.log(`"${this.kindergarden}" can accept ${this.childrenLimit} kids now.`);
        }
    }
    addKid(kidsName) {
        if (this.childrenLimit === this.childrenList.length) {
            console.log(`${kidsName} can not enter "${this.kindergarden}" kindergarden - it's at a full capacity of ${this.childrenLimit} kids.`);
            return
        } else {

            this.childrenList.push(kidsName);
            console.log(`${kidsName} has entered "${this.kindergarden}" kindergarden.`);
        }
    }
    sayHi() {
        let kidGroup = ``;
        for (let child of this.childrenList) {

            if (child === this.childrenList[this.childrenList.length - 2] &&
                this.childrenList.length >= 2) {
                kidGroup += `${this.childrenList[this.childrenList.length - 2]} and ${this.childrenList[this.childrenList.length - 1]}`
                break
            }
            kidGroup += this.childrenList.length > 1 ? `${child}, ` : `${child}`;
        }
        console.log(`"${this.kindergarden}" is visited by: ${kidGroup}.`);
    }
    removeKid(kidName) {
        let updatedChildrenList = [];
        for (const child of this.childrenList) {
            if (kidName !== child) {
                updatedChildrenList.push(child);
            } else {

                console.log(`${child} has left "${this.kindergarden}" kindergarden.`);
            }

        }
        this.childrenList = updatedChildrenList;
    }

}

module.exports = Kindergarden;