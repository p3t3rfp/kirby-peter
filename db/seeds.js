const mongoose = require("./connection.js");
const Link = require("../models/Link.js");

// const fellinis = new Shop({
//     name: "Fellini's Pizza",
//     rating: 4,
//     category: "Pizza",
//     description:
//       "Fellini's Pizza is an Italian restaurant founded in Atlanta on May 5, 1982 by Clay Harper of the Coolies. It has 7 locations and is known for its Atlanta style pizza. Its first location was opened near Little Five Points. It was voted the best pizza restaurant in Atlanta in 2013 by the Emory Wheel",
//     imgLink:
//       "https://thepizzasnob.files.wordpress.com/2012/08/putdooes-resize.jpg",
//     foodItems: [pizza]
//   });

const firstOne = new Link({
    url: 'https://thepizzasnob.files.wordpress.com/2012/08/putdooes-resize.jpg',
    title: 'fist post',
    desc: 'Our very first post',
    date: Date.now()
})
const secondOne = new Link({
    url: 'https://second/url.com',
    title: 'second post',
    desc: '2',
    date: Date.now()
})
const thirdOne = new Link({
    url: 'https://third/url.com',
    title: 'third post',
    desc: '3',
    date: Date.now()
})
const fourthOne = new Link({
    url: 'https://fourth/url.com',
    title: 'fourth post',
    desc: '4',
    date: Date.now()
})
const fifthOne = new Link({
    url: 'https://fifth/url.com',
    title: 'fif post',
    desc: '5',
    date: Date.now()
})

Link.remove({})
  .then(() => Link.create([firstOne, secondOne, thirdOne, fourthOne, fifthOne]))
  .then(() => {
    console.log("seeded successfully");
    mongoose.connection.close();
  })
  .catch(err => console.log(err, "error!"));