import RecipeCard from '../components/RecipeCard';
import Link from 'next/link';
import React from 'react';

const meals = new Array(7).fill({
  title: 'Chinese Dumpling Soup',
  thumbnail:
    'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2008/10/21/0/FNMChineseDumplingSoup_s3x4.jpg.rend.hgtvcom.826.620.suffix/1383173432945.jpeg',
  url: 'https://www.google.com/',
});

export default function Home() {
  return (
    <div style={{backgroundColor: '#ccc', minHeight: '100vh'}}>
      <h1>Just Cook</h1>
      <Link href="/meal-planner">Meal Planner</Link>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          columnGap: '32px',
        }}
      >
        {meals.map(RecipeCard)}
      </div>
    </div>
  );
}
