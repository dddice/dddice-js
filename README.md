# dddice JavaScript SDK

Integrate live 3D dice rolling into your own projects by leveraging the power of [dddice](https://dddice.com).

## Installation

Add to your project's dependencies using your favorite package manager.

```shell
npm install dddice-js --save
# or
yarn add dddice-js
```

Import and initialize the dddice instance.

```javascript
import { ThreeDDice } from 'dddice-js'

const canvasElement = document.getElementById('dddice'); // get the canvas element to roll dice into
const dddice = new window.ThreeDDice(canvasElement, '<YOUR_API_KEY>');

dddice.start(); // start the renderer
dddice.connect('<YOUR_ROOM_SLUG>'); // connect and listen for room events

// parse a roll equation
const { dice } = parseRollEquation('1d20', 'dddice-bees');

// Roll dice
dddice.roll(dice);
```

Read the [official documentation](https://docs.dddice.com/sdk/js/latest/) for usage information.

## Using in Node.js

```javascript
import {ThreeDDiceAPI, parseRollEquation, ThreeDDiceRollEvent} from 'dddice-js';
import {exit} from 'process';

const api = new ThreeDDiceAPI('<YOUR_API_KEY>');
const room = (await api.room.create()).data;

api.connect(room.slug);
api.listen(ThreeDDiceRollEvent.RollCreated, (roll) => {
    console.log('roll received');
    console.log(roll.equation);
    console.log(roll.total_value);
    exit();
});

api.onConnect(async () => {
    const { dice } = parseRollEquation('1d20', 'dddice-bees');
    const roll = await api.roll.create(dice);
});
```

## License

MIT
