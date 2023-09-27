import { useState } from 'react';
import axios from 'axios';
import CommitsTable from './CommitsTable';
import Commit from '../interfaces/commit.interface';

const Searcher = () => {
  const [owner, setOwner] = useState<string>('joelvilcav');
  const [repo, setRepo] = useState<string>('github-commits-viewer');
  const [showTable, setShowTable] = useState<boolean>(false);
  const [commits, setCommits] = useState<Commit[]>([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.get<Commit[]>(
        `${import.meta.env.VITE_API_URL}/github/commits/${owner}/${repo}`
      );
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
            className='block mb-2 text-md font-bold text-gray-900 dark:text-white'
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
            htmlFor='repository'
            className='block mb-2 text-md font-bold text-gray-900 dark:text-white mt-5'
          >
            Repository:
          </label>
          <input
            type='text'
            id='repository'
            placeholder='repo name'
            value={repo}
            onChange={(e) => setRepo(e.target.value)}
            className='bg-gray-100 border border-black px-4 py-2 rounded-md mt-0'
          />
          <button
            type='submit'
            className='bg-blue-800 px-5 py-2 rounded-md text-white ml-0 min-[400px]:ml-5'
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
