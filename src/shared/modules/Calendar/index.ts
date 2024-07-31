import {NativeModules} from 'react-native';

import {ICalendar} from './types';

const {CalendarModule} = NativeModules;

export default CalendarModule as ICalendar;
