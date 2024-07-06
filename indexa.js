// Animal sounds, names, and colors
const farmAnimals = {
  cow: { sound: "moo", name: "bessie", color: "blackAndWhite" },
  sheep: { sound: "baa", name: "dolly", color: "white" },
  pig: { sound: "oink", name: "babe", color: "pink" },
  chicken: { sound: "cluck", name: "little", color: "yellow" },
  dog: { sound: "bark", name: "max", color: "brown" },
};

const {
  cow: { sound: moo },
  sheep: { sound: baa },
  pig: { sound: oink },
  chicken: { sound: cluck },
  dog: { sound: bark },
} = farmAnimals;
const {
  cow: { name: bessie },
  sheep: { name: dolly },
  pig: { name: babe },
  chicken: { name: little },
} = farmAnimals;
const {
  cow: { color: blackAndWhite },
  sheep: { color: white },
  pig: { color: pink },
  chicken: { color: yellow },
} = farmAnimals;

// Rainbow colors
const rainbow = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "indigo",
  "violet",
];
const [red, orange, yellow, green, blue, indigo, violet] = rainbow;
const [r, o, y, g, b, i, v] = rainbow;
const [, , , , , indg] = rainbow;

// Muppet details
const muppet = {
  name: "Kermit",
  color: "green",
  job: "Host",
  partner: "Miss Piggy",
  songs: [
    "Rainbow Connection",
    "Bein' Green",
    "Happy Feet",
    "Movin' Right Along",
  ],
};

const {
  name: muppetName,
  color: muppetColor,
  job: muppetJob,
  partner: muppetPartner,
  songs: [song1, song2, song3, song4],
} = muppet;
