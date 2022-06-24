import CanvasBackgroundColorConfig from "./CanvasBackgroundColorConfig";
import StrokeColorConfig from "./StrokeColorConfig";

interface WaveConfig {
  y?: number,
  length?: number,
  amplitude?: number,
  frequency?: number,
  canvasBackgroundColorConfig?: CanvasBackgroundColorConfig,
  strokeColorConfig?: StrokeColorConfig,
}

export default WaveConfig;