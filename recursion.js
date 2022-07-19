//a recursive function is a function that calls itself
//When we invoke deepIterator() with an argument, the function first checks if the argument is an object (recall that the typeof operator returns "object" for arrays as well). If the argument isn't an object, deepIterator() simply console.log()s out the argument and exits. However, if the argument is an object, we iterate over the properties (or elements) in the object, passing each to deepIterator() and re-invoking the function. That's recursion!

const userInfo = {
    firstName: "Avi",
    lastName: "Flombaum",
    company: {
      name: "Flatbook Labs",
      jobTitle: "Developer Apprentice",
    },
    friends: [
      {
        firstName: "Nancy",
        lastName: "Burgess",
        company: {
          name: "Flatbook Labs",
          jobTitle: "Developer Apprentice",
        },
      },
      {
        firstName: "Corinna",
        lastName: "Jackson",
        company: {
          name: "Flatbook Labs",
          jobTitle: "Lead Developer",
        },
      },
    ],
    projects: [
      {
        title: "Flatbook",
        description:
          "The premier Flatiron School-based social network in the world.",
      },
      {
        title: "Scuber",
        description:
          "A burgeoning startup helping busy parents transport their children to and from all of their activities on scooters.",
      },
    ],
  };
  let counter = 0;

  function deepIterator(target) {
    counter++;
    if (Array.isArray(target)) {
      for (const element of target) {
        deepIterator(element);
      }
    } else if (typeof target === "object") {
      for (const key in target) {
        deepIterator(target[key]);
      }
    } else {
      console.log(target);
    }
  }
    deepIterator(userInfo);
    console.log(counter);