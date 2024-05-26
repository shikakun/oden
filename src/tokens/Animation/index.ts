import * as tokens from '@shikakun/dashi';

type AnimationType = {
  duration: {
    normal: string;
  };
};

export const Animation: AnimationType = {
  duration: {
    normal: tokens.AnimationDurationNormal,
  },
};
