/** @format */


const dddice = require('dddice-js');
const { exit } = require('process');

/** @format */


const { ThreeDDiceAPI, parseRollEquation, ThreeDDiceRollEvent, ThreeDDice } = dddice;

(async () => {
  console.log('hello');
  let api = new ThreeDDiceAPI();
  const apiKey = await api.user.guest();
  console.log(apiKey);
  const dddice = new ThreeDDice(undefined,apiKey.data);
  const room = (await dddice.api.room.create()).data;
  console.log(room.slug);
  dddice.connect(room.slug);
  dddice.on(ThreeDDiceRollEvent.RollCreated, (roll) => {
    console.log('roll received');
    console.log(roll.equation);
    console.log(roll.total_value);
    exit();
  });
  dddice.api.onConnect(async () => {
    console.log('roll sent');
    const { dice, operators } = parseRollEquation('1d20', 'dddice-bees');
    const roll = await dddice.roll(dice);
  });
})()