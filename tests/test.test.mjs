/** @format */

import {ThreeDDiceAPI, parseRollEquation, ThreeDDiceRollEvent} from 'dddice-js';
import {exit} from 'process';

console.log('hello');
let api = new ThreeDDiceAPI();
const apiKey = await api.user.guest();
console.log(apiKey);
api = new ThreeDDiceAPI(apiKey.data);
const room = (await api.room.create()).data;
console.log(room.slug);
api.connect(room.slug);
api.listen(ThreeDDiceRollEvent.RollCreated, (roll) => {
    console.log('roll received');
    console.log(roll.equation);
    console.log(roll.total_value);
    exit();
});
api.onConnect(async () => {
    console.log('roll sent');
    const {dice, operators} = parseRollEquation('1d20', 'dddice-bees');
    const roll = await api.roll.create(dice);
});