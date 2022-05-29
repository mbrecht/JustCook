import WeeklyView from '../../src/components/WeeklyView';
import Meal from '../../src/core/entities/Meal';
import Recipe from '../../src/core/entities/Recipe';
import {RenderResult, render, screen} from '@testing-library/react';
import {ReactElement} from 'react';

const meals: Array<Array<Recipe>> = new Array<Recipe[]>(7).fill([
  {
    title: '',
    thumbnail: '',
    url: '',
  },
]);

describe('weekly view', () => {
  let dom: RenderResult<
    typeof import('@testing-library/dom/types/queries'),
    HTMLElement,
    HTMLElement
  >;

  beforeEach(() => {
    dom = render(<WeeklyView week={meals} />);
  });

  it('should display a title for each day', async () => {
    screen.debug();
    const titles = await dom.container.querySelectorAll('h1');
    expect(titles).toHaveLength(7);
  });

  it('should display a recipe card for each day', async () => {
    const cards = dom.container.querySelectorAll('.recipe-card');
    expect(cards).toHaveLength(7);
  });
});
