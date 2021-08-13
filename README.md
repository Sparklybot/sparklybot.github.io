# Links to documentation of libraries and frameworks used  
[Firebase Hosting](https://firebase.google.com/docs/hosting)  
[Firebase Auth](https://firebase.google.com/docs/auth/web/start)  
[TailwindCSS](https://tailwindcss.com/docs)  
[Gulp](https://gulpjs.com/docs/en/getting-started/quick-start)  

# Environments & builds
There is only one environment for the blog. However, there is a development build and production build option.
The difference is that the production build has minimized/obfuscated javascript and css.

# How to deploy
To deploy, make sure npm and git are installed. Also make sure that after cloning the repo from git, the remote origin is set.
1. ``npm i``
2. ``gulp build-prod``
3. ``git add -A``
4. ``git commit -m "message"``
5. ``git push``

The blog automatically updates because it runs on Github Pages.

``Development``
Development can easily be done by running the command ``gulp serve``. Runs a local server and listens to changes in the code.
