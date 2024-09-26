export const getEmotionStrength = (strength: string) => {
  const value = String(strength);

  switch (value) {
    case '1':
      return '약함';
    case '2':
      return '중간';
    case '3':
      return '강함';
    default:
      return value;
  }
};
