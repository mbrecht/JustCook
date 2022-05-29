import Meal from '../../core/entities/Meal';
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
  return (
    <section>
      <h1>{days[day]}</h1>
      <section>{meals.map(RecipeCard)}</section>
    </section>
  );
}
