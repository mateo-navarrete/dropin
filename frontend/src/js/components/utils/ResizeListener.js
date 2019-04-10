import { withResize } from '../../containers';

const Resizer = props => {
  console.log('@RL', props);
  return null;
};

export const ResizeListener = withResize(Resizer);
