//	HYPE.documents["index"]

(function(){(function m(){function k(a,b,c,d){var e=!1;null==window[a]&&(null==window[b]?(window[b]=[],window[b].push(m),a=document.getElementsByTagName("head")[0],b=document.createElement("script"),e=l,false==!0&&(e=""),b.type="text/javascript",""!=d&&(b.integrity=d,b.setAttribute("crossorigin","anonymous")),b.src=e+"/"+c,a.appendChild(b)):window[b].push(m),e=!0);return e}var l="index.hyperesources",f="index",g="index_hype_container";if(false==
!1)try{for(var c=document.getElementsByTagName("script"),a=0;a<c.length;a++){var d=c[a].src,b=null!=d?d.indexOf("/index_hype_generated_script.js"):-1;if(-1!=b){l=d.substr(0,b);break}}}catch(p){}c=navigator.userAgent.match(/MSIE (\d+\.\d+)/);c=parseFloat(c&&c[1])||null;d=!0==(null!=window.HYPE_674F||null!=window.HYPE_dtl_674F)||true==!0||null!=c&&10>c;a=!0==d?"HYPE-674.full.min.js":"HYPE-674.thin.min.js";c=!0==d?"F":"T";d=d?"":
"";if(false==!1&&(a=k("HYPE_674"+c,"HYPE_dtl_674"+c,a,d),false==!0&&(a=a||k("HYPE_w_674","HYPE_wdtl_674","HYPE-674.waypoints.min.js","")),false==!0&&(a=a||k("Matter","HYPE_pdtl_674","HYPE-674.physics.min.js","")),a))return;d=window.HYPE.documents;if(null!=d[f]){b=1;a=f;do f=""+a+"-"+b++;while(null!=d[f]);for(var e=document.getElementsByTagName("div"),
b=!1,a=0;a<e.length;a++)if(e[a].id==g&&null==e[a].getAttribute("HYP_dn")){var b=1,h=g;do g=""+h+"-"+b++;while(null!=document.getElementById(g));e[a].id=g;b=!0;break}if(!1==b)return}b=[];b=[{name:"cardClicked",source:"function(hypeDocument, element, event) {\t\n\tvar bgString = hypeDocument.getElementById(element.id).style.backgroundImage.search(\"cardBack\");\n\t\n\tif ((GAMESTATE != 0) && (GAMESTATE != 3) && (bgString != -1)) {\n\t\tvar temp1 = element.id;\n\t\tvar temp2 = temp1.slice(8);\n\t\tvar temp3 = \"url('\" + hypeDocument.resourcesFolderURL() + \"/\" + SHUFFLEEDLIST[temp2] + \"')\";\n\n\t\tif (GAMESTATE == 1) {\n\t\t\thypeDocument.getElementById(element.id).style.backgroundImage = temp3;\n\t\t\tMATCH1 = SHUFFLEEDLIST[temp2];\n\t\t\tPOSITION1 = element.id;\n\t\t\thypeDocument.startTimelineNamed('match1');\n\t\t\tGAMESTATE = 2;\n\t\t} else if (GAMESTATE == 2) {\n\t\t\tMATCH2 = SHUFFLEEDLIST[temp2];\n\t\t\tif (MATCH1 == MATCH2) { // FOUND A MATCH\n\t\t\t\thypeDocument.getElementById(element.id).style.backgroundImage = temp3;\n\t\t\t\tPAIRSREMAINING--;\n\t\t\t\tif (PAIRSREMAINING == 0) {\n\t\t\t\t\tclearInterval(TIMERINTERVAL);\n\t\t\t\t\tFINALSCORE = parseInt(hypeDocument.getElementById(\"timerValue\").innerHTML);\n\t\t\t\t\tvar messageString = \"YOU FINISHED IN<br/>\" + FINALSCORE + \" SECONDS!\";\n\t\t\t\t\thypeDocument.getElementById(\"finishedMessage\").innerHTML = messageString;\n\t\t\t\t\tGAMESTATE = 0;\n\t\t\t\t\thypeDocument.startTimelineNamed('gameOver');\n\t\t\t\t} else {\n\t\t\t\t\thypeDocument.startTimelineNamed('match2');\n\t\t\t\t}\n\t\t\t\tGAMESTATE = 1;\n\t\t\t} else { // CARDS DID NOT MATCH\n\t\t\t\thypeDocument.startTimelineNamed('badMatch');\n\t\t\t\thypeDocument.getElementById(element.id).style.backgroundImage = temp3;\n\t\t\t\tGAMESTATE = 3;\n\t\t\t\tPOSITION2 = element.id;\n\t\t\t\tCARDBACK = \"url('\" + hypeDocument.resourcesFolderURL() + \"/cardBack.jpg')\";\n\t\t\t\t\n\t\t\t\tsetTimeout(function() { \n\t\t\t\t\thypeDocument.getElementById(POSITION1).style.backgroundImage = CARDBACK; \n\t\t\t\t\thypeDocument.getElementById(POSITION2).style.backgroundImage = CARDBACK;\n\t\t\t\t\thypeDocument.startTimelineNamed('cardFlip');\n\t\t\t\t\tGAMESTATE = 1; \n\t\t\t\t}, 1500);\n\t\t\t}\n\t\t}\n\t}\n\n}",identifier:"29"},{name:"initializeMain",source:"function(hypeDocument, element, event) {\t\n\tORDEREDLIST = new Array(\t\"card0.jpg\", \"card0.jpg\", \"card1.jpg\", \"card1.jpg\", \"card2.jpg\", \"card2.jpg\", \n\t\t\t\t\t\t\t\t\"card3.jpg\", \"card3.jpg\", \"card4.jpg\", \"card4.jpg\", \"card5.jpg\", \"card5.jpg\", \n\t\t\t\t\t\t\t\t\"card6.jpg\", \"card6.jpg\", \"card7.jpg\", \"card7.jpg\", \"card8.jpg\", \"card8.jpg\", \n\t\t\t\t\t\t\t\t\"card9.jpg\", \"card9.jpg\");\n\t\n\tSHUFFLEEDLIST = new Array();\n\tvar i = 0; \n\tfor (i=0; i < 20; i++) {\n\t\tvar temp1 = Math.floor(Math.random()*(ORDEREDLIST.length));\n\t\tSHUFFLEEDLIST[i] = ORDEREDLIST[temp1];\n\t\tORDEREDLIST[temp1] = ORDEREDLIST[0];\n\t\tORDEREDLIST.shift(); \n\t}\n\t\n\tGAMESTATE = 0;\n\tPAIRSREMAINING = 10;\n\tINDEX1 = 19;\n\t\n \tDEALINTERVAL = setInterval(moveIt, 200);\n \t\n\tsetTimeout(function() { // START OF 6 SECOND WAIT TIMEOUT\n\t\thypeDocument.startTimelineNamed('background');\n\n\t\tsetTimeout(function() {\n\t\t\tvar i = 0; \n\t\t\tfor (i=0; i < 20; i++) { // SHOW ALL 20 CARDS INITIALLY\n\t\t\t\tdisplayCards(i, \"show\");\n\t\t\t}\n\t\t}, 1000);\n\t\n\t\tsetTimeout(function() { // CHANGE BACKGROND IMAGES TO cardBack.png AFTER 1.5 SECONDS\n\t\t\tvar i = 0; \n\t\t\tfor (i=0; i < 20; i++) {\n\t\t\t\tdisplayCards(i, \"hide\");\n\t\t\t}\n\t\t}, 2500);\n\t\n\t\tGAMESTATE = 1;\n\t\tTIMERINTERVAL = setInterval(function() { \n\t\t\tvar temp1 = parseInt(hypeDocument.getElementById(\"timerValue\").innerHTML) + 1;\n\t\t\thypeDocument.getElementById(\"timerValue\").innerHTML = temp1;\n\t\t}, 1000);\n\t\n\t}, 6000); // END OF 6 SECOND WAIT TIMEOUT\n\t\n\tfunction displayCards(index, display) { // THIS FUNCTION WILL EITHER SHOW OR HIDE THE CARDS\n\t\tTEMP1 = \"position\" + index;\n\t\tif (display == \"show\") {\n\t\t\tTEMP2 = \"url('\" + hypeDocument.resourcesFolderURL() + \"/\" + SHUFFLEEDLIST[index] + \"')\";\n\t\t} else {\n\t\t\tTEMP2 = \"url('\" + hypeDocument.resourcesFolderURL() + \"/cardBack.jpg')\";\n\t\t}\n\t\thypeDocument.getElementById(TEMP1).style.backgroundImage = TEMP2;\n\t}\n\t\n\tfunction moveIt() {\n\t\tvar temp1 = 'position' + INDEX1;\n\t\tvar temp2 = document.getElementById(temp1);\n\t\tvar temp3;\n\t\tvar temp4;\n\t\tif (INDEX1 < 5) { temp3 = 50; }\n\t\telse if (INDEX1 < 10) { temp3 = 185; }\n\t\telse if (INDEX1 < 15) { temp3 = 320; }\n\t\telse { temp3 = 455}\n\t\tif ((INDEX1%5) == 0) { temp4 = 60; }\n\t\telse if ((INDEX1%5) == 1) { temp4 = 160; }\n\t\telse if ((INDEX1%5) == 2) { temp4 = 260; }\n\t\telse if ((INDEX1%5) == 3) { temp4 = 360; }\n\t\telse { temp4 = 460; }\n\t\thypeDocument.setElementProperty(temp2, 'top', temp3, 0.5, 'linear');\n\t\thypeDocument.setElementProperty(temp2, 'left', temp4, 0.5, 'linear');\n\t\thypeDocument.startTimelineNamed('cardFlip');\n\t\tINDEX1--;\n\t\tif (INDEX1 == -1) {\n\t\t\tclearInterval(DEALINTERVAL);\n\t\t}\n\t}\n\t\n}",identifier:"59"}];e={};h={};for(a=0;a<b.length;a++)try{h[b[a].identifier]=b[a].name,e[b[a].name]=eval("(function(){return "+b[a].source+"})();")}catch(n){window.console&&window.console.log(n),e[b[a].name]=function(){}}c=new window["HYPE_674"+c](f,g,{"-2":{n:"blank.gif"},"18":{p:2,n:"match12.mp3",g:"64",t:"audio/mpeg"},"10":{p:1,n:"card4.jpg",g:"53",t:"@1x"},"19":{p:2,n:"match11.mp3",g:"62",t:"audio/mpeg"},"11":{p:1,n:"card5.jpg",g:"54",t:"@1x"},"0":{p:2,n:"gameOver.mp3",g:"74",t:"audio/mpeg"},"12":{p:1,n:"card6.jpg",g:"55",t:"@1x"},"1":{p:2,n:"cardFlip.mp3",g:"91",t:"audio/mpeg"},"20":{p:2,n:"badMatch2.mp3",g:"66",t:"audio/mpeg"},"2":{p:1,n:"gradient.png",g:"95",t:"@1x"},"13":{p:1,n:"card7.jpg",g:"56",t:"@1x"},"3":{p:1,n:"memoryStencil.png",g:"97",t:"@1x"},"14":{p:1,n:"card8.jpg",g:"57",t:"@1x"},"4":{p:1,n:"cardBack.jpg",g:"28",o:true,t:"@1x"},"5":{p:1,n:"cardBack_2x.jpg",g:"28",o:true,t:"@2x"},"15":{p:1,n:"card9.jpg",g:"58",t:"@1x"},"6":{p:1,n:"card0.jpg",g:"49",t:"@1x"},"16":{p:2,n:"background1.mp3",g:"67",t:"audio/mpeg"},"7":{p:1,n:"card1.jpg",g:"50",t:"@1x"},"-1":{n:"PIE.htc"},"8":{p:1,n:"card2.jpg",g:"51",t:"@1x"},"17":{p:2,n:"conclusion1.mp3",g:"116",t:"audio/mpeg"},"9":{p:1,n:"card3.jpg",g:"52",t:"@1x"}},l,[],e,[{n:"splash",o:"92",X:[0]},{n:"main",o:"1",X:[1]},{n:"credits",o:"106",X:[2]}],
[{o:"94",p:"600px",cA:false,Y:800,Z:600,L:[],c:"#941100",bY:1,d:800,U:{},T:{"105_hover":{q:false,z:1,i:"105_hover",n:"105_hover",a:[{f:"c",y:0,z:1,i:"G",e:"#FFFB00",s:"#FF2600",o:"119"},{y:1,i:"G",s:"#FFFB00",z:0,o:"119",f:"c"}],f:30,b:[]},kTimelineDefaultIdentifier:{q:false,z:4,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{f:"b",y:0,z:4,i:"a",e:-470,s:0,o:"123"},{f:"c",p:2,y:4,z:0,i:"ActionHandler",s:{a:[{b:"kTimelineDefaultIdentifier",p:3,z:false,symbolOid:"93"}]},o:"kTimelineDefaultIdentifier"},{y:4,i:"a",s:-470,z:0,o:"123",f:"c"}],f:30,b:[]}},bZ:180,O:["123","121","120","122","119"],n:"Untitled Layout","_":0,v:{"123":{h:"95",p:"no-repeat",x:"visible",a:0,dB:"img",q:"100% 100%",j:"absolute",r:"inline",z:1,k:"div",b:0,d:300,c:1200},"120":{aU:8,bB:3,G:"#00FDFF",c:784,aV:8,r:"inline",d:44,bC:4,s:"'Hoefler Text',Georgia,'Times New Roman',serif",t:36,Z:"break-word",w:"By : Faysal Yusuf&nbsp;",j:"absolute",x:"visible",aZ:0,k:"div",y:"preserve",z:3,aS:8,aT:8,a:0,bA:"#000",F:"center",b:230},"119":{b:490,z:5,K:"None",c:188,L:"None",d:68,aS:6,M:0,bD:"none",N:0,aT:6,dB:"button",O:0,aU:6,P:0,aV:6,j:"absolute",k:"div",aI:4,aJ:4,aK:4,aL:4,A:"#A0A0A0",B:"#A0A0A0",aM:"105_hover",r:"inline",C:"#A0A0A0",Z:"break-word",s:"Impact,'Arial Narrow Bold',Sans-Serif",D:"#A0A0A0",t:38,F:"center",aA:{a:[{d:1.1,p:1,g:1,e:"1"}]},G:"#FF2600",aP:"pointer",w:"START",x:"visible",I:"None",a:300,y:"preserve",J:"None"},"121":{A:"#000",h:"97",p:"no-repeat",x:"visible",B:"#000",q:"100% 100%",a:0,j:"absolute",D:"#000",r:"inline",C:"#000",b:0,d:300,z:2,dB:"img",k:"div",c:800},"122":{aU:8,bB:3,G:"#00FA92",c:784,aV:8,r:"inline",d:44,bC:3,s:"'Hoefler Text',Georgia,'Times New Roman',serif",t:38,Z:"break-word",w:"Match All 20 Cards As Quickly As Possible",j:"absolute",x:"visible",aZ:0,k:"div",y:"preserve",z:4,aS:8,aT:8,a:0,bA:"#000",F:"center",b:380}}},{A:{a:[{p:4,h:"59"}]},o:"3",p:"600px",cA:false,Y:800,Z:600,c:"#941100",L:[],bY:1,d:800,U:{},T:{"65":{q:false,z:0,i:"65",n:"badMatch",a:[{f:"c",p:2,y:0,z:0,i:"ActionHandler",s:{a:[{p:12,o:"66",q:false}]},o:"65"}],f:30,b:[]},"73":{q:false,z:6.15,i:"73",n:"gameOver",a:[{f:"c",p:2,y:0,z:0.02,i:"ActionHandler",e:{a:[{p:12,o:"74",q:false}]},s:{a:[{p:13,o:"67",q:false}]},o:"73"},{f:"h",y:0,z:0.15,i:"b",e:470,s:-130,o:"131"},{f:"h",y:0,z:0.15,i:"b",e:50,s:-550,o:"151"},{f:"h",y:0,z:0.15,i:"b",e:0,s:-600,o:"147"},{f:"h",y:0,z:0.15,i:"b",e:230,s:-370,o:"128"},{f:"h",y:0,z:0.15,i:"b",e:470,s:-130,o:"135"},{f:"c",p:2,y:0.02,z:0,i:"ActionHandler",s:{a:[{p:12,o:"74",q:false}]},o:"73"},{y:0.15,i:"b",s:470,z:0,o:"131",f:"c"},{y:0.15,i:"b",s:50,z:0,o:"151",f:"c"},{y:0.15,i:"b",s:0,z:0,o:"147",f:"c"},{y:0.15,i:"b",s:230,z:0,o:"128",f:"c"},{y:0.15,i:"b",s:470,z:0,o:"135",f:"c"},{f:"c",y:5,z:1,i:"e",e:1,s:0,o:"131"},{f:"c",y:5.15,z:1,i:"e",e:1,s:0,o:"135"},{y:6,i:"e",s:1,z:0,o:"131",f:"c"},{y:6.15,i:"e",s:1,z:0,o:"135",f:"c"}],f:30,b:[]},"63":{q:false,z:0,i:"63",n:"match2",a:[{f:"c",p:2,y:0,z:0,i:"ActionHandler",s:{a:[{p:12,o:"64",q:false}]},o:"63"}],f:30,b:[]},"71_hover":{q:false,z:1,i:"71_hover",n:"71_hover",a:[{f:"c",y:0,z:1,i:"G",e:"#FFFB00",s:"#FF2600",o:"131"},{y:1,i:"G",s:"#FFFB00",z:0,o:"131",f:"c"}],f:30,b:[]},"118":{q:false,z:0,i:"118",n:"background",a:[{f:"c",p:2,y:0,z:0,i:"ActionHandler",s:{a:[{p:12,o:"67",q:false}]},o:"118"}],f:30,b:[]},"61":{q:false,z:0,i:"61",n:"match1",a:[{f:"c",p:2,y:0,z:0,i:"ActionHandler",s:{a:[{p:12,o:"62",q:false}]},o:"61"}],f:30,b:[]},"90":{q:false,z:0,i:"90",n:"cardFlip",a:[{f:"c",p:2,y:0,z:0,i:"ActionHandler",s:{a:[{p:12,o:"91",q:false}]},o:"90"}],f:30,b:[]},kTimelineDefaultIdentifier:{q:false,z:0,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{f:"c",p:2,y:0,z:0,i:"ActionHandler",s:{a:[]},o:"kTimelineDefaultIdentifier"}],f:30,b:[]},"72_hover":{q:false,z:1,i:"72_hover",n:"72_hover",a:[{f:"c",y:0,z:1,i:"G",e:"#FFFB00",s:"#FF2600",o:"135"},{y:1,i:"G",s:"#FFFB00",z:0,o:"135",f:"c"}],f:30,b:[]}},bZ:180,O:["147","151","128","131","135","143","146","132","136","133","129","124","150","127","149","145","142","139","144","141","138","134","130","126","152","148","125","137","140"],n:"Untitled Layout","_":1,v:{"136":{p:"no-repeat",c:75,q:"100% 100%",d:110,I:"None",J:"None",K:"None",L:"None",aP:"pointer",h:"28",M:0,i:"position6",N:0,A:"#D8DDE4",j:"absolute",x:"visible",B:"#D8DDE4",O:0,P:0,C:"#D8DDE4",z:13,dB:"button",D:"#D8DDE4",aA:{a:[{p:4,h:"29"}]},k:"div",a:14,b:10},"128":{aU:8,bB:2,G:"#FF2600",c:584,aV:8,r:"inline",d:164,bC:2,s:"Impact,'Arial Narrow Bold',Sans-Serif",t:64,Z:"break-word",i:"finishedMessage",w:"YOU FINISHED IN<br>100 SECONDS!",j:"absolute",x:"visible",aZ:0,k:"div",y:"preserve",z:29,aS:8,aT:8,a:0,bA:"#FFF",F:"center",b:-370},"149":{p:"no-repeat",c:75,q:"100% 100%",d:110,I:"None",J:"None",K:"None",L:"None",aP:"pointer",h:"28",M:0,i:"position10",N:0,A:"#D8DDE4",j:"absolute",x:"visible",B:"#D8DDE4",O:0,P:0,C:"#D8DDE4",z:17,dB:"button",D:"#D8DDE4",aA:{a:[{p:4,h:"29"}]},k:"div",a:22,b:10},"140":{aU:8,bB:3,G:"#FFF",c:184,aV:8,r:"inline",d:44,bC:3,s:"'Arial Black',Gadget,Sans-Serif",t:32,Z:"break-word",i:"timerValue",w:"0\n",j:"absolute",x:"visible",aZ:0,k:"div",y:"preserve",z:4,aS:8,aT:8,a:600,bA:"#000",F:"center",b:140},"132":{p:"no-repeat",c:75,q:"100% 100%",d:110,I:"None",J:"None",K:"None",L:"None",aP:"pointer",h:"28",M:0,i:"position0",N:0,A:"#D8DDE4",j:"absolute",x:"visible",B:"#D8DDE4",O:0,P:0,C:"#D8DDE4",z:7,dB:"button",D:"#D8DDE4",aA:{a:[{p:4,h:"29"}]},k:"div",a:2,b:10},"124":{p:"no-repeat",c:75,q:"100% 100%",d:110,I:"None",J:"None",K:"None",L:"None",aP:"pointer",h:"28",M:0,i:"position3",N:0,A:"#D8DDE4",j:"absolute",x:"visible",B:"#D8DDE4",O:0,P:0,C:"#D8DDE4",z:10,dB:"button",D:"#D8DDE4",aA:{a:[{p:4,h:"29"}]},k:"div",a:8,b:10},"145":{p:"no-repeat",c:75,q:"100% 100%",d:110,I:"None",J:"None",K:"None",L:"None",aP:"pointer",h:"28",M:0,i:"position9",N:0,A:"#D8DDE4",j:"absolute",x:"visible",B:"#D8DDE4",O:0,P:0,C:"#D8DDE4",z:16,dB:"button",D:"#D8DDE4",aA:{a:[{p:4,h:"29"}]},k:"div",a:20,b:10},"137":{aU:8,G:"#FFF",c:184,aV:8,r:"inline",d:44,s:"Georgia,Times,'Times New Roman',Serif",t:32,Z:"break-word",i:"timerTitle",w:"TIME",j:"absolute",x:"visible",k:"div",y:"preserve",z:3,aS:8,aT:8,a:600,F:"center",b:80},"129":{p:"no-repeat",c:75,q:"100% 100%",d:110,I:"None",J:"None",K:"None",L:"None",aP:"pointer",h:"28",M:0,i:"position4",N:0,A:"#D8DDE4",j:"absolute",x:"visible",B:"#D8DDE4",O:0,P:0,C:"#D8DDE4",z:11,dB:"button",D:"#D8DDE4",aA:{a:[{p:4,h:"29"}]},k:"div",a:10,b:10},"141":{p:"no-repeat",c:75,q:"100% 100%",d:110,I:"None",J:"None",K:"None",L:"None",aP:"pointer",h:"28",M:0,i:"position15",N:0,A:"#D8DDE4",j:"absolute",x:"visible",B:"#D8DDE4",O:0,P:0,C:"#D8DDE4",z:22,dB:"button",D:"#D8DDE4",aA:{a:[{p:4,h:"29"}]},k:"div",a:32,b:10},"133":{p:"no-repeat",c:75,q:"100% 100%",d:110,I:"None",J:"None",K:"None",L:"None",aP:"pointer",h:"28",M:0,i:"position5",N:0,A:"#D8DDE4",j:"absolute",x:"visible",B:"#D8DDE4",O:0,P:0,C:"#D8DDE4",z:12,dB:"button",D:"#D8DDE4",aA:{a:[{p:4,h:"29"}]},k:"div",a:12,b:10},"125":{aU:8,G:"#FFF",c:184,aV:8,r:"inline",d:44,s:"Georgia,Times,'Times New Roman',Serif",t:32,Z:"break-word",i:"title",w:"MEMORY",j:"absolute",x:"visible",k:"div",y:"preserve",z:2,aS:8,aT:8,a:600,F:"center",b:20},"146":{p:"no-repeat",c:75,q:"100% 100%",d:110,I:"None",J:"None",K:"None",L:"None",aP:"pointer",h:"28",M:0,i:"position1",N:0,A:"#D8DDE4",j:"absolute",x:"visible",B:"#D8DDE4",O:0,P:0,C:"#D8DDE4",z:8,dB:"button",D:"#D8DDE4",aA:{a:[{p:4,h:"29"}]},k:"div",a:4,b:10},"138":{p:"no-repeat",c:75,q:"100% 100%",d:110,I:"None",J:"None",K:"None",L:"None",aP:"pointer",h:"28",M:0,i:"position14",N:0,A:"#D8DDE4",j:"absolute",x:"visible",B:"#D8DDE4",O:0,P:0,C:"#D8DDE4",z:21,dB:"button",D:"#D8DDE4",aA:{a:[{p:4,h:"29"}]},k:"div",a:30,b:10},"150":{p:"no-repeat",c:75,q:"100% 100%",d:110,I:"None",J:"None",K:"None",L:"None",aP:"pointer",h:"28",M:0,i:"position2",N:0,A:"#D8DDE4",j:"absolute",x:"visible",B:"#D8DDE4",O:0,P:0,C:"#D8DDE4",z:9,dB:"button",D:"#D8DDE4",aA:{a:[{p:4,h:"29"}]},k:"div",a:6,b:10},"142":{p:"no-repeat",c:75,q:"100% 100%",d:110,I:"None",J:"None",K:"None",L:"None",aP:"pointer",h:"28",M:0,i:"position8",N:0,A:"#D8DDE4",j:"absolute",x:"visible",B:"#D8DDE4",O:0,P:0,C:"#D8DDE4",z:15,dB:"button",D:"#D8DDE4",aA:{a:[{p:4,h:"29"}]},k:"div",a:18,b:10},"134":{p:"no-repeat",c:75,q:"100% 100%",d:110,I:"None",J:"None",K:"None",L:"None",aP:"pointer",h:"28",M:0,i:"position13",N:0,A:"#D8DDE4",j:"absolute",x:"visible",B:"#D8DDE4",O:0,P:0,C:"#D8DDE4",z:20,dB:"button",D:"#D8DDE4",aA:{a:[{p:4,h:"29"}]},k:"div",a:28,b:10},"126":{p:"no-repeat",c:75,q:"100% 100%",d:110,I:"None",J:"None",K:"None",L:"None",aP:"pointer",h:"28",M:0,i:"position19",N:0,A:"#D8DDE4",j:"absolute",x:"visible",B:"#D8DDE4",O:0,P:0,C:"#D8DDE4",z:26,dB:"button",D:"#D8DDE4",aA:{a:[{p:4,h:"29"}]},k:"div",a:40,b:10},"147":{c:600,d:600,I:"None",J:"None",K:"None",g:"#000",L:"None",M:0,i:"finishedBackground",N:0,A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",P:0,O:0,C:"#D8DDE4",z:27,k:"div",D:"#D8DDE4",a:0,b:-600},"139":{p:"no-repeat",c:75,q:"100% 100%",d:110,I:"None",J:"None",K:"None",L:"None",aP:"pointer",h:"28",M:0,i:"position7",N:0,A:"#D8DDE4",j:"absolute",x:"visible",B:"#D8DDE4",O:0,P:0,C:"#D8DDE4",z:14,dB:"button",D:"#D8DDE4",aA:{a:[{p:4,h:"29"}]},k:"div",a:16,b:10},"130":{p:"no-repeat",c:75,q:"100% 100%",d:110,I:"None",J:"None",K:"None",L:"None",aP:"pointer",h:"28",M:0,i:"position12",N:0,A:"#D8DDE4",j:"absolute",x:"visible",B:"#D8DDE4",O:0,P:0,C:"#D8DDE4",z:19,dB:"button",D:"#D8DDE4",aA:{a:[{p:4,h:"29"}]},k:"div",a:26,b:10},"151":{aU:8,bB:3,G:"#FF2600",c:584,aV:8,r:"inline",d:164,bC:3,s:"Impact,'Arial Narrow Bold',Sans-Serif",t:120,Z:"break-word",i:"finishedTitle",w:"CONGRATS!",j:"absolute",x:"visible",aZ:0,k:"div",y:"preserve",z:28,aS:8,aT:8,a:0,bA:"#FFF",F:"center",b:-550},"143":{G:"#000",c:200,d:600,I:"None",J:"None",gg:"0",K:"None",g:"#000",L:"None",M:0,i:"sidebar",w:"",N:0,A:"#D8DDE4",j:"absolute",x:"visible",B:"#D8DDE4",P:0,O:0,C:"#D8DDE4",z:1,Q:0,D:"#D8DDE4",R:"#000",k:"div",S:0,a:600,T:0,b:0},"135":{b:-130,z:31,K:"None",c:228,L:"None",d:48,aS:6,M:0,e:0,bD:"none",N:0,aT:6,dB:"button",O:0,aU:6,P:0,aV:6,i:"creditsButton",j:"absolute",k:"div",aI:4,aJ:4,aK:4,aL:4,A:"#A0A0A0",B:"#A0A0A0",aM:"72_hover",r:"inline",C:"#A0A0A0",Z:"break-word",s:"Impact,'Arial Narrow Bold',Sans-Serif",D:"#A0A0A0",t:36,F:"center",aA:{a:[{d:1.1,p:1,g:1,e:"106"}]},G:"#FF2600",aP:"pointer",w:"CREDITS",x:"visible",I:"None",a:320,y:"preserve",J:"None"},"127":{p:"no-repeat",c:75,q:"100% 100%",d:110,I:"None",J:"None",K:"None",L:"None",aP:"pointer",h:"28",M:0,i:"position11",N:0,A:"#D8DDE4",j:"absolute",x:"visible",B:"#D8DDE4",O:0,P:0,C:"#D8DDE4",z:18,dB:"button",D:"#D8DDE4",aA:{a:[{p:4,h:"29"}]},k:"div",a:24,b:10},"148":{p:"no-repeat",c:75,q:"100% 100%",d:110,I:"None",J:"None",K:"None",L:"None",aP:"pointer",h:"28",M:0,i:"position17",N:0,A:"#D8DDE4",j:"absolute",x:"visible",B:"#D8DDE4",O:0,P:0,C:"#D8DDE4",z:24,dB:"button",D:"#D8DDE4",aA:{a:[{p:4,h:"29"}]},k:"div",a:36,b:10},"131":{b:-130,z:30,K:"None",c:228,L:"None",d:48,aS:6,M:0,e:0,bD:"none",N:0,aT:6,dB:"button",O:0,aU:6,P:0,aV:6,i:"playAgainButton",j:"absolute",k:"div",aI:4,aJ:4,aK:4,aL:4,A:"#A0A0A0",B:"#A0A0A0",aM:"71_hover",r:"inline",C:"#A0A0A0",Z:"break-word",s:"Impact,'Arial Narrow Bold',Sans-Serif",D:"#A0A0A0",t:36,F:"center",aA:{a:[{d:1.1,p:1,g:1,e:"1"}]},G:"#FF2600",aP:"pointer",w:"PLAY AGAIN?",x:"visible",I:"None",a:40,y:"preserve",J:"None"},"152":{p:"no-repeat",c:75,q:"100% 100%",d:110,I:"None",J:"None",K:"None",L:"None",aP:"pointer",h:"28",M:0,i:"position18",N:0,A:"#D8DDE4",j:"absolute",x:"visible",B:"#D8DDE4",O:0,P:0,C:"#D8DDE4",z:25,dB:"button",D:"#D8DDE4",aA:{a:[{p:4,h:"29"}]},k:"div",a:38,b:10},"144":{p:"no-repeat",c:75,q:"100% 100%",d:110,I:"None",J:"None",K:"None",L:"None",aP:"pointer",h:"28",M:0,i:"position16",N:0,A:"#D8DDE4",j:"absolute",x:"visible",B:"#D8DDE4",O:0,P:0,C:"#D8DDE4",z:23,dB:"button",D:"#D8DDE4",aA:{a:[{p:4,h:"29"}]},k:"div",a:34,b:10}}},{o:"108",p:"600px",B:{a:[{p:13,o:"116",q:false}]},cA:false,Z:600,Y:800,c:"#009193",L:[],bY:1,d:800,U:{},T:{"115_hover":{q:false,z:1,i:"115_hover",n:"115_hover",a:[{f:"c",y:0,z:1,i:"G",e:"#FFFB00",s:"#FF2600",o:"154"},{y:1,i:"G",s:"#FFFB00",z:0,o:"154",f:"c"}],f:30,b:[]},kTimelineDefaultIdentifier:{q:false,z:21,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{f:"b",y:0,z:20,i:"b",e:-800,s:600,o:"153"},{f:"c",p:2,y:0,z:0,i:"ActionHandler",s:{a:[{p:12,o:"116",q:false}]},o:"kTimelineDefaultIdentifier"},{f:"c",y:20,z:1,i:"e",e:1,s:0,o:"154"},{y:20,i:"b",s:-800,z:0,o:"153",f:"c"},{y:21,i:"e",s:1,z:0,o:"154",f:"c"}],f:30,b:[]}},bZ:180,O:["154","153"],n:"Untitled Layout","_":2,v:{"153":{aV:8,w:"<h1 style=\"text-align: center;\"><span style=\"font-size: 96px; text-shadow: rgb(0, 0, 0) 4px 4px 0px;\"><font color=\"#941751\" face=\"Marion, Hoefler Text, Baskerville, Times New Roman, serif\">MEMORY</font></span></h1>\n<font color=\"#ff2600\"><br>\n<style>\n\ttr { height: 60px; }\n</style>\n</font><table>\n\t<tbody>\n\t<tr>\n\t\t<td style=\"width: 300px;\"><font color=\"#ff2600\" face=\"Verdana, Tahoma, Geneva, sans-serif\">GRAPHICS BY</font></td>\n\t\t<td><span style=\"caret-color: rgb(255, 251, 0);\"><font color=\"#ff2600\" face=\"TrebuchetMS, Trebuchet MS, Lucida Grande, Tahoma, Arial, sans-serif\">Faysal Yusuf</font></span></td></tr><tr><td><font color=\"#ff2600\" face=\"Verdana, Tahoma, Geneva, sans-serif\">JAVASCRIPT CODE BY</font></td>\n\t\t<td><font color=\"#ff2600\" face=\"TrebuchetMS, Trebuchet MS, Lucida Grande, Tahoma, Arial, sans-serif\">Darren Pearson</font></td>\n\t</tr>\n\t<tr>\n\t\t<td><font color=\"#ff2600\" face=\"Verdana, Tahoma, Geneva, sans-serif\">BACKGROUND MUSIC BY</font></td>\n\t\t<td><font color=\"#ff2600\" face=\"TrebuchetMS, Trebuchet MS, Lucida Grande, Tahoma, Arial, sans-serif\">Chad Crouch and Soularflair</font></td></tr><tr><td><font color=\"#ff2600\" face=\"Verdana, Tahoma, Geneva, sans-serif\">SOFTWARE</font></td>\n\t\t<td><a href=\"https://tumult.com/hype/\" target=\"_blank\"><font color=\"#ff2600\" face=\"TrebuchetMS, Trebuchet MS, Lucida Grande, Tahoma, Arial, sans-serif\">Tumult Hype</font></a></td>\n\t</tr>\n\t<tr>\n\t\t<td><font color=\"#ff2600\" face=\"Verdana, Tahoma, Geneva, sans-serif\">SPECIAL THANKS TO:</font></td>\n\t\t<td><font color=\"#ff2600\" face=\"TrebuchetMS, Trebuchet MS, Lucida Grande, Tahoma, Arial, sans-serif\">Saint Paul College</font></td>\n\t</tr>\n\t<tr>\n\t\t<td></td>\n\t\t<td><span style=\"caret-color: rgb(255, 251, 0);\"><font color=\"#ff2600\" face=\"TrebuchetMS, Trebuchet MS, Lucida Grande, Tahoma, Arial, sans-serif\">Asad Yusuf</font></span></td></tr><tr><td></td>\n\t\t<td><span style=\"caret-color: rgb(255, 251, 0);\"><font color=\"#ff2600\"><font face=\"TrebuchetMS, Trebuchet MS, Lucida Grande, Tahoma, Arial, sans-serif\">Ifrah</font>&nbsp;</font></span></td></tr><tr><td></td>\n\t\t<td><span style=\"caret-color: rgb(255, 251, 0);\"><font color=\"#ff2600\" face=\"TrebuchetMS, Trebuchet MS, Lucida Grande, Tahoma, Arial, sans-serif\">Anas</font></span></td></tr><tr><td></td>\n\t\t<td><span style=\"caret-color: rgb(255, 251, 0);\"><font color=\"#ff2600\" face=\"TrebuchetMS, Trebuchet MS, Lucida Grande, Tahoma, Arial, sans-serif\">Mohamed</font></span></td></tr></tbody></table><font color=\"#ff2600\"><br>\n</font><hr style=\"width: 80%; height: 5px; background-color: white;\"> \n<font color=\"#ff2600\"><br>\n</font><h3 style=\"text-align: center;\"><font color=\"#ff2600\" face=\"Verdana, Tahoma, Geneva, sans-serif\">Please Check Out More Student Games At:</font></h3>\n<h3 style=\"text-align: center;\"><a href=\"http://www.darrenscorner.com/retrogamedesign/less/student/index.html\" target=\"_blank\"><font color=\"#ff2600\" face=\"TrebuchetMS, Trebuchet MS, Lucida Grande, Tahoma, Arial, sans-serif\">RetroGameDesign.com</font></a></h3>\n<font color=\"#ff2600\"><br>\n</font><hr style=\"width: 80%; height: 5px; background-color: white;\"> \n<br>",x:"visible",a:100,Z:"break-word",y:"preserve",j:"absolute",r:"inline",b:600,z:1,s:"Helvetica,Arial,Sans-Serif",d:1184,aS:8,t:16,aT:8,k:"div",aU:8,G:"#212121",c:584},"154":{J:"None",b:400,K:"None",z:2,bC:2,L:"None",d:108,aS:6,M:0,e:0,bD:"none",N:0,aT:6,dB:"button",O:0,c:388,aU:6,P:0,aV:6,j:"absolute",k:"div",aI:4,aJ:4,aK:4,aZ:0,aL:4,A:"#A0A0A0",B:"#A0A0A0",aM:"115_hover",r:"inline",C:"#A0A0A0",Z:"break-word",s:"Impact,'Arial Narrow Bold',Sans-Serif",D:"#A0A0A0",t:72,F:"center",aA:{a:[{d:1.1,p:1,g:1,e:"1"}]},G:"#FF2600",aP:"pointer",w:"PLAY AGAIN?",bA:"#FFF",x:"visible",I:"None",a:200,y:"preserve",bB:2}}}],{},h,{h:{p:0,q:[[0,0,0.175,0.885,0.32,1.25,1,1]]}},null,false,true,-1,true,true,false,true,true);d[f]=c.API;document.getElementById(g).setAttribute("HYP_dn",f);c.z_o(this.body)})();})();
