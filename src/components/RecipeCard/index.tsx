import Recipe from '../../core/entities/Recipe';
import styles from '../../styles/components/RecipeCard.module.css';

export default function RecipeCard({thumbnail, title, url}: Recipe) {
  const classes = [styles.container, 'recipe-card'].join(' ');

  return (
    <div className={classes}>
      <a href={url}>
        <p className={styles.title}>{title}</p>
        <img src={thumbnail} className={styles.thumbnail} />
      </a>
    </div>
  );
}
