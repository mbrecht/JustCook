import WeeklyView from '../../src/components/WeeklyView';
import Meal from '../../src/core/entities/Meal';
import {RenderResult, render, screen} from '@testing-library/react';
import {ReactElement} from 'react';

const meals: Array<Array<Meal>> = new Array<Array<Meal>>(7).fill([
  {
    title: '',
    thumbnail: '',
    url: '',
    category: [],
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
    const titles = await dom.container.querySelectorAll('h1');
    expect(titles).toHaveLength(7);
  });

  it('should display a meal card for each day', async () => {
    const cards = dom.container.querySelectorAll('.meal-card');
    expect(cards).toHaveLength(7);
  });
});
