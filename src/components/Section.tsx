import "../styles/main.scss";

type SectionProps = {
  text: string;
};

export const Section = ({ text }: SectionProps) => {
  return (
    <section className="section">
      <p>{text}</p>
    </section>
  );
};
