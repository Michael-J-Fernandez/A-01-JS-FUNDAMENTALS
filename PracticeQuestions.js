////////////////////////////////////////////////////////////
//// JAVASCRIPT JS BASICS
////////////////////////////////////////////////////////////

const x = 6;

// 1. Write a function that takes 2 numbers as arguments and returns the sum of both numbers and the variable "x" using without using arrow functions.
function addTwoNumsPlusX(num1 = 0, num2 = 0) {
  return x + num1 + num2;
}
console.log(addTwoNumsPlusX(2, 2));

// 2. Write a function that takes 2 numbers as arguments and returns the sum of both numbers and the variable "x", using arrow functions.
const addTwoNumsPlusXArrowFn = (num1 = 0, num2 = 0) => {
  return x + num1 + num2;
};
console.log(addTwoNumsPlusXArrowFn(2, 2));

// 3. Write a function that returns another function. (use arrow functions please)

const fnWithCallback = () => {
  return (innerCallback = (str) => str);
};

const hello = fnWithCallback();

console.log(hello("hello world")); //?

// 4. Given the following code explain why the function that returns from getFunction still has access to variable "y" even when "y" is not a global variable.

// A. "insideFunc" still has access to "y" because of closure. It is bundled with its outer scope - the state inside "getFunction"

const getFunction = () => {
  const y = 5;

  const insideFunc = (a) => y + a;

  return insideFunc;
};

console.log(getFunction()(2));

// 5. write a function that takes "couldThrowError()" as a callback argument.
// within that function call "couldThrowError" and log the result to the console.
// Make sure to handle errors that could be thrown by "couldThrowError()"
// If there is an error log "sorry, there was an error" to the console.

const couldThrowError = () => {
  if (Math.ceil(Math.random() * 2) < 2) {
    throw new Error("Error was thrown");
  }

  return "success";
};

const fnWithErrorCallback = (errorCallback) => {
  try {
    const returnedValue = errorCallback();
    console.log(returnedValue);

    // return returnedValue;
  } catch (error) {
    const message = "sorry, there was an error";
    console.log(message);
    // return message;
  }
};

fnWithErrorCallback(couldThrowError); //?

////////////////////////////////////////////////////////////
//// Handling data:
////////////////////////////////////////////////////////////

const userData = [
  {
    id: "111",
    name: "Peter",
    favorites: {
      food: ["burgers", "pizza"],
      activites: ["basketball", "baseball"],
    },
  },
  {
    id: "222",
    name: "John",
    favorites: {
      food: ["burgers", "tacos"],
      activites: ["football", "golf"],
    },
  },
  {
    id: "333",
    name: "Mary",
    favorites: {
      food: ["pizza", "tacos", "fried chicken"],
      activites: ["volleyball", "softball"],
    },
  },
];

// 5. Given the data above, use ".map" to make an array of objects.
// Each object should have the id of the user and the amount of favorite foods they have.
// example: [{id: '111', favoriteFoods: 2}]

const favoriteFoodsByUserId = userData.map((user) => {
  const {
    id,
    favorites: { food },
  } = user;

  return {
    id,
    favoriteFoods: food.length,
  };
});

console.log("!@----- 5. Amounts of favorite foods by user ID -----@!");
console.log(favoriteFoodsByUserId);

// 6. Given the data above, use ".reduce" to make an array of all the names
// of the people who have pizza as one of their favorite foods.
// example: ['Peter', 'Mary']

const likePizza = userData.reduce((pizzaLoversArr, user) => {
  const {
    name,
    favorites: { food },
  } = user;

  if (food.includes("pizza")) pizzaLoversArr.push(name);

  return pizzaLoversArr;
}, []);

console.log("!@----- 6. Users who like pizza -----@!");
console.log(likePizza);

// 7. Show an an example of a switch statement being used

const initialState = {
  "burgers": [],
  "pizza": [],
  "tacos": [],
  "fried chicken": [],
};

const favoriteFoodsReducer = (initialState, userData) => {
  const state = structuredClone(initialState);

  for (const user of userData) {
    user.favorites.food.forEach((item) => {
      switch (item) {
        case "burgers":
          return state["burgers"].push(user.name);

        case "pizza":
          return state["pizza"].push(user.name);

        case "tacos":
          return state["tacos"].push(user.name);

        case "fried chicken":
          return state["fried chicken"].push(user.name);

        default:
          return state;
      }
    });
  }

  return state;
};

console.log("!@----- 7. Example of switch statement -----@!");
console.log(favoriteFoodsReducer(initialState, userData)); //?

////////////////////////////////////////////////////////////
//// OBJECT AND ARRAY DESTRUCTURING
////////////////////////////////////////////////////////////

