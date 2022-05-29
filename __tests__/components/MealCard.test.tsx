import MealCard from '../../src/components/MealCard';
import {render, screen} from '@testing-library/react';

const data = {
  thumbnail: 'http://www.test.com/pic',
  title: 'Chicken Nuggets',
  url: 'http://www.tastychickennuggets.com/',
  category: ['test'],
};

describe('MealCard component', () => {
  let dom;

  beforeEach(() => {
    dom = render(<MealCard {...data} />);
  });

  it('should display a thumbnail', () => {
    const img = screen.getByRole('img');
    expect(img.src).toContain(data.thumbnail);
  });

  it('should display a title', () => {
    const p = dom.container.querySelector('.title');
    expect(p).toBeDefined();
  });

  it('should contain a link', () => {
    const a = screen.getByRole('link');
    expect(a.href).toBe(data.url);
  });
});
