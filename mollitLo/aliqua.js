export const myVariable = 1;

export const anotherVariable = 2;

export function myFunction() {
  console.log(`Hello world! The value of myVariable is ${myVariable}.`);
}

export function anotherFunction() {
  console.log(`Another function using anotherVariable: ${anotherVariable}`);
}

export const multiplyVariables = () => myVariable * anotherVariable;

export const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
