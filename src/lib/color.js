import { order, colors } from '../configs/consts/colors';

export const colorBackground = (selectedColors) => {
  if(selectedColors.length > 0) {
    if(selectedColors.length > 1) {
      const colorText = order.filter((color) => selectedColors.includes(color)).map((color) => {
        return colors[color].color;
      }).join(',');

      return `linear-gradient(-45deg, ${colorText})`;
    } else {
      return colors[selectedColors[0]].color;
    }
  } else {
    return 'rgba(255,255,255,0.4)';
  }
}
