import Meal from '../../core/entities/Meal';

export type CalendarProps = {
  view: 'daily' | 'weekly' | 'monthly';
  data: [Meal];
};

export default function Calendar({view}: CalendarProps) {
  return <div></div>;
}
