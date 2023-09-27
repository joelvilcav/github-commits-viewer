interface Commit {
  sha: string;
  node_id: string;
  commit: {
    message: string;
    author: {
      name: string;
      date: Date;
    };
  };
  url: string;
  html_url: string;
  comments_url: string;
  author: {
    login: string;
  };
  commiter: {
    name: string;
  };
  parents: any[];
}

export default Commit;
