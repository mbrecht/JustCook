import {useEffect, useState} from 'react';

const defaultMeals = new Array(7).fill([
  {
    title: '',
    thumbnail: '',
    url: '',
    category: [],
  },
]);

export default function useMealPlanner() {
  const [meals, setMeals] = useState(defaultMeals);

  useEffect(() => {
    fetch('/api/generate-meals')
      .then(res => res.json())
      .then(data => {
        setMeals(data.map(day => [day]));
      });
  }, []);

  return {
    meals,
  };
}
