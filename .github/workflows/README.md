# Github action

## Description of Deploy - Workflow Overview
The workflow is named "Deploy" and is triggered by a push to the master branch. It performs the following tasks:

- Checks out the code.
- Sets up the Node.js environment.
- Installs dependencies.
- Bumps the version and creates a changelog.
- Builds the project.
- Pushes changes and tags.
- Creates a GitHub release.
- Updates a release branch with the dist content.
- Uploads release assets.

### Detailed Breakdown
- Checkout code: This step checks out the repository's code.
- Set up Node.js: This step sets up the Node.js environment with the specified version.
- Install dependencies: This step installs the project dependencies.
- Bump version and create changelog: This step configures Git with a user name and email, runs npm run release to bump the version and create the - changelog using standard-version, and sets the RELEASE_TAG environment variable.
- Build project: This step builds the project for production, generating the dist folder.
- Push changes and tags:This step adds the dist folder to the Git index, commits the changes with a message "Add dist folder and bump version", and pushes the changes and tags to the master branch.
- Create GitHub Release: This step uses the actions/create-release@v1 action to create a new GitHub release. The tag_name and release_name are set to the latest tag created by standard-version (${{ env.RELEASE_TAG }}).
- Update release-branch with dist content: This step configures Git with a user name and email, and uses git subtree push to push the contents of the dist folder to the release-branch on the remote repository.
- Upload release assets: This step zips the contents of the dist folder and uses the gh CLI to upload the dist.zip file as a release asset to the GitHub release.

