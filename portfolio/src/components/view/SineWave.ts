import WaveConfig from "./WaveConfig";

class SineWave {

  private _config: WaveConfig;
  private _increment: number;

  constructor(config: WaveConfig) {
    this._config = config || {};
    this._increment = config.frequency || 0.0;
    const canvas = this._getCanvas();
    canvas.width = 1500;
    canvas.height = 1500;
  }

  public updateWave () {
    this._updateWave();
  }

  private _updateWave(): void {
    const canvas = this._getCanvas();
    const content = this._getCanvasContent();
    const strokeConfig = this._config.strokeColorConfig || {};
    const y = this._config.y || 0.0;
    const length = this._config.length || 0.0;
    const amplitude = this._config.amplitude || 0.0;
    content.fillStyle = 'rgba(0, 0, 0, 1)';
    content.clearRect(0, 0, canvas.width, canvas.height);
    content.beginPath();
    content.moveTo(0, canvas.height / 2)
    for (let i = 0; i < canvas.width; i++) {
      content.lineTo(i, y + Math.sin(i * length + this._increment) * amplitude);
    }
    const strokeHue = strokeConfig.h || 0;
    const strokeSaturation = strokeConfig.s || 0;
    const strokeSLightning = strokeConfig.l || 0;
    content.strokeStyle = `hsl(${Math.abs(strokeHue * Math.sin(this._increment))}, ${
        strokeSaturation
    }%, ${strokeSLightning}%)`;
    // @ts-ignore
    content.stroke();
    this._increment += this._config.frequency || 0.0;
  }

  private _getCanvas(): any {
    return document.querySelector('canvas');
  }

  private _getCanvasContent(): any {
    const canvas = this._getCanvas();
    return canvas.getContext('2d');
  }
}

export { SineWave };
