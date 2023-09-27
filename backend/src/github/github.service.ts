import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';

@Injectable()
export class GithubService {
  constructor(private readonly configService: ConfigService) {}

  async getCommits(owner: string, repo: string) {
    const apiUrl = this.configService.get<string>('GITHUB_API_URL');
    const response = await axios.get(
      `${apiUrl}/repos/${owner}/${repo}/commits`,
    );

    return response.data;
  }
}
