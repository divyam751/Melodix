const simpleGit = require("simple-git");

const FOLDER_PATH = "./"; // Set the path to the Melodix folder
const COMMIT_DATE = "2023-09-25T12:26:00";

async function commitAndPush() {
  try {
    // Initialize the Git repository with the specified working directory
    const git = simpleGit({ baseDir: FOLDER_PATH });

    // Stage all changes in the folder
    await git.add(".");

    // Set the environment variables to control commit date
    const env = {
      GIT_AUTHOR_DATE: COMMIT_DATE,
      GIT_COMMITTER_DATE: COMMIT_DATE,
    };

    // Commit with the specified date
    await git.env(env).commit(`Melodix`);

    // Push to the remote repository
    await git.push();

    console.log("Changes committed and pushed to GitHub");
    console.log("Commit Date and Time:", COMMIT_DATE);
  } catch (err) {
    console.error("Error:", err);
  }
}

(async () => {
  await commitAndPush();
})();
