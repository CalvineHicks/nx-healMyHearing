import React from 'react';

import './schedule-widget.scss';
import {
  Link
} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
/* eslint-disable-next-line */
export interface ScheduleWidgetProps {}

export const ScheduleWidget = (props: ScheduleWidgetProps) => {
  return (
    <>
    <div className="scheduling-container">
      <Link to='/scheduling' className="schedule">
        <FontAwesomeIcon className="schedule-icon" icon={["far", "calendar-alt"]} size="10x" />
        <span className="schedule-text">Schedule with us</span>
      </Link>
    </div>
    </>
  );
};

export default ScheduleWidget;
