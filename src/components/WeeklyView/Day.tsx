import Meal from '../../core/entities/Meal';
import styles from '../../styles/components/WeeklyView.module.css';
import RecipeCard from '../MealCard';

export type DayProps = {
  meals: Array<Meal>;
  day: number;
};

// day constants
const days = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

export default function Day({meals, day}: DayProps) {
  const className = [styles.header, 'weekly-view-day'].join(' ');
  debugger;
  return (
    <section>
      <h1 className={className}>{days[day]}</h1>
      <section>{meals.map(RecipeCard)}</section>
    </section>
  );
}
