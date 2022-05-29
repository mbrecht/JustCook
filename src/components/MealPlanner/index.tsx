import Meal from '../../core/entities/Meal';
import WeeklyView from '../WeeklyView';
import React, {useEffect, useState} from 'react';

export default function MealPlanner() {
  const [meals, setMeals] = useState([[]]);

  useEffect(() => {
    fetch('/api/generate-meals')
      .then(res => res.json())
      .then(data => {
        setMeals(
          data.map(({title}): Array<Meal> => {
            return [
              {
                category: [],
                title,
                thumbnail:
                  'https://images.squarespace-cdn.com/content/v1/5eb2f5532d212a0e2b3f2102/1600972148147-KKI2J85MHO7WLFD8YOF9/Per+Location_Pizza+Slice+Cheese+Pull.jpg?format=1500w',
                url: '/',
              },
            ];
          }),
        );
      });
  }, []);

  return <div>{meals.length && <WeeklyView week={meals} />}</div>;
}
