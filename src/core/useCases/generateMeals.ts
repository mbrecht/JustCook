import Meal from '../entities/Meal';
import Template, {Day} from '../entities/Template';
import selectRandomEntry from '../utils/selectRandomEntry';

type Props = {
  meals: Array<Meal>;
  template: Template;
};

function selectCategory(day: Day) {
  return selectRandomEntry<string>(day);
}

function selectMeal(meals: Array<Meal>, category: string): Meal {
  // get meals in category
  const filteredMeals = meals.filter(meal => meal.category.includes(category));
  return selectRandomEntry<Meal>(filteredMeals);
}

/**
 * generates meals for every entry in template
 */
export default function generateMeals({meals, template}: Props): Meal[] {
  // each entry in template will decide a meal for that day
  return template.map(day => {
    // choose category
    const category = selectCategory(day);
    // get meal based on category
    const meal = selectMeal(meals, category);

    return meal;
  });
}
