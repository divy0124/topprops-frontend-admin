import { InfoCircleOutlined } from '@ant-design/icons';
import { Col, Divider, Form, Input, Row, Tooltip } from 'antd';
import cx from 'classnames';
import dayjs from 'dayjs';
import { useState } from 'react';

import Button from 'components/base/components/Button';
import DatePicker from 'components/base/components/DatePicker';
import { BackArrowIcon } from 'components/core/Icons';

import emptySelection from '../../../assets/images/empty-selection.svg';

import '../../../assets/styles/touchdown.less';

const weekDays = [
  {
    date: '17-04-2023',
    day: 'MON',
    status: 'PENDING',
  },
  {
    date: '18-04-2023',
    day: 'TUE',
    status: 'PENDING',
  },
  {
    date: '19-04-2023',
    day: 'WED',
    status: 'PENDING',
  },
  {
    date: '20-04-2023',
    day: 'THU',
    status: 'PENDING',
  },
  {
    date: '21-04-2023',
    day: 'FRI',
    status: 'PENDING',
  },
  {
    date: '22-04-2023',
    day: 'SAT',
    status: 'PENDING',
  },
  {
    date: '23-04-2023',
    day: 'SUN',
    status: 'PENDING',
  },
];

const weeklyMatrics = [
  {
    date: '04-17-2023',
    weeklyReserve: 100,
    topPropVig: 10,
  },
  {
    date: '04-18-2023',
    weeklyReserve: 100,
    topPropVig: 10,
  },
  {
    date: '04-18-2023',
    weeklyReserve: 100,
    topPropVig: 10,
  },
  {
    date: '04-20-2023',
    weeklyReserve: 100,
    topPropVig: 10,
  },
  {
    date: '04-21-2023',
    weeklyReserve: 100,
    topPropVig: 10,
  },
  {
    date: '04-22-2023',
    weeklyReserve: 100,
    topPropVig: 10,
  },
  {
    date: '04-23-2023',
    weeklyReserve: 100,
    topPropVig: 10,
  },
];
const currentDate = dayjs();
function Touchdown() {
  const [form] = Form.useForm();
  const [dateRange, setDateRange] = useState([]);
  const [activeBox, setActiveBox] = useState(0);
  const [selectedDate, setSelectedDate] = useState(currentDate);
  const [constant, setConstant] = useState({
    entryFee: 0,
  });

  const handleDateChange = (date) => {
    const monday = date.startOf('week').format('YYYY-MM-DD');
    const sunday = date.endOf('week').format('YYYY-MM-DD');
    const selectedWeek = [monday, sunday];
    setDateRange([...selectedWeek]);
    setSelectedDate(date);
  };

  const handleConstant = (name, value) => {
    setConstant({ ...constant, [name]: parseFloat(value) });
  };
  const handleTouchdownByDate = (date) => {
    // Call the api
    console.log('DATE :: ', date);
    console.log('DATE RAN :: ', dateRange);
  };
  return (
    <div className="container">
      <Row
        className="text-medium font-alegreya mb-20 pointer back-arrow"
        onClick={() => console.log('Back button clicking....')}
      >
        <BackArrowIcon /> &nbsp; BACK
      </Row>

      <Row className="week-selection">
        <Form
          className={cx(
            dateRange.length === 0 ? 'before-selection' : 'after-selection',
          )}
          form={form}
          layout="vertical"
        >
          <Form.Item
            // className="before-date-picker"
            colon={false}
            label="Select week"
            name="date-selection"
          >
            <DatePicker
              dateRange={dateRange}
              iconColor={dateRange.length === 0 ? '#d4d4d4' : '#B69056'}
              onChange={handleDateChange}
              selectedDate={selectedDate}
            />
          </Form.Item>
          <Form.Item
            className="entry-fee border-primary-100"
            colon={false}
            label="Entry fee"
            name="entryFee"
            onChange={(e) => handleConstant('entryFee', e.target.value)}
          >
            <Input prefix="$" />
          </Form.Item>
          <Form.Item className="save" colon={false} label="">
            <Button
              buttonText="SAVE"
              className="fw-500 fs-16"
              disabled={dateRange.length === 0}
              onClick={() => {}}
              style={{ padding: '8px 50px' }}
              variant="btn-primary"
            />
          </Form.Item>
        </Form>
      </Row>

      {dateRange.length === 0 ? (
        <Row className="empty-date font-alegreya mb-20 ">
          {' '}
          <Row className="empty-date font-alegreya mb-20 ">
            <div>
              <img alt="Loading..." src={emptySelection} />
              <span>Please select week to proceed further </span>
            </div>
          </Row>
        </Row>
      ) : (
        <div className="box">
          <div className="touchdown">
            <p>Select Day</p>
            <Row className="row-1">
              {weekDays.map(({ date, day, status }, index) => (
                <div role="article">
                  <div
                    key={`${index + 1}`}
                    className={cx(
                      `box${index + 1}`,
                      activeBox === index ? 'bold-border' : 'normal-border',
                    )}
                    onClick={() => {
                      setActiveBox(index);
                      handleTouchdownByDate(date);
                    }}
                    role="presentation"
                  >
                    <p className="datetime">
                      <span id="date">
                        {dayjs(date, 'DD-MM-YYYY').format('DD')}
                      </span>{' '}
                      <span id="day">{day}</span>
                    </p>
                    <p id="status">{status}</p>
                  </div>
                </div>
              ))}
            </Row>
            <Row className="row-2">
              <p>Entrants</p>
              <Input placeholder="Enter entrants" />
            </Row>
            <Row className="row-3">
              <div className="daily-matrix">
                <p>Daily Metrics</p>
                <div className="box-daily disabled">
                  <Form form={form} layout="vertical">
                    <Row>
                      <Form.Item
                        className="col-1 disabled"
                        colon={false}
                        label={
                          <>
                            Prize pool
                            <Tooltip
                              color="#fff"
                              placement="bottom"
                              style={{ width: '1500px' }}
                              title={
                                <span
                                  style={{
                                    color: '#212121',
                                    fontFamily: 'Calluna Sans',
                                    fontSize: '14px',
                                    fontWeight: '400px',
                                    lineHeight: '22px',
                                  }}
                                >
                                  Formula to count prize pool: <br /> ( Entry
                                  fee * Entrants ) * 0.9
                                </span>
                              }
                              z-zIndex="1"
                            >
                              <InfoCircleOutlined />
                            </Tooltip>
                          </>
                        }
                        name="prizePool"
                      >
                        <Input disabled prefix="-" />
                      </Form.Item>
                      <Form.Item
                        className="col-2"
                        colon={false}
                        label={
                          <>
                            7-for-7
                            <Tooltip
                              color="#fff"
                              placement="bottom"
                              style={{ width: '1500px' }}
                              title={
                                <span
                                  style={{
                                    color: '#212121',
                                    fontFamily: 'Calluna Sans',
                                    fontSize: '14px',
                                    fontWeight: '400px',
                                    lineHeight: '22px',
                                  }}
                                >
                                  Formula to count 7-for-7:
                                  <br />( Prize pool - Weekly Reserve <br />-
                                  6-for-7 Reserve )
                                </span>
                              }
                              z-zIndex="1"
                            >
                              <InfoCircleOutlined />
                            </Tooltip>
                          </>
                        }
                        name="sevenForSeven"
                      >
                        <Input disabled prefix="-" />
                      </Form.Item>
                    </Row>

                    <Row>
                      <Form.Item
                        className="col-1"
                        colon={false}
                        label={
                          <>
                            6-for-7{' '}
                            <Tooltip
                              color="#fff"
                              placement="bottom"
                              style={{ width: '1500px' }}
                              title={
                                <span
                                  style={{
                                    color: '#212121',
                                    fontFamily: 'Calluna Sans',
                                    fontSize: '14px',
                                    fontWeight: '400px',
                                    lineHeight: '22px',
                                  }}
                                >
                                  Formula to calculate 6-For-7: <br /> Round(
                                  (3.5 * Entry Fee) * X 6-For-7, 1 )
                                </span>
                              }
                              z-zIndex="1"
                            >
                              <InfoCircleOutlined />
                            </Tooltip>
                          </>
                        }
                        name="sixForSeven"
                      >
                        <Input disabled prefix="-" />
                      </Form.Item>
                      <Form.Item
                        className="col-2"
                        colon={false}
                        label={
                          <>
                            Weekly Reserve
                            <Tooltip
                              color="#fff"
                              placement="bottom"
                              style={{ width: '1500px' }}
                              title={
                                <span
                                  style={{
                                    color: '#212121',
                                    fontFamily: 'Calluna Sans',
                                    fontSize: '14px',
                                    fontWeight: '400px',
                                    lineHeight: '22px',
                                  }}
                                >
                                  Formula to calculate weekly reserve: <br />(
                                  20 % Prize Pool )
                                </span>
                              }
                              z-zIndex="1"
                            >
                              <InfoCircleOutlined />
                            </Tooltip>
                          </>
                        }
                        name="weeklyReserve"
                      >
                        <Input disabled prefix="-" />
                      </Form.Item>
                    </Row>
                    <Form.Item
                      className="col-1"
                      colon={false}
                      label={
                        <>
                          TopProp vig
                          <Tooltip
                            color="#fff"
                            placement="bottom"
                            style={{ width: '1500px' }}
                            title={
                              <span
                                style={{
                                  color: '#212121',
                                  fontFamily: 'Calluna Sans',
                                  fontSize: '14px',
                                  fontWeight: '400px',
                                  lineHeight: '22px',
                                }}
                              >
                                Formula to calculate topprop vig: <br /> (
                                Entrants - Entry Fee ) - Prize Pool
                              </span>
                            }
                            z-zIndex="1"
                          >
                            <InfoCircleOutlined />
                          </Tooltip>
                        </>
                      }
                      name="toppropVig"
                    >
                      <Input disabled prefix="-" />
                    </Form.Item>
                    <Row />
                  </Form>
                </div>
              </div>
              <div className="weekly-matrix">
                <p>Weekly Metrics</p>
                <div className="box-weekly">
                  <div className="box-weekly-container">
                    <Row className="week-row-1">
                      <Col>
                        <Row>Days</Row>
                        {weeklyMatrics.map(({ date }, index) => (
                          <Row key={`${index + 1}`} className="common">
                            {date}
                          </Row>
                        ))}
                      </Col>
                      <Col className="col-2">
                        <Row>Weekly Reserve</Row>
                        {weeklyMatrics.map(({ weeklyReserve }, index) => (
                          <Row key={`${index + 1}`} className="common">
                            ${weeklyReserve}
                          </Row>
                        ))}
                      </Col>
                      <Col className="col-3">
                        <Row>TopProp Vig</Row>
                        {weeklyMatrics.map(({ topPropVig }, index) => (
                          <Row key={`${index + 1}`} className="common">
                            ${topPropVig}
                          </Row>
                        ))}
                      </Col>
                    </Row>

                    <Row className="week-row-2">
                      <Divider />
                      <div className="total">
                        <Col className="days">Total</Col>
                        <Col className="wr">$122</Col>
                        <Col className="vig">$1222</Col>
                      </div>
                    </Row>
                  </div>
                </div>
              </div>
            </Row>
          </div>
        </div>
      )}
    </div>
  );
}

export default Touchdown;
