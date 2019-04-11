const sizes = {
  height: 0,
  marginLeft: 0,
  width: 0,
  adjWidth: 0,
  pinsH: 0,
  dropsH: 0,
  droppersH: 0,
  //
  overlayHeight: 0,
  overlayWidth: 0,
  mainHeight: 0,
  mainWidth: 0,
  navBarHeight: 0,
  navBarWidth: 0,
  actionBarHeight: 0,
  actionBarWidth: 0,
};

export const getSizes = () => {
  let h = window.innerHeight;
  let w = window.innerWidth;
  let isWidescreen = w > h;
  let updatedSizes = sizes;
  updatedSizes.height = h;
  updatedSizes.width = w;
  updatedSizes.adjWidth = w;
  //
  updatedSizes.overlayHeight = h;
  updatedSizes.overlayWidth = w; //NOTE: * 0.5?
  updatedSizes.mainWidth = w;
  updatedSizes.navBarWidth = w;
  updatedSizes.actionBarWidth = w;
  if (isWidescreen) {
    updatedSizes.adjWidth = (updatedSizes.adjWidth * 0.5) >> 0;
    updatedSizes.marginLeft = (updatedSizes.adjWidth * 0.5) >> 0;
    updatedSizes.navBarWidth = (w * 0.5) >> 0;
    updatedSizes.actionBarWidth = (w * 0.5) >> 0;
  } else {
    updatedSizes.marginLeft = 0;
  }

  updatedSizes.pinsH = (updatedSizes.height * 0.8) >> 0;
  updatedSizes.dropsH = (updatedSizes.height * 0.1) >> 0;
  updatedSizes.droppersH = h - updatedSizes.pinsH - updatedSizes.dropsH;

  updatedSizes.mainHeight = (h * 0.8) >> 0;
  updatedSizes.navBarHeight = (h * 0.1) >> 0;
  updatedSizes.actionBarHeight =
    h - updatedSizes.mainHeight - updatedSizes.navBarHeight;

  return updatedSizes;
};
