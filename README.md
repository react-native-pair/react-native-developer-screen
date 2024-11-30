# react-native-developer-screen

Utils for react-native developer

## Features
- [x] : Show developer screen FAB by shake
- [ ] : Value Viewer
- [ ] : Network Logger

## Installation

```sh
yarn add react-native-developer-screen # or your favorite package manager
```

## Usage


```js
import { DeveloperScreen } from 'react-native-developer-screen';

// App.tsx
export default function App() {
  return (
    <View>
      // Your navigation by react-navigation or react-native-navigation
      // <YourNavigator />

      // your navigator in bottom
      <DeveloperScreen />
    </View>
  );
}




```


## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
