import Meal from '../../core/entities/Meal';
import styles from '../../styles/components/MealCard.module.css';

export default function MealCard({thumbnail, title, url}: Meal) {
  const classes = [styles.container, 'meal-card'].join(' ');

  return (
    <div className={classes}>
      <a href={url}>
        <p className={styles.title}>{title}</p>
        <img src={thumbnail} className={styles.thumbnail} />
      </a>
    </div>
  );
}
