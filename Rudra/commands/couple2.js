module.exports.config = {
  name: "couple",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "PREM BABU",
  description: "Couple Dp photos",
  usePrefix: true,
  commandCategory: "Random-IMG",
  usages: "coupledp2",
  cooldowns: 2,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }

};

module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
    var link = [
"https://i.imgur.com/g7woYNY.jpg","https://i.imgur.com/0jDiNmQ.jpg","https://i.imgur.com/3OX7sWP.jpg","https://i.imgur.com/IthNc1C.jpg","https://i.imgur.com/1RoN4la.jpg","https://i.imgur.com/vcfIO27.jpg","https://i.imgur.com/8yWRoMe.jpg","https://i.imgur.com/nku8dTF.jpg","https://i.imgur.com/V32qQb0.jpg","https://i.imgur.com/lkem5Gd.jpg","https://i.imgur.com/QIpV0AY.jpg","https://i.imgur.com/zdnDEtm.jpg","https://i.imgur.com/w7eKGSy.jpg","https://i.imgur.com/ONCJm5B.jpg","https://i.imgur.com/oQavLMr.jpg","https://i.imgur.com/MuBToNp.jpg","https://i.imgur.com/JrMY7j8.jpg","https://i.imgur.com/MauPoyi.jpg","https://i.imgur.com/t1B6vz1.jpg","https://i.imgur.com/VT200cX.jpg","https://i.imgur.com/9HTasfZ.jpg","https://i.imgur.com/waeDhYd.jpg","https://i.imgur.com/5dHsVO8.jpg","https://i.imgur.com/rrWIcrz.jpg","https://i.imgur.com/nEVUP1b.jpg","https://i.imgur.com/iHqdCMp.jpg","https://i.imgur.com/YHsbqM7.jpg","https://i.imgur.com/5ZQOCmT.jpg","https://i.imgur.com/AvoyQyk.jpg","https://i.imgur.com/MCuS0xn.jpg","https://i.imgur.com/c8yiwxR.jpg"
     ];
     var callback = () => api.sendMessage({body:`┏━━━━━┓\n    ✬✿╭┳✪✪╤───────────➛➣ ★✪��(baby)✪��★  ✬✿╭┳✪✪╤───────────➛➣                   ✧═══•❁💞❁•═══✧\n┗━━━━━┛\n\n♥️`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
   };
module.exports.config = {
  name: "hijabdp",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "ARYAN",
  description: "hijab dp photos",
  commandCategory: "Random-IMG",
  usages: "hijab dp",
  cooldowns: 2,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
    
};

module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
    var link = [
"https://i.imgur.com/J9rVPLk.jpeg","https://i.imgur.com/VtwiJXL.jpeg","https://i.imgur.com/yDPVddc.jpeg","","https://i.imgur.com/48lKPK9.jpg","https://i.imgur.com/vrnbex5.jpeg","https://i.imgur.com/Idp5Fou.jpeg","https://i.imgur.com/i0bf2NH.jpeg","https://i.imgur.com/fwpuE33.jpeg","https://i.imgur.com/2T8YS6z.jpeg","https://i.imgur.com/zMLkgIR.jpeg","https://i.imgur.com/RSBMljP.jpeg","https://i.imgur.com/qdLLYYh.jpeg","https://i.imgur.com/5iL4hzG.jpeg","https://i.imgur.com/GB9RPIi.jpeg","https://i.imgur.com/g48OJ5K.jpeg","https://i.imgur.com/FrdWCzb.jpeg","https://i.imgur.com/3gK2HKa.jpeg","https://i.imgur.com/Y02gm0q.jpeg","https://i.imgur.com/PBPEivF.jpeg","https://i.imgur.com/kOAz0gL.jpeg","https://i.imgur.com/nTiHmrn.jpeg","https://i.imgur.com/MIHnrNM.jpeg","https://i.imgur.com/3zLtjOM.jpeg","https://i.imgur.com/Zvxcnkc.jpeg","https://i.imgur.com/2Afrd9f.jpeg","https://i.imgur.com/eF6BYND.jpeg","https://i.imgur.com/j40WeXi.jpeg","https://i.imgur.com/NQmKY5F.jpeg","https://i.imgur.com/WLODMFz.jpeg","https://i.imgur.com/WLODMFz.jpeg","https://i.imgur.com/puNIfZi.jpeg","https://i.imgur.com/SemgPSo.jpeg","https://i.imgur.com/02hoIZe.jpeg","https://i.imgur.com/2xapuqt.jpeg","https://i.imgur.com/fkwYP04.jpeg","https://i.imgur.com/kLmnim9.jpeg","https://i.imgur.com/Mpf78zC.jpeg","https://i.imgur.com/r50Majy.jpeg","https://i.imgur.com/lcQLrjQ.jpeg","https://i.imgur.com/h8X9JBX.jpeg","https://i.imgur.com/y5YQfUr.jpeg","https://i.imgur.com/VI3oQMa.jpeg","https://i.imgur.com/xjkgb20.jpeg","https://i.imgur.com/U38xLAQ.jpeg","https://i.imgur.com/RaX6U9m.jpeg","https://i.imgur.com/82qHJeN.jpeg","https://i.imgur.com/gPlk1gN.jpeg","https://i.imgur.com/5LRtZza.jpeg","https://i.imgur.com/4U0nxQJ.jpeg","https://i.imgur.com/ENa7joI.jpeg","https://i.imgur.com/yomfhxH.jpeg","https://i.imgur.com/5RssfyN.jpeg","https://i.imgur.com/xCcEIdB.jpeg"
     ];
     var callback = () => api.sendMessage({body:`☟  ========== ☟ ==========  ☟                                                         ●===========================●                              𝐎𝐰𝐧𝐞𝐫➻ ╔╬⓼★⓼╃───────➣™𝐃𝐀𝐍𝐈 𝐌𝐀𝐋𝐈𝐊𝄠━─━Ⓔ╰✾✾®️╀✿✿╀─━ↈⓇ⧐⧐💐`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
   };
