# mccontroler
IMAGE
![This is an image](https://github.com/yellow-team-xyz/mccontroler/raw/main/screenshot/1.png)
![This is an image](https://github.com/yellow-team-xyz/mccontroler/raw/main/screenshot/9.png)
![This is an image](https://github.com/yellow-team-xyz/mccontroler/raw/main/screenshot/10.png)
![This is an image](https://github.com/yellow-team-xyz/mccontroler/raw/main/screenshot/11.png)
![This is an image](https://github.com/yellow-team-xyz/mccontroler/raw/main/screenshot/12.png)
![This is an image](https://github.com/yellow-team-xyz/mccontroler/raw/main/screenshot/13.png)
![This is an image](https://github.com/yellow-team-xyz/mccontroler/raw/main/screenshot/6.png)
![This is an image](https://github.com/yellow-team-xyz/mccontroler/raw/main/screenshot/7.png)
![This is an image](https://github.com/yellow-team-xyz/mccontroler/raw/main/screenshot/8.png)
> How to install || 1:npm i 2:node . 3:start
- 👋 Hi, I’m @yellow-team-xyz
- 👀 website yellow-team.xyz
- 📫 Discord: discord.gg/J959TmcxhE

#Addons API
> Exports import Html to dashboard_page login_page home_page
- exports.login_head = `<link rel="stylesheet" href="http://example.com/style.css">`;
- exports.login_main = `<h1>Test</h1>`;
- exports.login_script = `var num1 = 5;`;
- exports.dash_head = `<link rel="stylesheet" href="http://example.com/style.css">`;
- exports.dash_main = `<h1>Test</h1>`;
- exports.dash_nav = `<h1>Test</h1>`;
- exports.dash_nav_side = `<h1>Test</h1>`;
- exports.dash_script = `var num2 = 6;`;
- exports.home_html = `<h1>Welcome To TestCraft.Test</h1>`;
> For useing socket or express webserver add "const lib = require('../index.js');" for example and more
- "lib.io.emit("dataname","test data");" Socket.io
- POST "lib.app.post('/webbanip/', function(req, res){});" GET ""lib.app.get('/webbanip/', function(req, res){});"" Express.js
- lib.fs
- lib.url
- lib.expressip
> For Get Data From Mccontroler Like Serverstatus
- lib.serverstatus  ==> "on" or "off"
- lib.loadui ==> "on" or "off"
- lib.socketiokey ==> token for socket.io in mccontroller
- lib.sendsocketkey ==> token for received data
- lib.blacklist_ip ==> blacklist ip (update 1sc)
- lib.username ==> mccontroler username
- lib.password ==> mccontroler password
- lib.login_token ==> mccontroler login_token you can open dashboard_page for login_token
- lib.setup ==> "0" or "1"
- lib.min_ram ==> value
- lib.max_ram ==> value
- lib.version ==> minecraft_version
- lib.servername ==> server_name
- lib.software ==> "paper" or "spigot" or "feathermc"
- lib.eula ==> string
- lib.serverport ==> minecraft server port
- lib.minecraft ==> stop server or kill server and sendcmd if serverstatus == 'on' | sendcmd = "lib.minecraft.stdin.write('say hello' + "\r");" stop = "lib.minecraft.stdin.write('stop' + "\r");" kill = "lib.minecraft.kill('SIGINT');"
- lib.webserverport ==> web server port
- lib.webip ==> web server ip
- lib.multipleips ==> "true" or "false"
- lib.serverip ==> minecraft server ip
