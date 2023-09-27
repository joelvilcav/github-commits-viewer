import { useState } from 'react';
import axios from 'axios';
import CommitsTable from './CommitsTable';

const Searcher = () => {
  const [owner, setOwner] = useState<string>('joelvilcav');
  const [repo, setRepo] = useState<string>('github-commits-viewer');
  const [showTable, setShowTable] = useState<boolean>(false);
  const [commits, setCommits] = useState<Array<unknown>>([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.get<Array<unknown>>(
        `http://localhost:3000/github/commits/${owner}/${repo}`
      );
      console.log(response.data);
      setCommits(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const toggleTable = () => {
    setShowTable(!showTable);
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            placeholder='username'
            value={owner}
            onChange={(e) => setOwner(e.target.value)}
          />
          <input
            type='text'
            placeholder='repo name'
            value={repo}
            onChange={(e) => setRepo(e.target.value)}
          />
          <button type='submit' onClick={toggleTable}>
            Get Commits
          </button>
        </form>
      </div>

      {showTable ? <CommitsTable commits={commits} /> : null}
    </>
  );
};

export default Searcher;
