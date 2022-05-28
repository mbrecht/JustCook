import Calendar, {CalendarProps} from '../../src/components/Calendar';
import Meal from '../../src/core/entities/Meal';
import {render, screen} from '@testing-library/react';

describe('Calendar component weekly view', async () => {
  const weekMeals: [Meal] = new Array(7).fill({title: '', category: []}).map(
    (_, i): Meal => ({
      title: `meal-${i}`,
      category: ['cat1'],
    }),
  );

  const props: CalendarProps = {
    view: 'weekly',
    data: weekMeals,
  };

  beforeEach(() => {
    render(<Calendar {...props} />);
  });

  it('should display 7 days', () => {
    const days = await screen.findAllByRole('section');
    expect(days).toHaveLength(7);
  });
});
