# Document Difference
**Generates difference between two html documents**


## Install
```bash
yarn add git+ssh://git@github.com:sreza78/Document-Difference.git
```

## Usage
```js
import { DocumentDifference } from 'DocumentDifference';

...

<DocumentDifference oldDocument="<OLD CODE>" newDocument="<NEW CODE>" />

...
```

## Props
| Name                      | Type            | Default                        | Description                                                                                                                                                                                                                                                                                                                                                                                                      |
| ------------------------- | --------------- | ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| oldDocument               | `string`        | `''`                           | Old code as string.                                                                                                                                                                                                                                                                                                                                                                                             |
| newDocument               | `string`        | `''`                           | New code as string.                                                                                                                                                                                                                                                                                                                                                                                             |

## License
MIT
