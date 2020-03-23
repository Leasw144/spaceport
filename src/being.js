


class Being {
  constructor (name, species, credits) {
    this.isAlive = true;
    this.name = name;
    this.species = species;
    this.credits = credits || 0
    };
  updateCredits(credits) {
    return this.credits += credits
  };
}



module.exports = Being
