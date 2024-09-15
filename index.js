class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    } 
    printDetails() {
      console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
  }
  
  // Define the Student class inheriting from Person
  class Student extends Person {
    constructor(name, age, rollNo) {
      super(name, age); // Call the parent class constructor
      if (rollNo <= 0) {
        throw new Error("Roll number must be greater than zero.");
      }
      this.rollNo = rollNo;
    }
  
    // Overriding the printDetails method
    printDetails() {
      super.printDetails(); // Call the parent class method
      console.log(`Roll No: ${this.rollNo}`);
    }
  }
  
  try {
    // Create a valid Student object
    const student1 = new Student("Prathamesh", 21, 32);
    student1.printDetails(); // Calls the overridden method
  
    // Attempt to create an invalid Student object (will throw an error)
    const student2 = new Student("Vedant", 48, 0); 
    student2.printDetails();
  } catch (error) {
    console.error("Error:", error.message);
  }
  