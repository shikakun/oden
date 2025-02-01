import { Meta, StoryObj } from '@storybook/react';
import { useRef } from 'react';
import { useContainerSize } from './useContainerSize';

/**
 * 特定のHTML要素の幅またはviewportの幅を取得し、幅の大きさによって以下の文字列を返すカスタムフックです。
 *
 * | 文字列 | 幅の範囲 |
 * |----|----|
 * | `2xs` | 〜329px |
 * | `xs` | 330px〜369px |
 * | `s` | 370px〜599px |
 * | `m` | 600px〜799px |
 * | `l` | 800px〜1099px |
 * | `xl` | 1100px〜1399px |
 * | `2xl` | 1400px〜 |
 *
 * ## 使い方
 *
 * ### 特定のHTML要素のサイズを取得する場合
 *
 * ```tsx
 * import { useRef } from 'react';
 * import { useContainerSize } from '@shikakun/oden';
 *
 * const MyComponent = () => {
 *   const containerRef = useRef<HTMLDivElement>(null);
 *   const containerSize = useContainerSize(containerRef);
 *
 *   return (
 *     <div ref={containerRef}>
 *       <p>現在のコンテナサイズ: {containerSize}</p>
 *     </div>
 *   );
 * };
 * ```
 *
 * ### viewportのサイズを取得する場合
 *
 * ```tsx
 * import { useContainerSize } from '@shikakun/oden';
 *
 * const MyComponent = () => {
 *   const viewportSize = useContainerSize();
 *
 *   return <p>現在のviewportサイズ: {viewportSize}</p>;
 * };
 * ```
 */
const meta: Meta = {
  title: 'Utilities/useContainerSize',
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const ContainerSizeComponent = () => {
      const containerRef = useRef<HTMLDivElement>(null);
      const size = useContainerSize(containerRef);

      return <div>{size}</div>;
    };

    return <ContainerSizeComponent />;
  },
};
