import { COLORS } from '@/constants/index';

export default function Legend() {
  const pollutionLevels: string[] = [
    'Bardzo dobra',
    'Dobra',
    'Umiarkowana',
    'Dostateczna',
    'Zła',
    'Bardzo zła',
    'Niebezpieczna'
  ];
  const legendData: Array<{
    id: number;
    color: string | undefined;
    description: string | undefined;
  }> = [];

  for (let i = 0; i < pollutionLevels.length; i += 1) {
    const levelData = {
      id: i,
      color: COLORS.pollutionScale[i],
      description: pollutionLevels[i]
    };
    legendData.push(levelData);
  }

  return (
    <div className='absolute top-40 right-4 bg-black bg-opacity-50 rounded z-10'>
      <table className='w-40 border-collapse'>
        <thead className='text-white font-bold'>
          <tr>
            <td colSpan={2} className='text-center'>
              Jakość powietrza
            </td>
          </tr>
        </thead>
        <tbody>
          {legendData.map(item => (
            <tr key={item.id}>
              <td>
                <div
                  className='w-4 h-4 mr-2 inline-block'
                  style={{ backgroundColor: item.color }}
                />
              </td>
              <span className='-webkit-text-stroke-2 text-white outline-4 outline-black'>
                <td>{item.description}</td>
              </span>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
