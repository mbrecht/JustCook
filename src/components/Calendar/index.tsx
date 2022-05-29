import Meal from '../../core/entities/Meal';
import WeeklyView from '../WeeklyView';

export type CalendarProps = {
  view: 'daily' | 'weekly' | 'monthly';
  data: Array<Array<Meal>>;
};

export default function Calendar({view, data}: CalendarProps) {
  const views = {
    weekly: <WeeklyView week={data} />,
  };

  return <div>{views[view]}</div>;
}
