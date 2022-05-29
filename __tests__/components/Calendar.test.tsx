import Calendar, {CalendarProps} from '../../src/components/Calendar';
import Meal from '../../src/core/entities/Meal';
import {render, screen} from '@testing-library/react';

describe('Calendar component weekly view', () => {
  const weekMeals: Array<Array<Meal>> = new Array(7)
    .fill({title: '', category: []})
    .map(
      (_, i): Array<Meal> => [
        {
          title: `meal-${i}`,
          category: ['cat1'],
          thumbnail: 'http://test.thumbnail.com/',
          url: 'https://www.foo.bar/',
        },
      ],
    );

  const props: CalendarProps = {
    view: 'weekly',
    data: weekMeals,
  };

  let dom;

  beforeEach(() => {
    dom = render(<Calendar {...props} />);
  });

  it('should display 7 days', async () => {
    const days = dom.container.querySelectorAll('.weekly-view-day');
    expect(days).toHaveLength(7);
  });
});
