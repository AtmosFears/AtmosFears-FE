import { type SensorData } from '@/types/sensors';

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
          {sensorData.data.map(({ name, value }) => (
            <tr key={name}>
              <td className='border px-4 py-2'>{name}</td>
              <td className='border px-4 py-2'>{value > 0 ? value : '-'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
