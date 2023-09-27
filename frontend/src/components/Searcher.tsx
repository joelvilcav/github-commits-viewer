import { useState } from 'react';
import axios from 'axios';

const Searcher = () => {
  const [owner, setOwner] = useState<string>('joelvilcav');
  const [repo, setRepo] = useState<string>('github-commits-viewer');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `http://localhost:3000/github/commits/${owner}/${repo}`
      );
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Owner'
          value={owner}
          onChange={(e) => setOwner(e.target.value)}
        />
        <input
          type='text'
          placeholder='Repo'
          value={repo}
          onChange={(e) => setRepo(e.target.value)}
        />
        <button type='submit'>Get Commits</button>
      </form>
    </div>
  );
};

export default Searcher;
