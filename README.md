1) Fork this repo.


2) Clone this repo on your computer.


3) Run the following command in your terminal.
### `git remote add base https://github.com/aj235711/jamia_kart.git`


4) Run the following command in your terminal.
### `npm install`


5) Create your separate branch from master by running the following command (let's say that you choose to create a branch called 'xyz').
### `git checkout -b xyz`


6) Do the required changes on your branch.


7) When you have made all the changes, run the following commands in your terminal.
### `git add .`
### `git commit -m"<your commit message>"`


8) Now checkout master by using the following command.
### `git checkout master`


9) Now pull the changes from the base using the following command.
### `git pull base origin`


10) Now again head back to your branch using the following command.
### `git checkout xyz`


11) Now rebase with master using the following command.
### `git rebase master`


If any merge conflicts occur during this step, contact me.


12) Now push your changes to your origin by using the following command.
### `git push origin xyz`


13) Now you are ready to create your pull request. Go to github.com and you will see a yello coloured prompt in the Code section which will tell you about your recent pushes. Click on the link and add a relevant message to create your pull request. The pull request will be created from your branch in the origin to the master branch in base.


14) Also, after your first push, if you work on the same branch and commit and rebase with master again, you might run into the refs head behind error while pushing your changes. In such case, just force push your changes using the following command.
### `git push origin +xyz`


15) That's it. Happy Coding...