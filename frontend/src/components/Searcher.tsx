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
      setShowTable(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit} className='mb-8'>
          <label
            htmlFor='username'
            className='block mb-2 text-sm font-bold text-gray-900 dark:text-white'
          >
            Username:
          </label>
          <input
            type='text'
            id='username'
            placeholder='username'
            value={owner}
            onChange={(e) => setOwner(e.target.value)}
            className='bg-gray-100 border border-black px-4 py-2 rounded-md'
          />
          <label
            htmlFor='username'
            className='block mb-2 text-sm font-bold text-gray-900 dark:text-white mt-5'
          >
            Repository:
          </label>
          <input
            type='text'
            placeholder='repo name'
            value={repo}
            onChange={(e) => setRepo(e.target.value)}
            className='bg-gray-100 border border-black px-4 py-2 rounded-md'
          />
          <button
            type='submit'
            className='bg-blue-800 px-5 py-2 rounded-md text-white ml-5'
          >
            Get info!
          </button>
        </form>
      </div>

      {showTable ? <CommitsTable commits={commits} /> : null}
    </>
  );
};

export default Searcher;
