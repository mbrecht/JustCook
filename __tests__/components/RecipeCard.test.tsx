import RecipeCard from '../../src/components/RecipeCard';
import {ReactWrapper, mount} from 'enzyme';

const data = {
  thumbnail: 'http://www.test.com/pic',
  title: 'Chicken Nuggets',
  url: 'http://www.tastychickennuggets.com/',
};

describe('RecipeCard component', () => {
  let wrapper: ReactWrapper;

  beforeEach(() => {
    wrapper = mount(<RecipeCard {...data} />);
  });

  it('should display a thumbnail', () => {
    expect(wrapper.find('img').props().src).toBe(data.thumbnail);
  });

  it('should display a title', () => {
    expect(wrapper.find('p').text()).toBe(data.title);
  });

  it('should contain a link', () => {
    expect(wrapper.find('a').props().href).toBe(data.url);
  });
});
