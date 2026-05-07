//Problem-1

const filterEvenNumbers = (items: number[]): number[] => {
  return items.filter((num) => num % 2 === 0);
};

const array = [1, 2, 3, 4, 5, 6];
// console.log(filterEvenNumbers(array));

//Problem-2

const reverseString = (input: string): string => {
  return input.split("").reverse().join("");
};


// console.log(reverseString("12345"));






//problem-3

const StringOrNumber = (input: string | number) => {
  if (typeof input === "string") {
    console.log("String");
  } else console.log("Number");
};
StringOrNumber("Hello");
StringOrNumber(123);








//problem-4

const getProperty = <X>(obj: X, key: keyof X) => {
  return obj[key];
};

type User = {
  id: number;
  name: string;
  age: number;
};


const user: User = { id: 1, name: "John Doe", age: 21 };

const result = getProperty(user, "name");
//console.log(result);






//Problem-5
interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

interface BookWithReadStatus extends Book {
  isRead: boolean;
}

const toggleReadStatus = (book: Book): BookWithReadStatus => {
  const updatedBook = { ...book, isRead: true };
  return updatedBook;
};

const myBook: Book = {
  title: "TypeScript Guide",
  author: "Jane Doe",
  publishedYear: 2024,
};

 toggleReadStatus(myBook);
// console.log(toggleReadStatus(myBook));










//Problem-6

class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

}

class Student extends Person {
    grade: string;

    constructor(name: string, age: number, grade: string) {
        super(name, age);
        this.grade = grade;
    }

    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
    }
}

const student = new Student("Umayer", 21, "A");
student.getDetails();








//Problem-7
function getIntersection(input1: number[], input2: number[]): number[] {
  return input1.filter(num => input2.includes(num));
}
const output = getIntersection(
  [1, 2, 3, 4, 5],
  [3, 4, 5, 6, 7]
);

// console.log(output);

