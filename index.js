const express = require('express');
const multer = require('multer');
const colors = require('colors');
const pidusage = require('pidusage');
const url = require('url');
const bodyparser = require('body-parser');
const { spawn } = require('child_process');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);
const fs = require('fs');
const lineReader = require('line-reader');
const request = require('request');
const mcping = require('mcping-js');
const download = require('download');
const expressip = require('express-ip');
const static = require('./libs/static.js');
const update_data = require('./libs/update_data.js');
const static_htmls = require('./libs/static_htmls.js');
const nav_side = require('./libs/nav_side.js');
const loger = require('./libs/loger.js');
const debug = require('./libs/debug.js');
const obfuscator = require('./libs/obfuscator.js')
app.use(expressip().getIpInfoMiddleware);
app.use(bodyparser.urlencoded({ extended: true }));

module.exports.colors = (colors);
module.exports.app = (app);
module.exports.io = (io);

///Program Value
let dict = 'qwertyuioplkjhgfdsazxcv.bnm12345678.9QWERTYUIOPASDFGHJKLZXCVBNM123%#@%4567890';
let dict_s = 'ZXCVBNM.LKJHGFDSAQWERTYUIOP@#$%^12345678#90z%.xcvbnmlkjhgfdsaqwertyuiop';
let dict_w = 'qwertyuioplkjhgfdsazxcvbnm123456789QWERTYUIOPASDFGHJKLZXCVBNM1234567890'
let language = require('./languages/US-en.json');
const { obfuscate } = require('javascript-obfuscator');
const { Script } = require('vm');
let webserver_ip = '';
let webserver_port = '';
let multipleips = '';
let server_ip = '';
let get_official_addon = '';
let use_ssl = 'http';
let serverstatus = 'off';
let loadui = 'off';
let home_html = '';
let dash_head = '';
let dash_main = '';
let dash_nav = '';
let dash_nav_side = '';
let dash_script = '';
let login_head = '';
let login_main = '';
let login_script = '';
let blacklist_ip = '';
let addon_shop = '';
let server_received_key = '';
for (var i = 0; i < 64; i++) {
  server_received_key = server_received_key + dict.charAt(Math.floor(Math.random() * dict.length));
}
let server_send_key = '';
for (var i = 0; i < 64; i++) {
  server_send_key = server_send_key + dict.charAt(Math.floor(Math.random() * dict.length));
}
let options_received_key = '';
for (var i = 0; i < 64; i++) {
  options_received_key = options_received_key + dict.charAt(Math.floor(Math.random() * dict.length));
}
let options_send_key = '';
for (var i = 0; i < 64; i++) {
  options_send_key = options_send_key + dict.charAt(Math.floor(Math.random() * dict.length));
}
let console_received_key = '';
for (var i = 0; i < 64; i++) {
  console_received_key = console_received_key + dict.charAt(Math.floor(Math.random() * dict.length));
}
let console_send_key = '';
for (var i = 0; i < 64; i++) {
  console_send_key = console_send_key + dict.charAt(Math.floor(Math.random() * dict.length));
}
let log_received_key = '';
for (var i = 0; i < 64; i++) {
  log_received_key = log_received_key + dict.charAt(Math.floor(Math.random() * dict.length));
}
let log_send_key = '';
for (var i = 0; i < 64; i++) {
  log_send_key = log_send_key + dict.charAt(Math.floor(Math.random() * dict.length));
}
let plugins_received_key = '';
for (var i = 0; i < 64; i++) {
  plugins_received_key = plugins_received_key + dict.charAt(Math.floor(Math.random() * dict.length));
}
let plugins_send_key = '';
for (var i = 0; i < 128; i++) {
  plugins_send_key = plugins_send_key + dict_w.charAt(Math.floor(Math.random() * dict_w.length));
}
let general_settings_received_key = '';
for (var i = 0; i < 64; i++) {
  general_settings_received_key = general_settings_received_key + dict.charAt(Math.floor(Math.random() * dict.length));
}
let general_settings_send_key = '';
for (var i = 0; i < 64; i++) {
  general_settings_send_key = general_settings_send_key + dict.charAt(Math.floor(Math.random() * dict.length));
}
let addons_received_key = '';
for (var i = 0; i < 64; i++) {
  addons_received_key = addons_received_key + dict.charAt(Math.floor(Math.random() * dict.length));
}
let addons_send_key = '';
for (var i = 0; i < 64; i++) {
  addons_send_key = addons_send_key + dict.charAt(Math.floor(Math.random() * dict.length));
}
let profile_received_key = '';
for (var i = 0; i < 64; i++) {
  profile_received_key = profile_received_key + dict.charAt(Math.floor(Math.random() * dict.length));
}
let profile_send_key = '';
for (var i = 0; i < 64; i++) {
  profile_send_key = profile_send_key + dict.charAt(Math.floor(Math.random() * dict.length));
}
let access_received_key = '';
for (var i = 0; i < 64; i++) {
  access_received_key = access_received_key + dict.charAt(Math.floor(Math.random() * dict.length));
}
let access_send_key = '';
for (var i = 0; i < 64; i++) {
  access_send_key = access_send_key + dict.charAt(Math.floor(Math.random() * dict.length));
}
let html_error_403 = '';
let html_error_404 = '';
let html_loader = '';
let setup = '';
let app_language = '';
let min_ram = '';
let max_ram = '';
let version = '';
let servername = '';
let software = '';
let eula = '';
let serverport = '';
let app_version = '';
let server_conf_motd = '';
let server_conf_spawn_protection = '';
let server_conf_slots = '';
let server_conf_gamemode = '';
let server_conf_difficulty = '';
let server_conf_whitelist = '';
let server_conf_cracked = '';
let server_conf_pvp = '';
let server_conf_commandblocks = '';
let server_conf_fly = '';
let server_conf_animals = '';
let server_conf_monster = '';
let server_conf_villagers = '';
let server_conf_force_gamemode = '';
let server_conf_nether = '';
let server_conf_resource_pack_url = '';
///

setInterval(() => {
  module.exports.colors = (colors);
  module.exports.app = (app);
  module.exports.io = (io);
  module.exports.dict = (dict);
  module.exports.dict_s = (dict_s);
  module.exports.dict_w = (dict_w);
  module.exports.language = (language);
  module.exports.webserver_ip = (webserver_ip);
  module.exports.webserver_port = (webserver_port);
  module.exports.multipleips = (multipleips);
  module.exports.server_ip = (server_ip);
  module.exports.get_official_addon = (get_official_addon);
  module.exports.use_ssl = (use_ssl);
  module.exports.serverstatus = (serverstatus);
  module.exports.loadui = (loadui);
  module.exports.home_html = (home_html);
  module.exports.dash_head = (dash_head);
  module.exports.dash_main = (dash_main);
  module.exports.dash_nav = (dash_nav);
  module.exports.dash_nav_side = (dash_nav_side);
  module.exports.dash_script = (dash_script);
  module.exports.login_head = (login_head);
  module.exports.login_main = (login_main);
  module.exports.login_script = (login_script);
  module.exports.blacklist_ip = (blacklist_ip);
  module.exports.addon_shop = (addon_shop);
  module.exports.server_received_key = (server_received_key);
  module.exports.server_send_key = (server_send_key);
  module.exports.options_received_key = (options_received_key);
  module.exports.options_send_key = (options_send_key);
  module.exports.console_received_key = (console_received_key);
  module.exports.console_send_key = (console_send_key);
  module.exports.log_received_key = (log_received_key);
  module.exports.log_send_key = (log_send_key);
  module.exports.plugins_received_key = (plugins_received_key);
  module.exports.plugins_send_key = (plugins_send_key);
  module.exports.general_settings_received_key = (general_settings_received_key);
  module.exports.general_settings_send_key = (general_settings_send_key);
  module.exports.addons_received_key = (addons_received_key);
  module.exports.addons_send_key = (addons_send_key);
  module.exports.profile_received_key = (profile_received_key);
  module.exports.profile_send_key = (profile_send_key);
  module.exports.access_received_key = (access_received_key);
  module.exports.access_send_key = (access_send_key);
  module.exports.html_error_403 = (html_error_403);
  module.exports.html_error_404 = (html_error_404);
  module.exports.html_loader = (html_loader);
  module.exports.setup = (setup);
  module.exports.app_language = (app_language);
  module.exports.min_ram = (min_ram);
  module.exports.max_ram = (max_ram);
  module.exports.version = (version);
  module.exports.servername = (servername);
  module.exports.software = (software);
  module.exports.eula = (eula);
  module.exports.serverport = (serverport);
  module.exports.app_version = (app_version);
  module.exports.server_conf_motd = (server_conf_motd);
  module.exports.server_conf_spawn_protection = (server_conf_spawn_protection);
  module.exports.server_conf_slots = (server_conf_slots);
  module.exports.server_conf_gamemode = (server_conf_gamemode);
  module.exports.server_conf_difficulty = (server_conf_difficulty);
  module.exports.server_conf_whitelist = (server_conf_whitelist);
  module.exports.server_conf_cracked = (server_conf_cracked);
  module.exports.server_conf_pvp = (server_conf_pvp);
  module.exports.server_conf_commandblocks = (server_conf_commandblocks);
  module.exports.server_conf_fly = (server_conf_fly);
  module.exports.server_conf_animals = (server_conf_animals);
  module.exports.server_conf_monster = (server_conf_monster);
  module.exports.server_conf_villagers = (server_conf_villagers);
  module.exports.server_conf_force_gamemode = (server_conf_force_gamemode);
  module.exports.server_conf_nether = (server_conf_nether);
  module.exports.server_conf_resource_pack_url = (server_conf_resource_pack_url);
  if (serverstatus == 'on') {
    module.exports.minecraft = (minecraft);
  }
  if (serverstatus == 'on') {
    minecraft.on('exit', (code, signal) => {
      if (serverstatus == 'on') {
        if (signal) loger.log(`Server killed with signal: ${signal}`, 1, 3);
        io.emit(`${console_received_key}_console_log`, { message: 'The Server ShutDown ✅', color: 'green' });
        loger.log('Server Stop By Web', 1, 2);
        minecraft.kill();
        serverstatus = 'off';
      }
    });
  }
});

