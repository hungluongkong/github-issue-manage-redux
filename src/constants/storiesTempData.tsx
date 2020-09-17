/**
 * Template response json string from github.
 * This is a list of issues.
 * URL: https://api.github.com/repos/hungluong-asnet/demo-api/issues
 */
export const issueJson: string = `
{
  "url": "https://api.github.com/repos/hungluong-asnet/demo-api/issues/1",
  "repository_url": "https://api.github.com/repos/hungluong-asnet/demo-api",
  "labels_url": "https://api.github.com/repos/hungluong-asnet/demo-api/issues/1/labels{/name}",
  "comments_url": "https://api.github.com/repos/hungluong-asnet/demo-api/issues/1/comments",
  "events_url": "https://api.github.com/repos/hungluong-asnet/demo-api/issues/1/events",
  "html_url": "https://github.com/hungluong-asnet/demo-api/issues/1",
  "id": 653740906,
  "node_id": "MDU6SXNzdWU2NTM3NDA5MDY=",
  "number": 1,
  "title": "isssue no 1",
  "user": {
    "login": "hungluong-asnet",
    "id": 68043715,
    "node_id": "MDQ6VXNlcjY4MDQzNzE1",
    "avatar_url": "https://avatars1.githubusercontent.com/u/68043715?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/hungluong-asnet",
    "html_url": "https://github.com/hungluong-asnet",
    "followers_url": "https://api.github.com/users/hungluong-asnet/followers",
    "following_url": "https://api.github.com/users/hungluong-asnet/following{/other_user}",
    "gists_url": "https://api.github.com/users/hungluong-asnet/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/hungluong-asnet/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/hungluong-asnet/subscriptions",
    "organizations_url": "https://api.github.com/users/hungluong-asnet/orgs",
    "repos_url": "https://api.github.com/users/hungluong-asnet/repos",
    "events_url": "https://api.github.com/users/hungluong-asnet/events{/privacy}",
    "received_events_url": "https://api.github.com/users/hungluong-asnet/received_events",
    "type": "User",
    "site_admin": false
  },
  "labels": [

  ],
  "state": "open",
  "locked": false,
  "assignee": null,
  "assignees": [

  ],
  "milestone": null,
  "comments": 0,
  "created_at": "2020-07-09T03:48:36Z",
  "updated_at": "2020-07-09T03:48:36Z",
  "closed_at": null,
  "author_association": "OWNER",
  "active_lock_reason": null,
  "body": "Nothing inside issue"
}
`;

export const issueListJson: string = `
  [
    {
      "url": "https://api.github.com/repos/hungluong-asnet/demo-api/issues/2",
      "repository_url": "https://api.github.com/repos/hungluong-asnet/demo-api",
      "labels_url": "https://api.github.com/repos/hungluong-asnet/demo-api/issues/2/labels{/name}",
      "comments_url": "https://api.github.com/repos/hungluong-asnet/demo-api/issues/2/comments",
      "events_url": "https://api.github.com/repos/hungluong-asnet/demo-api/issues/2/events",
      "html_url": "https://github.com/hungluong-asnet/demo-api/issues/2",
      "id": 654622112,
      "node_id": "MDU6SXNzdWU2NTQ2MjIxMTI=",
      "number": 2,
      "title": "#practice #make #api",
      "user": {
        "login": "hungluong-asnet",
        "id": 68043715,
        "node_id": "MDQ6VXNlcjY4MDQzNzE1",
        "avatar_url": "https://avatars1.githubusercontent.com/u/68043715?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/hungluong-asnet",
        "html_url": "https://github.com/hungluong-asnet",
        "followers_url": "https://api.github.com/users/hungluong-asnet/followers",
        "following_url": "https://api.github.com/users/hungluong-asnet/following{/other_user}",
        "gists_url": "https://api.github.com/users/hungluong-asnet/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/hungluong-asnet/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/hungluong-asnet/subscriptions",
        "organizations_url": "https://api.github.com/users/hungluong-asnet/orgs",
        "repos_url": "https://api.github.com/users/hungluong-asnet/repos",
        "events_url": "https://api.github.com/users/hungluong-asnet/events{/privacy}",
        "received_events_url": "https://api.github.com/users/hungluong-asnet/received_events",
        "type": "User",
        "site_admin": false
      },
      "labels": [

      ],
      "state": "open",
      "locked": false,
      "assignee": null,
      "assignees": [

      ],
      "milestone": null,
      "comments": 0,
      "created_at": "2020-07-10T08:47:16Z",
      "updated_at": "2020-07-10T08:47:16Z",
      "closed_at": null,
      "author_association": "OWNER",
      "active_lock_reason": null,
      "body": "**Don't know why this issue is here. and why we need to create it?**"
    },
    ${issueJson}
  ]`;
