(function(t,o,u){"use strict";const e=o.findByProps("OFFICIAL_ALTERNATE_ICONS"),i=o.findByProps("LimitedTimeAppIconIds"),c=i.FreemiumAppIconIds;let r=e.OFFICIAL_ALTERNATE_ICONS(),I;var d={onLoad:function(){r.forEach(function(n){return n.isPremium=!1}),e.ICONS.forEach(function(n){n.isPremium=!1}),I=u.instead("OFFICIAL_ALTERNATE_ICONS",e,function(){return r}),i.FreemiumAppIconIds=i.MasterAppIconIds},onUnload:function(){e.ICONS.forEach(function(n){n.isPremium=!0}),i.FreemiumAppIconIds=c,I()}};return t.default=d,Object.defineProperty(t,"__esModule",{value:!0}),t})({},vendetta.metro,vendetta.patcher);