static_htmls.languages(language);
static_htmls.get('101', function (callback) {
  html_error_403 = callback;
  static_htmls.get('102', function (callback) {
    html_error_404 = callback;
    static_htmls.get('103', function (callback) {
      html_loader = callback;
      static.load(function (callback) {
        if (callback.status == 'true') {
          loger.log('Please wait while reading config.yco', 1, 2);
          fs.readFile('config.yco', 'utf8', function (err, data) {
            datajson = JSON.parse(data);
            webserver_ip = datajson.webserver_ip;
            webserver_port = datajson.webserver_port;
            multipleips = datajson.multipleips;
            server_ip = datajson.server_ip;
            get_official_addon = datajson.get_official_addon;
            if (webserver_port == 443) {
              use_ssl = 'https';
            }
            loger.log('Done!', 1, 1);
            debug.debug(function (callback) {
              if (callback.status == 'true') {
                loger.log('Please wait while reading data', 1, 2);
                update_data.update(function (callback) {
                  update_this_data(callback, function (callback) {
                    if (callback.status == 'true') {
                      loger.log('Reading data Done!', 1, 1);
                      setInterval(() => {
                        update_data.update(function (callback) {
                          update_this_data(callback, function (callback) { });
                        });
                      }, 2500);
                      request.get('https://dll.yellow-team.ir/dll/mccontroller/data/news', (error, resp, body) => {
                        if (body == undefined) {
                          loger.log("News: Can't connect to server and get news'", 3, 3);
                        } else {
                          if (error) {
                            loger.log("News: Can't connect to server and get news'", 3, 3);
                          } else {
                            loger.log(body, 1, 2);
                          }
                        }
                      });
                      request.get('https://dll.yellow-team.ir/dll/mccontroller/data/addons_shop', (error, resp, body) => {
                        if (body == undefined) {
                          loger.log("Addons Shop: Can't connect to server", 3, 3);
                          addon_shop = '<center><h1>Addons Shop Offline</h1></center>';
                        } else {
                          if (error) {
                            loger.log("Addons Shop: Can't connect to server", 3, 3);
                            addon_shop = '<center><h1>Addons Shop Offline</h1></center>';
                          } else {
                            addon_shop = body;
                            loger.log('Addons Shop: Enable', 1, 1);
                          }
                        }
                      });
                      if (setup == 1) {
                        loger.log('Checking the jar file', 1, 3);

                        if (fs.existsSync(`./server/software/${software}/server_${version}.jar`)) {
                          loger.log('Done!', 1, 1);
                        } else {
                          loger.log('Jar file not found please wait', 2, 2);
                          let dll_url = `https://dll.yellow-team.ir/dll/mccontroller/${software}/server_${version}.jar`;
                          (async () => {
                            loadui = 'on';
                            loger.log(`Start Downloading | Minecraft_${version} | URL: ${dll_url}`, 1, 2);
                            fs.writeFileSync(`./server/software/${software}/server_${version}.jar`, await download(dll_url));
                            loger.log('Downloading Done!', 1, 1);
                            loadui = 'off';
                          })();
                        }
                      }
                      function minecraft_server() {
                        fs.writeFile('./server/eula.txt', "eula=true", 'utf-8', function (err, data) {
                          loger.log('Accept Minecraft EULA!', 1, 2);
                        });
                        loger.log('Checking Server.Properties', 1, 2);
                        fs.readFile('./server/server.properties', 'utf8', function (err, data) {
                          server_split_conf = data.split("\r\n");
                          let server_conf_ex_cracked = '';
                          if (server_conf_cracked == 'true') {
                            server_conf_ex_cracked = 'false';
                          } else {
                            if (server_conf_cracked == 'false') {
                              server_conf_ex_cracked = 'true';
                            }
                          }
                          let save_server_conf = `${server_split_conf[0]}\r\n${server_split_conf[1]}\r\nspawn-protection=${server_conf_spawn_protection}\r\n${server_split_conf[3]}\r\n${server_split_conf[4]}\r\n${server_split_conf[5]}\r\n${server_split_conf[6]}\r\nforce-gamemode=${server_conf_force_gamemode}\r\nallow-nether=${server_conf_nether}\r\n${server_split_conf[9]}\r\ngamemode=${server_conf_gamemode}\r\n${server_split_conf[11]}\r\n${server_split_conf[12]}\r\n${server_split_conf[13]}\r\n${server_split_conf[14]}\r\ndifficulty=${server_conf_difficulty}\r\nspawn-monsters=${server_conf_monster}\r\n${server_split_conf[17]}\r\n${server_split_conf[18]}\r\npvp=${server_conf_pvp}\r\n${server_split_conf[20]}\r\n${server_split_conf[21]}\r\n${server_split_conf[22]}\r\n${server_split_conf[23]}\r\n${server_split_conf[24]}\r\nenable-command-block=${server_conf_commandblocks}\r\nmax-players=${server_conf_slots}\r\n${server_split_conf[27]}\r\n${server_split_conf[28]}\r\n${server_split_conf[29]}\r\n${server_split_conf[30]}\r\n${server_split_conf[31]}\r\nserver-port=${serverport}\r\n${server_split_conf[33]}\r\n${server_split_conf[34]}\r\nspawn-npcs=${server_conf_villagers}\r\nallow-flight=${server_conf_fly}\r\n${server_split_conf[37]}\r\n${server_split_conf[38]}\r\nresource-pack=${server_conf_resource_pack_url}\r\nspawn-animals=${server_conf_animals}\r\nwhite-list=${server_conf_whitelist}\r\n${server_split_conf[42]}\r\n${server_split_conf[43]}\r\nonline-mode=${server_conf_ex_cracked}\r\n${server_split_conf[45]}\r\n${server_split_conf[46]}\r\n${server_split_conf[47]}\r\n${server_split_conf[48]}\r\n${server_split_conf[49]}\r\n${server_split_conf[50]}\r\nmotd=${server_conf_motd}\r\n${server_split_conf[52]}`;
                          fs.writeFile('server/server.properties', save_server_conf, 'utf-8', function (err, data) {
                            loger.log('Done!', 1, 1);
                            if (max_ram >= 12) {
                              minecraft = spawn(
                                "java",
                                [`-Xms${min_ram}G`, `-Xmx${max_ram}G`, '-XX:+UseG1GC', '-XX:+ParallelRefProcEnabled', '-XX:MaxGCPauseMillis=200', '-XX:+UnlockExperimentalVMOptions', '-XX:+DisableExplicitGC', '-XX:+AlwaysPreTouch', '-XX:G1NewSizePercent=40', '-XX:G1MaxNewSizePercent=50', '-XX:G1HeapRegionSize=16M', '-XX:G1ReservePercent=15', '-XX:G1HeapWastePercent=5', '-XX:G1MixedGCCountTarget=4', '-XX:InitiatingHeapOccupancyPercent=20', '-XX:G1MixedGCLiveThresholdPercent=90', '-XX:G1RSetUpdatingPauseTimePercent=5', '-XX:SurvivorRatio=32', '-XX:+PerfDisableSharedMem', '-XX:MaxTenuringThreshold=1', '-Daikars.new.flags=true', '-Dusing.aikars.flags=https://mcflags.emc.gs', '-jar', `./software/${software}/server_${version}.jar`, 'nogui'],
                                { cwd: "./server" }
                              );
                              loger.log('Server Start By Web', 1, 1);
                              serverstatus = 'on';
                              return minecraft;
                            } else {
                              minecraft = spawn(
                                "java",
                                [`-Xms${min_ram}G`, `-Xmx${max_ram}G`, '-XX:+UseG1GC', '-XX:+ParallelRefProcEnabled', '-XX:MaxGCPauseMillis=200', '-XX:+UnlockExperimentalVMOptions', '-XX:+DisableExplicitGC', '-XX:+AlwaysPreTouch', '-XX:G1NewSizePercent=30', '-XX:G1MaxNewSizePercent=40', '-XX:G1HeapRegionSize=8M', '-XX:G1ReservePercent=20', '-XX:G1HeapWastePercent=5', '-XX:G1MixedGCCountTarget=4', '-XX:InitiatingHeapOccupancyPercent=15', '-XX:G1MixedGCLiveThresholdPercent=90', '-XX:G1RSetUpdatingPauseTimePercent=5', '-XX:SurvivorRatio=32', '-XX:+PerfDisableSharedMem', '-XX:MaxTenuringThreshold=1', '-Daikars.new.flags=true', '-Dusing.aikars.flags=https://mcflags.emc.gs', '-jar', `./software/${software}/server_${version}.jar`, 'nogui'],
                                { cwd: "./server" }
                              );
                              loger.log('Server Start By Web', 1, 1);
                              serverstatus = 'on';
                              return minecraft;
                            }
                          });
                        });
                      }
                      io.on('connection', function (socket) {
                        loger.log('Socket Client Connected!', 1, 1);
                        socket.on('disconnect', () => {
                          loger.log('Socket Client Disconnect!', 1, 3);
                        });

                        //server
                        setInterval(() => {
                          socket.emit(`${server_received_key}_status`, serverstatus);
                          socket.emit(`${console_received_key}_status`, serverstatus);
                          const server = new mcping.MinecraftServer(server_ip, serverport);
                          server.ping(10e3, 757, (err, res) => {
                            if (res) {
                              io.emit(`${server_received_key}_server_online`, `${language.server_page.online}`);
                            }
                          });
                          if (serverstatus == 'on') {
                            pidusage(minecraft.pid, function (err, stats) {
                              if (serverstatus == 'on') {
                                if (!err) {
                                  if (stats.memory != undefined && stats.cpu != undefined) {
                                    memoryuseserver = stats.memory / 10000;
                                    socket.emit(`${server_received_key}_cpudata`, `${Math.round(stats.cpu)}`);
                                    socket.emit(`${server_received_key}_ramdata`, `${Math.round(memoryuseserver)}`);
                                  }
                                }
                              }
                            });
                          }
                        }, 1000);
                        //end

                        //console
                        let console_bugfix = 'false';
                        setInterval(() => {
                          if (console_bugfix == 'false') {
                            if (serverstatus == 'on') {
                              socket.emit(`${console_received_key}_console_log`, { message: 'Server is Online ✅', color: 'green' });
                              minecraft.stdout.on('data', function (data) {
                                if (data) {
                                  let console_color = '#f52121';
                                  let console_data = `${data}`;
                                  console_data = console_data.split(" ");
                                  if (console_data.includes('INFO]:') == true) {
                                    console_color = '#3c3cff';
                                  }
                                  if (console_data.includes('WARN]:') == true) {
                                    console_color = '#f9f947';
                                  }
                                  socket.emit(`${console_received_key}_console_log`, { message: `${data}`, color: console_color });
                                }
                              });
                              console_bugfix = 'true';
                            }
                          }
                        });
                        //end

                        //log
                        socket.on(`${log_send_key}_log_getdata`, function (data) {
                          lineReader.eachLine('server/logs/latest.log', 'utf8', function (log, last) {
                            socket.emit(`${log_received_key}_log`, `${log}`);
                          });
                        });
                        //end
                      });
                      require('./libs/status.js');

                      app.post('/event/', function (req, res) {
                        if (loadui == 'on') {
                          res.send(html_loader);
                        } else {
                          if (blacklist_ip.includes(`${req.ipInfo.ip}`) == true) {
                            res.status(403).send(html_error_403);
                          } else {
                            if (setup == 0) {
                              if (req.body.event == 'setup') {
                                if (req.body.port == webserver_port) {
                                  res.send('<script>window.location.replace("/login/?errorcode=104");</script>');
                                } else {
                                  let new_user_token = '';
                                  for (var i = 0; i < 128; i++) {
                                    new_user_token = new_user_token + dict_s.charAt(Math.floor(Math.random() * dict_s.length));
                                  }
                                  let new_user = `{"username":"${req.body.username}","password":"${req.body.password}","token":"${new_user_token}","level_permission":"1"}`;
                                  fs.writeFile(`data/users/${req.body.username}.ydb`, new_user, 'utf-8', function (err, data) {
                                    let setup_update = `{"setup":"1","language":"${req.body.language}","min_ram":"${req.body.min_ram}","max_ram":"${req.body.max_ram}","version":"${req.body.version}","server_name":"${req.body.server_name}","software":"${req.body.software}","eula":"${req.body.eula}","port":"${req.body.port}"}`;
                                    fs.writeFile('data/setup.ydb', setup_update, 'utf-8', function (err, data) {
                                      update_data.update(function (callback) {
                                        update_this_data(callback, function (callback) {
                                          if (callback.status == 'true') {
                                            loger.log('Setup Done!', 1, 1);
                                            loadui = 'on';
                                            if (fs.existsSync(`./server/software/${software}/server_${version}.jar`)) {
                                              loadui = 'off';
                                            } else {
                                              loger.log('Jar file not found please wait', 2, 2);
                                              let dll_url = `https://dll.yellow-team.ir/dll/mccontroller/${software}/server_${version}.jar`;
                                              (async () => {
                                                loger.log(`Start Downloading | Minecraft_${version} | URL: ${dll_url}`, 1, 2);
                                                fs.writeFileSync(`./server/software/${software}/server_${version}.jar`, await download(dll_url));
                                                loger.log('Downloading Done!', 1, 1);
                                                loadui = 'off';
                                              })();
                                            }
                                            res.send('<script>window.location.replace("/login/?errorcode=102");</script>');
                                          }
                                        });
                                      });

                                    });
                                  });
                                }
                              }
                            } else {
                              if (req.body.event == 'login') {
                                if (fs.existsSync(`./data/users/${req.body.username}.ydb`)) {
                                  fs.readFile(`./data/users/${req.body.username}.ydb`, 'utf8', function (err, data) {
                                    datajson = JSON.parse(data);
                                    if (req.body.password == datajson.password) {
                                      res.send(`<script>localStorage.setItem("token","${datajson.token}");window.location.replace("/dashboard/");</script>`);
                                    } else {
                                      fs.appendFile('./data/blacklist_ip.ydb', `\n${req.ipInfo.ip}`, function () {
                                        res.send('<script>window.location.replace("/login/?errorcode=101");</script>');
                                      });
                                      setTimeout(() => {
                                        fs.readFile('./data/blacklist_ip.ydb', 'utf8', function (err, data) {
                                          let new_data = data.replace(`\n${req.ipInfo.ip}`, '');
                                          fs.writeFileSync('./data/blacklist_ip.ydb', `${new_data}`);
                                        });
                                      }, 10000);
                                    }
                                  });
                                } else {
                                  fs.appendFile('./data/blacklist_ip.ydb', `\n${req.ipInfo.ip}`, function () {
                                    res.send('<script>window.location.replace("/login/?errorcode=101");</script>');
                                  });
                                  setTimeout(() => {
                                    fs.readFile('./data/blacklist_ip.ydb', 'utf8', function (err, data) {
                                      let new_data = data.replace(`\n${req.ipInfo.ip}`, '');
                                      fs.writeFileSync('./data/blacklist_ip.ydb', `${new_data}`);
                                    });
                                  }, 10000);
                                }
                              }
                              if (req.body.event == 'startserver') {
                                if (req.body.sendsocketkey == server_send_key) {
                                  if (serverstatus == 'off') {
                                    minecraft_server();
                                  }
                                }
                              }
                              if (req.body.event == 'stopserver') {
                                if (req.body.sendsocketkey == server_send_key) {
                                  if (serverstatus == 'on') {
                                    minecraft.stdin.write("stop" + "\r");
                                  }
                                }
                              }
                              if (req.body.event == 'killserver') {
                                if (req.body.sendsocketkey == server_send_key) {
                                  if (serverstatus == 'on') {
                                    minecraft_server();
                                    loger.log('Server Stop By API', 1, 2);
                                    minecraft.kill('SIGINT');
                                  }
                                }
                              }
                              if (req.body.event == 'cmd_console') {
                                if (req.body.sendsocketkey == console_send_key) {
                                  if (serverstatus == 'on') {
                                    if (req.body.cmd_send == 'stop') {
                                      io.emit(`${console_received_key}_console_log`, { message: 'You do not have permission to use this command here ❌', color: '#f52121' });
                                    } else {
                                      minecraft.stdin.write(req.body.cmd_send + "\r");
                                    }
                                  }
                                }
                              }
                              if (req.body.event == 'update_server_conf') {
                                if (req.body.sendsocketkey == options_send_key) {
                                  let motd = req.body.motd;
                                  let commandblocks = req.body.server_commandblocks;
                                  let whitelist = req.body.server_whitelist;
                                  let cracked = req.body.server_cracked;
                                  let pvp = req.body.server_pvp;
                                  let fly = req.body.server_fly;
                                  let animals = req.body.server_animals;
                                  let monster = req.body.server_monster;
                                  let villagers = req.body.server_villagers;
                                  let nether = req.body.server_nether;
                                  let force_gamemode = req.body.server_force_gamemode;
                                  let spawn_protection = req.body.server_spawn_protection;
                                  let slots = req.body.server_slots;
                                  let gamemode = req.body.server_gamemode;
                                  let difficulty = req.body.server_difficulty;
                                  let resource_pack_url = req.body.server_resource_pack_url;
                                  let server_conf_update = `{"motd":"${motd}","commandblocks":"${commandblocks}","whitelist":"${whitelist}","cracked":"${cracked}","pvp":"${pvp}","fly":"${fly}","animals":"${animals}","monster":"${monster}","villagers":"${villagers}","nether":"${nether}","force_gamemode":"${force_gamemode}","spawn_protection":"${spawn_protection}","slots":"${slots}","gamemode":"${gamemode}","difficulty":"${difficulty}","resource_pack_url":"${resource_pack_url}"}`;
                                  if (motd == '' || motd == undefined) {
                                    io.emit(`${options_received_key}_options_error`, "danger");
                                  } else {
                                    fs.writeFile('data/server_conf.ydb', server_conf_update, 'utf-8', function (err, data) {
                                      server_conf_motd = motd;
                                      if (err) {
                                        io.emit(`${options_received_key}_options_error`, "danger");
                                      } else {
                                        io.emit(`${options_received_key}_options_error`, "success");
                                      }
                                      loger.log('Server Conf Data Base Update!', 1, 1);
                                    });
                                  }
                                }
                              }
                              if (req.body.event == 'download_plugin') {
                                if (req.body.sendsocketkey == plugins_send_key) {
                                  if (req.body.url == " " || req.body.plugin_name == " " || req.body.url == "" || req.body.plugin_name == "" || req.body.url == undefined || req.body.plugin_name == undefined) {
                                    io.emit(`${plugins_received_key}_plugins_error`, "danger");
                                  } else {
                                    if (fs.existsSync(`./server/plugins/${req.body.plugin_name}.jar`)) {
                                      io.emit(`${plugins_received_key}_plugins_error`, "danger");
                                    } else {
                                      (async () => {
                                        loger.log('Install Plugin Done!', 1, 1);
                                        io.emit(`${plugins_received_key}_plugins_error`, "success");
                                        fs.writeFileSync(`./server/plugins/${req.body.plugin_name}.jar`, await download(req.body.url));
                                      })();
                                    }
                                  }

                                }
                              }
                              if (req.body.event == 'update_general_settings') {
                                if (req.body.sendsocketkey == general_settings_send_key) {
                                  const new_language_v = req.body.new_language_v;
                                  const new_port_v = req.body.new_port_v;
                                  const new_min_ram_v = req.body.new_min_ram_v;
                                  const new_max_ram_v = req.body.new_max_ram_v;
                                  const new_servername_v = req.body.new_servername_v;
                                  const new_software_v = req.body.new_software_v;
                                  const new_version_v = req.body.new_version_v;

                                  if (new_port_v == webserver_port) {
                                    io.emit(`${general_settings_received_key}_setup_error`, '103');
                                  } else {
                                    if (!new_port_v == "" & !new_min_ram_v == "" & !new_max_ram_v == "" & !new_servername_v == "" & !new_software_v == "" & !new_version_v == "") {
                                      const new_setup_v = `{"setup":"1","language":"${new_language_v}","min_ram":"${new_min_ram_v}","max_ram":"${new_max_ram_v}","version":"${new_version_v}","server_name":"${new_servername_v}","software":"${new_software_v}","eula":"${eula}","port":"${new_port_v}"}`;
                                      fs.writeFile('data/setup.ydb', new_setup_v, 'utf-8', function (err, data) {
                                        update_data.update(function (callback) {
                                          update_this_data(callback, function (callback) {
                                            if (callback.status == 'true') {
                                              if (setup == 1) {
                                                io.emit('reload', 'reload');
                                              }
                                              if (fs.existsSync(`./server/software/${new_software_v}/server_${new_version_v}.jar`)) {
                                                io.emit(`${general_settings_received_key}_setup_error`, '101');
                                                loger.log('Setup Data Base Update!', 1, 1);
                                              } else {
                                                loger.log('Receiving information please wait', 1, 2);
                                                let dll_url = `https://dll.yellow-team.ir/dll/mccontroller/${software}/server_${version}.jar`;
                                                (async () => {
                                                  loadui = 'on';
                                                  io.emit('reload', 'reload');
                                                  loger.log(`Start Downloading | Minecraft_${new_version_v} | URL: ${dll_url}`, 1, 2);
                                                  fs.writeFileSync(`./server/software/${new_software_v}/server_${new_version_v}.jar`, await download(dll_url));
                                                  loger.log('Downloading Done!', 1, 1);
                                                  loadui = 'off';
                                                })();
                                              }
                                            }
                                          });
                                        });
                                      });
                                    } else {
                                      io.emit(`${general_settings_received_key}_setup_error`, '102');
                                    }
                                  }
                                }
                              }
                              if (req.body.event == 'restart_addons') {
                                if (req.body.sendsocketkey == general_settings_send_key) {
                                  Load_addons();
                                  setTimeout(() => {
                                    io.emit('reload', 'reload');
                                  }, 2000);
                                }
                              }
                              if (req.body.event == 'install_addons') {
                                if (req.body.sendsocketkey == addons_send_key) {
                                  if (fs.existsSync(`./addons/${req.body.addon_name}.js`)) {
                                    request.get('https://yellow-team.ir/' + req.body.url, (error, resp, body) => {
                                      if (error) {
                                        loger.log('Update Addon Error!', 3, 3);
                                      }
                                      fs.writeFile(`./addons/${req.body.addon_name}.js`, body, 'utf-8', function (err, data) {
                                        loger.log('Update Addon Done!', 1, 1);
                                      });
                                    });
                                  } else {
                                    request.get('https://' + req.body.url, (error, resp, body) => {
                                      if (error) {
                                        loger.log('Install Addon Error!', 3, 3);
                                      }
                                      fs.writeFile(`./addons/${req.body.addon_name}.js`, body, 'utf-8', function (err, data) {
                                        loger.log('Install Addon Done!', 1, 1);
                                      });
                                    });
                                  }
                                }
                              }
                              if (req.body.event == 'change_password') {
                                if (req.body.sendsocketkey == profile_send_key) {
                                  if (req.body.username != '' || req.body.username != undefined || req.body.chlastpassword != '' || req.body.chlastpassword != undefined || req.body.chnewpassword != '' || req.body.chnewpassword != undefined) {
                                    if (fs.existsSync(`./data/users/${req.body.username}.ydb`)) {
                                      fs.readFile(`./data/users/${req.body.username}.ydb`, 'utf8', function (err, data) {
                                        datajson = JSON.parse(data);
                                        if (req.body.chlastpassword == datajson.password && req.body.username == datajson.username) {
                                          let new_user_token = '';
                                          for (var i = 0; i < 128; i++) {
                                            new_user_token = new_user_token + dict_s.charAt(Math.floor(Math.random() * dict_s.length));
                                          }
                                          let new_user_data = `{"username":"${datajson.username}","password":"${req.body.chnewpassword}","token":"${new_user_token}","level_permission":"${datajson.level_permission}"}`;
                                          fs.writeFile(`./data/users/${datajson.username}.ydb`, new_user_data, 'utf-8', function (err, data) {
                                            io.emit(`${profile_received_key}_${req.body.username}_profile_error`, '102');
                                            setTimeout(() => {
                                              io.emit('login', 'login');
                                            }, 2000);
                                          });
                                        } else {
                                          io.emit(`${profile_received_key}_${req.body.username}_profile_error`, '101');
                                        }
                                      });
                                    }
                                  }
                                }
                              }

                              if (req.body.event == 'add_access') {
                                if (req.body.sendsocketkey == access_send_key) {
                                  if (fs.existsSync(`./data/users/${req.body.username}.ydb`)) {
                                    io.emit(`${access_received_key}_access_error`, '102');
                                  } else {
                                    let new_user_token = '';
                                    for (var i = 0; i < 128; i++) {
                                      new_user_token = new_user_token + dict_s.charAt(Math.floor(Math.random() * dict_s.length));
                                    }
                                    let new_user = `{"username":"${req.body.username}","password":"${req.body.password}","token":"${new_user_token}","level_permission":"${req.body.level_permission}"}`;
                                    fs.writeFile(`data/users/${req.body.username}.ydb`, new_user, 'utf-8', function (err, data) {
                                      io.emit(`${access_received_key}_access_error`, '101');
                                    });
                                  }
                                }
                              }

                              if (req.body.event == 'remove_access') {
                                if (req.body.sendsocketkey == access_send_key) {
                                  if (fs.existsSync(`./data/users/${req.body.rm_username}.ydb`)) {
                                    fs.unlink(`./data/users/${req.body.rm_username}.ydb`, function (err) {
                                      io.emit(`${access_received_key}_access_error`, '103');
                                    });
                                  } else {
                                    io.emit(`${access_received_key}_access_error`, '104');
                                  }
                                }
                              }
                            }
                          }
                        }
                      });

                      const storage = multer.diskStorage({
                        destination: function (req, file, callback) {
                          callback(null, './server/plugins/');
                        },
                        filename: function (req, file, callback) {
                          callback(null, file.originalname);
                        }
                      });
                      const upload = multer({ storage: storage }).single('plugin_file');

                      app.post(`/upload/plugins/${plugins_send_key}/`, function (req, res) {
                        upload(req, res, function (err) {
                          if (err) {
                            return res.end(`${language.plugins_page.file_upload_error}`);
                          }
                          res.end(`${language.plugins_page.file_upload_done}`);
                        });
                      });

                      app.get('/dashboard/', function (req, res) {
                        if (loadui == 'on') {
                          res.send(html_loader);
                        } else {
                          if (blacklist_ip.includes(`${req.ipInfo.ip}`) == true) {
                            res.status(403).send(html_error_403);
                          } else {
                            res.send('<script>const token = localStorage.getItem("token");document.write(`<form id="sendform" action="/dashboard/server/" method="post"><input type="hidden" value="${token}" name="token"></form>`);document.getElementById("sendform").submit();</script>');
                          }

                        }
                      });
                      app.post('/dashboard/', function (req, res) {
                        if (loadui == 'on') {
                          res.send(html_loader);
                        } else {
                          if (blacklist_ip.includes(`${req.ipInfo.ip}`) == true) {
                            res.status(403).send(html_error_403);
                          } else {
                            res.send('<script>const token = localStorage.getItem("token");document.write(`<form id="sendform" action="/dashboard/server/" method="post"><input type="hidden" value="${token}" name="token"></form>`);document.getElementById("sendform").submit();</script>');
                          }
                        }
                      });
                      app.get('/dashboard/server/', function (req, res) {
                        if (loadui == 'on') {
                          res.send(html_loader);
                        } else {
                          if (blacklist_ip.includes(`${req.ipInfo.ip}`) == true) {
                            res.status(403).send(html_error_403);
                          } else {
                            res.send('<script>const token = localStorage.getItem("token");document.write(`<form id="sendform" action="${document.location.href}" method="post"><input type="hidden" value="${token}" name="token"></form>`);document.getElementById("sendform").submit();</script>');
                          }
                        }
                      });
                      app.get('/dashboard/options/', function (req, res) {
                        if (loadui == 'on') {
                          res.send(html_loader);
                        } else {
                          if (blacklist_ip.includes(`${req.ipInfo.ip}`) == true) {
                            res.status(403).send(html_error_403);
                          } else {
                            res.send('<script>const token = localStorage.getItem("token");document.write(`<form id="sendform" action="${document.location.href}" method="post"><input type="hidden" value="${token}" name="token"></form>`);document.getElementById("sendform").submit();</script>');
                          }
                        }
                      });
                      app.get('/dashboard/console/', function (req, res) {
                        if (loadui == 'on') {
                          res.send(html_loader);
                        } else {
                          if (blacklist_ip.includes(`${req.ipInfo.ip}`) == true) {
                            res.status(403).send(html_error_403);
                          } else {
                            res.send('<script>const token = localStorage.getItem("token");document.write(`<form id="sendform" action="${document.location.href}" method="post"><input type="hidden" value="${token}" name="token"></form>`);document.getElementById("sendform").submit();</script>');
                          }
                        }
                      });
                      app.get('/dashboard/log/', function (req, res) {
                        if (loadui == 'on') {
                          res.send(html_loader);
                        } else {
                          if (blacklist_ip.includes(`${req.ipInfo.ip}`) == true) {
                            res.status(403).send(html_error_403);
                          } else {
                            res.send('<script>const token = localStorage.getItem("token");document.write(`<form id="sendform" action="${document.location.href}" method="post"><input type="hidden" value="${token}" name="token"></form>`);document.getElementById("sendform").submit();</script>');
                          }
                        }
                      });
                      app.get('/dashboard/plugins/', function (req, res) {
                        if (loadui == 'on') {
                          res.send(html_loader);
                        } else {
                          if (blacklist_ip.includes(`${req.ipInfo.ip}`) == true) {
                            res.status(403).send(html_error_403);
                          } else {
                            res.send('<script>const token = localStorage.getItem("token");document.write(`<form id="sendform" action="${document.location.href}" method="post"><input type="hidden" value="${token}" name="token"></form>`);document.getElementById("sendform").submit();</script>');
                          }
                        }
                      });
                      app.get('/dashboard/general_settings/', function (req, res) {
                        if (loadui == 'on') {
                          res.send(html_loader);
                        } else {
                          if (blacklist_ip.includes(`${req.ipInfo.ip}`) == true) {
                            res.status(403).send(html_error_403);
                          } else {
                            res.send('<script>const token = localStorage.getItem("token");document.write(`<form id="sendform" action="${document.location.href}" method="post"><input type="hidden" value="${token}" name="token"></form>`);document.getElementById("sendform").submit();</script>');
                          }
                        }
                      });
                      app.get('/dashboard/addons/', function (req, res) {
                        if (blacklist_ip.includes(`${req.ipInfo.ip}`) == true) {
                          res.status(403).send(html_error_403);
                        } else {
                          res.send('<script>const token = localStorage.getItem("token");document.write(`<form id="sendform" action="${document.location.href}" method="post"><input type="hidden" value="${token}" name="token"></form>`);document.getElementById("sendform").submit();</script>');
                        }
                      });
                      app.get('/dashboard/profile/', function (req, res) {
                        if (loadui == 'on') {
                          res.send(html_loader);
                        } else {
                          if (blacklist_ip.includes(`${req.ipInfo.ip}`) == true) {
                            res.status(403).send(html_error_403);
                          } else {
                            res.send('<script>const token = localStorage.getItem("token");document.write(`<form id="sendform" action="${document.location.href}" method="post"><input type="hidden" value="${token}" name="token"></form>`);document.getElementById("sendform").submit();</script>');
                          }
                        }
                      });
                      app.get('/dashboard/access/', function (req, res) {
                        if (loadui == 'on') {
                          res.send(html_loader);
                        } else {
                          if (blacklist_ip.includes(`${req.ipInfo.ip}`) == true) {
                            res.status(403).send(html_error_403);
                          } else {
                            res.send('<script>const token = localStorage.getItem("token");document.write(`<form id="sendform" action="${document.location.href}" method="post"><input type="hidden" value="${token}" name="token"></form>`);document.getElementById("sendform").submit();</script>');
                          }
                        }
                      });

                      app.get('/dashboard/logout/', function (req, res) {
                        if (loadui == 'on') {
                          res.send(html_loader);
                        } else {
                          if (blacklist_ip.includes(`${req.ipInfo.ip}`) == true) {
                            res.status(403).send(html_error_403);
                          } else {
                            res.send('<script>localStorage.setItem("token","noon");window.location.replace("/login/?errorcode=103");</script>');
                          }
                        }
                      });

                      app.get('/', function (req, res) {
                        if (loadui == "on") {
                          res.send(html_loader);
                        } else {
                          if (blacklist_ip.includes(`${req.ipInfo.ip}`) == true) {
                            res.status(403).send(html_error_403);
                          } else {
                            if (home_html == "") {
                              res.send('<script>window.location.replace("/login/");</script>');
                            } else {
                              res.send(home_html);
                            }
                          }
                        }
                      });

                      app.get('/login', function (req, res) {
                        const params = url.parse(req.url, true).query;
                        let errorcode = params.errorcode;
                        let errormsg = "";
                        if (errorcode == "101") {
                          errormsg = `<center><div class="alert alert-danger" role="alert">${language.error_message[101]}</div></center>`;
                        }
                        if (errorcode == "102") {
                          errormsg = `<center><div class="alert alert-success" role="alert">Setup Done Please Login</div></center>`;
                        }
                        if (errorcode == "103") {
                          errormsg = `<center><div class="alert alert-success" role="alert">${language.error_message[103]}</div></center>`;
                        }
                        if (errorcode == "104") {
                          errormsg = `<center><div class="alert alert-danger" role="alert">ServerPort value are not allowed</div></center>`;
                        }
                        if (errorcode == null) {
                          errormsg = "";
                        }
                        if (loadui == "on") {
                          res.send(html_loader);
                        } else {
                          if (blacklist_ip.includes(`${req.ipInfo.ip}`) == true) {
                            res.status(403).send(html_error_403);
                          } else {
                            if (setup == 0) {
                              fs.readdir('./languages/', (err, files) => {
                                let languages_num = 0;
                                let languages_options = '';
                                files.forEach(file => {
                                  languages_num++;
                                  let languages_selected = '';
                                  if (file.split('.')[0] == 'US-en') languages_selected = 'selected="selected" ';
                                  languages_options = languages_options + `<option ${languages_selected}value="${file.split('.')[0]}">${file.split('.')[0]}</option>`;
                                  if (languages_num == files.length) {
                                    res.send(`<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>McController - Setup</title>
  <link href="/static/images/logo.png" rel="icon">
  <link href="/static/css/bootstrap.min.css" rel="stylesheet">
  <link href="/static/boxicons/css/boxicons.min.css" rel="stylesheet">
  <link href="/static/css/style.css" rel="stylesheet">
</head>
<body id="body-pd" class="body-pd">
  <main id="app_loader">
    <div class="loader">
      <div class="box box0">
        <div></div>
      </div>
      <div class="box box1">
        <div></div>
      </div>
      <div class="box box2">
        <div></div>
      </div>
      <div class="box box3">
        <div></div>
      </div>
      <div class="box box4">
        <div></div>
      </div>
      <div class="box box5">
        <div></div>
      </div>
      <div class="box box6">
        <div></div>
      </div>
      <div class="box box7">
        <div></div>
      </div>
      <div class="ground">
        <div></div>
      </div>
    </div>
  </main>
  <main id="app_body" style="display: none;">
    <div style="background-color: white; border-radius: 4px; width: 400px; margin-top: 30px; margin-bottom: 30px;" class="card-body p-4 p-sm-5">
      <h5 class="card-title text-center mb-5 fw-light fs-5">McController - Setup</h5>
      <form action="/event/" method="post">
      ${errormsg}
        <div class="form-floating mb-3">
          <input type="text" class="form-control" id="username" name="username" placeholder="Admin Username" required>
          <label for="username">Admin Username</label>
        </div>
        <div class="form-floating mb-3">
          <input type="password" class="form-control" id="password" name="password" placeholder="Admin Password" required>
          <label for="password">Admin Password</label>
        </div>
        <div class="form-floating mb-3">
          <input type="number" class="form-control" id="port" name="port" placeholder="Server Port" required>
          <label for="port">Server Port</label>
        </div>
        <div class="form-floating mb-3">
          <input type="number" class="form-control" id="min_ram" name="min_ram" placeholder="Min Ram Use G" required>
          <label for="min_ram">Min Ram Use (G)</label>
        </div>
        <div class="form-floating mb-3">
          <input type="number" class="form-control" id="max_ram" name="max_ram" placeholder="Max Ram Use G" required>
          <label for="max_ram">Max Ram Use (G)</label>
        </div>
        <div class="form-floating mb-3">
          <input type="text" class="form-control" id="server_name" name="server_name" placeholder="Server Name" required>
          <label for="server_name">Server Name</label>
        </div>
        <div class="form-select mb-3">
          <label class="form-check-label" for="software">
            Minecraft Server Software
          </label>
          <select name="software" class="form-select mb-3" required>
            <option value="paper">Paper</option>
            <option value="spigot">Spigot</option>
          </select>
        </div>
        <div class="form-select mb-3">
          <label class="form-check-label" for="version">
            Minecraft Server Version
          </label>
          <select name="version" class="form-select mb-3" required>
            <option value="1.18.2">1.18.2</option>
            <option value="1.17.1">1.17.1</option>
            <option value="1.16.5">1.16.5</option>
            <option value="1.15.2">1.15.2</option>
            <option value="1.14.4">1.14.4</option>
            <option value="1.13.2">1.13.2</option>
            <option value="1.12.2">1.12.2</option>
            <option value="1.11.2">1.11.2</option>
            <option value="1.10.2">1.10.2</option>
            <option value="1.9.4">1.9.4</option>
            <option value="1.8.8">1.8.8</option>
          </select>
        </div>
        <div class="form-select mb-3">
          <label class="form-check-label" for="language">
            Languages
          </label>
          <select name="language" class="form-select mb-3" required>
            ${languages_options}
          </select>
        </div>
        <div class="form-check mb-3">
          <input class="form-check-input" type="checkbox" value="true" name="eula" required>
          <label class="form-check-label" for="eula">
            Accept Minecraft EULA
          </label>
        </div>
        <div class="d-grid">
          <button class="btn btn-primary text-uppercase fw-bold" type="submit" name="event" value="setup">Setup</button>
        </div>
        <hr class="my-4">
      </form>
      <div class="d-grid mb-2">
        <a href="https://yellow-team.ir/">
          <center><button
              style="font-size: 0.9rem;letter-spacing: 0.05rem;padding: 0.75rem 1rem;color: white !important;background-color: #ffbf00;"
              class="btn text-uppercase fw-bold">Power By Yellow
              Team</button></center>
        </a>
      </div>
    </div>
  </main>
  <script type="text/javascript" src="/static/js/bootstrap.bundle.min.js"></script>
  <script src="/static/js/jquery-3.6.0.js"></script>
  <script src="/static/js/loader.js"></script>
</body>
</html>`);
                                  }
                                });
                              });
                            } else {
                              if (setup == 1) {
                                res.send(`<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>${language.mccontroller_name} - ${language.login_page.login_title}</title>
  <link href="/static/images/logo.png" rel="icon">
  <link href="/static/css/bootstrap.min.css" rel="stylesheet">
  <link href="/static/boxicons/css/boxicons.min.css" rel="stylesheet">
  <link href="/static/css/style.css" rel="stylesheet">
  ${login_head}
</head>
<body id="body-pd" class="body-pd">
  <main id="app_loader">
    <div class="loader">
      <div class="box box0">
        <div></div>
      </div>
      <div class="box box1">
        <div></div>
      </div>
      <div class="box box2">
        <div></div>
      </div>
      <div class="box box3">
        <div></div>
      </div>
      <div class="box box4">
        <div></div>
      </div>
      <div class="box box5">
        <div></div>
      </div>
      <div class="box box6">
        <div></div>
      </div>
      <div class="box box7">
        <div></div>
      </div>
      <div class="ground">
        <div></div>
      </div>
    </div>
  </main>
  <main id="app_body" style="display: none;">
    <div style="background-color: white; border-radius: 4px; width: 400px; margin-top: 30px; margin-bottom: 30px" class="card-body p-4 p-sm-5">
      <h5 class="card-title text-center mb-5 fw-light fs-5">${language.mccontroller_name} - ${language.login_page.login_title}</h5>
      <form action="/event/" method="post">
      ${errormsg}
        <div class="form-floating mb-3">
          <input type="text" class="form-control" id="username" name="username" placeholder="${language.login_page.login_input_username}" required>
          <label for="username">${language.login_page.login_input_username}</label>
        </div>
        <div class="form-floating mb-3">
          <input type="password" class="form-control" id="password" name="password" placeholder="${language.login_page.login_input_password}" required>
          <label for="password">${language.login_page.login_input_password}</label>
        </div>
        <div class="form-check mb-3">
          <input class="form-check-input" type="checkbox" value="" id="rememberPasswordCheck" checked disabled>
          <label class="form-check-label" for="rememberPasswordCheck">
          ${language.login_page.remember_checkbox_password}
          </label>
        </div>
        <div class="d-grid">
          <button class="btn btn-primary text-uppercase fw-bold"
            type="submit" name="event" value="login">${language.login_page.login_button}</button>
        </div>
        ${login_main}
        <hr class="my-4">
      </form>
      <div class="d-grid mb-2">
        <a href="https://yellow-team.ir/">
          <center><button style="font-size: 0.9rem;letter-spacing: 0.05rem;padding: 0.75rem 1rem;color: white !important;background-color: ${language.copyright.color};" class="btn text-uppercase fw-bold">${language.copyright.title}</button></center>
        </a>
      </div>
    </div>
  </main>
  <script type="text/javascript" src="/static/js/bootstrap.bundle.min.js"></script>
  <script src="/static/js/jquery-3.6.0.js"></script>
  <script src="/static/js/loader.js"></script>
  <script>${login_script}</script>
</body>
</html>`);
                              }
                            }
                          }
                        }
                      });

                      app.post('/dashboard/server/', function (req, res) {
                        if (loadui == 'on') {
                          res.send(html_loader);
                        } else {
                          if (blacklist_ip.includes(`${req.ipInfo.ip}`) == true) {
                            res.status(403).send(html_error_403);
                          } else {
                            if (req.body.token != undefined) {
                              fs.readdir("./data/users/", (err, files) => {
                                let length_files = 0;
                                files.forEach(file => {
                                  file = file.split('.');
                                  fs.readFile(`./data/users/${file[0]}.ydb`, 'utf8', function (err, data) {
                                    datajson = JSON.parse(data);
                                    if (req.body.token == datajson.token) {
                                      let level_permission = datajson.level_permission.split('');
                                      if (level_permission.includes('1') == true || level_permission.includes('2') == true) {
                                        nav_side.get(level_permission, 'server', function (nav_list) {
                                          let server_script = `
if(localStorage.getItem('server_ram_data')==undefined||localStorage.getItem('server_ram_data')==''){
  localStorage.setItem('server_ram_data','[0,0,0,0,0,0,0,0,0,0,0,0,0,0]');
}
if(localStorage.getItem('server_cpu_data')==undefined||localStorage.getItem('server_cpu_data')==''){
  localStorage.setItem('server_cpu_data','[0,0,0,0,0,0,0,0,0,0,0,0,0,0]');
}
const socket = io(document.location.host);
const xhttp = new XMLHttpRequest();
let serverstatus = '${serverstatus}';
const onlinediv = document.getElementById('online');
const onlinetxt = document.getElementById('online_txt');
setInterval(() => {
  if (serverstatus == 'off'){
      $("#online").hide();
      $("#server_stop_kill").hide();
      $("#offline").show();
      $("#server_start").show();
      onlinediv.style.backgroundColor = '#525252'; onlinetxt.innerHTML = '<i class="bx bx-loader-circle rotate"></i> ${language.server_page.starting}';
  }else{
      $("#online").show();
      $("#server_stop_kill").show();
      $("#offline").hide();
      $("#server_start").hide();
  }
  
},);
const ctx = document.getElementById('Ramchart').getContext('2d'); const RamChart = new Chart(ctx, { type: 'line', data: { labels: ['15', '14', '13', '12', '11', '10', '9', '8', '7', '6', '5', '4', '3', '2', '1'], datasets: [{ label: '${language.server_page.system_ram_use}', data: JSON.parse(localStorage.getItem('server_ram_data')), backgroundColor: ['rgb(255, 99, 132)'], borderColor: ['rgb(255, 99, 132)'], borderWidth: 1 }] }, options: { scales: { y: { beginAtZero: true } } } });const ctx2 = document.getElementById('Cpuchart').getContext('2d'); const CpuChart = new Chart(ctx2, { type: 'line', data: { labels: ['15', '14', '13', '12', '11', '10', '9', '8', '7', '6', '5', '4', '3', '2', '1'], datasets: [{ label: '${language.server_page.system_cpu_use}', data: JSON.parse(localStorage.getItem('server_cpu_data')), backgroundColor: ['rgb(255, 99, 132)'], borderColor: ['rgb(255, 99, 132)'], borderWidth: 1 }] }, options: { scales: { y: { beginAtZero: true } } } });
function start_server() {if (serverstatus == 'off') {alert('${language.server_page.waiting_process}');console.log("%c Send Server Event: %c START ","color: #fff; background: #F502C4","color: #fff; background: #5f5f5f");xhttp.open("POST", "/event/", true);xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");xhttp.send("sendsocketkey=${server_send_key}&event=startserver");}}
function stop_server() {if (serverstatus == 'on') {alert('${language.server_page.waiting_process}');console.log("%c Send Server Event: %c STOP ","color: #fff; background: #F502C4","color: #fff; background: #5f5f5f");xhttp.open("POST", "/event/", true);xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");xhttp.send("sendsocketkey=${server_send_key}&event=stopserver");}}
function kill_server() {let text = "${language.server_page.kill_alert}";if (confirm(text) == true) {if (serverstatus == 'on') {alert('${language.server_page.waiting_process}');console.log("%c Send Server Event: %c KILL ","color: #fff; background: #F502C4","color: #fff; background: #5f5f5f");xhttp.open("POST", "/event/", true);xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");xhttp.send("sendsocketkey=${server_send_key}&event=killserver");}}}
socket.on('${server_received_key}_status', function (status) { console.log("%c Received Server Status: %c "+status+" ","color: #fff; background: #F59402","color: #fff; background: #5f5f5f"); serverstatus = status; });
socket.on('${server_received_key}_server_online', function (status_online) { onlinediv.style.backgroundColor = '#32FF00'; onlinetxt.innerHTML = '<i class="bx bx-power-off"></i> '+status_online; });
socket.on('${server_received_key}_ramdata', ramdata => { console.log("%c Received Ram Data: %c "+ramdata+" ","color: #fff; background: #022FF5","color: #fff; background: #5f5f5f"); const old_data = JSON.parse(localStorage.getItem('server_ram_data'));localStorage.setItem('server_ram_data','['+old_data[1]+','+old_data[2]+','+old_data[3]+','+old_data[4]+','+old_data[5]+','+old_data[6]+','+old_data[7]+','+old_data[8]+','+old_data[9]+','+old_data[10]+','+old_data[11]+','+old_data[12]+','+old_data[13]+','+ramdata+']'); RamChart.data.datasets[0].data.push(ramdata); if (RamChart.data.datasets[0].data.length > 9) RamChart.data.datasets[0].data.shift(); RamChart.update(); });
socket.on('${server_received_key}_cpudata', cpudata => { console.log("%c Received Cpu Data: %c "+cpudata+" ","color: #fff; background: #4bc729","color: #fff; background: #5f5f5f"); const old_data = JSON.parse(localStorage.getItem('server_cpu_data'));localStorage.setItem('server_cpu_data','['+old_data[1]+','+old_data[2]+','+old_data[3]+','+old_data[4]+','+old_data[5]+','+old_data[6]+','+old_data[7]+','+old_data[8]+','+old_data[9]+','+old_data[10]+','+old_data[11]+','+old_data[12]+','+old_data[13]+','+cpudata+']'); CpuChart.data.datasets[0].data.push(cpudata); if (CpuChart.data.datasets[0].data.length > 9) CpuChart.data.datasets[0].data.shift(); CpuChart.update(); });
socket.on('disconnect', () => {
  console.log("%c Socket Event: %c Disconnect ","color: #fff; background: #000000","color: #fff; background: #5f5f5f");
});
socket.on('reload', function (data) {
  if(data=='reload'){
      window.location.reload();
      console.log("%c Received Server Event: %c Reload ","color: #fff; background: #F502C4","color: #fff; background: #5f5f5f");
  }
});
document.addEventListener("DOMContentLoaded", function (event) {
  const showNavbar = (toggleId, navId, bodyId, headerId) => {
    const toggle = document.getElementById(toggleId),
      nav = document.getElementById(navId),
      bodypd = document.getElementById(bodyId),
      headerpd = document.getElementById(headerId)
    if (toggle && nav && bodypd && headerpd) {
      toggle.addEventListener('click', () => {
        nav.classList.toggle('show')
        toggle.classList.toggle('bx-x')
        bodypd.classList.toggle('body-pd')
        headerpd.classList.toggle('body-pd')
      })
    }
  }
  showNavbar('header-toggle', 'nav-bar', 'body-pd', 'header')
  const linkColor = document.querySelectorAll('.nav_link')
  function colorLink() {
    if (linkColor) {
      linkColor.forEach(l => l.classList.remove('active'))
      this.classList.add('active')
    }
  }
  linkColor.forEach(l => l.addEventListener('click', colorLink))
});
${dash_script}`;

                                          obfuscator.get(server_script, function (callback) {
                                            server_script = callback;
                                            res.send(`<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>${language.mccontroller_name} - ${language.dashboard}</title>
  <link href="/static/images/logo.png" rel="icon">
  <link href="/static/css/bootstrap.min.css" rel="stylesheet">
  <link href="/static/boxicons/css/boxicons.min.css" rel="stylesheet">
  <link href="/static/css/style.css" rel="stylesheet">
  <link href="/static/css/dashboard.css" rel="stylesheet">
  ${dash_head}
</head>
<body id="body-pd" class="body-pd">
  <main id="app_loader">
    <div class="loader">
      <div class="box box0">
        <div></div>
      </div>
      <div class="box box1">
        <div></div>
      </div>
      <div class="box box2">
        <div></div>
      </div>
      <div class="box box3">
        <div></div>
      </div>
      <div class="box box4">
        <div></div>
      </div>
      <div class="box box5">
        <div></div>
      </div>
      <div class="box box6">
        <div></div>
      </div>
      <div class="box box7">
        <div></div>
      </div>
      <div class="ground">
        <div></div>
      </div>
    </div>
  </main>
  <main id="app_nav">
    <header class="header body-pd" id="header">
      <div class="header_toggle"> <i class="bx bx-menu bx-x" id="header-toggle"></i> </div>${dash_nav}
      <div class="header_img"> <img src="/static/images/logo.png" alt=""> </div>
    </header>
    <div class="l-navbar show" id="nav-bar">
      <nav class="nav">
        <div> <a href="" class="nav_logo"> <i class="bx bx-cube nav_logo-icon"></i> <span
              class="nav_logo-name">${language.mccontroller_name}</span> </a>
          <div class="nav_list"> ${nav_list}${dash_nav_side} <a href="/dashboard/logout/" class="nav_link"> <i class="bx bx-log-out nav_icon"></i> <span
          class="nav_name">${language.nav_side.logout}</span> </a> </div>
        </div>
      </nav>
    </div>
  </main>
  <main id="app_body" style="display: none; width: 100%; height: auto; margin: 17px;">
    <div class="col pb-0 mt-0">
        <div class="card bg-dark">
            <div style="color:White;" class="card-header">
                <center><i class="bx bx-server"></i> ${language.server_page.server}</center>
            </div>
            <div style="color:White; padding: 0rem 0rem;" class="card-body">
                <center style="margin-top: 10px;">
                    <h3>${server_ip}:${serverport}</h3>
                    <h3>${servername}</h3>
                </center>
                <div id='offline' style="background-color: #C70039; color:White;" class="card-footer">
                    <center>
                        <h4><i class="bx bx-stop-circle"></i> ${language.server_page.offline}</h4>
                    </center>
                </div>
                <div id='online' style="background-color: #525252; color:White;" class="card-footer">
                    <center>
                        <h4 id='online_txt'><i class="bx bx-loader-circle rotate"></i> ${language.server_page.starting}</h4>
                    </center>
                </div>
            </div>
        </div>
    </div>
    <h1> </h1>
    <div id="server_start">
        <center><button onclick='start_server();' type="button" class="btn btn-lg btn-success"><i
                    class="bx bx-power-off"></i> ${language.server_page.start_button}</button></center>
    </div>
    <center>
        <div id="server_stop_kill"><button onclick='stop_server();' type="button" class="btn btn-lg btn-danger"><i
                    class="bx bx-stop-circle"></i> ${language.server_page.stop_button}</button> <button type="button"
                class="btn btn-lg btn-danger" onclick='kill_server();'><i class="bx bx-bug"></i> ${language.server_page.kill_button}</button></div>
    </center>
    <div class="row row-cols-1 row-cols-lg-2">
        <div class="col pb-2 mt-3">
            <div class="card bg-dark">
                <div style="color:White;" class="card-header"><i class="bx bx-memory-card"></i> ${language.server_page.ram_use}</div>
                <div class="card-body">
                    <canvas id="Ramchart" style="width: 100%; height: 100%"></canvas>
                </div>
            </div>
        </div>
        <div class="col pb-2 mt-3">
            <div class="card bg-dark">
                <div style="color:White;" class="card-header"><i class="bx bx-microchip"></i> ${language.server_page.cpu_use}</div>
                <div class="card-body">
                    <canvas id="Cpuchart" style="width: 100%; height: 100%"></canvas>
                </div>
            </div>
        </div>
    </div>
    </main>
  <script type="text/javascript" src="/static/js/bootstrap.bundle.min.js"></script>
  <script type="text/javascript" src="/static/js/jquery-3.6.0.js"></script>
  <script type="text/javascript" src="/static/js/socket.io.js"></script>
  <script type="text/javascript" src="/static/js/chart.js"></script>
  <script type="text/javascript" src="/static/js/loader.js"></script>
  <script type="text/javascript">
  ${server_script}
  </script>
</body>
</html>`);
                                          });
                                        });
                                      } else {
                                        res.send('<script>window.location.replace("/dashboard/options/");</script>');
                                      }
                                    } else {
                                      length_files++;
                                      if (files.length == length_files) {
                                        fs.appendFile('./data/blacklist_ip.ydb', `\n${req.ipInfo.ip}`, function () {
                                          res.send('<script>window.location.replace("/login/?errorcode=101");</script>');
                                        });
                                        setTimeout(() => {
                                          fs.readFile('./data/blacklist_ip.ydb', 'utf8', function (err, data) {
                                            let new_data = data.replace(`\n${req.ipInfo.ip}`, '');
                                            fs.writeFileSync('./data/blacklist_ip.ydb', `${new_data}`);
                                          });
                                        }, 10000);
                                      }
                                    }
                                  });
                                });
                              });
                            } else {
                              fs.appendFile('./data/blacklist_ip.ydb', `\n${req.ipInfo.ip}`, function () {
                                res.send('<script>window.location.replace("/login/?errorcode=101");</script>');
                              });
                              setTimeout(() => {
                                fs.readFile('./data/blacklist_ip.ydb', 'utf8', function (err, data) {
                                  let new_data = data.replace(`\n${req.ipInfo.ip}`, '');
                                  fs.writeFileSync('./data/blacklist_ip.ydb', `${new_data}`);
                                });
                              }, 10000);
                            }
                          }
                        }
                      });

                      app.post('/dashboard/options/', function (req, res) {
                        if (loadui == 'on') {
                          res.send(html_loader);
                        } else {
                          if (blacklist_ip.includes(`${req.ipInfo.ip}`) == true) {
                            res.status(403).send(html_error_403);
                          } else {
                            if (req.body.token != undefined) {
                              fs.readdir("./data/users/", (err, files) => {
                                let length_files = 0;
                                files.forEach(file => {
                                  file = file.split('.');
                                  fs.readFile(`./data/users/${file[0]}.ydb`, 'utf8', function (err, data) {
                                    datajson = JSON.parse(data);
                                    if (req.body.token == datajson.token) {
                                      let level_permission = datajson.level_permission.split('');
                                      if (level_permission.includes('1') == true || level_permission.includes('3') == true) {
                                        nav_side.get(level_permission, 'options', function (nav_list) {
                                          let options_script = `
const socket = io(document.location.host);
const xhttp = new XMLHttpRequest();
const server_motd = document.getElementById('server_motd');const server_spawn_protection = document.getElementById('server_spawn_protection');const server_slots = document.getElementById('server_slots');const server_gamemode = document.getElementById('server_gamemode');const server_difficulty = document.getElementById('server_difficulty');const server_resource_pack_url = document.getElementById('server_resource_pack');
$("#diverr_uo_101").hide();
$("#diverr_uo_102").hide();
$('#server_commandblocks')[0].checked = ${server_conf_commandblocks}; $('#server_whitelist')[0].checked = ${server_conf_whitelist}; $('#server_cracked')[0].checked = ${server_conf_cracked}; $('#server_pvp')[0].checked = ${server_conf_pvp}; $('#server_fly')[0].checked = ${server_conf_fly}; $('#server_animals')[0].checked = ${server_conf_animals}; $('#server_monster')[0].checked = ${server_conf_monster}; $('#server_villagers')[0].checked = ${server_conf_villagers}; $('#server_nether')[0].checked = ${server_conf_nether}; $('#server_force_gamemode')[0].checked = ${server_conf_force_gamemode}; $('#server_gamemode').val('${server_conf_gamemode}'); $('#server_difficulty').val('${server_conf_difficulty}');
function update_options_server() {console.log("%c Send Server Event: %c UPDATE OPTIONS ","color: #fff; background: #F502C4","color: #fff; background: #5f5f5f");xhttp.open("POST", "/event/", true);xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");xhttp.send("sendsocketkey=${options_send_key}&event=update_server_conf&motd=" + server_motd.value + "&server_commandblocks=" + $('#server_commandblocks').is(':checked') + "&server_whitelist=" + $('#server_whitelist').is(':checked') + "&server_cracked=" + $('#server_cracked').is(':checked') + "&server_pvp=" + $('#server_pvp').is(':checked') + "&server_fly=" + $('#server_fly').is(':checked') + "&server_animals=" + $('#server_animals').is(':checked') + "&server_monster=" + $('#server_monster').is(':checked') + "&server_villagers=" + $('#server_villagers').is(':checked') + "&server_nether=" + $('#server_nether').is(':checked') + "&server_force_gamemode=" + $('#server_force_gamemode').is(':checked') + "&server_spawn_protection=" + server_spawn_protection.value + "&server_slots=" + server_slots.value + "&server_gamemode=" + server_gamemode.value + "&server_difficulty=" + server_difficulty.value + "&server_resource_pack_url=" + server_resource_pack_url.value);}
socket.on('${options_received_key}_options_error', function (data) {
  console.log("%c Received Data: %c "+data+" ","color: #fff; background: #4bc729","color: #fff; background: #5f5f5f");
    if(data=='success'){
      $("#diverr_uo_101").show();
      $("#diverr_uo_102").hide();
      setTimeout(() => {
          $("#diverr_uo_101").hide();
          $("#diverr_uo_102").hide();
      },2000);
    }else{
      $("#diverr_uo_101").hide();
      $("#diverr_uo_102").show();
      setTimeout(() => {
          $("#diverr_uo_101").hide();
          $("#diverr_uo_102").hide();
      },2000);
    }
});
socket.on('disconnect', () => {
  console.log("%c Socket Event: %c Disconnect ","color: #fff; background: #000000","color: #fff; background: #5f5f5f");
});
socket.on('reload', function (data) {
  if(data=='reload'){
      window.location.reload();
      console.log("%c Received Server Event: %c Reload ","color: #fff; background: #F502C4","color: #fff; background: #5f5f5f");
  }
});
document.getElementById('app_body').style.width = document.body.clientWidth;
document.addEventListener("DOMContentLoaded", function (event) {
  const showNavbar = (toggleId, navId, bodyId, headerId) => {
    const toggle = document.getElementById(toggleId),
      nav = document.getElementById(navId),
      bodypd = document.getElementById(bodyId),
      headerpd = document.getElementById(headerId)
    if (toggle && nav && bodypd && headerpd) {
      toggle.addEventListener('click', () => {
        nav.classList.toggle('show')
        toggle.classList.toggle('bx-x')
        bodypd.classList.toggle('body-pd')
        headerpd.classList.toggle('body-pd')
      })
    }
  }
  showNavbar('header-toggle', 'nav-bar', 'body-pd', 'header')
  const linkColor = document.querySelectorAll('.nav_link')
  function colorLink() {
    if (linkColor) {
      linkColor.forEach(l => l.classList.remove('active'))
      this.classList.add('active')
    }
  }
  linkColor.forEach(l => l.addEventListener('click', colorLink))
});
${dash_script}`;
                                          obfuscator.get(options_script, function (callback) {
                                            options_script = callback;
                                            res.send(`<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>${language.mccontroller_name} - ${language.dashboard}</title>
  <link href="/static/images/logo.png" rel="icon">
  <link href="/static/css/bootstrap.min.css" rel="stylesheet">
  <link href="/static/boxicons/css/boxicons.min.css" rel="stylesheet">
  <link href="/static/css/style.css" rel="stylesheet">
  <link href="/static/css/dashboard.css" rel="stylesheet">
  ${dash_head}
</head>
<body id="body-pd" class="body-pd">
  <main id="app_loader">
    <div class="loader">
      <div class="box box0">
        <div></div>
      </div>
      <div class="box box1">
        <div></div>
      </div>
      <div class="box box2">
        <div></div>
      </div>
      <div class="box box3">
        <div></div>
      </div>
      <div class="box box4">
        <div></div>
      </div>
      <div class="box box5">
        <div></div>
      </div>
      <div class="box box6">
        <div></div>
      </div>
      <div class="box box7">
        <div></div>
      </div>
      <div class="ground">
        <div></div>
      </div>
    </div>
  </main>
  <main id="app_nav">
    <header class="header body-pd" id="header">
      <div class="header_toggle"> <i class="bx bx-menu bx-x" id="header-toggle"></i> </div>${dash_nav}
      <div class="header_img"> <img src="/static/images/logo.png" alt=""> </div>
    </header>
    <div class="l-navbar show" id="nav-bar">
      <nav class="nav">
        <div> <a href="" class="nav_logo"> <i class="bx bx-cube nav_logo-icon"></i> <span
              class="nav_logo-name">${language.mccontroller_name}</span> </a>
          <div class="nav_list"> ${nav_list}${dash_nav_side} <a href="/dashboard/logout/" class="nav_link"> <i class="bx bx-log-out nav_icon"></i> <span
          class="nav_name">${language.nav_side.logout}</span> </a> </div>
        </div>
      </nav>
    </div>
  </main>
  <main id="app_body" style="display: none; width: 100%; height: auto; margin: 17px;">
    <div class="col pb-0 mt-0">
        <div class="card bg-dark">
            <div style="color:White;" class="card-body">
                <div id="diverr_uo_101" class="alert alert-success" role="alert">
                    <center>${language.options_page.alert_success}</center>
                </div>
                <div id="diverr_uo_102" class="alert alert-danger" role="alert">
                    <center>${language.options_page.alert_danger}</center>
                </div>
                <div class="d-flex justify-content-start">
                    <img src="/static/server-icon.png" class="rounded float-right" alt="64">
                    <div style="margin-left: 15px;">
                        <h4>${server_ip}:${serverport}</h4>
                        <input id="server_motd" placeholder="Server Motd" type="text" class="form-control"
                            value="${server_conf_motd}" aria-describedby="inputGroup-sizing-sm">
                    </div>
                </div>
            </div>
        </div>
        <div style="margin-top: 35px;" class="card bg-dark">
            <div style="color:White;" class="card-header"><i class="bx bx-cog"></i> ${language.options_page.server_properties}</div>
            <div style="color:White;" class="card-body">
                <div class="d-flex justify-content-between">
                    <div class="form-input">
                        <label class="form-check-label" for="server_spawn_protection">
                        ${language.options_page.spawn_protection}
                        </label>
                        <input class="form-control" id="server_spawn_protection" type="number" step="1" min="1"
                            max="30000000" value="${server_conf_spawn_protection}" />
                    </div>
                    <div class="form-input mb-3">
                        <label class="form-check-label" for="server_slots">
                        ${language.options_page.slots}
                        </label>
                        <input class="form-control" id="server_slots" type="number" step="1" min="1"
                            max="2147483647" value="${server_conf_slots}" />
                    </div>
                    <div class="form-input">
                        <label class="form-check-label" for="server_gamemode">
                        ${language.options_page.gamemode}
                        </label>
                        <select id="server_gamemode" class="form-select mb-3">
                            <option value="0">${language.options_page.gamemode_survival}</option>
                            <option value="1">${language.options_page.gamemode_creative}</option>
                            <option value="2">${language.options_page.gamemode_adventure}</option>
                            <option value="3">${language.options_page.gamemode_spectator}</option>
                        </select>
                    </div>
                    <div class="form-input">
                        <label class="form-check-label" for="server_difficulty">
                        ${language.options_page.difficulty}
                        </label>
                        <select id="server_difficulty" class="form-select mb-3">
                            <option value="1">${language.options_page.difficulty_easy}</option>
                            <option value="0">${language.options_page.difficulty_peaceful}</option>
                            <option value="2">${language.options_page.difficulty_normal}</option>
                            <option value="3">${language.options_page.difficulty_hard}</option>
                        </select>
                    </div>
                </div>
                <hr class="my-4">
                <div class="d-flex justify-content-between">
                    <div class="form-check form-switch">
                        <input class="form-check-input mb-3" type="checkbox" value="${server_conf_whitelist}"
                            id="server_whitelist">
                        <label class="form-check-label" for="server_whitelist">${language.options_page.whitelist}</label>
                    </div>
                    <div class="form-check form-switch">
                        <input class="form-check-input mb-3" type="checkbox" value="${server_conf_cracked}"
                            id="server_cracked">
                        <label class="form-check-label" for="server_cracked">${language.options_page.cracked}</label>
                    </div>
                    <div class="form-check form-switch">
                        <input class="form-check-input mb-3" type="checkbox" value="${server_conf_pvp}"
                            id="server_pvp">
                        <label class="form-check-label" for="server_pvp">${language.options_page.pvp}</label>
                    </div>
                    <div class="form-check form-switch">
                        <input class="form-check-input mb-3" type="checkbox" value="${server_conf_commandblocks}"
                            id="server_commandblocks">
                        <label class="form-check-label" for="server_commandblocks">${language.options_page.commandblocks}</label>
                    </div>
                </div>
                <div class="d-flex justify-content-between">
                    <div class="form-check form-switch">
                        <input class="form-check-input mb-3" type="checkbox" value="${server_conf_fly}"
                            id="server_fly">
                        <label class="form-check-label" for="server_fly">${language.options_page.fly}</label>
                    </div>
                    <div class="form-check form-switch">
                        <input class="form-check-input mb-3" type="checkbox" value="${server_conf_animals}"
                            id="server_animals">
                        <label class="form-check-label" for="server_animals">${language.options_page.animals}</label>
                    </div>
                    <div class="form-check form-switch">
                        <input class="form-check-input mb-3" type="checkbox" value="${server_conf_monster}"
                            id="server_monster">
                        <label class="form-check-label" for="server_monster">${language.options_page.monster}</label>
                    </div>
                    <div class="form-check form-switch">
                        <input class="form-check-input mb-3" type="checkbox" value="${server_conf_villagers}"
                            id="server_villagers">
                        <label class="form-check-label" for="server_villagers">${language.options_page.villagers}</label>
                    </div>
                </div>
                <div class="d-flex justify-content-between">
                    <div class="form-check form-switch">
                        <input class="form-check-input mb-3" type="checkbox" value="${server_conf_force_gamemode}"
                            id="server_force_gamemode">
                        <label class="form-check-label" for="server_force_gamemode">${language.options_page.force_gamemode}</label>
                    </div>
                    <div class="form-check form-switch">
                        <input class="form-check-input mb-3" type="checkbox" value="${server_conf_nether}"
                            id="server_nether">
                        <label class="form-check-label" for="server_nether">${language.options_page.nether}</label>
                    </div>
                </div>
                <hr class="my-4">
                <div class="form-input">
                    <label class="form-check-label" for="server_resource_pack">
                    ${language.options_page.resource_pack_url}
                    </label>
                    <input value="${server_conf_resource_pack_url}" class="form-control" id="server_resource_pack"
                        type="input" placeholder="https://example.com/Resource_pack.zip" />
                </div>
                <p></p>
                <center><button onclick="update_options_server();" type="button" class="btn btn-primary">${language.options_page.update_options_button}</button></center>
            </div>
        </div>
    </div>
    </main>
  <script type="text/javascript" src="/static/js/bootstrap.bundle.min.js"></script>
  <script type="text/javascript" src="/static/js/jquery-3.6.0.js"></script>
  <script type="text/javascript" src="/static/js/socket.io.js"></script>
  <script type="text/javascript" src="/static/js/loader.js"></script>
  <script type="text/javascript">
  ${options_script}
  </script>
</body>
</html>`);
                                          });
                                        });
                                      } else {
                                        res.send('<script>window.location.replace("/dashboard/console/");</script>');
                                      }
                                    } else {
                                      length_files++;
                                      if (files.length == length_files) {
                                        fs.appendFile('./data/blacklist_ip.ydb', `\n${req.ipInfo.ip}`, function () {
                                          res.send('<script>window.location.replace("/login/?errorcode=101");</script>');
                                        });
                                        setTimeout(() => {
                                          fs.readFile('./data/blacklist_ip.ydb', 'utf8', function (err, data) {
                                            let new_data = data.replace(`\n${req.ipInfo.ip}`, '');
                                            fs.writeFileSync('./data/blacklist_ip.ydb', `${new_data}`);
                                          });
                                        }, 10000);
                                      }
                                    }
                                  });
                                });
                              });
                            } else {
                              fs.appendFile('./data/blacklist_ip.ydb', `\n${req.ipInfo.ip}`, function () {
                                res.send('<script>window.location.replace("/login/?errorcode=101");</script>');
                              });
                              setTimeout(() => {
                                fs.readFile('./data/blacklist_ip.ydb', 'utf8', function (err, data) {
                                  let new_data = data.replace(`\n${req.ipInfo.ip}`, '');
                                  fs.writeFileSync('./data/blacklist_ip.ydb', `${new_data}`);
                                });
                              }, 10000);
                            }
                          }
                        }
                      });

                      app.post('/dashboard/console/', function (req, res) {
                        if (loadui == 'on') {
                          res.send(html_loader);
                        } else {
                          if (blacklist_ip.includes(`${req.ipInfo.ip}`) == true) {
                            res.status(403).send(html_error_403);
                          } else {
                            if (req.body.token != undefined) {
                              fs.readdir("./data/users/", (err, files) => {
                                let length_files = 0;
                                files.forEach(file => {
                                  file = file.split('.');
                                  fs.readFile(`./data/users/${file[0]}.ydb`, 'utf8', function (err, data) {
                                    datajson = JSON.parse(data);
                                    if (req.body.token == datajson.token) {
                                      let level_permission = datajson.level_permission.split('');
                                      if (level_permission.includes('1') == true || level_permission.includes('4') == true) {
                                        nav_side.get(level_permission, 'console', function (nav_list) {
                                          let console_script = `
const socket = io(document.location.host);
const xhttp = new XMLHttpRequest();
let serverstatus = '${serverstatus}';
  setInterval(() => {
      if (serverstatus == 'off'){
          $("#console_box").hide();
          $("#console_offline_log").show();
      }else{
          $("#console_box").show();
          $("#console_offline_log").hide();
      }
  },);
const cmd_send = document.getElementById('cmd_send_elment');
const console_box = document.getElementById('console_messages');
cmd_send.addEventListener("keydown", function (e) {if (e.key === "Enter") {send_cmd_console();}});
function send_cmd_console() {console.log("%c Send Server CMD Event: %c "+cmd_send.value+" ","color: #fff; background: #F502C4","color: #fff; background: #5f5f5f");xhttp.open("POST", "/event/", true);xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");xhttp.send("sendsocketkey=${console_send_key}&event=cmd_console&cmd_send=" + cmd_send.value);cmd_send.value = "";}
let console_bugfix = '';
socket.on('${console_received_key}_console_log', function (console_msg) {
  if (console_bugfix != console_msg.message) {
    console_bugfix = console_msg.message;
    var item = document.createElement('h6');
    item.textContent = console_msg.message;
    item.style.color = console_msg.color;
    console_box.appendChild(item);
    console_div = document.getElementById('console_box');
    console_div.scrollTo(0, console_div.scrollHeight);
    console.log("%c Received Console Data: %c "+console_msg.message,"color: #fff; background: #4bc729","color: #fff; background: #5f5f5f");
  } else {
    console_bugfix = '';
  }
});
socket.on('${console_received_key}_status', function (status) { console.log("%c Received Server Status: %c "+status+" ","color: #fff; background: #F59402","color: #fff; background: #5f5f5f"); serverstatus = status; });
socket.on('disconnect', () => {
  console.log("%c Socket Event: %c Disconnect ","color: #fff; background: #000000","color: #fff; background: #5f5f5f");
});
socket.on('reload', function (data) {
  if(data=='reload'){
      window.location.reload();
      console.log("%c Received Server Event: %c Reload ","color: #fff; background: #F502C4","color: #fff; background: #5f5f5f");
  }
});
document.addEventListener("DOMContentLoaded", function (event) {
  const showNavbar = (toggleId, navId, bodyId, headerId) => {
    const toggle = document.getElementById(toggleId),
      nav = document.getElementById(navId),
      bodypd = document.getElementById(bodyId),
      headerpd = document.getElementById(headerId)
    if (toggle && nav && bodypd && headerpd) {
      toggle.addEventListener('click', () => {
        nav.classList.toggle('show')
        toggle.classList.toggle('bx-x')
        bodypd.classList.toggle('body-pd')
        headerpd.classList.toggle('body-pd')
      })
    }
  }
  showNavbar('header-toggle', 'nav-bar', 'body-pd', 'header')
  const linkColor = document.querySelectorAll('.nav_link')
  function colorLink() {
    if (linkColor) {
      linkColor.forEach(l => l.classList.remove('active'))
      this.classList.add('active')
    }
  }
  linkColor.forEach(l => l.addEventListener('click', colorLink))
});
${dash_script}`;
                                          obfuscator.get(console_script, function (callback) {
                                            console_script = callback;
                                            res.send(`<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>${language.mccontroller_name} - ${language.dashboard}</title>
  <link href="/static/images/logo.png" rel="icon">
  <link href="/static/css/bootstrap.min.css" rel="stylesheet">
  <link href="/static/boxicons/css/boxicons.min.css" rel="stylesheet">
  <link href="/static/css/style.css" rel="stylesheet">
  <link href="/static/css/dashboard.css" rel="stylesheet">
  ${dash_head}
</head>
<body id="body-pd" class="body-pd">
  <main id="app_loader">
    <div class="loader">
      <div class="box box0">
        <div></div>
      </div>
      <div class="box box1">
        <div></div>
      </div>
      <div class="box box2">
        <div></div>
      </div>
      <div class="box box3">
        <div></div>
      </div>
      <div class="box box4">
        <div></div>
      </div>
      <div class="box box5">
        <div></div>
      </div>
      <div class="box box6">
        <div></div>
      </div>
      <div class="box box7">
        <div></div>
      </div>
      <div class="ground">
        <div></div>
      </div>
    </div>
  </main>
  <main id="app_nav">
    <header class="header body-pd" id="header">
      <div class="header_toggle"> <i class="bx bx-menu bx-x" id="header-toggle"></i> </div>${dash_nav}
      <div class="header_img"> <img src="/static/images/logo.png" alt=""> </div>
    </header>
    <div class="l-navbar show" id="nav-bar">
      <nav class="nav">
        <div> <a href="" class="nav_logo"> <i class="bx bx-cube nav_logo-icon"></i> <span
              class="nav_logo-name">${language.mccontroller_name}</span> </a>
          <div class="nav_list"> ${nav_list}${dash_nav_side} <a href="/dashboard/logout/" class="nav_link"> <i class="bx bx-log-out nav_icon"></i> <span
          class="nav_name">${language.nav_side.logout}</span> </a> </div>
        </div>
      </nav>
    </div>
  </main>
  <main id="app_body" style="display: none; width: 100%; height: auto; margin: 17px;">
    <div class="col pb-0 mt-0">
    <div class="card bg-dark">
        <div style="color:White;" class="card-header"><i class="bx bx-terminal"></i> ${language.console_page.console}</div>
        <div style="color:White;" class="card-body">
            <ul id="console_box" style="height: 28rem; background-color: black;"
                class="text-light rounded p-3 overflow-scroll">
                <div id="container">
                    <h6 id="console_online_log">${language.console_page.console_version_message}</h6>
                    <ul id="console_messages"></ul>
                    <div id="input-line" class="input-line">
                        <div class="prompt"></div>
                        <div id="sendcmddiv" class="form-input"><label class="form-check-label" for="cmd_send_elment">></label><input id="cmd_send_elment" class="cmdline" autofocus /></div>
                    </div>
                </div>
            </ul>
            <ul id="console_offline_log" style="height: 28rem; background-color: black;"
                class="text-light rounded p-3 overflow-scroll">
                <center>
                    <h1 style="margin-top: 140px;"><i class="bx bx-no-signal"></i> ${language.console_page.offline_console}</h1>
                </center>
            </ul>
        </div>
    </div>
    </div>
    </main>
  <script type="text/javascript" src="/static/js/bootstrap.bundle.min.js"></script>
  <script type="text/javascript" src="/static/js/jquery-3.6.0.js"></script>
  <script type="text/javascript" src="/static/js/socket.io.js"></script>
  <script type="text/javascript" src="/static/js/chart.js"></script>
  <script type="text/javascript" src="/static/js/loader.js"></script>
  <script type="text/javascript">
  ${console_script}
  </script>
</body>
</html>`);
                                          });
                                        });
                                      } else {
                                        res.send('<script>window.location.replace("/dashboard/log/");</script>');
                                      }
                                    } else {
                                      length_files++;
                                      if (files.length == length_files) {
                                        fs.appendFile('./data/blacklist_ip.ydb', `\n${req.ipInfo.ip}`, function () {
                                          res.send('<script>window.location.replace("/login/?errorcode=101");</script>');
                                        });
                                        setTimeout(() => {
                                          fs.readFile('./data/blacklist_ip.ydb', 'utf8', function (err, data) {
                                            let new_data = data.replace(`\n${req.ipInfo.ip}`, '');
                                            fs.writeFileSync('./data/blacklist_ip.ydb', `${new_data}`);
                                          });
                                        }, 10000);
                                      }
                                    }
                                  });
                                });
                              });
                            } else {
                              fs.appendFile('./data/blacklist_ip.ydb', `\n${req.ipInfo.ip}`, function () {
                                res.send('<script>window.location.replace("/login/?errorcode=101");</script>');
                              });
                              setTimeout(() => {
                                fs.readFile('./data/blacklist_ip.ydb', 'utf8', function (err, data) {
                                  let new_data = data.replace(`\n${req.ipInfo.ip}`, '');
                                  fs.writeFileSync('./data/blacklist_ip.ydb', `${new_data}`);
                                });
                              }, 10000);
                            }
                          }
                        }
                      });

                      app.post('/dashboard/log/', function (req, res) {
                        if (loadui == 'on') {
                          res.send(html_loader);
                        } else {
                          if (blacklist_ip.includes(`${req.ipInfo.ip}`) == true) {
                            res.status(403).send(html_error_403);
                          } else {
                            if (req.body.token != undefined) {
                              fs.readdir("./data/users/", (err, files) => {
                                let length_files = 0;
                                files.forEach(file => {
                                  file = file.split('.');
                                  fs.readFile(`./data/users/${file[0]}.ydb`, 'utf8', function (err, data) {
                                    datajson = JSON.parse(data);
                                    if (req.body.token == datajson.token) {
                                      let level_permission = datajson.level_permission.split('');
                                      if (level_permission.includes('1') == true || level_permission.includes('5') == true) {
                                        nav_side.get(level_permission, 'log', function (nav_list) {
                                          let log_script = `
const socket = io(document.location.host);
const xhttp = new XMLHttpRequest();
update_log();
function update_log() {socket.emit('${log_send_key}_log_getdata');$("#update_log_btn").hide();$("#update_log_wait").show();setTimeout(() => {$("#update_log_btn").show();$("#update_log_wait").hide();}, 5000);}
const txt_log = document.getElementById('log_txt');
socket.on('${log_received_key}_log', function (log_data) { var item = document.createElement('h6'); item.textContent = log_data; txt_log.appendChild(item); txt_log.scrollTo(0, txt_log.scrollHeight); });
socket.on('disconnect', () => {
  console.log("%c Socket Event: %c Disconnect ","color: #fff; background: #000000","color: #fff; background: #5f5f5f");
});
socket.on('reload', function (data) {
  if(data=='reload'){
      window.location.reload();
      console.log("%c Received Server Event: %c Reload ","color: #fff; background: #F502C4","color: #fff; background: #5f5f5f");
  }
});
document.addEventListener("DOMContentLoaded", function (event) {
  const showNavbar = (toggleId, navId, bodyId, headerId) => {
    const toggle = document.getElementById(toggleId),
      nav = document.getElementById(navId),
      bodypd = document.getElementById(bodyId),
      headerpd = document.getElementById(headerId)
    if (toggle && nav && bodypd && headerpd) {
      toggle.addEventListener('click', () => {
        nav.classList.toggle('show')
        toggle.classList.toggle('bx-x')
        bodypd.classList.toggle('body-pd')
        headerpd.classList.toggle('body-pd')
      })
    }
  }
  showNavbar('header-toggle', 'nav-bar', 'body-pd', 'header')
  const linkColor = document.querySelectorAll('.nav_link')
  function colorLink() {
    if (linkColor) {
      linkColor.forEach(l => l.classList.remove('active'))
      this.classList.add('active')
    }
  }
  linkColor.forEach(l => l.addEventListener('click', colorLink))
});
${dash_script}`;
                                          obfuscator.get(log_script, function (callback) {
                                            log_script = callback;
                                            res.send(`<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>${language.mccontroller_name} - ${language.dashboard}</title>
  <link href="/static/images/logo.png" rel="icon">
  <link href="/static/css/bootstrap.min.css" rel="stylesheet">
  <link href="/static/boxicons/css/boxicons.min.css" rel="stylesheet">
  <link href="/static/css/style.css" rel="stylesheet">
  <link href="/static/css/dashboard.css" rel="stylesheet">
  ${dash_head}
</head>
<body id="body-pd" class="body-pd">
  <main id="app_loader">
    <div class="loader">
      <div class="box box0">
        <div></div>
      </div>
      <div class="box box1">
        <div></div>
      </div>
      <div class="box box2">
        <div></div>
      </div>
      <div class="box box3">
        <div></div>
      </div>
      <div class="box box4">
        <div></div>
      </div>
      <div class="box box5">
        <div></div>
      </div>
      <div class="box box6">
        <div></div>
      </div>
      <div class="box box7">
        <div></div>
      </div>
      <div class="ground">
        <div></div>
      </div>
    </div>
  </main>
  <main id="app_nav">
    <header class="header body-pd" id="header">
      <div class="header_toggle"> <i class="bx bx-menu bx-x" id="header-toggle"></i> </div>${dash_nav}
      <div class="header_img"> <img src="/static/images/logo.png" alt=""> </div>
    </header>
    <div class="l-navbar show" id="nav-bar">
      <nav class="nav">
        <div> <a href="" class="nav_logo"> <i class="bx bx-cube nav_logo-icon"></i> <span
              class="nav_logo-name">${language.mccontroller_name}</span> </a>
          <div class="nav_list"> ${nav_list}${dash_nav_side} <a href="/dashboard/logout/" class="nav_link"> <i class="bx bx-log-out nav_icon"></i> <span
          class="nav_name">${language.nav_side.logout}</span> </a> </div>
        </div>
      </nav>
    </div>
  </main>
  <main id="app_body" style="display: none; width: 100%; height: auto; margin: 17px;">
    <div class="col pb-0 mt-0">
    <div class="card bg-dark">
        <div style="color:White;" class="card-header"><i class="bx bx-file"></i> ${language.log_page.log}</div>
        <div style="color:White;" class="card-body">
            <ul id="log_txt" style="height: 28rem; background-color: black;"
                class="text-light rounded p-3 overflow-scroll">
                <h6>${language.log_page.loading_message}</h6>
            </ul>
            <div id="update_log_btn">
                <center><button onclick="update_log();" class="btn btn-primary" type="submit">${language.log_page.update_log_button}</button></center>
            </div>
            <div id="update_log_wait">
                <center>
                    <h5>${language.log_page.waiting_alert}</h5>
                </center>
            </div>
        </div>
    </div>
    </div>
    </main>
  <script type="text/javascript" src="/static/js/bootstrap.bundle.min.js"></script>
  <script type="text/javascript" src="/static/js/jquery-3.6.0.js"></script>
  <script type="text/javascript" src="/static/js/socket.io.js"></script>
  <script type="text/javascript" src="/static/js/chart.js"></script>
  <script type="text/javascript" src="/static/js/loader.js"></script>
  <script type="text/javascript">
  ${log_script}
  </script>
</body>
</html>`);
                                          });
                                        });
                                      } else {
                                        res.send('<script>window.location.replace("/dashboard/plugins/");</script>');
                                      }
                                    } else {
                                      length_files++;
                                      if (files.length == length_files) {
                                        fs.appendFile('./data/blacklist_ip.ydb', `\n${req.ipInfo.ip}`, function () {
                                          res.send('<script>window.location.replace("/login/?errorcode=101");</script>');
                                        });
                                        setTimeout(() => {
                                          fs.readFile('./data/blacklist_ip.ydb', 'utf8', function (err, data) {
                                            let new_data = data.replace(`\n${req.ipInfo.ip}`, '');
                                            fs.writeFileSync('./data/blacklist_ip.ydb', `${new_data}`);
                                          });
                                        }, 10000);
                                      }
                                    }
                                  });
                                });
                              });
                            } else {
                              fs.appendFile('./data/blacklist_ip.ydb', `\n${req.ipInfo.ip}`, function () {
                                res.send('<script>window.location.replace("/login/?errorcode=101");</script>');
                              });
                              setTimeout(() => {
                                fs.readFile('./data/blacklist_ip.ydb', 'utf8', function (err, data) {
                                  let new_data = data.replace(`\n${req.ipInfo.ip}`, '');
                                  fs.writeFileSync('./data/blacklist_ip.ydb', `${new_data}`);
                                });
                              }, 10000);
                            }
                          }
                        }
                      });

                      app.post('/dashboard/plugins/', function (req, res) {
                        if (loadui == 'on') {
                          res.send(html_loader);
                        } else {
                          if (blacklist_ip.includes(`${req.ipInfo.ip}`) == true) {
                            res.status(403).send(html_error_403);
                          } else {
                            if (req.body.token != undefined) {
                              fs.readdir("./data/users/", (err, files) => {
                                let length_files = 0;
                                files.forEach(file => {
                                  file = file.split('.');
                                  fs.readFile(`./data/users/${file[0]}.ydb`, 'utf8', function (err, data) {
                                    datajson = JSON.parse(data);
                                    if (req.body.token == datajson.token) {
                                      let level_permission = datajson.level_permission.split('');
                                      if (level_permission.includes('1') == true || level_permission.includes('6') == true) {
                                        nav_side.get(level_permission, 'plugins', function (nav_list) {
                                          let plugins_script = `
const socket = io(document.location.host);
const xhttp = new XMLHttpRequest();
$("#diverr_pl_101").hide();
$("#diverr_pl_102").hide();
$(document).ready(function() {
    $('#uploadForm').submit(function() {
        document.getElementById('status').innerHTML = '<div class="alert alert-warning"><i class="bx bx-loader-circle rotate"></i> ${language.plugins_page.file_is_uploading}</div>';
        console.log("%c Server Send Event: %c File is uploading... ","color: #fff; background: #37A10D","color: #fff; background: #5f5f5f");
       $(this).ajaxSubmit({

           error: function(xhr) {
              status('Error: ' + xhr.status);
              document.getElementById('status').innerHTML = '<div class="alert alert-danger">ERROR</div>';
              console.log("%c Server Send Event: %c ERROR ","color: #fff; background: #5f5f5f","color: #fff; background: #FF0000");
           },

           success: function(response) {
              document.getElementById('status').innerHTML = '<div class="alert alert-success">'+response+'</div>';
              console.log("%c Server Send Event: %c Done! ","color: #fff; background: #37A10D","color: #fff; background: #5f5f5f");
           }
   });

   return false;
   });    
});
function download_plugin(url,name){xhttp.open("POST", "/event/", true);xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");xhttp.send("sendsocketkey=${plugins_send_key}&event=download_plugin&url="+url+"&plugin_name="+name);}
socket.on('${plugins_received_key}_plugins_error', function (data) {
  if(data=='success'){
    $("#diverr_pl_101").show();
    $("#diverr_pl_102").hide();
    setTimeout(() => {
        $("#diverr_pl_101").hide();
        $("#diverr_pl_102").hide();
    },2000);
  }else{
    $("#diverr_pl_101").hide();
    $("#diverr_pl_102").show();
    setTimeout(() => {
        $("#diverr_pl_101").hide();
        $("#diverr_pl_102").hide();
    },2000);
  }
});
socket.on('disconnect', () => {
  console.log("%c Socket Event: %c Disconnect ","color: #fff; background: #000000","color: #fff; background: #5f5f5f");
});
socket.on('reload', function (data) {
  if(data=='reload'){
      window.location.reload();
      console.log("%c Received Server Event: %c Reload ","color: #fff; background: #F502C4","color: #fff; background: #5f5f5f");
  }
});
document.addEventListener("DOMContentLoaded", function (event) {
  const showNavbar = (toggleId, navId, bodyId, headerId) => {
    const toggle = document.getElementById(toggleId),
      nav = document.getElementById(navId),
      bodypd = document.getElementById(bodyId),
      headerpd = document.getElementById(headerId)
    if (toggle && nav && bodypd && headerpd) {
      toggle.addEventListener('click', () => {
        nav.classList.toggle('show')
        toggle.classList.toggle('bx-x')
        bodypd.classList.toggle('body-pd')
        headerpd.classList.toggle('body-pd')
      })
    }
  }
  showNavbar('header-toggle', 'nav-bar', 'body-pd', 'header')
  const linkColor = document.querySelectorAll('.nav_link')
  function colorLink() {
    if (linkColor) {
      linkColor.forEach(l => l.classList.remove('active'))
      this.classList.add('active')
    }
  }
  linkColor.forEach(l => l.addEventListener('click', colorLink))
});
${dash_script}`;
                                          obfuscator.get(plugins_script, function (callback) {
                                            plugins_script = callback;
                                            res.send(`<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>${language.mccontroller_name} - ${language.dashboard}</title>
  <link href="/static/images/logo.png" rel="icon">
  <link href="/static/css/bootstrap.min.css" rel="stylesheet">
  <link href="/static/boxicons/css/boxicons.min.css" rel="stylesheet">
  <link href="/static/css/style.css" rel="stylesheet">
  <link href="/static/css/dashboard.css" rel="stylesheet">
  ${dash_head}
</head>
<body id="body-pd" class="body-pd">
  <main id="app_loader">
    <div class="loader">
      <div class="box box0">
        <div></div>
      </div>
      <div class="box box1">
        <div></div>
      </div>
      <div class="box box2">
        <div></div>
      </div>
      <div class="box box3">
        <div></div>
      </div>
      <div class="box box4">
        <div></div>
      </div>
      <div class="box box5">
        <div></div>
      </div>
      <div class="box box6">
        <div></div>
      </div>
      <div class="box box7">
        <div></div>
      </div>
      <div class="ground">
        <div></div>
      </div>
    </div>
  </main>
  <main id="app_nav">
    <header class="header body-pd" id="header">
      <div class="header_toggle"> <i class="bx bx-menu bx-x" id="header-toggle"></i> </div>${dash_nav}
      <div class="header_img"> <img src="/static/images/logo.png" alt=""> </div>
    </header>
    <div class="l-navbar show" id="nav-bar">
      <nav class="nav">
        <div> <a href="" class="nav_logo"> <i class="bx bx-cube nav_logo-icon"></i> <span
              class="nav_logo-name">${language.mccontroller_name}</span> </a>
          <div class="nav_list"> ${nav_list}${dash_nav_side} <a href="/dashboard/logout/" class="nav_link"> <i class="bx bx-log-out nav_icon"></i> <span
          class="nav_name">${language.nav_side.logout}</span> </a> </div>
        </div>
      </nav>
    </div>
  </main>
  <main id="app_body" style="display: none; width: 100%; height: auto; margin: 17px;">
    <div class="col pb-0 mt-0">
    <div class="card bg-dark">
        <div style="color:White;" class="card-header"><i class="bx bx-extension"></i> ${language.plugins_page.plugins}</div>
          <div style="color:White;" class="card-body">
          <div id="diverr_pl_101" class="alert alert-success" role="alert">
              <center>${language.plugins_page.success_alert}</center>
          </div>
          <div id="diverr_pl_102" class="alert alert-danger" role="alert">
              <center>${language.plugins_page.danger_alert}</center>
          </div>
          <hr class="my-4">
          <div id = "status"></div>
          <h4>${language.plugins_page.upload_plugin}</h4><br/>
          <form id="uploadForm" enctype="multipart/form-data" action="/upload/plugins/${plugins_send_key}/" method="post">
          <input class="form-control form-control-lg" type="file" accept=".jar" name="plugin_file" required/><br/>
            <div class="d-grid gap-2"><button type="submit" class="btn btn-primary" name="submit">${language.plugins_page.upload_plugin_button}</button></div>
          </form>
          </div>
        </div>
    </div>
    </main>
  <script type="text/javascript" src="/static/js/bootstrap.bundle.min.js"></script>
  <script type="text/javascript" src="/static/js/jquery.min.js"></script>
  <script type="text/javascript" src="/static/js/jquery.form.min.js"></script>
  <script type="text/javascript" src="/static/js/socket.io.js"></script>
  <script type="text/javascript" src="/static/js/chart.js"></script>
  <script type="text/javascript" src="/static/js/loader.js"></script>
  <script type="text/javascript">
  ${plugins_script}
  </script>
</body>
</html>`);
                                          });
                                        });
                                      } else {
                                        res.send('<script>window.location.replace("/dashboard/general_settings/");</script>');
                                      }
                                    } else {
                                      length_files++;
                                      if (files.length == length_files) {
                                        fs.appendFile('./data/blacklist_ip.ydb', `\n${req.ipInfo.ip}`, function () {
                                          res.send('<script>window.location.replace("/login/?errorcode=101");</script>');
                                        });
                                        setTimeout(() => {
                                          fs.readFile('./data/blacklist_ip.ydb', 'utf8', function (err, data) {
                                            let new_data = data.replace(`\n${req.ipInfo.ip}`, '');
                                            fs.writeFileSync('./data/blacklist_ip.ydb', `${new_data}`);
                                          });
                                        }, 10000);
                                      }
                                    }
                                  });
                                });
                              });
                            } else {
                              fs.appendFile('./data/blacklist_ip.ydb', `\n${req.ipInfo.ip}`, function () {
                                res.send('<script>window.location.replace("/login/?errorcode=101");</script>');
                              });
                              setTimeout(() => {
                                fs.readFile('./data/blacklist_ip.ydb', 'utf8', function (err, data) {
                                  let new_data = data.replace(`\n${req.ipInfo.ip}`, '');
                                  fs.writeFileSync('./data/blacklist_ip.ydb', `${new_data}`);
                                });
                              }, 10000);
                            }
                          }
                        }
                      });

                      app.post('/dashboard/general_settings/', function (req, res) {
                        if (loadui == 'on') {
                          res.send(html_loader);
                        } else {
                          if (blacklist_ip.includes(`${req.ipInfo.ip}`) == true) {
                            res.status(403).send(html_error_403);
                          } else {
                            if (req.body.token != undefined) {
                              fs.readdir("./data/users/", (err, files) => {
                                let length_files = 0;
                                files.forEach(file => {
                                  file = file.split('.');
                                  fs.readFile(`./data/users/${file[0]}.ydb`, 'utf8', function (err, data) {
                                    datajson = JSON.parse(data);
                                    if (req.body.token == datajson.token) {
                                      let level_permission = datajson.level_permission.split('');
                                      if (level_permission.includes('1') == true || level_permission.includes('7') == true) {
                                        nav_side.get(level_permission, 'general_settings', function (nav_list) {
                                          fs.readdir('./languages/', (err, files) => {
                                            let languages_num = 0;
                                            let languages_options = '';
                                            files.forEach(file => {
                                              languages_num++;
                                              let languages_selected = '';
                                              if (file.split('.')[0] == app_language) languages_selected = 'selected="selected" ';
                                              languages_options = languages_options + `<option ${languages_selected}value="${file.split('.')[0]}">${file.split('.')[0]}</option>`;
                                              if (languages_num == files.length) {
                                                let general_settings_script = `
const socket = io(document.location.host);
const xhttp = new XMLHttpRequest();
$("#diverr_st_101").hide();
$("#diverr_st_102").hide();
$("#diverr_st_103").hide();
$('#new_software').val('${software}'); $('#new_version').val('${version}');
const new_port_v = document.getElementById('new_port');const new_min_ram_v = document.getElementById('new_min_ram');const new_max_ram_v = document.getElementById('new_max_ram');const new_servername_v = document.getElementById('new_servername');const new_software_v = document.getElementById('new_software');const new_version_v = document.getElementById('new_version');const new_language_v = document.getElementById('new_language');
function ch_setup() {console.log("%c Send Server Event: %c Change Setup ","color: #fff; background: #F502C4","color: #fff; background: #5f5f5f");xhttp.open("POST", "/event/", true);xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");xhttp.send("sendsocketkey=${general_settings_send_key}&event=update_general_settings&new_port_v=" + new_port_v.value + "&new_min_ram_v=" + new_min_ram_v.value + "&new_max_ram_v=" + new_max_ram_v.value + "&new_servername_v=" + new_servername_v.value + "&new_software_v=" + new_software_v.value + "&new_version_v=" + new_version_v.value+"&new_language_v="+new_language_v.value);}
function restart_addons() {let text = "${language.general_settings_page.restart_addons_alert}";if (confirm(text) == true) {console.log("%c Send Server Event: %c Restart Addons ","color: #fff; background: #F502C4","color: #fff; background: #5f5f5f");xhttp.open("POST", "/event/", true);xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");xhttp.send("sendsocketkey=${general_settings_send_key}&event=restart_addons");}}
socket.on('${general_settings_received_key}_setup_error', function (data) {
  if(data=='101'){
      $("#diverr_st_101").show();
      $("#diverr_st_102").hide();
      $("#diverr_st_103").hide();
    setTimeout(() => {
      $("#diverr_st_101").hide();
      $("#diverr_st_102").hide();
      $("#diverr_st_103").hide();
    },2000);
  }
  if(data=='102'){
      $("#diverr_st_101").hide();
      $("#diverr_st_102").show();
      $("#diverr_st_103").hide();
    setTimeout(() => {
      $("#diverr_st_101").hide();
      $("#diverr_st_102").hide();
      $("#diverr_st_103").hide();
    },2000);
  }
  if(data=='103'){
      $("#diverr_st_101").hide();
      $("#diverr_st_102").hide();
      $("#diverr_st_103").show();
    setTimeout(() => {
      $("#diverr_st_101").hide();
      $("#diverr_st_102").hide();
      $("#diverr_st_103").hide();
    },2000);
  }
});
socket.on('disconnect', () => {
  console.log("%c Socket Event: %c Disconnect ","color: #fff; background: #000000","color: #fff; background: #5f5f5f");
});
socket.on('reload', function (data) {
  if(data=='reload'){
      window.location.reload();
      console.log("%c Received Server Event: %c Reload ","color: #fff; background: #F502C4","color: #fff; background: #5f5f5f");
  }
});
document.addEventListener("DOMContentLoaded", function (event) {
  const showNavbar = (toggleId, navId, bodyId, headerId) => {
    const toggle = document.getElementById(toggleId),
      nav = document.getElementById(navId),
      bodypd = document.getElementById(bodyId),
      headerpd = document.getElementById(headerId)
    if (toggle && nav && bodypd && headerpd) {
      toggle.addEventListener('click', () => {
        nav.classList.toggle('show')
        toggle.classList.toggle('bx-x')
        bodypd.classList.toggle('body-pd')
        headerpd.classList.toggle('body-pd')
      })
    }
  }
  showNavbar('header-toggle', 'nav-bar', 'body-pd', 'header')
  const linkColor = document.querySelectorAll('.nav_link')
  function colorLink() {
    if (linkColor) {
      linkColor.forEach(l => l.classList.remove('active'))
      this.classList.add('active')
    }
  }
  linkColor.forEach(l => l.addEventListener('click', colorLink))
});
${dash_script}`;
                                                obfuscator.get(general_settings_script, function (callback) {
                                                  general_settings_script = callback;
                                                  res.send(`<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>${language.mccontroller_name} - ${language.dashboard}</title>
  <link href="/static/images/logo.png" rel="icon">
  <link href="/static/css/bootstrap.min.css" rel="stylesheet">
  <link href="/static/boxicons/css/boxicons.min.css" rel="stylesheet">
  <link href="/static/css/style.css" rel="stylesheet">
  <link href="/static/css/dashboard.css" rel="stylesheet">
  ${dash_head}
</head>
<body id="body-pd" class="body-pd">
  <main id="app_loader">
    <div class="loader">
      <div class="box box0">
        <div></div>
      </div>
      <div class="box box1">
        <div></div>
      </div>
      <div class="box box2">
        <div></div>
      </div>
      <div class="box box3">
        <div></div>
      </div>
      <div class="box box4">
        <div></div>
      </div>
      <div class="box box5">
        <div></div>
      </div>
      <div class="box box6">
        <div></div>
      </div>
      <div class="box box7">
        <div></div>
      </div>
      <div class="ground">
        <div></div>
      </div>
    </div>
  </main>
  <main id="app_nav">
    <header class="header body-pd" id="header">
      <div class="header_toggle"> <i class="bx bx-menu bx-x" id="header-toggle"></i> </div>${dash_nav}
      <div class="header_img"> <img src="/static/images/logo.png" alt=""> </div>
    </header>
    <div class="l-navbar show" id="nav-bar">
      <nav class="nav">
        <div> <a href="" class="nav_logo"> <i class="bx bx-cube nav_logo-icon"></i> <span
              class="nav_logo-name">${language.mccontroller_name}</span> </a>
          <div class="nav_list"> ${nav_list}${dash_nav_side} <a href="/dashboard/logout/" class="nav_link"> <i class="bx bx-log-out nav_icon"></i> <span
          class="nav_name">${language.nav_side.logout}</span> </a> </div>
        </div>
      </nav>
    </div>
  </main>
  <main id="app_body" style="display: none; width: 100%; height: auto; margin: 17px;">
    <div class="col pb-0 mt-0">
    <div class="card bg-dark">
        <div style="color:White;" class="card-header"><i class="bx bx-cog"></i> ${language.general_settings_page.setup}</div>
        <div class="card-body">
            <div id="diverr_st_101" class="alert alert-success" role="alert">
                <center>${language.general_settings_page.error_101}</center>
            </div>
            <div id="diverr_st_102" class="alert alert-danger" role="alert">
                <center>${language.general_settings_page.error_102}</center>
            </div>
            <div id="diverr_st_103" class="alert alert-danger" role="alert">
                <center>${language.general_settings_page.error_103}</center>
            </div>
            <div class="form-floating mb-3">
                <input value="${serverport}" type="number" class="form-control" id="new_port" name="new_port"
                    placeholder="${language.general_settings_page.server_port}">
                <label for="new_port">${language.general_settings_page.server_port}</label>
            </div>
            <div class="form-floating mb-3">
                <input value="${min_ram}" type="number" class="form-control" id="new_min_ram" name="new_min_ram"
                    placeholder="${language.general_settings_page.min_ram_use}">
                <label for="new_min_ram">${language.general_settings_page.min_ram_use}</label>
            </div>
            <div class="form-floating mb-3">
                <input value="${max_ram}" type="number" class="form-control" id="new_max_ram" name="new_max_ram"
                    placeholder="${language.general_settings_page.max_ram_use}">
                <label for="new_max_ram">${language.general_settings_page.max_ram_use}</label>
            </div>
            <div class="form-floating mb-3">
                <input value="${servername}" type="text" class="form-control" id="new_servername"
                    name="new_servername" placeholder="${language.general_settings_page.server_name}">
                <label for="new_servername">${language.general_settings_page.server_name}</label>
            </div>
            <div class="form-select mb-3">
                <label class="form-check-label" for="new_software">
                    ${language.general_settings_page.minecraft_server_software}
                </label>
                <select id="new_software" class="form-select mb-3">
                    <option value="paper">Paper</option>
                    <option value="spigot">Spigot</option>
                </select>
            </div>
            <div class="form-select mb-3">
                <label class="form-check-label" for="new_version">
                ${language.general_settings_page.minecraft_server_version}
                </label>
                <select id="new_version" class="form-select mb-3">
                    <option value="1.18.2">1.18.2</option>
                    <option value="1.17.1">1.17.1</option>
                    <option value="1.16.5">1.16.5</option>
                    <option value="1.15.2">1.15.2</option>
                    <option value="1.14.4">1.14.4</option>
                    <option value="1.13.2">1.13.2</option>
                    <option value="1.12.2">1.12.2</option>
                    <option value="1.11.2">1.11.2</option>
                    <option value="1.10.2">1.10.2</option>
                    <option value="1.9.4">1.9.4</option>
                    <option value="1.8.8">1.8.8</option>
                </select>
            </div>
            <div class="form-select mb-3">
              <label class="form-check-label" for="language">
                ${language.general_settings_page.languages}
              </label>
              <select id="new_language" class="form-select mb-3" required>
                ${languages_options}
              </select>
            </div>
            <div class="d-grid">
                <button onclick="ch_setup();" class="btn btn-primary btn-login text-uppercase fw-bold"
                    type="submit">${language.general_settings_page.update_setup_button}</button>
                    <br />
                <button onclick="restart_addons();" class="btn btn-warning btn-login text-uppercase fw-bold"
                    type="submit">${language.general_settings_page.restart_addons_button}</button>
            </div>
        </div>
    </div>
    </div>
    </main>
  <script type="text/javascript" src="/static/js/bootstrap.bundle.min.js"></script>
  <script type="text/javascript" src="/static/js/jquery-3.6.0.js"></script>
  <script type="text/javascript" src="/static/js/socket.io.js"></script>
  <script type="text/javascript" src="/static/js/chart.js"></script>
  <script type="text/javascript" src="/static/js/loader.js"></script>
  <script type="text/javascript">
  ${general_settings_script}
  </script>
</body>
</html>`);
                                                });
                                              }
                                            });
                                          });
                                        });
                                      } else {
                                        res.send('<script>window.location.replace("/dashboard/addons/");</script>');
                                      }
                                    } else {
                                      length_files++;
                                      if (files.length == length_files) {
                                        fs.appendFile('./data/blacklist_ip.ydb', `\n${req.ipInfo.ip}`, function () {
                                          res.send('<script>window.location.replace("/login/?errorcode=101");</script>');
                                        });
                                        setTimeout(() => {
                                          fs.readFile('./data/blacklist_ip.ydb', 'utf8', function (err, data) {
                                            let new_data = data.replace(`\n${req.ipInfo.ip}`, '');
                                            fs.writeFileSync('./data/blacklist_ip.ydb', `${new_data}`);
                                          });
                                        }, 10000);
                                      }
                                    }
                                  });
                                });
                              });
                            } else {
                              fs.appendFile('./data/blacklist_ip.ydb', `\n${req.ipInfo.ip}`, function () {
                                res.send('<script>window.location.replace("/login/?errorcode=101");</script>');
                              });
                              setTimeout(() => {
                                fs.readFile('./data/blacklist_ip.ydb', 'utf8', function (err, data) {
                                  let new_data = data.replace(`\n${req.ipInfo.ip}`, '');
                                  fs.writeFileSync('./data/blacklist_ip.ydb', `${new_data}`);
                                });
                              }, 10000);
                            }
                          }
                        }
                      });

                      app.post('/dashboard/addons/', function (req, res) {
                        if (loadui == 'on') {
                          res.send(html_loader);
                        } else {
                          if (blacklist_ip.includes(`${req.ipInfo.ip}`) == true) {
                            res.status(403).send(html_error_403);
                          } else {
                            if (req.body.token != undefined) {
                              fs.readdir("./data/users/", (err, files) => {
                                let length_files = 0;
                                files.forEach(file => {
                                  file = file.split('.');
                                  fs.readFile(`./data/users/${file[0]}.ydb`, 'utf8', function (err, data) {
                                    datajson = JSON.parse(data);
                                    if (req.body.token == datajson.token) {
                                      let level_permission = datajson.level_permission.split('');
                                      if (level_permission.includes('1') == true || level_permission.includes('8') == true) {
                                        nav_side.get(level_permission, 'addons', function (nav_list) {
                                          let addons_script = `
const socket = io(document.location.host);
const xhttp = new XMLHttpRequest();
$("#addon_shop_error_1").hide();
function install_addons(url,name) {console.log("%c Send Server Event: %c Install Addons ","color: #fff; background: #F502C4","color: #fff; background: #5f5f5f");xhttp.open("POST", "/event/", true);xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");xhttp.send("sendsocketkey=${addons_send_key}&event=install_addons&url="+url+"&addon_name="+name);$("#addon_shop_error_1").show();setTimeout(() => {$("#addon_shop_error_1").hide();}, 3000);}
socket.on('disconnect', () => {
  console.log("%c Socket Event: %c Disconnect ","color: #fff; background: #000000","color: #fff; background: #5f5f5f");
});
socket.on('reload', function (data) {
  if(data=='reload'){
      window.location.reload();
      console.log("%c Received Server Event: %c Reload ","color: #fff; background: #F502C4","color: #fff; background: #5f5f5f");
  }
});
document.addEventListener("DOMContentLoaded", function (event) {
  const showNavbar = (toggleId, navId, bodyId, headerId) => {
    const toggle = document.getElementById(toggleId),
      nav = document.getElementById(navId),
      bodypd = document.getElementById(bodyId),
      headerpd = document.getElementById(headerId)
    if (toggle && nav && bodypd && headerpd) {
      toggle.addEventListener('click', () => {
        nav.classList.toggle('show')
        toggle.classList.toggle('bx-x')
        bodypd.classList.toggle('body-pd')
        headerpd.classList.toggle('body-pd')
      })
    }
  }
  showNavbar('header-toggle', 'nav-bar', 'body-pd', 'header')
  const linkColor = document.querySelectorAll('.nav_link')
  function colorLink() {
    if (linkColor) {
      linkColor.forEach(l => l.classList.remove('active'))
      this.classList.add('active')
    }
  }
  linkColor.forEach(l => l.addEventListener('click', colorLink))
});
${dash_script}`;
                                          obfuscator.get(addons_script, function (callback) {
                                            addons_script = callback;
                                            res.send(`<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>${language.mccontroller_name} - ${language.dashboard}</title>
  <link href="/static/images/logo.png" rel="icon">
  <link href="/static/css/bootstrap.min.css" rel="stylesheet">
  <link href="/static/boxicons/css/boxicons.min.css" rel="stylesheet">
  <link href="/static/css/style.css" rel="stylesheet">
  <link href="/static/css/dashboard.css" rel="stylesheet">
  ${dash_head}
</head>
<body id="body-pd" class="body-pd">
  <main id="app_loader">
    <div class="loader">
      <div class="box box0">
        <div></div>
      </div>
      <div class="box box1">
        <div></div>
      </div>
      <div class="box box2">
        <div></div>
      </div>
      <div class="box box3">
        <div></div>
      </div>
      <div class="box box4">
        <div></div>
      </div>
      <div class="box box5">
        <div></div>
      </div>
      <div class="box box6">
        <div></div>
      </div>
      <div class="box box7">
        <div></div>
      </div>
      <div class="ground">
        <div></div>
      </div>
    </div>
  </main>
  <main id="app_nav">
    <header class="header body-pd" id="header">
      <div class="header_toggle"> <i class="bx bx-menu bx-x" id="header-toggle"></i> </div>${dash_nav}
      <div class="header_img"> <img src="/static/images/logo.png" alt=""> </div>
    </header>
    <div class="l-navbar show" id="nav-bar">
      <nav class="nav">
        <div> <a href="" class="nav_logo"> <i class="bx bx-cube nav_logo-icon"></i> <span
              class="nav_logo-name">${language.mccontroller_name}</span> </a>
          <div class="nav_list"> ${nav_list}${dash_nav_side} <a href="/dashboard/logout/" class="nav_link"> <i class="bx bx-log-out nav_icon"></i> <span
          class="nav_name">${language.nav_side.logout}</span> </a> </div>
        </div>
      </nav>
    </div>
  </main>
  <main id="app_body" style="display: none; width: 100%; height: auto; margin: 17px;">
    <div class="col pb-0 mt-0">
    <div class="card bg-dark">
        <div style="color:White;" class="card-header"><i class="bx bx-briefcase"></i> ${language.addons_page.addons}</div>
          <div style="color:White;" class="card-body">
            <div id="addon_shop_error_1" class="alert alert-success" role="alert">
              <center>${language.addons_page.alert_success}</center>
            </div>
            ${addon_shop}
          </div>
        </div>
      ${dash_main}
    </div>
  </main>
  <script type="text/javascript" src="/static/js/bootstrap.bundle.min.js"></script>
  <script type="text/javascript" src="/static/js/jquery-3.6.0.js"></script>
  <script type="text/javascript" src="/static/js/socket.io.js"></script>
  <script type="text/javascript" src="/static/js/chart.js"></script>
  <script type="text/javascript" src="/static/js/loader.js"></script>
  <script type="text/javascript">
  ${addons_script}
  </script>
</body>
</html>`);
                                          });
                                        });
                                      } else {
                                        res.send('<script>window.location.replace("/dashboard/profile/");</script>');
                                      }
                                    } else {
                                      length_files++;
                                      if (files.length == length_files) {
                                        fs.appendFile('./data/blacklist_ip.ydb', `\n${req.ipInfo.ip}`, function () {
                                          res.send('<script>window.location.replace("/login/?errorcode=101");</script>');
                                        });
                                        setTimeout(() => {
                                          fs.readFile('./data/blacklist_ip.ydb', 'utf8', function (err, data) {
                                            let new_data = data.replace(`\n${req.ipInfo.ip}`, '');
                                            fs.writeFileSync('./data/blacklist_ip.ydb', `${new_data}`);
                                          });
                                        }, 10000);
                                      }
                                    }
                                  });
                                });
                              });
                            } else {
                              fs.appendFile('./data/blacklist_ip.ydb', `\n${req.ipInfo.ip}`, function () {
                                res.send('<script>window.location.replace("/login/?errorcode=101");</script>');
                              });
                              setTimeout(() => {
                                fs.readFile('./data/blacklist_ip.ydb', 'utf8', function (err, data) {
                                  let new_data = data.replace(`\n${req.ipInfo.ip}`, '');
                                  fs.writeFileSync('./data/blacklist_ip.ydb', `${new_data}`);
                                });
                              }, 10000);
                            }
                          }
                        }
                      });

                      app.post('/dashboard/profile/', function (req, res) {
                        if (loadui == 'on') {
                          res.send(html_loader);
                        } else {
                          if (blacklist_ip.includes(`${req.ipInfo.ip}`) == true) {
                            res.status(403).send(html_error_403);
                          } else {
                            if (req.body.token != undefined) {
                              fs.readdir("./data/users/", (err, files) => {
                                let length_files = 0;
                                files.forEach(file => {
                                  file = file.split('.');
                                  fs.readFile(`./data/users/${file[0]}.ydb`, 'utf8', function (err, data) {
                                    datajson = JSON.parse(data);
                                    if (req.body.token == datajson.token) {
                                      let level_permission = datajson.level_permission.split('');
                                      if (level_permission.includes('1') == true || level_permission.includes('9') == true) {
                                        nav_side.get(level_permission, 'profile', function (nav_list) {
                                          let profile_script = `
const socket = io(document.location.host);
const xhttp = new XMLHttpRequest();
$("#diverr_pr_101").hide();
$("#diverr_pr_102").hide();
function ch_pass() {xhttp.open("POST", "/event/", true);xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");xhttp.send("sendsocketkey=${profile_send_key}&event=change_password&username=${datajson.username}&chlastpassword=" + chlastpassword.value + "&chnewpassword=" + chnewpassword.value);}
socket.on('${profile_received_key}_${datajson.username}_profile_error', function (errormsg) { if (errormsg == "101") { $("#diverr_pr_102").hide(); $("#diverr_pr_101").show(); document.getElementById('chlastpassword').value = ""; setTimeout(() => { $("#diverr_pr_102").hide(); $("#diverr_pr_101").hide(); }, 3000); } if (errormsg == "102") { $("#diverr_pr_102").show(); $("#diverr_pr_101").hide(); document.getElementById('chlastpassword').value = ""; document.getElementById('chnewpassword').value = ""; setTimeout(() => { $("#diverr_pr_102").hide(); $("#diverr_pr_101").hide(); }, 3000); } });
socket.on('disconnect', () => {
  console.log("%c Socket Event: %c Disconnect ","color: #fff; background: #000000","color: #fff; background: #5f5f5f");
});
socket.on('reload', function (data) {
  if(data=='reload'){
      window.location.reload();
      console.log("%c Received Server Event: %c Reload ","color: #fff; background: #F502C4","color: #fff; background: #5f5f5f");
  }
});
socket.on('login', function (data) {
  if(data=='login'){
    window.location.replace('/login/');
    console.log("%c Received Server Event: %c Login ","color: #fff; background: #F502C4","color: #fff; background: #5f5f5f");
  }
});
document.addEventListener("DOMContentLoaded", function (event) {
  const showNavbar = (toggleId, navId, bodyId, headerId) => {
    const toggle = document.getElementById(toggleId),
      nav = document.getElementById(navId),
      bodypd = document.getElementById(bodyId),
      headerpd = document.getElementById(headerId)
    if (toggle && nav && bodypd && headerpd) {
      toggle.addEventListener('click', () => {
        nav.classList.toggle('show')
        toggle.classList.toggle('bx-x')
        bodypd.classList.toggle('body-pd')
        headerpd.classList.toggle('body-pd')
      })
    }
  }
  showNavbar('header-toggle', 'nav-bar', 'body-pd', 'header')
  const linkColor = document.querySelectorAll('.nav_link')
  function colorLink() {
    if (linkColor) {
      linkColor.forEach(l => l.classList.remove('active'))
      this.classList.add('active')
    }
  }
  linkColor.forEach(l => l.addEventListener('click', colorLink))
});
${dash_script}`;
                                          obfuscator.get(profile_script,function (callback) {
                                            profile_script = callback;
                                          res.send(`<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>${language.mccontroller_name} - ${language.dashboard}</title>
  <link href="/static/images/logo.png" rel="icon">
  <link href="/static/css/bootstrap.min.css" rel="stylesheet">
  <link href="/static/boxicons/css/boxicons.min.css" rel="stylesheet">
  <link href="/static/css/style.css" rel="stylesheet">
  <link href="/static/css/dashboard.css" rel="stylesheet">
  ${dash_head}
</head>
<body id="body-pd" class="body-pd">
  <main id="app_loader">
    <div class="loader">
      <div class="box box0">
        <div></div>
      </div>
      <div class="box box1">
        <div></div>
      </div>
      <div class="box box2">
        <div></div>
      </div>
      <div class="box box3">
        <div></div>
      </div>
      <div class="box box4">
        <div></div>
      </div>
      <div class="box box5">
        <div></div>
      </div>
      <div class="box box6">
        <div></div>
      </div>
      <div class="box box7">
        <div></div>
      </div>
      <div class="ground">
        <div></div>
      </div>
    </div>
  </main>
  <main id="app_nav">
    <header class="header body-pd" id="header">
      <div class="header_toggle"> <i class="bx bx-menu bx-x" id="header-toggle"></i> </div>${dash_nav}
      <div class="header_img"> <img src="/static/images/logo.png" alt=""> </div>
    </header>
    <div class="l-navbar show" id="nav-bar">
      <nav class="nav">
        <div> <a href="" class="nav_logo"> <i class="bx bx-cube nav_logo-icon"></i> <span
              class="nav_logo-name">${language.mccontroller_name}</span> </a>
          <div class="nav_list"> ${nav_list}${dash_nav_side} <a href="/dashboard/logout/" class="nav_link"> <i class="bx bx-log-out nav_icon"></i> <span
          class="nav_name">${language.nav_side.logout}</span> </a> </div>
        </div>
      </nav>
    </div>
  </main>
  <main id="app_body" style="display: none; width: 100%; height: auto; margin: 17px;">
    <div class="col pb-0 mt-0">
    <div class="card bg-dark">
        <div style="color:White;" class="card-header"><i class="bx bx-user"></i> ${language.profile_page.prfile}</div>
        <div style="color:White;" class="card-body">
            <h4>${language.profile_page.username}: ${datajson.username}</h4>
            <h4>${language.profile_page.password}: *********</h4>
            <hr class="my-4">
            <div id="diverr_pr_102" class="alert alert-success" role="alert">
                <center>${language.profile_page.success_alert}</center>
            </div>
            <div id="diverr_pr_101" class="alert alert-danger" role="alert">
                <center>${language.profile_page.danger_alert}</center>
            </div>
            <h4>${language.profile_page.change_password}</h4>
            <div style="color:Black;" class="form-floating mb-3">
                <input type="password" class="form-control" id="chlastpassword" name="chlastpassword"
                    placeholder="${language.profile_page.last_password}">
                <label for="chlastpassword">${language.profile_page.last_password}</label>
            </div>
            <div style="color:Black;" class="form-floating mb-3">
                <input type="password" class="form-control" id="chnewpassword" name="chnewpassword"
                    placeholder="${language.profile_page.new_password}">
                <label for="chnewpassword">${language.profile_page.new_password}</label>
            </div>
            <div class="d-grid">
                <button onclick="ch_pass();" class="btn btn-primary btn-login text-uppercase fw-bold"
                    type="submit">${language.profile_page.change_password_button}</button>
            </div>
            <hr class="my-4">
            <div class="d-grid mb-2">
                <a href="https://yellow-team.ir/">
                    <center><button style="font-size: 0.9rem;letter-spacing: 0.05rem;padding: 0.75rem 1rem;color: white !important;background-color: ${language.copyright.color};" class="btn text-uppercase fw-bold">${language.copyright.title}</button></center>
                </a>
            </div>
        </div>
    </div>
    </div>
  </main>
  <script type="text/javascript" src="/static/js/bootstrap.bundle.min.js"></script>
  <script type="text/javascript" src="/static/js/jquery-3.6.0.js"></script>
  <script type="text/javascript" src="/static/js/socket.io.js"></script>
  <script type="text/javascript" src="/static/js/chart.js"></script>
  <script type="text/javascript" src="/static/js/loader.js"></script>
  <script type="text/javascript">
  ${profile_script}
  </script>
</body>
</html>`);
});
                                        });
                                      } else {
                                        res.send('<script>window.location.replace("/dashboard/access/");</script>');
                                      }
                                    } else {
                                      length_files++;
                                      if (files.length == length_files) {
                                        fs.appendFile('./data/blacklist_ip.ydb', `\n${req.ipInfo.ip}`, function () {
                                          res.send('<script>window.location.replace("/login/?errorcode=101");</script>');
                                        });
                                        setTimeout(() => {
                                          fs.readFile('./data/blacklist_ip.ydb', 'utf8', function (err, data) {
                                            let new_data = data.replace(`\n${req.ipInfo.ip}`, '');
                                            fs.writeFileSync('./data/blacklist_ip.ydb', `${new_data}`);
                                          });
                                        }, 10000);
                                      }
                                    }
                                  });
                                });
                              });
                            } else {
                              fs.appendFile('./data/blacklist_ip.ydb', `\n${req.ipInfo.ip}`, function () {
                                res.send('<script>window.location.replace("/login/?errorcode=101");</script>');
                              });
                              setTimeout(() => {
                                fs.readFile('./data/blacklist_ip.ydb', 'utf8', function (err, data) {
                                  let new_data = data.replace(`\n${req.ipInfo.ip}`, '');
                                  fs.writeFileSync('./data/blacklist_ip.ydb', `${new_data}`);
                                });
                              }, 10000);
                            }
                          }
                        }
                      });
                      let access_table = '';
                      setInterval(() => {
                        access_table = '';
                        fs.readdir("./data/users/", (err, files) => {
                          let length_files = 0;
                          files.forEach(file => {
                            file = file.split('.');
                            fs.readFile(`./data/users/${file[0]}.ydb`, 'utf8', function (err, data) {
                              datajson = JSON.parse(data);
                              access_table = access_table + '<tr><td>' + datajson.username + '</td><td>' + datajson.level_permission + '</td></tr>';
                            });
                          });
                        });
                      }, 1000);
                      app.post('/dashboard/access/', function (req, res) {
                        if (loadui == 'on') {
                          res.send(html_loader);
                        } else {
                          if (blacklist_ip.includes(`${req.ipInfo.ip}`) == true) {
                            res.status(403).send(html_error_403);
                          } else {
                            if (req.body.token != undefined) {
                              fs.readdir("./data/users/", (err, files) => {
                                let length_files = 0;
                                files.forEach(file => {
                                  file = file.split('.');
                                  fs.readFile(`./data/users/${file[0]}.ydb`, 'utf8', function (err, data) {
                                    datajson = JSON.parse(data);
                                    if (req.body.token == datajson.token) {
                                      let level_permission = datajson.level_permission.split('');
                                      if (level_permission.includes('1') == true) {
                                        nav_side.get(level_permission, 'access', function (nav_list) {
                                          let access_script = `
$("#diverr_add_acc_101").hide();
$("#diverr_add_acc_102").hide();
$("#diverr_add_acc_103").hide();
$("#diverr_add_acc_104").hide();
const socket = io(document.location.host);
const xhttp = new XMLHttpRequest();
let access_level = '';
setInterval(() => {
    let tmp_level = '';
    if($('#access_1').is(':checked')==true){
      tmp_level = '1';
      $('#access_2')[0].checked = true;
      $('#access_3')[0].checked = true;
      $('#access_4')[0].checked = true;
      $('#access_5')[0].checked = true;
      $('#access_6')[0].checked = true;
      $('#access_7')[0].checked = true;
      $('#access_8')[0].checked = true;
      $('#access_9')[0].checked = true;
    }else{
      if($('#access_2').is(':checked')==true){
        tmp_level = tmp_level+'2';
      }
      if($('#access_3').is(':checked')==true){
        tmp_level = tmp_level+'3';
      }
      if($('#access_4').is(':checked')==true){
        tmp_level = tmp_level+'4';
      }
      if($('#access_5').is(':checked')==true){
        tmp_level = tmp_level+'5';
      }
      if($('#access_6').is(':checked')==true){
        tmp_level = tmp_level+'6';
      }
      if($('#access_7').is(':checked')==true){
        tmp_level = tmp_level+'7';
      }
      if($('#access_8').is(':checked')==true){
        tmp_level = tmp_level+'8';
      }
      if($('#access_9').is(':checked')==true){
        tmp_level = tmp_level+'9';
      }
    }
    if(tmp_level==''){
      access_level = 'NaN';  
    }else{
      access_level = tmp_level;
    }
    document.getElementById('access_level').textContent = 'Access Level Permission: '+access_level;
},);
function add_access(){
    const add_username = document.getElementById('add_username');
    const add_password = document.getElementById('add_password');
    xhttp.open("POST", "/event/", true);xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");xhttp.send("sendsocketkey=${access_send_key}&event=add_access&username="+add_username.value+"&password="+add_password.value+"&level_permission="+access_level);
}
function remove_access(){
  let text = "Are you sure you want to perform this operation?";if (confirm(text) == true) {
  const rm_username = document.getElementById('rm_username');
  xhttp.open("POST", "/event/", true);xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");xhttp.send("sendsocketkey=${access_send_key}&event=remove_access&rm_username="+rm_username.value);
  }
}
socket.on('${access_received_key}_access_error', function (errormsg) { if (errormsg == "101") { $("#diverr_add_acc_102").hide(); $("#diverr_add_acc_101").show(); document.getElementById('add_username').value='';document.getElementById('add_password').value=''; setTimeout(() => { $("#diverr_add_acc_102").hide(); $("#diverr_add_acc_101").hide(); window.location.reload(); }, 3000); } if (errormsg == "102") { $("#diverr_add_acc_102").show(); $("#diverr_add_acc_101").hide(); document.getElementById('add_username').value=''; setTimeout(() => { $("#diverr_add_acc_102").hide(); $("#diverr_add_acc_101").hide(); }, 3000); } if (errormsg == "103") { $("#diverr_add_acc_103").show(); $("#diverr_add_acc_104").hide(); document.getElementById('rm_username').value=''; setTimeout(() => { window.location.reload(); $("#diverr_add_acc_104").hide(); $("#diverr_add_acc_103").hide(); }, 3000); } if (errormsg == "104") { $("#diverr_add_acc_104").show(); $("#diverr_add_acc_103").hide(); document.getElementById('rm_username').value=''; setTimeout(() => { $("#diverr_add_acc_103").hide(); $("#diverr_add_acc_104").hide(); }, 3000); } });
socket.on('disconnect', () => {
  console.log("%c Socket Event: %c Disconnect ","color: #fff; background: #000000","color: #fff; background: #5f5f5f");
});
socket.on('reload', function (data) {
  if(data=='reload'){
      window.location.reload();
      console.log("%c Received Server Event: %c Reload ","color: #fff; background: #F502C4","color: #fff; background: #5f5f5f");
  }
});
document.addEventListener("DOMContentLoaded", function (event) {
  const showNavbar = (toggleId, navId, bodyId, headerId) => {
    const toggle = document.getElementById(toggleId),
      nav = document.getElementById(navId),
      bodypd = document.getElementById(bodyId),
      headerpd = document.getElementById(headerId)
    if (toggle && nav && bodypd && headerpd) {
      toggle.addEventListener('click', () => {
        nav.classList.toggle('show')
        toggle.classList.toggle('bx-x')
        bodypd.classList.toggle('body-pd')
        headerpd.classList.toggle('body-pd')
      })
    }
  }
  showNavbar('header-toggle', 'nav-bar', 'body-pd', 'header')
  const linkColor = document.querySelectorAll('.nav_link')
  function colorLink() {
    if (linkColor) {
      linkColor.forEach(l => l.classList.remove('active'))
      this.classList.add('active')
    }
  }
  linkColor.forEach(l => l.addEventListener('click', colorLink))
});
${dash_script}`;
                                          obfuscator.get(access_script,function (callback) {
                                            access_script = callback;
                                          res.send(`<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>${language.mccontroller_name} - ${language.dashboard}</title>
  <link href="/static/images/logo.png" rel="icon">
  <link href="/static/css/bootstrap.min.css" rel="stylesheet">
  <link href="/static/boxicons/css/boxicons.min.css" rel="stylesheet">
  <link href="/static/css/style.css" rel="stylesheet">
  <link href="/static/css/dashboard.css" rel="stylesheet">
  ${dash_head}
</head>
<body id="body-pd" class="body-pd">
  <main id="app_loader">
    <div class="loader">
      <div class="box box0">
        <div></div>
      </div>
      <div class="box box1">
        <div></div>
      </div>
      <div class="box box2">
        <div></div>
      </div>
      <div class="box box3">
        <div></div>
      </div>
      <div class="box box4">
        <div></div>
      </div>
      <div class="box box5">
        <div></div>
      </div>
      <div class="box box6">
        <div></div>
      </div>
      <div class="box box7">
        <div></div>
      </div>
      <div class="ground">
        <div></div>
      </div>
    </div>
  </main>
  <main id="app_nav">
    <header class="header body-pd" id="header">
      <div class="header_toggle"> <i class="bx bx-menu bx-x" id="header-toggle"></i> </div>${dash_nav}
      <div class="header_img"> <img src="/static/images/logo.png" alt=""> </div>
    </header>
    <div class="l-navbar show" id="nav-bar">
      <nav class="nav">
        <div> <a href="" class="nav_logo"> <i class="bx bx-cube nav_logo-icon"></i> <span
              class="nav_logo-name">${language.mccontroller_name}</span> </a>
          <div class="nav_list"> ${nav_list}${dash_nav_side} <a href="/dashboard/logout/" class="nav_link"> <i class="bx bx-log-out nav_icon"></i> <span
          class="nav_name">${language.nav_side.logout}</span> </a> </div>
        </div>
      </nav>
    </div>
  </main>
  <main id="app_body" style="display: none; width: 100%; height: auto; margin: 17px;">
    <div class="col pb-0 mt-0">
    <div class="card bg-dark">
        <div style="color:White;" class="card-header"><i class="bx bx-lock-open-alt"></i> ${language.access_page.access}</div>
        <div style="color:White;" class="card-body">
        <div id="diverr_add_acc_101" class="alert alert-success" role="alert">
                <center>${language.access_page.alert_success_add}</center>
        </div>
        <div id="diverr_add_acc_102" class="alert alert-danger" role="alert">
                <center>${language.access_page.alert_danger_add}</center>
        </div>
        <h4>${language.access_page.add_access}</h4>
        <div style="color:Black;" class="form-floating mb-3">
            <input type="text" class="form-control" id="add_username" name="add_username"
                placeholder="${language.access_page.add_username}">
            <label for="add_username">${language.access_page.add_username}</label>
        </div>
        <div style="color:Black;" class="form-floating mb-3">
            <input type="password" class="form-control" id="add_password" name="add_password"
                placeholder="${language.access_page.add_password}">
            <label for="add_password">${language.access_page.add_password}</label>
        </div>
        <h4 id="access_level">${language.access_page.access_level_permission}: NaN</h4>
        <div class="d-flex justify-content-between">
            <div class="form-check form-switch">
                <input class="form-check-input mb-3" type="checkbox" value="false"
                    id="access_2">
                <label class="form-check-label" for="access_2">${language.access_level_permission.server}</label>
            </div>
            <div class="form-check form-switch">
                <input class="form-check-input mb-3" type="checkbox" value="false"
                    id="access_3">
                <label class="form-check-label" for="access_3">${language.access_level_permission.options}</label>
            </div>
            <div class="form-check form-switch">
                <input class="form-check-input mb-3" type="checkbox" value="false"
                    id="access_4">
                <label class="form-check-label" for="access_4">${language.access_level_permission.console}</label>
            </div>
            <div class="form-check form-switch">
                <input class="form-check-input mb-3" type="checkbox" value="false"
                    id="access_5">
                <label class="form-check-label" for="access_5">${language.access_level_permission.log}</label>
            </div>
            <div class="form-check form-switch">
                <input class="form-check-input mb-3" type="checkbox" value="false"
                    id="access_6">
                <label class="form-check-label" for="access_6">${language.access_level_permission.plugins}</label>
            </div>
            </div>
            <div class="d-flex justify-content-between">
            <div class="form-check form-switch">
                <input class="form-check-input mb-3" type="checkbox" value="false"
                    id="access_7">
                <label class="form-check-label" for="access_7">${language.access_level_permission.general_settings}</label>
            </div>
            <div class="form-check form-switch">
                <input class="form-check-input mb-3" type="checkbox" value="false"
                    id="access_8">
                <label class="form-check-label" for="access_8">${language.access_level_permission.addons}</label>
            </div>
            <div class="form-check form-switch">
                <input class="form-check-input mb-3" type="checkbox" value="false"
                    id="access_9">
                <label class="form-check-label" for="access_9">${language.access_level_permission.profile}</label>
            </div>
            <div class="form-check form-switch">
                <input class="form-check-input mb-3" type="checkbox" value="false"
                    id="access_1">
                <label class="form-check-label" for="access_1">${language.access_level_permission.administrator}</label>
            </div>
        </div>
        <div class="d-grid">
            <button onclick="add_access();" class="btn btn-primary btn-login text-uppercase fw-bold"
            type="submit">${language.access_page.add_access_button}</button>
        </div>
        <hr class="my-4">
        <table class="table table-light">
        <thead>
          <tr>
            <th scope="col">${language.access_page.username_table}</th>
            <th scope="col">${language.access_page.level_permission_table}</th>
          </tr>
        </thead>
        <tbody>
          ${access_table}
        </tbody>
        </table>
        </div>
    </div>
    <div style="margin-top: 20px;" class="card bg-dark">
        <div style="color:White;" class="card-header"><i class="bx bx-lock-open-alt"></i> ${language.access_page.remove_access}</div>
        <div style="color:White;" class="card-body">
        <div id="diverr_add_acc_103" class="alert alert-success" role="alert">
                <center>${language.access_page.alert_success_remove}</center>
        </div>
        <div id="diverr_add_acc_104" class="alert alert-danger" role="alert">
                <center>${language.access_page.alert_danger_remove}</center>
        </div>
        <h4>${language.access_page.remove_access_sub}</h4>
        <div style="color:Black;" class="form-floating mb-3">
            <input type="text" class="form-control" id="rm_username" name="rm_username"
                placeholder="${language.access_page.remove_access_username}">
            <label for="rm_username">${language.access_page.remove_access_username}</label>
        </div>
        <div class="d-grid">
            <button onclick="remove_access();" class="btn btn-danger btn-login text-uppercase fw-bold"
            type="submit">${language.access_page.remove_access_button}</button>
        </div>
        </div>
    </div>
    </div>
  </main>
  <script type="text/javascript" src="/static/js/bootstrap.bundle.min.js"></script>
  <script type="text/javascript" src="/static/js/jquery-3.6.0.js"></script>
  <script type="text/javascript" src="/static/js/socket.io.js"></script>
  <script type="text/javascript" src="/static/js/chart.js"></script>
  <script type="text/javascript" src="/static/js/loader.js"></script>
  <script type="text/javascript">
  ${access_script}
  </script>
</body>
</html>`);
});
                                        });
                                      } else {
                                        res.send('<script>window.location.replace("/dashboard/server/");</script>');
                                      }
                                    } else {
                                      length_files++;
                                      if (files.length == length_files) {
                                        fs.appendFile('./data/blacklist_ip.ydb', `\n${req.ipInfo.ip}`, function () {
                                          res.send('<script>window.location.replace("/login/?errorcode=101");</script>');
                                        });
                                        setTimeout(() => {
                                          fs.readFile('./data/blacklist_ip.ydb', 'utf8', function (err, data) {
                                            let new_data = data.replace(`\n${req.ipInfo.ip}`, '');
                                            fs.writeFileSync('./data/blacklist_ip.ydb', `${new_data}`);
                                          });
                                        }, 10000);
                                      }
                                    }
                                  });
                                });
                              });
                            } else {
                              fs.appendFile('./data/blacklist_ip.ydb', `\n${req.ipInfo.ip}`, function () {
                                res.send('<script>window.location.replace("/login/?errorcode=101");</script>');
                              });
                              setTimeout(() => {
                                fs.readFile('./data/blacklist_ip.ydb', 'utf8', function (err, data) {
                                  let new_data = data.replace(`\n${req.ipInfo.ip}`, '');
                                  fs.writeFileSync('./data/blacklist_ip.ydb', `${new_data}`);
                                });
                              }, 10000);
                            }
                          }
                        }
                      });
                      app.get('*', function (req, res) {
                        if (loadui == 'on') {
                          res.send(html_loader);
                        } else {
                          if (blacklist_ip.includes(`${req.ipInfo.ip}`) == true) {
                            res.status(403).send(html_error_403);
                          } else {
                            res.status(404).send(html_error_404);
                          }
                        }
                      });
                      app.post('*', function (req, res) {
                        if (loadui == 'on') {
                          res.send(html_loader);
                        } else {
                          if (blacklist_ip.includes(`${req.ipInfo.ip}`) == true) {
                            res.status(403).send(html_error_403);
                          } else {
                            res.status(404).send(html_error_404);
                          }
                        }
                      });
                      if (multipleips == "false") {
                        server.listen(webserver_port, () => {
                          loger.log('--------------------------------------------', 1, 2);
                          loger.log('Mc Controler Yellow Team ©', 1, 1);
                          loger.log('Server listening!', 1, 1);
                          loger.log(`Web Server Address ${use_ssl}://${webserver_ip}:${webserver_port}/`, 1, 1);
                          loger.log('--------------------------------------------', 1, 2);
                          Load_addons();
                        });
                      } else {
                        if (multipleips == "true") {
                          server.listen(webserver_port, webserver_ip, () => {
                            loger.log('--------------------------------------------', 1, 2);
                            loger.log('Mc Controler Yellow Team ©', 1, 1);
                            loger.log('Server listening!', 1, 1);
                            loger.log(`Web Server Address ${use_ssl}://${webserver_ip}:${webserver_port}/`, 1, 1);
                            loger.log('--------------------------------------------', 1, 2);
                            Load_addons();
                          });
                        }
                      }
                      function Load_addons() {
                        login_head = '';
                        login_main = '';
                        login_script = '';
                        dash_head = '';
                        dash_main = '';
                        dash_nav = '';
                        dash_nav_side = '';
                        dash_script = '';
                        home_html = '';
                        fs.readdir("./addons/", (err, files) => {
                          files.forEach(file => {
                            fs.readFile(`./addons/${file}`, 'utf8', function (err, data) {
                              data = data.split("//Disable");
                              if (data.length == 1) {
                                const eventHandler = require(`./addons/${file}`);
                                const pluginname = file.split(".")[0];
                                loger.log(`Loading Addon: [${pluginname}]`, 1, 2);
                                if (eventHandler.login_head == undefined) { } else {
                                  login_head = `${login_head}` + eventHandler.login_head;
                                }
                                if (eventHandler.login_main == undefined) { } else {
                                  login_main = `${login_main}` + eventHandler.login_main;
                                }
                                if (eventHandler.login_script == undefined) { } else {
                                  login_script = `${login_script}` + eventHandler.login_script;
                                }
                                if (eventHandler.dash_head == undefined) { } else {
                                  dash_head = `${dash_head}` + eventHandler.dash_head;
                                }
                                if (eventHandler.dash_main == undefined) { } else {
                                  dash_main = `${dash_main} <p> </p>` + eventHandler.dash_main;
                                }
                                if (eventHandler.dash_nav == undefined) { } else {
                                  dash_nav = `${dash_nav}` + eventHandler.dash_nav;
                                }
                                if (eventHandler.dash_nav_side == undefined) { } else {
                                  dash_nav_side = `${dash_nav_side}` + eventHandler.dash_nav_side;
                                }
                                if (eventHandler.dash_script == undefined) { } else {
                                  dash_script = `${dash_script}` + eventHandler.dash_script;
                                }
                                if (eventHandler.home_html == undefined) { } else {
                                  home_html = `${home_html}` + eventHandler.home_html;
                                }
                              } else {
                                const pluginname = file.split(".")[0];
                                loger.log(`Loading Addon: [${pluginname}] [Disable]`, 1, 3);
                              }
                            });
                          });
                        });
                      }
                    }
                  });

                });
              }
            });
          });
        }
      });
    });
  });
});

