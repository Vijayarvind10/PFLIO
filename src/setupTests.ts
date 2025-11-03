import '@testing-library/jest-dom';

// Polyfill TextEncoder/Decoder for react-router in Jest environment
import { TextEncoder, TextDecoder } from 'util';

const globalAny = global as typeof globalThis & {
  TextEncoder?: typeof globalThis.TextEncoder;
  TextDecoder?: typeof globalThis.TextDecoder;
};

if (typeof globalAny.TextEncoder === 'undefined') {
  globalAny.TextEncoder = TextEncoder as unknown as typeof globalThis.TextEncoder;
}

if (typeof globalAny.TextDecoder === 'undefined') {
  globalAny.TextDecoder = TextDecoder as unknown as typeof globalThis.TextDecoder;
}
