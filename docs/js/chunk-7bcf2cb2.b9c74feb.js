(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7bcf2cb2"],{"13d5":function(e,t,r){"use strict";var n=r("23e7"),i=r("d58f").left,o=r("a640"),a=r("ae40"),c=o("reduce"),u=a("reduce",{1:0});n({target:"Array",proto:!0,forced:!c||!u},{reduce:function(e){return i(this,e,arguments.length,arguments.length>1?arguments[1]:void 0)}})},"1dde":function(e,t,r){var n=r("d039"),i=r("b622"),o=r("2d00"),a=i("species");e.exports=function(e){return o>=51||!n((function(){var t=[],r=t.constructor={};return r[a]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},3319:function(e,t,r){},"3ca3":function(e,t,r){"use strict";var n=r("6547").charAt,i=r("69f3"),o=r("7dd0"),a="String Iterator",c=i.set,u=i.getterFor(a);o(String,"String",(function(e){c(this,{type:a,string:String(e),index:0})}),(function(){var e,t=u(this),r=t.string,i=t.index;return i>=r.length?{value:void 0,done:!0}:(e=n(r,i),t.index+=e.length,{value:e,done:!1})}))},"4df4":function(e,t,r){"use strict";var n=r("0366"),i=r("7b0b"),o=r("9bdd"),a=r("e95a"),c=r("50c4"),u=r("8418"),s=r("35a1");e.exports=function(e){var t,r,l,d,f,v,h=i(e),_="function"==typeof this?this:Array,p=arguments.length,y=p>1?arguments[1]:void 0,w=void 0!==y,g=s(h),b=0;if(w&&(y=n(y,p>2?arguments[2]:void 0,2)),void 0==g||_==Array&&a(g))for(t=c(h.length),r=new _(t);t>b;b++)v=w?y(h[b],b):h[b],u(r,b,v);else for(d=g.call(h),f=d.next,r=new _;!(l=f.call(d)).done;b++)v=w?o(d,y,[l.value,b],!0):l.value,u(r,b,v);return r.length=b,r}},8418:function(e,t,r){"use strict";var n=r("c04e"),i=r("9bf2"),o=r("5c6c");e.exports=function(e,t,r){var a=n(t);a in e?i.f(e,a,o(0,r)):e[a]=r}},"8ceb":function(e,t,r){"use strict";var n=r("3319"),i=r.n(n);i.a},a630:function(e,t,r){var n=r("23e7"),i=r("4df4"),o=r("1c7e"),a=!o((function(e){Array.from(e)}));n({target:"Array",stat:!0,forced:a},{from:i})},a640:function(e,t,r){"use strict";var n=r("d039");e.exports=function(e,t){var r=[][e];return!!r&&n((function(){r.call(null,t||function(){throw 1},1)}))}},ae40:function(e,t,r){var n=r("83ab"),i=r("d039"),o=r("5135"),a=Object.defineProperty,c={},u=function(e){throw e};e.exports=function(e,t){if(o(c,e))return c[e];t||(t={});var r=[][e],s=!!o(t,"ACCESSORS")&&t.ACCESSORS,l=o(t,0)?t[0]:u,d=o(t,1)?t[1]:void 0;return c[e]=!!r&&!i((function(){if(s&&!n)return!0;var e={length:-1};s?a(e,1,{enumerable:!0,get:u}):e[1]=1,r.call(e,l,d)}))}},b928:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{ref:"view",staticClass:"tickerbox digital medium",style:{top:e.top,left:e.left}},[e.holdyourhat?r("li",[r("b",[e._v("HOLD ON TO YOUR HAT!")])]):e._e(),e.kiteflying?r("li",[r("b",[e._v("IT'S KITE FLYING WEATHER!")])]):e._e(),e.windChillAdvisory?r("li",[r("b",[e._v("WIND CHILL ADVISORY!")])]):e._e(),e.heatAdvisory?r("li",[r("b",[e._v("HEAT ADVISORY!")])]):e._e(),e.rainingCatsAndDogs?r("li",[e._v(" IT'S RAINING CATS AND DOGS! ")]):e._e(),r("li",[e._v("Currently: "+e._s(e.current.summary))]),r("li",[e._v("Cloud cover: "+e._s((100*e.current.cloudCover).toFixed())+"%")]),r("li",[e._v("Visibility: "+e._s(e.current.visibility.toFixed())+" miles")]),e.current.uvIndex?r("li",[e._v(" UV Index: "+e._s(e.current.uvIndex)+" - "+e._s(e.uvIndexLevel(e.current.uvIndex))+" ")]):e._e(),e.current.ozone?r("li",[e._v(" Ozone level: "+e._s(e.current.ozone.toFixed())+" - "+e._s(e.ozoneLevel(e.current.ozone))+" ")]):e._e(),r("li",[e._v("Forecast Low today: "+e._s(e.today.temperatureLow.toFixed())+"°F at "+e._s(e.format(e.today.temperatureLowTime)))]),r("li",[e._v("Forecast High today: "+e._s(e.today.temperatureHigh.toFixed())+"°F at "+e._s(e.format(e.today.temperatureHighTime)))]),e.current.precipProbability?r("li",[e._v(" Chance of "+e._s(e.current.precipType)+": "+e._s((100*e.current.precipProbability).toFixed())+"% ")]):e._e(),e.current.nearestStormDistance>0?r("li",[e._v(" Nearest storm: "+e._s(e.current.nearestStormDistance)+" miles away ")]):e._e()])},i=[],o=(r("a630"),r("13d5"),r("fb6a"),r("a9e3"),r("3ca3"),r("c1df")),a=r.n(o),c={name:"Ticker",props:{top:{type:String,required:!0},left:{type:String,required:!0},speed:{type:Number,default:500},current:{type:Object,required:!0},today:{type:Object,required:!0},now:{type:Object,required:!0}},data:function(){return{position:0}},computed:{holdyourhat:function(){return this.now.wind_speed_avg_last_1_min>=25&&this.now.wind_speed_avg_last_1_min<40},kiteflying:function(){return this.now.wind_speed_avg_last_1_min>=25&&this.now.wind_speed_avg_last_1_min<40&&this.now.wind_chill<80&&this.now.wind_chill>60&&0==this.now.rainfall_last_60_min},windChillAdvisory:function(){return this.now.wind_chill<=-30&&this.now.wind_speed_avg_last_1_min>=10},heatAdvisory:function(){return this.now.heat_index>=105},rainingCatsAndDogs:function(){return this.now.rain_rate_last>=30}},timers:{},watch:{position:function(e){var t=this.$refs["view"],r=Array.from(t.children),n=r.slice(0,e).reduce((function(e,t){return e+t.scrollHeight}),0);this.$SmoothScroll(n,this.speed,null,t,"y")}},methods:{format:function(e){return a()(e).format("LT")},scroll:function(){var e=this.position+1,t=this.$refs["view"].children.length;e>=t&&(e=0),this.position=e},direction:function(e){var t=["NORTH","NNE","NE","ENE","EAST","ESE","SE","SSE","SOUTH","SSW","SW","WSW","WEST","WNW","NW","NNW"],r=Math.floor(e/22.5+.5);return t[r%16]},uvIndexLevel:function(e){switch(e){case 0:return"";case 1:case 2:return"Low";case 3:case 4:case 5:return"Moderate";case 6:case 7:return"High";case 8:case 9:case 10:return"Very High";default:return"Extreme"}},ozoneLevel:function(e){return e<=50?"Good":e<=100?"Moderate":e<=150?"Potentially Unhealthy":e<=200?"Unhealthy":e<=300?"Very Unhealthy":"Hazardous"}}},u=c,s=(r("8ceb"),r("2877")),l=Object(s["a"])(u,n,i,!1,null,null,null);t["default"]=l.exports},d58f:function(e,t,r){var n=r("1c0b"),i=r("7b0b"),o=r("44ad"),a=r("50c4"),c=function(e){return function(t,r,c,u){n(r);var s=i(t),l=o(s),d=a(s.length),f=e?d-1:0,v=e?-1:1;if(c<2)while(1){if(f in l){u=l[f],f+=v;break}if(f+=v,e?f<0:d<=f)throw TypeError("Reduce of empty array with no initial value")}for(;e?f>=0:d>f;f+=v)f in l&&(u=r(u,l[f],f,s));return u}};e.exports={left:c(!1),right:c(!0)}},e8b5:function(e,t,r){var n=r("c6b6");e.exports=Array.isArray||function(e){return"Array"==n(e)}},fb6a:function(e,t,r){"use strict";var n=r("23e7"),i=r("861d"),o=r("e8b5"),a=r("23cb"),c=r("50c4"),u=r("fc6a"),s=r("8418"),l=r("b622"),d=r("1dde"),f=r("ae40"),v=d("slice"),h=f("slice",{ACCESSORS:!0,0:0,1:2}),_=l("species"),p=[].slice,y=Math.max;n({target:"Array",proto:!0,forced:!v||!h},{slice:function(e,t){var r,n,l,d=u(this),f=c(d.length),v=a(e,f),h=a(void 0===t?f:t,f);if(o(d)&&(r=d.constructor,"function"!=typeof r||r!==Array&&!o(r.prototype)?i(r)&&(r=r[_],null===r&&(r=void 0)):r=void 0,r===Array||void 0===r))return p.call(d,v,h);for(n=new(void 0===r?Array:r)(y(h-v,0)),l=0;v<h;v++,l++)v in d&&s(n,l,d[v]);return n.length=l,n}})}}]);