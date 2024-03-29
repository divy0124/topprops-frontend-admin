import { DatePicker } from 'antd';
import dayjs from 'dayjs';
import PropTypes from 'prop-types';

import { CalenderIcon } from 'components/core/Icons';
import { MM_DD_YYYY } from 'utils/constants/labels';

import '../../less/datePicker.less';

function TPRangePicker({ className, dateRange, onChange, ...props }) {
  const { RangePicker: AntRangePicker } = DatePicker;

  return (
    <AntRangePicker
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
TPRangePicker.defaultProps = {
  className: '',
  dateRange: [],
  onChange: () => {},
};

TPRangePicker.propTypes = {
  className: PropTypes.string,
  dateRange: PropTypes.arrayOf(dayjs),
  onChange: PropTypes.func,
};

export default TPRangePicker;