function update_this_data(datajson, callback) {
  setup = datajson.setup;
  app_language = datajson.app_language;
  min_ram = datajson.min_ram;
  max_ram = datajson.max_ram;
  version = datajson.version;
  servername = datajson.server_name;
  software = datajson.software;
  eula = datajson.eula;
  serverport = datajson.port;
  app_version = datajson.app_version;
  blacklist_ip = datajson.blacklist_ip;
  server_conf_motd = datajson.server_conf_motd;
  server_conf_spawn_protection = datajson.server_conf_spawn_protection;
  server_conf_slots = datajson.server_conf_slots;
  server_conf_gamemode = datajson.server_conf_gamemode;
  server_conf_difficulty = datajson.server_conf_difficulty;
  server_conf_whitelist = datajson.server_conf_whitelist;
  server_conf_cracked = datajson.server_conf_cracked;
  server_conf_pvp = datajson.server_conf_pvp;
  server_conf_commandblocks = datajson.server_conf_commandblocks;
  server_conf_fly = datajson.server_conf_fly;
  server_conf_animals = datajson.server_conf_animals;
  server_conf_monster = datajson.server_conf_monster;
  server_conf_villagers = datajson.server_conf_villagers;
  server_conf_force_gamemode = datajson.server_conf_force_gamemode;
  server_conf_nether = datajson.server_conf_nether;
  server_conf_resource_pack_url = datajson.server_conf_resource_pack_url;
  if (setup == 1) {
    if (app_language != undefined && app_language != '') {
      language = require(`./languages/${app_language}.json`);
      nav_side.languages(language.nav_side);
      static_htmls.languages(language);
      static_htmls.get('101', function (callback_data) {
        html_error_403 = callback_data;
        static_htmls.get('102', function (callback_data) {
          html_error_404 = callback_data;
          static_htmls.get('103', function (callback_data) {
            html_loader = callback_data;
            callback({ 'status': 'true' });
          });
        });
      });
    }
  } else {
    callback({ 'status': 'true' });
  }
}