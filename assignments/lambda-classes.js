// CODE here for your Lambda Classes
/*#### Person

* First we need a Person class. This will be our `base-class`
* Person receives `name` `age` `location` `gender` all as props
* Person receives `speak` as a method.
* This method logs out a phrase `Hello my name is Fred, I am from Bedrock` where `name` and `location` are the object's own props
*/
class Person {
    constructor(attr){
        this.name = attr.name;
        this.age = attr.age;
        this.location = attr.location;
        this.gender = attr.gender;
    }
    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`)
    }
}

/* 
* Now that we have a Person as our base class, we'll build our Instructor class.
* Instructor uses the same attributes that have been set up by Person
* Instructor has the following unique props:
  * `specialty` what the Instructor is good at i.e. 'redux'
  * `favLanguage` i.e. 'JavaScript, Python, Elm etc.'
  * `catchPhrase` i.e. `Don't forget the homies`
* Instructor has the following methods:
  * `demo` receives a `subject` string as an argument and logs out the phrase 'Today we are learning about {subject}' where subject is the param passed in.
  * `grade` receives a `student` object and a `subject` string as arguments and logs out '{student.name} receives a perfect score on {subject}'
  */

class Instructor extends Person {
    constructor(attr){
        super(attr);
        this.specialty = attr.specialty;
        this.favLanguage = attr.favLanguage;
        this.catchPhrase = attr.catchPhrase;
    }
    demo(subject){
        console.log(`Today we are learning about ${subject}`);
    }
    grade(student, subject){
        console.log(`${student.name} recieves a perfect score on ${subject}`);
    }

    editGrade(student){
        let placeHolder = student.grade;
        
        if (Math.random() > .50){
            placeHolder = placeHolder + 10*Math.random()
        } else {
            placeHolder = placeHolder - 10*Math.random()
        }
        
        student.grade = placeHolder;
        
    }
}

/* 
* Now we need some students!
* Student uses the same attributes that have been set up by Person
* Student has the following unique props:
  * `previousBackground` i.e. what the Student used to do before Lambda School
  * `className` i.e. CS132
  * `favSubjects`. i.e. an array of the student's favorite subjects ['Html', 'CSS', 'JavaScript']
* Student has the following methods:
  * `listsSubjects` a method that logs out all of the student's favoriteSubjects one by one.
  * `PRAssignment` a method that receives a subject as an argument and logs out that the `student.name has submitted a PR for {subject}`
  * `sprintChallenge` similar to PRAssignment but logs out `student.name has begun sprint challenge on {subject}`
  */

class Student extends Person {
    constructor(attr){
        super(attr);
        this.previousBackground = attr.previousBackground;
        this.className = attr.className;
        this.favSubjects = attr.favSubjects;
        this.grade = attr.grade;
    }
    listsSubjects(){
        this.favSubjects.forEach(element => console.log(element));
        // for (let i = 0; i<this.favSubjects.length; i++){
        //     console.log(this.favSubjects[i]);
        // }
    }
    PRAssignment(subject){
        console.log(`${this.name} has submitted a PR for ${subject}` );
    }
    sprintChallenge(subject){
        console.log(`${this.name} has begun sprint challenge on ${subject}` );
    }
    graduate(){
        if (this.grade >=70) {
            console.log (`Congrats on finishing Lambda School! Now go get a job.`)
        } else {
            console.log (`Keep coding, friend.`)
        }
    }
}

/*

Now that we have instructors and students, we'd be nowhere without our PM's.
ProjectManagers are extensions of Instructors.
ProjectManagers have the following uniqe props:
* `gradClassName`: i.e. CS1
* `favInstructor`: i.e. Sean
ProjectManangers have the following Methods:
* `standUp` a method that takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!​​​​​
* `debugsCode` a method that takes in a student object and a subject and logs out `{name} debugs {student.name}'s code on {subject}`

*/
class ProjectManager extends Instructor {
    constructor(attr){
        super(attr);
        this.gradClassName = attr.gradClassName;
        this.favInstructor = attr.favInstructor;
    }
    standUp(channel){
        console.log(`${this.name} announces to ${channel}, @channel standy times!`);
    }
    debugsCode(student, subject){
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}.`);
    }
}


/* ============ INSTRUCTOR OBJECTS ============*/  

const fred = new Instructor({
    name: 'Fred',
    location: 'tulsa',
    age: 122,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });

  const wilma = new Instructor({
    name: 'wilma',
    location: 'madison',
    age: 91,
    gender: 'female',
    favLanguage: 'Solidity',
    specialty: 'back-end',
    catchPhrase: `Hash is king`
  });

  const betty = new Instructor({
    name: 'betty',
    location: 'earlville',
    age: 78,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Goin back to cali`
  });

/* ============ STUDENT OBJECTS ============*/  

const dolores = new Student({
    name: 'Dolores',
    location: 'Utica',
    age: 34,
    gender: 'female',
    favLanguage: 'English',
    specialty: 'Front-end',
    catchPhrase: `That's what HE said`,
    className: 'web17',
    favSubjects: ['Html', 'CSS', 'JavaScript'],
    grade: 78,
  });

const holloway = new Student({
    name: 'Holloway',
    location: 'Liverpool',
    age: 20,
    gender: 'female',
    favLanguage: 'Spanglish',
    specialty: 'back-end',
    catchPhrase: `Clear eyes, full hearts, can't lose.`,
    className: 'cs9',
    favSubjects: ['Html', 'CSS', 'JavaScript'],
    grade: 56,
});

const angel = new Student({
    name: 'Angel',
    location: 'Binghampton',
    age: 28,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Legendary!`,
    className: 'web17',
    favSubjects: ['Html', 'CSS', 'JavaScript'],
    grade: 90,
});

/* ============ PROJECT MANAGER OBJECTS ============*/ 

const carr = new ProjectManager({
    name: 'Carr',
    location: 'Watertown',
    age: 35,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `I love it when a plan comes together`,
    gradClassName: 'web3',
    favInstructor: 'Fred',
});

const blanche = new ProjectManager({
    name: 'Blance',
    location: 'Cazenovia',
    age: 91,
    gender: 'female',
    favLanguage: 'CSS',
    specialty: 'back-end',
    catchPhrase: `Eat my shorts`,
    gradClassName: 'android9',
    favInstructor: 'Barney',
});

 const alton = new ProjectManager({
    name: 'Alton',
    location: 'Sherburne',
    age: 78,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Whatchu talkin' bout, Willis?`,
    gradClassName: 'iOS4',
    favInstructor: 'Wilma',
});


/* ============ editGrade and graduate testing ============*/ 
console.log(dolores.grade)

fred.editGrade(dolores);

console.log(dolores.grade)

dolores.graduate();
dolores.listsSubjects();



  /*
  Random names
	Carr
Blanche	Mclaughlin
Alton	Page
Byron	Byrd
Joe	Perry
Susie	Holmes
Sean	Long
Myrtle	Pena
Julie	Bowen
*/

