const x = "";
// false

const y = 0;
// false

const a = null;
const b = undefined;
// false

const list = [];
const object = {};
// True

if (!list) {
  console.log(list);
}
