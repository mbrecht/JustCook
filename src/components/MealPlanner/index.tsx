import mocks from '../../api/generate-meals/__mocks__.json';
import Meal from '../../core/entities/Meal';
import generateMeals from '../../core/useCases/generateMeals';
import Calendar from '../Calendar';
import React, {useEffect, useState} from 'react';

export default function MealPlanner() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/api/generate-meals')
      .then(res => res.json())
      .then(data => {
        setData(data.map(meal => [meal]));
      });
  }, []);

  return <div>{data && <Calendar view="weekly" data={data} />}</div>;
}
