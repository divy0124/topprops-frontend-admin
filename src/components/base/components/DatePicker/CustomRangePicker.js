/* eslint-disable import/no-unresolved */
import { DatePicker } from 'antd';
import dayjs from 'dayjs';
import PropTypes from 'prop-types';

import { CalenderIcon } from 'components/core/Icons';
import { MM_DD_YYYY } from 'utils/constants/labels';

import '../../less/datePicker.less';

function CustomRangePicker({ className, dateRange, onChange, ...props }) {
  const { RangePicker } = DatePicker;

  return (
    <RangePicker
      allowClear={false}
      className={className}
      direction="down"
      format={MM_DD_YYYY}
      onChange={onChange}
      placeholder={['START DATE', 'END DATE']}
      suffixIcon={<CalenderIcon color="#D4D4D4" />}
      value={dateRange}
      {...props}
    />
  );
}
CustomRangePicker.defaultProps = {
  className: '',
  dateRange: [],
  onChange: () => {},
};

CustomRangePicker.propTypes = {
  className: PropTypes.string,
  dateRange: PropTypes.arrayOf(dayjs),
  onChange: PropTypes.func,
};

export default CustomRangePicker;