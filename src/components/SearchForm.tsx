interface item {
  title: string,
  url: string
}
interface SearchFormProps {
  items: item[],
  label: string
}
export default function SearchForm({ items, label }: SearchFormProps) {
  const logo =
    "https://upload.wikimedia.org/wikipedia/commons/6/65/Yandex_official_logo.svg";

  return (
    <div className="search-form">
      <ul className="form-tags">
        {items.map((item) => (
          <li>
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
      </ul>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <form>
        <input />
        <button type="submit">Найти</button>
        <label>
          Найдётся всё, например <span className="grey">{label}</span>
        </label>
      </form>
    </div>
  );
}
