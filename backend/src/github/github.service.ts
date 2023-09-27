import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class GithubService {
  private readonly apiUrl = 'https://api.github.com';

  async getCommits(owner: string, repo: string) {
    const response = await axios.get(
      `${this.apiUrl}/repos/${owner}/${repo}/commits`,
    );

    return response.data;
  }
}
