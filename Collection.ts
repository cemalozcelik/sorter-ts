// Abstract class Collection
abstract class Collection {
  abstract length: number;
  abstract compare(leftIndex: number, rightIndex: number): boolean;
  abstract swap(leftIndex: number, rightIndex: number): void;

  abstract get(index: number): any;

  sort(): void {
    const { length } = this;
    
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1);
        }
      }
    }
  }
}

// Concrete class NumbersCollection
class NumbersCollection extends Collection {
  constructor(public data: number[]) {
    super();
  }

  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }

  swap(leftIndex: number, rightIndex: number): void {
    const temp = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = temp;
  }

  get(index: number): number {
    return this.data[index];
  }
}

// Concrete class CharactersCollection
class CharactersCollection extends Collection {
  constructor(public data: string) {
    super();
  }

  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase();
  }

  swap(leftIndex: number, rightIndex: number): void {
    const characters = this.data.split('');
    const temp = characters[leftIndex];
    characters[leftIndex] = characters[rightIndex];
    characters[rightIndex] = temp;
    this.data = characters.join('');
  }

  get(index: number): string {
    return this.data.charAt(index);
  }
}

// Usage
const numbersCollection = new NumbersCollection([10, 3, -5, 0, 7]);
const charactersCollection = new CharactersCollection("TypeScript");

numbersCollection.sort();
charactersCollection.sort();

console.log(numbersCollection.data); // Output: [ -5, 0, 3, 7, 10 ]
console.log(charactersCollection.data); // Output: "ScTpritype"
