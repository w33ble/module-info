import gitRepoInfo from 'git-repo-info';

export default function gitInfo(rootPath) {
  const info = gitRepoInfo(rootPath);

  // add the commit param so deep references don't throw (ie. info.git.commit.sha)
  if (info.sha == null) return { commit: {} };

  return {
    branch: info.branch,
    tag: info.tag,
    commit: {
      sha: info.sha,
      message: info.commitMessage,
      author: info.author,
      date: info.authorDate,
    },
  };
}
