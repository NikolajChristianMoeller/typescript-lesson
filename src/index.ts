let number: number = 1;
number = 10;
console.log(number);

let level;
level = 1;
level = "1";
level = true;
level = {};

function render(document: string):string{
    return document;
console.log(document);
}

let numbers = [] = [1, 2, 3, 4, 5];
numbers.forEach((number) => console.log(number / 2))

let user: [number, string] = [1, "Steve"]

enum Direction {
    Up,
    Down,
    Left,
    Right,
}

let go: Direction = Direction.Up;
console.log(go);

function calculateTax(income: number, taxYear: number = 2022) {
    console.log(`Calculating tax for ${taxYear}`)
    let tax = income * 0.4;
    return tax;
}

let tax = calculateTax(400_000)
tax?.toString();

function sum(a: number, b: number) {
    return a + b;
}

sum(10, 20);

let employee: {
    readonly id: number;
    name: string;
    printName: () => void;
} = {
    id: 1,
    name: "Steve",
    printName: () => {
        console.log(employee.name);
    },
};

employee.printName();

type Employee = {
    id: number;
    name: string;
    printName: () => {
        console.log(employee.name);
    }
}

function kgToLbs(weight: number | string): number {
    //narrowing
    if (typeof weight === "string") {
        return parseInt (weight) * 2.2;
        else return weight * 2.2;
    }
}

kgToLbs(10);
kgToLbs("10");

type Draggable = {
    drag: () => void;

};

type Droppable = {
    drag: () => void;

};

type Resizable = {
    resize: () => void;
}
type UIWidget = Draggable & Droppable;

let uiWidget : UIWidget = {
    drag: () => {
        console.log("dragging")
    },

    drop: () => {
        console.log("dropping")
    },

    resize: () => {
        console.log("resizing")
    },
};

uiWidget.drag();
uiWidget.drop();
uiWidget.resize();

type Quantity = 50 | 100 | 200;
let q: Quantity = 50;

type Direction2 = "Up" | "Down" | "Left" | "Right";
let d: Direction2 = "Up";

type Metric = "m" | "cm" | "mm";
let distance: Metric = "mm"

function greet (name: string | null | undefined) {
    if (name) console.log (`Hello ${name}`)
}

greet(null);
greet(undefined);
greet("Steve");

type Customer = {
    birthDate: Date;
};

function getCustomer(id: number): Customer | null | undefined {
    console.log(`Fetching customer ${id}`)
    return {birthDate: new Date() };
}

let customer = getCustomer(1);

console.log(customer?.birthDate.getFullYear());

let log: any = (message: string): void => {
    console.log(message);
}

log = null;

log?.("Hello world");

let phone = document.getElementById("phone") as HTMLInputElement;
phone.click();

let input = {} as HTMLInputElement;

function doSomething (document: unknown) {
    if (typeof document === "string") console.log(document.toUpperCase());
}

doSomething(null);

function handleDocument(document: unknown) {
    if (document instanceof HTMLDivElement) {
        document.style.display = "none";
    }
}

function processEvents(): never {
    while (true) {
        console.log("processing");
    }
}

// processEvents()

function reject (reason: string) {
    throw new Error (reason);
}

// reject("Something went wrong");

console.log("done");