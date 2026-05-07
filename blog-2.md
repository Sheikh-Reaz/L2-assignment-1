# 🏗️ Understanding the Four Pillars of OOP in TypeScript

> Learn how Object-Oriented Programming helps developers build clean and scalable applications.

---

# 📌 Introduction

Object-Oriented Programming (OOP) is a programming style that helps developers organize code in a cleaner and smarter way.

In large TypeScript applications, OOP helps:
- Reduce complexity
- Improve code structure
- Make projects easier to maintain

The four main pillars of OOP are:

1. Inheritance  
2. Polymorphism  
3. Abstraction  
4. Encapsulation  

These concepts may sound difficult at first, but they are actually easy to understand with simple examples.

---

# 1️⃣ Inheritance

## 🧠 What Is Inheritance?

Inheritance allows one class to use properties and methods from another class.

This helps developers avoid writing the same code repeatedly.

---

## 💻 Example

```ts
class Animal {
  makeSound() {
    console.log("Animal makes sound");
  }
}

class Dog extends Animal {
  bark() {
    console.log("Dog barks");
  }
}

const dog = new Dog();

dog.makeSound();
dog.bark();
```

### 📤 Output

```ts
Animal makes sound
Dog barks
```

### Explanation:
- `Dog` inherits from `Animal`
- So `Dog` can access `makeSound()`

---

## ✅ Benefits of Inheritance

- Reduces duplicate code
- Improves reusability
- Creates cleaner project structure

---

# 2️⃣ Polymorphism

## 🧠 What Is Polymorphism?

Polymorphism means “many forms”.

Different classes can use the same method name but behave differently.

---

## 💻 Example

```ts
class Animal {
  sound() {
    console.log("Animal sound");
  }
}

class Cat extends Animal {
  sound() {
    console.log("Cat says meow");
  }
}

class Cow extends Animal {
  sound() {
    console.log("Cow says moo");
  }
}

const cat = new Cat();
const cow = new Cow();

cat.sound();
cow.sound();
```

### 📤 Output

```ts
Cat says meow
Cow says moo
```

Same method name, different behavior.

---

## ✅ Benefits of Polymorphism

- Makes code flexible
- Helps extend applications easily
- Improves scalability

---

# 3️⃣ Abstraction

## 🧠 What Is Abstraction?

Abstraction hides unnecessary details and only shows important functionality.

Users do not need to know how the internal system works.

---

## 💻 Example

```ts
abstract class Payment {
  abstract pay(amount: number): void;
}

class BkashPayment extends Payment {
  pay(amount: number): void {
    console.log(`Paid ${amount} using bKash`);
  }
}

const payment = new BkashPayment();

payment.pay(1000);
```

### Explanation:
- `Payment` defines the rules
- Child classes must follow those rules

---

## ✅ Benefits of Abstraction

- Reduces complexity
- Improves readability
- Makes code easier to manage

---

# 4️⃣ Encapsulation

## 🧠 What Is Encapsulation?

Encapsulation protects data from direct access.

We use `private` properties to secure important data.

---

## 💻 Example

```ts
class BankAccount {
  private balance: number = 1000;

  getBalance() {
    return this.balance;
  }

  deposit(amount: number) {
    this.balance += amount;
  }
}

const account = new BankAccount();

account.deposit(500);

console.log(account.getBalance());
```

### 📤 Output

```ts
1500
```

Trying this will show an error:

```ts
account.balance = 50000;
```

Because the balance is private.

---

## ✅ Benefits of Encapsulation

- Protects data
- Prevents accidental changes
- Improves application security

---

# 🎯 Conclusion

The four pillars of OOP help developers manage large TypeScript projects in a cleaner and smarter way.

## 📌 Quick Summary

| Pillar | Purpose |
|---|---|
| Inheritance | Reuse code |
| Polymorphism | Flexible behavior |
| Abstraction | Hide complexity |
| Encapsulation | Protect data |

These concepts help developers build applications that are:
- Scalable
- Maintainable
- Organized

If you are a beginner, practice these concepts with small projects first.

Over time, OOP will become one of the most powerful tools in your development journey.
