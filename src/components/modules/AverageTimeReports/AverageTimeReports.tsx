/*eslint-disable*/
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

import { type AirQuality } from '@/components/modules/AverageTimeReports/types';
import data from '@/mocks/avg-data.json';

type FormValues = {
  dateFrom: string;
  dateTo: string;
};

const DATE_FORMAT = 'YYYY-MM-DD';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const StyledInput = styled.input`
  margin-bottom: 10px;
`;

const StyledButton = styled.button`
  margin-top: 20px;
  margin-bottom: 20px;
`;

const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin-top: 20px;
  width: 50%;
  margin: auto;
`;

const StyledListItem = styled.li`
  flex-basis: 50%;
  padding: 5px;
  border: 1px solid #000;
  text-align: center;
`;

const StyledHeader = styled.h1`
  text-align: center;
`;

function AverageTimeReports() {
  const { register, handleSubmit, formState } = useForm<FormValues>({
    defaultValues: {
      dateTo: moment().format(DATE_FORMAT),
      dateFrom: moment().format(DATE_FORMAT)
    }
  });

  const [avgData, setAvgData] = useState<AirQuality | null>(null);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const { errors } = formState;

  useEffect(() => {
    setAvgData(data);
  }, []);

  const onSubmit = (formData: FormValues): void => {
    // @ts-expect-error
    const { dateFrom, dateTo } = formData;
    // @TODO fetch from API and set to chartData
    setSubmitted(true);
  };

  return (
    <div>
      <StyledHeader>Average Time Reports</StyledHeader>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <p>Date from</p>
        <StyledInput type='date' {...register('dateFrom')} />
        {errors.dateFrom && <span>Start date is required</span>}
        <p>Date to</p>
        <StyledInput type='date' {...register('dateTo')} />
        {errors.dateTo && <span>End date is required</span>}
        <StyledButton type='submit'>Submit</StyledButton>
      </StyledForm>
      {avgData && submitted && (
        <StyledList>
          {Object.entries(avgData).map(([key, value]) => (
            <React.Fragment key={key}>
              <StyledListItem>{key}</StyledListItem>
              <StyledListItem>{value}</StyledListItem>
            </React.Fragment>
          ))}
        </StyledList>
      )}
    </div>
  );
}

export default AverageTimeReports;
