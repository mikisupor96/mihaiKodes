1. `ctrl + \`\` opens terminal.
2. `git clone` clones a project and `npm i` installs all packages in packages.json file.
3. We use `.prettierignore` and `.gitignore` to ignore files and folders just by adding them.
4. Create a react boilerplate using `create-react-app .`.
5. Start app with `npm start`.
6. Delete files: `index.css`, `logo.svg`.
7. Remove import in App.js for the logo and index.js for the index.css. Then delete all code inside return statement.
8. In public delete `favicon.ico`, `logo192.png` and `logo512.png`.
9. Install Bootstrap with `npm i bootstrap`.
10. To use Bootstrap we need to import it in App.js by using import and pointing it to the location the file `bootstrap.min.css` is at namely in `node_modules`.
11. Add everything to git branch by using `git add .` Then we commit using `git commit -m 'message'`.
12. We use `git log` to see the changes done so far and by who.`git status` can also be used to check changes
13. To add a repository we copy paste the line from git hub that has `remote` on it.
14. Then we push the changes using `git push -u origin master` this adds changes to the master branch.Use this token to upload[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]
15. We use `git branch` to check the current branches. We use `git remote -v` to check the current remote. To change url origin we use `git remote set-url name`. Here is an example of the remote `https://[ACCESS TOKEN]@github.com/[USERNAME]/[PROJECT NAME]`
16. In src we create a directory named `components`, we can use `rafce` to create the code inside an empty component.
17. Import the `navbar` component, the js extension does not need to be specified because webpack is installed.
18. All `class` need to be changed to `className` in html elements.
19. Use `ms-auto` on the `ul` element to push it to the left of the screen.
20. We use `rem` measurments when styling because that is what bootstrap uses.
21. We import the logo just like a regular file and we use it in `src` attribute and pass it as such `{logo}`.
22. Use `nav a.nav-link` to select the links to be styled.
23. Change `letter-spacing`, `font-weight` and `cursor`.
24. Import a font, select the links and add a color variable by creating `--var:` and using it by calling `var()`.
25. Wrap the content in a `container` class to center them.(use alt + down or up to move stuff across screen)
26. Add `hover` and `focus` effect border top to indicate where the user is at.
27. Install `react fontawesome`, then import into Navbar.js, we add a hamburger icon. Then add it as a `react` component.
28. Use `git checkout -b name` to create a new navbar branch.
29. Add `header` component and wrap in react fragment `<></>` so that react can return.
30. Add background image to the header component using the `background` property.
31. We add `flex` and `flex-column` so that we can stack text in collumns.
32. Install `react-typed` for the typed effect. Add react comoonent `<Typed />` with attributes: `strings:["", ""]`, `typeSpeed`, `backSpeed`, `loop`.
33. Change the `main-info` to absolute position to allow the adding of particles, use `top bottom right left:0` to center
34. install `react-tsparticles`. Set react tsparticles according to docs.
35. Add about me section, using react component.
36. Add Services componenet, install `react brands` for facebook and other known icons.
37. Add new icons and style them by centering them and adding background and color.
38. Add Experience section
