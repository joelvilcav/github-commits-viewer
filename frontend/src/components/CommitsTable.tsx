const CommitsTable = ({ commits }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Commit's name</th>
          <th>Author</th>
          <th>Commiter</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {commits.map((commit) => (
            <tr key={commit.sha}>
                <td>{commit.sha}</td>
                <td>{commit.commit.message}</td>
                <td>{commit.author.login}</td>
                <td>{commit.commit.author.name}</td>
                <td>{commit.commit.author.date}</td>
            </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CommitsTable;
