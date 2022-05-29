import Meal from '../../core/entities/Meal';
import styles from '../../styles/components/WeeklyView.module.css';
import Day from './Day';

type WeeklyViewProps = {
  week: Array<Array<Meal>>;
};

export default function WeeklyView({week}: WeeklyViewProps) {
  const className = [styles.container, 'weekly-view'].join(' ');

  return (
    <section className={className}>
      {week.map((meals, day) => (
        <Day meals={meals} day={day} key={day} />
      ))}
    </section>
  );
}
