(function(t,i,n){"use strict";const a=n.before("uploadLocalFiles",i.findByProps("uploadLocalFiles"),function(e){(e[0].items[0].mimeType=="audio/mpeg"||e[0].items[0].mimeType=="audio/ogg")&&(e[0].flags=8192,e[0].items[0].item.waveform="AEtWPyUaGA4OEAcA",e[0].items[0].item.durationSecs=1.2,e[0].items[0].waveform="AEtWPyUaGA4OEAcA",e[0].items[0].durationSecs=1.2)}),m=function(){return a()};return t.onUnload=m,t})({},vendetta.metro,vendetta.patcher);
