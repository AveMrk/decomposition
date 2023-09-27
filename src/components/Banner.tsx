/**
 * Выводит баннер, принимает на вход ссылку и изображение
 */
interface BannerProps {
  url: string;
  image: string;
}
export default function Banner({ image, url }: BannerProps) {
  return (
    <a href={url} className="banner">
      <img src={image} alt="banner" />
    </a>
  );
}
