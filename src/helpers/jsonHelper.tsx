/* eslint-disable camelcase */
import { Issue } from '../types';

export interface RawIssue {
  id: number;
  number: number;
  title: string;
  body: string;
  locked: boolean;
  url: string;
  created_at: string;
  updated_at: string;
}

export const RawToIssue = (raws: RawIssue[]): Issue[] =>
  raws
    .map((raw: RawIssue) => {
      const createdAt = new Date(raw.created_at);
      const updatedAt = new Date(raw.updated_at);

      // Destructor - remove unused properties
      const { id, number, url, title, body, locked } = raw;

      // Create Item
      return {
        id,
        number,
        title,
        body,
        locked,
        url,
        createdAt,
        updatedAt,
      } as Issue;
    })
    .sort((issue: Issue, nextIssue: Issue) => issue.number - nextIssue.number);

/**
 * Convert to list of issue from json
 * @param json response from github api
 */
export const JsonToIssueList = (json: string): Issue[] => {
  const raws: RawIssue[] = JSON.parse(json);

  return RawToIssue(raws);
};
