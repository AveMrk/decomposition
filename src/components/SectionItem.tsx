/**
 *  Выводит тег секции
 */
import React from "react";
export interface SectionItemProps {
  item: {
    itemTitle: string,
    icon?:  string,
    url: string
  }
}
export default function SectionItem({item}: SectionItemProps) {
  return (
    <li className="section-item">
      {item.icon && <img src={item.icon} alt="icon"></img>}
      <a href={item.url}>{item.itemTitle}</a>
    </li>
  );
}
