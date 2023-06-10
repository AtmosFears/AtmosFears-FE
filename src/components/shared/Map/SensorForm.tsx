import { format } from 'date-fns';
import { useForm } from 'react-hook-form';
import { styled } from 'styled-components';

type FormValues = {
  date: string;
  dateType: 'day' | 'month' | 'year';
  pollutionType: 'CO' | 'NO2' | 'PM10' | 'PM25' | 'O3' | 'SO2';
};

const DATE_FORMAT = 'yyyy-MM-dd';
const pollutionTypes = ['CO', 'NO2', 'PM10', 'PM25', 'O3', 'SO2'];

export function SensorForm() {
  const { register, formState } = useForm<FormValues>({
    defaultValues: {
      date: format(Date.now(), DATE_FORMAT),
      dateType: 'day',
      pollutionType: 'CO'
    }
  });

  const { errors } = formState;
  // const onSubmit: SubmitHandler<FormValues> = (data) => {

  // } TODO handle submit when endpoint will be ready to use

  return (
    <StyledSensorForm>
      <InputsContainer>
        <DatePickerForm>
          <label htmlFor='date' className='block text-gray-700 font-bold mb-2'>
            Start Date
            <input
              id='date'
              type='date'
              {...register('date')}
              className='form-input w-full'
            />
          </label>
          {errors.date && (
            <span className='text-red-500'>Start date is required</span>
          )}
        </DatePickerForm>

        <DateTypePicker>
          <label
            htmlFor='dateType'
            className='block text-gray-700 font-bold mb-2'>
            Date Type
            <select id='dateType' {...register('dateType')}>
              <option value='day'>day</option>
              <option value='month'>month</option>
              <option value='year'>year</option>
            </select>
          </label>
        </DateTypePicker>

        <PollutionTypePicker>
          <label
            htmlFor='pollutionType'
            className='block text-gray-700 font-bold mb-2'>
            Pollution Type
            <select id='pollutionType' {...register('pollutionType')}>
              {pollutionTypes.map(pollutionType => (
                <option value={pollutionType} key={pollutionType}>
                  {pollutionType}
                </option>
              ))}
            </select>
          </label>
        </PollutionTypePicker>
      </InputsContainer>

      <input type='submit' value='filter' />
    </StyledSensorForm>
  );
}

const StyledSensorForm = styled.form`
  width: 500px;
  height: 100px;
  position: absolute;
  z-index: 1000000;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const InputsContainer = styled.div`
  display: flex;
`;

const DatePickerForm = styled.div`
  flex: 1 1 0px;
`;

const DateTypePicker = styled.div`
  background: white;
  flex: 1 1 0px;
`;

const PollutionTypePicker = styled.div`
  background: white;
  flex: 1 1 0px;
`;
