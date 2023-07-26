// class Developer {
//   constructor(name) {
//     this.name = name;
//   }

//   commitChange() {
//     console.log(`${this.name} is committing changes...`);
//   }
// }

// class FrontEndDeveloper extends Developer {
//   buildUI() {
//     console.log(`${this.name} is building UI...`);
//   }
// }

// class BackEndDeveloper extends Developer {
//   buildAPI() {
//     console.log(`${this.name} is building API...`);
//   }
// }

// class DevOps extends Developer {
//   deployApp() {
//     console.log(`${this.name} is deploying app...`);
//   }
// }

// lalu untuk fullstack bagaimana? gunakan object composition berdasarkan kemampuan yang dapat dilakukan
class Developer {
  constructor(name) {
    this.name = name;
  }

  commitChanges() {
    console.log(`${this.name} is committing changes...`);
  }
}

function canBuildUI(developer) {
  return {
    buildUI: () => {
      setTimeout(() => {
        console.log(`${developer.name} is building UI...`);
      }, 1000);
    },
  };
}

function canBuildAPI(developer) {
  return {
    buildAPI: () => {
      setTimeout(() => {
        console.log(`${developer.name} is building API...`);
      }, 2000);
    },
  };
}

function canDeployApp(developer) {
  return {
    deployApp: () => {
      setTimeout(() => {
        console.log(`${developer.name} is deploying app...`);
      }, 3000);
    },
  };
}

function createFrontEndDeveloper(name) {
  const developer = new Developer(name);
  return Object.assign(developer, canBuildUI(developer));
}

function createBackEndDeveloper(name) {
  const developer = new Developer(name);
  return Object.assign(developer, canBuildAPI(developer));
}

function createDevOps(name) {
  const developer = new Developer(name);
  return Object.assign(developer, canDeployApp(developer));
}

function createFullStackDeveloper(name) {
  const developer = new Developer(name);
  return Object.assign(
    developer,
    canBuildUI(developer),
    canBuildAPI(developer),
    canDeployApp(developer)
  );
}

const fullStackDeveloper = createFullStackDeveloper("Fulanah");
fullStackDeveloper.buildUI();
fullStackDeveloper.buildAPI();
fullStackDeveloper.deployApp();
console.log(
  `is ${fullStackDeveloper.name} developer? `,
  fullStackDeveloper instanceof Developer
);
