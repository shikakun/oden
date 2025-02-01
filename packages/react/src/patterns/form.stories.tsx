import { Meta, StoryObj } from '@storybook/react';
import { Button } from '../components/Button';
import { FormControl } from '../components/FormControl';
import { TextField } from '../components/TextField';
import * as styles from './form.css';

const meta: Meta = {
  title: 'Patterns/Form',
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className={styles.form}>
      <FormControl required={true}>
        <FormControl.Label htmlFor='name'>名前</FormControl.Label>
        <TextField id='name' required={true} />
      </FormControl>
      <FormControl>
        <FormControl.Label htmlFor='email'>メールアドレス</FormControl.Label>
        <TextField
          id='email'
          type='email'
          autoComplete='email'
          required={true}
        />
      </FormControl>
      <FormControl required={true}>
        <FormControl.Label htmlFor='message'>メッセージ</FormControl.Label>
        <TextField
          width='full'
          id='message'
          name='message'
          rows={4}
          required={true}
        />
      </FormControl>
      <div className={styles.action}>
        <Button appearance='filled'>送信</Button>
        <Button appearance='text'>リセット</Button>
      </div>
    </div>
  ),
};
