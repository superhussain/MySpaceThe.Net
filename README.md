# MySpaceThe.Net
A SpartaHack Creation

##Inspiration
Coming into SpartaHack, we didn't know what we wanted to make so we decided to instead have fun with this and go with any idea that we thought would be enjoyable for us! We came up with two ideas: MySpaceThe.Net and Pull4Me! The former being a Google Chrome Extension and the latter being a development tool.

##What it does
MySpaceThe.Net is a Google Chrome Extension that is built off of two main APIs: Clarifai and Giphy. Clarifai allowed us to get tags to describe all images in the page which we then fed to Giphy to find a suitable image to replace with. And it will do just that, replace all the images from a page with a gif that has the same tag. If that isn't pretty sweet, I don't know what is!

Pull4Me was the other mini project we worked on to help our lives become easier while working with the Microsoft Azure server. No one likes to SSH into the server just to pull in changes from GitHub and then re run the webserver. We wanted to automate that process by building a BASH script that inputs all the commands for us. Yes, we're that lazy! You start the script when you have changes to a project you made and are ready to commit. You go to the command line and run the command `./pull4me.sh` or `sh pull4me.sh` (if you're on Windows). It will prompt you to put in a commit message, push the changes to the repository, ssh into the server, prompt you for your password, and finally pull the changes and restart the server with a single command! WICKED COOL, EHH!

##How I built it
MySpaceThe.Net is a Google Chrome Extension that is built completely in JavaScript using the Clarifai and Giphy APIs. Very Simple, we just followed a guide to making a chrome extension and using the mentioned APIs and we were on our way!

The MySpaceThe.Net website is built on the static web stack. I used HTML for the markup, SASS for the styles, and JavaScript for the scripting. We also used npm for our package management needs as well as Gulp as our build system which was in charge of processing, autoprefixing and minifying our SASS, uglifying and linting our JavaScript, watching for any changes, and spitting up a simple web server for quick use.

The MySpaceThe.Net website is being hosted on a Microsoft Azure Ubuntu 14.04 virtual machine which we are also using to demo our precious deployment script.

The Pull4Me deployment script was a simple BASH script that we didn't spend a lot of time making, but it made a world of a difference in our workflow! All we did was prompt the user to enter a couple of fields and run the deployment commands for you! 

##Challenges I ran into
Hussain - I personally have worked very little with BASH so there was a steep learning curve with building the Pull4Me script. 

Matthew - I have never made a chrome extension before and there was a huge learning curve getting started with the APIs, but I learned a lot and am glad I had the opportunity.

##Accomplishments that I'm proud of
Not building one, not two, but THREE epic things over the past couple of days!

##What I learned
We learned a lot including: ...

##What's next for MySpaceThe.Net
...

##Built With
...
