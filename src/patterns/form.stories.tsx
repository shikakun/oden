import { Meta, StoryObj } from '@storybook/react';
import { Button } from '../components/Button';
import { TextField } from '../components/TextField';
import * as styles from './form.css';

const meta: Meta = {
  title: 'Patterns/Form',
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

const FormDemo: React.FC = () => {
  return (
    <>
      <div className={styles.form}>
        <div className={styles.field}>
          <label className={styles.label} htmlFor='name'>
            名前
          </label>
          <TextField
            width='full'
            id='name'
            name='name'
            autoComplete='name'
            required={true}
          />
        </div>
        <div className={styles.field}>
          <label className={styles.label} htmlFor='email'>
            メールアドレス
          </label>
          <TextField
            width='full'
            id='email'
            name='email'
            type='email'
            autoComplete='email'
          />
        </div>
        <div className={styles.field}>
          <label className={styles.label} htmlFor='message'>
            メッセージ
          </label>
          <TextField
            width='full'
            id='message'
            name='message'
            rows={4}
            required={true}
          />
        </div>
        <div className={styles.action}>
          <Button appearance='filled'>送信</Button>
          <Button appearance='text'>リセット</Button>
        </div>
      </div>
    </>
  );
};

export const InteractiveDemo: Story = {
  render: () => <FormDemo />,
};
