import Searcher from './components/Searcher';

function App() {
  return (
    <div className='flex flex-col sm:flex-row min-h-screen'>
      <div className='sm:w-1/4 bg-blue-800 px-5 py-10'>
        <h2 className='text-4xl font-black text-center text-white'>
          GitHub Commits Viewer
        </h2>
        <p className='text-lg text-white mt-10'>
          By default, there is written{' '}
          <span className='font-bold'>'joelvilcav'</span> as a username and 
          <span className='font-bold'> 'github-commits-viewer'</span> as a
          repository but you can choose any username and public repository to get its
          information.
        </p>
      </div>
      <div className='sm:w-3/4 p-10 h-screen overflow-y-scroll'>
        <Searcher />
      </div>
    </div>
  );
}

export default App;
