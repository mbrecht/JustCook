import styles from '../../styles/components/RecipeCard.module.css';

type Props = {
  thumbnail: string;
  title: string;
  url: string;
};

export default function RecipeCard({thumbnail, title, url}: Props) {
  return (
    <div className={styles.container}>
      <a href={url}>
        <p className={styles.title}>{title}</p>
        <img src={thumbnail} className={styles.thumbnail} />
      </a>
    </div>
  );
}
