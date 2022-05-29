import Recipe from '../../core/entities/Recipe';
import RecipeCard from '../RecipeCard';

export type DayProps = {
  recipes: Recipe[];
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

export default function Day({recipes, day}: DayProps) {
  return (
    <section>
      <h1>{days[day]}</h1>
      <section>{recipes.map(RecipeCard)}</section>
    </section>
  );
}
