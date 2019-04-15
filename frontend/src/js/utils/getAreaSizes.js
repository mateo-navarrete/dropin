const sizes = {
  height: 0,
  width: 0,
  mainHeight: 0,
  navBarHeight: 0,
  actionBarHeight: 0,
};

export const getAreaSizes = () => {
  let h = window.innerHeight;
  let areaSizes = sizes;
  areaSizes.height = h;
  areaSizes.width = window.innerWidth;
  areaSizes.mainHeight = (h * 0.8) >> 0;
  areaSizes.navBarHeight = (h * 0.1) >> 0;
  areaSizes.actionBarHeight = h - areaSizes.mainHeight - areaSizes.navBarHeight;
  return areaSizes;
};
