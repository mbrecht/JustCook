import RecipeCard from '../../src/components/RecipeCard';
import {render, screen} from '@testing-library/react';

const data = {
  thumbnail: 'http://www.test.com/pic',
  title: 'Chicken Nuggets',
  url: 'http://www.tastychickennuggets.com/',
};

describe('RecipeCard component', () => {
  beforeEach(() => {
    render(<RecipeCard {...data} />);
  });

  it('should display a thumbnail', () => {
    const img = screen.getByRole('img');
    screen.debug();
    expect(img.src).toContain(data.thumbnail);
  });

  it('should display a title', () => {
    const p = screen.getByRole('link', {name: data.title});
    expect(p).toBeDefined();
  });

  it('should contain a link', () => {
    const a = screen.getByRole('link');
    expect(a.href).toBe(data.url);
  });
});
