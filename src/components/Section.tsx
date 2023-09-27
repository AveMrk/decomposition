/**
 * Выводит секцию тегов
 */
interface SectionProps {
  title: string,
  isActive: boolean,
  children: React.ReactNode[],
  type: string
}
export default function Section({ title, isActive, children }: SectionProps) {
  return (
    <div className={"section" + (isActive ? " section-active" : "")}>
      <h5>{title}</h5>
      <ul className="section-content">{children}</ul>
    </div>
  );
}
