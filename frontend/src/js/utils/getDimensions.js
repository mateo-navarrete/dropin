const dimensions = {
  height: 0,
  width: 0,
  headerHeight: 0,
  mainHeight: 0,
  footerHeight: 0,
};

export const getDimensions = () => {
  let h = window.innerHeight;
  let w = window.innerWidth;
  let header = (h * 0.1) >> 0;
  let footer = (h * 0.1) >> 0; //0.05
  let updatedDimensions = dimensions;
  updatedDimensions.height = h;
  updatedDimensions.width = w;
  if (w > 450 && h > 450) {
    updatedDimensions.headerHeight = header;
    updatedDimensions.footerHeight = footer;
    updatedDimensions.mainHeight = h - header - footer;
  } else {
    updatedDimensions.headerHeight = 0;
    updatedDimensions.footerHeight = footer;
    updatedDimensions.mainHeight = h - footer;
  }

  return updatedDimensions;
};
