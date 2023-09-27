const CommitsTable = ({ commits }) => {
  return (
    <div className='flex justify-around'>
      <table className='border-collapse border border-gray-800 w-full'>
        <thead>
          <tr>
            <th className='hidden sm:table-cell bg-gray-200 border border-gray-800'>
              ID
            </th>
            <th className='bg-gray-200 border border-gray-800'>
              Commit's name
            </th>
            <th className='bg-gray-200 border border-gray-800'>Author</th>
            <th className='bg-gray-200 border border-gray-800'>Commiter</th>
            <th className='bg-gray-200 border border-gray-800'>Date</th>
          </tr>
        </thead>
        <tbody>
          {commits.map((commit) => (
            <tr key={commit.sha} className='border border-gray-800'>
              <td className='hidden sm:table-cell border border-gray-800 p-2'>
                {commit.sha}
              </td>
              <td className='border border-gray-800 p-2'>
                {commit.commit.message}
              </td>
              <td className='border border-gray-800 p-2'>
                {commit.author.login}
              </td>
              <td className='border border-gray-800 p-2'>
                {commit.commit.author.name}
              </td>
              <td className='border border-gray-800 p-2'>
                {commit.commit.author.date.split('T')[0]}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CommitsTable;
