interface PassedProps {
  summary: string;
  text: string;
  opened?: boolean;
}

const FaqItem = ({ summary, text, opened }: PassedProps) => {
  return (
    <details
      name="faq"
      {...(opened && { open: true })}>
      <summary>{summary}</summary>
      <p>{text}</p>
    </details>
  );
};

export default FaqItem;
