import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';
import Commit from '../interfaces/commit.interface';

@Injectable()
export class GithubService {
  constructor(private readonly configService: ConfigService) {}

  async getCommits(owner: string, repo: string): Promise<Commit[]> {
    const apiUrl = this.configService.get<string>('GITHUB_API_URL');
    const response = await axios.get(
      `${apiUrl}/repos/${owner}/${repo}/commits`,
    );

    return response.data;
  }
}
