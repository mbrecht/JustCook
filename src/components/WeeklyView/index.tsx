import Meal from '../../core/entities/Meal';
import RecipeCard from '../MealCard';
import Day from './Day';

type WeeklyViewProps = {
  week: Array<Array<Meal>>;
};

export default function WeeklyView({week}: WeeklyViewProps) {
  return (
    <section>
      {week.map((meals, i) => (
        <Day meals={meals} day={i} key={JSON.stringify(meals)} />
      ))}
    </section>
  );
}
