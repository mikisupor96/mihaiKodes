1. `ctrl + \`\` opens terminal.
2. We use `.prettierignore` and `.gitignore` to ignore files and folders just by adding them.
3. Create a react boilerplate using `create-react-app .`.
4. Start app with `npm start`.
5. Delete files: `index.css`, `logo.svg`.
6. Remove import in App.js for the logo and index.js for the index.css. Then delete all code inside return statement.
7. In public delete `favicon.ico`, `logo192.png` and `logo512.png`.
8. Install Bootstrap with `npm i bootstrap`.
9. To use Bootstrap we need to import it in App.js by using import and pointing it to the location the file `bootstrap.min.css` is at namely in `node_modules`.
10. Add everything to git branch by using `git add .` Then we commit using `git commit -m 'message'`.
11. We use `git log` to see the changes done so far and by who.`git status` can also be used to check changes
12. To add a repository we copy paste the line from git hub that has `remote` on it.
13. Then we push the changes using `git push -u origin master` this adds changes to the master branch.Use this token to upload[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]
14. We use `git branch` to check the current branches. We use `git remote -v` to check the current remote. To change url origin we use `git remote set-url name`. Here is an example of the remote `https://[ACCESS TOKEN]@github.com/[USERNAME]/[PROJECT NAME]`
15. In src we create a directory named `components`, we can use `rafc` to create the code inside an empty component.
16. Import the `navbar` component, the js extension does not need to be specified because webpack is installed.
17. All `class` need to be changed to `className` in html elements.
18. Use `ms-auto` on the `ul` element to push it to the left of the screen.
19. We use `rem` measurments when styling because that is what bootstrap uses.
20. We import the logo just like a regular file and we use it in `src` attribute and pass it as such `{logo}`.
21. Use `nav a.nav-link` to select the links to be styled.
22. Change `letter-spacing`, `font-weight` and `cursor`.
23. Import a font, select the links and add a color variable by creating `--var:` and using it by calling `var()`.
24. Wrap the content in a `container` class to center them.(use alt + down or up to move stuff across screen)
25. Add `hover` and `focus` effect border top to indicate where the user is at.
26. Install `react fontawesome`, then import into Navbar.js, we add a hamburger icon. Then add it as a `react` component.
27. Use `git checkout -b name` to create a new navbar branch.
