var validTypes = [
  "shell",
  "hyperdrive",
  "computer",
  "life support",
  "landing gear",
]

class Parts {
  constructor ({name, type, value}) {
      this.broken = false;
      this.name = name;
      this.value = value;
      this.type = type === validTypes[0] ||
      type === validTypes[1] ||
      type === validTypes[2] ||
      type === validTypes[3] ||
      type === validTypes[4] ||
      type === validTypes[5] ? type : undefined
    }

    isValid (name, type, value) {
    return (this.name && this.type && this.value ? true : false)
  }


    }









module.exports = Parts


//npm test test/part.js
//:shell, hyperdrive, computer, life support, landing gear
//let validTypes = ["shell", "hyperdrive", "computer", "life support", "landing gear", "flatware"]
