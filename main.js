// project requirements and Algorithms

/*
    Define a variable named `notes` and assign a value of an empty array
*/
const notes = [];
/*
    Fill the array with several starter objects that have the following properties:
        * id (number)
        * text (string)
        * author (string) trying
        * date (string)
        * topics (array of strings)
    
    Either define the objects within the initial array or use the .push() method to add them after initialization.
*/

// remember curly braces to .push() objects to arrays
// remember case sensitivity in Elden Ring string
// shift + alt + f formats eveerything for you (if syntax is correct! sick!)
notes.push({
  id: 4,
  text: "straaaang",
  author: "yungreg",
  date: "August 18th",
  topics: ["iteration", "objects", "arrays", "Elden Ring"],
});

notes.push({
  id: 5,
  text: "SUPER string",
  author: "also yungreg",
  date: "august 16th",
  topics: ["make", "sure", "you", "nest", "Good"],
});
// console.log(notes)

// adding more notes section below

// below is done correctly now
notes.push(
  {
    id: 6,
    text: "ULTRA string",
    author: "still yungreg",
    date: "august 19th",
    topics: ["Good", "Eye", "Sniper", "I'll", "Shoot", "You", "Run"],
  },
  {
    id: 7,
    text: "PLUS ULTRA string",
    author: "once again, yungreg",
    date: "August thirty-leventh",
    topics: ["Keep", "On", "Trying"],
  },
  {
    id: 8,
    text: "MASTER string",
    author: "as always, yungreg",
    date: "August 832nd",
    topics: [
      "Scar Tissue",
      "Californication",
      "Otherside",
      "Suck My Kiss",
      "Can't Stop",
    ],
  }
);

// console.log(notes)

// listing your notes exercise below:
// for (const note of notes){
//     // console.log(note.text)
// }

//listing only topics
// note here after solving, these nested for..of loops are giving me trouble. try to look at that a little more.
// console.log("*** All Note Topics ***") 

// for (const note of notes) {
//   for (const topic of note.topics) {
//     console.log(topic)
//   }
// }

//  algorithm goal: to get average I need to divide the total amount of elements in the all the (topics) arrays, by the number of objects (posts)

// console.log("*** Average Topics Per Note ***")

// let numberOfNotes = 0

// for (const note of notes){
//   numberOfNotes += 1
// } 
// // console.log(numberOfNotes)

// let numberOfElements = 0

// for (const note of notes) {
//     numberOfElements += note.topics.length
//     // error was i used a "for...in instead of a for...of. ONE word held me up for about a full day. lol
// } 

// // console.log(numberOfElements)

// let avgNumOfTopics = numberOfElements / numberOfNotes

// console.log(avgNumOfTopics)

// Notes by topic:
//  make sure to use .includes() method

// Note Articles section 

// console.log('*** Note Articles ***')

// for (const note of notes) {
//   console.log(`<article>${note.text}</article>`)
// }

// Note topics Subsection:
// goal: to pull each topic from each note into its own child <section> container, that are all nested in the <article> container
// learned: don't make the problem more hard than it is. lol
let notesAsHTML = ''

for (const note of notes){
  notesAsHTML += `<article>\n\t${note.text}`
  // reminder: += iterates
  for (const sectionTopics of note.topics){
    notesAsHTML += `\n\t<section>${sectionTopics}</section>`
  }
  notesAsHTML += '\n</article>\n'
}

console.log(notesAsHTML)











