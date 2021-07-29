class Kindergarden {
    constructor(kindergardenName) {
        this.name = kindergardenName;
        this.kidsQty = 0;
        this.childrenList = [];
        this.updatedChildrenList = [];
    }

    intro() {
        console.log(`"${this.name}" can accept 3 kids.`);

    }

    updateKidsLimit(maxQty) {
        this.maxKidsQty = maxQty;
        if (this.maxKidsQty === 3) {
            console.log(`"${this.name}" can not update kids limit right now.`);
        }
        if (this.maxKidsQty === 3 && this.maxKidsQty <= 5) {
            console.log(`"${this.name}" can accept ${this.maxKidsQty} kids now.`);
            return;
        }
    }

    addKid(kidName) {
        this.childrenList.push({
            name: kidName,
        })
        if (this.childrenList.length <= 5) {
            console.log(`${kidName} has entered "${this.name}" kindergarden.`);
        } else {
            console.log(`${kidName} can not enter "${this.name}" kindergarden - it's at a full capacity of ${this.maxKidsQty} kids.`);
        }
        //if (this.updatedChildrenList.length <= 3) {
        //console.log(`"${this.name}" can accept 3 kids now.`);
        //console.log(this.updatedChildrenList);
        //}
        //console.log(this.childrenList);
    }

    sayHi() {
        let welcome = '';
        for (let i = 0; i < this.childrenList.length; i++) {
            if (this.updatedChildrenList) {
                welcome += `${this.childrenList[i].name}, `;
                //console.log(`"${this.name}" is visited by: ${this.childrenList[0].name}, ${this.childrenList[1].name}, ${this.childrenList[2].name}, ${this.childrenList[3].name} and ${this.childrenList[4].name}.`);
            }
        }
        console.log(`"${this.name}" is visited by: ${welcome}.`);
    }
    //}

    removeKid(kidName) {
        let updatedChildrenList = [];
        for (let i = 0; i < this.childrenList.length; i++) {
            if (this.childrenList[i].kidName !== kidName) {
                updatedChildrenList.push(this.childrenList[i]);
            }
        }
        this.updatedChildrenList = updatedChildrenList;
        console.log(`${kidName} has left "${this.name}" kindergarden.`);
        console.log(this.updatedChildrenList);
    }
}

module.exports = Kindergarden;