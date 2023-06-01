export default function Legend() {
  const legendData = [
    { id: 0, color: 'red', description: 'High Risk' },
    { id: 1, color: 'yellow', description: 'Medium Risk' },
    { id: 2, color: 'green', description: 'Low Risk' }
  ];

  return (
    <div className='absolute top-40 right-4 bg-black bg-opacity-25 rounded z-10'>
      <table className='w-40 border-collapse'>
        <thead>
          <tr>
            <th>Color</th>
            <th>Description</th>
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
              <span className='text-stroke-2 text-white'>
                <td>{item.description}</td>
              </span>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
