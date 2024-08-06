# rollup-plugin-clean
A Rollup plugin to clean the specified directories before building.

## Usage

```javascript
import clean from 'rollup-plugin-clean2';

export default {
  plugins: [
    clean({
      targets: ['dist/**'],
    }),
  ],
};
```

## Options

### targets

- **type**: `string[]`
- **default**: `['dist/**']`

The target directories to clean before building.

### watch

- **type**: `boolean`
- **default**: `false`

Whether to clean the directories when enable watch mode.

## License

MIT