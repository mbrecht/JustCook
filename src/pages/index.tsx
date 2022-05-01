import Link from 'next/link';
import React from 'react';

export default function Home() {
  return (
    <div>
      <h1>Just Cook</h1>
      <Link href="/meal-planner">Meal Planner</Link>
    </div>
  );
}
