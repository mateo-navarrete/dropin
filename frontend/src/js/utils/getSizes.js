const sizes = {
  height: 0,
  marginLeft: 0,
  width: 0,
  adjWidth: 0,
  pinsH: 0,
  dropsH: 0,
  droppersH: 0,
};

export const getSizes = () => {
  let h = window.innerHeight;
  let w = window.innerWidth;
  let isWidescreen = w > h;
  let updatedSizes = sizes;
  updatedSizes.height = h;
  updatedSizes.width = w;
  updatedSizes.adjWidth = w;
  if (isWidescreen) {
    updatedSizes.adjWidth = (updatedSizes.adjWidth * 0.5) >> 0;
    updatedSizes.marginLeft = (updatedSizes.adjWidth * 0.5) >> 0;
  }

  updatedSizes.pinsH = (updatedSizes.height * 0.8) >> 0;
  updatedSizes.dropsH = (updatedSizes.height * 0.1) >> 0;
  updatedSizes.droppersH = h - updatedSizes.pinsH - updatedSizes.dropsH;

  return updatedSizes;
};
