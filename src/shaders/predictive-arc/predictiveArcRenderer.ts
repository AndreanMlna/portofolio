export type PredictiveArcMode = "dark" | "light";

export type PredictiveArcOptions = {
  mode: PredictiveArcMode;
  speed: number;
  spacing: number;
  dotSize: number;
  archHeight: number;
  thickness: number;
  brightness: number;
  hue: number;
  saturation: number;
};

export const PREDICTIVE_ARC_DEFAULTS: PredictiveArcOptions = {
  mode: "dark",
  speed: 1,
  spacing: 5,
  dotSize: 6,
  archHeight: 0.7,
  thickness: 1,
  brightness: 1,
  hue: 0,
  saturation: 1,
};

function resolveMode(mode: PredictiveArcOptions["mode"] | number | string | undefined): PredictiveArcMode {
  if (mode === "light" || mode === 1 || mode === "1") return "light";
  return "dark";
}

export function createPredictiveArcRenderer(
  canvas: HTMLCanvasElement,
  getOptions: () => PredictiveArcOptions,
) {
  const context = canvas.getContext("2d", { alpha: false });
  if (!context) return null;
  let width = 1;
  let height = 1;
  let time = 0;

  // Precomputed Color Look-Up Tables (256 entries) for dark and light modes
  const DARK_LUT = new Array<string>(256);
  const LIGHT_LUT = new Array<string>(256);

  const initLUTs = (brightness: number) => {
    for (let i = 0; i < 256; i++) {
      const intensity = i / 255;
      // Light mode
      let lr = Math.min(255, 48 * intensity + 70 * Math.pow(intensity, 3));
      let lg = Math.min(255, 28 * intensity + 45 * Math.pow(intensity, 4));
      let lb = Math.min(255, 120 * intensity + 110 * Math.pow(intensity, 2));
      if (intensity > 0.7) {
        const coreBoost = (intensity - 0.7) * 3.3;
        lr = Math.min(255, lr + 90 * coreBoost);
        lg = Math.min(255, lg + 70 * coreBoost);
        lb = Math.min(255, lb + 110 * coreBoost);
      }
      LIGHT_LUT[i] = `rgb(${Math.floor(lr * brightness)}, ${Math.floor(lg * brightness)}, ${Math.floor(lb * brightness)})`;

      // Dark mode
      let dr = Math.min(255, 60 * intensity + 100 * Math.pow(intensity, 3));
      let dg = Math.min(255, 20 * intensity + 60 * Math.pow(intensity, 4));
      let db = Math.min(255, 120 * intensity + 135 * Math.pow(intensity, 2));
      if (intensity > 0.7) {
        const coreBoost = (intensity - 0.7) * 3.3;
        dr = Math.min(255, dr + 150 * coreBoost);
        dg = Math.min(255, dg + 150 * coreBoost);
        db = Math.min(255, db + 150 * coreBoost);
      }
      DARK_LUT[i] = `rgb(${Math.floor(dr * brightness)}, ${Math.floor(dg * brightness)}, ${Math.floor(db * brightness)})`;
    }
  };

  initLUTs(PREDICTIVE_ARC_DEFAULTS.brightness);

  const resize = (nextWidth: number, nextHeight: number) => {
    width = Math.max(1, nextWidth);
    height = Math.max(1, nextHeight);
    const pixelRatio = Math.min(window.devicePixelRatio || 1, 1.25);
    canvas.width = Math.round(width * pixelRatio);
    canvas.height = Math.round(height * pixelRatio);
    context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
  };

  const render = () => {
    const options = getOptions();
    const mode = resolveMode(options.mode);
    const isLight = mode === "light";
    context.fillStyle = isLight ? "#eef1f6" : "#030303";
    context.fillRect(0, 0, width, height);
    time += 0.015 * options.speed;

    const centerX = width / 2;
    const archPeakY = height * 0.35;
    const archWidth = width * 1.5;
    const archHeight = height * options.archHeight;
    const halfArchWidth = archWidth / 2;
    const spacing = options.spacing;
    const dotSize = options.dotSize;
    const lut = isLight ? LIGHT_LUT : DARK_LUT;

    // Bounds culling on X
    const xMin = Math.max(0, Math.floor((centerX - halfArchWidth * 1.15) / spacing) * spacing);
    const xMax = Math.min(width, Math.ceil((centerX + halfArchWidth * 1.15) / spacing) * spacing);

    context.globalCompositeOperation = isLight ? "source-over" : "lighter";

    for (let x = xMin; x < xMax; x += spacing) {
      const normX = (x - centerX) / halfArchWidth;
      const absNormX = Math.abs(normX);
      if (absNormX > 1.15) continue;

      const curveY = archPeakY + normX * normX * archHeight;
      const thickness = (140 + (1 - absNormX) * 80) * options.thickness;

      // Vertical bounds culling on Y: skip empty vertical bands
      const startY = Math.max(0, Math.floor((curveY - thickness) / spacing) * spacing);
      const endY = Math.min(height, Math.ceil((curveY + thickness) / spacing) * spacing);
      if (startY >= endY) continue;

      const normXTerm = Math.max(0, 1 - Math.pow(absNormX, 2.5));
      const waveX = Math.sin(x * 0.015 + time);

      for (let y = startY; y <= endY; y += spacing) {
        const distanceToCurve = Math.abs(y - curveY);
        if (distanceToCurve >= thickness) continue;

        let intensity = 1 - distanceToCurve / thickness;
        const waveY = Math.cos(y * 0.02 + time);
        intensity = (intensity * 0.7 + waveX * waveY * 0.3 * intensity) * normXTerm;
        if (intensity <= 0.02) continue;

        const lutIdx = (intensity * 255) | 0;
        context.fillStyle = lut[lutIdx < 0 ? 0 : (lutIdx > 255 ? 255 : lutIdx)];
        const curDotSize = dotSize * intensity;
        context.fillRect(x, y, curDotSize, curDotSize);
      }
    }
    context.globalCompositeOperation = "source-over";
  };

  return { resize, render };
}
