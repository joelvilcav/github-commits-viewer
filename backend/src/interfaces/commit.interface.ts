interface Commit {
  sha: string;
  node_id: string;
  commit: object;
  url: string;
  html_url: string;
  comments_url: string;
  author: object;
  commiter: object;
  parents: any[];
}

export default Commit;
