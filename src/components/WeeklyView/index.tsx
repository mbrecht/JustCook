import Recipe from '../../core/entities/Recipe';
import RecipeCard from '../RecipeCard';
import Day from './Day';

type WeeklyViewProps = {
  week: Array<Array<Recipe>>;
};

export default function WeeklyView({week}: WeeklyViewProps) {
  return (
    <section>
      {week.map((recipes, i) => (
        <Day recipes={recipes} day={i} key={JSON.stringify(recipes)} />
      ))}
    </section>
  );
}
