class Kindergarden {
    constructor(kindergardenName) {
        this.name = kindergardenName;
        this.kidsQty = 0;
        this.childrenList = [];
    }

    intro() {
        console.log(`"${this.name}" can accept 3 kids.`);

    }

    updateKidsLimit(maxQty) {
        this.maxKidsQty = maxQty;
        if (this.maxKidsQty === 3) {
            console.log(`"${this.name}" can not update kids limit right now.`);
        } else if (this.maxKidsQty <= 5 && this.maxKidsQty > 3) {
            console.log(`"${this.name}" can accept ${this.maxKidsQty} kids now.`);
        }
        return;
    }

    addKid(kidName) {
        this.childrenList.push({
            name: kidName,
        })
        if (this.childrenList.length <= 5) {
            console.log(`${kidName} has entered "${this.name}" kindergarden.`);
        } else {
            console.log(`${kidName} can not enter "${this.name}" kindergarden - it's at a full capacity of 5 kids..`);
        }
        //console.log(this.childrenList);
    }

    sayHi() {
        console.log(`"${this.name}" is visited by: ${this.childrenList[0].name}, ${this.childrenList[1].name}, ${this.childrenList[2].name}, ${this.childrenList[3].name} and ${this.childrenList[4].name}.`);
    }


}

module.exports = Kindergarden;