import s from "./style.module.css";
import { SMALL_IMG_COVER_BASE_URL } from "../../config";

export function TVShowListItem({tvShow}) {
  return (
    <div className={s.container}>
      <img
        alt={tvShow.name}
        src={SMALL_IMG_COVER_BASE_URL + tvShow.backdrop_path}
        className={s.image}
      />
      <div className={s.title}>
        {tvShow.name}
      </div>
    </div>
  );
}
