import type { Meta, StoryObj } from '@storybook/react';
import { useId } from 'react';
import { Button } from '../components/Button';
import { FormControl } from '../components/FormControl';
import { TextField } from '../components/TextField';
import { withThemeDark } from '../storybook/decorators';
import * as styles from './form.css';

const meta: Meta = {
  title: 'Patterns/Form',
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const nameId = useId();
    const emailId = useId();
    const messageId = useId();
    return (
      <div className={styles.form}>
        <FormControl required={true}>
          <FormControl.Label htmlFor={nameId}>名前</FormControl.Label>
          <TextField id={nameId} required={true} />
        </FormControl>
        <FormControl>
          <FormControl.Label htmlFor={emailId}>
            メールアドレス
          </FormControl.Label>
          <TextField
            id={emailId}
            type="email"
            autoComplete="email"
            required={true}
          />
        </FormControl>
        <FormControl required={true}>
          <FormControl.Label htmlFor={messageId}>メッセージ</FormControl.Label>
          <TextField
            width="full"
            id={messageId}
            name="message"
            rows={4}
            required={true}
          />
        </FormControl>
        <div className={styles.action}>
          <Button appearance="filled" color="interactive">
            送信
          </Button>
          <Button appearance="text" color="muted">
            リセット
          </Button>
        </div>
      </div>
    );
  },
};

export const ThemeDark: Story = {
  render: () => {
    const nameId = useId();
    const emailId = useId();
    const messageId = useId();
    return (
      <div className={styles.form}>
        <FormControl required={true}>
          <FormControl.Label htmlFor={nameId}>名前</FormControl.Label>
          <TextField id={nameId} required={true} />
        </FormControl>
        <FormControl>
          <FormControl.Label htmlFor={emailId}>
            メールアドレス
          </FormControl.Label>
          <TextField
            id={emailId}
            type="email"
            autoComplete="email"
            required={true}
          />
        </FormControl>
        <FormControl required={true}>
          <FormControl.Label htmlFor={messageId}>メッセージ</FormControl.Label>
          <TextField
            width="full"
            id={messageId}
            name="message"
            rows={4}
            required={true}
          />
        </FormControl>
        <div className={styles.action}>
          <Button appearance="tinted" color="interactive">
            送信
          </Button>
          <Button appearance="text" color="muted">
            リセット
          </Button>
        </div>
      </div>
    );
  },
  decorators: [withThemeDark],
};
