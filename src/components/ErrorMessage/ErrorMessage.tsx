import css from 'components/ErrorMessage/ErrorMessage.module.css';

interface ErrorMessageProps {
  message: string;
}

export default function ErrorMessage({ message }: ErrorMessageProps) {
  return message && <p className={css.text}>{message}</p>;
}
