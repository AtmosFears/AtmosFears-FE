import { type SensorData } from '@/types/models/sensors';

interface PointerPopupProps {
  sensorData: SensorData;
}

export default function PointerPopup({ sensorData }: PointerPopupProps) {
  return (
    <div className='text-center'>
      <h3 className='text-xl font-bold'>{sensorData.code}</h3>
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
          {sensorData.data.map(item => (
            // TODO - add id as key if id comes from API, or leave name if it is unique -
            // to be determined after we get data from API
            <tr key={item.name}>
              <td className='border px-4 py-2'>{item.name}</td>
              <td className='border px-4 py-2'>{item.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
