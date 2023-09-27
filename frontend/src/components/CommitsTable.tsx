const CommitsTable = ({ commits }) => {
  return (
    <table className="border-collapse border border-gray-800 w-full">
      <thead>
        <tr>
          <th className="bg-gray-200 border border-gray-800 p-1 px-3">ID</th>
          <th className="bg-gray-200 border border-gray-800 p-1">Commits' name</th>
          <th className="bg-gray-200 border border-gray-800 p-1">Author</th>
          <th className="bg-gray-200 border border-gray-800 p-1">Commiter</th>
          <th className="bg-gray-200 border border-gray-800 p-1">Date</th>
        </tr>
      </thead>
      <tbody>
        {commits.map((commit) => (
            <tr key={commit.sha} className="border border-gray-800">
                <td className="border border-gray-800 p-2">{commit.sha}</td>
                <td className="border border-gray-800 p-2">{commit.commit.message}</td>
                <td className="border border-gray-800 p-2">{commit.author.login}</td>
                <td className="border border-gray-800 p-2">{commit.commit.author.name}</td>
                <td className="border border-gray-800 p-2">{commit.commit.author.date}</td>
            </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CommitsTable;
