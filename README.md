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
import { ThreeDDice } from 'dddice-js';

const dddice = new ThreeDDice(document.getElementById('dddice'), '<YOUR_API_KEY>');

dddice.start(); // start the renderer
dddice.connect('<YOUR_ROOM_SLUG>'); // connect and listen for room events

// Roll dice
dddice.roll([{
    theme: 'dddice-standard',
    type: 'd20',
}]);
```

Read the [official documentation](https://docs.dddice.com/sdk/js/latest/) for usage information.

## License

MIT
