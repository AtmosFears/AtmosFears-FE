import { type SensorData } from 'src/models/SensorData';

interface PopupComponentProps {
  sensorData: SensorData;
}

function PopupComponent({ sensorData }: PopupComponentProps) {
  return (
    <div className='text-center'>
      <h3 className='text-xl font-bold'>{sensorData.name}</h3>
      <h4 className='text-left text-l font-bold'>
        {sensorData.date.toLocaleDateString()}{' '}
        {sensorData.date.toLocaleTimeString()}
      </h4>
      <table className='table-auto w-full mt-3'>
        <thead>
          <tr>
            <th className='px-4 py-2'>Type</th>
            <th className='px-4 py-2'>Value</th>
          </tr>
        </thead>
        <tbody>
          {sensorData.data.map((item, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <tr key={index}>
              <td className='border px-4 py-2'>{item.name}</td>
              <td className='border px-4 py-2'>{item.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PopupComponent;
