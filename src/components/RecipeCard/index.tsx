import Recipe from '../../core/entities/Recipe';
import styles from '../../styles/components/RecipeCard.module.css';

export default function RecipeCard({thumbnail, title, url}: Recipe) {
  return (
    <div className={styles.container}>
      <a href={url}>
        <p className={styles.title}>{title}</p>
        <img src={thumbnail} className={styles.thumbnail} />
      </a>
    </div>
  );
}
