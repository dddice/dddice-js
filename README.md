# dddice JavaScript SDK

Integrate live 3D dice rolling into your own projects by leveraging the power of [dddice](https://dddice.com).

## Installation

Add to your project's dependencies using your favorite package manager.

```shell
npm install dddice-js --save
# or
yarn add dddice-js
```

## Using in Node.js

Import and initialize the dddice instance.

```javascript
import {parseRollEquation, ThreeDDiceAPI, ThreeDDiceRollEvent} from "dddice-js";

const canvasElement = document.getElementById('dddice'); // get the canvas element to roll dice into
const dddice = new window.ThreeDDice(canvasElement, '<YOUR_API_KEY>');

dddice.start(); // start the renderer
dddice.connect('<YOUR_ROOM_SLUG>'); // connect and listen for room events
dddice.on(ThreeDDiceRollEvent.RollCreated, (roll) => {
    console.log('roll received');
    console.log(roll.equation);
    console.log(roll.total_value);
});

// parse a roll equation
const { dice } = parseRollEquation('1d20', 'dddice-bees');

// Roll dice
dddice.roll(dice);
```
Read the [official documentation](https://docs.dddice.com/sdk/js/latest/) for usage information.

## Using in Node.js

ThreeDDice class — the renderer — is not supported in Node.js.
ThreeDDiceAPI — the API & Websocket wrapper — is supported in Node.js

```javascript
import {ThreeDDiceAPI, parseRollEquation, ThreeDDiceRollEvent} from 'dddice-js';
import {exit} from 'process';

const api = new ThreeDDiceAPI('<YOUR_API_KEY>');

api.connect('<YOUR_ROOM_SLUG>');

api.listen(ThreeDDiceRollEvent.RollCreated, (roll) => {
    console.log('roll received');
    console.log(roll.equation);
    console.log(roll.total_value);
});

api.onConnect(async () => {
    const { dice } = parseRollEquation('1d20', 'dddice-bees');
    const roll = await api.roll.create(dice);
});
```
Read the [official documentation](https://docs.dddice.com/sdk/js/latest/) for usage information.


## Using in React Native

ThreeDDice class — the renderer — has unknown support for React Native.
ThreeDDiceAPI — the API & Websocket wrapper — is supported and tested in React Native

```typescript jsx
import React, {useRef} from "react";
import {parseRollEquation, ThreeDDiceAPI, ThreeDDiceRollEvent} from "dddice-js";

export function Component() {
    const api = useRef<ThreeDDiceAPI>();
    return (
        <View>
            <Button onPress={() => {
                api.current = new ThreeDDiceAPI("<YOUR_API_KEY>");
                api.current.connect("<YOUR_API_KEY>");
                api.current.listen(ThreeDDiceRollEvent.RollCreated, (roll) => {
                    console.log('roll received');
                    console.log(roll.equation);
                    console.log(roll.total_value);
                });
            }}>Connect</Button>

            <Button onPress={() => {
                const {dice} = parseRollEquation("1d20", 'dddice-bees');
                api.current.roll.create(dice);
            }}>Roll</Button>
        </View>
    );
}
```
Read the [official documentation](https://docs.dddice.com/sdk/js/latest/) for usage information.


## License

MIT