const userPersonalData = {
  name: "peter",
  age: "56",
  birthday: "jan 1st",
};
const userGameData = {
  score: 4546,
  accomplishments: [
    "won award for being good gamer",
    "won 1st win",
    "got good score on the weekend",
  ],
};

// 8. Combine the personalData and userGameData into a user object that is equal to the object below, by using the spread operator:
// const user = {
//  name: 'peter',
//  age: '56',
//  birthday: 'jan 1st',
//  score: 4546,
//  accomplishments: ['won award for being good gamer', 'won 1st win', 'got good score on the weekend'],
// }

const userCombinedData = {
  ...userPersonalData,
  ...userGameData,
};

console.log(userCombinedData);

// 9. Make a copy of your new user object but override the birthday to december 31st

const userCombinedDataCopy = {
  ...userCombinedData,
  birthday: "december 31st",
};

console.log(userCombinedDataCopy);

// 10. Use the spread operator to make a copy of the accomplishments array and store it in a new variable

const accomplishmentsCopy = [...userCombinedData.accomplishments];
console.log(accomplishmentsCopy);

//  11.Given the object bellow, use object destructuring to get the favorite food value (user.name.favoriteThings.food)
//  and store it in a variable name food

var user = {
  name: "pete",
  age: "32",
  favoriteThings: {
    food: ["pizza", "tacos", "burgers", "italian"],
    movies: [],
  },
};

const { food } = user.favoriteThings; //?
console.log(food);

// 12. Once you have grabbed the favorite foods. Destructure the food array to grab only the first 2 values. //

const [val1, val2] = food;

console.log(val1);
console.log(val2);

// 13. use object destructuring and the rest operator to transform the following array into 3 variables: name, age, and food.
//    the food variable should have all the array items starting from the third one.
const data = ["peter", "34", "apple", "oranges", "pizza", "tacos"];

// Changed "food" to "foodItems" to avoid conflict with a previously named variable on exercise 11
const [name, age, ...foodItems] = data;

console.log("!@----- 13. Destructured array: name, age, food -----@!");
console.log(name);
console.log(age);
console.log(foodItems);

// 14. use object destructuring to grab the following from the userInfo object:
// - The user's name and in a constant named userName.
// - The user's favorite food array and name it favoriteFood.
// - The users first favorite thing (cars) and name it favoriteThing
// - The users second favorite thing (jewelry) and name it secondfavoriteThing

const userInfo = {
  name: "Peter",
  favorites: {
    needs: {
      food: ["burger", "pizza", "tacos", "fried chicken", "sushi"],
    },
    wants: {
      things: ["cars", "jewelry"],
    },
  },
};

// const {
//   name: userName,
//   favorites: {
//     needs: { food: favoriteFood },
//     wants: {
//       things: [favoriteThing, secondFavoriteThing]
//     }
//   }
// } = userInfo;

const { name: userName } = userInfo;
const { food: favoriteFood } = userInfo.favorites.needs;
const [favoriteThing, secondFavoriteThing] = userInfo.favorites.wants.things;

console.log("!@----- 14. Destructure: -----@!");

console.log("!@----- userName: -----@!");
console.log(userName);

console.log("!@----- favoriteFood -----@!");
console.log(favoriteFood);

console.log("!@----- favoriteThing -----@!");
console.log(favoriteThing);

console.log("!@----- secondFavoriteThing -----@!");
console.log(secondFavoriteThing);

var fetchData = () =>
  new Promise((resolve, reject) => {
    console.log("fetchingData from imaginary database");
    setTimeout(() => {
      try {
        // fetchingData from imaginary database
        if (Math.ceil(Math.random() * 2) < 2) {
          throw new Error("Error!");
        }
        resolve({ name: "john", age: 42 });
      } catch (error) {
        reject(error);
      }
    }, 5000);
  });

module.exports = fetchData;

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Promises:
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Function that returns a promise.
var fetchData = () =>
  new Promise((resolve, reject) => {
    console.log("fetchingData from imaginary database");
    setTimeout(() => {
      try {
        // fetchingData from imaginary database
        if (Math.ceil(Math.random() * 2) < 2) {
          throw new Error("Error!");
        }
        resolve({ name: "john", age: 42 });
      } catch (error) {
        reject(error);
      }
    }, 5000);
  });

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 15. Call fetchData (which returns a promise) and use the .then()  method to log the value the promise resolves with to the javascript console.
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

fetchData()
  .then((resolve) => console.log(resolve))
  .catch((error) => console.log(error.message));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 16. Call fetchData (which returns a promise) and use the async/await method to log the value the promise resolves with to the javascript console.
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const asyncFunction = async () => {
  try {
    // console.log(await fetchData());
    const fetchedData = await fetchData();
    console.log(fetchedData);
  } catch (error) {
    console.log(error.message);
  }
};

asyncFunction();
