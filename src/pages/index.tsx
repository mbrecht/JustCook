import RecipeCard from '../components/RecipeCard';
import Link from 'next/link';
import React from 'react';

export default function Home() {
  return (
    <div>
      <h1>Just Cook</h1>
      <Link href="/meal-planner">Meal Planner</Link>
      <RecipeCard
        title="test"
        thumbnail="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2008/10/21/0/FNMChineseDumplingSoup_s3x4.jpg.rend.hgtvcom.826.620.suffix/1383173432945.jpeg"
        url="https://www.google.com/"
      />
    </div>
  );
}
