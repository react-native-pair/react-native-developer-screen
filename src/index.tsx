import {
  NativeModules,
  Platform,
  useWindowDimensions,
  View,
} from 'react-native';
import { useEffect } from 'react';

const LINKING_ERROR =
  `The package 'react-native-developer-screen' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

// @ts-expect-error
const isTurboModuleEnabled = global.__turboModuleProxy != null;

let DeveloperScreenModule = isTurboModuleEnabled
  ? require('./NativeDeveloperScreen').default
  : NativeModules.DeveloperScreen;

DeveloperScreenModule = DeveloperScreenModule
  ? DeveloperScreenModule
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

export function multiply(a: number, b: number): Promise<number> {
  return DeveloperScreenModule.multiply(a, b);
}

export function DeveloperScreen() {
  const window = useWindowDimensions();

  useEffect(() => {
    if (__DEV__) {
    }
  }, []);

  return (
    <View
      style={{
        position: 'absolute',
        width: window.width,
        height: window.height,
        backgroundColor: 'red',
        left: window.width / 2,
        // TODO: 쉐이킹 인식 네이티브 모듈 구현하여 애니메이션 처리 코드 추가 후에 이어서 작업
        // left: window.width,
      }}
    />
  );
}
