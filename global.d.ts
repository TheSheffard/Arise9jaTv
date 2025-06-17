// types/global.d.ts
export {}; // Important for module augmentation

declare global {
  interface Window {
    _adsterra: Array<{ id: string }>;
    Adsterra?: {
      init: () => void;
      // Add other Adsterra methods if needed
    };
  }
}