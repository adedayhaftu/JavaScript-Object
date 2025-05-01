
// num 1

const User = {
    name: "Adeday",
    stepsWalked: [
        {
            day: 'monday',
            step: 40,
        },
        {
            day: 'tuesday',
            step: 50,
        },
        {
            day: 'wednesday',
            step: 60,
        },
        {
            day: 'thursday',
            step: 70,
        },
        {
            day: 'friday',
            step: 80,
        },
        {
            day: 'saturday',
            step: 90,
        },
        {
            day: 'sunday',
            step: 100,
        },
    ],
    totalSteps: function () {
        return this.stepsWalked.reduce((acc, element) => acc + element.step, 0);
    },
    averageSteps: function () {
        return this.totalSteps() / this.stepsWalked.length;
    }
};
console.log(User.totalSteps());
console.log(User.averageSteps());

// num 2

function RecipeInstructor(name, ingredients, cookTime) {
    this.name = name;
    this.ingredients = ingredients;
    this.cookTime = cookTime;
    this.displayRecipe = function () {
        return `Ingredients for ${this.name} are ${this.ingredients}`
    };
    this.isQuickMeal = function () {
        return cookTime <= 30 ? true : false
    }
};
const dessertRecipes = new RecipeInstructor("cake", ["flour", "baking powder", "sugar"], 20)
console.log(dessertRecipes.displayRecipe());
console.log(dessertRecipes.isQuickMeal());


// num 3

const Car = {
    model: "G Wagon",
    mileage: 50000,
    serviceHistory: ["20-01-2020", "13-03-2021", "4-09-2022"],
    addService(date) {
        this.serviceHistory.push(date);
    },
    lastServiceDate() {
        return this.serviceHistory[this.serviceHistory.length - 1];
    }
};
Car.addService("13-09-2023");
Car.addService("1-09-2023");
console.log({ Car });
console.log(Car.lastServiceDate());


// num 4

const Playlist = {
    songs: ["Thunder", "Enemy", "Bones"],
    addSong: function (title) {
        this.songs.push(title);
    },
    removeSong: function (title) {
        this.songs = this.songs.filter(song => song !== title);
    },
    listSongs: function () {
        console.log("Playlist Songs:");
        this.songs.forEach(song => console.log(song));
    }
};
Playlist.addSong("Shark");
Playlist.removeSong("Enemy");
Playlist.listSongs();


// num 5

function Course(title, lessons) {
    this.title = title;
    this.lessons = lessons;
    this.completedLessons = [];
    this.markComplete=function(lesson){
        this.completedLessons.push(lesson);
    }
    this.getProgress = function () {
        return `${this.completedLessons.length} out of ${this.lessons.length} completed lessons`;
    };
};
const kotlinCourse = new Course("Kotlin", ["Functions", "Arrays", "String", "OOP", "Inheritance"]);
kotlinCourse.markComplete("Functions");
kotlinCourse.markComplete("Arrays");
kotlinCourse.markComplete("String");
console.log(kotlinCourse.getProgress()); 
