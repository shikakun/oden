import { useEffect, useState } from 'react';

export type ContainerSizeType = '2xs' | 'xs' | 's' | 'm' | 'l' | 'xl' | '2xl';

const determineContainerSize = (width: number): ContainerSizeType => {
  if (width < 330) return '2xs';
  if (width < 370) return 'xs';
  if (width < 600) return 's';
  if (width < 800) return 'm';
  if (width < 1100) return 'l';
  if (width < 1400) return 'xl';
  return '2xl';
};

export const useContainerSize = (
  elementRef?: React.RefObject<HTMLElement | null>,
): ContainerSizeType => {
  const [size, setSize] = useState<ContainerSizeType>('2xl');

  useEffect(() => {
    const updateSize = () => {
      const width = elementRef?.current?.offsetWidth ?? window.innerWidth;
      setSize(determineContainerSize(width));
    };

    updateSize();

    const handleResize = () => updateSize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [elementRef]);

  return size;
};
