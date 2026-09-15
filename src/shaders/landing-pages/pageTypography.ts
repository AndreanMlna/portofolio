export type LandingPageCustomization = {
  fontFamily?: string;
  headingsFontFamily?: string;
  fontSize?: string;
  colors?: Record<string, string>;
  css?: string;
};

export type PageTypographyProps = {
  fontFamily?: string;
  headingsFontFamily?: string;
  fontSize?: string;
};

export function splitTypographyProps<T extends Record<string, any>>(props: T): [PageTypographyProps, Omit<T, keyof PageTypographyProps>] {
  const { fontFamily, headingsFontFamily, fontSize, ...rest } = props;
  return [{ fontFamily, headingsFontFamily, fontSize }, rest as Omit<T, keyof PageTypographyProps>];
}

export function usePageTypography(recipe: any, props: PageTypographyProps): LandingPageCustomization | undefined {
  return undefined;
}

export function applyPageCustomization(frame: HTMLIFrameElement | null, customization?: LandingPageCustomization) {
  if (!frame || !customization) return;
  const doc = frame.contentDocument;
  if (!doc) return;
  if (customization.css) {
    const style = doc.createElement("style");
    style.textContent = customization.css;
    doc.head.appendChild(style);
  }
}

export function postPageCustomization(frame: HTMLIFrameElement | null, customization?: LandingPageCustomization) {
  if (!frame || !customization) return;
  frame.contentWindow?.postMessage({ type: "threeui-customization", customization }, "*");
}
