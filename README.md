# eslint-config-chnk

Legacy ESLint configuration for existing CHNK/regu projects.

This package is kept for compatibility with older projects that already use
`extends: "chnk"` in `.eslintrc.*`.

New projects should not depend on this package. Use a project-local
`eslint.config.js` instead, or create a new flat-config-based shared package if
common rules become necessary again.

## Maintenance Policy

- Keep the current legacy configuration available for existing projects.
- Avoid broad dependency churn unless it is required to keep existing projects
  installable.
- Do not modernize this package into ESLint flat config in place.
- Prefer a new package if a shared flat config is needed in the future.
