import Calendar from '../components/Calendar';
import styles from '../styles/pages/meal-planner.module.css';
import useMealPlanner from '../views/useMealPlanner';
import React from 'react';

export default function MealPlanner() {
  const {meals} = useMealPlanner();

  debugger;
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Meal Planner</h1>
      <Calendar view="weekly" data={meals} />
    </div>
  );
}
