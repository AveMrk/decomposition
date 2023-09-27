/**
 * Выводит тег эфира с иконкой
 */
interface SectionEfirProps {
  children: React.ReactNode
}
export default function SectionItemEfir({ children }: SectionEfirProps) {
  return (
    <div className="section-weather">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="13"
        viewBox="0 0 12 13"
        fill="none"
      >
        <path
          d="M12 6.5L0.75 12.9952L0.750001 0.00480889L12 6.5Z"
          fill="#504F84"
        />
      </svg>
      {children}
    </div>
  );
}
