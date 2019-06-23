/*
*Create a Person class that has a
*   - `name` which is passed in for each new person
*   - `species` which is ‘homo sapien’ for every person
*   - `speak` method which returns “Hello my name is <their name>”
*/
class Person {
    constructor(name){
        this.name = name;
        this.species ='homo sapien';
    }
    speak(){
      return "Hello my name is "+ this.name;
    }
}

/*
*Create a `Animal` class that has
*    - `type` passed in for each new animal
*   - `sound` passed in for each new animal
*    - `age` starts at 0
*    - method `getOlder` that increases `age` by 1
*    - method `makeSound` that returns
*    “<their sound>! Hello, i am a <their type>, I am <their age> years old”
*/
class Animal {
  
    constructor(type,sound){
     this.type=type;
     this.sound=sound;
     this.age=0; 
    }

    getOlder(){
      this.age++;
    }
    makeSound(){
      return this.sound+"! Hello, i am a "+this.type+", I am "+ this.age +" years old s"
    }
  }
  const Animal1 = new Animal("Cat","mew mew")
  Animal1. getOlder()
  console.log(Animal1.makeSound())

/**
* Make an ATM - Lab
*    - For this exercise you will be creating an ATM class.
*
*    - It will have the following properties...
*
*    - type (e.g., "checking"), which should be determined by some input
*    - money, which should start out as 0
*    It should have the following methods...
*
*    - withdraw, which should decrease the amount of money by some input
*    - deposit, which should increase the amount of money by some input
*    - showBalance, which should print the amount of money in the bank to the console.
*    The Atm class has a transactionHistory property which keeps track of the withdrawals and deposits made to the account.
*
*    Make sure to indicate whether the transaction increased or decreased the amount of money in the bank.
*/

class ATM{
    constructor(type ){
        this.type = type
        this.money = 0 ; 
    }

    withdraw(num){
        if( (this.money - num) <= 0 ) {
            return " There is not enuogh money !! ";
        }else{
            this.money= this.money - num ; 
            return " You have been withdraw "+ num +" SR from your account.\n"+
            "your balance is "+ this.money+ "SR.";
        }
    }
    deposit(num){
        this.money = this.money + num
        return "You have been withdraw "+ num + "SR to your account.\n"+
        "you balance is "+this.money + "SR"; 
    }
    showBalance(){
        return "Your balance is "+this.money + "SR"; 
    }
}

const person1 =new ATM ("Doler")

console.log(person1.withdraw(100))
console.log(person1.deposit(20))
person1.showBalance()