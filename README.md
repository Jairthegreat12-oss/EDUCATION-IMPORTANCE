# My Web Hub

A dual-runtime web application deployable to GitHub Pages and npm/unpkg.

## Deployment to GitHub Pages

1. Create a new GitHub repository: `my-web-hub`.
2. Push all files to the `main` branch.
3. In GitHub, go to **Settings** > **Pages**.
4. Under **Branch**, select `main` and `/ (root)`, then click **Save**.
5. Your site will be live at `https://<username>.github.io/my-web-hub/`.

## Accessing via unpkg CDN

Publish to npm to enable CDN access:

```bash
npm login
npm publish
