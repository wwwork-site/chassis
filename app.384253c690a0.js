(()=>{var Oh={"floor-oak-basecolor-2k.webp":"materials/floor-oak-basecolor-2k.webp","floor-oak-normal-2k.webp":"materials/floor-oak-normal-2k.webp","metal-normal-2k.webp":"materials/metal-normal-2k.webp","metal-roughness-2k.webp":"materials/metal-roughness-2k.webp","ta-logo.png":"brand/ta-logo.png"};function ua(n){if(!Oh[n])throw new Error("Unknown asset "+n);return new URL("assets/"+Oh[n],document.baseURI).href}function kh(n){return typeof n=="string"?n.replace(/^\uFEFF/,"").split(/\r?\n/)[0].replace(/[\u0000-\u001f\u007f-\u009f]/g,"").trim().slice(0,80):""}function Rp(){try{return JSON.parse(document.querySelector("#author-snapshot")?.textContent||"null")?.author||""}catch{return""}}var Kn={author:kh(Rp()||globalThis.ZAGRUZKA_PROFILE?.author||"")};async function zh(){if(!/^https?:$/.test(location.protocol))return Kn;let n=new AbortController,e=setTimeout(()=>n.abort(),1500);try{let t=await fetch(new URL("AUTHOR.txt",location.href),{cache:"no-store",signal:n.signal});if(t.ok){let i=await t.text();i.length<=4096&&(Kn.author=kh(i))}}catch{}finally{clearTimeout(e)}return Kn}var xo=["l","w","h","mass","boxes"];function Vh(n){let e=n.pallet;if(e==null)return[];let t=[];if(typeof e!="object"||Array.isArray(e))return["\u0423\u043A\u0430\u0436\u0438\u0442\u0435 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B \u043F\u0430\u043B\u043B\u0435\u0442\u044B."];for(let i of["l","w"])(!Number.isSafeInteger(e[i])||e[i]<100||e[i]>1e5)&&t.push("\u041E\u0441\u043D\u043E\u0432\u0430\u043D\u0438\u0435 \u043F\u0430\u043B\u043B\u0435\u0442\u044B: \u0446\u0435\u043B\u044B\u0435 \u043C\u0438\u043B\u043B\u0438\u043C\u0435\u0442\u0440\u044B \u043E\u0442 100 \u0434\u043E 100 000.");if((!Number.isSafeInteger(e.h)||e.h<10||e.h>500)&&t.push("\u0412\u044B\u0441\u043E\u0442\u0430 \u043F\u0430\u043B\u043B\u0435\u0442\u044B: \u0446\u0435\u043B\u043E\u0435 \u0447\u0438\u0441\u043B\u043E \u043E\u0442 10 \u0434\u043E 500 \u043C\u043C."),(!Number.isFinite(e.mass)||e.mass<=0||e.mass>1e3||Math.abs(e.mass*1e3-Math.round(e.mass*1e3))>1e-6)&&t.push("\u041C\u0430\u0441\u0441\u0430 \u043F\u0443\u0441\u0442\u043E\u0439 \u043F\u0430\u043B\u043B\u0435\u0442\u044B: \u043E\u0442 0,001 \u0434\u043E 1 000 \u043A\u0433, \u0434\u043E \u0442\u0440\u0451\u0445 \u0437\u043D\u0430\u043A\u043E\u0432."),(!Number.isSafeInteger(e.boxes)||e.boxes<1||e.boxes>2e3)&&t.push("\u041D\u0430 \u043F\u0430\u043B\u043B\u0435\u0442\u0435: \u043E\u0442 1 \u0434\u043E 2 000 \u043E\u0434\u0438\u043D\u0430\u043A\u043E\u0432\u044B\u0445 \u043A\u043E\u0440\u043E\u0431\u043E\u043A."),Number.isSafeInteger(n.l)&&Number.isSafeInteger(n.w)&&e.l>=100&&e.w>=100&&(n.l>e.l||n.w>e.w)&&t.push("\u041A\u043E\u0440\u043E\u0431\u043A\u0430 \u043D\u0435 \u0432\u0445\u043E\u0434\u0438\u0442 \u043D\u0430 \u043F\u0430\u043B\u043B\u0435\u0442\u0443 \u0431\u0435\u0437 \u0441\u0432\u0435\u0441\u0430. \u0418\u0437\u043C\u0435\u043D\u0438\u0442\u0435 \u043E\u0441\u043D\u043E\u0432\u0430\u043D\u0438\u0435 \u0438\u043B\u0438 \u0440\u0430\u0437\u043C\u0435\u0440\u044B \u043A\u043E\u0440\u043E\u0431\u043A\u0438."),!t.length&&Number.isFinite(n.h)&&Number.isFinite(n.mass)){let i=hn(n);(i.h>1e5||i.mass>1e6)&&t.push("\u041F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u043D\u043E\u0435 \u043C\u0435\u0441\u0442\u043E \u043F\u0440\u0435\u0432\u044B\u0448\u0430\u0435\u0442 \u0434\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u044B\u0435 \u043F\u0440\u0435\u0434\u0435\u043B\u044B \u0440\u0430\u0437\u043C\u0435\u0440\u043E\u0432 \u0438\u043B\u0438 \u043C\u0430\u0441\u0441\u044B.")}return[...new Set(t)]}function zc(n){return n==null?null:Object.fromEntries(xo.map(e=>[e,n[e]]))}function _o(n){let e=n.pallet;if(!e)return null;let t=Math.min(e.boxes,Math.floor(e.l/n.l)),i=Math.min(Math.floor(e.w/n.w),Math.ceil(e.boxes/Math.max(1,t))),s=t*i;return{columns:t,rows:i,perLayer:s,layers:s?Math.ceil(e.boxes/s):1/0,x:Math.floor((e.l-t*n.l)/2),y:Math.floor((e.w-i*n.w)/2)}}function hn(n){if(!n.pallet)return{...n};let{pallet:e}=n,t=_o(n);return{id:n.id,name:n.name,color:n.color,l:e.l,w:e.w,h:e.h+t.layers*n.h,mass:Math.round((e.mass+e.boxes*n.mass)*1e3)/1e3,qty:n.qty,rotate:n.rotate,tiers:1}}function Vc(n,e){return e.pallet?(n.pallet=zc(e.pallet),n.boxSpec={l:e.l,w:e.w,h:e.h,mass:e.mass}):(delete n.pallet,delete n.boxSpec),n}function $i(n){let e=0,t=0,i=0;for(let s of n)s.pallet?(e++,t+=s.pallet.boxes,i+=s.pallet.mass):t++;return{pallets:e,boxes:t,palletMass:Math.round(i*1e3)/1e3}}function Gh(n){if(!n.pallet)return[{...n,visualId:n.unitId+":box:0"}];let e={...n.boxSpec,pallet:n.pallet},t=_o(e),i=[];for(let s=0;s<n.pallet.boxes;s++){let r=s%t.perLayer,a=t.x+r%t.columns*e.l,o=t.y+Math.floor(r/t.columns)*e.w,l=n.rotated;i.push({...n,x:n.x+(l?n.pallet.w-o-e.w:a),y:n.y+(l?a:o),z:n.z+n.pallet.h+Math.floor(s/t.perLayer)*e.h,l:l?e.w:e.l,w:l?e.l:e.w,h:e.h,visualId:n.unitId+":box:"+s})}return i}var Ms={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ss={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},bd=0,Su=1,Md=2;var Js=1,Sd=2,Zr=3,Qi=0,an=1,Cn=2,Oi=0,qs=1,wu=2,Eu=3,Au=4,wd=5;var ms=100,Ed=101,Ad=102,Td=103,Cd=104,Rd=200,Id=201,Pd=202,Dd=203,Ko=204,Jo=205,Ld=206,Nd=207,Fd=208,Ud=209,Bd=210,Od=211,kd=212,zd=213,Vd=214,jo=0,Qo=1,el=2,Ys=3,tl=4,nl=5,il=6,sl=7,Pl=0,Gd=1,Hd=2,_i=0,Tu=1,Cu=2,Ru=3,qa=4,Iu=5,Pu=6,Du=7;var Lu=300,ws=301,js=302,Dl=303,Ll=304,Ya=306,rl=1e3,Ni=1001,al=1002,en=1003,Wd=1004;var Za=1005;var rn=1006,Nl=1007;var Es=1008;var Rn=1009,Nu=1010,Fu=1011,Kr=1012,Fl=1013,yi=1014,ii=1015,ki=1016,Ul=1017,Bl=1018,Jr=1020,Uu=35902,Bu=35899,Ou=1021,ku=1022,si=1023,Fi=1026,As=1027,Ol=1028,kl=1029,Ts=1030,zl=1031;var Vl=1033,Ka=33776,Ja=33777,ja=33778,Qa=33779,Gl=35840,Hl=35841,Wl=35842,$l=35843,Xl=36196,ql=37492,Yl=37496,Zl=37488,Kl=37489,eo=37490,Jl=37491,jl=37808,Ql=37809,ec=37810,tc=37811,nc=37812,ic=37813,sc=37814,rc=37815,ac=37816,oc=37817,lc=37818,cc=37819,uc=37820,hc=37821,dc=36492,fc=36494,pc=36495,mc=36283,gc=36284,to=36285,xc=36286;var Ma=2300,ol=2301,Yo=2302,fu=2303,pu=2400,mu=2401,gu=2402;var $d=3200;var no=0,Xd=1,is="",jt="srgb",Sa="srgb-linear",wa="linear",xt="srgb";var $s=7680;var xu=519,qd=512,Yd=513,Zd=514,_c=515,Kd=516,Jd=517,yc=518,jd=519,ll=35044,jr=35048;var zu="300 es",gi=2e3,Dr=2001;function Ip(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Pp(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Lr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Qd(){let n=Lr("canvas");return n.style.display="block",n}var Hh={},Nr=null;function Ea(...n){let e="THREE."+n.shift();Nr?Nr("log",e,...n):console.log(e,...n)}function ef(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Oe(...n){n=ef(n);let e="THREE."+n.shift();if(Nr)Nr("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Ve(...n){n=ef(n);let e="THREE."+n.shift();if(Nr)Nr("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Xs(...n){let e=n.join(" ");e in Hh||(Hh[e]=!0,Oe(...n))}function tf(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var nf={[jo]:Qo,[el]:il,[tl]:sl,[Ys]:nl,[Qo]:jo,[il]:el,[sl]:tl,[nl]:Ys},xi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Wh=1234567,Ir=Math.PI/180,Fr=180/Math.PI;function Ji(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(dn[n&255]+dn[n>>8&255]+dn[n>>16&255]+dn[n>>24&255]+"-"+dn[e&255]+dn[e>>8&255]+"-"+dn[e>>16&15|64]+dn[e>>24&255]+"-"+dn[t&63|128]+dn[t>>8&255]+"-"+dn[t>>16&255]+dn[t>>24&255]+dn[i&255]+dn[i>>8&255]+dn[i>>16&255]+dn[i>>24&255]).toLowerCase()}function nt(n,e,t){return Math.max(e,Math.min(t,n))}function Vu(n,e){return(n%e+e)%e}function Dp(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function Lp(n,e,t){return n!==e?(t-n)/(e-n):0}function ba(n,e,t){return(1-t)*n+t*e}function Np(n,e,t,i){return ba(n,e,1-Math.exp(-t*i))}function Fp(n,e=1){return e-Math.abs(Vu(n,e*2)-e)}function Up(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Bp(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Op(n,e){return n+Math.floor(Math.random()*(e-n+1))}function kp(n,e){return n+Math.random()*(e-n)}function zp(n){return n*(.5-Math.random())}function Vp(n){n!==void 0&&(Wh=n);let e=Wh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Gp(n){return n*Ir}function Hp(n){return n*Fr}function Wp(n){return(n&n-1)===0&&n!==0}function $p(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Xp(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function qp(n,e,t,i,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+i)/2),u=a((e+i)/2),d=r((e-i)/2),h=a((e-i)/2),f=r((i-e)/2),g=a((i-e)/2);switch(s){case"XYX":n.set(o*u,l*d,l*h,o*c);break;case"YZY":n.set(l*h,o*u,l*d,o*c);break;case"ZXZ":n.set(l*d,l*h,o*u,o*c);break;case"XZX":n.set(o*u,l*g,l*f,o*c);break;case"YXY":n.set(l*f,o*u,l*g,o*c);break;case"ZYZ":n.set(l*g,l*f,o*u,o*c);break;default:Oe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function mi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function vt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var io={DEG2RAD:Ir,RAD2DEG:Fr,generateUUID:Ji,clamp:nt,euclideanModulo:Vu,mapLinear:Dp,inverseLerp:Lp,lerp:ba,damp:Np,pingpong:Fp,smoothstep:Up,smootherstep:Bp,randInt:Op,randFloat:kp,randFloatSpread:zp,seededRandom:Vp,degToRad:Gp,radToDeg:Hp,isPowerOfTwo:Wp,ceilPowerOfTwo:$p,floorPowerOfTwo:Xp,setQuaternionFromProperEuler:qp,normalize:vt,denormalize:mi},De=class n{static{n.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(nt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(nt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},zn=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],u=i[s+2],d=i[s+3],h=r[a+0],f=r[a+1],g=r[a+2],x=r[a+3];if(d!==x||l!==h||c!==f||u!==g){let m=l*h+c*f+u*g+d*x;m<0&&(h=-h,f=-f,g=-g,x=-x,m=-m);let p=1-o;if(m<.9995){let S=Math.acos(m),I=Math.sin(S);p=Math.sin(p*S)/I,o=Math.sin(o*S)/I,l=l*p+h*o,c=c*p+f*o,u=u*p+g*o,d=d*p+x*o}else{l=l*p+h*o,c=c*p+f*o,u=u*p+g*o,d=d*p+x*o;let S=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=S,c*=S,u*=S,d*=S}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,a){let o=i[s],l=i[s+1],c=i[s+2],u=i[s+3],d=r[a],h=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+u*d+l*f-c*h,e[t+1]=l*g+u*h+c*d-o*f,e[t+2]=c*g+u*f+o*h-l*d,e[t+3]=u*g-o*d-l*h-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(s/2),d=o(r/2),h=l(i/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=h*u*d+c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d-h*f*g;break;case"YXZ":this._x=h*u*d+c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d+h*f*g;break;case"ZXY":this._x=h*u*d-c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d-h*f*g;break;case"ZYX":this._x=h*u*d-c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d+h*f*g;break;case"YZX":this._x=h*u*d+c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d-h*f*g;break;case"XZY":this._x=h*u*d-c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d+h*f*g;break;default:Oe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=i+o+d;if(h>0){let f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(i>o&&i>d){let f=2*Math.sqrt(1+i-o-d);this._w=(u-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>d){let f=2*Math.sqrt(1+o-i-d);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+d-i-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(nt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-i*c,this._z=r*u+a*c+i*l-s*o,this._w=a*u-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class n{static{n.prototype.isVector3=!0}constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion($h.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion($h.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),u=2*(o*t-r*s),d=2*(r*i-a*t);return this.x=t+l*c+a*d-o*u,this.y=i+l*u+o*c-r*d,this.z=s+l*d+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this.z=nt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this.z=nt(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(nt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Gc.copy(this).projectOnVector(e),this.sub(Gc)}reflect(e){return this.sub(Gc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(nt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Gc=new L,$h=new zn,Ze=class n{static{n.prototype.isMatrix3=!0}constructor(e,t,i,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],d=i[7],h=i[2],f=i[5],g=i[8],x=s[0],m=s[3],p=s[6],S=s[1],I=s[4],M=s[7],b=s[2],w=s[5],T=s[8];return r[0]=a*x+o*S+l*b,r[3]=a*m+o*I+l*w,r[6]=a*p+o*M+l*T,r[1]=c*x+u*S+d*b,r[4]=c*m+u*I+d*w,r[7]=c*p+u*M+d*T,r[2]=h*x+f*S+g*b,r[5]=h*m+f*I+g*w,r[8]=h*p+f*M+g*T,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*r*u+i*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,h=o*l-u*r,f=c*r-a*l,g=t*d+i*h+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=d*x,e[1]=(s*c-u*i)*x,e[2]=(o*i-s*a)*x,e[3]=h*x,e[4]=(u*t-s*l)*x,e[5]=(s*r-o*t)*x,e[6]=f*x,e[7]=(i*l-c*t)*x,e[8]=(a*t-i*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Xs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Hc.makeScale(e,t)),this}rotate(e){return Xs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Hc.makeRotation(-e)),this}translate(e,t){return Xs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Hc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Hc=new Ze,Xh=new Ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),qh=new Ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Yp(){let n={enabled:!0,workingColorSpace:Sa,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===xt&&(s.r=ji(s.r),s.g=ji(s.g),s.b=ji(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===xt&&(s.r=Pr(s.r),s.g=Pr(s.g),s.b=Pr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===is?wa:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Xs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Xs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Sa]:{primaries:e,whitePoint:i,transfer:wa,toXYZ:Xh,fromXYZ:qh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:jt},outputColorSpaceConfig:{drawingBufferColorSpace:jt}},[jt]:{primaries:e,whitePoint:i,transfer:xt,toXYZ:Xh,fromXYZ:qh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:jt}}}),n}var at=Yp();function ji(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Pr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var dr,cl=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{dr===void 0&&(dr=Lr("canvas")),dr.width=e.width,dr.height=e.height;let s=dr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=dr}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Lr("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ji(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ji(t[i]/255)*255):t[i]=ji(t[i]);return{data:t,width:e.width,height:e.height}}else return Oe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Zp=0,Ur=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Zp++}),this.uuid=Ji(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Wc(s[a].image)):r.push(Wc(s[a]))}else r=Wc(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function Wc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?cl.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Oe("Texture: Unable to serialize Texture."),{})}var Kp=0,$c=new L,Wt=class n extends xi{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Ni,s=Ni,r=rn,a=Es,o=si,l=Rn,c=n.DEFAULT_ANISOTROPY,u=is){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Kp++}),this.uuid=Ji(),this.name="",this.source=new Ur(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new De(0,0),this.repeat=new De(1,1),this.center=new De(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize($c).x}get height(){return this.source.getSize($c).y}get depth(){return this.source.getSize($c).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){Oe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Oe(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Lu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case rl:e.x=e.x-Math.floor(e.x);break;case Ni:e.x=e.x<0?0:1;break;case al:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case rl:e.y=e.y-Math.floor(e.y);break;case Ni:e.y=e.y<0?0:1;break;case al:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Wt.DEFAULT_IMAGE=null;Wt.DEFAULT_MAPPING=Lu;Wt.DEFAULT_ANISOTROPY=1;var Ut=class n{static{n.prototype.isVector4=!0}constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],f=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let I=(c+1)/2,M=(f+1)/2,b=(p+1)/2,w=(u+h)/4,T=(d+x)/4,y=(g+m)/4;return I>M&&I>b?I<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(I),s=w/i,r=T/i):M>b?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=w/s,r=y/s):b<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),i=T/r,s=y/r),this.set(i,s,r,t),this}let S=Math.sqrt((m-g)*(m-g)+(d-x)*(d-x)+(h-u)*(h-u));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(d-x)/S,this.z=(h-u)/S,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this.z=nt(this.z,e.z,t.z),this.w=nt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this.z=nt(this.z,e,t),this.w=nt(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(nt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ul=class extends xi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:rn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Ut(0,0,e,t),this.scissorTest=!1,this.viewport=new Ut(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:i.depth},r=new Wt(s),a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:rn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Ur(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Vn=class extends ul{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Aa=class extends Wt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=en,this.minFilter=en,this.wrapR=Ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var hl=class extends Wt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=en,this.minFilter=en,this.wrapR=Ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ft=class n{static{n.prototype.isMatrix4=!0}constructor(e,t,i,s,r,a,o,l,c,u,d,h,f,g,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,u,d,h,f,g,x,m)}set(e,t,i,s,r,a,o,l,c,u,d,h,f,g,x,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=d,p[14]=h,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,s=1/fr.setFromMatrixColumn(e,0).length(),r=1/fr.setFromMatrixColumn(e,1).length(),a=1/fr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let h=a*u,f=a*d,g=o*u,x=o*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=f+g*c,t[5]=h-x*c,t[9]=-o*l,t[2]=x-h*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){let h=l*u,f=l*d,g=c*u,x=c*d;t[0]=h+x*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=f*o-g,t[6]=x+h*o,t[10]=a*l}else if(e.order==="ZXY"){let h=l*u,f=l*d,g=c*u,x=c*d;t[0]=h-x*o,t[4]=-a*d,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*u,t[9]=x-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let h=a*u,f=a*d,g=o*u,x=o*d;t[0]=l*u,t[4]=g*c-f,t[8]=h*c+x,t[1]=l*d,t[5]=x*c+h,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let h=a*l,f=a*c,g=o*l,x=o*c;t[0]=l*u,t[4]=x-h*d,t[8]=g*d+f,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=f*d+g,t[10]=h-x*d}else if(e.order==="XZY"){let h=a*l,f=a*c,g=o*l,x=o*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+x,t[5]=a*u,t[9]=f*d-g,t[2]=g*d-f,t[6]=o*u,t[10]=x*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Jp,e,jp)}lookAt(e,t,i){let s=this.elements;return On.subVectors(e,t),On.lengthSq()===0&&(On.z=1),On.normalize(),cs.crossVectors(i,On),cs.lengthSq()===0&&(Math.abs(i.z)===1?On.x+=1e-4:On.z+=1e-4,On.normalize(),cs.crossVectors(i,On)),cs.normalize(),yo.crossVectors(On,cs),s[0]=cs.x,s[4]=yo.x,s[8]=On.x,s[1]=cs.y,s[5]=yo.y,s[9]=On.y,s[2]=cs.z,s[6]=yo.z,s[10]=On.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],d=i[5],h=i[9],f=i[13],g=i[2],x=i[6],m=i[10],p=i[14],S=i[3],I=i[7],M=i[11],b=i[15],w=s[0],T=s[4],y=s[8],E=s[12],D=s[1],A=s[5],U=s[9],H=s[13],V=s[2],z=s[6],F=s[10],W=s[14],ne=s[3],ie=s[7],_e=s[11],ve=s[15];return r[0]=a*w+o*D+l*V+c*ne,r[4]=a*T+o*A+l*z+c*ie,r[8]=a*y+o*U+l*F+c*_e,r[12]=a*E+o*H+l*W+c*ve,r[1]=u*w+d*D+h*V+f*ne,r[5]=u*T+d*A+h*z+f*ie,r[9]=u*y+d*U+h*F+f*_e,r[13]=u*E+d*H+h*W+f*ve,r[2]=g*w+x*D+m*V+p*ne,r[6]=g*T+x*A+m*z+p*ie,r[10]=g*y+x*U+m*F+p*_e,r[14]=g*E+x*H+m*W+p*ve,r[3]=S*w+I*D+M*V+b*ne,r[7]=S*T+I*A+M*z+b*ie,r[11]=S*y+I*U+M*F+b*_e,r[15]=S*E+I*H+M*W+b*ve,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],f=e[14],g=e[3],x=e[7],m=e[11],p=e[15],S=l*f-c*h,I=o*f-c*d,M=o*h-l*d,b=a*f-c*u,w=a*h-l*u,T=a*d-o*u;return t*(x*S-m*I+p*M)-i*(g*S-m*b+p*w)+s*(g*I-x*b+p*T)-r*(g*M-x*w+m*T)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return t*(a*u-o*c)-i*(r*u-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],f=e[11],g=e[12],x=e[13],m=e[14],p=e[15],S=t*o-i*a,I=t*l-s*a,M=t*c-r*a,b=i*l-s*o,w=i*c-r*o,T=s*c-r*l,y=u*x-d*g,E=u*m-h*g,D=u*p-f*g,A=d*m-h*x,U=d*p-f*x,H=h*p-f*m,V=S*H-I*U+M*A+b*D-w*E+T*y;if(V===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let z=1/V;return e[0]=(o*H-l*U+c*A)*z,e[1]=(s*U-i*H-r*A)*z,e[2]=(x*T-m*w+p*b)*z,e[3]=(h*w-d*T-f*b)*z,e[4]=(l*D-a*H-c*E)*z,e[5]=(t*H-s*D+r*E)*z,e[6]=(m*M-g*T-p*I)*z,e[7]=(u*T-h*M+f*I)*z,e[8]=(a*U-o*D+c*y)*z,e[9]=(i*D-t*U-r*y)*z,e[10]=(g*w-x*M+p*S)*z,e[11]=(d*M-u*w-f*S)*z,e[12]=(o*E-a*A-l*y)*z,e[13]=(t*A-i*E+s*y)*z,e[14]=(x*I-g*b-m*S)*z,e[15]=(u*b-d*I+h*S)*z,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+i,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,d=o+o,h=r*c,f=r*u,g=r*d,x=a*u,m=a*d,p=o*d,S=l*c,I=l*u,M=l*d,b=i.x,w=i.y,T=i.z;return s[0]=(1-(x+p))*b,s[1]=(f+M)*b,s[2]=(g-I)*b,s[3]=0,s[4]=(f-M)*w,s[5]=(1-(h+p))*w,s[6]=(m+S)*w,s[7]=0,s[8]=(g+I)*T,s[9]=(m-S)*T,s[10]=(1-(h+x))*T,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let a=fr.set(s[0],s[1],s[2]).length(),o=fr.set(s[4],s[5],s[6]).length(),l=fr.set(s[8],s[9],s[10]).length();r<0&&(a=-a),di.copy(this);let c=1/a,u=1/o,d=1/l;return di.elements[0]*=c,di.elements[1]*=c,di.elements[2]*=c,di.elements[4]*=u,di.elements[5]*=u,di.elements[6]*=u,di.elements[8]*=d,di.elements[9]*=d,di.elements[10]*=d,t.setFromRotationMatrix(di),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,s,r,a,o=gi,l=!1){let c=this.elements,u=2*r/(t-e),d=2*r/(i-s),h=(t+e)/(t-e),f=(i+s)/(i-s),g,x;if(l)g=r/(a-r),x=a*r/(a-r);else if(o===gi)g=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===Dr)g=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=gi,l=!1){let c=this.elements,u=2/(t-e),d=2/(i-s),h=-(t+e)/(t-e),f=-(i+s)/(i-s),g,x;if(l)g=1/(a-r),x=a/(a-r);else if(o===gi)g=-2/(a-r),x=-(a+r)/(a-r);else if(o===Dr)g=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},fr=new L,di=new ft,Jp=new L(0,0,0),jp=new L(1,1,1),cs=new L,yo=new L,On=new L,Yh=new ft,Zh=new zn,Ui=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],d=s[2],h=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(nt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-nt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(nt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-nt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(nt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-nt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:Oe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Yh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Yh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Zh.setFromEuler(this),this.setFromQuaternion(Zh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ui.DEFAULT_ORDER="XYZ";var Br=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Qp=0,Kh=new L,pr=new zn,Xi=new ft,vo=new L,ha=new L,e0=new L,t0=new zn,Jh=new L(1,0,0),jh=new L(0,1,0),Qh=new L(0,0,1),ed={type:"added"},n0={type:"removed"},mr={type:"childadded",child:null},Xc={type:"childremoved",child:null},Ht=class n extends xi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Qp++}),this.uuid=Ji(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new L,t=new Ui,i=new zn,s=new L(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ft},normalMatrix:{value:new Ze}}),this.matrix=new ft,this.matrixWorld=new ft,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Br,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return pr.setFromAxisAngle(e,t),this.quaternion.multiply(pr),this}rotateOnWorldAxis(e,t){return pr.setFromAxisAngle(e,t),this.quaternion.premultiply(pr),this}rotateX(e){return this.rotateOnAxis(Jh,e)}rotateY(e){return this.rotateOnAxis(jh,e)}rotateZ(e){return this.rotateOnAxis(Qh,e)}translateOnAxis(e,t){return Kh.copy(e).applyQuaternion(this.quaternion),this.position.add(Kh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Jh,e)}translateY(e){return this.translateOnAxis(jh,e)}translateZ(e){return this.translateOnAxis(Qh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Xi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?vo.copy(e):vo.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),ha.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xi.lookAt(ha,vo,this.up):Xi.lookAt(vo,ha,this.up),this.quaternion.setFromRotationMatrix(Xi),s&&(Xi.extractRotation(s.matrixWorld),pr.setFromRotationMatrix(Xi),this.quaternion.premultiply(pr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ve("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ed),mr.child=e,this.dispatchEvent(mr),mr.child=null):Ve("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(n0),Xc.child=e,this.dispatchEvent(Xc),Xc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Xi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Xi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Xi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ed),mr.child=e,this.dispatchEvent(mr),mr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ha,e,e0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ha,t0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),h=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};Ht.DEFAULT_UP=new L(0,1,0);Ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Qt=class extends Ht{constructor(){super(),this.isGroup=!0,this.type="Group"}},i0={type:"move"},Or=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,i),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&h>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(i0)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Qt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},sf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},us={h:0,s:0,l:0},bo={h:0,s:0,l:0};function qc(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var $e=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=jt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,at.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=at.workingColorSpace){return this.r=e,this.g=t,this.b=i,at.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=at.workingColorSpace){if(e=Vu(e,1),t=nt(t,0,1),i=nt(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=qc(a,r,e+1/3),this.g=qc(a,r,e),this.b=qc(a,r,e-1/3)}return at.colorSpaceToWorking(this,s),this}setStyle(e,t=jt){function i(r){r!==void 0&&parseFloat(r)<1&&Oe("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Oe("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Oe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=jt){let i=sf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Oe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ji(e.r),this.g=ji(e.g),this.b=ji(e.b),this}copyLinearToSRGB(e){return this.r=Pr(e.r),this.g=Pr(e.g),this.b=Pr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=jt){return at.workingToColorSpace(fn.copy(this),e),Math.round(nt(fn.r*255,0,255))*65536+Math.round(nt(fn.g*255,0,255))*256+Math.round(nt(fn.b*255,0,255))}getHexString(e=jt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=at.workingColorSpace){at.workingToColorSpace(fn.copy(this),t);let i=fn.r,s=fn.g,r=fn.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=at.workingColorSpace){return at.workingToColorSpace(fn.copy(this),t),e.r=fn.r,e.g=fn.g,e.b=fn.b,e}getStyle(e=jt){at.workingToColorSpace(fn.copy(this),e);let t=fn.r,i=fn.g,s=fn.b;return e!==jt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(us),this.setHSL(us.h+e,us.s+t,us.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(us),e.getHSL(bo);let i=ba(us.h,bo.h,t),s=ba(us.s,bo.s,t),r=ba(us.l,bo.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},fn=new $e;$e.NAMES=sf;var Zs=class extends Ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ui,this.environmentIntensity=1,this.environmentRotation=new Ui,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},fi=new L,qi=new L,Yc=new L,Yi=new L,gr=new L,xr=new L,td=new L,Zc=new L,Kc=new L,Jc=new L,jc=new Ut,Qc=new Ut,eu=new Ut,Li=class n{constructor(e=new L,t=new L,i=new L){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),fi.subVectors(e,t),s.cross(fi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){fi.subVectors(s,t),qi.subVectors(i,t),Yc.subVectors(e,t);let a=fi.dot(fi),o=fi.dot(qi),l=fi.dot(Yc),c=qi.dot(qi),u=qi.dot(Yc),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let h=1/d,f=(c*l-o*u)*h,g=(a*u-o*l)*h;return r.set(1-f-g,g,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Yi)===null?!1:Yi.x>=0&&Yi.y>=0&&Yi.x+Yi.y<=1}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,Yi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Yi.x),l.addScaledVector(a,Yi.y),l.addScaledVector(o,Yi.z),l)}static getInterpolatedAttribute(e,t,i,s,r,a){return jc.setScalar(0),Qc.setScalar(0),eu.setScalar(0),jc.fromBufferAttribute(e,t),Qc.fromBufferAttribute(e,i),eu.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(jc,r.x),a.addScaledVector(Qc,r.y),a.addScaledVector(eu,r.z),a}static isFrontFacing(e,t,i,s){return fi.subVectors(i,t),qi.subVectors(e,t),fi.cross(qi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return fi.subVectors(this.c,this.b),qi.subVectors(this.a,this.b),fi.cross(qi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,a,o;gr.subVectors(s,i),xr.subVectors(r,i),Zc.subVectors(e,i);let l=gr.dot(Zc),c=xr.dot(Zc);if(l<=0&&c<=0)return t.copy(i);Kc.subVectors(e,s);let u=gr.dot(Kc),d=xr.dot(Kc);if(u>=0&&d<=u)return t.copy(s);let h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(gr,a);Jc.subVectors(e,r);let f=gr.dot(Jc),g=xr.dot(Jc);if(g>=0&&f<=g)return t.copy(r);let x=f*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(xr,o);let m=u*g-f*d;if(m<=0&&d-u>=0&&f-g>=0)return td.subVectors(r,s),o=(d-u)/(d-u+(f-g)),t.copy(s).addScaledVector(td,o);let p=1/(m+x+h);return a=x*p,o=h*p,t.copy(i).addScaledVector(gr,a).addScaledVector(xr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Qn=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(pi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(pi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=pi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,pi):pi.fromBufferAttribute(r,a),pi.applyMatrix4(e.matrixWorld),this.expandByPoint(pi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Mo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Mo.copy(i.boundingBox)),Mo.applyMatrix4(e.matrixWorld),this.union(Mo)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,pi),pi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(da),So.subVectors(this.max,da),_r.subVectors(e.a,da),yr.subVectors(e.b,da),vr.subVectors(e.c,da),hs.subVectors(yr,_r),ds.subVectors(vr,yr),Vs.subVectors(_r,vr);let t=[0,-hs.z,hs.y,0,-ds.z,ds.y,0,-Vs.z,Vs.y,hs.z,0,-hs.x,ds.z,0,-ds.x,Vs.z,0,-Vs.x,-hs.y,hs.x,0,-ds.y,ds.x,0,-Vs.y,Vs.x,0];return!tu(t,_r,yr,vr,So)||(t=[1,0,0,0,1,0,0,0,1],!tu(t,_r,yr,vr,So))?!1:(wo.crossVectors(hs,ds),t=[wo.x,wo.y,wo.z],tu(t,_r,yr,vr,So))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,pi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(pi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Zi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Zi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Zi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Zi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Zi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Zi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Zi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Zi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Zi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Zi=[new L,new L,new L,new L,new L,new L,new L,new L],pi=new L,Mo=new Qn,_r=new L,yr=new L,vr=new L,hs=new L,ds=new L,Vs=new L,da=new L,So=new L,wo=new L,Gs=new L;function tu(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Gs.fromArray(n,r);let o=s.x*Math.abs(Gs.x)+s.y*Math.abs(Gs.y)+s.z*Math.abs(Gs.z),l=e.dot(Gs),c=t.dot(Gs),u=i.dot(Gs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var Vt=new L,Eo=new De,s0=0,Gt=class extends xi{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:s0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=ll,this.updateRanges=[],this.gpuType=ii,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Eo.fromBufferAttribute(this,t),Eo.applyMatrix3(e),this.setXY(t,Eo.x,Eo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix3(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix4(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Vt.fromBufferAttribute(this,t),Vt.applyNormalMatrix(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Vt.fromBufferAttribute(this,t),Vt.transformDirection(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=mi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=vt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=mi(t,this.array)),t}setX(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=mi(t,this.array)),t}setY(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=mi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=mi(t,this.array)),t}setW(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),i=vt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),i=vt(i,this.array),s=vt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),i=vt(i,this.array),s=vt(s,this.array),r=vt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ll&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}};var Ta=class extends Gt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Ca=class extends Gt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Ct=class extends Gt{constructor(e,t,i){super(new Float32Array(e),t,i)}},r0=new Qn,fa=new L,nu=new L,es=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):r0.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;fa.subVectors(e,this.center);let t=fa.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(fa,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(nu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(fa.copy(e.center).add(nu)),this.expandByPoint(fa.copy(e.center).sub(nu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},a0=0,Jn=new ft,iu=new Ht,br=new L,kn=new Qn,pa=new Qn,Jt=new L,Ot=class n extends xi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:a0++}),this.uuid=Ji(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ip(e)?Ca:Ta)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Ze().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Jn.makeRotationFromQuaternion(e),this.applyMatrix4(Jn),this}rotateX(e){return Jn.makeRotationX(e),this.applyMatrix4(Jn),this}rotateY(e){return Jn.makeRotationY(e),this.applyMatrix4(Jn),this}rotateZ(e){return Jn.makeRotationZ(e),this.applyMatrix4(Jn),this}translate(e,t,i){return Jn.makeTranslation(e,t,i),this.applyMatrix4(Jn),this}scale(e,t,i){return Jn.makeScale(e,t,i),this.applyMatrix4(Jn),this}lookAt(e){return iu.lookAt(e),iu.updateMatrix(),this.applyMatrix4(iu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(br).negate(),this.translate(br.x,br.y,br.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ct(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Oe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ve("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];kn.setFromBufferAttribute(r),this.morphTargetsRelative?(Jt.addVectors(this.boundingBox.min,kn.min),this.boundingBox.expandByPoint(Jt),Jt.addVectors(this.boundingBox.max,kn.max),this.boundingBox.expandByPoint(Jt)):(this.boundingBox.expandByPoint(kn.min),this.boundingBox.expandByPoint(kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ve('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new es);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ve("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){let i=this.boundingSphere.center;if(kn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];pa.setFromBufferAttribute(o),this.morphTargetsRelative?(Jt.addVectors(kn.min,pa.min),kn.expandByPoint(Jt),Jt.addVectors(kn.max,pa.max),kn.expandByPoint(Jt)):(kn.expandByPoint(pa.min),kn.expandByPoint(pa.max))}kn.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)Jt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Jt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Jt.fromBufferAttribute(o,c),l&&(br.fromBufferAttribute(e,c),Jt.add(br)),s=Math.max(s,i.distanceToSquared(Jt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ve('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ve("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new Gt(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let y=0;y<i.count;y++)o[y]=new L,l[y]=new L;let c=new L,u=new L,d=new L,h=new De,f=new De,g=new De,x=new L,m=new L;function p(y,E,D){c.fromBufferAttribute(i,y),u.fromBufferAttribute(i,E),d.fromBufferAttribute(i,D),h.fromBufferAttribute(r,y),f.fromBufferAttribute(r,E),g.fromBufferAttribute(r,D),u.sub(c),d.sub(c),f.sub(h),g.sub(h);let A=1/(f.x*g.y-g.x*f.y);isFinite(A)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(A),m.copy(d).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(A),o[y].add(x),o[E].add(x),o[D].add(x),l[y].add(m),l[E].add(m),l[D].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let y=0,E=S.length;y<E;++y){let D=S[y],A=D.start,U=D.count;for(let H=A,V=A+U;H<V;H+=3)p(e.getX(H+0),e.getX(H+1),e.getX(H+2))}let I=new L,M=new L,b=new L,w=new L;function T(y){b.fromBufferAttribute(s,y),w.copy(b);let E=o[y];I.copy(E),I.sub(b.multiplyScalar(b.dot(E))).normalize(),M.crossVectors(w,E);let A=M.dot(l[y])<0?-1:1;a.setXYZW(y,I.x,I.y,I.z,A)}for(let y=0,E=S.length;y<E;++y){let D=S[y],A=D.start,U=D.count;for(let H=A,V=A+U;H<V;H+=3)T(e.getX(H+0)),T(e.getX(H+1)),T(e.getX(H+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Gt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,f=i.count;h<f;h++)i.setXYZ(h,0,0,0);let s=new L,r=new L,a=new L,o=new L,l=new L,c=new L,u=new L,d=new L;if(e)for(let h=0,f=e.count;h<f;h+=3){let g=e.getX(h+0),x=e.getX(h+1),m=e.getX(h+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,m),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,f=t.count;h<f;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Jt.fromBufferAttribute(e,t),Jt.normalize(),e.setXYZ(t,Jt.x,Jt.y,Jt.z)}toNonIndexed(){function e(o,l){let c=o.array,u=o.itemSize,d=o.normalized,h=new c.constructor(l.length*u),f=0,g=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?f=l[x]*o.data.stride+o.offset:f=l[x]*u;for(let p=0;p<u;p++)h[g++]=c[f++]}return new Gt(h,u,d)}if(this.index===null)return Oe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,i);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,d=c.length;u<d;u++){let h=c[u],f=e(h,i);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){let f=c[d];u.push(f.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],d=r[c];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,u=a.length;c<u;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ra=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ll,this.updateRanges=[],this.version=0,this.uuid=Ji()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ji()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ji()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Mn=new L,kr=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Mn.fromBufferAttribute(this,t),Mn.applyMatrix4(e),this.setXYZ(t,Mn.x,Mn.y,Mn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Mn.fromBufferAttribute(this,t),Mn.applyNormalMatrix(e),this.setXYZ(t,Mn.x,Mn.y,Mn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Mn.fromBufferAttribute(this,t),Mn.transformDirection(e),this.setXYZ(t,Mn.x,Mn.y,Mn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=mi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=vt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=mi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=mi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=mi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=mi(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=vt(t,this.array),i=vt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=vt(t,this.array),i=vt(i,this.array),s=vt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=vt(t,this.array),i=vt(i,this.array),s=vt(s,this.array),r=vt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Ea("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Gt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Ea("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},o0=0,ei=class extends xi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:o0++}),this.uuid=Ji(),this.name="",this.type="Material",this.blending=qs,this.side=Qi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ko,this.blendDst=Jo,this.blendEquation=ms,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $e(0,0,0),this.blendAlpha=0,this.depthFunc=Ys,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$s,this.stencilZFail=$s,this.stencilZPass=$s,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Oe(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Oe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==qs&&(i.blending=this.blending),this.side!==Qi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ko&&(i.blendSrc=this.blendSrc),this.blendDst!==Jo&&(i.blendDst=this.blendDst),this.blendEquation!==ms&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ys&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==xu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==$s&&(i.stencilFail=this.stencilFail),this.stencilZFail!==$s&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==$s&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new $e().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new De().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new De().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},zr=class extends ei{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new $e(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Mr,ma=new L,Sr=new L,wr=new L,Er=new De,ga=new De,rf=new ft,Ao=new L,xa=new L,To=new L,nd=new De,su=new De,id=new De,Ia=class extends Ht{constructor(e=new zr){if(super(),this.isSprite=!0,this.type="Sprite",Mr===void 0){Mr=new Ot;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Ra(t,5);Mr.setIndex([0,1,2,0,2,3]),Mr.setAttribute("position",new kr(i,3,0,!1)),Mr.setAttribute("uv",new kr(i,2,3,!1))}this.geometry=Mr,this.material=e,this.center=new De(.5,.5),this.count=1}raycast(e,t){e.camera===null&&Ve('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Sr.setFromMatrixScale(this.matrixWorld),rf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),wr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Sr.multiplyScalar(-wr.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let a=this.center;Co(Ao.set(-.5,-.5,0),wr,a,Sr,s,r),Co(xa.set(.5,-.5,0),wr,a,Sr,s,r),Co(To.set(.5,.5,0),wr,a,Sr,s,r),nd.set(0,0),su.set(1,0),id.set(1,1);let o=e.ray.intersectTriangle(Ao,xa,To,!1,ma);if(o===null&&(Co(xa.set(-.5,.5,0),wr,a,Sr,s,r),su.set(0,1),o=e.ray.intersectTriangle(Ao,To,xa,!1,ma),o===null))return;let l=e.ray.origin.distanceTo(ma);l<e.near||l>e.far||t.push({distance:l,point:ma.clone(),uv:Li.getInterpolation(ma,Ao,xa,To,nd,su,id,new De),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Co(n,e,t,i,s,r){Er.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(ga.x=r*Er.x-s*Er.y,ga.y=s*Er.x+r*Er.y):ga.copy(Er),n.copy(e),n.x+=ga.x,n.y+=ga.y,n.applyMatrix4(rf)}var Ki=new L,ru=new L,Ro=new L,fs=new L,au=new L,Io=new L,ou=new L,gs=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ki)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ki.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ki.copy(this.origin).addScaledVector(this.direction,t),Ki.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){ru.copy(e).add(t).multiplyScalar(.5),Ro.copy(t).sub(e).normalize(),fs.copy(this.origin).sub(ru);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Ro),o=fs.dot(this.direction),l=-fs.dot(Ro),c=fs.lengthSq(),u=Math.abs(1-a*a),d,h,f,g;if(u>0)if(d=a*l-o,h=a*o-l,g=r*u,d>=0)if(h>=-g)if(h<=g){let x=1/u;d*=x,h*=x,f=d*(d+a*h+2*o)+h*(a*d+h+2*l)+c}else h=r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;else h=-r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;else h<=-g?(d=Math.max(0,-(-a*r+o)),h=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c):h<=g?(d=0,h=Math.min(Math.max(-r,-l),r),f=h*(h+2*l)+c):(d=Math.max(0,-(a*r+o)),h=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c);else h=a>0?-r:r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(ru).addScaledVector(Ro,h),f}intersectSphere(e,t){Ki.subVectors(e.center,this.origin);let i=Ki.dot(this.direction),s=Ki.dot(Ki)-i*i,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(o=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Ki)!==null}intersectTriangle(e,t,i,s,r){au.subVectors(t,e),Io.subVectors(i,e),ou.crossVectors(au,Io);let a=this.direction.dot(ou),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;fs.subVectors(this.origin,e);let l=o*this.direction.dot(Io.crossVectors(fs,Io));if(l<0)return null;let c=o*this.direction.dot(au.cross(fs));if(c<0||l+c>a)return null;let u=-o*fs.dot(ou);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ti=class extends ei{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ui,this.combine=Pl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},sd=new ft,Hs=new gs,Po=new es,rd=new L,Do=new L,Lo=new L,No=new L,lu=new L,Fo=new L,ad=new L,Uo=new L,ot=class extends Ht{constructor(e=new Ot,t=new ti){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Fo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],d=r[l];u!==0&&(lu.fromBufferAttribute(d,e),a?Fo.addScaledVector(lu,u):Fo.addScaledVector(lu.sub(t),u))}t.add(Fo)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Po.copy(i.boundingSphere),Po.applyMatrix4(r),Hs.copy(e.ray).recast(e.near),!(Po.containsPoint(Hs.origin)===!1&&(Hs.intersectSphere(Po,rd)===null||Hs.origin.distanceToSquared(rd)>(e.far-e.near)**2))&&(sd.copy(r).invert(),Hs.copy(e.ray).applyMatrix4(sd),!(i.boundingBox!==null&&Hs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Hs)))}_computeIntersections(e,t,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=h.length;g<x;g++){let m=h[g],p=a[m.materialIndex],S=Math.max(m.start,f.start),I=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let M=S,b=I;M<b;M+=3){let w=o.getX(M),T=o.getX(M+1),y=o.getX(M+2);s=Bo(this,p,e,i,c,u,d,w,T,y),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let S=o.getX(m),I=o.getX(m+1),M=o.getX(m+2);s=Bo(this,a,e,i,c,u,d,S,I,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=h.length;g<x;g++){let m=h[g],p=a[m.materialIndex],S=Math.max(m.start,f.start),I=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let M=S,b=I;M<b;M+=3){let w=M,T=M+1,y=M+2;s=Bo(this,p,e,i,c,u,d,w,T,y),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let S=m,I=m+1,M=m+2;s=Bo(this,a,e,i,c,u,d,S,I,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function l0(n,e,t,i,s,r,a,o){let l;if(e.side===an?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===Qi,o),l===null)return null;Uo.copy(o),Uo.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Uo);return c<t.near||c>t.far?null:{distance:c,point:Uo.clone(),object:n}}function Bo(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,Do),n.getVertexPosition(l,Lo),n.getVertexPosition(c,No);let u=l0(n,e,t,i,Do,Lo,No,ad);if(u){let d=new L;Li.getBarycoord(ad,Do,Lo,No,d),s&&(u.uv=Li.getInterpolatedAttribute(s,o,l,c,d,new De)),r&&(u.uv1=Li.getInterpolatedAttribute(r,o,l,c,d,new De)),a&&(u.normal=Li.getInterpolatedAttribute(a,o,l,c,d,new L),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let h={a:o,b:l,c,normal:new L,materialIndex:0};Li.getNormal(Do,Lo,No,h.normal),u.face=h,u.barycoord=d}return u}var Pa=class extends Wt{constructor(e=null,t=1,i=1,s,r,a,o,l,c=en,u=en,d,h){super(null,a,o,l,c,u,s,r,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Vr=class extends Gt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ar=new ft,od=new ft,Oo=[],ld=new Qn,c0=new ft,_a=new ot,ya=new es,Bi=class extends ot{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Vr(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,c0)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Qn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ar),ld.copy(e.boundingBox).applyMatrix4(Ar),this.boundingBox.union(ld)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new es),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ar),ya.copy(e.boundingSphere).applyMatrix4(Ar),this.boundingSphere.union(ya)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=e*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(_a.geometry=this.geometry,_a.material=this.material,_a.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ya.copy(this.boundingSphere),ya.applyMatrix4(i),e.ray.intersectsSphere(ya)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ar),od.multiplyMatrices(i,Ar),_a.matrixWorld=od,_a.raycast(e,Oo);for(let a=0,o=Oo.length;a<o;a++){let l=Oo[a];l.instanceId=r,l.object=this,t.push(l)}Oo.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Vr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Pa(new Float32Array(s*this.count),s,this.count,Ol,ii));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<i.length;c++)a+=i[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(i,l+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},cu=new L,u0=new L,h0=new Ze,jn=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=cu.subVectors(i,t).cross(u0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta(cu),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||h0.getNormalMatrix(e),s=this.coplanarPoint(cu).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ws=new es,d0=new De(.5,.5),ko=new L,Gr=class{constructor(e=new jn,t=new jn,i=new jn,s=new jn,r=new jn,a=new jn){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=gi,i=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],d=r[5],h=r[6],f=r[7],g=r[8],x=r[9],m=r[10],p=r[11],S=r[12],I=r[13],M=r[14],b=r[15];if(s[0].setComponents(c-a,f-u,p-g,b-S).normalize(),s[1].setComponents(c+a,f+u,p+g,b+S).normalize(),s[2].setComponents(c+o,f+d,p+x,b+I).normalize(),s[3].setComponents(c-o,f-d,p-x,b-I).normalize(),i)s[4].setComponents(l,h,m,M).normalize(),s[5].setComponents(c-l,f-h,p-m,b-M).normalize();else if(s[4].setComponents(c-l,f-h,p-m,b-M).normalize(),t===gi)s[5].setComponents(c+l,f+h,p+m,b+M).normalize();else if(t===Dr)s[5].setComponents(l,h,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ws.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ws.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ws)}intersectsSprite(e){Ws.center.set(0,0,0);let t=d0.distanceTo(e.center);return Ws.radius=.7071067811865476+t,Ws.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ws)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(ko.x=s.normal.x>0?e.max.x:e.min.x,ko.y=s.normal.y>0?e.max.y:e.min.y,ko.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ko)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var xs=class extends ei{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new $e(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},dl=new L,fl=new L,cd=new ft,va=new gs,zo=new es,uu=new L,ud=new L,Hr=class extends Ht{constructor(e=new Ot,t=new xs){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)dl.fromBufferAttribute(t,s-1),fl.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=dl.distanceTo(fl);e.setAttribute("lineDistance",new Ct(i,1))}else Oe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),zo.copy(i.boundingSphere),zo.applyMatrix4(s),zo.radius+=r,e.ray.intersectsSphere(zo)===!1)return;cd.copy(s).invert(),va.copy(e.ray).applyMatrix4(cd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){let f=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let x=f,m=g-1;x<m;x+=c){let p=u.getX(x),S=u.getX(x+1),I=Vo(this,e,va,l,p,S,x);I&&t.push(I)}if(this.isLineLoop){let x=u.getX(g-1),m=u.getX(f),p=Vo(this,e,va,l,x,m,g-1);p&&t.push(p)}}else{let f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let x=f,m=g-1;x<m;x+=c){let p=Vo(this,e,va,l,x,x+1,x);p&&t.push(p)}if(this.isLineLoop){let x=Vo(this,e,va,l,g-1,f,g-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Vo(n,e,t,i,s,r,a){let o=n.geometry.attributes.position;if(dl.fromBufferAttribute(o,s),fl.fromBufferAttribute(o,r),t.distanceSqToSegment(dl,fl,uu,ud)>i)return;uu.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(uu);if(!(c<e.near||c>e.far))return{distance:c,point:ud.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}var hd=new L,dd=new L,Wr=class extends Hr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)hd.fromBufferAttribute(t,s),dd.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+hd.distanceTo(dd);e.setAttribute("lineDistance",new Ct(i,1))}else Oe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Da=class extends Wt{constructor(e=[],t=ws,i,s,r,a,o,l,c,u){super(e,t,i,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ts=class extends Wt{constructor(e,t,i,s,r,a,o,l,c){super(e,t,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ns=class extends Wt{constructor(e,t,i=yi,s,r,a,o=en,l=en,c,u=Fi,d=1){if(u!==Fi&&u!==As)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:e,height:t,depth:d};super(h,s,r,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ur(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},pl=class extends ns{constructor(e,t=yi,i=ws,s,r,a=en,o=en,l,c=Fi){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,i,s,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},La=class extends Wt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},tn=class n extends Ot{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],d=[],h=0,f=0;g("z","y","x",-1,-1,i,t,e,a,r,0),g("z","y","x",1,-1,i,t,-e,a,r,1),g("x","z","y",1,1,e,i,t,s,a,2),g("x","z","y",1,-1,e,i,-t,s,a,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Ct(c,3)),this.setAttribute("normal",new Ct(u,3)),this.setAttribute("uv",new Ct(d,2));function g(x,m,p,S,I,M,b,w,T,y,E){let D=M/T,A=b/y,U=M/2,H=b/2,V=w/2,z=T+1,F=y+1,W=0,ne=0,ie=new L;for(let _e=0;_e<F;_e++){let ve=_e*A-H;for(let Ee=0;Ee<z;Ee++){let Ke=Ee*D-U;ie[x]=Ke*S,ie[m]=ve*I,ie[p]=V,c.push(ie.x,ie.y,ie.z),ie[x]=0,ie[m]=0,ie[p]=w>0?1:-1,u.push(ie.x,ie.y,ie.z),d.push(Ee/T),d.push(1-_e/y),W+=1}}for(let _e=0;_e<y;_e++)for(let ve=0;ve<T;ve++){let Ee=h+ve+z*_e,Ke=h+ve+z*(_e+1),wt=h+(ve+1)+z*(_e+1),Je=h+(ve+1)+z*_e;l.push(Ee,Ke,Je),l.push(Ke,wt,Je),ne+=6}o.addGroup(f,ne,E),f+=ne,h+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Na=class n extends Ot{constructor(e=1,t=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],d=[],h=[],f=[],g=0,x=[],m=i/2,p=0;S(),a===!1&&(e>0&&I(!0),t>0&&I(!1)),this.setIndex(u),this.setAttribute("position",new Ct(d,3)),this.setAttribute("normal",new Ct(h,3)),this.setAttribute("uv",new Ct(f,2));function S(){let M=new L,b=new L,w=0,T=(t-e)/i;for(let y=0;y<=r;y++){let E=[],D=y/r,A=D*(t-e)+e;for(let U=0;U<=s;U++){let H=U/s,V=H*l+o,z=Math.sin(V),F=Math.cos(V);b.x=A*z,b.y=-D*i+m,b.z=A*F,d.push(b.x,b.y,b.z),M.set(z,T,F).normalize(),h.push(M.x,M.y,M.z),f.push(H,1-D),E.push(g++)}x.push(E)}for(let y=0;y<s;y++)for(let E=0;E<r;E++){let D=x[E][y],A=x[E+1][y],U=x[E+1][y+1],H=x[E][y+1];(e>0||E!==0)&&(u.push(D,A,H),w+=3),(t>0||E!==r-1)&&(u.push(A,U,H),w+=3)}c.addGroup(p,w,0),p+=w}function I(M){let b=g,w=new De,T=new L,y=0,E=M===!0?e:t,D=M===!0?1:-1;for(let U=1;U<=s;U++)d.push(0,m*D,0),h.push(0,D,0),f.push(.5,.5),g++;let A=g;for(let U=0;U<=s;U++){let V=U/s*l+o,z=Math.cos(V),F=Math.sin(V);T.x=E*F,T.y=m*D,T.z=E*z,d.push(T.x,T.y,T.z),h.push(0,D,0),w.x=z*.5+.5,w.y=F*.5*D+.5,f.push(w.x,w.y),g++}for(let U=0;U<s;U++){let H=b+U,V=A+U;M===!0?u.push(V,V+1,H):u.push(V+1,V,H),y+=3}c.addGroup(p,y,M===!0?1:2),p+=y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Go=new L,Ho=new L,hu=new L,Wo=new Li,Fa=class extends Ot{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let s=Math.pow(10,4),r=Math.cos(Ir*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],u=["a","b","c"],d=new Array(3),h={},f=[];for(let g=0;g<l;g+=3){a?(c[0]=a.getX(g),c[1]=a.getX(g+1),c[2]=a.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);let{a:x,b:m,c:p}=Wo;if(x.fromBufferAttribute(o,c[0]),m.fromBufferAttribute(o,c[1]),p.fromBufferAttribute(o,c[2]),Wo.getNormal(hu),d[0]=`${Math.round(x.x*s)},${Math.round(x.y*s)},${Math.round(x.z*s)}`,d[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,d[2]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let S=0;S<3;S++){let I=(S+1)%3,M=d[S],b=d[I],w=Wo[u[S]],T=Wo[u[I]],y=`${M}_${b}`,E=`${b}_${M}`;E in h&&h[E]?(hu.dot(h[E].normal)<=r&&(f.push(w.x,w.y,w.z),f.push(T.x,T.y,T.z)),h[E]=null):y in h||(h[y]={index0:c[S],index1:c[I],normal:hu.clone()})}}for(let g in h)if(h[g]){let{index0:x,index1:m}=h[g];Go.fromBufferAttribute(o,x),Ho.fromBufferAttribute(o,m),f.push(Go.x,Go.y,Go.z),f.push(Ho.x,Ho.y,Ho.z)}this.setAttribute("position",new Ct(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};var ni=class n extends Ot{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,u=l+1,d=e/o,h=t/l,f=[],g=[],x=[],m=[];for(let p=0;p<u;p++){let S=p*h-a;for(let I=0;I<c;I++){let M=I*d-r;g.push(M,-S,0),x.push(0,0,1),m.push(I/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<o;S++){let I=S+c*p,M=S+c*(p+1),b=S+1+c*(p+1),w=S+1+c*p;f.push(I,M,w),f.push(M,b,w)}this.setIndex(f),this.setAttribute("position",new Ct(g,3)),this.setAttribute("normal",new Ct(x,3)),this.setAttribute("uv",new Ct(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}};var Ua=class n extends Ot{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,u=[],d=new L,h=new L,f=[],g=[],x=[],m=[];for(let p=0;p<=i;p++){let S=[],I=p/i,M=a+I*o,b=e*Math.cos(M),w=Math.sqrt(e*e-b*b),T=0;p===0&&a===0?T=.5/t:p===i&&l===Math.PI&&(T=-.5/t);for(let y=0;y<=t;y++){let E=y/t,D=s+E*r;d.x=-w*Math.cos(D),d.y=b,d.z=w*Math.sin(D),g.push(d.x,d.y,d.z),h.copy(d).normalize(),x.push(h.x,h.y,h.z),m.push(E+T,1-I),S.push(c++)}u.push(S)}for(let p=0;p<i;p++)for(let S=0;S<t;S++){let I=u[p][S+1],M=u[p][S],b=u[p+1][S],w=u[p+1][S+1];(p!==0||a>0)&&f.push(I,M,w),(p!==i-1||l<Math.PI)&&f.push(M,b,w)}this.setIndex(f),this.setAttribute("position",new Ct(g,3)),this.setAttribute("normal",new Ct(x,3)),this.setAttribute("uv",new Ct(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Ba=class n extends Ot{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},i=Math.floor(i),s=Math.floor(s);let l=[],c=[],u=[],d=[],h=new L,f=new L,g=new L;for(let x=0;x<=i;x++){let m=a+x/i*o;for(let p=0;p<=s;p++){let S=p/s*r;f.x=(e+t*Math.cos(m))*Math.cos(S),f.y=(e+t*Math.cos(m))*Math.sin(S),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),h.x=e*Math.cos(S),h.y=e*Math.sin(S),g.subVectors(f,h).normalize(),u.push(g.x,g.y,g.z),d.push(p/s),d.push(x/i)}}for(let x=1;x<=i;x++)for(let m=1;m<=s;m++){let p=(s+1)*x+m-1,S=(s+1)*(x-1)+m-1,I=(s+1)*(x-1)+m,M=(s+1)*x+m;l.push(p,S,M),l.push(S,I,M)}this.setIndex(l),this.setAttribute("position",new Ct(c,3)),this.setAttribute("normal",new Ct(u,3)),this.setAttribute("uv",new Ct(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Oa=class extends ei{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new $e(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}};function Qs(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];if(fd(s))s.isRenderTargetTexture?(Oe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(fd(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function pn(n){let e={};for(let t=0;t<n.length;t++){let i=Qs(n[t]);for(let s in i)e[s]=i[s]}return e}function fd(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function f0(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Gu(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:at.workingColorSpace}var af={clone:Qs,merge:pn},p0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,m0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Gn=class extends ei{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=p0,this.fragmentShader=m0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Qs(e.uniforms),this.uniformsGroups=f0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new $e().setHex(s.value);break;case"v2":this.uniforms[i].value=new De().fromArray(s.value);break;case"v3":this.uniforms[i].value=new L().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Ut().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Ze().fromArray(s.value);break;case"m4":this.uniforms[i].value=new ft().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},ml=class extends Gn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Hn=class extends ei{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new $e(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=no,this.normalScale=new De(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ui,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},$r=class extends Hn{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new De(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return nt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new $e(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new $e(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new $e(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var ka=class extends ei{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=no,this.normalScale=new De(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ui,this.combine=Pl,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},gl=class extends ei{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$d,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},xl=class extends ei{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function $o(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}var _s=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=t[++i],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}a=i,i=0;break t}break n}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},_l=class extends _s{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:pu,endingEnd:pu}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case mu:r=e,o=2*t-i;break;case gu:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case mu:a=e,l=2*i-t;break;case gu:a=1,l=i+s[1]-s[0];break;default:a=e-1,l=t}let c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,f=this._weightNext,g=(i-t)/(s-t),x=g*g,m=x*g,p=-h*m+2*h*x-h*g,S=(1+h)*m+(-1.5-2*h)*x+(-.5+h)*g+1,I=(-1-f)*m+(1.5+f)*x+.5*g,M=f*m-f*x;for(let b=0;b!==o;++b)r[b]=p*a[u+b]+S*a[c+b]+I*a[l+b]+M*a[d+b];return r}},yl=class extends _s{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(i-t)/(s-t),d=1-u;for(let h=0;h!==o;++h)r[h]=a[c+h]*d+a[l+h]*u;return r}},vl=class extends _s{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},bl=class extends _s{interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this.inTangents,d=this.outTangents;if(!u||!d){let g=(i-t)/(s-t),x=1-g;for(let m=0;m!==o;++m)r[m]=a[c+m]*x+a[l+m]*g;return r}let h=o*2,f=e-1;for(let g=0;g!==o;++g){let x=a[c+g],m=a[l+g],p=f*h+g*2,S=d[p],I=d[p+1],M=e*h+g*2,b=u[M],w=u[M+1],T=(i-t)/(s-t),y,E,D,A,U;for(let H=0;H<8;H++){y=T*T,E=y*T,D=1-T,A=D*D,U=A*D;let z=U*t+3*A*T*S+3*D*y*b+E*s-i;if(Math.abs(z)<1e-10)break;let F=3*A*(S-t)+6*D*T*(b-S)+3*y*(s-b);if(Math.abs(F)<1e-10)break;T=T-z/F,T=Math.max(0,Math.min(1,T))}r[g]=U*x+3*A*T*I+3*D*y*w+E*m}return r}},Wn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=$o(t,this.TimeBufferType),this.values=$o(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:$o(e.times,Array),values:$o(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new vl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new yl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new _l(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new bl(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Ma:t=this.InterpolantFactoryMethodDiscrete;break;case ol:t=this.InterpolantFactoryMethodLinear;break;case Yo:t=this.InterpolantFactoryMethodSmooth;break;case fu:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Oe("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ma;case this.InterpolantFactoryMethodLinear:return ol;case this.InterpolantFactoryMethodSmooth:return Yo;case this.InterpolantFactoryMethodBezier:return fu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ve("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(Ve("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){Ve("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Ve("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&Pp(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Ve("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Yo,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(s)l=!0;else{let d=o*i,h=d-i,f=d+i;for(let g=0;g!==i;++g){let x=t[d+g];if(x!==t[h+g]||x!==t[f+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let d=o*i,h=a*i;for(let f=0;f!==i;++f)t[h+f]=t[d+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Wn.prototype.ValueTypeName="";Wn.prototype.TimeBufferType=Float32Array;Wn.prototype.ValueBufferType=Float32Array;Wn.prototype.DefaultInterpolation=ol;var ys=class extends Wn{constructor(e,t,i){super(e,t,i)}};ys.prototype.ValueTypeName="bool";ys.prototype.ValueBufferType=Array;ys.prototype.DefaultInterpolation=Ma;ys.prototype.InterpolantFactoryMethodLinear=void 0;ys.prototype.InterpolantFactoryMethodSmooth=void 0;var Ml=class extends Wn{constructor(e,t,i,s){super(e,t,i,s)}};Ml.prototype.ValueTypeName="color";var Sl=class extends Wn{constructor(e,t,i,s){super(e,t,i,s)}};Sl.prototype.ValueTypeName="number";var wl=class extends _s{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(s-t),c=e*o;for(let u=c+o;c!==u;c+=4)zn.slerpFlat(r,0,a,c-o,a,c,l);return r}},za=class extends Wn{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new wl(this.times,this.values,this.getValueSize(),e)}};za.prototype.ValueTypeName="quaternion";za.prototype.InterpolantFactoryMethodSmooth=void 0;var vs=class extends Wn{constructor(e,t,i){super(e,t,i)}};vs.prototype.ValueTypeName="string";vs.prototype.ValueBufferType=Array;vs.prototype.DefaultInterpolation=Ma;vs.prototype.InterpolantFactoryMethodLinear=void 0;vs.prototype.InterpolantFactoryMethodSmooth=void 0;var El=class extends Wn{constructor(e,t,i,s){super(e,t,i,s)}};El.prototype.ValueTypeName="vector";var Zo={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(pd(n)||(this.files[n]=e))},get:function(n){if(this.enabled!==!1&&!pd(n))return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};function pd(n){try{let e=n.slice(n.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Al=class{constructor(e,t,i){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){let d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){let f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},of=new Al,Xr=class{constructor(e){this.manager=e!==void 0?e:of,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Xr.DEFAULT_MATERIAL_NAME="__DEFAULT";var Tr=new WeakMap,Tl=class extends Xr{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Zo.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let d=Tr.get(a);d===void 0&&(d=[],Tr.set(a,d)),d.push({onLoad:t,onError:s})}return a}let o=Lr("img");function l(){u(),t&&t(this);let d=Tr.get(this)||[];for(let h=0;h<d.length;h++){let f=d[h];f.onLoad&&f.onLoad(this)}Tr.delete(this),r.manager.itemEnd(e)}function c(d){u(),s&&s(d),Zo.remove(`image:${e}`);let h=Tr.get(this)||[];for(let f=0;f<h.length;f++){let g=h[f];g.onError&&g.onError(d)}Tr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Zo.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}};var Va=class extends Xr{constructor(e){super(e)}load(e,t,i,s){let r=new Wt,a=new Tl(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}},qr=class extends Ht{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new $e(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Ga=class extends qr{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.groundColor=new $e(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},du=new ft,md=new L,gd=new L,Cl=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new De(512,512),this.mapType=Rn,this.map=null,this.mapPass=null,this.matrix=new ft,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Gr,this._frameExtents=new De(1,1),this._viewportCount=1,this._viewports=[new Ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;md.setFromMatrixPosition(e.matrixWorld),t.position.copy(md),gd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(gd),t.updateMatrixWorld(),du.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(du,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Dr||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(du)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Xo=new L,qo=new zn,Di=new L,Ha=class extends Ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ft,this.projectionMatrix=new ft,this.projectionMatrixInverse=new ft,this.coordinateSystem=gi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Xo,qo,Di),Di.x===1&&Di.y===1&&Di.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Xo,qo,Di.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Xo,qo,Di),Di.x===1&&Di.y===1&&Di.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Xo,qo,Di.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ps=new L,xd=new De,_d=new De,sn=class extends Ha{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Fr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ir*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Fr*2*Math.atan(Math.tan(Ir*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ps.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ps.x,ps.y).multiplyScalar(-e/ps.z),ps.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ps.x,ps.y).multiplyScalar(-e/ps.z)}getViewSize(e,t){return this.getViewBounds(e,xd,_d),t.subVectors(_d,xd)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ir*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var _u=class extends Cl{constructor(){super(new sn(90,1,.5,500)),this.isPointLightShadow=!0}},Wa=class extends qr{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new _u}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Yr=class extends Ha{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},yu=class extends Cl{constructor(){super(new Yr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ks=class extends qr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.target=new Ht,this.shadow=new yu}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Cr=-90,Rr=1,Rl=class extends Ht{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new sn(Cr,Rr,e,t);s.layers=this.layers,this.add(s);let r=new sn(Cr,Rr,e,t);r.layers=this.layers,this.add(r);let a=new sn(Cr,Rr,e,t);a.layers=this.layers,this.add(a);let o=new sn(Cr,Rr,e,t);o.layers=this.layers,this.add(o);let l=new sn(Cr,Rr,e,t);l.layers=this.layers,this.add(l);let c=new sn(Cr,Rr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===gi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Dr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,h,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Il=class extends sn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Hu="\\[\\]\\.:\\/",g0=new RegExp("["+Hu+"]","g"),Wu="[^"+Hu+"]",x0="[^"+Hu.replace("\\.","")+"]",_0=/((?:WC+[\/:])*)/.source.replace("WC",Wu),y0=/(WCOD+)?/.source.replace("WCOD",x0),v0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Wu),b0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Wu),M0=new RegExp("^"+_0+y0+v0+b0+"$"),S0=["material","materials","bones","map"],vu=class{constructor(e,t,i){let s=i||Tt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Tt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(g0,"")}static parseTrackName(e){let t=M0.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);S0.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=i(o.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Oe("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){Ve("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ve("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ve("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ve("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ve("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Ve("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){Ve("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;Ve("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ve("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ve("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Tt.Composite=vu;Tt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Tt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Tt.prototype.GetterByBindingType=[Tt.prototype._getValue_direct,Tt.prototype._getValue_array,Tt.prototype._getValue_arrayElement,Tt.prototype._getValue_toArray];Tt.prototype.SetterByBindingTypeAndVersioning=[[Tt.prototype._setValue_direct,Tt.prototype._setValue_direct_setNeedsUpdate,Tt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_array,Tt.prototype._setValue_array_setNeedsUpdate,Tt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_arrayElement,Tt.prototype._setValue_arrayElement_setNeedsUpdate,Tt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_fromArray,Tt.prototype._setValue_fromArray_setNeedsUpdate,Tt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var jy=new Float32Array(1);var yd=new ft,$a=class{constructor(e,t,i=0,s=1/0){this.ray=new gs(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Br,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ve("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return yd.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(yd),this}intersectObject(e,t=!0,i=[]){return bu(e,this,i,t),i.sort(vd),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)bu(e[s],this,i,t);return i.sort(vd),i}};function vd(n,e){return n.distance-e.distance}function bu(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let a=0,o=r.length;a<o;a++)bu(r[a],e,t,!0)}}var bs=class{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=nt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(nt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Mu=class n{static{n.prototype.isMatrix2=!0}constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};var Xa=class extends xi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){Oe("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function $u(n,e,t,i){let s=w0(i);switch(t){case Ou:return n*e;case Ol:return n*e/s.components*s.byteLength;case kl:return n*e/s.components*s.byteLength;case Ts:return n*e*2/s.components*s.byteLength;case zl:return n*e*2/s.components*s.byteLength;case ku:return n*e*3/s.components*s.byteLength;case si:return n*e*4/s.components*s.byteLength;case Vl:return n*e*4/s.components*s.byteLength;case Ka:case Ja:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ja:case Qa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Hl:case $l:return Math.max(n,16)*Math.max(e,8)/4;case Gl:case Wl:return Math.max(n,8)*Math.max(e,8)/2;case Xl:case ql:case Zl:case Kl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Yl:case eo:case Jl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case jl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ql:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case ec:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case tc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case nc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case ic:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case sc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case rc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case ac:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case oc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case lc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case cc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case uc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case hc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case dc:case fc:case pc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case mc:case gc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case to:case xc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function w0(n){switch(n){case Rn:case Nu:return{byteLength:1,components:1};case Kr:case Fu:case ki:return{byteLength:2,components:1};case Ul:case Bl:return{byteLength:2,components:4};case yi:case Fl:case ii:return{byteLength:4,components:1};case Uu:case Bu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"185"}}));typeof window<"u"&&(window.__THREE__?Oe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="185");function If(){let n=null,e=!1,t=null,i=null;function s(r,a){t(r,a),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function R0(n){let e=new WeakMap;function t(o,l){let c=o.array,u=o.usage,d=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){let u=l.array,d=l.updateRanges;if(n.bindBuffer(c,o),d.length===0)n.bufferSubData(c,0,u);else{d.sort((f,g)=>f.start-g.start);let h=0;for(let f=1;f<d.length;f++){let g=d[h],x=d[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++h,d[h]=x)}d.length=h+1;for(let f=0,g=d.length;f<g;f++){let x=d[f];n.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var I0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,P0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,D0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,L0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,N0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,F0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,U0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,B0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,O0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,k0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,z0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,V0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,G0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,H0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,W0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,$0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,X0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,q0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Y0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Z0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,K0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,J0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,j0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Q0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,em=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,tm=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,nm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,im=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,sm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,rm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,am="gl_FragColor = linearToOutputTexel( gl_FragColor );",om=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,lm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,cm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,um=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,hm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,dm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,pm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,mm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,_m=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ym=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,bm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Mm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Sm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Em=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Am=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Tm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Cm=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Rm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Im=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Pm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Dm=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Lm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Nm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Um=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Bm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Om=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,km=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,zm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Gm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Hm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Wm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$m=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,qm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ym=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Zm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Km=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Qm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,eg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,tg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ng=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ig=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,rg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,ag=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,og=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,lg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ug=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,dg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,fg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,pg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,mg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,gg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,_g=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,vg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Mg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Sg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,wg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Eg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ag=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Tg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Cg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Rg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Ig=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Pg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ng=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ug=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Bg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Og=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,kg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,zg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Vg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Hg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Wg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,$g=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Zg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Jg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,jg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ex=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,tx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ix=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,rx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ax=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ox=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,lx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,cx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,je={alphahash_fragment:I0,alphahash_pars_fragment:P0,alphamap_fragment:D0,alphamap_pars_fragment:L0,alphatest_fragment:N0,alphatest_pars_fragment:F0,aomap_fragment:U0,aomap_pars_fragment:B0,batching_pars_vertex:O0,batching_vertex:k0,begin_vertex:z0,beginnormal_vertex:V0,bsdfs:G0,iridescence_fragment:H0,bumpmap_pars_fragment:W0,clipping_planes_fragment:$0,clipping_planes_pars_fragment:X0,clipping_planes_pars_vertex:q0,clipping_planes_vertex:Y0,color_fragment:Z0,color_pars_fragment:K0,color_pars_vertex:J0,color_vertex:j0,common:Q0,cube_uv_reflection_fragment:em,defaultnormal_vertex:tm,displacementmap_pars_vertex:nm,displacementmap_vertex:im,emissivemap_fragment:sm,emissivemap_pars_fragment:rm,colorspace_fragment:am,colorspace_pars_fragment:om,envmap_fragment:lm,envmap_common_pars_fragment:cm,envmap_pars_fragment:um,envmap_pars_vertex:hm,envmap_physical_pars_fragment:Mm,envmap_vertex:dm,fog_vertex:fm,fog_pars_vertex:pm,fog_fragment:mm,fog_pars_fragment:gm,gradientmap_pars_fragment:xm,lightmap_pars_fragment:_m,lights_lambert_fragment:ym,lights_lambert_pars_fragment:vm,lights_pars_begin:bm,lights_toon_fragment:Sm,lights_toon_pars_fragment:wm,lights_phong_fragment:Em,lights_phong_pars_fragment:Am,lights_physical_fragment:Tm,lights_physical_pars_fragment:Cm,lights_fragment_begin:Rm,lights_fragment_maps:Im,lights_fragment_end:Pm,lightprobes_pars_fragment:Dm,logdepthbuf_fragment:Lm,logdepthbuf_pars_fragment:Nm,logdepthbuf_pars_vertex:Fm,logdepthbuf_vertex:Um,map_fragment:Bm,map_pars_fragment:Om,map_particle_fragment:km,map_particle_pars_fragment:zm,metalnessmap_fragment:Vm,metalnessmap_pars_fragment:Gm,morphinstance_vertex:Hm,morphcolor_vertex:Wm,morphnormal_vertex:$m,morphtarget_pars_vertex:Xm,morphtarget_vertex:qm,normal_fragment_begin:Ym,normal_fragment_maps:Zm,normal_pars_fragment:Km,normal_pars_vertex:Jm,normal_vertex:jm,normalmap_pars_fragment:Qm,clearcoat_normal_fragment_begin:eg,clearcoat_normal_fragment_maps:tg,clearcoat_pars_fragment:ng,iridescence_pars_fragment:ig,opaque_fragment:sg,packing:rg,premultiplied_alpha_fragment:ag,project_vertex:og,dithering_fragment:lg,dithering_pars_fragment:cg,roughnessmap_fragment:ug,roughnessmap_pars_fragment:hg,shadowmap_pars_fragment:dg,shadowmap_pars_vertex:fg,shadowmap_vertex:pg,shadowmask_pars_fragment:mg,skinbase_vertex:gg,skinning_pars_vertex:xg,skinning_vertex:_g,skinnormal_vertex:yg,specularmap_fragment:vg,specularmap_pars_fragment:bg,tonemapping_fragment:Mg,tonemapping_pars_fragment:Sg,transmission_fragment:wg,transmission_pars_fragment:Eg,uv_pars_fragment:Ag,uv_pars_vertex:Tg,uv_vertex:Cg,worldpos_vertex:Rg,background_vert:Ig,background_frag:Pg,backgroundCube_vert:Dg,backgroundCube_frag:Lg,cube_vert:Ng,cube_frag:Fg,depth_vert:Ug,depth_frag:Bg,distance_vert:Og,distance_frag:kg,equirect_vert:zg,equirect_frag:Vg,linedashed_vert:Gg,linedashed_frag:Hg,meshbasic_vert:Wg,meshbasic_frag:$g,meshlambert_vert:Xg,meshlambert_frag:qg,meshmatcap_vert:Yg,meshmatcap_frag:Zg,meshnormal_vert:Kg,meshnormal_frag:Jg,meshphong_vert:jg,meshphong_frag:Qg,meshphysical_vert:ex,meshphysical_frag:tx,meshtoon_vert:nx,meshtoon_frag:ix,points_vert:sx,points_frag:rx,shadow_vert:ax,shadow_frag:ox,sprite_vert:lx,sprite_frag:cx},we={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},envMapRotation:{value:new Ze},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new De(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new L},probesMax:{value:new L},probesResolution:{value:new L}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new De(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},Vi={basic:{uniforms:pn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:pn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new $e(0)},envMapIntensity:{value:1}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:pn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:pn([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:pn([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new $e(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:pn([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:pn([we.points,we.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:pn([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:pn([we.common,we.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:pn([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:pn([we.sprite,we.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ze}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distance:{uniforms:pn([we.common,we.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distance_vert,fragmentShader:je.distance_frag},shadow:{uniforms:pn([we.lights,we.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};Vi.physical={uniforms:pn([Vi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new De(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new De},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new De},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};var vc={r:0,b:0,g:0},ux=new ft,Pf=new Ze;Pf.set(-1,0,0,0,1,0,0,0,1);function hx(n,e,t,i,s,r){let a=new $e(0),o=s===!0?0:1,l,c,u=null,d=0,h=null;function f(S){let I=S.isScene===!0?S.background:null;if(I&&I.isTexture){let M=S.backgroundBlurriness>0;I=e.get(I,M)}return I}function g(S){let I=!1,M=f(S);M===null?m(a,o):M&&M.isColor&&(m(M,1),I=!0);let b=n.xr.getEnvironmentBlendMode();b==="additive"?t.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||I)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function x(S,I){let M=f(I);M&&(M.isCubeTexture||M.mapping===Ya)?(c===void 0&&(c=new ot(new tn(1,1,1),new Gn({name:"BackgroundCubeMaterial",uniforms:Qs(Vi.backgroundCube.uniforms),vertexShader:Vi.backgroundCube.vertexShader,fragmentShader:Vi.backgroundCube.fragmentShader,side:an,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,w,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=I.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(ux.makeRotationFromEuler(I.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Pf),c.material.toneMapped=at.getTransfer(M.colorSpace)!==xt,(u!==M||d!==M.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,u=M,d=M.version,h=n.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new ot(new ni(2,2),new Gn({name:"BackgroundMaterial",uniforms:Qs(Vi.background.uniforms),vertexShader:Vi.background.vertexShader,fragmentShader:Vi.background.fragmentShader,side:Qi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,l.material.toneMapped=at.getTransfer(M.colorSpace)!==xt,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||d!==M.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,u=M,d=M.version,h=n.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function m(S,I){S.getRGB(vc,Gu(n)),t.buffers.color.setClear(vc.r,vc.g,vc.b,I,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,I=1){a.set(S),o=I,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,m(a,o)},render:g,addToRenderList:x,dispose:p}}function dx(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null),r=s,a=!1;function o(A,U,H,V,z){let F=!1,W=d(A,V,H,U);r!==W&&(r=W,c(r.object)),F=f(A,V,H,z),F&&g(A,V,H,z),z!==null&&e.update(z,n.ELEMENT_ARRAY_BUFFER),(F||a)&&(a=!1,M(A,U,H,V),z!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return n.createVertexArray()}function c(A){return n.bindVertexArray(A)}function u(A){return n.deleteVertexArray(A)}function d(A,U,H,V){let z=V.wireframe===!0,F=i[U.id];F===void 0&&(F={},i[U.id]=F);let W=A.isInstancedMesh===!0?A.id:0,ne=F[W];ne===void 0&&(ne={},F[W]=ne);let ie=ne[H.id];ie===void 0&&(ie={},ne[H.id]=ie);let _e=ie[z];return _e===void 0&&(_e=h(l()),ie[z]=_e),_e}function h(A){let U=[],H=[],V=[];for(let z=0;z<t;z++)U[z]=0,H[z]=0,V[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:H,attributeDivisors:V,object:A,attributes:{},index:null}}function f(A,U,H,V){let z=r.attributes,F=U.attributes,W=0,ne=H.getAttributes();for(let ie in ne)if(ne[ie].location>=0){let ve=z[ie],Ee=F[ie];if(Ee===void 0&&(ie==="instanceMatrix"&&A.instanceMatrix&&(Ee=A.instanceMatrix),ie==="instanceColor"&&A.instanceColor&&(Ee=A.instanceColor)),ve===void 0||ve.attribute!==Ee||Ee&&ve.data!==Ee.data)return!0;W++}return r.attributesNum!==W||r.index!==V}function g(A,U,H,V){let z={},F=U.attributes,W=0,ne=H.getAttributes();for(let ie in ne)if(ne[ie].location>=0){let ve=F[ie];ve===void 0&&(ie==="instanceMatrix"&&A.instanceMatrix&&(ve=A.instanceMatrix),ie==="instanceColor"&&A.instanceColor&&(ve=A.instanceColor));let Ee={};Ee.attribute=ve,ve&&ve.data&&(Ee.data=ve.data),z[ie]=Ee,W++}r.attributes=z,r.attributesNum=W,r.index=V}function x(){let A=r.newAttributes;for(let U=0,H=A.length;U<H;U++)A[U]=0}function m(A){p(A,0)}function p(A,U){let H=r.newAttributes,V=r.enabledAttributes,z=r.attributeDivisors;H[A]=1,V[A]===0&&(n.enableVertexAttribArray(A),V[A]=1),z[A]!==U&&(n.vertexAttribDivisor(A,U),z[A]=U)}function S(){let A=r.newAttributes,U=r.enabledAttributes;for(let H=0,V=U.length;H<V;H++)U[H]!==A[H]&&(n.disableVertexAttribArray(H),U[H]=0)}function I(A,U,H,V,z,F,W){W===!0?n.vertexAttribIPointer(A,U,H,z,F):n.vertexAttribPointer(A,U,H,V,z,F)}function M(A,U,H,V){x();let z=V.attributes,F=H.getAttributes(),W=U.defaultAttributeValues;for(let ne in F){let ie=F[ne];if(ie.location>=0){let _e=z[ne];if(_e===void 0&&(ne==="instanceMatrix"&&A.instanceMatrix&&(_e=A.instanceMatrix),ne==="instanceColor"&&A.instanceColor&&(_e=A.instanceColor)),_e!==void 0){let ve=_e.normalized,Ee=_e.itemSize,Ke=e.get(_e);if(Ke===void 0)continue;let wt=Ke.buffer,Je=Ke.type,j=Ke.bytesPerElement,he=Je===n.INT||Je===n.UNSIGNED_INT||_e.gpuType===Fl;if(_e.isInterleavedBufferAttribute){let le=_e.data,Ge=le.stride,We=_e.offset;if(le.isInstancedInterleavedBuffer){for(let ke=0;ke<ie.locationSize;ke++)p(ie.location+ke,le.meshPerAttribute);A.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let ke=0;ke<ie.locationSize;ke++)m(ie.location+ke);n.bindBuffer(n.ARRAY_BUFFER,wt);for(let ke=0;ke<ie.locationSize;ke++)I(ie.location+ke,Ee/ie.locationSize,Je,ve,Ge*j,(We+Ee/ie.locationSize*ke)*j,he)}else{if(_e.isInstancedBufferAttribute){for(let le=0;le<ie.locationSize;le++)p(ie.location+le,_e.meshPerAttribute);A.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let le=0;le<ie.locationSize;le++)m(ie.location+le);n.bindBuffer(n.ARRAY_BUFFER,wt);for(let le=0;le<ie.locationSize;le++)I(ie.location+le,Ee/ie.locationSize,Je,ve,Ee*j,Ee/ie.locationSize*le*j,he)}}else if(W!==void 0){let ve=W[ne];if(ve!==void 0)switch(ve.length){case 2:n.vertexAttrib2fv(ie.location,ve);break;case 3:n.vertexAttrib3fv(ie.location,ve);break;case 4:n.vertexAttrib4fv(ie.location,ve);break;default:n.vertexAttrib1fv(ie.location,ve)}}}}S()}function b(){E();for(let A in i){let U=i[A];for(let H in U){let V=U[H];for(let z in V){let F=V[z];for(let W in F)u(F[W].object),delete F[W];delete V[z]}}delete i[A]}}function w(A){if(i[A.id]===void 0)return;let U=i[A.id];for(let H in U){let V=U[H];for(let z in V){let F=V[z];for(let W in F)u(F[W].object),delete F[W];delete V[z]}}delete i[A.id]}function T(A){for(let U in i){let H=i[U];for(let V in H){let z=H[V];if(z[A.id]===void 0)continue;let F=z[A.id];for(let W in F)u(F[W].object),delete F[W];delete z[A.id]}}}function y(A){for(let U in i){let H=i[U],V=A.isInstancedMesh===!0?A.id:0,z=H[V];if(z!==void 0){for(let F in z){let W=z[F];for(let ne in W)u(W[ne].object),delete W[ne];delete z[F]}delete H[V],Object.keys(H).length===0&&delete i[U]}}}function E(){D(),a=!0,r!==s&&(r=s,c(r.object))}function D(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:E,resetDefaultState:D,dispose:b,releaseStatesOfGeometry:w,releaseStatesOfObject:y,releaseStatesOfProgram:T,initAttributes:x,enableAttribute:m,disableUnusedAttributes:S}}function fx(n,e,t){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function a(l,c,u){u!==0&&(n.drawArraysInstanced(i,l,c,u),t.update(c,i,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let h=0;for(let f=0;f<u;f++)h+=c[f];t.update(h,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function px(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let T=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(T){return!(T!==si&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){let y=T===ki&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Rn&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==ii&&!y)}function l(T){if(T==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(Oe("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let d=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&Oe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),S=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),I=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),b=n.getParameter(n.MAX_SAMPLES),w=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:I,maxFragmentUniforms:M,maxSamples:b,samples:w}}function mx(n){let e=this,t=null,i=0,s=!1,r=!1,a=new jn,o=new Ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let f=d.length!==0||h||i!==0||s;return s=h,i=d.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,f){let g=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,p=n.get(d);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{let S=r?0:i,I=S*4,M=p.clippingState||null;l.value=M,M=u(g,h,I,f);for(let b=0;b!==I;++b)M[b]=t[b];p.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,f,g){let x=d!==null?d.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let p=f+x*4,S=h.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let I=0,M=f;I!==x;++I,M+=4)a.copy(d[I]).applyMatrix4(S,o),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}var Cs=4,lf=[.125,.215,.35,.446,.526,.582],er=20,gx=256,so=new Yr,cf=new $e,Xu=null,qu=0,Yu=0,Zu=!1,xx=new L,ta=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){let{size:a=256,position:o=xx}=r;Xu=this._renderer.getRenderTarget(),qu=this._renderer.getActiveCubeFace(),Yu=this._renderer.getActiveMipmapLevel(),Zu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=df(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Xu,qu,Yu),this._renderer.xr.enabled=Zu,e.scissorTest=!1,Qr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ws||e.mapping===js?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Xu=this._renderer.getRenderTarget(),qu=this._renderer.getActiveCubeFace(),Yu=this._renderer.getActiveMipmapLevel(),Zu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:rn,minFilter:rn,generateMipmaps:!1,type:ki,format:si,colorSpace:Sa,depthBuffer:!1},s=uf(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=uf(e,t,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=_x(r)),this._blurMaterial=vx(r,e,t),this._ggxMaterial=yx(r,e,t)}return s}_compileMaterial(e){let t=new ot(new Ot,e);this._renderer.compile(t,so)}_sceneToCubeUV(e,t,i,s,r){let l=new sn(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(cf),d.toneMapping=_i,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ot(new tn,new ti({name:"PMREM.Background",side:an,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,m=x.material,p=!1,S=e.background;S?S.isColor&&(m.color.copy(S),e.background=null,p=!0):(m.color.copy(cf),p=!0);for(let I=0;I<6;I++){let M=I%3;M===0?(l.up.set(0,c[I],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[I],r.y,r.z)):M===1?(l.up.set(0,0,c[I]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[I],r.z)):(l.up.set(0,c[I],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[I]));let b=this._cubeSize;Qr(s,M*b,I>2?b:0,b,b),d.setRenderTarget(s),p&&d.render(x,l),d.render(e,l)}d.toneMapping=f,d.autoClear=h,e.background=S}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===ws||e.mapping===js;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=df()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hf());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;Qr(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,so)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;let l=a.uniforms,c=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-u*u),h=0+c*1.25,f=d*h,{_lodMax:g}=this,x=this._sizeLods[i],m=3*x*(i>g-Cs?i-g+Cs:0),p=4*(this._cubeSize-x);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=g-t,Qr(r,m,p,3*x,2*x),s.setRenderTarget(r),s.render(o,so),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-i,Qr(e,m,p,3*x,2*x),s.setRenderTarget(e),s.render(o,so)}_blur(e,t,i,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,s,"latitudinal",r),this._halfBlur(a,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Ve("blur direction must be either latitudinal or longitudinal!");let u=3,d=this._lodMeshes[s];d.material=c;let h=c.uniforms,f=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*er-1),x=r/g,m=isFinite(r)?1+Math.floor(u*x):er;m>er&&Oe(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${er}`);let p=[],S=0;for(let T=0;T<er;++T){let y=T/x,E=Math.exp(-y*y/2);p.push(E),T===0?S+=E:T<m&&(S+=2*E)}for(let T=0;T<p.length;T++)p[T]=p[T]/S;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);let{_lodMax:I}=this;h.dTheta.value=g,h.mipInt.value=I-i;let M=this._sizeLods[s],b=3*M*(s>I-Cs?s-I+Cs:0),w=4*(this._cubeSize-M);Qr(t,b,w,3*M,2*M),l.setRenderTarget(t),l.render(d,so)}};function _x(n){let e=[],t=[],i=[],s=n,r=n-Cs+1+lf.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let l=1/o;a>n-Cs?l=lf[a-n+Cs-1]:a===0&&(l=0),t.push(l);let c=1/(o-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],f=6,g=6,x=3,m=2,p=1,S=new Float32Array(x*g*f),I=new Float32Array(m*g*f),M=new Float32Array(p*g*f);for(let w=0;w<f;w++){let T=w%3*2/3-1,y=w>2?0:-1,E=[T,y,0,T+2/3,y,0,T+2/3,y+1,0,T,y,0,T+2/3,y+1,0,T,y+1,0];S.set(E,x*g*w),I.set(h,m*g*w);let D=[w,w,w,w,w,w];M.set(D,p*g*w)}let b=new Ot;b.setAttribute("position",new Gt(S,x)),b.setAttribute("uv",new Gt(I,m)),b.setAttribute("faceIndex",new Gt(M,p)),i.push(new ot(b,null)),s>Cs&&s--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function uf(n,e,t){let i=new Vn(n,e,t);return i.texture.mapping=Ya,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Qr(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function yx(n,e,t){return new Gn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:gx,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:wc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function vx(n,e,t){let i=new Float32Array(er),s=new L(0,1,0);return new Gn({name:"SphericalGaussianBlur",defines:{n:er,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:wc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function hf(){return new Gn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function df(){return new Gn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function wc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}var Mc=class extends Vn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Da(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new tn(5,5,5),r=new Gn({name:"CubemapFromEquirect",uniforms:Qs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:an,blending:Oi});r.uniforms.tEquirect.value=t;let a=new ot(s,r),o=t.minFilter;return t.minFilter===Es&&(t.minFilter=rn),new Rl(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}};function bx(n){let e=new WeakMap,t=new WeakMap,i=null;function s(h,f=!1){return h==null?null:f?a(h):r(h)}function r(h){if(h&&h.isTexture){let f=h.mapping;if(f===Dl||f===Ll)if(e.has(h)){let g=e.get(h).texture;return o(g,h.mapping)}else{let g=h.image;if(g&&g.height>0){let x=new Mc(g.height);return x.fromEquirectangularTexture(n,h),e.set(h,x),h.addEventListener("dispose",c),o(x.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){let f=h.mapping,g=f===Dl||f===Ll,x=f===ws||f===js;if(g||x){let m=t.get(h),p=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return i===null&&(i=new ta(n)),m=g?i.fromEquirectangular(h,m):i.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),m.texture;if(m!==void 0)return m.texture;{let S=h.image;return g&&S&&S.height>0||x&&S&&l(S)?(i===null&&(i=new ta(n)),m=g?i.fromEquirectangular(h):i.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function o(h,f){return f===Dl?h.mapping=ws:f===Ll&&(h.mapping=js),h}function l(h){let f=0,g=6;for(let x=0;x<g;x++)h[x]!==void 0&&f++;return f===g}function c(h){let f=h.target;f.removeEventListener("dispose",c);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function u(h){let f=h.target;f.removeEventListener("dispose",u);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function d(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function Mx(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&Xs("WebGLRenderer: "+i+" extension not supported."),s}}}function Sx(n,e,t,i){let s={},r=new WeakMap;function a(d){let h=d.target;h.index!==null&&e.remove(h.index);for(let g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",a),delete s[h.id];let f=r.get(h);f&&(e.remove(f),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(d,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,t.memory.geometries++),h}function l(d){let h=d.attributes;for(let f in h)e.update(h[f],n.ARRAY_BUFFER)}function c(d){let h=[],f=d.index,g=d.attributes.position,x=0;if(g===void 0)return;if(f!==null){let S=f.array;x=f.version;for(let I=0,M=S.length;I<M;I+=3){let b=S[I+0],w=S[I+1],T=S[I+2];h.push(b,w,w,T,T,b)}}else{let S=g.array;x=g.version;for(let I=0,M=S.length/3-1;I<M;I+=3){let b=I+0,w=I+1,T=I+2;h.push(b,w,w,T,T,b)}}let m=new(g.count>=65535?Ca:Ta)(h,1);m.version=x;let p=r.get(d);p&&e.remove(p),r.set(d,m)}function u(d){let h=r.get(d);if(h){let f=d.index;f!==null&&h.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function wx(n,e,t){let i;function s(d){i=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,h){n.drawElements(i,h,r,d*a),t.update(h,i,1)}function c(d,h,f){f!==0&&(n.drawElementsInstanced(i,h,r,d*a,f),t.update(h,i,f))}function u(d,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,d,0,f);let x=0;for(let m=0;m<f;m++)x+=h[m];t.update(x,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function Ex(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:Ve("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Ax(n,e,t){let i=new WeakMap,s=new Ut;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0,h=i.get(o);if(h===void 0||h.count!==d){let E=function(){T.dispose(),i.delete(o),o.removeEventListener("dispose",E)};h!==void 0&&h.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],S=o.morphAttributes.color||[],I=0;f===!0&&(I=1),g===!0&&(I=2),x===!0&&(I=3);let M=o.attributes.position.count*I,b=1;M>e.maxTextureSize&&(b=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let w=new Float32Array(M*b*4*d),T=new Aa(w,M,b,d);T.type=ii,T.needsUpdate=!0;let y=I*4;for(let D=0;D<d;D++){let A=m[D],U=p[D],H=S[D],V=M*b*4*D;for(let z=0;z<A.count;z++){let F=z*y;f===!0&&(s.fromBufferAttribute(A,z),w[V+F+0]=s.x,w[V+F+1]=s.y,w[V+F+2]=s.z,w[V+F+3]=0),g===!0&&(s.fromBufferAttribute(U,z),w[V+F+4]=s.x,w[V+F+5]=s.y,w[V+F+6]=s.z,w[V+F+7]=0),x===!0&&(s.fromBufferAttribute(H,z),w[V+F+8]=s.x,w[V+F+9]=s.y,w[V+F+10]=s.z,w[V+F+11]=H.itemSize===4?s.w:1)}}h={count:d,texture:T,size:new De(M,b)},i.set(o,h),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function Tx(n,e,t,i,s){let r=new WeakMap;function a(c){let u=s.render.frame,d=c.geometry,h=e.get(c,d);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return h}function o(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}var Cx={[Tu]:"LINEAR_TONE_MAPPING",[Cu]:"REINHARD_TONE_MAPPING",[Ru]:"CINEON_TONE_MAPPING",[qa]:"ACES_FILMIC_TONE_MAPPING",[Pu]:"AGX_TONE_MAPPING",[Du]:"NEUTRAL_TONE_MAPPING",[Iu]:"CUSTOM_TONE_MAPPING"};function Rx(n,e,t,i,s,r){let a=new Vn(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,depthTexture:s?new ns(e,t):void 0}),o=new Vn(e,t,{type:ki,depthBuffer:!1,stencilBuffer:!1}),l=new Ot;l.setAttribute("position",new Ct([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Ct([0,2,0,0,2,0],2));let c=new ml({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new ot(l,c),d=new Yr(-1,1,1,-1,0,1),h=null,f=null,g=!1,x,m=null,p=[],S=!1;this.setSize=function(I,M){a.setSize(I,M),o.setSize(I,M);for(let b=0;b<p.length;b++){let w=p[b];w.setSize&&w.setSize(I,M)}},this.setEffects=function(I){p=I,S=p.length>0&&p[0].isRenderPass===!0;let M=a.width,b=a.height;for(let w=0;w<p.length;w++){let T=p[w];T.setSize&&T.setSize(M,b)}},this.begin=function(I,M){if(g||I.toneMapping===_i&&p.length===0)return!1;if(m=M,M!==null){let b=M.width,w=M.height;(a.width!==b||a.height!==w)&&this.setSize(b,w)}return S===!1&&I.setRenderTarget(a),x=I.toneMapping,I.toneMapping=_i,!0},this.hasRenderPass=function(){return S},this.end=function(I,M){I.toneMapping=x,g=!0;let b=a,w=o;for(let T=0;T<p.length;T++){let y=p[T];if(y.enabled!==!1&&(y.render(I,w,b,M),y.needsSwap!==!1)){let E=b;b=w,w=E}}if(h!==I.outputColorSpace||f!==I.toneMapping){h=I.outputColorSpace,f=I.toneMapping,c.defines={},at.getTransfer(h)===xt&&(c.defines.SRGB_TRANSFER="");let T=Cx[f];T&&(c.defines[T]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=b.texture,I.setRenderTarget(m),I.render(u,d),m=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),l.dispose(),c.dispose()}}var Df=new Wt,ju=new ns(1,1),Lf=new Aa,Nf=new hl,Ff=new Da,ff=[],pf=[],mf=new Float32Array(16),gf=new Float32Array(9),xf=new Float32Array(4);function na(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=ff[s];if(r===void 0&&(r=new Float32Array(s),ff[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function $t(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Xt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ec(n,e){let t=pf[e];t===void 0&&(t=new Int32Array(e),pf[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Ix(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Px(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;n.uniform2fv(this.addr,e),Xt(t,e)}}function Dx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if($t(t,e))return;n.uniform3fv(this.addr,e),Xt(t,e)}}function Lx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;n.uniform4fv(this.addr,e),Xt(t,e)}}function Nx(n,e){let t=this.cache,i=e.elements;if(i===void 0){if($t(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Xt(t,e)}else{if($t(t,i))return;xf.set(i),n.uniformMatrix2fv(this.addr,!1,xf),Xt(t,i)}}function Fx(n,e){let t=this.cache,i=e.elements;if(i===void 0){if($t(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Xt(t,e)}else{if($t(t,i))return;gf.set(i),n.uniformMatrix3fv(this.addr,!1,gf),Xt(t,i)}}function Ux(n,e){let t=this.cache,i=e.elements;if(i===void 0){if($t(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Xt(t,e)}else{if($t(t,i))return;mf.set(i),n.uniformMatrix4fv(this.addr,!1,mf),Xt(t,i)}}function Bx(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Ox(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;n.uniform2iv(this.addr,e),Xt(t,e)}}function kx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($t(t,e))return;n.uniform3iv(this.addr,e),Xt(t,e)}}function zx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;n.uniform4iv(this.addr,e),Xt(t,e)}}function Vx(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Gx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;n.uniform2uiv(this.addr,e),Xt(t,e)}}function Hx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($t(t,e))return;n.uniform3uiv(this.addr,e),Xt(t,e)}}function Wx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;n.uniform4uiv(this.addr,e),Xt(t,e)}}function $x(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(ju.compareFunction=t.isReversedDepthBuffer()?yc:_c,r=ju):r=Df,t.setTexture2D(e||r,s)}function Xx(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Nf,s)}function qx(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Ff,s)}function Yx(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Lf,s)}function Zx(n){switch(n){case 5126:return Ix;case 35664:return Px;case 35665:return Dx;case 35666:return Lx;case 35674:return Nx;case 35675:return Fx;case 35676:return Ux;case 5124:case 35670:return Bx;case 35667:case 35671:return Ox;case 35668:case 35672:return kx;case 35669:case 35673:return zx;case 5125:return Vx;case 36294:return Gx;case 36295:return Hx;case 36296:return Wx;case 35678:case 36198:case 36298:case 36306:case 35682:return $x;case 35679:case 36299:case 36307:return Xx;case 35680:case 36300:case 36308:case 36293:return qx;case 36289:case 36303:case 36311:case 36292:return Yx}}function Kx(n,e){n.uniform1fv(this.addr,e)}function Jx(n,e){let t=na(e,this.size,2);n.uniform2fv(this.addr,t)}function jx(n,e){let t=na(e,this.size,3);n.uniform3fv(this.addr,t)}function Qx(n,e){let t=na(e,this.size,4);n.uniform4fv(this.addr,t)}function e_(n,e){let t=na(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function t_(n,e){let t=na(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function n_(n,e){let t=na(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function i_(n,e){n.uniform1iv(this.addr,e)}function s_(n,e){n.uniform2iv(this.addr,e)}function r_(n,e){n.uniform3iv(this.addr,e)}function a_(n,e){n.uniform4iv(this.addr,e)}function o_(n,e){n.uniform1uiv(this.addr,e)}function l_(n,e){n.uniform2uiv(this.addr,e)}function c_(n,e){n.uniform3uiv(this.addr,e)}function u_(n,e){n.uniform4uiv(this.addr,e)}function h_(n,e,t){let i=this.cache,s=e.length,r=Ec(t,s);$t(i,r)||(n.uniform1iv(this.addr,r),Xt(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=ju:a=Df;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function d_(n,e,t){let i=this.cache,s=e.length,r=Ec(t,s);$t(i,r)||(n.uniform1iv(this.addr,r),Xt(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Nf,r[a])}function f_(n,e,t){let i=this.cache,s=e.length,r=Ec(t,s);$t(i,r)||(n.uniform1iv(this.addr,r),Xt(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Ff,r[a])}function p_(n,e,t){let i=this.cache,s=e.length,r=Ec(t,s);$t(i,r)||(n.uniform1iv(this.addr,r),Xt(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Lf,r[a])}function m_(n){switch(n){case 5126:return Kx;case 35664:return Jx;case 35665:return jx;case 35666:return Qx;case 35674:return e_;case 35675:return t_;case 35676:return n_;case 5124:case 35670:return i_;case 35667:case 35671:return s_;case 35668:case 35672:return r_;case 35669:case 35673:return a_;case 5125:return o_;case 36294:return l_;case 36295:return c_;case 36296:return u_;case 35678:case 36198:case 36298:case 36306:case 35682:return h_;case 35679:case 36299:case 36307:return d_;case 35680:case 36300:case 36308:case 36293:return f_;case 36289:case 36303:case 36311:case 36292:return p_}}var Qu=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Zx(t.type)}},eh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=m_(t.type)}},th=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],i)}}},Ku=/(\w+)(\])?(\[|\.)?/g;function _f(n,e){n.seq.push(e),n.map[e.id]=e}function g_(n,e,t){let i=n.name,s=i.length;for(Ku.lastIndex=0;;){let r=Ku.exec(i),a=Ku.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){_f(t,c===void 0?new Qu(o,n,e):new eh(o,n,e));break}else{let d=t.map[o];d===void 0&&(d=new th(o),_f(t,d)),t=d}}}var ea=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);g_(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&i.push(a)}return i}};function yf(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var x_=37297,__=0;function y_(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}var vf=new Ze;function v_(n){at._getMatrix(vf,at.workingColorSpace,n);let e=`mat3( ${vf.elements.map(t=>t.toFixed(4))} )`;switch(at.getTransfer(n)){case wa:return[e,"LinearTransferOETF"];case xt:return[e,"sRGBTransferOETF"];default:return Oe("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function bf(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+y_(n.getShaderSource(e),o)}else return r}function b_(n,e){let t=v_(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var M_={[Tu]:"Linear",[Cu]:"Reinhard",[Ru]:"Cineon",[qa]:"ACESFilmic",[Pu]:"AgX",[Du]:"Neutral",[Iu]:"Custom"};function S_(n,e){let t=M_[e];return t===void 0?(Oe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var bc=new L;function w_(){at.getLuminanceCoefficients(bc);let n=bc.x.toFixed(4),e=bc.y.toFixed(4),t=bc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function E_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ao).join(`
`)}function A_(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function T_(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function ao(n){return n!==""}function Mf(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Sf(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var C_=/^[ \t]*#include +<([\w\d./]+)>/gm;function nh(n){return n.replace(C_,I_)}var R_=new Map;function I_(n,e){let t=je[e];if(t===void 0){let i=R_.get(e);if(i!==void 0)t=je[i],Oe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return nh(t)}var P_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wf(n){return n.replace(P_,D_)}function D_(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ef(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var L_={[Js]:"SHADOWMAP_TYPE_PCF",[Zr]:"SHADOWMAP_TYPE_VSM"};function N_(n){return L_[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var F_={[ws]:"ENVMAP_TYPE_CUBE",[js]:"ENVMAP_TYPE_CUBE",[Ya]:"ENVMAP_TYPE_CUBE_UV"};function U_(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":F_[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var B_={[js]:"ENVMAP_MODE_REFRACTION"};function O_(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":B_[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var k_={[Pl]:"ENVMAP_BLENDING_MULTIPLY",[Gd]:"ENVMAP_BLENDING_MIX",[Hd]:"ENVMAP_BLENDING_ADD"};function z_(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":k_[n.combine]||"ENVMAP_BLENDING_NONE"}function V_(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function G_(n,e,t,i){let s=n.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=N_(t),c=U_(t),u=O_(t),d=z_(t),h=V_(t),f=E_(t),g=A_(r),x=s.createProgram(),m,p,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ao).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ao).join(`
`),p.length>0&&(p+=`
`)):(m=[Ef(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ao).join(`
`),p=[Ef(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==_i?"#define TONE_MAPPING":"",t.toneMapping!==_i?je.tonemapping_pars_fragment:"",t.toneMapping!==_i?S_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,b_("linearToOutputTexel",t.outputColorSpace),w_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ao).join(`
`)),a=nh(a),a=Mf(a,t),a=Sf(a,t),o=nh(o),o=Mf(o,t),o=Sf(o,t),a=wf(a),o=wf(o),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===zu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===zu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let I=S+m+a,M=S+p+o,b=yf(s,s.VERTEX_SHADER,I),w=yf(s,s.FRAGMENT_SHADER,M);s.attachShader(x,b),s.attachShader(x,w),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function T(A){if(n.debug.checkShaderErrors){let U=s.getProgramInfoLog(x)||"",H=s.getShaderInfoLog(b)||"",V=s.getShaderInfoLog(w)||"",z=U.trim(),F=H.trim(),W=V.trim(),ne=!0,ie=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(ne=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,b,w);else{let _e=bf(s,b,"vertex"),ve=bf(s,w,"fragment");Ve("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+z+`
`+_e+`
`+ve)}else z!==""?Oe("WebGLProgram: Program Info Log:",z):(F===""||W==="")&&(ie=!1);ie&&(A.diagnostics={runnable:ne,programLog:z,vertexShader:{log:F,prefix:m},fragmentShader:{log:W,prefix:p}})}s.deleteShader(b),s.deleteShader(w),y=new ea(s,x),E=T_(s,x)}let y;this.getUniforms=function(){return y===void 0&&T(this),y};let E;this.getAttributes=function(){return E===void 0&&T(this),E};let D=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=s.getProgramParameter(x,x_)),D},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=__++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=b,this.fragmentShader=w,this}var H_=0,ih=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new sh(e),t.set(e,i)),i}},sh=class{constructor(e){this.id=H_++,this.code=e,this.usedTimes=0}};function W_(n){return n===Ts||n===eo||n===to}function $_(n,e,t,i,s,r){let a=new Br,o=new ih,l=new Set,c=[],u=new Map,d=i.logarithmicDepthBuffer,h=i.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return l.add(y),y===0?"uv":`uv${y}`}function x(y,E,D,A,U,H){let V=A.fog,z=U.geometry,F=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?A.environment:null,W=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,ne=e.get(y.envMap||F,W),ie=ne&&ne.mapping===Ya?ne.image.height:null,_e=f[y.type];y.precision!==null&&(h=i.getMaxPrecision(y.precision),h!==y.precision&&Oe("WebGLProgram.getParameters:",y.precision,"not supported, using",h,"instead."));let ve=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Ee=ve!==void 0?ve.length:0,Ke=0;z.morphAttributes.position!==void 0&&(Ke=1),z.morphAttributes.normal!==void 0&&(Ke=2),z.morphAttributes.color!==void 0&&(Ke=3);let wt,Je,j,he;if(_e){let Ce=Vi[_e];wt=Ce.vertexShader,Je=Ce.fragmentShader}else{wt=y.vertexShader,Je=y.fragmentShader;let Ce=o.getVertexShaderStage(y),Et=o.getFragmentShaderStage(y);o.update(y,Ce,Et),j=Ce.id,he=Et.id}let le=n.getRenderTarget(),Ge=n.state.buffers.depth.getReversed(),We=U.isInstancedMesh===!0,ke=U.isBatchedMesh===!0,It=!!y.map,et=!!y.matcap,bt=!!ne,lt=!!y.aoMap,it=!!y.lightMap,Pt=!!y.bumpMap&&y.wireframe===!1,kt=!!y.normalMap,zt=!!y.displacementMap,Dt=!!y.emissiveMap,_t=!!y.metalnessMap,st=!!y.roughnessMap,O=y.anisotropy>0,Zt=y.clearcoat>0,Te=y.dispersion>0,C=y.iridescence>0,_=y.sheen>0,$=y.transmission>0,Y=O&&!!y.anisotropyMap,J=Zt&&!!y.clearcoatMap,ue=Zt&&!!y.clearcoatNormalMap,fe=Zt&&!!y.clearcoatRoughnessMap,Q=C&&!!y.iridescenceMap,te=C&&!!y.iridescenceThicknessMap,pe=_&&!!y.sheenColorMap,Ne=_&&!!y.sheenRoughnessMap,be=!!y.specularMap,ge=!!y.specularColorMap,Be=!!y.specularIntensityMap,ze=$&&!!y.transmissionMap,Xe=$&&!!y.thicknessMap,N=!!y.gradientMap,de=!!y.alphaMap,ee=y.alphaTest>0,xe=!!y.alphaHash,Me=!!y.extensions,se=_i;y.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(se=n.toneMapping);let Pe={shaderID:_e,shaderType:y.type,shaderName:y.name,vertexShader:wt,fragmentShader:Je,defines:y.defines,customVertexShaderID:j,customFragmentShaderID:he,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:h,batching:ke,batchingColor:ke&&U._colorsTexture!==null,instancing:We,instancingColor:We&&U.instanceColor!==null,instancingMorph:We&&U.morphTexture!==null,outputColorSpace:le===null?n.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:at.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:It,matcap:et,envMap:bt,envMapMode:bt&&ne.mapping,envMapCubeUVHeight:ie,aoMap:lt,lightMap:it,bumpMap:Pt,normalMap:kt,displacementMap:zt,emissiveMap:Dt,normalMapObjectSpace:kt&&y.normalMapType===Xd,normalMapTangentSpace:kt&&y.normalMapType===no,packedNormalMap:kt&&y.normalMapType===no&&W_(y.normalMap.format),metalnessMap:_t,roughnessMap:st,anisotropy:O,anisotropyMap:Y,clearcoat:Zt,clearcoatMap:J,clearcoatNormalMap:ue,clearcoatRoughnessMap:fe,dispersion:Te,iridescence:C,iridescenceMap:Q,iridescenceThicknessMap:te,sheen:_,sheenColorMap:pe,sheenRoughnessMap:Ne,specularMap:be,specularColorMap:ge,specularIntensityMap:Be,transmission:$,transmissionMap:ze,thicknessMap:Xe,gradientMap:N,opaque:y.transparent===!1&&y.blending===qs&&y.alphaToCoverage===!1,alphaMap:de,alphaTest:ee,alphaHash:xe,combine:y.combine,mapUv:It&&g(y.map.channel),aoMapUv:lt&&g(y.aoMap.channel),lightMapUv:it&&g(y.lightMap.channel),bumpMapUv:Pt&&g(y.bumpMap.channel),normalMapUv:kt&&g(y.normalMap.channel),displacementMapUv:zt&&g(y.displacementMap.channel),emissiveMapUv:Dt&&g(y.emissiveMap.channel),metalnessMapUv:_t&&g(y.metalnessMap.channel),roughnessMapUv:st&&g(y.roughnessMap.channel),anisotropyMapUv:Y&&g(y.anisotropyMap.channel),clearcoatMapUv:J&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:ue&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:fe&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:te&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:pe&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:Ne&&g(y.sheenRoughnessMap.channel),specularMapUv:be&&g(y.specularMap.channel),specularColorMapUv:ge&&g(y.specularColorMap.channel),specularIntensityMapUv:Be&&g(y.specularIntensityMap.channel),transmissionMapUv:ze&&g(y.transmissionMap.channel),thicknessMapUv:Xe&&g(y.thicknessMap.channel),alphaMapUv:de&&g(y.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(kt||O),vertexNormals:!!z.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!z.attributes.uv&&(It||de),fog:!!V,useFog:y.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||z.attributes.normal===void 0&&kt===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Ge,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:z.attributes.position!==void 0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:Ee,morphTextureStride:Ke,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:H.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:se,decodeVideoTexture:It&&y.map.isVideoTexture===!0&&at.getTransfer(y.map.colorSpace)===xt,decodeVideoTextureEmissive:Dt&&y.emissiveMap.isVideoTexture===!0&&at.getTransfer(y.emissiveMap.colorSpace)===xt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Cn,flipSided:y.side===an,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Me&&y.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Me&&y.extensions.multiDraw===!0||ke)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Pe.vertexUv1s=l.has(1),Pe.vertexUv2s=l.has(2),Pe.vertexUv3s=l.has(3),l.clear(),Pe}function m(y){let E=[];if(y.shaderID?E.push(y.shaderID):(E.push(y.customVertexShaderID),E.push(y.customFragmentShaderID)),y.defines!==void 0)for(let D in y.defines)E.push(D),E.push(y.defines[D]);return y.isRawShaderMaterial===!1&&(p(E,y),S(E,y),E.push(n.outputColorSpace)),E.push(y.customProgramCacheKey),E.join()}function p(y,E){y.push(E.precision),y.push(E.outputColorSpace),y.push(E.envMapMode),y.push(E.envMapCubeUVHeight),y.push(E.mapUv),y.push(E.alphaMapUv),y.push(E.lightMapUv),y.push(E.aoMapUv),y.push(E.bumpMapUv),y.push(E.normalMapUv),y.push(E.displacementMapUv),y.push(E.emissiveMapUv),y.push(E.metalnessMapUv),y.push(E.roughnessMapUv),y.push(E.anisotropyMapUv),y.push(E.clearcoatMapUv),y.push(E.clearcoatNormalMapUv),y.push(E.clearcoatRoughnessMapUv),y.push(E.iridescenceMapUv),y.push(E.iridescenceThicknessMapUv),y.push(E.sheenColorMapUv),y.push(E.sheenRoughnessMapUv),y.push(E.specularMapUv),y.push(E.specularColorMapUv),y.push(E.specularIntensityMapUv),y.push(E.transmissionMapUv),y.push(E.thicknessMapUv),y.push(E.combine),y.push(E.fogExp2),y.push(E.sizeAttenuation),y.push(E.morphTargetsCount),y.push(E.morphAttributeCount),y.push(E.numDirLights),y.push(E.numPointLights),y.push(E.numSpotLights),y.push(E.numSpotLightMaps),y.push(E.numHemiLights),y.push(E.numRectAreaLights),y.push(E.numDirLightShadows),y.push(E.numPointLightShadows),y.push(E.numSpotLightShadows),y.push(E.numSpotLightShadowsWithMaps),y.push(E.numLightProbes),y.push(E.shadowMapType),y.push(E.toneMapping),y.push(E.numClippingPlanes),y.push(E.numClipIntersection),y.push(E.depthPacking)}function S(y,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),y.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),E.hasPositionAttribute&&a.enable(23),y.push(a.mask)}function I(y){let E=f[y.type],D;if(E){let A=Vi[E];D=af.clone(A.uniforms)}else D=y.uniforms;return D}function M(y,E){let D=u.get(E);return D!==void 0?++D.usedTimes:(D=new G_(n,E,y,s),c.push(D),u.set(E,D)),D}function b(y){if(--y.usedTimes===0){let E=c.indexOf(y);c[E]=c[c.length-1],c.pop(),u.delete(y.cacheKey),y.destroy()}}function w(y){o.remove(y)}function T(){o.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:I,acquireProgram:M,releaseProgram:b,releaseShaderCache:w,programs:c,dispose:T}}function X_(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function q_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function Af(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Tf(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function o(h,f,g,x,m,p){let S=n[e];return S===void 0?(S={id:h.id,object:h,geometry:f,material:g,materialVariant:a(h),groupOrder:x,renderOrder:h.renderOrder,z:m,group:p},n[e]=S):(S.id=h.id,S.object=h,S.geometry=f,S.material=g,S.materialVariant=a(h),S.groupOrder=x,S.renderOrder=h.renderOrder,S.z=m,S.group=p),e++,S}function l(h,f,g,x,m,p){let S=o(h,f,g,x,m,p);g.transmission>0?i.push(S):g.transparent===!0?s.push(S):t.push(S)}function c(h,f,g,x,m,p){let S=o(h,f,g,x,m,p);g.transmission>0?i.unshift(S):g.transparent===!0?s.unshift(S):t.unshift(S)}function u(h,f,g){t.length>1&&t.sort(h||q_),i.length>1&&i.sort(f||Af),s.length>1&&s.sort(f||Af),g&&(t.reverse(),i.reverse(),s.reverse())}function d(){for(let h=e,f=n.length;h<f;h++){let g=n[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:d,sort:u}}function Y_(){let n=new WeakMap;function e(i,s){let r=n.get(i),a;return r===void 0?(a=new Tf,n.set(i,[a])):s>=r.length?(a=new Tf,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function Z_(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new $e};break;case"SpotLight":t={position:new L,direction:new L,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new $e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":t={color:new $e,position:new L,halfWidth:new L,halfHeight:new L};break}return n[e.id]=t,t}}}function K_(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var J_=0;function j_(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Q_(n){let e=new Z_,t=K_(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new L);let s=new L,r=new ft,a=new ft;function o(c){let u=0,d=0,h=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let f=0,g=0,x=0,m=0,p=0,S=0,I=0,M=0,b=0,w=0,T=0;c.sort(j_);for(let E=0,D=c.length;E<D;E++){let A=c[E],U=A.color,H=A.intensity,V=A.distance,z=null;if(A.shadow&&A.shadow.map&&(A.shadow.map.texture.format===Ts?z=A.shadow.map.texture:z=A.shadow.map.depthTexture||A.shadow.map.texture),A.isAmbientLight)u+=U.r*H,d+=U.g*H,h+=U.b*H;else if(A.isLightProbe){for(let F=0;F<9;F++)i.probe[F].addScaledVector(A.sh.coefficients[F],H);T++}else if(A.isDirectionalLight){let F=e.get(A);if(F.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let W=A.shadow,ne=t.get(A);ne.shadowIntensity=W.intensity,ne.shadowBias=W.bias,ne.shadowNormalBias=W.normalBias,ne.shadowRadius=W.radius,ne.shadowMapSize=W.mapSize,i.directionalShadow[f]=ne,i.directionalShadowMap[f]=z,i.directionalShadowMatrix[f]=A.shadow.matrix,S++}i.directional[f]=F,f++}else if(A.isSpotLight){let F=e.get(A);F.position.setFromMatrixPosition(A.matrixWorld),F.color.copy(U).multiplyScalar(H),F.distance=V,F.coneCos=Math.cos(A.angle),F.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),F.decay=A.decay,i.spot[x]=F;let W=A.shadow;if(A.map&&(i.spotLightMap[b]=A.map,b++,W.updateMatrices(A),A.castShadow&&w++),i.spotLightMatrix[x]=W.matrix,A.castShadow){let ne=t.get(A);ne.shadowIntensity=W.intensity,ne.shadowBias=W.bias,ne.shadowNormalBias=W.normalBias,ne.shadowRadius=W.radius,ne.shadowMapSize=W.mapSize,i.spotShadow[x]=ne,i.spotShadowMap[x]=z,M++}x++}else if(A.isRectAreaLight){let F=e.get(A);F.color.copy(U).multiplyScalar(H),F.halfWidth.set(A.width*.5,0,0),F.halfHeight.set(0,A.height*.5,0),i.rectArea[m]=F,m++}else if(A.isPointLight){let F=e.get(A);if(F.color.copy(A.color).multiplyScalar(A.intensity),F.distance=A.distance,F.decay=A.decay,A.castShadow){let W=A.shadow,ne=t.get(A);ne.shadowIntensity=W.intensity,ne.shadowBias=W.bias,ne.shadowNormalBias=W.normalBias,ne.shadowRadius=W.radius,ne.shadowMapSize=W.mapSize,ne.shadowCameraNear=W.camera.near,ne.shadowCameraFar=W.camera.far,i.pointShadow[g]=ne,i.pointShadowMap[g]=z,i.pointShadowMatrix[g]=A.shadow.matrix,I++}i.point[g]=F,g++}else if(A.isHemisphereLight){let F=e.get(A);F.skyColor.copy(A.color).multiplyScalar(H),F.groundColor.copy(A.groundColor).multiplyScalar(H),i.hemi[p]=F,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=we.LTC_FLOAT_1,i.rectAreaLTC2=we.LTC_FLOAT_2):(i.rectAreaLTC1=we.LTC_HALF_1,i.rectAreaLTC2=we.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;let y=i.hash;(y.directionalLength!==f||y.pointLength!==g||y.spotLength!==x||y.rectAreaLength!==m||y.hemiLength!==p||y.numDirectionalShadows!==S||y.numPointShadows!==I||y.numSpotShadows!==M||y.numSpotMaps!==b||y.numLightProbes!==T)&&(i.directional.length=f,i.spot.length=x,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=I,i.pointShadowMap.length=I,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=I,i.spotLightMatrix.length=M+b-w,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=T,y.directionalLength=f,y.pointLength=g,y.spotLength=x,y.rectAreaLength=m,y.hemiLength=p,y.numDirectionalShadows=S,y.numPointShadows=I,y.numSpotShadows=M,y.numSpotMaps=b,y.numLightProbes=T,i.version=J_++)}function l(c,u){let d=0,h=0,f=0,g=0,x=0,m=u.matrixWorldInverse;for(let p=0,S=c.length;p<S;p++){let I=c[p];if(I.isDirectionalLight){let M=i.directional[d];M.direction.setFromMatrixPosition(I.matrixWorld),s.setFromMatrixPosition(I.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),d++}else if(I.isSpotLight){let M=i.spot[f];M.position.setFromMatrixPosition(I.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(I.matrixWorld),s.setFromMatrixPosition(I.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),f++}else if(I.isRectAreaLight){let M=i.rectArea[g];M.position.setFromMatrixPosition(I.matrixWorld),M.position.applyMatrix4(m),a.identity(),r.copy(I.matrixWorld),r.premultiply(m),a.extractRotation(r),M.halfWidth.set(I.width*.5,0,0),M.halfHeight.set(0,I.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),g++}else if(I.isPointLight){let M=i.point[h];M.position.setFromMatrixPosition(I.matrixWorld),M.position.applyMatrix4(m),h++}else if(I.isHemisphereLight){let M=i.hemi[x];M.direction.setFromMatrixPosition(I.matrixWorld),M.direction.transformDirection(m),x++}}}return{setup:o,setupView:l,state:i}}function Cf(n){let e=new Q_(n),t=[],i=[],s=[];function r(h){d.camera=h,t.length=0,i.length=0,s.length=0}function a(h){t.push(h)}function o(h){i.push(h)}function l(h){s.push(h)}function c(){e.setup(t)}function u(h){e.setupView(t,h)}let d={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function ey(n){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Cf(n),e.set(s,[o])):r>=a.length?(o=new Cf(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}var ty=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ny=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,iy=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],sy=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],Rf=new ft,ro=new L,Ju=new L;function ry(n,e,t){let i=new Gr,s=new De,r=new De,a=new Ut,o=new gl,l=new xl,c={},u=t.maxTextureSize,d={[Qi]:an,[an]:Qi,[Cn]:Cn},h=new Gn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new De},radius:{value:4}},vertexShader:ty,fragmentShader:ny}),f=h.clone();f.defines.HORIZONTAL_PASS=1;let g=new Ot;g.setAttribute("position",new Gt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new ot(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Js;let p=this.type;this.render=function(w,T,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===Sd&&(Oe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Js);let E=n.getRenderTarget(),D=n.getActiveCubeFace(),A=n.getActiveMipmapLevel(),U=n.state;U.setBlending(Oi),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let H=p!==this.type;H&&T.traverse(function(V){V.material&&(Array.isArray(V.material)?V.material.forEach(z=>z.needsUpdate=!0):V.material.needsUpdate=!0)});for(let V=0,z=w.length;V<z;V++){let F=w[V],W=F.shadow;if(W===void 0){Oe("WebGLShadowMap:",F,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);let ne=W.getFrameExtents();s.multiply(ne),r.copy(W.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ne.x),s.x=r.x*ne.x,W.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ne.y),s.y=r.y*ne.y,W.mapSize.y=r.y));let ie=n.state.buffers.depth.getReversed();if(W.camera._reversedDepth=ie,W.map===null||H===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===Zr){if(F.isPointLight){Oe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new Vn(s.x,s.y,{format:Ts,type:ki,minFilter:rn,magFilter:rn,generateMipmaps:!1}),W.map.texture.name=F.name+".shadowMap",W.map.depthTexture=new ns(s.x,s.y,ii),W.map.depthTexture.name=F.name+".shadowMapDepth",W.map.depthTexture.format=Fi,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=en,W.map.depthTexture.magFilter=en}else F.isPointLight?(W.map=new Mc(s.x),W.map.depthTexture=new pl(s.x,yi)):(W.map=new Vn(s.x,s.y),W.map.depthTexture=new ns(s.x,s.y,yi)),W.map.depthTexture.name=F.name+".shadowMap",W.map.depthTexture.format=Fi,this.type===Js?(W.map.depthTexture.compareFunction=ie?yc:_c,W.map.depthTexture.minFilter=rn,W.map.depthTexture.magFilter=rn):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=en,W.map.depthTexture.magFilter=en);W.camera.updateProjectionMatrix()}let _e=W.map.isWebGLCubeRenderTarget?6:1;for(let ve=0;ve<_e;ve++){if(W.map.isWebGLCubeRenderTarget)n.setRenderTarget(W.map,ve),n.clear();else{ve===0&&(n.setRenderTarget(W.map),n.clear());let Ee=W.getViewport(ve);a.set(r.x*Ee.x,r.y*Ee.y,r.x*Ee.z,r.y*Ee.w),U.viewport(a)}if(F.isPointLight){let Ee=W.camera,Ke=W.matrix,wt=F.distance||Ee.far;wt!==Ee.far&&(Ee.far=wt,Ee.updateProjectionMatrix()),ro.setFromMatrixPosition(F.matrixWorld),Ee.position.copy(ro),Ju.copy(Ee.position),Ju.add(iy[ve]),Ee.up.copy(sy[ve]),Ee.lookAt(Ju),Ee.updateMatrixWorld(),Ke.makeTranslation(-ro.x,-ro.y,-ro.z),Rf.multiplyMatrices(Ee.projectionMatrix,Ee.matrixWorldInverse),W._frustum.setFromProjectionMatrix(Rf,Ee.coordinateSystem,Ee.reversedDepth)}else W.updateMatrices(F);i=W.getFrustum(),M(T,y,W.camera,F,this.type)}W.isPointLightShadow!==!0&&this.type===Zr&&S(W,y),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(E,D,A)};function S(w,T){let y=e.update(x);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Vn(s.x,s.y,{format:Ts,type:ki})),h.uniforms.shadow_pass.value=w.map.depthTexture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(T,null,y,h,x,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(T,null,y,f,x,null)}function I(w,T,y,E){let D=null,A=y.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(A!==void 0)D=A;else if(D=y.isPointLight===!0?l:o,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){let U=D.uuid,H=T.uuid,V=c[U];V===void 0&&(V={},c[U]=V);let z=V[H];z===void 0&&(z=D.clone(),V[H]=z,T.addEventListener("dispose",b)),D=z}if(D.visible=T.visible,D.wireframe=T.wireframe,E===Zr?D.side=T.shadowSide!==null?T.shadowSide:T.side:D.side=T.shadowSide!==null?T.shadowSide:d[T.side],D.alphaMap=T.alphaMap,D.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,D.map=T.map,D.clipShadows=T.clipShadows,D.clippingPlanes=T.clippingPlanes,D.clipIntersection=T.clipIntersection,D.displacementMap=T.displacementMap,D.displacementScale=T.displacementScale,D.displacementBias=T.displacementBias,D.wireframeLinewidth=T.wireframeLinewidth,D.linewidth=T.linewidth,y.isPointLight===!0&&D.isMeshDistanceMaterial===!0){let U=n.properties.get(D);U.light=y}return D}function M(w,T,y,E,D){if(w.visible===!1)return;if(w.layers.test(T.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&D===Zr)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,w.matrixWorld);let H=e.update(w),V=w.material;if(Array.isArray(V)){let z=H.groups;for(let F=0,W=z.length;F<W;F++){let ne=z[F],ie=V[ne.materialIndex];if(ie&&ie.visible){let _e=I(w,ie,E,D);w.onBeforeShadow(n,w,T,y,H,_e,ne),n.renderBufferDirect(y,null,H,_e,w,ne),w.onAfterShadow(n,w,T,y,H,_e,ne)}}}else if(V.visible){let z=I(w,V,E,D);w.onBeforeShadow(n,w,T,y,H,z,null),n.renderBufferDirect(y,null,H,z,w,null),w.onAfterShadow(n,w,T,y,H,z,null)}}let U=w.children;for(let H=0,V=U.length;H<V;H++)M(U[H],T,y,E,D)}function b(w){w.target.removeEventListener("dispose",b);for(let y in c){let E=c[y],D=w.target.uuid;D in E&&(E[D].dispose(),delete E[D])}}}function ay(n,e){function t(){let N=!1,de=new Ut,ee=null,xe=new Ut(0,0,0,0);return{setMask:function(Me){ee!==Me&&!N&&(n.colorMask(Me,Me,Me,Me),ee=Me)},setLocked:function(Me){N=Me},setClear:function(Me,se,Pe,Ce,Et){Et===!0&&(Me*=Ce,se*=Ce,Pe*=Ce),de.set(Me,se,Pe,Ce),xe.equals(de)===!1&&(n.clearColor(Me,se,Pe,Ce),xe.copy(de))},reset:function(){N=!1,ee=null,xe.set(-1,0,0,0)}}}function i(){let N=!1,de=!1,ee=null,xe=null,Me=null;return{setReversed:function(se){if(de!==se){let Pe=e.get("EXT_clip_control");se?Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.ZERO_TO_ONE_EXT):Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.NEGATIVE_ONE_TO_ONE_EXT),de=se;let Ce=Me;Me=null,this.setClear(Ce)}},getReversed:function(){return de},setTest:function(se){se?le(n.DEPTH_TEST):Ge(n.DEPTH_TEST)},setMask:function(se){ee!==se&&!N&&(n.depthMask(se),ee=se)},setFunc:function(se){if(de&&(se=nf[se]),xe!==se){switch(se){case jo:n.depthFunc(n.NEVER);break;case Qo:n.depthFunc(n.ALWAYS);break;case el:n.depthFunc(n.LESS);break;case Ys:n.depthFunc(n.LEQUAL);break;case tl:n.depthFunc(n.EQUAL);break;case nl:n.depthFunc(n.GEQUAL);break;case il:n.depthFunc(n.GREATER);break;case sl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}xe=se}},setLocked:function(se){N=se},setClear:function(se){Me!==se&&(Me=se,de&&(se=1-se),n.clearDepth(se))},reset:function(){N=!1,ee=null,xe=null,Me=null,de=!1}}}function s(){let N=!1,de=null,ee=null,xe=null,Me=null,se=null,Pe=null,Ce=null,Et=null;return{setTest:function(pt){N||(pt?le(n.STENCIL_TEST):Ge(n.STENCIL_TEST))},setMask:function(pt){de!==pt&&!N&&(n.stencilMask(pt),de=pt)},setFunc:function(pt,An,cn){(ee!==pt||xe!==An||Me!==cn)&&(n.stencilFunc(pt,An,cn),ee=pt,xe=An,Me=cn)},setOp:function(pt,An,cn){(se!==pt||Pe!==An||Ce!==cn)&&(n.stencilOp(pt,An,cn),se=pt,Pe=An,Ce=cn)},setLocked:function(pt){N=pt},setClear:function(pt){Et!==pt&&(n.clearStencil(pt),Et=pt)},reset:function(){N=!1,de=null,ee=null,xe=null,Me=null,se=null,Pe=null,Ce=null,Et=null}}}let r=new t,a=new i,o=new s,l=new WeakMap,c=new WeakMap,u={},d={},h={},f=new WeakMap,g=[],x=null,m=!1,p=null,S=null,I=null,M=null,b=null,w=null,T=null,y=new $e(0,0,0),E=0,D=!1,A=null,U=null,H=null,V=null,z=null,F=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,ne=0,ie=n.getParameter(n.VERSION);ie.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(ie)[1]),W=ne>=1):ie.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),W=ne>=2);let _e=null,ve={},Ee=n.getParameter(n.SCISSOR_BOX),Ke=n.getParameter(n.VIEWPORT),wt=new Ut().fromArray(Ee),Je=new Ut().fromArray(Ke);function j(N,de,ee,xe){let Me=new Uint8Array(4),se=n.createTexture();n.bindTexture(N,se),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Pe=0;Pe<ee;Pe++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(de,0,n.RGBA,1,1,xe,0,n.RGBA,n.UNSIGNED_BYTE,Me):n.texImage2D(de+Pe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Me);return se}let he={};he[n.TEXTURE_2D]=j(n.TEXTURE_2D,n.TEXTURE_2D,1),he[n.TEXTURE_CUBE_MAP]=j(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),he[n.TEXTURE_2D_ARRAY]=j(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),he[n.TEXTURE_3D]=j(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),le(n.DEPTH_TEST),a.setFunc(Ys),Pt(!1),kt(Su),le(n.CULL_FACE),lt(Oi);function le(N){u[N]!==!0&&(n.enable(N),u[N]=!0)}function Ge(N){u[N]!==!1&&(n.disable(N),u[N]=!1)}function We(N,de){return h[N]!==de?(n.bindFramebuffer(N,de),h[N]=de,N===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=de),N===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=de),!0):!1}function ke(N,de){let ee=g,xe=!1;if(N){ee=f.get(de),ee===void 0&&(ee=[],f.set(de,ee));let Me=N.textures;if(ee.length!==Me.length||ee[0]!==n.COLOR_ATTACHMENT0){for(let se=0,Pe=Me.length;se<Pe;se++)ee[se]=n.COLOR_ATTACHMENT0+se;ee.length=Me.length,xe=!0}}else ee[0]!==n.BACK&&(ee[0]=n.BACK,xe=!0);xe&&n.drawBuffers(ee)}function It(N){return x!==N?(n.useProgram(N),x=N,!0):!1}let et={[ms]:n.FUNC_ADD,[Ed]:n.FUNC_SUBTRACT,[Ad]:n.FUNC_REVERSE_SUBTRACT};et[Td]=n.MIN,et[Cd]=n.MAX;let bt={[Rd]:n.ZERO,[Id]:n.ONE,[Pd]:n.SRC_COLOR,[Ko]:n.SRC_ALPHA,[Bd]:n.SRC_ALPHA_SATURATE,[Fd]:n.DST_COLOR,[Ld]:n.DST_ALPHA,[Dd]:n.ONE_MINUS_SRC_COLOR,[Jo]:n.ONE_MINUS_SRC_ALPHA,[Ud]:n.ONE_MINUS_DST_COLOR,[Nd]:n.ONE_MINUS_DST_ALPHA,[Od]:n.CONSTANT_COLOR,[kd]:n.ONE_MINUS_CONSTANT_COLOR,[zd]:n.CONSTANT_ALPHA,[Vd]:n.ONE_MINUS_CONSTANT_ALPHA};function lt(N,de,ee,xe,Me,se,Pe,Ce,Et,pt){if(N===Oi){m===!0&&(Ge(n.BLEND),m=!1);return}if(m===!1&&(le(n.BLEND),m=!0),N!==wd){if(N!==p||pt!==D){if((S!==ms||b!==ms)&&(n.blendEquation(n.FUNC_ADD),S=ms,b=ms),pt)switch(N){case qs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case wu:n.blendFunc(n.ONE,n.ONE);break;case Eu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Au:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Ve("WebGLState: Invalid blending: ",N);break}else switch(N){case qs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case wu:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Eu:Ve("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Au:Ve("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ve("WebGLState: Invalid blending: ",N);break}I=null,M=null,w=null,T=null,y.set(0,0,0),E=0,p=N,D=pt}return}Me=Me||de,se=se||ee,Pe=Pe||xe,(de!==S||Me!==b)&&(n.blendEquationSeparate(et[de],et[Me]),S=de,b=Me),(ee!==I||xe!==M||se!==w||Pe!==T)&&(n.blendFuncSeparate(bt[ee],bt[xe],bt[se],bt[Pe]),I=ee,M=xe,w=se,T=Pe),(Ce.equals(y)===!1||Et!==E)&&(n.blendColor(Ce.r,Ce.g,Ce.b,Et),y.copy(Ce),E=Et),p=N,D=!1}function it(N,de){N.side===Cn?Ge(n.CULL_FACE):le(n.CULL_FACE);let ee=N.side===an;de&&(ee=!ee),Pt(ee),N.blending===qs&&N.transparent===!1?lt(Oi):lt(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),r.setMask(N.colorWrite);let xe=N.stencilWrite;o.setTest(xe),xe&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Dt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?le(n.SAMPLE_ALPHA_TO_COVERAGE):Ge(n.SAMPLE_ALPHA_TO_COVERAGE)}function Pt(N){A!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),A=N)}function kt(N){N!==bd?(le(n.CULL_FACE),N!==U&&(N===Su?n.cullFace(n.BACK):N===Md?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ge(n.CULL_FACE),U=N}function zt(N){N!==H&&(W&&n.lineWidth(N),H=N)}function Dt(N,de,ee){N?(le(n.POLYGON_OFFSET_FILL),(V!==de||z!==ee)&&(V=de,z=ee,a.getReversed()&&(de=-de),n.polygonOffset(de,ee))):Ge(n.POLYGON_OFFSET_FILL)}function _t(N){N?le(n.SCISSOR_TEST):Ge(n.SCISSOR_TEST)}function st(N){N===void 0&&(N=n.TEXTURE0+F-1),_e!==N&&(n.activeTexture(N),_e=N)}function O(N,de,ee){ee===void 0&&(_e===null?ee=n.TEXTURE0+F-1:ee=_e);let xe=ve[ee];xe===void 0&&(xe={type:void 0,texture:void 0},ve[ee]=xe),(xe.type!==N||xe.texture!==de)&&(_e!==ee&&(n.activeTexture(ee),_e=ee),n.bindTexture(N,de||he[N]),xe.type=N,xe.texture=de)}function Zt(){let N=ve[_e];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function Te(){try{n.compressedTexImage2D(...arguments)}catch(N){Ve("WebGLState:",N)}}function C(){try{n.compressedTexImage3D(...arguments)}catch(N){Ve("WebGLState:",N)}}function _(){try{n.texSubImage2D(...arguments)}catch(N){Ve("WebGLState:",N)}}function $(){try{n.texSubImage3D(...arguments)}catch(N){Ve("WebGLState:",N)}}function Y(){try{n.compressedTexSubImage2D(...arguments)}catch(N){Ve("WebGLState:",N)}}function J(){try{n.compressedTexSubImage3D(...arguments)}catch(N){Ve("WebGLState:",N)}}function ue(){try{n.texStorage2D(...arguments)}catch(N){Ve("WebGLState:",N)}}function fe(){try{n.texStorage3D(...arguments)}catch(N){Ve("WebGLState:",N)}}function Q(){try{n.texImage2D(...arguments)}catch(N){Ve("WebGLState:",N)}}function te(){try{n.texImage3D(...arguments)}catch(N){Ve("WebGLState:",N)}}function pe(N){return d[N]!==void 0?d[N]:n.getParameter(N)}function Ne(N,de){d[N]!==de&&(n.pixelStorei(N,de),d[N]=de)}function be(N){wt.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),wt.copy(N))}function ge(N){Je.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),Je.copy(N))}function Be(N,de){let ee=c.get(de);ee===void 0&&(ee=new WeakMap,c.set(de,ee));let xe=ee.get(N);xe===void 0&&(xe=n.getUniformBlockIndex(de,N.name),ee.set(N,xe))}function ze(N,de){let xe=c.get(de).get(N);l.get(de)!==xe&&(n.uniformBlockBinding(de,xe,N.__bindingPointIndex),l.set(de,xe))}function Xe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},d={},_e=null,ve={},h={},f=new WeakMap,g=[],x=null,m=!1,p=null,S=null,I=null,M=null,b=null,w=null,T=null,y=new $e(0,0,0),E=0,D=!1,A=null,U=null,H=null,V=null,z=null,wt.set(0,0,n.canvas.width,n.canvas.height),Je.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:le,disable:Ge,bindFramebuffer:We,drawBuffers:ke,useProgram:It,setBlending:lt,setMaterial:it,setFlipSided:Pt,setCullFace:kt,setLineWidth:zt,setPolygonOffset:Dt,setScissorTest:_t,activeTexture:st,bindTexture:O,unbindTexture:Zt,compressedTexImage2D:Te,compressedTexImage3D:C,texImage2D:Q,texImage3D:te,pixelStorei:Ne,getParameter:pe,updateUBOMapping:Be,uniformBlockBinding:ze,texStorage2D:ue,texStorage3D:fe,texSubImage2D:_,texSubImage3D:$,compressedTexSubImage2D:Y,compressedTexSubImage3D:J,scissor:be,viewport:ge,reset:Xe}}function oy(n,e,t,i,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new De,u=new WeakMap,d=new Set,h,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(C,_){return g?new OffscreenCanvas(C,_):Lr("canvas")}function m(C,_,$){let Y=1,J=Te(C);if((J.width>$||J.height>$)&&(Y=$/Math.max(J.width,J.height)),Y<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let ue=Math.floor(Y*J.width),fe=Math.floor(Y*J.height);h===void 0&&(h=x(ue,fe));let Q=_?x(ue,fe):h;return Q.width=ue,Q.height=fe,Q.getContext("2d").drawImage(C,0,0,ue,fe),Oe("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+ue+"x"+fe+")."),Q}else return"data"in C&&Oe("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),C;return C}function p(C){return C.generateMipmaps}function S(C){n.generateMipmap(C)}function I(C){return C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?n.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(C,_,$,Y,J,ue=!1){if(C!==null){if(n[C]!==void 0)return n[C];Oe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let fe;Y&&(fe=e.get("EXT_texture_norm16"),fe||Oe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Q=_;if(_===n.RED&&($===n.FLOAT&&(Q=n.R32F),$===n.HALF_FLOAT&&(Q=n.R16F),$===n.UNSIGNED_BYTE&&(Q=n.R8),$===n.UNSIGNED_SHORT&&fe&&(Q=fe.R16_EXT),$===n.SHORT&&fe&&(Q=fe.R16_SNORM_EXT)),_===n.RED_INTEGER&&($===n.UNSIGNED_BYTE&&(Q=n.R8UI),$===n.UNSIGNED_SHORT&&(Q=n.R16UI),$===n.UNSIGNED_INT&&(Q=n.R32UI),$===n.BYTE&&(Q=n.R8I),$===n.SHORT&&(Q=n.R16I),$===n.INT&&(Q=n.R32I)),_===n.RG&&($===n.FLOAT&&(Q=n.RG32F),$===n.HALF_FLOAT&&(Q=n.RG16F),$===n.UNSIGNED_BYTE&&(Q=n.RG8),$===n.UNSIGNED_SHORT&&fe&&(Q=fe.RG16_EXT),$===n.SHORT&&fe&&(Q=fe.RG16_SNORM_EXT)),_===n.RG_INTEGER&&($===n.UNSIGNED_BYTE&&(Q=n.RG8UI),$===n.UNSIGNED_SHORT&&(Q=n.RG16UI),$===n.UNSIGNED_INT&&(Q=n.RG32UI),$===n.BYTE&&(Q=n.RG8I),$===n.SHORT&&(Q=n.RG16I),$===n.INT&&(Q=n.RG32I)),_===n.RGB_INTEGER&&($===n.UNSIGNED_BYTE&&(Q=n.RGB8UI),$===n.UNSIGNED_SHORT&&(Q=n.RGB16UI),$===n.UNSIGNED_INT&&(Q=n.RGB32UI),$===n.BYTE&&(Q=n.RGB8I),$===n.SHORT&&(Q=n.RGB16I),$===n.INT&&(Q=n.RGB32I)),_===n.RGBA_INTEGER&&($===n.UNSIGNED_BYTE&&(Q=n.RGBA8UI),$===n.UNSIGNED_SHORT&&(Q=n.RGBA16UI),$===n.UNSIGNED_INT&&(Q=n.RGBA32UI),$===n.BYTE&&(Q=n.RGBA8I),$===n.SHORT&&(Q=n.RGBA16I),$===n.INT&&(Q=n.RGBA32I)),_===n.RGB&&($===n.UNSIGNED_SHORT&&fe&&(Q=fe.RGB16_EXT),$===n.SHORT&&fe&&(Q=fe.RGB16_SNORM_EXT),$===n.UNSIGNED_INT_5_9_9_9_REV&&(Q=n.RGB9_E5),$===n.UNSIGNED_INT_10F_11F_11F_REV&&(Q=n.R11F_G11F_B10F)),_===n.RGBA){let te=ue?wa:at.getTransfer(J);$===n.FLOAT&&(Q=n.RGBA32F),$===n.HALF_FLOAT&&(Q=n.RGBA16F),$===n.UNSIGNED_BYTE&&(Q=te===xt?n.SRGB8_ALPHA8:n.RGBA8),$===n.UNSIGNED_SHORT&&fe&&(Q=fe.RGBA16_EXT),$===n.SHORT&&fe&&(Q=fe.RGBA16_SNORM_EXT),$===n.UNSIGNED_SHORT_4_4_4_4&&(Q=n.RGBA4),$===n.UNSIGNED_SHORT_5_5_5_1&&(Q=n.RGB5_A1)}return(Q===n.R16F||Q===n.R32F||Q===n.RG16F||Q===n.RG32F||Q===n.RGBA16F||Q===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function b(C,_){let $;return C?_===null||_===yi||_===Jr?$=n.DEPTH24_STENCIL8:_===ii?$=n.DEPTH32F_STENCIL8:_===Kr&&($=n.DEPTH24_STENCIL8,Oe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===yi||_===Jr?$=n.DEPTH_COMPONENT24:_===ii?$=n.DEPTH_COMPONENT32F:_===Kr&&($=n.DEPTH_COMPONENT16),$}function w(C,_){return p(C)===!0||C.isFramebufferTexture&&C.minFilter!==en&&C.minFilter!==rn?Math.log2(Math.max(_.width,_.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?_.mipmaps.length:1}function T(C){let _=C.target;_.removeEventListener("dispose",T),E(_),_.isVideoTexture&&u.delete(_),_.isHTMLTexture&&d.delete(_)}function y(C){let _=C.target;_.removeEventListener("dispose",y),A(_)}function E(C){let _=i.get(C);if(_.__webglInit===void 0)return;let $=C.source,Y=f.get($);if(Y){let J=Y[_.__cacheKey];J.usedTimes--,J.usedTimes===0&&D(C),Object.keys(Y).length===0&&f.delete($)}i.remove(C)}function D(C){let _=i.get(C);n.deleteTexture(_.__webglTexture);let $=C.source,Y=f.get($);delete Y[_.__cacheKey],a.memory.textures--}function A(C){let _=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(_.__webglFramebuffer[Y]))for(let J=0;J<_.__webglFramebuffer[Y].length;J++)n.deleteFramebuffer(_.__webglFramebuffer[Y][J]);else n.deleteFramebuffer(_.__webglFramebuffer[Y]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[Y])}else{if(Array.isArray(_.__webglFramebuffer))for(let Y=0;Y<_.__webglFramebuffer.length;Y++)n.deleteFramebuffer(_.__webglFramebuffer[Y]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let Y=0;Y<_.__webglColorRenderbuffer.length;Y++)_.__webglColorRenderbuffer[Y]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[Y]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let $=C.textures;for(let Y=0,J=$.length;Y<J;Y++){let ue=i.get($[Y]);ue.__webglTexture&&(n.deleteTexture(ue.__webglTexture),a.memory.textures--),i.remove($[Y])}i.remove(C)}let U=0;function H(){U=0}function V(){return U}function z(C){U=C}function F(){let C=U;return C>=s.maxTextures&&Oe("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),U+=1,C}function W(C){let _=[];return _.push(C.wrapS),_.push(C.wrapT),_.push(C.wrapR||0),_.push(C.magFilter),_.push(C.minFilter),_.push(C.anisotropy),_.push(C.internalFormat),_.push(C.format),_.push(C.type),_.push(C.generateMipmaps),_.push(C.premultiplyAlpha),_.push(C.flipY),_.push(C.unpackAlignment),_.push(C.colorSpace),_.join()}function ne(C,_){let $=i.get(C);if(C.isVideoTexture&&O(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&$.__version!==C.version){let Y=C.image;if(Y===null)Oe("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)Oe("WebGLRenderer: Texture marked for update but image is incomplete");else{Ge($,C,_);return}}else C.isExternalTexture&&($.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,$.__webglTexture,n.TEXTURE0+_)}function ie(C,_){let $=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&$.__version!==C.version){Ge($,C,_);return}else C.isExternalTexture&&($.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,$.__webglTexture,n.TEXTURE0+_)}function _e(C,_){let $=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&$.__version!==C.version){Ge($,C,_);return}t.bindTexture(n.TEXTURE_3D,$.__webglTexture,n.TEXTURE0+_)}function ve(C,_){let $=i.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&$.__version!==C.version){We($,C,_);return}t.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture,n.TEXTURE0+_)}let Ee={[rl]:n.REPEAT,[Ni]:n.CLAMP_TO_EDGE,[al]:n.MIRRORED_REPEAT},Ke={[en]:n.NEAREST,[Wd]:n.NEAREST_MIPMAP_NEAREST,[Za]:n.NEAREST_MIPMAP_LINEAR,[rn]:n.LINEAR,[Nl]:n.LINEAR_MIPMAP_NEAREST,[Es]:n.LINEAR_MIPMAP_LINEAR},wt={[qd]:n.NEVER,[jd]:n.ALWAYS,[Yd]:n.LESS,[_c]:n.LEQUAL,[Zd]:n.EQUAL,[yc]:n.GEQUAL,[Kd]:n.GREATER,[Jd]:n.NOTEQUAL};function Je(C,_){if(_.type===ii&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===rn||_.magFilter===Nl||_.magFilter===Za||_.magFilter===Es||_.minFilter===rn||_.minFilter===Nl||_.minFilter===Za||_.minFilter===Es)&&Oe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,Ee[_.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,Ee[_.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,Ee[_.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,Ke[_.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,Ke[_.minFilter]),_.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,wt[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===en||_.minFilter!==Za&&_.minFilter!==Es||_.type===ii&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){let $=e.get("EXT_texture_filter_anisotropic");n.texParameterf(C,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function j(C,_){let $=!1;C.__webglInit===void 0&&(C.__webglInit=!0,_.addEventListener("dispose",T));let Y=_.source,J=f.get(Y);J===void 0&&(J={},f.set(Y,J));let ue=W(_);if(ue!==C.__cacheKey){J[ue]===void 0&&(J[ue]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,$=!0),J[ue].usedTimes++;let fe=J[C.__cacheKey];fe!==void 0&&(J[C.__cacheKey].usedTimes--,fe.usedTimes===0&&D(_)),C.__cacheKey=ue,C.__webglTexture=J[ue].texture}return $}function he(C,_,$){return Math.floor(Math.floor(C/$)/_)}function le(C,_,$,Y){let ue=C.updateRanges;if(ue.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,_.width,_.height,$,Y,_.data);else{ue.sort((Ne,be)=>Ne.start-be.start);let fe=0;for(let Ne=1;Ne<ue.length;Ne++){let be=ue[fe],ge=ue[Ne],Be=be.start+be.count,ze=he(ge.start,_.width,4),Xe=he(be.start,_.width,4);ge.start<=Be+1&&ze===Xe&&he(ge.start+ge.count-1,_.width,4)===ze?be.count=Math.max(be.count,ge.start+ge.count-be.start):(++fe,ue[fe]=ge)}ue.length=fe+1;let Q=t.getParameter(n.UNPACK_ROW_LENGTH),te=t.getParameter(n.UNPACK_SKIP_PIXELS),pe=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,_.width);for(let Ne=0,be=ue.length;Ne<be;Ne++){let ge=ue[Ne],Be=Math.floor(ge.start/4),ze=Math.ceil(ge.count/4),Xe=Be%_.width,N=Math.floor(Be/_.width),de=ze,ee=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,Xe),t.pixelStorei(n.UNPACK_SKIP_ROWS,N),t.texSubImage2D(n.TEXTURE_2D,0,Xe,N,de,ee,$,Y,_.data)}C.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,Q),t.pixelStorei(n.UNPACK_SKIP_PIXELS,te),t.pixelStorei(n.UNPACK_SKIP_ROWS,pe)}}function Ge(C,_,$){let Y=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(Y=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(Y=n.TEXTURE_3D);let J=j(C,_),ue=_.source;t.bindTexture(Y,C.__webglTexture,n.TEXTURE0+$);let fe=i.get(ue);if(ue.version!==fe.__version||J===!0){if(t.activeTexture(n.TEXTURE0+$),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){let ee=at.getPrimaries(at.workingColorSpace),xe=_.colorSpace===is?null:at.getPrimaries(_.colorSpace),Me=_.colorSpace===is||ee===xe?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me)}t.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment);let te=m(_.image,!1,s.maxTextureSize);te=Zt(_,te);let pe=r.convert(_.format,_.colorSpace),Ne=r.convert(_.type),be=M(_.internalFormat,pe,Ne,_.normalized,_.colorSpace,_.isVideoTexture);Je(Y,_);let ge,Be=_.mipmaps,ze=_.isVideoTexture!==!0,Xe=fe.__version===void 0||J===!0,N=ue.dataReady,de=w(_,te);if(_.isDepthTexture)be=b(_.format===As,_.type),Xe&&(ze?t.texStorage2D(n.TEXTURE_2D,1,be,te.width,te.height):t.texImage2D(n.TEXTURE_2D,0,be,te.width,te.height,0,pe,Ne,null));else if(_.isDataTexture)if(Be.length>0){ze&&Xe&&t.texStorage2D(n.TEXTURE_2D,de,be,Be[0].width,Be[0].height);for(let ee=0,xe=Be.length;ee<xe;ee++)ge=Be[ee],ze?N&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,ge.width,ge.height,pe,Ne,ge.data):t.texImage2D(n.TEXTURE_2D,ee,be,ge.width,ge.height,0,pe,Ne,ge.data);_.generateMipmaps=!1}else ze?(Xe&&t.texStorage2D(n.TEXTURE_2D,de,be,te.width,te.height),N&&le(_,te,pe,Ne)):t.texImage2D(n.TEXTURE_2D,0,be,te.width,te.height,0,pe,Ne,te.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){ze&&Xe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,de,be,Be[0].width,Be[0].height,te.depth);for(let ee=0,xe=Be.length;ee<xe;ee++)if(ge=Be[ee],_.format!==si)if(pe!==null)if(ze){if(N)if(_.layerUpdates.size>0){let Me=$u(ge.width,ge.height,_.format,_.type);for(let se of _.layerUpdates){let Pe=ge.data.subarray(se*Me/ge.data.BYTES_PER_ELEMENT,(se+1)*Me/ge.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,se,ge.width,ge.height,1,pe,Pe)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,0,ge.width,ge.height,te.depth,pe,ge.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ee,be,ge.width,ge.height,te.depth,0,ge.data,0,0);else Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ze?N&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,0,ge.width,ge.height,te.depth,pe,Ne,ge.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ee,be,ge.width,ge.height,te.depth,0,pe,Ne,ge.data)}else{ze&&Xe&&t.texStorage2D(n.TEXTURE_2D,de,be,Be[0].width,Be[0].height);for(let ee=0,xe=Be.length;ee<xe;ee++)ge=Be[ee],_.format!==si?pe!==null?ze?N&&t.compressedTexSubImage2D(n.TEXTURE_2D,ee,0,0,ge.width,ge.height,pe,ge.data):t.compressedTexImage2D(n.TEXTURE_2D,ee,be,ge.width,ge.height,0,ge.data):Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?N&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,ge.width,ge.height,pe,Ne,ge.data):t.texImage2D(n.TEXTURE_2D,ee,be,ge.width,ge.height,0,pe,Ne,ge.data)}else if(_.isDataArrayTexture)if(ze){if(Xe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,de,be,te.width,te.height,te.depth),N)if(_.layerUpdates.size>0){let ee=$u(te.width,te.height,_.format,_.type);for(let xe of _.layerUpdates){let Me=te.data.subarray(xe*ee/te.data.BYTES_PER_ELEMENT,(xe+1)*ee/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,xe,te.width,te.height,1,pe,Ne,Me)}_.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,pe,Ne,te.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,be,te.width,te.height,te.depth,0,pe,Ne,te.data);else if(_.isData3DTexture)ze?(Xe&&t.texStorage3D(n.TEXTURE_3D,de,be,te.width,te.height,te.depth),N&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,pe,Ne,te.data)):t.texImage3D(n.TEXTURE_3D,0,be,te.width,te.height,te.depth,0,pe,Ne,te.data);else if(_.isFramebufferTexture){if(Xe)if(ze)t.texStorage2D(n.TEXTURE_2D,de,be,te.width,te.height);else{let ee=te.width,xe=te.height;for(let Me=0;Me<de;Me++)t.texImage2D(n.TEXTURE_2D,Me,be,ee,xe,0,pe,Ne,null),ee>>=1,xe>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in n){let ee=n.canvas;if(ee.hasAttribute("layoutsubtree")||ee.setAttribute("layoutsubtree","true"),te.parentNode!==ee){ee.appendChild(te),d.add(_),ee.onpaint=xe=>{let Me=xe.changedElements;for(let se of d)Me.includes(se.image)&&(se.needsUpdate=!0)},ee.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,te);else{let Me=n.RGBA,se=n.RGBA,Pe=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Me,se,Pe,te)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Be.length>0){if(ze&&Xe){let ee=Te(Be[0]);t.texStorage2D(n.TEXTURE_2D,de,be,ee.width,ee.height)}for(let ee=0,xe=Be.length;ee<xe;ee++)ge=Be[ee],ze?N&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,pe,Ne,ge):t.texImage2D(n.TEXTURE_2D,ee,be,pe,Ne,ge);_.generateMipmaps=!1}else if(ze){if(Xe){let ee=Te(te);t.texStorage2D(n.TEXTURE_2D,de,be,ee.width,ee.height)}N&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,pe,Ne,te)}else t.texImage2D(n.TEXTURE_2D,0,be,pe,Ne,te);p(_)&&S(Y),fe.__version=ue.version,_.onUpdate&&_.onUpdate(_)}C.__version=_.version}function We(C,_,$){if(_.image.length!==6)return;let Y=j(C,_),J=_.source;t.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+$);let ue=i.get(J);if(J.version!==ue.__version||Y===!0){t.activeTexture(n.TEXTURE0+$);let fe=at.getPrimaries(at.workingColorSpace),Q=_.colorSpace===is?null:at.getPrimaries(_.colorSpace),te=_.colorSpace===is||fe===Q?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);let pe=_.isCompressedTexture||_.image[0].isCompressedTexture,Ne=_.image[0]&&_.image[0].isDataTexture,be=[];for(let se=0;se<6;se++)!pe&&!Ne?be[se]=m(_.image[se],!0,s.maxCubemapSize):be[se]=Ne?_.image[se].image:_.image[se],be[se]=Zt(_,be[se]);let ge=be[0],Be=r.convert(_.format,_.colorSpace),ze=r.convert(_.type),Xe=M(_.internalFormat,Be,ze,_.normalized,_.colorSpace),N=_.isVideoTexture!==!0,de=ue.__version===void 0||Y===!0,ee=J.dataReady,xe=w(_,ge);Je(n.TEXTURE_CUBE_MAP,_);let Me;if(pe){N&&de&&t.texStorage2D(n.TEXTURE_CUBE_MAP,xe,Xe,ge.width,ge.height);for(let se=0;se<6;se++){Me=be[se].mipmaps;for(let Pe=0;Pe<Me.length;Pe++){let Ce=Me[Pe];_.format!==si?Be!==null?N?ee&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Pe,0,0,Ce.width,Ce.height,Be,Ce.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Pe,Xe,Ce.width,Ce.height,0,Ce.data):Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Pe,0,0,Ce.width,Ce.height,Be,ze,Ce.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Pe,Xe,Ce.width,Ce.height,0,Be,ze,Ce.data)}}}else{if(Me=_.mipmaps,N&&de){Me.length>0&&xe++;let se=Te(be[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,xe,Xe,se.width,se.height)}for(let se=0;se<6;se++)if(Ne){N?ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,be[se].width,be[se].height,Be,ze,be[se].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Xe,be[se].width,be[se].height,0,Be,ze,be[se].data);for(let Pe=0;Pe<Me.length;Pe++){let Et=Me[Pe].image[se].image;N?ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Pe+1,0,0,Et.width,Et.height,Be,ze,Et.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Pe+1,Xe,Et.width,Et.height,0,Be,ze,Et.data)}}else{N?ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Be,ze,be[se]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Xe,Be,ze,be[se]);for(let Pe=0;Pe<Me.length;Pe++){let Ce=Me[Pe];N?ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Pe+1,0,0,Be,ze,Ce.image[se]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Pe+1,Xe,Be,ze,Ce.image[se])}}}p(_)&&S(n.TEXTURE_CUBE_MAP),ue.__version=J.version,_.onUpdate&&_.onUpdate(_)}C.__version=_.version}function ke(C,_,$,Y,J,ue){let fe=r.convert($.format,$.colorSpace),Q=r.convert($.type),te=M($.internalFormat,fe,Q,$.normalized,$.colorSpace),pe=i.get(_),Ne=i.get($);if(Ne.__renderTarget=_,!pe.__hasExternalTextures){let be=Math.max(1,_.width>>ue),ge=Math.max(1,_.height>>ue);J===n.TEXTURE_3D||J===n.TEXTURE_2D_ARRAY?t.texImage3D(J,ue,te,be,ge,_.depth,0,fe,Q,null):t.texImage2D(J,ue,te,be,ge,0,fe,Q,null)}t.bindFramebuffer(n.FRAMEBUFFER,C),st(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Y,J,Ne.__webglTexture,0,_t(_)):(J===n.TEXTURE_2D||J>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Y,J,Ne.__webglTexture,ue),t.bindFramebuffer(n.FRAMEBUFFER,null)}function It(C,_,$){if(n.bindRenderbuffer(n.RENDERBUFFER,C),_.depthBuffer){let Y=_.depthTexture,J=Y&&Y.isDepthTexture?Y.type:null,ue=b(_.stencilBuffer,J),fe=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;st(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,_t(_),ue,_.width,_.height):$?n.renderbufferStorageMultisample(n.RENDERBUFFER,_t(_),ue,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,ue,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,fe,n.RENDERBUFFER,C)}else{let Y=_.textures;for(let J=0;J<Y.length;J++){let ue=Y[J],fe=r.convert(ue.format,ue.colorSpace),Q=r.convert(ue.type),te=M(ue.internalFormat,fe,Q,ue.normalized,ue.colorSpace);st(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,_t(_),te,_.width,_.height):$?n.renderbufferStorageMultisample(n.RENDERBUFFER,_t(_),te,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,te,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function et(C,_,$){let Y=_.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,C),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let J=i.get(_.depthTexture);if(J.__renderTarget=_,(!J.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),Y){if(J.__webglInit===void 0&&(J.__webglInit=!0,_.depthTexture.addEventListener("dispose",T)),J.__webglTexture===void 0){J.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture),Je(n.TEXTURE_CUBE_MAP,_.depthTexture);let pe=r.convert(_.depthTexture.format),Ne=r.convert(_.depthTexture.type),be;_.depthTexture.format===Fi?be=n.DEPTH_COMPONENT24:_.depthTexture.format===As&&(be=n.DEPTH24_STENCIL8);for(let ge=0;ge<6;ge++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,be,_.width,_.height,0,pe,Ne,null)}}else ne(_.depthTexture,0);let ue=J.__webglTexture,fe=_t(_),Q=Y?n.TEXTURE_CUBE_MAP_POSITIVE_X+$:n.TEXTURE_2D,te=_.depthTexture.format===As?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(_.depthTexture.format===Fi)st(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,te,Q,ue,0,fe):n.framebufferTexture2D(n.FRAMEBUFFER,te,Q,ue,0);else if(_.depthTexture.format===As)st(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,te,Q,ue,0,fe):n.framebufferTexture2D(n.FRAMEBUFFER,te,Q,ue,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function bt(C){let _=i.get(C),$=C.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==C.depthTexture){let Y=C.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),Y){let J=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,Y.removeEventListener("dispose",J)};Y.addEventListener("dispose",J),_.__depthDisposeCallback=J}_.__boundDepthTexture=Y}if(C.depthTexture&&!_.__autoAllocateDepthBuffer)if($)for(let Y=0;Y<6;Y++)et(_.__webglFramebuffer[Y],C,Y);else{let Y=C.texture.mipmaps;Y&&Y.length>0?et(_.__webglFramebuffer[0],C,0):et(_.__webglFramebuffer,C,0)}else if($){_.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[Y]),_.__webglDepthbuffer[Y]===void 0)_.__webglDepthbuffer[Y]=n.createRenderbuffer(),It(_.__webglDepthbuffer[Y],C,!1);else{let J=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ue=_.__webglDepthbuffer[Y];n.bindRenderbuffer(n.RENDERBUFFER,ue),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,ue)}}else{let Y=C.texture.mipmaps;if(Y&&Y.length>0?t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),It(_.__webglDepthbuffer,C,!1);else{let J=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ue=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ue),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,ue)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function lt(C,_,$){let Y=i.get(C);_!==void 0&&ke(Y.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),$!==void 0&&bt(C)}function it(C){let _=C.texture,$=i.get(C),Y=i.get(_);C.addEventListener("dispose",y);let J=C.textures,ue=C.isWebGLCubeRenderTarget===!0,fe=J.length>1;if(fe||(Y.__webglTexture===void 0&&(Y.__webglTexture=n.createTexture()),Y.__version=_.version,a.memory.textures++),ue){$.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(_.mipmaps&&_.mipmaps.length>0){$.__webglFramebuffer[Q]=[];for(let te=0;te<_.mipmaps.length;te++)$.__webglFramebuffer[Q][te]=n.createFramebuffer()}else $.__webglFramebuffer[Q]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){$.__webglFramebuffer=[];for(let Q=0;Q<_.mipmaps.length;Q++)$.__webglFramebuffer[Q]=n.createFramebuffer()}else $.__webglFramebuffer=n.createFramebuffer();if(fe)for(let Q=0,te=J.length;Q<te;Q++){let pe=i.get(J[Q]);pe.__webglTexture===void 0&&(pe.__webglTexture=n.createTexture(),a.memory.textures++)}if(C.samples>0&&st(C)===!1){$.__webglMultisampledFramebuffer=n.createFramebuffer(),$.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let Q=0;Q<J.length;Q++){let te=J[Q];$.__webglColorRenderbuffer[Q]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,$.__webglColorRenderbuffer[Q]);let pe=r.convert(te.format,te.colorSpace),Ne=r.convert(te.type),be=M(te.internalFormat,pe,Ne,te.normalized,te.colorSpace,C.isXRRenderTarget===!0),ge=_t(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,ge,be,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Q,n.RENDERBUFFER,$.__webglColorRenderbuffer[Q])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&($.__webglDepthRenderbuffer=n.createRenderbuffer(),It($.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ue){t.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture),Je(n.TEXTURE_CUBE_MAP,_);for(let Q=0;Q<6;Q++)if(_.mipmaps&&_.mipmaps.length>0)for(let te=0;te<_.mipmaps.length;te++)ke($.__webglFramebuffer[Q][te],C,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,te);else ke($.__webglFramebuffer[Q],C,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);p(_)&&S(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(fe){for(let Q=0,te=J.length;Q<te;Q++){let pe=J[Q],Ne=i.get(pe),be=n.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(be=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(be,Ne.__webglTexture),Je(be,pe),ke($.__webglFramebuffer,C,pe,n.COLOR_ATTACHMENT0+Q,be,0),p(pe)&&S(be)}t.unbindTexture()}else{let Q=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Q=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Q,Y.__webglTexture),Je(Q,_),_.mipmaps&&_.mipmaps.length>0)for(let te=0;te<_.mipmaps.length;te++)ke($.__webglFramebuffer[te],C,_,n.COLOR_ATTACHMENT0,Q,te);else ke($.__webglFramebuffer,C,_,n.COLOR_ATTACHMENT0,Q,0);p(_)&&S(Q),t.unbindTexture()}C.depthBuffer&&bt(C)}function Pt(C){let _=C.textures;for(let $=0,Y=_.length;$<Y;$++){let J=_[$];if(p(J)){let ue=I(C),fe=i.get(J).__webglTexture;t.bindTexture(ue,fe),S(ue),t.unbindTexture()}}}let kt=[],zt=[];function Dt(C){if(C.samples>0){if(st(C)===!1){let _=C.textures,$=C.width,Y=C.height,J=n.COLOR_BUFFER_BIT,ue=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,fe=i.get(C),Q=_.length>1;if(Q)for(let pe=0;pe<_.length;pe++)t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer);let te=C.texture.mipmaps;te&&te.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,fe.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let pe=0;pe<_.length;pe++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(J|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(J|=n.STENCIL_BUFFER_BIT)),Q){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,fe.__webglColorRenderbuffer[pe]);let Ne=i.get(_[pe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ne,0)}n.blitFramebuffer(0,0,$,Y,0,0,$,Y,J,n.NEAREST),l===!0&&(kt.length=0,zt.length=0,kt.push(n.COLOR_ATTACHMENT0+pe),C.depthBuffer&&C.resolveDepthBuffer===!1&&(kt.push(ue),zt.push(ue),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,zt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,kt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Q)for(let pe=0;pe<_.length;pe++){t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,fe.__webglColorRenderbuffer[pe]);let Ne=i.get(_[pe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.TEXTURE_2D,Ne,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){let _=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function _t(C){return Math.min(s.maxSamples,C.samples)}function st(C){let _=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function O(C){let _=a.render.frame;u.get(C)!==_&&(u.set(C,_),C.update())}function Zt(C,_){let $=C.colorSpace,Y=C.format,J=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||$!==Sa&&$!==is&&(at.getTransfer($)===xt?(Y!==si||J!==Rn)&&Oe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ve("WebGLTextures: Unsupported texture color space:",$)),_}function Te(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=H,this.getTextureUnits=V,this.setTextureUnits=z,this.setTexture2D=ne,this.setTexture2DArray=ie,this.setTexture3D=_e,this.setTextureCube=ve,this.rebindTextures=lt,this.setupRenderTarget=it,this.updateRenderTargetMipmap=Pt,this.updateMultisampleRenderTarget=Dt,this.setupDepthRenderbuffer=bt,this.setupFrameBufferTexture=ke,this.useMultisampledRTT=st,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function ly(n,e){function t(i,s=is){let r,a=at.getTransfer(s);if(i===Rn)return n.UNSIGNED_BYTE;if(i===Ul)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Bl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Uu)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Bu)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Nu)return n.BYTE;if(i===Fu)return n.SHORT;if(i===Kr)return n.UNSIGNED_SHORT;if(i===Fl)return n.INT;if(i===yi)return n.UNSIGNED_INT;if(i===ii)return n.FLOAT;if(i===ki)return n.HALF_FLOAT;if(i===Ou)return n.ALPHA;if(i===ku)return n.RGB;if(i===si)return n.RGBA;if(i===Fi)return n.DEPTH_COMPONENT;if(i===As)return n.DEPTH_STENCIL;if(i===Ol)return n.RED;if(i===kl)return n.RED_INTEGER;if(i===Ts)return n.RG;if(i===zl)return n.RG_INTEGER;if(i===Vl)return n.RGBA_INTEGER;if(i===Ka||i===Ja||i===ja||i===Qa)if(a===xt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Ka)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ja)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ja)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Qa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Ka)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ja)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ja)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Qa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Gl||i===Hl||i===Wl||i===$l)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Gl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Hl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Wl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===$l)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Xl||i===ql||i===Yl||i===Zl||i===Kl||i===eo||i===Jl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Xl||i===ql)return a===xt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Yl)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Zl)return r.COMPRESSED_R11_EAC;if(i===Kl)return r.COMPRESSED_SIGNED_R11_EAC;if(i===eo)return r.COMPRESSED_RG11_EAC;if(i===Jl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===jl||i===Ql||i===ec||i===tc||i===nc||i===ic||i===sc||i===rc||i===ac||i===oc||i===lc||i===cc||i===uc||i===hc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===jl)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ql)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ec)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===tc)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===nc)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ic)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===sc)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===rc)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ac)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===oc)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===lc)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===cc)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===uc)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===hc)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===dc||i===fc||i===pc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===dc)return a===xt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===fc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===pc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===mc||i===gc||i===to||i===xc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===mc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===gc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===to)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===xc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Jr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var cy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,uy=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,rh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new La(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Gn({vertexShader:cy,fragmentShader:uy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ot(new ni(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ah=class extends xi{constructor(e,t){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,h=null,f=null,g=null,x=typeof XRWebGLBinding<"u",m=new rh,p={},S=t.getContextAttributes(),I=null,M=null,b=[],w=[],T=new De,y=null,E=new sn;E.viewport=new Ut;let D=new sn;D.viewport=new Ut;let A=[E,D],U=new Il,H=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let he=b[j];return he===void 0&&(he=new Or,b[j]=he),he.getTargetRaySpace()},this.getControllerGrip=function(j){let he=b[j];return he===void 0&&(he=new Or,b[j]=he),he.getGripSpace()},this.getHand=function(j){let he=b[j];return he===void 0&&(he=new Or,b[j]=he),he.getHandSpace()};function z(j){let he=w.indexOf(j.inputSource);if(he===-1)return;let le=b[he];le!==void 0&&(le.update(j.inputSource,j.frame,c||a),le.dispatchEvent({type:j.type,data:j.inputSource}))}function F(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",F),s.removeEventListener("inputsourceschange",W);for(let j=0;j<b.length;j++){let he=w[j];he!==null&&(w[j]=null,b[j].disconnect(he))}H=null,V=null,m.reset();for(let j in p)delete p[j];e.setRenderTarget(I),f=null,h=null,d=null,s=null,M=null,Je.stop(),i.isPresenting=!1,e.setPixelRatio(y),e.setSize(T.width,T.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,i.isPresenting===!0&&Oe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,i.isPresenting===!0&&Oe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(I=e.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",F),s.addEventListener("inputsourceschange",W),S.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(T),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let le=null,Ge=null,We=null;S.depth&&(We=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,le=S.stencil?As:Fi,Ge=S.stencil?Jr:yi);let ke={colorFormat:t.RGBA8,depthFormat:We,scaleFactor:r};d=this.getBinding(),h=d.createProjectionLayer(ke),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),M=new Vn(h.textureWidth,h.textureHeight,{format:si,type:Rn,depthTexture:new ns(h.textureWidth,h.textureHeight,Ge,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{let le={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,le),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new Vn(f.framebufferWidth,f.framebufferHeight,{format:si,type:Rn,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Je.setContext(s),Je.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function W(j){for(let he=0;he<j.removed.length;he++){let le=j.removed[he],Ge=w.indexOf(le);Ge>=0&&(w[Ge]=null,b[Ge].disconnect(le))}for(let he=0;he<j.added.length;he++){let le=j.added[he],Ge=w.indexOf(le);if(Ge===-1){for(let ke=0;ke<b.length;ke++)if(ke>=w.length){w.push(le),Ge=ke;break}else if(w[ke]===null){w[ke]=le,Ge=ke;break}if(Ge===-1)break}let We=b[Ge];We&&We.connect(le)}}let ne=new L,ie=new L;function _e(j,he,le){ne.setFromMatrixPosition(he.matrixWorld),ie.setFromMatrixPosition(le.matrixWorld);let Ge=ne.distanceTo(ie),We=he.projectionMatrix.elements,ke=le.projectionMatrix.elements,It=We[14]/(We[10]-1),et=We[14]/(We[10]+1),bt=(We[9]+1)/We[5],lt=(We[9]-1)/We[5],it=(We[8]-1)/We[0],Pt=(ke[8]+1)/ke[0],kt=It*it,zt=It*Pt,Dt=Ge/(-it+Pt),_t=Dt*-it;if(he.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(_t),j.translateZ(Dt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),We[10]===-1)j.projectionMatrix.copy(he.projectionMatrix),j.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{let st=It+Dt,O=et+Dt,Zt=kt-_t,Te=zt+(Ge-_t),C=bt*et/O*st,_=lt*et/O*st;j.projectionMatrix.makePerspective(Zt,Te,C,_,st,O),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function ve(j,he){he===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(he.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let he=j.near,le=j.far;m.texture!==null&&(m.depthNear>0&&(he=m.depthNear),m.depthFar>0&&(le=m.depthFar)),U.near=D.near=E.near=he,U.far=D.far=E.far=le,(H!==U.near||V!==U.far)&&(s.updateRenderState({depthNear:U.near,depthFar:U.far}),H=U.near,V=U.far),U.layers.mask=j.layers.mask|6,E.layers.mask=U.layers.mask&-5,D.layers.mask=U.layers.mask&-3;let Ge=j.parent,We=U.cameras;ve(U,Ge);for(let ke=0;ke<We.length;ke++)ve(We[ke],Ge);We.length===2?_e(U,E,D):U.projectionMatrix.copy(E.projectionMatrix),Ee(j,U,Ge)};function Ee(j,he,le){le===null?j.matrix.copy(he.matrixWorld):(j.matrix.copy(le.matrixWorld),j.matrix.invert(),j.matrix.multiply(he.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(he.projectionMatrix),j.projectionMatrixInverse.copy(he.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Fr*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(j){l=j,h!==null&&(h.fixedFoveation=j),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=j)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(U)},this.getCameraTexture=function(j){return p[j]};let Ke=null;function wt(j,he){if(u=he.getViewerPose(c||a),g=he,u!==null){let le=u.views;f!==null&&(e.setRenderTargetFramebuffer(M,f.framebuffer),e.setRenderTarget(M));let Ge=!1;le.length!==U.cameras.length&&(U.cameras.length=0,Ge=!0);for(let et=0;et<le.length;et++){let bt=le[et],lt=null;if(f!==null)lt=f.getViewport(bt);else{let Pt=d.getViewSubImage(h,bt);lt=Pt.viewport,et===0&&(e.setRenderTargetTextures(M,Pt.colorTexture,Pt.depthStencilTexture),e.setRenderTarget(M))}let it=A[et];it===void 0&&(it=new sn,it.layers.enable(et),it.viewport=new Ut,A[et]=it),it.matrix.fromArray(bt.transform.matrix),it.matrix.decompose(it.position,it.quaternion,it.scale),it.projectionMatrix.fromArray(bt.projectionMatrix),it.projectionMatrixInverse.copy(it.projectionMatrix).invert(),it.viewport.set(lt.x,lt.y,lt.width,lt.height),et===0&&(U.matrix.copy(it.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),Ge===!0&&U.cameras.push(it)}let We=s.enabledFeatures;if(We&&We.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){d=i.getBinding();let et=d.getDepthInformation(le[0]);et&&et.isValid&&et.texture&&m.init(et,s.renderState)}if(We&&We.includes("camera-access")&&x){e.state.unbindTexture(),d=i.getBinding();for(let et=0;et<le.length;et++){let bt=le[et].camera;if(bt){let lt=p[bt];lt||(lt=new La,p[bt]=lt);let it=d.getCameraImage(bt);lt.sourceTexture=it}}}}for(let le=0;le<b.length;le++){let Ge=w[le],We=b[le];Ge!==null&&We!==void 0&&We.update(Ge,he,c||a)}Ke&&Ke(j,he),he.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:he}),g=null}let Je=new If;Je.setAnimationLoop(wt),this.setAnimationLoop=function(j){Ke=j},this.dispose=function(){}}},hy=new ft,Uf=new Ze;Uf.set(-1,0,0,0,1,0,0,0,1);function dy(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Gu(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,S,I,M){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),h(m,p),p.isMeshPhysicalMaterial&&f(m,p,M)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,S,I):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===an&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===an&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let S=e.get(p),I=S.envMap,M=S.envMapRotation;I&&(m.envMap.value=I,m.envMapRotation.value.setFromMatrix4(hy.makeRotationFromEuler(M)).transpose(),I.isCubeTexture&&I.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Uf),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,S,I){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=I*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===an&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let S=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function fy(n,e,t,i){let s={},r={},a=[],o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,b){let w=b.program;i.uniformBlockBinding(M,w)}function c(M,b){let w=s[M.id];w===void 0&&(m(M),w=u(M),s[M.id]=w,M.addEventListener("dispose",S));let T=b.program;i.updateUBOMapping(M,T);let y=e.render.frame;r[M.id]!==y&&(h(M),r[M.id]=y)}function u(M){let b=d();M.__bindingPointIndex=b;let w=n.createBuffer(),T=M.__size,y=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,w),n.bufferData(n.UNIFORM_BUFFER,T,y),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,w),w}function d(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return Ve("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(M){let b=s[M.id],w=M.uniforms,T=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let y=0,E=w.length;y<E;y++){let D=w[y];if(Array.isArray(D))for(let A=0,U=D.length;A<U;A++)f(D[A],y,A,T);else f(D,y,0,T)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(M,b,w,T){if(x(M,b,w,T)===!0){let y=M.__offset,E=M.value;if(Array.isArray(E)){let D=0;for(let A=0;A<E.length;A++){let U=E[A],H=p(U);g(U,M.__data,D),typeof U!="number"&&typeof U!="boolean"&&!U.isMatrix3&&!ArrayBuffer.isView(U)&&(D+=H.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(E,M.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,y,M.__data)}}function g(M,b,w){typeof M=="number"||typeof M=="boolean"?b[0]=M:M.isMatrix3?(b[0]=M.elements[0],b[1]=M.elements[1],b[2]=M.elements[2],b[3]=0,b[4]=M.elements[3],b[5]=M.elements[4],b[6]=M.elements[5],b[7]=0,b[8]=M.elements[6],b[9]=M.elements[7],b[10]=M.elements[8],b[11]=0):ArrayBuffer.isView(M)?b.set(new M.constructor(M.buffer,M.byteOffset,b.length)):M.toArray(b,w)}function x(M,b,w,T){let y=M.value,E=b+"_"+w;if(T[E]===void 0)return typeof y=="number"||typeof y=="boolean"?T[E]=y:ArrayBuffer.isView(y)?T[E]=y.slice():T[E]=y.clone(),!0;{let D=T[E];if(typeof y=="number"||typeof y=="boolean"){if(D!==y)return T[E]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(D.equals(y)===!1)return D.copy(y),!0}}return!1}function m(M){let b=M.uniforms,w=0,T=16;for(let E=0,D=b.length;E<D;E++){let A=Array.isArray(b[E])?b[E]:[b[E]];for(let U=0,H=A.length;U<H;U++){let V=A[U],z=Array.isArray(V.value)?V.value:[V.value];for(let F=0,W=z.length;F<W;F++){let ne=z[F],ie=p(ne),_e=w%T,ve=_e%ie.boundary,Ee=_e+ve;w+=ve,Ee!==0&&T-Ee<ie.storage&&(w+=T-Ee),V.__data=new Float32Array(ie.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=w,w+=ie.storage}}}let y=w%T;return y>0&&(w+=T-y),M.__size=w,M.__cache={},this}function p(M){let b={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(b.boundary=4,b.storage=4):M.isVector2?(b.boundary=8,b.storage=8):M.isVector3||M.isColor?(b.boundary=16,b.storage=12):M.isVector4?(b.boundary=16,b.storage=16):M.isMatrix3?(b.boundary=48,b.storage=48):M.isMatrix4?(b.boundary=64,b.storage=64):M.isTexture?Oe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(b.boundary=16,b.storage=M.byteLength):Oe("WebGLRenderer: Unsupported uniform value type.",M),b}function S(M){let b=M.target;b.removeEventListener("dispose",S);let w=a.indexOf(b.__bindingPointIndex);a.splice(w,1),n.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function I(){for(let M in s)n.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:l,update:c,dispose:I}}var py=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),zi=null;function my(){return zi===null&&(zi=new Pa(py,16,16,Ts,ki),zi.name="DFG_LUT",zi.minFilter=rn,zi.magFilter=rn,zi.wrapS=Ni,zi.wrapT=Ni,zi.generateMipmaps=!1,zi.needsUpdate=!0),zi}var Sc=class{constructor(e={}){let{canvas:t=Qd(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:f=Rn}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;let x=f,m=new Set([Vl,zl,kl]),p=new Set([Rn,yi,Kr,Jr,Ul,Bl]),S=new Uint32Array(4),I=new Int32Array(4),M=new L,b=null,w=null,T=[],y=[],E=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=_i,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let D=this,A=!1,U=null,H=null,V=null,z=null;this._outputColorSpace=jt;let F=0,W=0,ne=null,ie=-1,_e=null,ve=new Ut,Ee=new Ut,Ke=null,wt=new $e(0),Je=0,j=t.width,he=t.height,le=1,Ge=null,We=null,ke=new Ut(0,0,j,he),It=new Ut(0,0,j,he),et=!1,bt=new Gr,lt=!1,it=!1,Pt=new ft,kt=new L,zt=new Ut,Dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},_t=!1;function st(){return ne===null?le:1}let O=i;function Zt(v,k){return t.getContext(v,k)}try{let v={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"185"}`),t.addEventListener("webglcontextlost",Et,!1),t.addEventListener("webglcontextrestored",pt,!1),t.addEventListener("webglcontextcreationerror",An,!1),O===null){let k="webgl2";if(O=Zt(k,v),O===null)throw Zt(k)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(v){throw Ve("WebGLRenderer: "+v.message),v}let Te,C,_,$,Y,J,ue,fe,Q,te,pe,Ne,be,ge,Be,ze,Xe,N,de,ee,xe,Me,se;function Pe(){Te=new Mx(O),Te.init(),xe=new ly(O,Te),C=new px(O,Te,e,xe),_=new ay(O,Te),C.reversedDepthBuffer&&h&&_.buffers.depth.setReversed(!0),H=O.createFramebuffer(),V=O.createFramebuffer(),z=O.createFramebuffer(),$=new Ex(O),Y=new X_,J=new oy(O,Te,_,Y,C,xe,$),ue=new bx(D),fe=new R0(O),Me=new dx(O,fe),Q=new Sx(O,fe,$,Me),te=new Tx(O,Q,fe,Me,$),N=new Ax(O,C,J),Be=new mx(Y),pe=new $_(D,ue,Te,C,Me,Be),Ne=new dy(D,Y),be=new Y_,ge=new ey(Te),Xe=new hx(D,ue,_,te,g,l),ze=new ry(D,te,C),se=new fy(O,$,C,_),de=new fx(O,Te,$),ee=new wx(O,Te,$),$.programs=pe.programs,D.capabilities=C,D.extensions=Te,D.properties=Y,D.renderLists=be,D.shadowMap=ze,D.state=_,D.info=$}Pe(),x!==Rn&&(E=new Rx(x,t.width,t.height,o,s,r));let Ce=new ah(D,O);this.xr=Ce,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let v=Te.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){let v=Te.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return le},this.setPixelRatio=function(v){v!==void 0&&(le=v,this.setSize(j,he,!1))},this.getSize=function(v){return v.set(j,he)},this.setSize=function(v,k,Z=!0){if(Ce.isPresenting){Oe("WebGLRenderer: Can't change size while VR device is presenting.");return}j=v,he=k,t.width=Math.floor(v*le),t.height=Math.floor(k*le),Z===!0&&(t.style.width=v+"px",t.style.height=k+"px"),E!==null&&E.setSize(t.width,t.height),this.setViewport(0,0,v,k)},this.getDrawingBufferSize=function(v){return v.set(j*le,he*le).floor()},this.setDrawingBufferSize=function(v,k,Z){j=v,he=k,le=Z,t.width=Math.floor(v*Z),t.height=Math.floor(k*Z),this.setViewport(0,0,v,k)},this.setEffects=function(v){if(x===Rn){Ve("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let k=0;k<v.length;k++)if(v[k].isOutputPass===!0){Oe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(ve)},this.getViewport=function(v){return v.copy(ke)},this.setViewport=function(v,k,Z,X){v.isVector4?ke.set(v.x,v.y,v.z,v.w):ke.set(v,k,Z,X),_.viewport(ve.copy(ke).multiplyScalar(le).round())},this.getScissor=function(v){return v.copy(It)},this.setScissor=function(v,k,Z,X){v.isVector4?It.set(v.x,v.y,v.z,v.w):It.set(v,k,Z,X),_.scissor(Ee.copy(It).multiplyScalar(le).round())},this.getScissorTest=function(){return et},this.setScissorTest=function(v){_.setScissorTest(et=v)},this.setOpaqueSort=function(v){Ge=v},this.setTransparentSort=function(v){We=v},this.getClearColor=function(v){return v.copy(Xe.getClearColor())},this.setClearColor=function(){Xe.setClearColor(...arguments)},this.getClearAlpha=function(){return Xe.getClearAlpha()},this.setClearAlpha=function(){Xe.setClearAlpha(...arguments)},this.clear=function(v=!0,k=!0,Z=!0){let X=0;if(v){let q=!1;if(ne!==null){let Se=ne.texture.format;q=m.has(Se)}if(q){let Se=ne.texture.type,Ae=p.has(Se),ye=Xe.getClearColor(),Re=Xe.getClearAlpha(),Ie=ye.r,Ye=ye.g,qe=ye.b;Ae?(S[0]=Ie,S[1]=Ye,S[2]=qe,S[3]=Re,O.clearBufferuiv(O.COLOR,0,S)):(I[0]=Ie,I[1]=Ye,I[2]=qe,I[3]=Re,O.clearBufferiv(O.COLOR,0,I))}else X|=O.COLOR_BUFFER_BIT}k&&(X|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Z&&(X|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X!==0&&O.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(v){v.setRenderer(this),U=v},this.dispose=function(){t.removeEventListener("webglcontextlost",Et,!1),t.removeEventListener("webglcontextrestored",pt,!1),t.removeEventListener("webglcontextcreationerror",An,!1),Xe.dispose(),be.dispose(),ge.dispose(),Y.dispose(),ue.dispose(),te.dispose(),Me.dispose(),se.dispose(),pe.dispose(),Ce.dispose(),Ce.removeEventListener("sessionstart",ca),Ce.removeEventListener("sessionend",un),Ci.stop()};function Et(v){v.preventDefault(),Ea("WebGLRenderer: Context Lost."),A=!0}function pt(){Ea("WebGLRenderer: Context Restored."),A=!1;let v=$.autoReset,k=ze.enabled,Z=ze.autoUpdate,X=ze.needsUpdate,q=ze.type;Pe(),$.autoReset=v,ze.enabled=k,ze.autoUpdate=Z,ze.needsUpdate=X,ze.type=q}function An(v){Ve("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function cn(v){let k=v.target;k.removeEventListener("dispose",cn),or(k)}function or(v){po(v),Y.remove(v)}function po(v){let k=Y.get(v).programs;k!==void 0&&(k.forEach(function(Z){pe.releaseProgram(Z)}),v.isShaderMaterial&&pe.releaseShaderCache(v))}this.renderBufferDirect=function(v,k,Z,X,q,Se){k===null&&(k=Dt);let Ae=q.isMesh&&q.matrixWorld.determinantAffine()<0,ye=Hi(v,k,Z,X,q);_.setMaterial(X,Ae);let Re=Z.index,Ie=1;if(X.wireframe===!0){if(Re=Q.getWireframeAttribute(Z),Re===void 0)return;Ie=2}let Ye=Z.drawRange,qe=Z.attributes.position,Fe=Ye.start*Ie,mt=(Ye.start+Ye.count)*Ie;Se!==null&&(Fe=Math.max(Fe,Se.start*Ie),mt=Math.min(mt,(Se.start+Se.count)*Ie)),Re!==null?(Fe=Math.max(Fe,0),mt=Math.min(mt,Re.count)):qe!=null&&(Fe=Math.max(Fe,0),mt=Math.min(mt,qe.count));let At=mt-Fe;if(At<0||At===1/0)return;Me.setup(q,X,ye,Z,Re);let Lt,yt=de;if(Re!==null&&(Lt=fe.get(Re),yt=ee,yt.setIndex(Lt)),q.isMesh)X.wireframe===!0?(_.setLineWidth(X.wireframeLinewidth*st()),yt.setMode(O.LINES)):yt.setMode(O.TRIANGLES);else if(q.isLine){let Kt=X.linewidth;Kt===void 0&&(Kt=1),_.setLineWidth(Kt*st()),q.isLineSegments?yt.setMode(O.LINES):q.isLineLoop?yt.setMode(O.LINE_LOOP):yt.setMode(O.LINE_STRIP)}else q.isPoints?yt.setMode(O.POINTS):q.isSprite&&yt.setMode(O.TRIANGLES);if(q.isBatchedMesh)if(Te.get("WEBGL_multi_draw"))yt.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{let Kt=q._multiDrawStarts,me=q._multiDrawCounts,nn=q._multiDrawCount,rt=Re?fe.get(Re).bytesPerElement:1,Tn=Y.get(X).currentProgram.getUniforms();for(let Yn=0;Yn<nn;Yn++)Tn.setValue(O,"_gl_DrawID",Yn),yt.render(Kt[Yn]/rt,me[Yn])}else if(q.isInstancedMesh)yt.renderInstances(Fe,At,q.count);else if(Z.isInstancedBufferGeometry){let Kt=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,me=Math.min(Z.instanceCount,Kt);yt.renderInstances(Fe,At,me)}else yt.render(Fe,At)};function os(v,k,Z){v.transparent===!0&&v.side===Cn&&v.forceSinglePass===!1?(v.side=an,v.needsUpdate=!0,Ri(v,k,Z),v.side=Qi,v.needsUpdate=!0,Ri(v,k,Z),v.side=Cn):Ri(v,k,Z)}this.compile=function(v,k,Z=null){Z===null&&(Z=v),w=ge.get(Z),w.init(k),y.push(w),Z.traverseVisible(function(q){q.isLight&&q.layers.test(k.layers)&&(w.pushLight(q),q.castShadow&&w.pushShadow(q))}),v!==Z&&v.traverseVisible(function(q){q.isLight&&q.layers.test(k.layers)&&(w.pushLight(q),q.castShadow&&w.pushShadow(q))}),w.setupLights();let X=new Set;return v.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;let Se=q.material;if(Se)if(Array.isArray(Se))for(let Ae=0;Ae<Se.length;Ae++){let ye=Se[Ae];os(ye,Z,q),X.add(ye)}else os(Se,Z,q),X.add(Se)}),w=y.pop(),X},this.compileAsync=function(v,k,Z=null){let X=this.compile(v,k,Z);return new Promise(q=>{function Se(){if(X.forEach(function(Ae){Y.get(Ae).currentProgram.isReady()&&X.delete(Ae)}),X.size===0){q(v);return}setTimeout(Se,10)}Te.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let li=null;function Ti(v){li&&li(v)}function ca(){Ci.stop()}function un(){Ci.start()}let Ci=new If;Ci.setAnimationLoop(Ti),typeof self<"u"&&Ci.setContext(self),this.setAnimationLoop=function(v){li=v,Ce.setAnimationLoop(v),v===null?Ci.stop():Ci.start()},Ce.addEventListener("sessionstart",ca),Ce.addEventListener("sessionend",un),this.render=function(v,k){if(k!==void 0&&k.isCamera!==!0){Ve("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;U!==null&&U.renderStart(v,k);let Z=Ce.enabled===!0&&Ce.isPresenting===!0,X=E!==null&&(ne===null||Z)&&E.begin(D,ne);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),Ce.enabled===!0&&Ce.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(Ce.cameraAutoUpdate===!0&&Ce.updateCamera(k),k=Ce.getCamera()),v.isScene===!0&&v.onBeforeRender(D,v,k,ne),w=ge.get(v,y.length),w.init(k),w.state.textureUnits=J.getTextureUnits(),y.push(w),Pt.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),bt.setFromProjectionMatrix(Pt,gi,k.reversedDepth),it=this.localClippingEnabled,lt=Be.init(this.clippingPlanes,it),b=be.get(v,T.length),b.init(),T.push(b),Ce.enabled===!0&&Ce.isPresenting===!0){let Ae=D.xr.getDepthSensingMesh();Ae!==null&&Un(Ae,k,-1/0,D.sortObjects)}Un(v,k,0,D.sortObjects),b.finish(),D.sortObjects===!0&&b.sort(Ge,We,k.reversedDepth),_t=Ce.enabled===!1||Ce.isPresenting===!1||Ce.hasDepthSensing()===!1,_t&&Xe.addToRenderList(b,v),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),lt===!0&&Be.beginShadows();let q=w.state.shadowsArray;if(ze.render(q,v,k),lt===!0&&Be.endShadows(),(X&&E.hasRenderPass())===!1){let Ae=b.opaque,ye=b.transmissive;if(w.setupLights(),k.isArrayCamera){let Re=k.cameras;if(ye.length>0)for(let Ie=0,Ye=Re.length;Ie<Ye;Ie++){let qe=Re[Ie];cr(Ae,ye,v,qe)}_t&&Xe.render(v);for(let Ie=0,Ye=Re.length;Ie<Ye;Ie++){let qe=Re[Ie];lr(b,v,qe,qe.viewport)}}else ye.length>0&&cr(Ae,ye,v,k),_t&&Xe.render(v),lr(b,v,k)}ne!==null&&W===0&&(J.updateMultisampleRenderTarget(ne),J.updateRenderTargetMipmap(ne)),X&&E.end(D),v.isScene===!0&&v.onAfterRender(D,v,k),Me.resetDefaultState(),ie=-1,_e=null,y.pop(),y.length>0?(w=y[y.length-1],J.setTextureUnits(w.state.textureUnits),lt===!0&&Be.setGlobalState(D.clippingPlanes,w.state.camera)):w=null,T.pop(),T.length>0?b=T[T.length-1]:b=null,U!==null&&U.renderEnd()};function Un(v,k,Z,X){if(v.visible===!1)return;if(v.layers.test(k.layers)){if(v.isGroup)Z=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(k);else if(v.isLightProbeGrid)w.pushLightProbeGrid(v);else if(v.isLight)w.pushLight(v),v.castShadow&&w.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||bt.intersectsSprite(v)){X&&zt.setFromMatrixPosition(v.matrixWorld).applyMatrix4(Pt);let Ae=te.update(v),ye=v.material;ye.visible&&b.push(v,Ae,ye,Z,zt.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||bt.intersectsObject(v))){let Ae=te.update(v),ye=v.material;if(X&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),zt.copy(v.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),zt.copy(Ae.boundingSphere.center)),zt.applyMatrix4(v.matrixWorld).applyMatrix4(Pt)),Array.isArray(ye)){let Re=Ae.groups;for(let Ie=0,Ye=Re.length;Ie<Ye;Ie++){let qe=Re[Ie],Fe=ye[qe.materialIndex];Fe&&Fe.visible&&b.push(v,Ae,Fe,Z,zt.z,qe)}}else ye.visible&&b.push(v,Ae,ye,Z,zt.z,null)}}let Se=v.children;for(let Ae=0,ye=Se.length;Ae<ye;Ae++)Un(Se[Ae],k,Z,X)}function lr(v,k,Z,X){let{opaque:q,transmissive:Se,transparent:Ae}=v;w.setupLightsView(Z),lt===!0&&Be.setGlobalState(D.clippingPlanes,Z),X&&_.viewport(ve.copy(X)),q.length>0&&ur(q,k,Z),Se.length>0&&ur(Se,k,Z),Ae.length>0&&ur(Ae,k,Z),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function cr(v,k,Z,X){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[X.id]===void 0){let Fe=Te.has("EXT_color_buffer_half_float")||Te.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[X.id]=new Vn(1,1,{generateMipmaps:!0,type:Fe?ki:Rn,minFilter:Es,samples:Math.max(4,C.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:at.workingColorSpace})}let Se=w.state.transmissionRenderTarget[X.id],Ae=X.viewport||ve;Se.setSize(Ae.z*D.transmissionResolutionScale,Ae.w*D.transmissionResolutionScale);let ye=D.getRenderTarget(),Re=D.getActiveCubeFace(),Ie=D.getActiveMipmapLevel();D.setRenderTarget(Se),D.getClearColor(wt),Je=D.getClearAlpha(),Je<1&&D.setClearColor(16777215,.5),D.clear(),_t&&Xe.render(Z);let Ye=D.toneMapping;D.toneMapping=_i;let qe=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),w.setupLightsView(X),lt===!0&&Be.setGlobalState(D.clippingPlanes,X),ur(v,Z,X),J.updateMultisampleRenderTarget(Se),J.updateRenderTargetMipmap(Se),Te.has("WEBGL_multisampled_render_to_texture")===!1){let Fe=!1;for(let mt=0,At=k.length;mt<At;mt++){let Lt=k[mt],{object:yt,geometry:Kt,material:me,group:nn}=Lt;if(me.side===Cn&&yt.layers.test(X.layers)){let rt=me.side;me.side=an,me.needsUpdate=!0,ls(yt,Z,X,Kt,me,nn),me.side=rt,me.needsUpdate=!0,Fe=!0}}Fe===!0&&(J.updateMultisampleRenderTarget(Se),J.updateRenderTargetMipmap(Se))}D.setRenderTarget(ye,Re,Ie),D.setClearColor(wt,Je),qe!==void 0&&(X.viewport=qe),D.toneMapping=Ye}function ur(v,k,Z){let X=k.isScene===!0?k.overrideMaterial:null;for(let q=0,Se=v.length;q<Se;q++){let Ae=v[q],{object:ye,geometry:Re,group:Ie}=Ae,Ye=Ae.material;Ye.allowOverride===!0&&X!==null&&(Ye=X),ye.layers.test(Z.layers)&&ls(ye,k,Z,Re,Ye,Ie)}}function ls(v,k,Z,X,q,Se){v.onBeforeRender(D,k,Z,X,q,Se),v.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),q.onBeforeRender(D,k,Z,X,v,Se),q.transparent===!0&&q.side===Cn&&q.forceSinglePass===!1?(q.side=an,q.needsUpdate=!0,D.renderBufferDirect(Z,k,X,q,v,Se),q.side=Qi,q.needsUpdate=!0,D.renderBufferDirect(Z,k,X,q,v,Se),q.side=Cn):D.renderBufferDirect(Z,k,X,q,v,Se),v.onAfterRender(D,k,Z,X,q,Se)}function Ri(v,k,Z){k.isScene!==!0&&(k=Dt);let X=Y.get(v),q=w.state.lights,Se=w.state.shadowsArray,Ae=q.state.version,ye=pe.getParameters(v,q.state,Se,k,Z,w.state.lightProbeGridArray),Re=pe.getProgramCacheKey(ye),Ie=X.programs;X.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?k.environment:null,X.fog=k.fog;let Ye=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;X.envMap=ue.get(v.envMap||X.environment,Ye),X.envMapRotation=X.environment!==null&&v.envMap===null?k.environmentRotation:v.envMapRotation,Ie===void 0&&(v.addEventListener("dispose",cn),Ie=new Map,X.programs=Ie);let qe=Ie.get(Re);if(qe!==void 0){if(X.currentProgram===qe&&X.lightsStateVersion===Ae)return mo(v,ye),qe}else ye.uniforms=pe.getUniforms(v),U!==null&&v.isNodeMaterial&&U.build(v,Z,ye),v.onBeforeCompile(ye,D),qe=pe.acquireProgram(ye,Re),Ie.set(Re,qe),X.uniforms=ye.uniforms;let Fe=X.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Fe.clippingPlanes=Be.uniform),mo(v,ye),X.needsLights=Us(v),X.lightsStateVersion=Ae,X.needsLights&&(Fe.ambientLightColor.value=q.state.ambient,Fe.lightProbe.value=q.state.probe,Fe.directionalLights.value=q.state.directional,Fe.directionalLightShadows.value=q.state.directionalShadow,Fe.spotLights.value=q.state.spot,Fe.spotLightShadows.value=q.state.spotShadow,Fe.rectAreaLights.value=q.state.rectArea,Fe.ltc_1.value=q.state.rectAreaLTC1,Fe.ltc_2.value=q.state.rectAreaLTC2,Fe.pointLights.value=q.state.point,Fe.pointLightShadows.value=q.state.pointShadow,Fe.hemisphereLights.value=q.state.hemi,Fe.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Fe.spotLightMatrix.value=q.state.spotLightMatrix,Fe.spotLightMap.value=q.state.spotLightMap,Fe.pointShadowMatrix.value=q.state.pointShadowMatrix),X.lightProbeGrid=w.state.lightProbeGridArray.length>0,X.currentProgram=qe,X.uniformsList=null,qe}function Gi(v){if(v.uniformsList===null){let k=v.currentProgram.getUniforms();v.uniformsList=ea.seqWithValue(k.seq,v.uniforms)}return v.uniformsList}function mo(v,k){let Z=Y.get(v);Z.outputColorSpace=k.outputColorSpace,Z.batching=k.batching,Z.batchingColor=k.batchingColor,Z.instancing=k.instancing,Z.instancingColor=k.instancingColor,Z.instancingMorph=k.instancingMorph,Z.skinning=k.skinning,Z.morphTargets=k.morphTargets,Z.morphNormals=k.morphNormals,Z.morphColors=k.morphColors,Z.morphTargetsCount=k.morphTargetsCount,Z.numClippingPlanes=k.numClippingPlanes,Z.numIntersection=k.numClipIntersection,Z.vertexAlphas=k.vertexAlphas,Z.vertexTangents=k.vertexTangents,Z.toneMapping=k.toneMapping}function ci(v,k){if(v.length===0)return null;if(v.length===1)return v[0].texture!==null?v[0]:null;M.setFromMatrixPosition(k.matrixWorld);for(let Z=0,X=v.length;Z<X;Z++){let q=v[Z];if(q.texture!==null&&q.boundingBox.containsPoint(M))return q}return null}function Hi(v,k,Z,X,q){k.isScene!==!0&&(k=Dt),J.resetTextureUnits();let Se=k.fog,Ae=X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial?k.environment:null,ye=ne===null?D.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:at.workingColorSpace,Re=X.isMeshStandardMaterial||X.isMeshLambertMaterial&&!X.envMap||X.isMeshPhongMaterial&&!X.envMap,Ie=ue.get(X.envMap||Ae,Re),Ye=X.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,qe=!!Z.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Fe=!!Z.morphAttributes.position,mt=!!Z.morphAttributes.normal,At=!!Z.morphAttributes.color,Lt=_i;X.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(Lt=D.toneMapping);let yt=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Kt=yt!==void 0?yt.length:0,me=Y.get(X),nn=w.state.lights;if(lt===!0&&(it===!0||v!==_e)){let dt=v===_e&&X.id===ie;Be.setState(X,v,dt)}let rt=!1;X.version===me.__version?(me.needsLights&&me.lightsStateVersion!==nn.state.version||me.outputColorSpace!==ye||q.isBatchedMesh&&me.batching===!1||!q.isBatchedMesh&&me.batching===!0||q.isBatchedMesh&&me.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&me.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&me.instancing===!1||!q.isInstancedMesh&&me.instancing===!0||q.isSkinnedMesh&&me.skinning===!1||!q.isSkinnedMesh&&me.skinning===!0||q.isInstancedMesh&&me.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&me.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&me.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&me.instancingMorph===!1&&q.morphTexture!==null||me.envMap!==Ie||X.fog===!0&&me.fog!==Se||me.numClippingPlanes!==void 0&&(me.numClippingPlanes!==Be.numPlanes||me.numIntersection!==Be.numIntersection)||me.vertexAlphas!==Ye||me.vertexTangents!==qe||me.morphTargets!==Fe||me.morphNormals!==mt||me.morphColors!==At||me.toneMapping!==Lt||me.morphTargetsCount!==Kt||!!me.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(rt=!0):(rt=!0,me.__version=X.version);let Tn=me.currentProgram;rt===!0&&(Tn=Ri(X,k,q),U&&X.isNodeMaterial&&U.onUpdateProgram(X,Tn,me));let Yn=!1,ui=!1,Ii=!1,gt=Tn.getUniforms(),Nt=me.uniforms;if(_.useProgram(Tn.program)&&(Yn=!0,ui=!0,Ii=!0),X.id!==ie&&(ie=X.id,ui=!0),me.needsLights){let dt=ci(w.state.lightProbeGridArray,q);me.lightProbeGrid!==dt&&(me.lightProbeGrid=dt,ui=!0)}if(Yn||_e!==v){_.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),gt.setValue(O,"projectionMatrix",v.projectionMatrix),gt.setValue(O,"viewMatrix",v.matrixWorldInverse);let hi=gt.map.cameraPosition;hi!==void 0&&hi.setValue(O,kt.setFromMatrixPosition(v.matrixWorld)),C.logarithmicDepthBuffer&&gt.setValue(O,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&gt.setValue(O,"isOrthographic",v.isOrthographicCamera===!0),_e!==v&&(_e=v,ui=!0,Ii=!0)}if(me.needsLights&&(nn.state.directionalShadowMap.length>0&&gt.setValue(O,"directionalShadowMap",nn.state.directionalShadowMap,J),nn.state.spotShadowMap.length>0&&gt.setValue(O,"spotShadowMap",nn.state.spotShadowMap,J),nn.state.pointShadowMap.length>0&&gt.setValue(O,"pointShadowMap",nn.state.pointShadowMap,J)),q.isSkinnedMesh){gt.setOptional(O,q,"bindMatrix"),gt.setOptional(O,q,"bindMatrixInverse");let dt=q.skeleton;dt&&(dt.boneTexture===null&&dt.computeBoneTexture(),gt.setValue(O,"boneTexture",dt.boneTexture,J))}q.isBatchedMesh&&(gt.setOptional(O,q,"batchingTexture"),gt.setValue(O,"batchingTexture",q._matricesTexture,J),gt.setOptional(O,q,"batchingIdTexture"),gt.setValue(O,"batchingIdTexture",q._indirectTexture,J),gt.setOptional(O,q,"batchingColorTexture"),q._colorsTexture!==null&&gt.setValue(O,"batchingColorTexture",q._colorsTexture,J));let Bn=Z.morphAttributes;if((Bn.position!==void 0||Bn.normal!==void 0||Bn.color!==void 0)&&N.update(q,Z,Tn),(ui||me.receiveShadow!==q.receiveShadow)&&(me.receiveShadow=q.receiveShadow,gt.setValue(O,"receiveShadow",q.receiveShadow)),(X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial)&&X.envMap===null&&k.environment!==null&&(Nt.envMapIntensity.value=k.environmentIntensity),Nt.dfgLUT!==void 0&&(Nt.dfgLUT.value=my()),ui){if(gt.setValue(O,"toneMappingExposure",D.toneMappingExposure),me.needsLights&&Fs(Nt,Ii),Se&&X.fog===!0&&Ne.refreshFogUniforms(Nt,Se),Ne.refreshMaterialUniforms(Nt,X,le,he,w.state.transmissionRenderTarget[v.id]),me.needsLights&&me.lightProbeGrid){let dt=me.lightProbeGrid;Nt.probesSH.value=dt.texture,Nt.probesMin.value.copy(dt.boundingBox.min),Nt.probesMax.value.copy(dt.boundingBox.max),Nt.probesResolution.value.copy(dt.resolution)}ea.upload(O,Gi(me),Nt,J)}if(X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(ea.upload(O,Gi(me),Nt,J),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&gt.setValue(O,"center",q.center),gt.setValue(O,"modelViewMatrix",q.modelViewMatrix),gt.setValue(O,"normalMatrix",q.normalMatrix),gt.setValue(O,"modelMatrix",q.matrixWorld),X.uniformsGroups!==void 0){let dt=X.uniformsGroups;for(let hi=0,Zn=dt.length;hi<Zn;hi++){let Bs=dt[hi];se.update(Bs,Tn),se.bind(Bs,Tn)}}return Tn}function Fs(v,k){v.ambientLightColor.needsUpdate=k,v.lightProbe.needsUpdate=k,v.directionalLights.needsUpdate=k,v.directionalLightShadows.needsUpdate=k,v.pointLights.needsUpdate=k,v.pointLightShadows.needsUpdate=k,v.spotLights.needsUpdate=k,v.spotLightShadows.needsUpdate=k,v.rectAreaLights.needsUpdate=k,v.hemisphereLights.needsUpdate=k}function Us(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return ne},this.setRenderTargetTextures=function(v,k,Z){let X=Y.get(v);X.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),Y.get(v.texture).__webglTexture=k,Y.get(v.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:Z,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,k){let Z=Y.get(v);Z.__webglFramebuffer=k,Z.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(v,k=0,Z=0){ne=v,F=k,W=Z;let X=null,q=!1,Se=!1;if(v){let ye=Y.get(v);if(ye.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(O.FRAMEBUFFER,ye.__webglFramebuffer),ve.copy(v.viewport),Ee.copy(v.scissor),Ke=v.scissorTest,_.viewport(ve),_.scissor(Ee),_.setScissorTest(Ke),ie=-1;return}else if(ye.__webglFramebuffer===void 0)J.setupRenderTarget(v);else if(ye.__hasExternalTextures)J.rebindTextures(v,Y.get(v.texture).__webglTexture,Y.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let Ye=v.depthTexture;if(ye.__boundDepthTexture!==Ye){if(Ye!==null&&Y.has(Ye)&&(v.width!==Ye.image.width||v.height!==Ye.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");J.setupDepthRenderbuffer(v)}}let Re=v.texture;(Re.isData3DTexture||Re.isDataArrayTexture||Re.isCompressedArrayTexture)&&(Se=!0);let Ie=Y.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Ie[k])?X=Ie[k][Z]:X=Ie[k],q=!0):v.samples>0&&J.useMultisampledRTT(v)===!1?X=Y.get(v).__webglMultisampledFramebuffer:Array.isArray(Ie)?X=Ie[Z]:X=Ie,ve.copy(v.viewport),Ee.copy(v.scissor),Ke=v.scissorTest}else ve.copy(ke).multiplyScalar(le).floor(),Ee.copy(It).multiplyScalar(le).floor(),Ke=et;if(Z!==0&&(X=H),_.bindFramebuffer(O.FRAMEBUFFER,X)&&_.drawBuffers(v,X),_.viewport(ve),_.scissor(Ee),_.setScissorTest(Ke),q){let ye=Y.get(v.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+k,ye.__webglTexture,Z)}else if(Se){let ye=k;for(let Re=0;Re<v.textures.length;Re++){let Ie=Y.get(v.textures[Re]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+Re,Ie.__webglTexture,Z,ye)}}else if(v!==null&&Z!==0){let ye=Y.get(v.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,ye.__webglTexture,Z)}ie=-1},this.readRenderTargetPixels=function(v,k,Z,X,q,Se,Ae,ye=0){if(!(v&&v.isWebGLRenderTarget)){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=Y.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&Ae!==void 0&&(Re=Re[Ae]),Re){_.bindFramebuffer(O.FRAMEBUFFER,Re);try{let Ie=v.textures[ye],Ye=Ie.format,qe=Ie.type;if(v.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+ye),!C.textureFormatReadable(Ye)){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!C.textureTypeReadable(qe)){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=v.width-X&&Z>=0&&Z<=v.height-q&&O.readPixels(k,Z,X,q,xe.convert(Ye),xe.convert(qe),Se)}finally{let Ie=ne!==null?Y.get(ne).__webglFramebuffer:null;_.bindFramebuffer(O.FRAMEBUFFER,Ie)}}},this.readRenderTargetPixelsAsync=async function(v,k,Z,X,q,Se,Ae,ye=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Re=Y.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&Ae!==void 0&&(Re=Re[Ae]),Re)if(k>=0&&k<=v.width-X&&Z>=0&&Z<=v.height-q){_.bindFramebuffer(O.FRAMEBUFFER,Re);let Ie=v.textures[ye],Ye=Ie.format,qe=Ie.type;if(v.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+ye),!C.textureFormatReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!C.textureTypeReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Fe=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Fe),O.bufferData(O.PIXEL_PACK_BUFFER,Se.byteLength,O.STREAM_READ),O.readPixels(k,Z,X,q,xe.convert(Ye),xe.convert(qe),0);let mt=ne!==null?Y.get(ne).__webglFramebuffer:null;_.bindFramebuffer(O.FRAMEBUFFER,mt);let At=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await tf(O,At,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Fe),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,Se),O.deleteBuffer(Fe),O.deleteSync(At),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,k=null,Z=0){let X=Math.pow(2,-Z),q=Math.floor(v.image.width*X),Se=Math.floor(v.image.height*X),Ae=k!==null?k.x:0,ye=k!==null?k.y:0;J.setTexture2D(v,0),O.copyTexSubImage2D(O.TEXTURE_2D,Z,0,0,Ae,ye,q,Se),_.unbindTexture()},this.copyTextureToTexture=function(v,k,Z=null,X=null,q=0,Se=0){let Ae,ye,Re,Ie,Ye,qe,Fe,mt,At,Lt=v.isCompressedTexture?v.mipmaps[Se]:v.image;if(Z!==null)Ae=Z.max.x-Z.min.x,ye=Z.max.y-Z.min.y,Re=Z.isBox3?Z.max.z-Z.min.z:1,Ie=Z.min.x,Ye=Z.min.y,qe=Z.isBox3?Z.min.z:0;else{let Nt=Math.pow(2,-q);Ae=Math.floor(Lt.width*Nt),ye=Math.floor(Lt.height*Nt),v.isDataArrayTexture?Re=Lt.depth:v.isData3DTexture?Re=Math.floor(Lt.depth*Nt):Re=1,Ie=0,Ye=0,qe=0}X!==null?(Fe=X.x,mt=X.y,At=X.z):(Fe=0,mt=0,At=0);let yt=xe.convert(k.format),Kt=xe.convert(k.type),me;k.isData3DTexture?(J.setTexture3D(k,0),me=O.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(J.setTexture2DArray(k,0),me=O.TEXTURE_2D_ARRAY):(J.setTexture2D(k,0),me=O.TEXTURE_2D),_.activeTexture(O.TEXTURE0),_.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,k.flipY),_.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),_.pixelStorei(O.UNPACK_ALIGNMENT,k.unpackAlignment);let nn=_.getParameter(O.UNPACK_ROW_LENGTH),rt=_.getParameter(O.UNPACK_IMAGE_HEIGHT),Tn=_.getParameter(O.UNPACK_SKIP_PIXELS),Yn=_.getParameter(O.UNPACK_SKIP_ROWS),ui=_.getParameter(O.UNPACK_SKIP_IMAGES);_.pixelStorei(O.UNPACK_ROW_LENGTH,Lt.width),_.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Lt.height),_.pixelStorei(O.UNPACK_SKIP_PIXELS,Ie),_.pixelStorei(O.UNPACK_SKIP_ROWS,Ye),_.pixelStorei(O.UNPACK_SKIP_IMAGES,qe);let Ii=v.isDataArrayTexture||v.isData3DTexture,gt=k.isDataArrayTexture||k.isData3DTexture;if(v.isDepthTexture){let Nt=Y.get(v),Bn=Y.get(k),dt=Y.get(Nt.__renderTarget),hi=Y.get(Bn.__renderTarget);_.bindFramebuffer(O.READ_FRAMEBUFFER,dt.__webglFramebuffer),_.bindFramebuffer(O.DRAW_FRAMEBUFFER,hi.__webglFramebuffer);for(let Zn=0;Zn<Re;Zn++)Ii&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Y.get(v).__webglTexture,q,qe+Zn),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Y.get(k).__webglTexture,Se,At+Zn)),O.blitFramebuffer(Ie,Ye,Ae,ye,Fe,mt,Ae,ye,O.DEPTH_BUFFER_BIT,O.NEAREST);_.bindFramebuffer(O.READ_FRAMEBUFFER,null),_.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(q!==0||v.isRenderTargetTexture||Y.has(v)){let Nt=Y.get(v),Bn=Y.get(k);_.bindFramebuffer(O.READ_FRAMEBUFFER,V),_.bindFramebuffer(O.DRAW_FRAMEBUFFER,z);for(let dt=0;dt<Re;dt++)Ii?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Nt.__webglTexture,q,qe+dt):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Nt.__webglTexture,q),gt?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Bn.__webglTexture,Se,At+dt):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Bn.__webglTexture,Se),q!==0?O.blitFramebuffer(Ie,Ye,Ae,ye,Fe,mt,Ae,ye,O.COLOR_BUFFER_BIT,O.NEAREST):gt?O.copyTexSubImage3D(me,Se,Fe,mt,At+dt,Ie,Ye,Ae,ye):O.copyTexSubImage2D(me,Se,Fe,mt,Ie,Ye,Ae,ye);_.bindFramebuffer(O.READ_FRAMEBUFFER,null),_.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else gt?v.isDataTexture||v.isData3DTexture?O.texSubImage3D(me,Se,Fe,mt,At,Ae,ye,Re,yt,Kt,Lt.data):k.isCompressedArrayTexture?O.compressedTexSubImage3D(me,Se,Fe,mt,At,Ae,ye,Re,yt,Lt.data):O.texSubImage3D(me,Se,Fe,mt,At,Ae,ye,Re,yt,Kt,Lt):v.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,Se,Fe,mt,Ae,ye,yt,Kt,Lt.data):v.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,Se,Fe,mt,Lt.width,Lt.height,yt,Lt.data):O.texSubImage2D(O.TEXTURE_2D,Se,Fe,mt,Ae,ye,yt,Kt,Lt);_.pixelStorei(O.UNPACK_ROW_LENGTH,nn),_.pixelStorei(O.UNPACK_IMAGE_HEIGHT,rt),_.pixelStorei(O.UNPACK_SKIP_PIXELS,Tn),_.pixelStorei(O.UNPACK_SKIP_ROWS,Yn),_.pixelStorei(O.UNPACK_SKIP_IMAGES,ui),Se===0&&k.generateMipmaps&&O.generateMipmap(me),_.unbindTexture()},this.initRenderTarget=function(v){Y.get(v).__webglFramebuffer===void 0&&J.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?J.setTextureCube(v,0):v.isData3DTexture?J.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?J.setTexture2DArray(v,0):J.setTexture2D(v,0),_.unbindTexture()},this.resetState=function(){F=0,W=0,ne=null,_.reset(),Me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=at._getDrawingBufferColorSpace(e),t.unpackColorSpace=at._getUnpackColorSpace()}};var Bf={type:"change"},lh={type:"start"},kf={type:"end"},Ac=new gs,Of=new jn,xy=Math.cos(70*io.DEG2RAD),qt=new L,In=2*Math.PI,Mt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},oh=1e-6,Tc=class extends Xa{constructor(e,t=null){super(e,t),this.state=Mt.NONE,this.target=new L,this.cursor=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ms.ROTATE,MIDDLE:Ms.DOLLY,RIGHT:Ms.PAN},this.touches={ONE:Ss.ROTATE,TWO:Ss.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new L,this._lastQuaternion=new zn,this._lastTargetPosition=new L,this._quat=new zn().setFromUnitVectors(e.up,new L(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new bs,this._sphericalDelta=new bs,this._scale=1,this._panOffset=new L,this._rotateStart=new De,this._rotateEnd=new De,this._rotateDelta=new De,this._panStart=new De,this._panEnd=new De,this._panDelta=new De,this._dollyStart=new De,this._dollyEnd=new De,this._dollyDelta=new De,this._dollyDirection=new L,this._mouse=new De,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=yy.bind(this),this._onPointerDown=_y.bind(this),this._onPointerUp=vy.bind(this),this._onContextMenu=Ty.bind(this),this._onMouseWheel=Sy.bind(this),this._onKeyDown=wy.bind(this),this._onTouchStart=Ey.bind(this),this._onTouchMove=Ay.bind(this),this._onMouseDown=by.bind(this),this._onMouseMove=My.bind(this),this._interceptControlDown=Cy.bind(this),this._interceptControlUp=Ry.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=""}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Bf),this.update(),this.state=Mt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;qt.copy(t).sub(this.target),qt.applyQuaternion(this._quat),this._spherical.setFromVector3(qt),this.autoRotate&&this.state===Mt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=In:i>Math.PI&&(i-=In),s<-Math.PI?s+=In:s>Math.PI&&(s-=In),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(qt.setFromSpherical(this._spherical),qt.applyQuaternion(this._quatInverse),t.copy(this.target).add(qt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=qt.length();a=this._clampDistance(o*this._scale);let l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let o=new L(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new L(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=qt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Ac.origin.copy(this.object.position),Ac.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ac.direction))<xy?this.object.lookAt(this.target):(Of.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ac.intersectPlane(Of,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>oh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>oh||this._lastTargetPosition.distanceToSquared(this.target)>oh?(this.dispatchEvent(Bf),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?In/60*this.autoRotateSpeed*e:In/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){qt.setFromMatrixColumn(t,0),qt.multiplyScalar(-e),this._panOffset.add(qt)}_panUp(e,t){this.screenSpacePanning===!0?qt.setFromMatrixColumn(t,1):(qt.setFromMatrixColumn(t,0),qt.crossVectors(this.object.up,qt)),qt.multiplyScalar(e),this._panOffset.add(qt)}_pan(e,t){let i=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;qt.copy(s).sub(this.target);let r=qt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,a=i.width,o=i.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(In*this._rotateDelta.x/t.clientHeight),this._rotateUp(In*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(In*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-In*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(In*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-In*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(In*this._rotateDelta.x/t.clientHeight),this._rotateUp(In*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new De,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function _y(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function yy(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function vy(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(kf),this.state=Mt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function by(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Ms.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=Mt.DOLLY;break;case Ms.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Mt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Mt.ROTATE}break;case Ms.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Mt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Mt.PAN}break;default:this.state=Mt.NONE}this.state!==Mt.NONE&&this.dispatchEvent(lh)}function My(n){switch(this.state){case Mt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case Mt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case Mt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function Sy(n){this.enabled===!1||this.enableZoom===!1||this.state!==Mt.NONE||(n.preventDefault(),this.dispatchEvent(lh),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(kf))}function wy(n){this.enabled!==!1&&this._handleKeyDown(n)}function Ey(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Ss.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=Mt.TOUCH_ROTATE;break;case Ss.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=Mt.TOUCH_PAN;break;default:this.state=Mt.NONE}break;case 2:switch(this.touches.TWO){case Ss.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=Mt.TOUCH_DOLLY_PAN;break;case Ss.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=Mt.TOUCH_DOLLY_ROTATE;break;default:this.state=Mt.NONE}break;default:this.state=Mt.NONE}this.state!==Mt.NONE&&this.dispatchEvent(lh)}function Ay(n){switch(this._trackPointer(n),this.state){case Mt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case Mt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case Mt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case Mt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=Mt.NONE}}function Ty(n){this.enabled!==!1&&n.preventDefault()}function Cy(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Ry(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var oo=new L;function ri(n,e,t,i,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),l=Math.PI/4;oo.copy(e),oo[i]=0,oo.normalize();let c=.5*a/(a+o),u=1-oo.angleTo(n)/l;return Math.sign(oo[t])===1?u*c:o/(a+o)+c+c*(1-u)}var lo=class n extends tn{constructor(e=1,t=1,i=1,s=2,r=.1){let a=s*2+1;if(r=Math.min(e/2,t/2,i/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:i,segments:s,radius:r},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let l=new L,c=new L,u=new L(e,t,i).divideScalar(2).subScalar(r),d=this.attributes.position.array,h=this.attributes.normal.array,f=this.attributes.uv.array,g=d.length/6,x=new L,m=.5/a;for(let p=0,S=0;p<d.length;p+=3,S+=2)switch(l.fromArray(d,p),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),d[p+0]=u.x*Math.sign(l.x)+c.x*r,d[p+1]=u.y*Math.sign(l.y)+c.y*r,d[p+2]=u.z*Math.sign(l.z)+c.z*r,h[p+0]=c.x,h[p+1]=c.y,h[p+2]=c.z,Math.floor(p/g)){case 0:x.set(1,0,0),f[S+0]=ri(x,c,"z","y",r,i),f[S+1]=1-ri(x,c,"y","z",r,t);break;case 1:x.set(-1,0,0),f[S+0]=1-ri(x,c,"z","y",r,i),f[S+1]=1-ri(x,c,"y","z",r,t);break;case 2:x.set(0,1,0),f[S+0]=1-ri(x,c,"x","z",r,e),f[S+1]=ri(x,c,"z","x",r,i);break;case 3:x.set(0,-1,0),f[S+0]=1-ri(x,c,"x","z",r,e),f[S+1]=1-ri(x,c,"z","x",r,i);break;case 4:x.set(0,0,1),f[S+0]=1-ri(x,c,"x","y",r,e),f[S+1]=1-ri(x,c,"y","x",r,t);break;case 5:x.set(0,0,-1),f[S+0]=ri(x,c,"x","y",r,e),f[S+1]=1-ri(x,c,"y","x",r,t);break}}static fromJSON(e){return new n(e.width,e.height,e.depth,e.segments,e.radius)}};var Cc=class extends Zs{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new tn;e.deleteAttribute("uv");let t=new Hn({side:an}),i=new Hn,s=new Wa(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new ot(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new Bi(e,i,6),o=new Ht;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let l=new ot(e,ia(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new ot(e,ia(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let u=new ot(e,ia(17));u.position.set(14.904,12.198,-1.832),u.scale.set(.15,4.265,6.331),this.add(u);let d=new ot(e,ia(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);let h=new ot(e,ia(20));h.position.set(3.235,11.486,-12.541),h.scale.set(2.5,2,.1),this.add(h);let f=new ot(e,ia(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function ia(n){return new ka({color:0,emissive:16777215,emissiveIntensity:n})}function ch(n,e=!1){let t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},a={},o=n[0].morphTargetsRelative,l=new Ot,c=0;for(let u=0;u<n.length;++u){let d=n[u],h=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in d.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.attributes[f]),h++}if(h!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in d.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(d.morphAttributes[f])}if(e){let f;if(t)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,u),c+=f}}if(t){let u=0,d=[];for(let h=0;h<n.length;++h){let f=n[h].index;for(let g=0;g<f.count;++g)d.push(f.getX(g)+u);u+=n[h].attributes.position.count}l.setIndex(d)}for(let u in r){let d=zf(r[u]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,d)}for(let u in a){let d=a[u][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let h=0;h<d;++h){let f=[];for(let x=0;x<a[u].length;++x)f.push(a[u][x][h]);let g=zf(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(g)}}}return l}function zf(n){let e,t,i,s=-1,r=0;for(let c=0;c<n.length;++c){let u=n[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}let a=new e(r),o=new Gt(a,t,i),l=0;for(let c=0;c<n.length;++c){let u=n[c];if(u.isInterleavedBufferAttribute){let d=l/t;for(let h=0,f=u.count;h<f;h++)for(let g=0;g<t;g++){let x=u.getComponent(h,g);o.setComponent(h+d,g,x)}}else a.set(u.array,l);l+=u.count*t}return s!==void 0&&(o.gpuType=s),o}function Vf(n,e,t=()=>{},i=()=>{},s=null){let r=matchMedia("(prefers-reduced-motion: reduce)").matches,a=!1,o=0,l=null,c=0,u=null,d=null,h=null,f=null,g=null,x=[],m="studio",p=0,S=1,I=0,M=!1,b=!0,w=0,T=!0,y=()=>{},E={l:13600,w:2450,h:2700,mass:2e4},D=!1,A=0,U={started:performance.now()};function H(R=!1){M||!T||(R&&(V.shadowMap.needsUpdate=!0),!I&&!document.hidden&&(I=requestAnimationFrame(Tp)))}let V=new Sc({antialias:!0,alpha:!0,preserveDrawingBuffer:!1});V.setPixelRatio(Math.min(devicePixelRatio,innerWidth<600?1.25:1.5)),V.shadowMap.enabled=!0,V.shadowMap.type=Js,V.shadowMap.autoUpdate=!1,V.shadowMap.needsUpdate=!0,V.toneMapping=qa,V.toneMappingExposure=1,n.prepend(V.domElement),V.domElement.addEventListener("webglcontextlost",R=>{M||(R.preventDefault(),T=!1,cancelAnimationFrame(I),I=0,i("3D \u043F\u0440\u0438\u043E\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043E: \u0433\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u043A\u043E\u043D\u0442\u0435\u043A\u0441\u0442 \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u0435\u043D."))}),V.domElement.addEventListener("webglcontextrestored",()=>{if(!M){if(s){s();return}ne(),V.setRenderTarget(null),V.setSize(Zn,Bs,!1),b||t("3D \u0432\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043E",1),H(!0)}});let z=new Zs,F=new sn(34,1,.1,180),W=new Tc(F,V.domElement);W.target.set(-.9,1.65,0),W.enableDamping=!0,W.minDistance=8,W.maxDistance=42,W.maxPolarAngle=Math.PI*.49,W.enablePan=!1;function ne(){z.environment?.dispose();let R=new ta(V),G=new Cc;z.environment=R.fromScene(G,.04).texture,G.dispose(),R.dispose()}ne(),z.environmentIntensity=.65,z.add(new Ga(13886719,3354936,.95));let ie=new Ks(16772053,2.5);ie.position.set(-3,15,6),ie.castShadow=!0,ie.shadow.mapSize.set(1024,1024),Object.assign(ie.shadow.camera,{left:-16,right:16,top:12,bottom:-12,near:.5,far:45}),ie.shadow.bias=-2e-4,ie.shadow.normalBias=.025,ie.shadow.radius=3,z.add(ie);let _e=new Ks(10930413,.85);_e.position.set(4,7,-9),z.add(_e);let ve=new Ks(13492479,1.7);ve.position.set(1,9,-5),z.add(ve);let Ee=new Map,Ke=(R,G=0,B=.6)=>{let K=[R,G,B].join("/");return Ee.has(K)||Ee.set(K,new Hn({color:R,metalness:G,roughness:B})),Ee.get(K)},wt=new $r({color:"#263750",metalness:.5,roughness:.3,clearcoat:.65,clearcoatRoughness:.24}),Je=Ke("#151b20",.35,.55),j=Ke("#a8b0b0",.78,.27),he=Ke("#cbd2d7",.3,.42),le=Ke("#15191d",0,.88),Ge=Ke("#112530",.85,.12),We=Ke("#b0a58c",0,.84),ke=Ke("#ff813d",.45,.35),It=[],et=[],bt=new Va,lt=0,it=(R,G=!0)=>{let B=new Wt;if(!G){let ae=document.createElement("canvas");ae.width=ae.height=1;let re=ae.getContext("2d");re.fillStyle=R.includes("normal")?"#8080ff":"#ffffff",re.fillRect(0,0,1,1),B.image=ae,B.needsUpdate=!0}let K=()=>new Promise((ae,re)=>{let oe=new Image;oe.onload=()=>{if(M){ae(B);return}B.image=oe,B.needsUpdate=!0,lt++,G?t("\u041C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044B \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D\u044B",.65):H(),lt===4&&(U.materialsReady=performance.now()),ae(B)},oe.onerror=()=>re(new Error("\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043F\u0440\u043E\u0447\u0438\u0442\u0430\u0442\u044C \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B "+R)),oe.src=ua(R)});return G?It.push(K()):et.push(K),B},Pt=it("floor-oak-basecolor-2k.webp");Pt.colorSpace=jt,Pt.anisotropy=Math.min(8,V.capabilities.getMaxAnisotropy()),We.map=Pt,We.normalMap=it("floor-oak-normal-2k.webp",!1),We.normalScale=new De(.25,.25);let kt=it("metal-normal-2k.webp",!1),zt=it("metal-roughness-2k.webp",!1);for(let R of[wt,j])R.normalMap=kt,R.normalScale=new De(.14,.14),R.roughnessMap=zt;let Dt=new Qt,_t=new Qt;z.add(Dt,_t);let st=Dt,O=new Map;function Zt(R,G){return O.has(R)||O.set(R,G()),O.get(R)}function Te(R,G,B,K,ae,re,oe=he,Le=st,tt=.02){let ct=new ot(Zt(["box",R,G,B,tt].join("/"),()=>tt?new lo(R,G,B,2,tt):new tn(R,G,B)),oe);return ct.position.set(K,ae,re),ct.castShadow=!0,ct.receiveShadow=!0,Le.add(ct),ct}function C(R,G,B,K,ae,re,oe=st){let Le=new ot(Zt(["cylinder",R,G].join("/"),()=>new Na(R,R,G,40)),re);return Le.rotation.x=Math.PI/2,Le.position.set(B,K,ae),Le.castShadow=!0,Le.receiveShadow=!0,oe.add(Le),Le}let _=new ot(new ni(180,180),new Oa({opacity:.35}));_.rotation.x=-Math.PI/2,_.position.y=.005,_.receiveShadow=!0,z.add(_);let $=document.createElement("canvas");$.width=512,$.height=128;let Y=$.getContext("2d"),J=Y.createRadialGradient(256,64,10,256,64,240);J.addColorStop(0,"#00000090"),J.addColorStop(.65,"#00000035"),J.addColorStop(1,"#00000000"),Y.fillStyle=J,Y.fillRect(0,0,512,128);let ue=new ot(new ni(18,4.5),new ti({map:new ts($),transparent:!0,opacity:.3,depthWrite:!1}));ue.rotation.x=-Math.PI/2,ue.position.set(-1.5,.008,0),z.add(ue);let fe=document.createElement("canvas");fe.width=256,fe.height=256;let Q=fe.getContext("2d"),te=Q.createRadialGradient(128,128,12,128,128,128);te.addColorStop(0,"#ffffff"),te.addColorStop(.55,"#ffffffbb"),te.addColorStop(1,"#000000"),Q.fillStyle=te,Q.fillRect(0,0,256,256);let pe=new ot(new ni(46,28),new Hn({color:4280676,roughness:.48,metalness:.32,envMapIntensity:.5,alphaMap:new ts(fe),transparent:!0,opacity:.18,depthWrite:!1}));pe.rotation.x=-Math.PI/2,pe.position.set(-1.5,.001,0),z.add(pe),Te(13.7,.18,2.55,0,1.12,0,j),Te(13.6,.09,2.45,0,1.255,0,We);for(let R of[-.83,.83])Te(13.5,.24,.16,0,.91,R,Je);for(let R=-6.2;R<6.8;R+=.62)Te(.065,.1,2.4,R,1.04,0,Je);for(let R=-1.12;R<1.23;R+=.18)Te(13.58,.005,.008,0,1.303,R,Ke("#8d8573"),st,0);Te(.1,2.7,2.49,-6.85,2.65,0,he);for(let R=-1.1;R<1.2;R+=.17)Te(.014,2.54,.025,-6.785,2.65,R,j);for(let R of[-1.28,1.28]){Te(13.75,.25,.06,0,1.12,R,he),Te(13.75,.055,.055,0,4.02,R,j);for(let G of[-6.86,6.86])Te(.065,2.87,.065,G,2.62,R,j);for(let G=-6.3;G<6.6;G+=1.4)Te(.22,.07,.02,G,1.13,R*1.025,ke)}Te(.06,.055,2.6,6.87,4.02,0,j),Te(.09,.18,2.57,6.86,.72,0,j);for(let R of[-1.05,1.05])Te(.12,.14,.26,6.95,.79,R,Ke("#b52725",.2,.3));let Ne=new $r({color:15068904,transparent:!0,opacity:.09,roughness:.35,metalness:.1,side:Cn,depthWrite:!1}),be=Te(13.6,2.7,.016,0,2.65,-1.255,Ne,st,0);function ge(R,G){C(.5,.29,R,.53,G,le),C(.31,.315,R,.53,G,j),C(.17,.33,R,.53,G,Je),C(.09,.35,R,.53,G,j);for(let B=0;B<8;B++){let K=B*Math.PI/4;C(.023,.34,R+Math.cos(K)*.22,.53+Math.sin(K)*.22,G,Je)}for(let B of[-.105,0,.105]){let K=new ot(Zt("tire-torus",()=>new Ba(.481,.012,6,48)),Ke("#292e32"));K.position.set(R,.53,G+B),st.add(K)}}for(let R of[3.85,4.95,6.05])for(let G of[-1.16,1.16])ge(R,G);for(let R of[-1.18,1.18])Te(3.36,.08,.4,4.95,1.07,R,Je);for(let R of[-.92,.92])Te(.11,.57,.11,-3.5,.72,R,j),Te(.42,.05,.3,-3.5,.41,R,Je);st=_t,Te(4.55,.27,1.08,-7.78,.73,0,Je);for(let R of[-8.78,-6.6])for(let G of[-1.04,1.04])ge(R,G);Te(2.16,2.5,2.31,-8.68,2.16,0,wt,st,.16),Te(1.77,.35,2.18,-8.42,3.48,0,wt,st,.14),Te(.075,.88,2.01,-9.79,2.76,0,Ge,st,.06),Te(.07,.025,1.9,-9.84,2.26,0,j),Te(.08,.92,1.94,-9.79,1.68,0,Je,st,.05);for(let R=1.35;R<2.12;R+=.115)Te(.065,.025,1.68,-9.843,R,0,j);Te(.15,.29,2.31,-9.76,1.08,0,wt,st,.08),Te(.03,.1,.43,-9.85,1.06,0,he);let Be=new Hn({color:"#effaff",emissive:"#c2e7ff",emissiveIntensity:2.4});for(let R of[-.85,.85])Te(.095,.14,.41,-9.85,1.27,R,Be,st,.03),Te(.035,.045,.19,-9.86,1.15,R,ke);for(let R of[-1.175,1.175])Te(1.31,.8,.035,-8.89,2.79,R,Ge,st,.045),Te(.61,.72,.028,-7.91,2.73,R,Ge,st,.04),Te(.05,1.52,.035,-8,2.01,R,j),Te(.24,.04,.04,-8.25,2.05,R*1.015,Je),Te(.95,.12,.34,-8.03,1.03,R*.96,j),Te(.89,.12,.37,-8.02,.82,R*.96,j),Te(.06,.06,.36,-9.32,2.5,R*1.14,Je),Te(.18,.4,.11,-9.31,2.53,R*1.3,Je,st,.045),Te(.42,.12,.045,-8.95,3.45,R*.95,he),Te(1.2,.43,.5,-6.9,.59,R*.67,j,st,.09);function ze(R){let G=new Map;for(let B of[...R.children]){if(!B.isMesh||B.material.transparent)continue;B.updateMatrix();let K=B.material.uuid+"/"+B.castShadow+"/"+B.receiveShadow;G.has(K)||G.set(K,{material:B.material,cast:B.castShadow,receive:B.receiveShadow,geometries:[],meshes:[]});let ae=G.get(K),re=B.geometry.clone();if(re.index){let oe=re;re=re.toNonIndexed(),oe.dispose()}re.applyMatrix4(B.matrix),ae.geometries.push(re),ae.meshes.push(B)}for(let B of G.values()){let K=ch(B.geometries);if(!K)continue;let ae=new ot(K,B.material);ae.castShadow=B.cast,ae.receiveShadow=B.receive,R.add(ae),B.meshes.forEach(re=>R.remove(re)),B.geometries.forEach(re=>re.dispose())}}ze(Dt),ze(_t);for(let R of O.values())R.dispose();O.clear();let Xe=new Qt;z.add(Xe);let N=new Hn({color:13950169,roughness:.42,metalness:.32,transparent:!0,opacity:0,depthWrite:!1,side:Cn}),de=document.createElement("canvas");de.width=1024,de.height=256;let ee=de.getContext("2d");ee.fillStyle="#eef0ed",ee.fillRect(0,0,1024,256);for(let R=0;R<1024;R+=64){let G=ee.createLinearGradient(R,0,R+6,0);G.addColorStop(0,"#cdd3d0"),G.addColorStop(.35,"#e3e7e3"),G.addColorStop(1,"#eef0ed"),ee.fillStyle=G,ee.fillRect(R,0,6,256)}ee.fillStyle="#c4cfca",ee.fillRect(0,252,1024,4);let xe=new ts(de);xe.colorSpace=jt,N.map=xe;let Me=new ot(new tn(1,1,1),N),se=new ot(new tn(1,1,1),N),Pe=new ot(new tn(1,1,1),N);Xe.add(Me,se,Pe);function Ce(){let R=E.l/1e3,G=E.w/1e3,B=E.h/1e3;Me.scale.set(R+.1,.04,G+.05),Me.position.set(0,1.3+B+(1-o)*.5,0),se.scale.set(R,B,.025),se.position.set(0,1.3+B/2,G/2+.035+(1-o)*.4),Pe.scale.set(.035,B,G),Pe.position.set(R/2+.045+(1-o)*.3,1.3+B/2,0),N.opacity=o*.97,Xe.visible=o>.002,be.material.opacity=.09+o*.86,y()}function Et(R,G=!1){a=R;let B=R?1:0;G&&!r?(l={from:o,to:B,start:performance.now()},H()):(l=null,o=B,Ce(),H(!0))}let pt=new Qt,An=new Qt;z.add(pt,An);let cn=[],or=[],po=!0,os=new Map,li=[],Ti=0,ca=null,un=[],Ci=1,Un=new Qt;z.add(Un),Un.visible=!1;function lr(R){let G=new Hr(new Ot().setFromPoints(R.map(B=>new L(...B))),new xs({color:16759431}));Un.add(G)}function cr(R,G,B,K,ae=1){let re=document.createElement("canvas");re.width=512,re.height=96;let oe=re.getContext("2d");oe.fillStyle="#1c2730",oe.fillRect(0,0,512,96),oe.fillStyle="#ffd1af",oe.font="36px Arial",oe.textAlign="center",oe.fillText(R,256,60);let Le=new ts(re),tt=new Ia(new zr({map:Le,depthTest:!1}));tt.position.set(G,B,K),tt.scale.set(2.6*ae,.49*ae,1),Un.add(tt)}function ur(){Un.traverse(K=>{K.isLine&&K.geometry.dispose(),K.material&&(K.material.map?.dispose(),K.material.dispose())}),Un.clear();let R=E.l/1e3,G=E.w/1e3,B=E.h/1e3;lr([[-R/2,1.3,G/2+.5],[R/2,1.3,G/2+.5]]),cr(E.l.toLocaleString("ru-RU")+" \u043C\u043C",0,1.3,G/2+.7),lr([[R/2+.4,1.3,-G/2],[R/2+.4,1.3,G/2]]),cr(E.w.toLocaleString("ru-RU")+" \u043C\u043C",R/2+1,1.3,0,.8),lr([[R/2+.3,1.3,-G/2-.3],[R/2+.3,1.3+B,-G/2-.3]]),cr(E.h.toLocaleString("ru-RU")+" \u043C\u043C",R/2+1,1.3+B/2,-G/2-.3,.8)}let ls=new Map,Ri=new Map,Gi=new Map;function mo(R){if(ls.has(R))return ls.get(R);let G=document.createElement("canvas");G.width=G.height=512;let B=G.getContext("2d");B.fillStyle=R,B.fillRect(0,0,512,512);for(let ae=0;ae<1400;ae++)B.fillStyle=ae%2?"#ffffff05":"#00000005",B.fillRect(ae*137%512,ae*71%512,1+ae%3,1);B.strokeStyle="#00000020",B.lineWidth=2,B.strokeRect(3,3,506,506),B.fillStyle="#00000012";for(let ae=0;ae<512;ae+=64)B.fillRect(0,ae,512,2);B.strokeStyle="#ffffff2a",B.lineWidth=5,B.strokeRect(10,10,492,492),B.fillStyle="#00000024",B.fillRect(70,0,12,512),B.fillRect(430,0,12,512),B.fillStyle="#f1ecd9",B.fillRect(325,330,135,107),B.fillStyle="#26323b",B.font="bold 24px Arial",B.fillText("\u2191 \u2191",340,360),B.font="15px Arial",B.fillText("\u0413\u0420\u0423\u0417",340,383);for(let ae=0;ae<29;ae++)B.fillRect(338+ae*3.7,394,1+ae%2,27);let K=new ts(G);return K.colorSpace=jt,K.anisotropy=Math.min(8,V.capabilities.getMaxAnisotropy()),ls.set(R,K),K}let ci=new ft,Hi=new Qt,Fs=new Qt,Us=new Qt;z.add(Hi,Fs,Us);let v=[],k=null;function Z(R){R.traverse(G=>{G.isInstancedMesh&&G.dispose(),G.geometry?.dispose(),G.material&&(G.material.map?.dispose(),G.material.dispose())}),R.clear()}function X(R){return new L(-E.l/2e3+(R.x+R.l/2)/1e3,1.3+(R.z+R.h/2)/1e3+(R.tier-1)*Math.min(.32,1.8/Ci)*c,-E.w/2e3+(R.y+R.w/2)/1e3)}let q=new Qn,Se=new Float32Array(144),Ae=new Ot;Ae.setAttribute("position",new Gt(Se,3).setUsage(jr));let ye=new Wr(Ae,new xs({color:15907469,transparent:!0,opacity:.95,depthTest:!1,depthWrite:!1}));ye.frustumCulled=!1,ye.renderOrder=10;let Re=new ot(new ni(1,1),new ti({color:15577474,transparent:!0,opacity:.13,depthWrite:!1,side:Cn}));Re.rotation.x=-Math.PI/2,Hi.add(ye,Re),Hi.visible=!1;function Ie(){let R=f?un.filter(oe=>oe.stackKey===f&&(!A||oe.tier===A)&&(!g||g.visible.has(oe.unitId))):[];if(Hi.visible=!!R.length,!R.length)return;q.makeEmpty();for(let oe of R){let Le=X(oe),tt=new L(oe.l/2e3+.012,oe.h/2e3+.012,oe.w/2e3+.012);q.expandByPoint(Le.clone().sub(tt)),q.expandByPoint(Le.clone().add(tt))}let G=q.min,B=q.max,K=q.getSize(new L),ae=[Math.min(.23,K.x*.25),Math.min(.23,K.y*.25),Math.min(.23,K.z*.25)],re=0;for(let oe=0;oe<8;oe++){let Le=[oe&1?B.x:G.x,oe&2?B.y:G.y,oe&4?B.z:G.z];for(let tt=0;tt<3;tt++)for(let ct=0;ct<2;ct++)for(let Ft=0;Ft<3;Ft++)Se[re++]=Le[Ft]+(ct&&Ft===tt?oe&1<<tt?-ae[Ft]:ae[Ft]:0)}Ae.attributes.position.needsUpdate=!0,Re.scale.set(K.x,K.z,1),Re.position.set((G.x+B.x)/2,1.307,(G.z+B.z)/2)}function Ye(R){Z(Fs),v=[];let G=new Map;for(let B of R){let K=[B.l,B.w,B.h,B.invalid].join("/");G.has(K)||G.set(K,[]),G.get(K).push(B)}for(let B of G.values()){let K=B[0],ae=K.invalid?15178631:10999747,re=new tn(K.l/1e3,K.h/1e3,K.w/1e3),oe=new Bi(re,new ti({color:ae,transparent:!0,opacity:.11,depthWrite:!1}),B.length),Le=new Fa(re),tt=Le.attributes.position.array,ct=new Float32Array(tt.length*B.length);B.forEach((Pi,Wi)=>{let hr=X(Pi);oe.setMatrixAt(Wi,ci.makeTranslation(hr.x,hr.y,hr.z));let kc=hr.toArray();for(let zs=0;zs<tt.length;zs++)ct[Wi*tt.length+zs]=tt[zs]+kc[zs%3]}),Le.dispose();let Ft=new Wr(new Ot().setAttribute("position",new Gt(ct,3)),new xs({color:ae,transparent:!0,opacity:.8,depthWrite:!1}));oe.frustumCulled=Ft.frustumCulled=!1,Fs.add(oe,Ft),v.push(Ft)}H()}function qe(){if(!k)return;let R=new Map;for(let G of un)(!A||G.tier===A)&&(!g||g.visible.has(G.unitId))&&(!R.has(G.stackKey)||R.get(G.stackKey).tier<G.tier)&&R.set(G.stackKey,G);x.forEach((G,B)=>{let K=R.get(G.key);if(K){let ae=X(K);ae.y+=K.h/2e3+.075,k.setMatrixAt(B,ci.makeTranslation(ae.x,ae.y,ae.z))}else k.setMatrixAt(B,ci.makeScale(0,0,0))}),k.instanceMatrix.needsUpdate=!0}function Fe(R){if(x=R,Z(Us),k=null,R.length){let G=new Ua(.055,8,6),B=new ti({color:16759686});k=new Bi(G,B,R.length),k.frustumCulled=!1,k.instanceMatrix.setUsage(jr),Us.add(k),qe()}H()}function mt(R){f=R,Ie(),At(),H()}function At(){let R=new $e;for(let G of li)G.rows.forEach((B,K)=>{R.setRGB(1,1,1),f&&B.stackKey!==f&&R.multiplyScalar(.72),G.mesh.setColorAt(K,R)}),G.mesh.instanceColor&&(G.mesh.instanceColor.needsUpdate=!0)}function Lt(R,G=!1){let B=R?1:0;R&&Et(!1,G),G&&!r?(u={from:c,to:B,start:performance.now()},H()):(u=null,c=B,me(),Ie(),qe(),H(!0))}function yt(R){g=R?{...R,visible:new Set(R.visible)}:null,f=R?.key||null,me(),At(),Ie(),qe(),H(!0)}function Kt(R,G){if(r){Ii(G);return}Ii(G),h={before:new Map(rt(R).map(B=>[B.visualId,B])),beforeUnits:new Map(R.map(B=>[B.unitId,B])),start:performance.now(),duration:850},H(!0)}function me(R=0){for(let G of li){let B=!1;G.rows.forEach((K,ae)=>{let re=1;if(R&&(re=Math.max(0,Math.min(1,(R-Ti-K.animationIndex*Math.min(85,3200/Math.max(un.length,1)))/450))),A&&K.tier!==A||g&&!g.visible.has(K.unitId)||re<=0)ci.makeScale(0,0,0);else{B=!0;let oe=X(K);if(h){let Le=h.before.get(K.visualId),tt=Math.min(1,(performance.now()-h.start)/h.duration),ct=tt*tt*(3-2*tt);Le?oe.lerp(X(Le),1-ct):oe.y+=(1-ct)*.6}oe.y+=(1-re)**3*2.7,ci.makeTranslation(...oe.toArray())}G.mesh.setMatrixAt(ae,ci)}),G.mesh.visible=B,G.mesh.instanceMatrix.needsUpdate=!0}ui()}function nn(){Ti=0,h=null,me(),H(!0)}function rt(R){let G=R.reduce((K,ae)=>K+(ae.pallet?.boxes||1),0),B=G<=2e3;return R.flatMap(K=>K.pallet&&!B?[{...K,z:K.z+K.pallet.h,h:K.h-K.pallet.h,visualId:K.unitId+":load"}]:Gh(K))}function Tn(R,G,B){let K=[R,G,B].join("/");if(os.has(K))return os.get(K);let ae=R/1e3,re=G/1e3,oe=B/1e3,Le=[],tt=(Ft,Pi,Wi,hr,kc,zs)=>Le.push(new tn(Ft,Pi,Wi).translate(hr,kc,zs));for(let Ft=0;Ft<5;Ft++)tt(ae*.98,oe*.15,re/5*.87,0,oe*.425,-re/2+(Ft+.5)*re/5);for(let Ft of[-ae*.36,0,ae*.36]){tt(ae*.13,oe*.15,re*.98,Ft,-oe*.425,0);for(let Pi of[-re*.33,0,re*.33])tt(ae*.12,oe*.7,re*.17,Ft,0,Pi)}let ct=ch(Le);return Le.forEach(Ft=>Ft.dispose()),os.set(K,ct),ct}function Yn(){for(let B of cn)An.remove(B.mesh),B.mesh.dispose();cn=[];let R=new Map,G=new Set;for(let B of un.filter(K=>K.pallet)){let K=[B.pallet.l,B.pallet.w,B.pallet.h].join("/");G.add(K),R.has(K)||R.set(K,[]),R.get(K).push(B)}for(let B of R.values()){let K=B[0],ae=new Bi(Tn(K.pallet.l,K.pallet.w,K.pallet.h),We,B.length);ae.frustumCulled=!1,ae.instanceMatrix.setUsage(jr),An.add(ae),cn.push({mesh:ae,rows:B})}for(let[B,K]of os)G.has(B)||(K.dispose(),os.delete(B));ui()}function ui(){for(let R of cn){let G=!1;R.rows.forEach((B,K)=>{if(A&&B.tier!==A||g&&!g.visible.has(B.unitId))ci.makeScale(0,0,0);else{G=!0;let ae=X({...B,h:B.pallet.h});if(h){let re=h.beforeUnits.get(B.unitId),oe=Math.min(1,(performance.now()-h.start)/h.duration),Le=oe*oe*(3-2*oe);re?.pallet&&ae.lerp(X({...re,h:re.pallet.h}),1-Le)}ci.makeRotationY(B.rotated?-Math.PI/2:0).setPosition(ae)}R.mesh.setMatrixAt(K,ci)}),R.mesh.visible=G,R.mesh.instanceMatrix.needsUpdate=!0}}function Ii(R){Ti=0,h=null,f=null,g=null,Hi.visible=!1,Ye([]);for(let re of li)pt.remove(re.mesh),re.mesh.dispose();li=[],un=R.map((re,oe)=>({...re,animationIndex:oe})),Ci=Math.max(1,...un.map(re=>re.tier)),po=un.reduce((re,oe)=>re+(oe.pallet?.boxes||1),0)<=2e3,or=rt(un);let G=new Map,B=new Set,K=new Set,ae=new Set;for(let re of or){let oe=[re.id,re.color,re.l,re.w,re.h].join("/");G.has(oe)||G.set(oe,[]),G.get(oe).push(re)}for(let re of G.values()){let oe=re[0],Le=[oe.l,oe.w,oe.h].join("/"),tt=oe.id+"/"+oe.color;B.add(Le),K.add(tt),ae.add(oe.color),Ri.has(Le)||Ri.set(Le,or.length<=500?new lo(oe.l/1e3-.008,oe.h/1e3-.016,oe.w/1e3-.008,2,Math.min(.025,oe.l/8e3,oe.w/8e3,oe.h/8e3)):new tn(oe.l/1e3-.004,oe.h/1e3-.006,oe.w/1e3-.004)),Gi.has(tt)||Gi.set(tt,new Hn({map:mo(oe.color),roughness:.72,metalness:.03,color:16777215}));let ct=new Bi(Ri.get(Le),Gi.get(tt),re.length);ct.castShadow=ct.receiveShadow=!0,ct.frustumCulled=!1,ct.userData.places=re,ct.instanceMatrix.setUsage(jr),pt.add(ct),li.push({mesh:ct,rows:re})}for(let[re,oe]of Ri)B.has(re)||(oe.dispose(),Ri.delete(re));for(let[re,oe]of Gi)K.has(re)||(oe.dispose(),Gi.delete(re));for(let[re,oe]of ls)ae.has(re)||(oe.dispose(),ls.delete(re));Yn(),me(),At(),gt(ca),Fe(x),H()}function gt(R){ca=R;for(let[G,B]of Gi){let K=G.startsWith(R+"/");B.emissive.set(K?G.slice(G.indexOf("/")+1):"#000000"),B.emissiveIntensity=K?.07:0}H()}let Nt=new $a,Bn;V.domElement.addEventListener("pointerdown",R=>Bn=[R.clientX,R.clientY]),V.domElement.addEventListener("pointerup",R=>{if(!Bn||Math.hypot(R.clientX-Bn[0],R.clientY-Bn[1])>5)return;let G=V.domElement.getBoundingClientRect();Nt.setFromCamera(new De((R.clientX-G.left)/G.width*2-1,-(R.clientY-G.top)/G.height*2+1),F);for(let B of Nt.intersectObjects(li.map(K=>K.mesh))){let K=B.object.userData.places[B.instanceId];if(K&&(!A||K.tier===A)&&(!g||g.visible.has(K.unitId))){e(un.find(ae=>ae.unitId===K.unitId));break}}});function dt(R="perspective",G=!1){let B=F.position.clone(),K=W.target.clone(),ae=F.up.clone(),re=F.fov,oe=Math.max(.45,E.l/13600,E.w/2450,E.h/2700);W.target.set(D?0:-1.65*oe,1.3+E.h/4500,0),F.up.set(0,1,0),F.fov=34,R==="top"?(W.target.set(0,1.3,0),F.position.set(0,100*oe,.001),F.up.set(...Zn<450?[-1,0,0]:[0,0,-1]),F.fov=9):R==="rear"?(W.target.set(0,1.3+E.h/2e3,0),F.position.set(23*oe,8*oe,0)):F.position.set(-12.2*oe,8.9*oe,14.8*oe),D&&R==="perspective"&&F.position.multiplyScalar(.8),S=Math.max(1,1.75/F.aspect),W.maxDistance=(R==="top"?130:60)*oe*S,F.position.sub(W.target).multiplyScalar(S).add(W.target),G&&!r?(d={from:B,to:F.position.clone(),targetFrom:K,targetTo:W.target.clone(),upFrom:ae,upTo:F.up.clone(),fovFrom:re,fovTo:F.fov,start:performance.now()},F.position.copy(B),W.target.copy(K),F.up.copy(ae),F.fov=re,W.enabled=!1):(d=null,W.enabled=!0,W.update()),F.updateProjectionMatrix(),F.updateMatrixWorld(!0),H()}function hi(R){E={...R};let G=R.l/1e3,B=R.w/1e3,K=R.h/1e3;Dt.scale.set(G/13.6,K/2.7,B/2.45),Dt.position.y=1.3*(1-K/2.7),_t.position.x=6.8-G/2;let ae=Math.max(.45,G/13.6,B/2.45,K/2.7);F.far=Math.max(180,ae*180),F.updateProjectionMatrix(),W.maxDistance=60*ae,W.minDistance=4*ae,ie.position.set(-3*ae,15*ae,6*ae),Object.assign(ie.shadow.camera,{left:-16*ae,right:16*ae,top:12*ae,bottom:-12*ae,far:45*ae}),ie.shadow.camera.updateProjectionMatrix(),ue.scale.set(Math.max(.4,G/13.6),B/2.45,1),ur(),Ce(),me(),Ie(),qe(),y(),dt("perspective"),H(!0)}let Zn=0,Bs=0;function Oc(){let R=n.getBoundingClientRect(),G=Math.round(R.width),B=Math.round(R.height);if(!G||!B||G===Zn&&B===Bs)return;Zn=G,Bs=B,V.setSize(G,B,!1),F.aspect=G/B;let K=Math.max(1,1.75/F.aspect);F.position.sub(W.target).multiplyScalar(K/S).add(W.target),S=K,F.updateProjectionMatrix(),W.update(),H()}let Nh=new ResizeObserver(Oc);Nh.observe(n),W.addEventListener("change",()=>H()),hi(E),Oc(),n.addEventListener("keydown",R=>{if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","+","-"].includes(R.key)){R.preventDefault();let G=F.position.clone().sub(W.target);if(R.key.startsWith("Arrow")){let B=new bs().setFromVector3(G);B.theta+=R.key==="ArrowLeft"?.1:R.key==="ArrowRight"?-.1:0,B.phi=io.clamp(B.phi+(R.key==="ArrowUp"?-.08:R.key==="ArrowDown"?.08:0),.05,1.5),G.setFromSpherical(B)}else G.multiplyScalar(R.key==="+"?.9:1.1);F.position.copy(W.target).add(G),W.update()}});let Os=new Qt;z.add(Os);let ks=null,Fh=0,Uh=null,Ep=[],go=new ti({color:"#F4F5F7",polygonOffset:!0,polygonOffsetFactor:-1});y=()=>{let R=E.l/1e3,G=E.w/1e3,B=E.h/1e3;for(let K of Os.children)K.userData.location==="cab"&&(K.position.x=-8.74+6.8-R/2),K.userData.location==="side"&&(K.position.set(-R*.06,1.3+B*.54,K.userData.side*(G/2+.054+(K.material===go?0:.002))),K.visible=o>.65,K.scale.setScalar(Math.min(4.7,R*.55)/K.userData.baseWidth))};async function Ap(R){if(R===Uh)return;Uh=R;let G=++Fh;if(Os.traverse(re=>{re.isMesh&&(re.geometry.dispose(),re.material!==go&&re.material.dispose())}),Os.clear(),Ep=[],ks?.dispose(),ks=null,!R){H();return}let B=new Image;if(B.src=R,await B.decode(),G!==Fh||M)return;ks=new Wt(B),ks.colorSpace=jt,ks.needsUpdate=!0,ks.anisotropy=Math.min(4,V.capabilities.getMaxAnisotropy());let K=B.width/B.height;function ae(re,oe,Le,tt,ct=0){let Ft=re/K,Pi=new ot(new ni(re+.12,Ft+.12),go);Pi.userData={location:tt,side:ct,baseWidth:re},Pi.position.set(0,oe,Le);let Wi=new ot(new ni(re,Ft),new ti({map:ks,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}));Wi.userData={location:tt,side:ct,baseWidth:re},Wi.position.set(0,oe,Le+Math.sign(Le)*.002),Le<0&&(Pi.rotation.y=Wi.rotation.y=Math.PI),Os.add(Pi,Wi)}for(let re of[-1,1])ae(1.02,1.93,re*1.17,"cab"),ae(Math.min(4.7,E.l/1e3*.55),0,re*(E.w/2e3+.054),"side",re);y(),H()}function Tp(R){if(I=0,M||document.hidden||!T||b)return;let G=performance.now(),B=!1,K=Le=>Math.min(1,(R-Le.start)/450),ae=Le=>Le*Le*(3-2*Le);if(d){let Le=d,tt=K(Le),ct=ae(tt);F.position.lerpVectors(Le.from,Le.to,ct),W.target.lerpVectors(Le.targetFrom,Le.targetTo,ct),F.up.lerpVectors(Le.upFrom,Le.upTo,ct).normalize(),F.fov=Le.fovFrom+(Le.fovTo-Le.fovFrom)*ct,F.lookAt(W.target),F.updateProjectionMatrix(),tt===1?(d=null,W.enabled=!0,W.update()):B=!0}let re=d?!1:W.update();if(l){let Le=K(l);o=l.from+(l.to-l.from)*ae(Le),Ce(),Le===1?l=null:B=!0}if(u){let Le=K(u);c=u.from+(u.to-u.from)*ae(Le),me(),Ie(),qe(),Le===1?u=null:B=!0,V.shadowMap.needsUpdate=!0}h&&(me(),R-h.start>=h.duration?(h=null,me()):B=!0,V.shadowMap.needsUpdate=!0),Ti&&(me(R),V.shadowMap.needsUpdate=!0,R-Ti>3650?(Ti=0,me()):B=!0),V.render(z,F),w++;let oe=performance.now()-G;(B||re)&&(p=oe>32?p+1:Math.max(0,p-1),p>=10&&m==="studio"&&(m="balanced",V.setPixelRatio(Math.min(1.25,devicePixelRatio)),ie.shadow.mapSize.set(1024,1024),ie.shadow.map?.dispose(),ie.shadow.map=null,V.shadowMap.needsUpdate=!0),H())}let Bh=()=>{document.hidden||H()};document.addEventListener("visibilitychange",Bh);let Cp=Promise.all(It).then(async R=>{U.decoded=performance.now(),t("\u041F\u043E\u0434\u0433\u043E\u0442\u0430\u0432\u043B\u0438\u0432\u0430\u0435\u043C 3D-\u0441\u0446\u0435\u043D\u0443",.72);for(let G=0;G<R.length;G++)await new Promise(B=>requestAnimationFrame(B)),V.initTexture(R[G]),t("\u041F\u043E\u0434\u0433\u043E\u0442\u0430\u0432\u043B\u0438\u0432\u0430\u0435\u043C \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044B \u0434\u043B\u044F \u0432\u0438\u0434\u0435\u043E\u043A\u0430\u0440\u0442\u044B",.72+G*.045);await V.compileAsync(z,F),b=!1,H(!0),t("\u0421\u0446\u0435\u043D\u0430 \u0433\u043E\u0442\u043E\u0432\u0430",1),U.ready=performance.now(),innerWidth>=600&&!globalThis.navigator?.connection?.saveData&&requestAnimationFrame(()=>{M||Promise.allSettled(et.map(G=>G())).then(()=>{M||H()})})}).catch(R=>{throw b=!1,H(!0),t("\u041C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044B \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u043B\u0438\u0441\u044C \u043D\u0435 \u043F\u043E\u043B\u043D\u043E\u0441\u0442\u044C\u044E",1),R});return{setCargo:Ii,highlight:gt,view:dt,ready:Cp,setLogo:Ap,finishAnimation:nn,setVehicle:hi,setShell:Et,setExploded:Lt,setGhosts:Ye,selectStack:mt,setPins:Fe,showSequence:yt,compare:Kt,setLayer:R=>{A=R,nn(),Ie(),qe()},setVisible:R=>{T=R,R?(Oc(),H(!0)):(cancelAnimationFrame(I),I=0,Ti=0,me())},focusCargo:R=>{D=R,_t.visible=!R,Os.visible=!R,dt("perspective"),H(!0)},dimensions:R=>(Un.visible=R??!Un.visible,H(),Un.visible),animate:()=>{un.length&&(Ti=performance.now(),H(!0))},snapshot:()=>{nn();let R={layer:A,explode:c,shell:o,sequence:g,position:F.position.clone(),target:W.target.clone(),up:F.up.clone(),fov:F.fov,aspect:F.aspect,fit:S,dpr:V.getPixelRatio(),cameraTween:d,shellTween:l,explodeTween:u};d=l=u=null,A=0,c=0,o=0,g=null,Hi.visible=Fs.visible=Us.visible=!1,V.setPixelRatio(1),V.setSize(1200,540,!1),F.aspect=1200/540,dt("perspective"),Ce(),me(),V.shadowMap.needsUpdate=!0,V.render(z,F);let G=V.domElement.toDataURL("image/png");return A=R.layer,c=R.explode,o=R.shell,g=R.sequence,Hi.visible=Fs.visible=Us.visible=!0,Ie(),V.setPixelRatio(R.dpr),V.setSize(Zn,Bs,!1),F.position.copy(R.position),W.target.copy(R.target),F.up.copy(R.up),F.fov=R.fov,F.aspect=R.aspect,S=R.fit,F.updateProjectionMatrix(),W.update(),d=R.cameraTween,l=R.shellTween,u=R.explodeTween,Ce(),me(),H(!0),G},diagnostics:()=>({camera:{projection:F.projectionMatrix.toArray(),world:F.matrixWorld.toArray(),fov:F.fov,zoom:F.zoom,viewport:Array.from(V.getContext().getParameter(V.getContext().VIEWPORT)||[]),aspect:F.aspect,distance:W.getDistance(),aspectFit:S,position:F.position.toArray(),target:W.target.toArray()},renderCount:w,timings:{...U},geometries:V.info.memory.geometries,textures:V.info.memory.textures,drawCalls:V.info.render.calls,cargoBatches:li.length,cargoPlaces:un.length,visiblePlaces:un.filter(R=>(!A||R.tier===A)&&(!g||g.visible.has(R.unitId))).length,activeLayer:A,vehicle:{...E},staticMeshes:Dt.children.length+_t.children.length,pixelRatio:V.getPixelRatio(),shadowResolution:ie.shadow.mapSize.x,realTimeShadows:!0,environmentMaps:z.environment?1:0,visualCartons:or.length,pallets:un.filter(R=>R.pallet).length,palletBatches:cn.length,detailMode:po?"cartons":"blocks",brandDecals:Os.children.filter(R=>R.material?.map).length,quality:m,shellClosed:a,explodeAmount:c,selectedStack:f,ghostBatches:v.length}),dispose:()=>{M=!0,cancelAnimationFrame(I),Nh.disconnect(),W.dispose(),document.removeEventListener("visibilitychange",Bh);let R=new Set,G=new Set,B=new Set;z.traverse(K=>{K.isInstancedMesh&&K.dispose(),K.geometry&&R.add(K.geometry);for(let ae of Array.isArray(K.material)?K.material:[K.material])if(ae){G.add(ae);for(let re of Object.values(ae))re?.isTexture&&B.add(re)}});for(let K of R)K.dispose();for(let K of G)K.dispose();for(let K of B)K.dispose();z.environment?.dispose(),go.dispose(),V.dispose(),V.forceContextLoss()}}}var Sn=Object.freeze({l:13600,w:2450,h:2700,mass:2e4}),ai=["#79a9c6","#c88362","#91a68c","#d2bc88","#a89fc0","#79b6b1"];function mn(n){let e=[];if(!Array.isArray(n)||n.length>50)return["\u0414\u043E\u043F\u0443\u0441\u043A\u0430\u0435\u0442\u0441\u044F \u0434\u043E 50 \u043F\u043E\u0437\u0438\u0446\u0438\u0439."];let t=new Set,i=0;for(let s of n){let r=typeof s.name=="string"?s.name.trim():"";(!r||r.length>80)&&e.push("\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043F\u043E\u0437\u0438\u0446\u0438\u0438: \u043E\u0442 1 \u0434\u043E 80 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432."),t.has(s.id)&&e.push("\u0418\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440\u044B \u043F\u043E\u0437\u0438\u0446\u0438\u0439 \u0434\u043E\u043B\u0436\u043D\u044B \u0440\u0430\u0437\u043B\u0438\u0447\u0430\u0442\u044C\u0441\u044F."),t.add(s.id);for(let a of["l","w","h"])(!Number.isSafeInteger(s[a])||s[a]<100||s[a]>1e5)&&e.push(`${r||"\u041F\u043E\u0437\u0438\u0446\u0438\u044F"}: \u0440\u0430\u0437\u043C\u0435\u0440\u044B \u2014 \u0446\u0435\u043B\u044B\u0435 \u043C\u0438\u043B\u043B\u0438\u043C\u0435\u0442\u0440\u044B \u043E\u0442 100 \u0434\u043E 100 000.`);(!Number.isFinite(s.mass)||s.mass<=0||s.mass>1e6||Math.abs(s.mass*1e3-Math.round(s.mass*1e3))>1e-6)&&e.push(`${r}: \u043C\u0430\u0441\u0441\u0430 \u2014 \u043E\u0442 0,001 \u0434\u043E 1 000 000 \u043A\u0433, \u0434\u043E \u0442\u0440\u0451\u0445 \u0437\u043D\u0430\u043A\u043E\u0432 \u043F\u043E\u0441\u043B\u0435 \u0437\u0430\u043F\u044F\u0442\u043E\u0439.`),(!Number.isSafeInteger(s.qty)||s.qty<1||s.qty>2e3)&&e.push(`${r}: \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u2014 \u0446\u0435\u043B\u043E\u0435 \u0447\u0438\u0441\u043B\u043E \u043E\u0442 1 \u0434\u043E 2 000.`),(!Number.isSafeInteger(s.tiers)||s.tiers<1||s.tiers>27)&&e.push(`${r}: \u0447\u0438\u0441\u043B\u043E \u044F\u0440\u0443\u0441\u043E\u0432 \u2014 \u043E\u0442 1 \u0434\u043E 27.`),e.push(...Vh(s).map(a=>`${r}: ${a}`)),typeof s.rotate!="boolean"&&e.push(`${r}: \u0443\u043A\u0430\u0436\u0438\u0442\u0435 \u0434\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u043E\u0441\u0442\u044C \u043F\u043E\u0432\u043E\u0440\u043E\u0442\u0430.`),i+=s.qty}return i>2e3&&e.push("\u0412 \u043E\u0434\u043D\u043E\u0439 \u043F\u0430\u0440\u0442\u0438\u0438 \u0434\u043E\u043F\u0443\u0441\u043A\u0430\u0435\u0442\u0441\u044F \u0434\u043E 2 000 \u043C\u0435\u0441\u0442."),[...new Set(e)]}function Gf(n){return n.rotate&&n.l!==n.w?[[n.l,n.w,!1],[n.w,n.l,!0]]:[[n.l,n.w,!1]]}function Rc(n,e=Sn){return n.mass>e.mass?`\u041C\u0430\u0441\u0441\u0430 \u043E\u0434\u043D\u043E\u0433\u043E \u043C\u0435\u0441\u0442\u0430 \u043F\u0440\u0435\u0432\u044B\u0448\u0430\u0435\u0442 ${e.mass.toLocaleString("ru-RU")} \u043A\u0433`:n.h>e.h?`\u0412\u044B\u0441\u043E\u0442\u0430 \u043E\u0434\u043D\u043E\u0433\u043E \u043C\u0435\u0441\u0442\u0430 \u043F\u0440\u0435\u0432\u044B\u0448\u0430\u0435\u0442 ${e.h.toLocaleString("ru-RU")} \u043C\u043C`:Gf(n).some(([t,i])=>t<=e.l&&i<=e.w)?null:"\u0413\u0430\u0431\u0430\u0440\u0438\u0442\u044B \u043E\u0441\u043D\u043E\u0432\u0430\u043D\u0438\u044F \u043D\u0435 \u0432\u0445\u043E\u0434\u044F\u0442 \u0432 \u043F\u0443\u0441\u0442\u043E\u0439 \u043A\u0443\u0437\u043E\u0432 \u043F\u0440\u0438 \u0440\u0430\u0437\u0440\u0435\u0448\u0451\u043D\u043D\u044B\u0445 \u043E\u0440\u0438\u0435\u043D\u0442\u0430\u0446\u0438\u044F\u0445"}var Iy=[(n,e)=>e.l*e.w-n.l*n.w,(n,e)=>e.l*e.w*e.h-n.l*n.w*n.h,(n,e)=>e.mass-n.mass,(n,e)=>Math.max(e.l,e.w)-Math.max(n.l,n.w)];function Hf(n,e,t,i=!0,s=Sn,r="guillotine"){let a=[{x:0,y:0,l:s.l,w:s.w}],o=[],l={},c=0,u=0,d=0,h=n.map((f,g)=>({...f,index:g})).sort((f,g)=>Iy[e](f,g)||f.index-g.index);for(let f of h){let g=f.qty,x=Math.min(f.tiers,Math.floor(s.h/f.h));for(;g>0;){let m=Math.min(g,x,Math.floor((s.mass-c+1e-7)/f.mass));if(m<1)break;let p=null;for(let w=0;w<a.length;w++){let T=a[w];for(let[y,E,D]of Gf(f)){if(y>T.l||E>T.w)continue;let A=[Math.min(T.l-y,T.w-E),T.l*T.w-y*E,T.x,T.y,D?1:0];(!p||A.some((U,H)=>U<p.score[H]&&A.slice(0,H).every((V,z)=>V===p.score[z])))&&(p={fi:w,l:y,w:E,rotated:D,score:A})}}if(!p)break;let S=a[p.fi],{l:I,w:M,rotated:b}=p;if(r==="maxrects")Ly(a,{x:S.x,y:S.y,l:I,w:M});else{a.splice(p.fi,1);let w=S.l-I,T=S.w-M;t===0&&w>T||t===1&&w<=T?(w>0&&a.push({x:S.x+I,y:S.y,l:w,w:S.w}),T>0&&a.push({x:S.x,y:S.y+M,l:I,w:T})):(T>0&&a.push({x:S.x,y:S.y+M,l:S.l,w:T}),w>0&&a.push({x:S.x+I,y:S.y,l:w,w:M}))}if(i)for(let w=0;w<m;w++)o.push({id:f.id,name:f.name,color:f.color,x:S.x,y:S.y,z:w*f.h,l:I,w:M,h:f.h,mass:f.mass,rotated:b,tier:w+1});l[f.id]=(l[f.id]||0)+m,g-=m,d+=m,c+=m*f.mass,u+=m*f.l*f.w*f.h/1e9}}return{places:o,counts:l,count:d,mass:Math.round(c*1e3)/1e3,volume:u,volumePercent:u/(s.l*s.w*s.h/1e9)*100}}function Wf(n,e=!0,t=Sn){let i=null;for(let s=0;s<4;s++)for(let r=0;r<2;r++){let a=Hf(n,s,r,e,t);(!i||a.count>i.count||a.count===i.count&&a.volume>i.volume+1e-9)&&(i=a)}return i}function Py(n,e=Sn){if(n=hn(n),Rc(n,e))return 0;let t=Math.min(2e3,Math.floor(e.mass/n.mass),Math.floor(e.l*e.w*e.h/(n.l*n.w*n.h)));return Wf([{...n,qty:t}],!1,e).count}function Dy(n,e=Sn){let t=mn(n);if(t.length)throw new Error(t.join(`
`));let i=structuredClone(n),s=[],r=[];for(let o of i){let l=Rc(o,e);l?s.push({...o,reason:l,proven:!0}):r.push({...o})}let a=[];for(;r.some(o=>o.qty>0);){let o=Wf(r.filter(l=>l.qty>0),!0,e);if(o.count===0){for(let l of r.filter(c=>c.qty>0))s.push({...l,reason:"\u042D\u0432\u0440\u0438\u0441\u0442\u0438\u043A\u0430 \u043D\u0435 \u043D\u0430\u0448\u043B\u0430 \u0440\u0430\u0437\u043C\u0435\u0449\u0435\u043D\u0438\u0435; \u043D\u0435\u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u043D\u0435 \u0434\u043E\u043A\u0430\u0437\u0430\u043D\u0430",proven:!1});break}o.number=a.length+1,a.push(o);for(let l of r)l.qty-=o.counts[l.id]||0}return{source:i,trucks:a,unplaced:s,total:i.reduce((o,l)=>o+l.qty,0),placed:a.reduce((o,l)=>o+l.count,0),unplacedCount:s.reduce((o,l)=>o+l.qty,0),mass:a.reduce((o,l)=>o+l.mass,0),capacity:i.length===1?Py(i[0],e):null}}var tr={single:{name:"\u041E\u0434\u043D\u0430 \u043F\u0430\u0440\u0442\u0438\u044F",rows:[{name:"\u042F\u0449\u0438\u043A\u0438 \u0441 \u043A\u0440\u043E\u043D\u0448\u0442\u0435\u0439\u043D\u0430\u043C\u0438",l:1200,w:800,h:1e3,mass:350,qty:30,rotate:!0,tiers:1}]},mixed:{name:"\u0421\u043C\u0435\u0448\u0430\u043D\u043D\u044B\u0439 \u0433\u0440\u0443\u0437",rows:[{name:"\u041A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440\u044B \u0441 \u043A\u043E\u0440\u043F\u0443\u0441\u0430\u043C\u0438",l:1600,w:1200,h:1e3,mass:580,qty:12,rotate:!0,tiers:2},{name:"\u042F\u0449\u0438\u043A\u0438 \u0441 \u043A\u0440\u043E\u043D\u0448\u0442\u0435\u0439\u043D\u0430\u043C\u0438",l:1200,w:800,h:900,mass:320,qty:12,rotate:!0,tiers:2},{name:"\u041F\u0430\u043B\u043B\u0435\u0442\u044B \u0441 \u043A\u0440\u0435\u043F\u0435\u0436\u043E\u043C",l:1200,w:1e3,h:1100,mass:640,qty:6,rotate:!0,tiers:1}]},multi:{name:"\u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u0430\u044F \u043C\u0430\u0448\u0438\u043D\u0430",rows:[{name:"\u042F\u0449\u0438\u043A\u0438 \u0441 \u043A\u0440\u043E\u043D\u0448\u0442\u0435\u0439\u043D\u0430\u043C\u0438",l:1200,w:800,h:1e3,mass:350,qty:70,rotate:!0,tiers:1}]},limits:{name:"\u041E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u0438\u044F",rows:[{name:"\u041A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440\u044B \u0441 \u043A\u043E\u0440\u043F\u0443\u0441\u0430\u043C\u0438",l:1600,w:1200,h:1e3,mass:580,qty:10,rotate:!0,tiers:2},{name:"\u0412\u044B\u0441\u043E\u043A\u0438\u0439 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u043D\u044B\u0439 \u044F\u0449\u0438\u043A",l:1200,w:1e3,h:2900,mass:600,qty:2,rotate:!0,tiers:1},{name:"\u0422\u044F\u0436\u0451\u043B\u044B\u0439 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0431\u043B\u043E\u043A",l:2400,w:2e3,h:1900,mass:21e3,qty:1,rotate:!1,tiers:1}]}};function uh(n){return tr[n].rows.map((e,t)=>({...structuredClone(e),id:t+1,color:ai[t%ai.length]}))}function vi(n){let e=[];if(!n||typeof n!="object")return["\u0423\u043A\u0430\u0436\u0438\u0442\u0435 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u0430."];for(let t of["l","w","h"])(!Number.isSafeInteger(n[t])||n[t]<100||n[t]>1e5)&&e.push("\u0420\u0430\u0437\u043C\u0435\u0440\u044B \u043A\u0443\u0437\u043E\u0432\u0430: \u0446\u0435\u043B\u044B\u0435 \u043C\u0438\u043B\u043B\u0438\u043C\u0435\u0442\u0440\u044B \u043E\u0442 100 \u0434\u043E 100 000.");return(!Number.isFinite(n.mass)||n.mass<=0||n.mass>1e6||Math.abs(n.mass*1e3-Math.round(n.mass*1e3))>1e-6)&&e.push("\u0414\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u0430\u044F \u043C\u0430\u0441\u0441\u0430: \u043F\u043E\u043B\u043E\u0436\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u0447\u0438\u0441\u043B\u043E, \u0434\u043E \u0442\u0440\u0451\u0445 \u0437\u043D\u0430\u043A\u043E\u0432 \u043F\u043E\u0441\u043B\u0435 \u0437\u0430\u043F\u044F\u0442\u043E\u0439."),e}function Ly(n,e){let t=[];for(let s of n){if(e.x>=s.x+s.l||e.x+e.l<=s.x||e.y>=s.y+s.w||e.y+e.w<=s.y){t.push(s);continue}e.x>s.x&&t.push({x:s.x,y:s.y,l:e.x-s.x,w:s.w}),e.x+e.l<s.x+s.l&&t.push({x:e.x+e.l,y:s.y,l:s.x+s.l-e.x-e.l,w:s.w}),e.y>s.y&&t.push({x:s.x,y:s.y,l:s.l,w:e.y-s.y}),e.y+e.w<s.y+s.w&&t.push({x:s.x,y:e.y+e.w,l:s.l,w:s.y+s.w-e.y-e.w})}let i=t.filter((s,r)=>!t.some((a,o)=>o!==r&&s.x>=a.x&&s.y>=a.y&&s.x+s.l<=a.x+a.l&&s.y+s.w<=a.y+a.w&&(s.x!==a.x||s.y!==a.y||s.l!==a.l||s.w!==a.w||o<r)));n.splice(0,n.length,...i)}function Ny(n,e,t,i,s){let r=n.filter(o=>!Rc(o,e)).map(o=>({...o})),a=[];for(;r.some(o=>o.qty>0);){let o=Hf(r.filter(l=>l.qty>0),t,i,!0,e,s);if(!o.count)break;a.push(o);for(let l of r)l.qty-=o.counts[l.id]||0}return a}function hh(n,e=Sn){let t=0,i=0,s=0;for(let r of n){let a=hn(r);if(Rc(a,e))continue;t+=a.qty*a.mass,i+=a.qty*a.l*a.w*a.h;let o=Math.min(a.tiers,Math.floor(e.h/a.h),Math.floor(e.mass/a.mass));s+=Math.ceil(a.qty/o)*a.l*a.w}return Math.max(Math.ceil(t/e.mass-1e-10),Math.ceil(i/(e.l*e.w*e.h)-1e-10),Math.ceil(s/(e.l*e.w)-1e-10))}function $f(n,e=Sn){let t=mn(n).concat(vi(e));if(t.length)throw new Error(t.join(`
`));e={...e};let i=n.map(hn),s=Dy(i,e),r=hh(i,e),a=s.trucks.length,o=1,l="\u0410\u0434\u0430\u043F\u0442\u0438\u0432\u043D\u043E\u0435 \u0440\u0430\u0437\u0434\u0435\u043B\u0435\u043D\u0438\u0435 \u043F\u043E\u043B\u0430";if(a>r)for(let c of["guillotine","maxrects"]){for(let u=0;u<4;u++){for(let d=0;d<(c==="guillotine"?2:1);d++){let h=Ny(i,e,u,d,c);if(o++,h.reduce((f,g)=>f+g.count,0)===s.placed&&h.length<s.trucks.length&&(s.trucks=h,l=c==="maxrects"?"\u0421\u0432\u043E\u0431\u043E\u0434\u043D\u044B\u0435 \u043F\u0440\u044F\u043C\u043E\u0443\u0433\u043E\u043B\u044C\u043D\u0438\u043A\u0438":"\u0415\u0434\u0438\u043D\u044B\u0439 \u043F\u043E\u0440\u044F\u0434\u043E\u043A \u043F\u0430\u0440\u0442\u0438\u0438"),s.trucks.length===r)break}if(s.trucks.length===r)break}if(s.trucks.length===r)break}s.source=structuredClone(n),s.unplaced=s.unplaced.map(c=>({...structuredClone(n.find(u=>u.id===c.id)),qty:c.qty,reason:c.reason,proven:c.proven})),s.vehicle=e,s.diagnostics={evaluated:o,lowerBound:r,baselineTrucks:a,savedTrucks:a-s.trucks.length,method:l,boundReached:s.trucks.length===r};for(let c=0;c<s.trucks.length;c++){let u=s.trucks[c];u.number=c+1,u.floorArea=u.places.filter(d=>d.z===0).reduce((d,h)=>d+h.l*h.w,0),u.floorPercent=u.floorArea/(e.l*e.w)*100,u.massPercent=u.mass/e.mass*100;for(let d=0;d<u.places.length;d++)u.places[d].instanceId=`${c+1}:${d+1}`}return s}tr.optimized={name:"\u041F\u043E\u0438\u0441\u043A \u043B\u0443\u0447\u0448\u0435\u0439 \u0441\u0445\u0435\u043C\u044B",rows:[{name:"\u0412\u044B\u0441\u043E\u043A\u0438\u0435 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u043D\u044B\u0435 \u044F\u0449\u0438\u043A\u0438",l:800,w:1700,h:2200,mass:1159,qty:19,tiers:2,rotate:!0,color:"#79a9c6"},{name:"\u042F\u0449\u0438\u043A\u0438 \u0441 \u0443\u0437\u043B\u0430\u043C\u0438",l:1e3,w:600,h:1100,mass:1777,qty:13,tiers:2,rotate:!0,color:"#c88362"},{name:"\u0414\u043B\u0438\u043D\u043D\u044B\u0435 \u043A\u043E\u0440\u043E\u0431\u043A\u0438",l:2300,w:300,h:2400,mass:97,qty:22,tiers:1,rotate:!1,color:"#91a68c"},{name:"\u041A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440\u044B \u0441 \u0434\u0435\u0442\u0430\u043B\u044F\u043C\u0438",l:2e3,w:1e3,h:2100,mass:1029,qty:11,tiers:1,rotate:!0,color:"#d2bc88"}]};tr.palletized={name:"\u041A\u043E\u0440\u043E\u0431\u043A\u0438 \u043D\u0430 \u043F\u0430\u043B\u043B\u0435\u0442\u0430\u0445",rows:[{name:"\u041A\u043E\u0440\u043E\u0431\u043A\u0438 \u0441 \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0442\u0443\u044E\u0449\u0438\u043C\u0438",l:400,w:300,h:250,mass:12,qty:8,rotate:!0,tiers:1,pallet:{l:1200,w:800,h:144,mass:25,boxes:12}},{name:"\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u043D\u044B\u0435 \u044F\u0449\u0438\u043A\u0438",l:800,w:600,h:900,mass:160,qty:6,rotate:!0,tiers:1}]};Object.assign(tr.mixed.rows[2],{h:956,mass:615,pallet:{l:1200,w:1e3,h:144,mass:25,boxes:1}});function bi(n,e,t,i={}){let s=[],r=new Map,a=new Set,o=i.gap||0,l=new Map(e.map(x=>[x.id,x])),c=0,u=0,d=x=>{s.length<30&&s.push(x)},h=(x,m)=>Math.abs(x-m)<1e-6;if(!n||!Array.isArray(n.trucks)||!Array.isArray(n.unplaced))return{ok:!1,errors:["\u041D\u0435\u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u0430\u044F \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0430 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0430."]};["l","w","h","mass"].some(x=>n.vehicle?.[x]!==t[x])&&d("\u041F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u0430 \u0432 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0435 \u0438\u0437\u043C\u0435\u043D\u0438\u043B\u0438\u0441\u044C."),(!Array.isArray(n.source)||n.source.length!==e.length||e.some(x=>!n.source.some(m=>["id","name","l","w","h","mass","qty","rotate","tiers"].every(p=>m[p]===x[p])&&xo.every(p=>m.pallet?.[p]===x.pallet?.[p]))))&&d("\u0418\u0441\u0445\u043E\u0434\u043D\u0430\u044F \u043F\u0430\u0440\u0442\u0438\u044F \u0432 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0435 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0430.");for(let x of n.trucks){x.number!==n.trucks.indexOf(x)+1&&d("\u041D\u0443\u043C\u0435\u0440\u0430\u0446\u0438\u044F \u043C\u0430\u0448\u0438\u043D \u043D\u0430\u0440\u0443\u0448\u0435\u043D\u0430.");let m=0,p=0,S={},I=[];for(let b of x.places||[]){let w=l.get(b.id),T=w&&hn(w);if(!T){d("\u041D\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043D\u0430\u044F \u043F\u043E\u0437\u0438\u0446\u0438\u044F \u0433\u0440\u0443\u0437\u0430.");continue}w.pallet?(!xo.every(A=>b.pallet?.[A]===w.pallet[A])||!["l","w","h","mass"].every(A=>b.boxSpec?.[A]===w[A]))&&d("\u0421\u043E\u0441\u0442\u0430\u0432 \u0438\u043B\u0438 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B \u043F\u0430\u043B\u043B\u0435\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u043E\u0433\u043E \u043C\u0435\u0441\u0442\u0430 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u044B."):(b.pallet||b.boxSpec)&&d("\u041F\u0430\u043B\u043B\u0435\u0442\u0430 \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0430 \u043A \u043D\u0435\u043F\u0430\u043B\u043B\u0435\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u043E\u043C\u0443 \u043C\u0435\u0441\u0442\u0443."),["x","y","z","l","w","h","tier"].every(A=>Number.isSafeInteger(b[A]))||d("\u041A\u043E\u043E\u0440\u0434\u0438\u043D\u0430\u0442\u044B \u0438 \u0440\u0430\u0437\u043C\u0435\u0440\u044B \u0434\u043E\u043B\u0436\u043D\u044B \u0431\u044B\u0442\u044C \u0446\u0435\u043B\u044B\u043C\u0438 \u043C\u0438\u043B\u043B\u0438\u043C\u0435\u0442\u0440\u0430\u043C\u0438."),(b.x<o||b.y<o||b.z<0||b.x+b.l>t.l-o||b.y+b.w>t.w-o||b.z+b.h>t.h)&&d(`\u041C\u0430\u0448\u0438\u043D\u0430 ${x.number}: \u0432\u044B\u0445\u043E\u0434 \u0437\u0430 \u0433\u0440\u0430\u043D\u0438\u0446\u044B \u043A\u0443\u0437\u043E\u0432\u0430 \u0438\u043B\u0438 \u0437\u0430\u0437\u043E\u0440 \u0434\u043E \u0441\u0442\u0435\u043D\u044B.`);let y=b.rotated?[T.w,T.l]:[T.l,T.w];(b.l!==y[0]||b.w!==y[1]||b.h!==T.h||b.rotated&&!T.rotate||!h(b.mass,T.mass))&&d("\u0413\u0430\u0431\u0430\u0440\u0438\u0442\u044B, \u043C\u0430\u0441\u0441\u0430 \u0438\u043B\u0438 \u043F\u043E\u0432\u043E\u0440\u043E\u0442 \u043D\u0435 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044E\u0442 \u0438\u0441\u0445\u043E\u0434\u043D\u044B\u043C \u0434\u0430\u043D\u043D\u044B\u043C."),(b.tier<1||b.tier>T.tiers||b.z!==(b.tier-1)*T.h)&&d("\u041D\u0430\u0440\u0443\u0448\u0435\u043D\u044B \u043F\u0440\u0430\u0432\u0438\u043B\u0430 \u044F\u0440\u0443\u0441\u043D\u043E\u0441\u0442\u0438."),b.z>0&&!(x.places||[]).some(A=>A.id===b.id&&A.x===b.x&&A.y===b.y&&A.l===b.l&&A.w===b.w&&A.z+A.h===b.z)&&d("\u0412\u0435\u0440\u0445\u043D\u0435\u0435 \u043C\u0435\u0441\u0442\u043E \u043D\u0435 \u0438\u043C\u0435\u0435\u0442 \u043F\u043E\u043B\u043D\u043E\u0433\u043E \u043E\u043F\u0438\u0440\u0430\u043D\u0438\u044F \u043D\u0430 \u043E\u0434\u0438\u043D\u0430\u043A\u043E\u0432\u043E\u0435 \u043D\u0438\u0436\u043D\u0435\u0435 \u043C\u0435\u0441\u0442\u043E."),(!b.unitId||a.has(b.unitId))&&d("\u041F\u043E\u0432\u0442\u043E\u0440\u044F\u0435\u0442\u0441\u044F \u0438\u043B\u0438 \u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u0438\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440 \u0433\u0440\u0443\u0437\u043E\u0432\u043E\u0433\u043E \u043C\u0435\u0441\u0442\u0430."),a.add(b.unitId);let E=Number(String(b.unitId).split(":")[1]);(b.unitId!==`${T.id}:${E}`||!Number.isInteger(E)||E<1||E>T.qty)&&d("\u0418\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440 \u043C\u0435\u0441\u0442\u0430 \u043D\u0435 \u0432\u0445\u043E\u0434\u0438\u0442 \u0432 \u0438\u0441\u0445\u043E\u0434\u043D\u0443\u044E \u043F\u0430\u0440\u0442\u0438\u044E.");let D=x.places.find(A=>A.id===b.id&&A.x===b.x&&A.y===b.y&&A.z===0);(b.stackKey!==D?.unitId||b.instanceId!==b.unitId)&&d("\u0418\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440 \u0441\u0442\u043E\u043F\u043A\u0438 \u0438\u043B\u0438 \u044D\u043A\u0437\u0435\u043C\u043F\u043B\u044F\u0440\u0430 \u043D\u0435 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u0433\u0435\u043E\u043C\u0435\u0442\u0440\u0438\u0438."),r.set(b.id,(r.get(b.id)||0)+1),S[b.id]=(S[b.id]||0)+1,c++,m+=b.mass,p+=b.l*b.w*b.h/1e9,b.z===0&&I.push(b)}for(let b=0;b<(x.places||[]).length;b++)for(let w=b+1;w<x.places.length;w++){let T=x.places[b],y=x.places[w];T.x<y.x+y.l&&T.x+T.l>y.x&&T.y<y.y+y.w&&T.y+T.w>y.y&&T.z<y.z+y.h&&T.z+T.h>y.z&&d("\u041E\u0431\u043D\u0430\u0440\u0443\u0436\u0435\u043D\u043E \u043F\u0435\u0440\u0435\u0441\u0435\u0447\u0435\u043D\u0438\u0435 \u0433\u0440\u0443\u0437\u043E\u0432\u044B\u0445 \u043C\u0435\u0441\u0442.")}for(let b=0;b<I.length;b++)for(let w=b+1;w<I.length;w++){let T=I[b],y=I[w];T.x<y.x+y.l+o&&T.x+T.l+o>y.x&&T.y<y.y+y.w+o&&T.y+T.w+o>y.y&&d("\u041D\u0435\u0434\u043E\u0441\u0442\u0430\u0442\u043E\u0447\u043D\u044B\u0439 \u0433\u043E\u0440\u0438\u0437\u043E\u043D\u0442\u0430\u043B\u044C\u043D\u044B\u0439 \u0437\u0430\u0437\u043E\u0440 \u043C\u0435\u0436\u0434\u0443 \u0441\u0442\u043E\u043F\u043A\u0430\u043C\u0438.")}let M=I.reduce((b,w)=>b+w.l*w.w,0);if(m>t.mass+1e-6&&d("\u041F\u0440\u0435\u0432\u044B\u0448\u0435\u043D\u0430 \u0434\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u0430\u044F \u043C\u0430\u0441\u0441\u0430 \u0433\u0440\u0443\u0437\u0430."),(x.count!==x.places.length||!h(x.mass,m)||!h(x.volume,p)||x.floorArea!==M||!h(x.floorPercent,M/(t.l*t.w)*100)||!h(x.massPercent,m/t.mass*100)||!h(x.volumePercent,p/(t.l*t.w*t.h/1e9)*100))&&d("\u0418\u0442\u043E\u0433\u043E\u0432\u044B\u0435 \u043F\u043E\u043A\u0430\u0437\u0430\u0442\u0435\u043B\u0438 \u043C\u0430\u0448\u0438\u043D\u044B \u043D\u0435 \u0441\u043E\u0432\u043F\u0430\u0434\u0430\u044E\u0442 \u0441 \u0433\u0435\u043E\u043C\u0435\u0442\u0440\u0438\u0435\u0439."),n.modelVersion==="6.0.0"){let b=$i(x.places);["pallets","boxes","palletMass"].some(w=>!h(x[w],b[w]))&&d("\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u0435\u043B\u0438 \u043F\u0430\u043B\u043B\u0435\u0442 \u0438 \u043A\u043E\u0440\u043E\u0431\u043E\u043A \u043C\u0430\u0448\u0438\u043D\u044B \u043D\u0435\u0432\u0435\u0440\u043D\u044B.")}for(let b of e)(x.counts?.[b.id]||0)!==(S[b.id]||0)&&d("\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043C\u0435\u0441\u0442 \u043C\u0430\u0448\u0438\u043D\u044B \u043D\u0435 \u0441\u043E\u0432\u043F\u0430\u0434\u0430\u0435\u0442 \u0441 \u0435\u0451 \u0441\u043E\u0441\u0442\u0430\u0432\u043E\u043C.");u+=m}let f=new Map;for(let x of n.unplaced)(!l.has(x.id)||!Number.isInteger(x.qty)||x.qty<1)&&d("\u041D\u0435\u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u044B\u0439 \u043E\u0441\u0442\u0430\u0442\u043E\u043A \u043F\u0430\u0440\u0442\u0438\u0438."),f.set(x.id,(f.get(x.id)||0)+x.qty);for(let x of e)(r.get(x.id)||0)+(f.get(x.id)||0)!==x.qty&&d("\u0411\u0430\u043B\u0430\u043D\u0441 \u043F\u0430\u0440\u0442\u0438\u0438 \u043D\u0430\u0440\u0443\u0448\u0435\u043D: \u043C\u0435\u0441\u0442\u043E \u043F\u043E\u0442\u0435\u0440\u044F\u043D\u043E \u0438\u043B\u0438 \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u043E.");let g=e.reduce((x,m)=>x+m.qty,0);if((n.total!==g||n.placed!==c||n.unplacedCount!==g-c||!h(n.mass,u))&&d("\u0418\u0442\u043E\u0433\u0438 \u043F\u0430\u0440\u0442\u0438\u0438 \u043D\u0435 \u0441\u043E\u0432\u043F\u0430\u0434\u0430\u044E\u0442 \u0441 \u0441\u043E\u0441\u0442\u0430\u0432\u043E\u043C \u043C\u0430\u0448\u0438\u043D."),n.modelVersion==="6.0.0"){let x=$i(n.trucks.flatMap(m=>m.places));["pallets","boxes","palletMass"].some(m=>!h(n[m],x[m]))&&d("\u0418\u0442\u043E\u0433\u0438 \u043F\u0430\u043B\u043B\u0435\u0442 \u0438 \u043A\u043E\u0440\u043E\u0431\u043E\u043A \u043F\u0430\u0440\u0442\u0438\u0438 \u043D\u0435\u0432\u0435\u0440\u043D\u044B.")}for(let x of i.anchors||[]){let m=n.trucks.find(p=>p.number===x.truck);for(let p=0;p<x.units.length;p++){let S=m?.places.find(I=>I.unitId===x.units[p]);(!S||S.x!==x.x||S.y!==x.y||S.tier!==p+1||S.rotated!==x.rotated)&&d("\u0417\u0430\u043A\u0440\u0435\u043F\u043B\u0451\u043D\u043D\u0430\u044F \u0441\u0442\u043E\u043F\u043A\u0430 \u0438\u0437\u043C\u0435\u043D\u0438\u043B\u0430 \u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435.")}}return{ok:s.length===0,errors:[...new Set(s)],checkedPlaces:c,checks:["\u0411\u0430\u043B\u0430\u043D\u0441 \u043F\u0430\u0440\u0442\u0438\u0438","\u0413\u0440\u0430\u043D\u0438\u0446\u044B \u043A\u0443\u0437\u043E\u0432\u0430","\u041C\u0430\u0441\u0441\u0430 \u0433\u0440\u0443\u0437\u0430","\u041F\u043E\u0432\u043E\u0440\u043E\u0442 \u0438 \u044F\u0440\u0443\u0441\u044B","\u041F\u0435\u0440\u0435\u0441\u0435\u0447\u0435\u043D\u0438\u044F \u0438 \u0437\u0430\u0437\u043E\u0440\u044B","\u041F\u043E\u043B\u043D\u043E\u0435 \u043E\u043F\u0438\u0440\u0430\u043D\u0438\u0435","\u0417\u0430\u043A\u0440\u0435\u043F\u043B\u0451\u043D\u043D\u044B\u0435 \u0441\u0442\u043E\u043F\u043A\u0438","\u0418\u0442\u043E\u0433\u043E\u0432\u044B\u0435 \u043F\u043E\u043A\u0430\u0437\u0430\u0442\u0435\u043B\u0438","\u0421\u043E\u0441\u0442\u0430\u0432 \u043F\u0430\u043B\u043B\u0435\u0442","\u041C\u0430\u0441\u0441\u0430 \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0438"]}}var gn="6.0.0";function nr(n={}){let e=n.gap??0;if(!Number.isInteger(e)||e<0||e>200)throw new Error("\u0417\u0430\u0437\u043E\u0440: \u0446\u0435\u043B\u043E\u0435 \u0447\u0438\u0441\u043B\u043E \u043E\u0442 0 \u0434\u043E 200 \u043C\u043C.");let t=(n.anchors||[]).map(i=>({key:String(i.key),id:i.id,truck:i.truck,x:i.x,y:i.y,rotated:!!i.rotated,units:[...i.units||[]]}));if(t.length>2e3||t.some(i=>i.key!==i.units[0]||!Number.isInteger(i.id)||!Number.isInteger(i.truck)||i.truck<1||i.truck>2e3||![i.x,i.y].every(Number.isSafeInteger)||i.units.length<1||i.units.length>27||i.units.some(s=>typeof s!="string"||s.length>40)))throw new Error("\u041D\u0435\u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u044B\u0435 \u0437\u0430\u043A\u0440\u0435\u043F\u043B\u0451\u043D\u043D\u044B\u0435 \u0441\u0442\u043E\u043F\u043A\u0438.");return{gap:e,anchors:t}}var Yf=n=>n.rotate&&n.l!==n.w?[[n.l,n.w,!1],[n.w,n.l,!0]]:[[n.l,n.w,!1]],Zf=(n,e)=>n.x<e.x+e.l&&n.x+n.l>e.x&&n.y<e.y+e.w&&n.y+n.w>e.y;function Kf(n,e){let t=[];for(let i of n){if(!Zf(i,e)){t.push(i);continue}e.x>i.x&&t.push({...i,l:e.x-i.x}),e.x+e.l<i.x+i.l&&t.push({...i,x:e.x+e.l,l:i.x+i.l-e.x-e.l}),e.y>i.y&&t.push({...i,w:e.y-i.y}),e.y+e.w<i.y+i.w&&t.push({...i,y:e.y+e.w,w:i.y+i.w-e.y-e.w})}return t.filter((i,s)=>i.l>0&&i.w>0&&!t.some((r,a)=>a!==s&&i.x>=r.x&&i.y>=r.y&&i.x+i.l<=r.x+r.l&&i.y+i.w<=r.y+r.w&&(i.x!==r.x||i.y!==r.y||i.l!==r.l||i.w!==r.w||a<s)))}function Fy(n,e,t){let i=[{x:t,y:t,l:e.l-t,w:e.w-t}];for(let s of n.places.filter(r=>r.z===0))i=Kf(i,{x:s.x,y:s.y,l:s.l+t,w:s.w+t});return i}var fh=(n,e,t,i,s,r,a,o)=>({id:n.id,name:n.name,color:n.color,x:e,y:t,z:(a-1)*n.h,l:i,w:s,h:n.h,mass:n.mass,rotated:r,tier:a,unitId:o,instanceId:o}),Xf=()=>({places:[],mass:0});function dh(n,e,t,i,s,r){let a=Fy(n,t,i),o=[l=>l.l*l.w,l=>l.l*l.w*l.h,l=>l.mass,l=>Math.max(l.l,l.w)];for(let l of[...e].sort((c,u)=>o[s](u)-o[s](c)||c.id-u.id))for(;l.qty>0;){let c=Math.min(l.qty,l.tiers,Math.floor(t.h/l.h),Math.floor((t.mass-n.mass+1e-7)/l.mass));if(!c)break;let u=null;for(let x of a)for(let[m,p,S]of Yf(l)){if(m+i>x.l||p+i>x.w)continue;let I=[Math.min(x.l-m-i,x.w-p-i),x.l*x.w-m*p,x.x,x.y,S?1:0];(!u||I.some((M,b)=>M<u.score[b]&&I.slice(0,b).every((w,T)=>w===u.score[T])))&&(u={f:x,l:m,w:p,r:S,score:I})}if(!u)break;let{f:d,l:h,w:f,r:g}=u;for(let x=0;x<c;x++)n.places.push(fh(l,d.x,d.y,h,f,g,x+1,r.get(l.id).shift()));n.mass+=c*l.mass,l.qty-=c,a=Kf(a,{x:d.x,y:d.y,l:h+i,w:f+i})}return n}function Jf(n,e,t){return n.mass>e.mass?"\u041C\u0430\u0441\u0441\u0430 \u043E\u0434\u043D\u043E\u0433\u043E \u043C\u0435\u0441\u0442\u0430 \u043F\u0440\u0435\u0432\u044B\u0448\u0430\u0435\u0442 \u0434\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u0443\u044E \u043C\u0430\u0441\u0441\u0443 \u0433\u0440\u0443\u0437\u0430":n.h>e.h?"\u0412\u044B\u0441\u043E\u0442\u0430 \u043E\u0434\u043D\u043E\u0433\u043E \u043C\u0435\u0441\u0442\u0430 \u043F\u0440\u0435\u0432\u044B\u0448\u0430\u0435\u0442 \u0432\u044B\u0441\u043E\u0442\u0443 \u043A\u0443\u0437\u043E\u0432\u0430":Yf(n).some(([i,s])=>i<=e.l-2*t&&s<=e.w-2*t)?null:"\u041E\u0441\u043D\u043E\u0432\u0430\u043D\u0438\u0435 \u043D\u0435 \u0432\u0445\u043E\u0434\u0438\u0442 \u0432 \u043A\u0443\u0437\u043E\u0432 \u0441 \u0437\u0430\u0434\u0430\u043D\u043D\u044B\u043C \u0437\u0430\u0437\u043E\u0440\u043E\u043C \u0434\u043E \u0441\u0442\u0435\u043D"}function Uy(n,e,t,i){let s=[],r=new Set,a=structuredClone(n),o=new Map(n.map(u=>[u.id,u]));for(let u of t.anchors){let d=o.get(u.id);if(!d)throw new Error("\u0417\u0430\u043A\u0440\u0435\u043F\u043B\u0451\u043D\u043D\u0430\u044F \u0441\u0442\u043E\u043F\u043A\u0430 \u0441\u0441\u044B\u043B\u0430\u0435\u0442\u0441\u044F \u043D\u0430 \u0443\u0434\u0430\u043B\u0451\u043D\u043D\u044B\u0439 \u0433\u0440\u0443\u0437. \u0421\u043D\u0438\u043C\u0438\u0442\u0435 \u0437\u0430\u043A\u0440\u0435\u043F\u043B\u0435\u043D\u0438\u044F.");let h=u.rotated?d.w:d.l,f=u.rotated?d.l:d.w;if(u.rotated&&!d.rotate||u.units.length>d.tiers||u.units.length*d.h>e.h||u.x<t.gap||u.y<t.gap||u.x+h>e.l-t.gap||u.y+f>e.w-t.gap)throw new Error("\u0417\u0430\u043A\u0440\u0435\u043F\u043B\u0451\u043D\u043D\u0430\u044F \u0441\u0442\u043E\u043F\u043A\u0430 \u043D\u0435 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u0442\u0435\u043A\u0443\u0449\u0438\u043C \u0433\u0430\u0431\u0430\u0440\u0438\u0442\u0430\u043C, \u0437\u0430\u0437\u043E\u0440\u0443 \u0438\u043B\u0438 \u043F\u0440\u0430\u0432\u0438\u043B\u0430\u043C. \u0421\u043D\u0438\u043C\u0438\u0442\u0435 \u0437\u0430\u043A\u0440\u0435\u043F\u043B\u0435\u043D\u0438\u0435 \u043B\u0438\u0431\u043E \u0432\u0435\u0440\u043D\u0438\u0442\u0435 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B.");for(;s.length<u.truck;)s.push(Xf());let g=s[u.truck-1];for(let x of g.places.filter(m=>m.z===0))if(Zf({x:u.x,y:u.y,l:h+t.gap,w:f+t.gap},{...x,l:x.l+t.gap,w:x.w+t.gap}))throw new Error("\u0417\u0430\u043A\u0440\u0435\u043F\u043B\u0451\u043D\u043D\u044B\u0435 \u0441\u0442\u043E\u043F\u043A\u0438 \u043F\u0435\u0440\u0435\u0441\u0435\u043A\u0430\u044E\u0442\u0441\u044F \u0438\u043B\u0438 \u043D\u0430\u0440\u0443\u0448\u0430\u044E\u0442 \u0437\u0430\u0437\u043E\u0440.");if(u.units.forEach((x,m)=>{let p=Number(x.split(":")[1]);if(x!==`${d.id}:${p}`||p<1||p>d.qty||!Number.isInteger(p)||r.has(x))throw new Error("\u0417\u0430\u043A\u0440\u0435\u043F\u043B\u0451\u043D\u043D\u044B\u0435 \u043C\u0435\u0441\u0442\u0430 \u043D\u0435 \u0432\u0445\u043E\u0434\u044F\u0442 \u0432 \u0442\u0435\u043A\u0443\u0449\u0443\u044E \u043F\u0430\u0440\u0442\u0438\u044E.");r.add(x),g.places.push(fh(d,u.x,u.y,h,f,u.rotated,m+1,x)),g.mass+=d.mass}),g.mass>e.mass+1e-7)throw new Error("\u041C\u0430\u0441\u0441\u0430 \u0437\u0430\u043A\u0440\u0435\u043F\u043B\u0451\u043D\u043D\u044B\u0445 \u0441\u0442\u043E\u043F\u043E\u043A \u043F\u0440\u0435\u0432\u044B\u0448\u0430\u0435\u0442 \u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u0438\u0435 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u0430.")}let l=new Map(n.map(u=>[u.id,Array.from({length:u.qty},(d,h)=>`${u.id}:${h+1}`).filter(d=>!r.has(d))])),c=[];for(let u of a){u.qty=l.get(u.id).length;let d=Jf(u,e,t.gap);d&&u.qty&&(c.push({...u,reason:d,proven:!0}),u.qty=0)}for(let u of s)dh(u,a,e,t.gap,i,l);for(;a.some(u=>u.qty);){let u=dh(Xf(),a,e,t.gap,i,l);if(!u.places.length){for(let d of a.filter(h=>h.qty))c.push({...d,reason:"\u042D\u0432\u0440\u0438\u0441\u0442\u0438\u043A\u0430 \u043D\u0435 \u043D\u0430\u0448\u043B\u0430 \u0440\u0430\u0437\u043C\u0435\u0449\u0435\u043D\u0438\u0435; \u043D\u0435\u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u043D\u0435 \u0434\u043E\u043A\u0430\u0437\u0430\u043D\u0430",proven:!1});break}s.push(u)}return{source:structuredClone(n),vehicle:{...e},trucks:s.filter(u=>u.places.length),unplaced:c,total:n.reduce((u,d)=>u+d.qty,0),capacity:null}}function Rs(n){let e=i=>Array.isArray(i)?i.map(e):i&&typeof i=="object"?Object.fromEntries(Object.keys(i).filter(s=>s!=="name"&&s!=="color").sort().map(s=>[s,e(i[s])])):i,t=2166136261;for(let i of JSON.stringify(e(n)))t^=i.charCodeAt(0),t=Math.imul(t,16777619);return(t>>>0).toString(16).padStart(8,"0")}function qf(n,e,t,i){n.source=structuredClone(e),n.unplaced=n.unplaced.map(a=>({...structuredClone(e.find(o=>o.id===a.id)),qty:a.qty,reason:a.reason,proven:a.proven}));let s=new Map(e.map(a=>[a.id,new Set]));for(let a of n.trucks)for(let o of a.places)o.unitId&&s.get(o.id).add(o.unitId);let r=new Map(e.map(a=>[a.id,Array.from({length:a.qty},(o,l)=>`${a.id}:${l+1}`).filter(o=>!s.get(a.id).has(o))]));for(let a=0;a<n.trucks.length;a++){let o=n.trucks[a];o.number=a+1,o.count=o.places.length,o.counts={},o.mass=0,o.volume=0,o.floorArea=0;for(let l of o.places)Vc(l,e.find(c=>c.id===l.id)),l.unitId||=r.get(l.id).shift(),l.instanceId=l.unitId,l.stackKey=o.places.find(c=>c.id===l.id&&c.x===l.x&&c.y===l.y&&c.z===0)?.unitId||l.unitId,o.counts[l.id]=(o.counts[l.id]||0)+1,o.mass+=l.mass,o.volume+=l.l*l.w*l.h/1e9,l.z||(o.floorArea+=l.l*l.w);o.mass=Math.round(o.mass*1e3)/1e3,o.volumePercent=o.volume/(t.l*t.w*t.h/1e9)*100,o.floorPercent=o.floorArea/(t.l*t.w)*100,o.massPercent=o.mass/t.mass*100,Object.assign(o,$i(o.places))}for(let a of n.trucks)for(let o of a.places)o.stackKey=a.places.find(l=>l.id===o.id&&l.x===o.x&&l.y===o.y&&l.z===0).unitId;n.settings=structuredClone(i);for(let a of n.settings.anchors){let o=n.trucks.find(l=>l.places.some(c=>c.unitId===a.units[0]));a.truck=o?.number||a.truck}if(Object.assign(n,$i(n.trucks.flatMap(a=>a.places))),n.placed=n.trucks.reduce((a,o)=>a+o.count,0),n.unplacedCount=n.unplaced.reduce((a,o)=>a+o.qty,0),n.mass=n.trucks.reduce((a,o)=>a+o.mass,0),n.modelVersion=gn,n.planId=Rs({rows:e,vehicle:t,settings:n.settings,modelVersion:gn}),n.certificate=bi(n,e,t,n.settings),!n.certificate.ok)throw new Error("\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 \u043D\u0435 \u043F\u0440\u0438\u043D\u044F\u0442 \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u043E\u0439: "+n.certificate.errors.join(" "));return n}function Ic(n,e=Sn,t={}){let i=mn(n).concat(vi(e));if(i.length)throw new Error(i.join(`
`));let s=nr(t);if(2*s.gap>=Math.min(e.l,e.w))throw new Error("\u0417\u0430\u0437\u043E\u0440 \u043D\u0435 \u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 \u043F\u043E\u043B\u0435\u0437\u043D\u043E\u0433\u043E \u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0441\u0442\u0432\u0430 \u0432 \u043A\u0443\u0437\u043E\u0432\u0435.");if(!s.gap&&!s.anchors.length)return qf($f(n,e),n,e,s);let r=n.map(hn),a=null;for(let l=0;l<4;l++){let c=Uy(r,e,s,l);(!a||c.trucks.length<a.trucks.length)&&(a=c)}let o=hh(r.filter(l=>!Jf(l,e,s.gap)),{...e,l:e.l-2*s.gap,w:e.w-2*s.gap});return a.diagnostics={evaluated:4,lowerBound:o,baselineTrucks:a.trucks.length,savedTrucks:0,method:"\u0421\u0432\u043E\u0431\u043E\u0434\u043D\u044B\u0439 \u043F\u043E\u043B \u0441 \u0437\u0430\u043A\u0440\u0435\u043F\u043B\u0435\u043D\u0438\u044F\u043C\u0438 \u0438 \u0437\u0430\u0437\u043E\u0440\u043E\u043C",boundReached:a.trucks.length===o},qf(a,n,e,s)}function ir(n,e){return n.places.filter(t=>t.stackKey===e.stackKey).sort((t,i)=>t.tier-i.tier)}function ph(n,e){let t=ir(n,e),i=t[0];return{key:i.stackKey,id:i.id,truck:n.number,x:i.x,y:i.y,rotated:i.rotated,units:t.map(s=>s.unitId)}}function mh(n,e,t,i,s,r){let a=structuredClone(n),o=a.trucks[e],l=o.places.filter(f=>f.stackKey===t);if(!l.length)throw new Error("\u0421\u0442\u043E\u043F\u043A\u0430 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430.");for(let f of l)f.rotated!==r&&([f.l,f.w]=[f.w,f.l]),f.x=i,f.y=s,f.rotated=r;let c=a.source,u=a.vehicle;o.floorArea=o.places.filter(f=>!f.z).reduce((f,g)=>f+g.l*g.w,0),o.floorPercent=o.floorArea/(u.l*u.w)*100;let d=ph(o,l[0]);a.settings.anchors=a.settings.anchors.filter(f=>f.key!==t).concat(d);let h=bi(a,c,u,a.settings);return{ok:h.ok,errors:h.errors,result:a,anchor:d}}function jf(n,e,t,i={}){let s=e;e=hn(e);let r=i.gap||0,a=structuredClone(n),o=[],l=Math.min(2e3,Math.floor((t.mass-a.mass+1e-7)/e.mass)),c=0;for(let f of a.places.filter(g=>!g.z&&g.id===e.id)){let x=ir(a,f).length;for(;l&&x<e.tiers&&(x+1)*e.h<=t.h;){let m=fh(e,f.x,f.y,f.l,f.w,f.rotated,++x,`preview:${++c}`);a.places.push(m),o.push(m),a.mass+=e.mass,l--}}let u=a.places.length,d=[{...e,qty:l}],h=new Map([[e.id,Array.from({length:l},()=>`preview:${++c}`)]]);return dh(a,d,t,r,0,h),o.push(...a.places.slice(u)),o.forEach(f=>Vc(f,s)),{found:o.length,places:o,mass:o.length*e.mass,capped:o.length===2e3,provenMaximum:!1}}function gh(n){return n.places.filter(e=>!e.z).sort((e,t)=>e.x-t.x||e.y-t.y).map((e,t)=>({step:t+1,key:e.stackKey,name:e.name,x:e.x,y:e.y,places:ir(n,e),label:"\u041E\u0442 \u043F\u0435\u0440\u0435\u0434\u043D\u0435\u0439 \u0441\u0442\u0435\u043D\u043A\u0438 \u043A \u0434\u0432\u0435\u0440\u044F\u043C, \u0432\u043D\u0443\u0442\u0440\u0438 \u0441\u0442\u043E\u043F\u043A\u0438 \u2014 \u0441\u043D\u0438\u0437\u0443 \u0432\u0432\u0435\u0440\u0445"}))}var Qf='(()=>{var P=["l","w","h","mass","boxes"];function V(e){let t=e.pallet;if(t==null)return[];let r=[];if(typeof t!="object"||Array.isArray(t))return["\\u0423\\u043A\\u0430\\u0436\\u0438\\u0442\\u0435 \\u043F\\u0430\\u0440\\u0430\\u043C\\u0435\\u0442\\u0440\\u044B \\u043F\\u0430\\u043B\\u043B\\u0435\\u0442\\u044B."];for(let o of["l","w"])(!Number.isSafeInteger(t[o])||t[o]<100||t[o]>1e5)&&r.push("\\u041E\\u0441\\u043D\\u043E\\u0432\\u0430\\u043D\\u0438\\u0435 \\u043F\\u0430\\u043B\\u043B\\u0435\\u0442\\u044B: \\u0446\\u0435\\u043B\\u044B\\u0435 \\u043C\\u0438\\u043B\\u043B\\u0438\\u043C\\u0435\\u0442\\u0440\\u044B \\u043E\\u0442 100 \\u0434\\u043E 100 000.");if((!Number.isSafeInteger(t.h)||t.h<10||t.h>500)&&r.push("\\u0412\\u044B\\u0441\\u043E\\u0442\\u0430 \\u043F\\u0430\\u043B\\u043B\\u0435\\u0442\\u044B: \\u0446\\u0435\\u043B\\u043E\\u0435 \\u0447\\u0438\\u0441\\u043B\\u043E \\u043E\\u0442 10 \\u0434\\u043E 500 \\u043C\\u043C."),(!Number.isFinite(t.mass)||t.mass<=0||t.mass>1e3||Math.abs(t.mass*1e3-Math.round(t.mass*1e3))>1e-6)&&r.push("\\u041C\\u0430\\u0441\\u0441\\u0430 \\u043F\\u0443\\u0441\\u0442\\u043E\\u0439 \\u043F\\u0430\\u043B\\u043B\\u0435\\u0442\\u044B: \\u043E\\u0442 0,001 \\u0434\\u043E 1 000 \\u043A\\u0433, \\u0434\\u043E \\u0442\\u0440\\u0451\\u0445 \\u0437\\u043D\\u0430\\u043A\\u043E\\u0432."),(!Number.isSafeInteger(t.boxes)||t.boxes<1||t.boxes>2e3)&&r.push("\\u041D\\u0430 \\u043F\\u0430\\u043B\\u043B\\u0435\\u0442\\u0435: \\u043E\\u0442 1 \\u0434\\u043E 2 000 \\u043E\\u0434\\u0438\\u043D\\u0430\\u043A\\u043E\\u0432\\u044B\\u0445 \\u043A\\u043E\\u0440\\u043E\\u0431\\u043E\\u043A."),Number.isSafeInteger(e.l)&&Number.isSafeInteger(e.w)&&t.l>=100&&t.w>=100&&(e.l>t.l||e.w>t.w)&&r.push("\\u041A\\u043E\\u0440\\u043E\\u0431\\u043A\\u0430 \\u043D\\u0435 \\u0432\\u0445\\u043E\\u0434\\u0438\\u0442 \\u043D\\u0430 \\u043F\\u0430\\u043B\\u043B\\u0435\\u0442\\u0443 \\u0431\\u0435\\u0437 \\u0441\\u0432\\u0435\\u0441\\u0430. \\u0418\\u0437\\u043C\\u0435\\u043D\\u0438\\u0442\\u0435 \\u043E\\u0441\\u043D\\u043E\\u0432\\u0430\\u043D\\u0438\\u0435 \\u0438\\u043B\\u0438 \\u0440\\u0430\\u0437\\u043C\\u0435\\u0440\\u044B \\u043A\\u043E\\u0440\\u043E\\u0431\\u043A\\u0438."),!r.length&&Number.isFinite(e.h)&&Number.isFinite(e.mass)){let o=A(e);(o.h>1e5||o.mass>1e6)&&r.push("\\u041F\\u043E\\u0434\\u0433\\u043E\\u0442\\u043E\\u0432\\u043B\\u0435\\u043D\\u043D\\u043E\\u0435 \\u043C\\u0435\\u0441\\u0442\\u043E \\u043F\\u0440\\u0435\\u0432\\u044B\\u0448\\u0430\\u0435\\u0442 \\u0434\\u043E\\u043F\\u0443\\u0441\\u0442\\u0438\\u043C\\u044B\\u0435 \\u043F\\u0440\\u0435\\u0434\\u0435\\u043B\\u044B \\u0440\\u0430\\u0437\\u043C\\u0435\\u0440\\u043E\\u0432 \\u0438\\u043B\\u0438 \\u043C\\u0430\\u0441\\u0441\\u044B.")}return[...new Set(r)]}function rt(e){return e==null?null:Object.fromEntries(P.map(t=>[t,e[t]]))}function nt(e){let t=e.pallet;if(!t)return null;let r=Math.min(t.boxes,Math.floor(t.l/e.l)),o=Math.min(Math.floor(t.w/e.w),Math.ceil(t.boxes/Math.max(1,r))),s=r*o;return{columns:r,rows:o,perLayer:s,layers:s?Math.ceil(t.boxes/s):1/0,x:Math.floor((t.l-r*e.l)/2),y:Math.floor((t.w-o*e.w)/2)}}function A(e){if(!e.pallet)return{...e};let{pallet:t}=e,r=nt(e);return{id:e.id,name:e.name,color:e.color,l:t.l,w:t.w,h:t.h+r.layers*e.h,mass:Math.round((t.mass+t.boxes*e.mass)*1e3)/1e3,qty:e.qty,rotate:e.rotate,tiers:1}}function K(e,t){return t.pallet?(e.pallet=rt(t.pallet),e.boxSpec={l:t.l,w:t.w,h:t.h,mass:t.mass}):(delete e.pallet,delete e.boxSpec),e}function N(e){let t=0,r=0,o=0;for(let s of e)s.pallet?(t++,r+=s.pallet.boxes,o+=s.pallet.mass):r++;return{pallets:t,boxes:r,palletMass:Math.round(o*1e3)/1e3}}var E=Object.freeze({l:13600,w:2450,h:2700,mass:2e4});function $(e){let t=[];if(!Array.isArray(e)||e.length>50)return["\\u0414\\u043E\\u043F\\u0443\\u0441\\u043A\\u0430\\u0435\\u0442\\u0441\\u044F \\u0434\\u043E 50 \\u043F\\u043E\\u0437\\u0438\\u0446\\u0438\\u0439."];let r=new Set,o=0;for(let s of e){let m=typeof s.name=="string"?s.name.trim():"";(!m||m.length>80)&&t.push("\\u041D\\u0430\\u0437\\u0432\\u0430\\u043D\\u0438\\u0435 \\u043F\\u043E\\u0437\\u0438\\u0446\\u0438\\u0438: \\u043E\\u0442 1 \\u0434\\u043E 80 \\u0441\\u0438\\u043C\\u0432\\u043E\\u043B\\u043E\\u0432."),r.has(s.id)&&t.push("\\u0418\\u0434\\u0435\\u043D\\u0442\\u0438\\u0444\\u0438\\u043A\\u0430\\u0442\\u043E\\u0440\\u044B \\u043F\\u043E\\u0437\\u0438\\u0446\\u0438\\u0439 \\u0434\\u043E\\u043B\\u0436\\u043D\\u044B \\u0440\\u0430\\u0437\\u043B\\u0438\\u0447\\u0430\\u0442\\u044C\\u0441\\u044F."),r.add(s.id);for(let n of["l","w","h"])(!Number.isSafeInteger(s[n])||s[n]<100||s[n]>1e5)&&t.push(`${m||"\\u041F\\u043E\\u0437\\u0438\\u0446\\u0438\\u044F"}: \\u0440\\u0430\\u0437\\u043C\\u0435\\u0440\\u044B \\u2014 \\u0446\\u0435\\u043B\\u044B\\u0435 \\u043C\\u0438\\u043B\\u043B\\u0438\\u043C\\u0435\\u0442\\u0440\\u044B \\u043E\\u0442 100 \\u0434\\u043E 100 000.`);(!Number.isFinite(s.mass)||s.mass<=0||s.mass>1e6||Math.abs(s.mass*1e3-Math.round(s.mass*1e3))>1e-6)&&t.push(`${m}: \\u043C\\u0430\\u0441\\u0441\\u0430 \\u2014 \\u043E\\u0442 0,001 \\u0434\\u043E 1 000 000 \\u043A\\u0433, \\u0434\\u043E \\u0442\\u0440\\u0451\\u0445 \\u0437\\u043D\\u0430\\u043A\\u043E\\u0432 \\u043F\\u043E\\u0441\\u043B\\u0435 \\u0437\\u0430\\u043F\\u044F\\u0442\\u043E\\u0439.`),(!Number.isSafeInteger(s.qty)||s.qty<1||s.qty>2e3)&&t.push(`${m}: \\u043A\\u043E\\u043B\\u0438\\u0447\\u0435\\u0441\\u0442\\u0432\\u043E \\u2014 \\u0446\\u0435\\u043B\\u043E\\u0435 \\u0447\\u0438\\u0441\\u043B\\u043E \\u043E\\u0442 1 \\u0434\\u043E 2 000.`),(!Number.isSafeInteger(s.tiers)||s.tiers<1||s.tiers>27)&&t.push(`${m}: \\u0447\\u0438\\u0441\\u043B\\u043E \\u044F\\u0440\\u0443\\u0441\\u043E\\u0432 \\u2014 \\u043E\\u0442 1 \\u0434\\u043E 27.`),t.push(...V(s).map(n=>`${m}: ${n}`)),typeof s.rotate!="boolean"&&t.push(`${m}: \\u0443\\u043A\\u0430\\u0436\\u0438\\u0442\\u0435 \\u0434\\u043E\\u043F\\u0443\\u0441\\u0442\\u0438\\u043C\\u043E\\u0441\\u0442\\u044C \\u043F\\u043E\\u0432\\u043E\\u0440\\u043E\\u0442\\u0430.`),o+=s.qty}return o>2e3&&t.push("\\u0412 \\u043E\\u0434\\u043D\\u043E\\u0439 \\u043F\\u0430\\u0440\\u0442\\u0438\\u0438 \\u0434\\u043E\\u043F\\u0443\\u0441\\u043A\\u0430\\u0435\\u0442\\u0441\\u044F \\u0434\\u043E 2 000 \\u043C\\u0435\\u0441\\u0442."),[...new Set(t)]}function T(e){return e.rotate&&e.l!==e.w?[[e.l,e.w,!1],[e.w,e.l,!0]]:[[e.l,e.w,!1]]}function L(e,t=E){return e.mass>t.mass?`\\u041C\\u0430\\u0441\\u0441\\u0430 \\u043E\\u0434\\u043D\\u043E\\u0433\\u043E \\u043C\\u0435\\u0441\\u0442\\u0430 \\u043F\\u0440\\u0435\\u0432\\u044B\\u0448\\u0430\\u0435\\u0442 ${t.mass.toLocaleString("ru-RU")} \\u043A\\u0433`:e.h>t.h?`\\u0412\\u044B\\u0441\\u043E\\u0442\\u0430 \\u043E\\u0434\\u043D\\u043E\\u0433\\u043E \\u043C\\u0435\\u0441\\u0442\\u0430 \\u043F\\u0440\\u0435\\u0432\\u044B\\u0448\\u0430\\u0435\\u0442 ${t.h.toLocaleString("ru-RU")} \\u043C\\u043C`:T(e).some(([r,o])=>r<=t.l&&o<=t.w)?null:"\\u0413\\u0430\\u0431\\u0430\\u0440\\u0438\\u0442\\u044B \\u043E\\u0441\\u043D\\u043E\\u0432\\u0430\\u043D\\u0438\\u044F \\u043D\\u0435 \\u0432\\u0445\\u043E\\u0434\\u044F\\u0442 \\u0432 \\u043F\\u0443\\u0441\\u0442\\u043E\\u0439 \\u043A\\u0443\\u0437\\u043E\\u0432 \\u043F\\u0440\\u0438 \\u0440\\u0430\\u0437\\u0440\\u0435\\u0448\\u0451\\u043D\\u043D\\u044B\\u0445 \\u043E\\u0440\\u0438\\u0435\\u043D\\u0442\\u0430\\u0446\\u0438\\u044F\\u0445"}var at=[(e,t)=>t.l*t.w-e.l*e.w,(e,t)=>t.l*t.w*t.h-e.l*e.w*e.h,(e,t)=>t.mass-e.mass,(e,t)=>Math.max(t.l,t.w)-Math.max(e.l,e.w)];function _(e,t,r,o=!0,s=E,m="guillotine"){let n=[{x:0,y:0,l:s.l,w:s.w}],a=[],l={},h=0,c=0,f=0,g=e.map((w,I)=>({...w,index:I})).sort((w,I)=>at[t](w,I)||w.index-I.index);for(let w of g){let I=w.qty,i=Math.min(w.tiers,Math.floor(s.h/w.h));for(;I>0;){let y=Math.min(I,i,Math.floor((s.mass-h+1e-7)/w.mass));if(y<1)break;let x=null;for(let d=0;d<n.length;d++){let p=n[d];for(let[b,z,C]of T(w)){if(b>p.l||z>p.w)continue;let M=[Math.min(p.l-b,p.w-z),p.l*p.w-b*z,p.x,p.y,C?1:0];(!x||M.some((et,R)=>et<x.score[R]&&M.slice(0,R).every((st,ot)=>st===x.score[ot])))&&(x={fi:d,l:b,w:z,rotated:C,score:M})}}if(!x)break;let k=n[x.fi],{l:q,w:S,rotated:u}=x;if(m==="maxrects")ct(n,{x:k.x,y:k.y,l:q,w:S});else{n.splice(x.fi,1);let d=k.l-q,p=k.w-S;r===0&&d>p||r===1&&d<=p?(d>0&&n.push({x:k.x+q,y:k.y,l:d,w:k.w}),p>0&&n.push({x:k.x,y:k.y+S,l:q,w:p})):(p>0&&n.push({x:k.x,y:k.y+S,l:k.l,w:p}),d>0&&n.push({x:k.x+q,y:k.y,l:d,w:S}))}if(o)for(let d=0;d<y;d++)a.push({id:w.id,name:w.name,color:w.color,x:k.x,y:k.y,z:d*w.h,l:q,w:S,h:w.h,mass:w.mass,rotated:u,tier:d+1});l[w.id]=(l[w.id]||0)+y,I-=y,f+=y,h+=y*w.mass,c+=y*w.l*w.w*w.h/1e9}}return{places:a,counts:l,count:f,mass:Math.round(h*1e3)/1e3,volume:c,volumePercent:c/(s.l*s.w*s.h/1e9)*100}}function B(e,t=!0,r=E){let o=null;for(let s=0;s<4;s++)for(let m=0;m<2;m++){let n=_(e,s,m,t,r);(!o||n.count>o.count||n.count===o.count&&n.volume>o.volume+1e-9)&&(o=n)}return o}function lt(e,t=E){if(e=A(e),L(e,t))return 0;let r=Math.min(2e3,Math.floor(t.mass/e.mass),Math.floor(t.l*t.w*t.h/(e.l*e.w*e.h)));return B([{...e,qty:r}],!1,t).count}function it(e,t=E){let r=$(e);if(r.length)throw new Error(r.join(`\n`));let o=structuredClone(e),s=[],m=[];for(let a of o){let l=L(a,t);l?s.push({...a,reason:l,proven:!0}):m.push({...a})}let n=[];for(;m.some(a=>a.qty>0);){let a=B(m.filter(l=>l.qty>0),!0,t);if(a.count===0){for(let l of m.filter(h=>h.qty>0))s.push({...l,reason:"\\u042D\\u0432\\u0440\\u0438\\u0441\\u0442\\u0438\\u043A\\u0430 \\u043D\\u0435 \\u043D\\u0430\\u0448\\u043B\\u0430 \\u0440\\u0430\\u0437\\u043C\\u0435\\u0449\\u0435\\u043D\\u0438\\u0435; \\u043D\\u0435\\u0432\\u043E\\u0437\\u043C\\u043E\\u0436\\u043D\\u043E\\u0441\\u0442\\u044C \\u043D\\u0435 \\u0434\\u043E\\u043A\\u0430\\u0437\\u0430\\u043D\\u0430",proven:!1});break}a.number=n.length+1,n.push(a);for(let l of m)l.qty-=a.counts[l.id]||0}return{source:o,trucks:n,unplaced:s,total:o.reduce((a,l)=>a+l.qty,0),placed:n.reduce((a,l)=>a+l.count,0),unplacedCount:s.reduce((a,l)=>a+l.qty,0),mass:n.reduce((a,l)=>a+l.mass,0),capacity:o.length===1?lt(o[0],t):null}}var j={single:{name:"\\u041E\\u0434\\u043D\\u0430 \\u043F\\u0430\\u0440\\u0442\\u0438\\u044F",rows:[{name:"\\u042F\\u0449\\u0438\\u043A\\u0438 \\u0441 \\u043A\\u0440\\u043E\\u043D\\u0448\\u0442\\u0435\\u0439\\u043D\\u0430\\u043C\\u0438",l:1200,w:800,h:1e3,mass:350,qty:30,rotate:!0,tiers:1}]},mixed:{name:"\\u0421\\u043C\\u0435\\u0448\\u0430\\u043D\\u043D\\u044B\\u0439 \\u0433\\u0440\\u0443\\u0437",rows:[{name:"\\u041A\\u043E\\u043D\\u0442\\u0435\\u0439\\u043D\\u0435\\u0440\\u044B \\u0441 \\u043A\\u043E\\u0440\\u043F\\u0443\\u0441\\u0430\\u043C\\u0438",l:1600,w:1200,h:1e3,mass:580,qty:12,rotate:!0,tiers:2},{name:"\\u042F\\u0449\\u0438\\u043A\\u0438 \\u0441 \\u043A\\u0440\\u043E\\u043D\\u0448\\u0442\\u0435\\u0439\\u043D\\u0430\\u043C\\u0438",l:1200,w:800,h:900,mass:320,qty:12,rotate:!0,tiers:2},{name:"\\u041F\\u0430\\u043B\\u043B\\u0435\\u0442\\u044B \\u0441 \\u043A\\u0440\\u0435\\u043F\\u0435\\u0436\\u043E\\u043C",l:1200,w:1e3,h:1100,mass:640,qty:6,rotate:!0,tiers:1}]},multi:{name:"\\u0414\\u043E\\u043F\\u043E\\u043B\\u043D\\u0438\\u0442\\u0435\\u043B\\u044C\\u043D\\u0430\\u044F \\u043C\\u0430\\u0448\\u0438\\u043D\\u0430",rows:[{name:"\\u042F\\u0449\\u0438\\u043A\\u0438 \\u0441 \\u043A\\u0440\\u043E\\u043D\\u0448\\u0442\\u0435\\u0439\\u043D\\u0430\\u043C\\u0438",l:1200,w:800,h:1e3,mass:350,qty:70,rotate:!0,tiers:1}]},limits:{name:"\\u041E\\u0433\\u0440\\u0430\\u043D\\u0438\\u0447\\u0435\\u043D\\u0438\\u044F",rows:[{name:"\\u041A\\u043E\\u043D\\u0442\\u0435\\u0439\\u043D\\u0435\\u0440\\u044B \\u0441 \\u043A\\u043E\\u0440\\u043F\\u0443\\u0441\\u0430\\u043C\\u0438",l:1600,w:1200,h:1e3,mass:580,qty:10,rotate:!0,tiers:2},{name:"\\u0412\\u044B\\u0441\\u043E\\u043A\\u0438\\u0439 \\u0442\\u0440\\u0430\\u043D\\u0441\\u043F\\u043E\\u0440\\u0442\\u043D\\u044B\\u0439 \\u044F\\u0449\\u0438\\u043A",l:1200,w:1e3,h:2900,mass:600,qty:2,rotate:!0,tiers:1},{name:"\\u0422\\u044F\\u0436\\u0451\\u043B\\u044B\\u0439 \\u0442\\u0435\\u0445\\u043D\\u043E\\u043B\\u043E\\u0433\\u0438\\u0447\\u0435\\u0441\\u043A\\u0438\\u0439 \\u0431\\u043B\\u043E\\u043A",l:2400,w:2e3,h:1900,mass:21e3,qty:1,rotate:!1,tiers:1}]}};function O(e){let t=[];if(!e||typeof e!="object")return["\\u0423\\u043A\\u0430\\u0436\\u0438\\u0442\\u0435 \\u043F\\u0430\\u0440\\u0430\\u043C\\u0435\\u0442\\u0440\\u044B \\u0442\\u0440\\u0430\\u043D\\u0441\\u043F\\u043E\\u0440\\u0442\\u0430."];for(let r of["l","w","h"])(!Number.isSafeInteger(e[r])||e[r]<100||e[r]>1e5)&&t.push("\\u0420\\u0430\\u0437\\u043C\\u0435\\u0440\\u044B \\u043A\\u0443\\u0437\\u043E\\u0432\\u0430: \\u0446\\u0435\\u043B\\u044B\\u0435 \\u043C\\u0438\\u043B\\u043B\\u0438\\u043C\\u0435\\u0442\\u0440\\u044B \\u043E\\u0442 100 \\u0434\\u043E 100 000.");return(!Number.isFinite(e.mass)||e.mass<=0||e.mass>1e6||Math.abs(e.mass*1e3-Math.round(e.mass*1e3))>1e-6)&&t.push("\\u0414\\u043E\\u043F\\u0443\\u0441\\u0442\\u0438\\u043C\\u0430\\u044F \\u043C\\u0430\\u0441\\u0441\\u0430: \\u043F\\u043E\\u043B\\u043E\\u0436\\u0438\\u0442\\u0435\\u043B\\u044C\\u043D\\u043E\\u0435 \\u0447\\u0438\\u0441\\u043B\\u043E, \\u0434\\u043E \\u0442\\u0440\\u0451\\u0445 \\u0437\\u043D\\u0430\\u043A\\u043E\\u0432 \\u043F\\u043E\\u0441\\u043B\\u0435 \\u0437\\u0430\\u043F\\u044F\\u0442\\u043E\\u0439."),t}function ct(e,t){let r=[];for(let s of e){if(t.x>=s.x+s.l||t.x+t.l<=s.x||t.y>=s.y+s.w||t.y+t.w<=s.y){r.push(s);continue}t.x>s.x&&r.push({x:s.x,y:s.y,l:t.x-s.x,w:s.w}),t.x+t.l<s.x+s.l&&r.push({x:t.x+t.l,y:s.y,l:s.x+s.l-t.x-t.l,w:s.w}),t.y>s.y&&r.push({x:s.x,y:s.y,l:s.l,w:t.y-s.y}),t.y+t.w<s.y+s.w&&r.push({x:s.x,y:t.y+t.w,l:s.l,w:s.y+s.w-t.y-t.w})}let o=r.filter((s,m)=>!r.some((n,a)=>a!==m&&s.x>=n.x&&s.y>=n.y&&s.x+s.l<=n.x+n.l&&s.y+s.w<=n.y+n.w&&(s.x!==n.x||s.y!==n.y||s.l!==n.l||s.w!==n.w||a<m)));e.splice(0,e.length,...o)}function ut(e,t,r,o,s){let m=e.filter(a=>!L(a,t)).map(a=>({...a})),n=[];for(;m.some(a=>a.qty>0);){let a=_(m.filter(l=>l.qty>0),r,o,!0,t,s);if(!a.count)break;n.push(a);for(let l of m)l.qty-=a.counts[l.id]||0}return n}function F(e,t=E){let r=0,o=0,s=0;for(let m of e){let n=A(m);if(L(n,t))continue;r+=n.qty*n.mass,o+=n.qty*n.l*n.w*n.h;let a=Math.min(n.tiers,Math.floor(t.h/n.h),Math.floor(t.mass/n.mass));s+=Math.ceil(n.qty/a)*n.l*n.w}return Math.max(Math.ceil(r/t.mass-1e-10),Math.ceil(o/(t.l*t.w*t.h)-1e-10),Math.ceil(s/(t.l*t.w)-1e-10))}function D(e,t=E){let r=$(e).concat(O(t));if(r.length)throw new Error(r.join(`\n`));t={...t};let o=e.map(A),s=it(o,t),m=F(o,t),n=s.trucks.length,a=1,l="\\u0410\\u0434\\u0430\\u043F\\u0442\\u0438\\u0432\\u043D\\u043E\\u0435 \\u0440\\u0430\\u0437\\u0434\\u0435\\u043B\\u0435\\u043D\\u0438\\u0435 \\u043F\\u043E\\u043B\\u0430";if(n>m)for(let h of["guillotine","maxrects"]){for(let c=0;c<4;c++){for(let f=0;f<(h==="guillotine"?2:1);f++){let g=ut(o,t,c,f,h);if(a++,g.reduce((w,I)=>w+I.count,0)===s.placed&&g.length<s.trucks.length&&(s.trucks=g,l=h==="maxrects"?"\\u0421\\u0432\\u043E\\u0431\\u043E\\u0434\\u043D\\u044B\\u0435 \\u043F\\u0440\\u044F\\u043C\\u043E\\u0443\\u0433\\u043E\\u043B\\u044C\\u043D\\u0438\\u043A\\u0438":"\\u0415\\u0434\\u0438\\u043D\\u044B\\u0439 \\u043F\\u043E\\u0440\\u044F\\u0434\\u043E\\u043A \\u043F\\u0430\\u0440\\u0442\\u0438\\u0438"),s.trucks.length===m)break}if(s.trucks.length===m)break}if(s.trucks.length===m)break}s.source=structuredClone(e),s.unplaced=s.unplaced.map(h=>({...structuredClone(e.find(c=>c.id===h.id)),qty:h.qty,reason:h.reason,proven:h.proven})),s.vehicle=t,s.diagnostics={evaluated:a,lowerBound:m,baselineTrucks:n,savedTrucks:n-s.trucks.length,method:l,boundReached:s.trucks.length===m};for(let h=0;h<s.trucks.length;h++){let c=s.trucks[h];c.number=h+1,c.floorArea=c.places.filter(f=>f.z===0).reduce((f,g)=>f+g.l*g.w,0),c.floorPercent=c.floorArea/(t.l*t.w)*100,c.massPercent=c.mass/t.mass*100;for(let f=0;f<c.places.length;f++)c.places[f].instanceId=`${h+1}:${f+1}`}return s}j.optimized={name:"\\u041F\\u043E\\u0438\\u0441\\u043A \\u043B\\u0443\\u0447\\u0448\\u0435\\u0439 \\u0441\\u0445\\u0435\\u043C\\u044B",rows:[{name:"\\u0412\\u044B\\u0441\\u043E\\u043A\\u0438\\u0435 \\u0442\\u0440\\u0430\\u043D\\u0441\\u043F\\u043E\\u0440\\u0442\\u043D\\u044B\\u0435 \\u044F\\u0449\\u0438\\u043A\\u0438",l:800,w:1700,h:2200,mass:1159,qty:19,tiers:2,rotate:!0,color:"#79a9c6"},{name:"\\u042F\\u0449\\u0438\\u043A\\u0438 \\u0441 \\u0443\\u0437\\u043B\\u0430\\u043C\\u0438",l:1e3,w:600,h:1100,mass:1777,qty:13,tiers:2,rotate:!0,color:"#c88362"},{name:"\\u0414\\u043B\\u0438\\u043D\\u043D\\u044B\\u0435 \\u043A\\u043E\\u0440\\u043E\\u0431\\u043A\\u0438",l:2300,w:300,h:2400,mass:97,qty:22,tiers:1,rotate:!1,color:"#91a68c"},{name:"\\u041A\\u043E\\u043D\\u0442\\u0435\\u0439\\u043D\\u0435\\u0440\\u044B \\u0441 \\u0434\\u0435\\u0442\\u0430\\u043B\\u044F\\u043C\\u0438",l:2e3,w:1e3,h:2100,mass:1029,qty:11,tiers:1,rotate:!0,color:"#d2bc88"}]};j.palletized={name:"\\u041A\\u043E\\u0440\\u043E\\u0431\\u043A\\u0438 \\u043D\\u0430 \\u043F\\u0430\\u043B\\u043B\\u0435\\u0442\\u0430\\u0445",rows:[{name:"\\u041A\\u043E\\u0440\\u043E\\u0431\\u043A\\u0438 \\u0441 \\u043A\\u043E\\u043C\\u043F\\u043B\\u0435\\u043A\\u0442\\u0443\\u044E\\u0449\\u0438\\u043C\\u0438",l:400,w:300,h:250,mass:12,qty:8,rotate:!0,tiers:1,pallet:{l:1200,w:800,h:144,mass:25,boxes:12}},{name:"\\u0422\\u0440\\u0430\\u043D\\u0441\\u043F\\u043E\\u0440\\u0442\\u043D\\u044B\\u0435 \\u044F\\u0449\\u0438\\u043A\\u0438",l:800,w:600,h:900,mass:160,qty:6,rotate:!0,tiers:1}]};Object.assign(j.mixed.rows[2],{h:956,mass:615,pallet:{l:1200,w:1e3,h:144,mass:25,boxes:1}});function H(e,t,r,o={}){let s=[],m=new Map,n=new Set,a=o.gap||0,l=new Map(t.map(i=>[i.id,i])),h=0,c=0,f=i=>{s.length<30&&s.push(i)},g=(i,y)=>Math.abs(i-y)<1e-6;if(!e||!Array.isArray(e.trucks)||!Array.isArray(e.unplaced))return{ok:!1,errors:["\\u041D\\u0435\\u043A\\u043E\\u0440\\u0440\\u0435\\u043A\\u0442\\u043D\\u0430\\u044F \\u0441\\u0442\\u0440\\u0443\\u043A\\u0442\\u0443\\u0440\\u0430 \\u0440\\u0435\\u0437\\u0443\\u043B\\u044C\\u0442\\u0430\\u0442\\u0430."]};["l","w","h","mass"].some(i=>e.vehicle?.[i]!==r[i])&&f("\\u041F\\u0430\\u0440\\u0430\\u043C\\u0435\\u0442\\u0440\\u044B \\u0442\\u0440\\u0430\\u043D\\u0441\\u043F\\u043E\\u0440\\u0442\\u0430 \\u0432 \\u0440\\u0435\\u0437\\u0443\\u043B\\u044C\\u0442\\u0430\\u0442\\u0435 \\u0438\\u0437\\u043C\\u0435\\u043D\\u0438\\u043B\\u0438\\u0441\\u044C."),(!Array.isArray(e.source)||e.source.length!==t.length||t.some(i=>!e.source.some(y=>["id","name","l","w","h","mass","qty","rotate","tiers"].every(x=>y[x]===i[x])&&P.every(x=>y.pallet?.[x]===i.pallet?.[x]))))&&f("\\u0418\\u0441\\u0445\\u043E\\u0434\\u043D\\u0430\\u044F \\u043F\\u0430\\u0440\\u0442\\u0438\\u044F \\u0432 \\u0440\\u0435\\u0437\\u0443\\u043B\\u044C\\u0442\\u0430\\u0442\\u0435 \\u0438\\u0437\\u043C\\u0435\\u043D\\u0435\\u043D\\u0430.");for(let i of e.trucks){i.number!==e.trucks.indexOf(i)+1&&f("\\u041D\\u0443\\u043C\\u0435\\u0440\\u0430\\u0446\\u0438\\u044F \\u043C\\u0430\\u0448\\u0438\\u043D \\u043D\\u0430\\u0440\\u0443\\u0448\\u0435\\u043D\\u0430.");let y=0,x=0,k={},q=[];for(let u of i.places||[]){let d=l.get(u.id),p=d&&A(d);if(!p){f("\\u041D\\u0435\\u0438\\u0437\\u0432\\u0435\\u0441\\u0442\\u043D\\u0430\\u044F \\u043F\\u043E\\u0437\\u0438\\u0446\\u0438\\u044F \\u0433\\u0440\\u0443\\u0437\\u0430.");continue}d.pallet?(!P.every(M=>u.pallet?.[M]===d.pallet[M])||!["l","w","h","mass"].every(M=>u.boxSpec?.[M]===d[M]))&&f("\\u0421\\u043E\\u0441\\u0442\\u0430\\u0432 \\u0438\\u043B\\u0438 \\u043F\\u0430\\u0440\\u0430\\u043C\\u0435\\u0442\\u0440\\u044B \\u043F\\u0430\\u043B\\u043B\\u0435\\u0442\\u0438\\u0440\\u043E\\u0432\\u0430\\u043D\\u043D\\u043E\\u0433\\u043E \\u043C\\u0435\\u0441\\u0442\\u0430 \\u0438\\u0437\\u043C\\u0435\\u043D\\u0435\\u043D\\u044B."):(u.pallet||u.boxSpec)&&f("\\u041F\\u0430\\u043B\\u043B\\u0435\\u0442\\u0430 \\u0434\\u043E\\u0431\\u0430\\u0432\\u043B\\u0435\\u043D\\u0430 \\u043A \\u043D\\u0435\\u043F\\u0430\\u043B\\u043B\\u0435\\u0442\\u0438\\u0440\\u043E\\u0432\\u0430\\u043D\\u043D\\u043E\\u043C\\u0443 \\u043C\\u0435\\u0441\\u0442\\u0443."),["x","y","z","l","w","h","tier"].every(M=>Number.isSafeInteger(u[M]))||f("\\u041A\\u043E\\u043E\\u0440\\u0434\\u0438\\u043D\\u0430\\u0442\\u044B \\u0438 \\u0440\\u0430\\u0437\\u043C\\u0435\\u0440\\u044B \\u0434\\u043E\\u043B\\u0436\\u043D\\u044B \\u0431\\u044B\\u0442\\u044C \\u0446\\u0435\\u043B\\u044B\\u043C\\u0438 \\u043C\\u0438\\u043B\\u043B\\u0438\\u043C\\u0435\\u0442\\u0440\\u0430\\u043C\\u0438."),(u.x<a||u.y<a||u.z<0||u.x+u.l>r.l-a||u.y+u.w>r.w-a||u.z+u.h>r.h)&&f(`\\u041C\\u0430\\u0448\\u0438\\u043D\\u0430 ${i.number}: \\u0432\\u044B\\u0445\\u043E\\u0434 \\u0437\\u0430 \\u0433\\u0440\\u0430\\u043D\\u0438\\u0446\\u044B \\u043A\\u0443\\u0437\\u043E\\u0432\\u0430 \\u0438\\u043B\\u0438 \\u0437\\u0430\\u0437\\u043E\\u0440 \\u0434\\u043E \\u0441\\u0442\\u0435\\u043D\\u044B.`);let b=u.rotated?[p.w,p.l]:[p.l,p.w];(u.l!==b[0]||u.w!==b[1]||u.h!==p.h||u.rotated&&!p.rotate||!g(u.mass,p.mass))&&f("\\u0413\\u0430\\u0431\\u0430\\u0440\\u0438\\u0442\\u044B, \\u043C\\u0430\\u0441\\u0441\\u0430 \\u0438\\u043B\\u0438 \\u043F\\u043E\\u0432\\u043E\\u0440\\u043E\\u0442 \\u043D\\u0435 \\u0441\\u043E\\u043E\\u0442\\u0432\\u0435\\u0442\\u0441\\u0442\\u0432\\u0443\\u044E\\u0442 \\u0438\\u0441\\u0445\\u043E\\u0434\\u043D\\u044B\\u043C \\u0434\\u0430\\u043D\\u043D\\u044B\\u043C."),(u.tier<1||u.tier>p.tiers||u.z!==(u.tier-1)*p.h)&&f("\\u041D\\u0430\\u0440\\u0443\\u0448\\u0435\\u043D\\u044B \\u043F\\u0440\\u0430\\u0432\\u0438\\u043B\\u0430 \\u044F\\u0440\\u0443\\u0441\\u043D\\u043E\\u0441\\u0442\\u0438."),u.z>0&&!(i.places||[]).some(M=>M.id===u.id&&M.x===u.x&&M.y===u.y&&M.l===u.l&&M.w===u.w&&M.z+M.h===u.z)&&f("\\u0412\\u0435\\u0440\\u0445\\u043D\\u0435\\u0435 \\u043C\\u0435\\u0441\\u0442\\u043E \\u043D\\u0435 \\u0438\\u043C\\u0435\\u0435\\u0442 \\u043F\\u043E\\u043B\\u043D\\u043E\\u0433\\u043E \\u043E\\u043F\\u0438\\u0440\\u0430\\u043D\\u0438\\u044F \\u043D\\u0430 \\u043E\\u0434\\u0438\\u043D\\u0430\\u043A\\u043E\\u0432\\u043E\\u0435 \\u043D\\u0438\\u0436\\u043D\\u0435\\u0435 \\u043C\\u0435\\u0441\\u0442\\u043E."),(!u.unitId||n.has(u.unitId))&&f("\\u041F\\u043E\\u0432\\u0442\\u043E\\u0440\\u044F\\u0435\\u0442\\u0441\\u044F \\u0438\\u043B\\u0438 \\u043E\\u0442\\u0441\\u0443\\u0442\\u0441\\u0442\\u0432\\u0443\\u0435\\u0442 \\u0438\\u0434\\u0435\\u043D\\u0442\\u0438\\u0444\\u0438\\u043A\\u0430\\u0442\\u043E\\u0440 \\u0433\\u0440\\u0443\\u0437\\u043E\\u0432\\u043E\\u0433\\u043E \\u043C\\u0435\\u0441\\u0442\\u0430."),n.add(u.unitId);let z=Number(String(u.unitId).split(":")[1]);(u.unitId!==`${p.id}:${z}`||!Number.isInteger(z)||z<1||z>p.qty)&&f("\\u0418\\u0434\\u0435\\u043D\\u0442\\u0438\\u0444\\u0438\\u043A\\u0430\\u0442\\u043E\\u0440 \\u043C\\u0435\\u0441\\u0442\\u0430 \\u043D\\u0435 \\u0432\\u0445\\u043E\\u0434\\u0438\\u0442 \\u0432 \\u0438\\u0441\\u0445\\u043E\\u0434\\u043D\\u0443\\u044E \\u043F\\u0430\\u0440\\u0442\\u0438\\u044E.");let C=i.places.find(M=>M.id===u.id&&M.x===u.x&&M.y===u.y&&M.z===0);(u.stackKey!==C?.unitId||u.instanceId!==u.unitId)&&f("\\u0418\\u0434\\u0435\\u043D\\u0442\\u0438\\u0444\\u0438\\u043A\\u0430\\u0442\\u043E\\u0440 \\u0441\\u0442\\u043E\\u043F\\u043A\\u0438 \\u0438\\u043B\\u0438 \\u044D\\u043A\\u0437\\u0435\\u043C\\u043F\\u043B\\u044F\\u0440\\u0430 \\u043D\\u0435 \\u0441\\u043E\\u043E\\u0442\\u0432\\u0435\\u0442\\u0441\\u0442\\u0432\\u0443\\u0435\\u0442 \\u0433\\u0435\\u043E\\u043C\\u0435\\u0442\\u0440\\u0438\\u0438."),m.set(u.id,(m.get(u.id)||0)+1),k[u.id]=(k[u.id]||0)+1,h++,y+=u.mass,x+=u.l*u.w*u.h/1e9,u.z===0&&q.push(u)}for(let u=0;u<(i.places||[]).length;u++)for(let d=u+1;d<i.places.length;d++){let p=i.places[u],b=i.places[d];p.x<b.x+b.l&&p.x+p.l>b.x&&p.y<b.y+b.w&&p.y+p.w>b.y&&p.z<b.z+b.h&&p.z+p.h>b.z&&f("\\u041E\\u0431\\u043D\\u0430\\u0440\\u0443\\u0436\\u0435\\u043D\\u043E \\u043F\\u0435\\u0440\\u0435\\u0441\\u0435\\u0447\\u0435\\u043D\\u0438\\u0435 \\u0433\\u0440\\u0443\\u0437\\u043E\\u0432\\u044B\\u0445 \\u043C\\u0435\\u0441\\u0442.")}for(let u=0;u<q.length;u++)for(let d=u+1;d<q.length;d++){let p=q[u],b=q[d];p.x<b.x+b.l+a&&p.x+p.l+a>b.x&&p.y<b.y+b.w+a&&p.y+p.w+a>b.y&&f("\\u041D\\u0435\\u0434\\u043E\\u0441\\u0442\\u0430\\u0442\\u043E\\u0447\\u043D\\u044B\\u0439 \\u0433\\u043E\\u0440\\u0438\\u0437\\u043E\\u043D\\u0442\\u0430\\u043B\\u044C\\u043D\\u044B\\u0439 \\u0437\\u0430\\u0437\\u043E\\u0440 \\u043C\\u0435\\u0436\\u0434\\u0443 \\u0441\\u0442\\u043E\\u043F\\u043A\\u0430\\u043C\\u0438.")}let S=q.reduce((u,d)=>u+d.l*d.w,0);if(y>r.mass+1e-6&&f("\\u041F\\u0440\\u0435\\u0432\\u044B\\u0448\\u0435\\u043D\\u0430 \\u0434\\u043E\\u043F\\u0443\\u0441\\u0442\\u0438\\u043C\\u0430\\u044F \\u043C\\u0430\\u0441\\u0441\\u0430 \\u0433\\u0440\\u0443\\u0437\\u0430."),(i.count!==i.places.length||!g(i.mass,y)||!g(i.volume,x)||i.floorArea!==S||!g(i.floorPercent,S/(r.l*r.w)*100)||!g(i.massPercent,y/r.mass*100)||!g(i.volumePercent,x/(r.l*r.w*r.h/1e9)*100))&&f("\\u0418\\u0442\\u043E\\u0433\\u043E\\u0432\\u044B\\u0435 \\u043F\\u043E\\u043A\\u0430\\u0437\\u0430\\u0442\\u0435\\u043B\\u0438 \\u043C\\u0430\\u0448\\u0438\\u043D\\u044B \\u043D\\u0435 \\u0441\\u043E\\u0432\\u043F\\u0430\\u0434\\u0430\\u044E\\u0442 \\u0441 \\u0433\\u0435\\u043E\\u043C\\u0435\\u0442\\u0440\\u0438\\u0435\\u0439."),e.modelVersion==="6.0.0"){let u=N(i.places);["pallets","boxes","palletMass"].some(d=>!g(i[d],u[d]))&&f("\\u041F\\u043E\\u043A\\u0430\\u0437\\u0430\\u0442\\u0435\\u043B\\u0438 \\u043F\\u0430\\u043B\\u043B\\u0435\\u0442 \\u0438 \\u043A\\u043E\\u0440\\u043E\\u0431\\u043E\\u043A \\u043C\\u0430\\u0448\\u0438\\u043D\\u044B \\u043D\\u0435\\u0432\\u0435\\u0440\\u043D\\u044B.")}for(let u of t)(i.counts?.[u.id]||0)!==(k[u.id]||0)&&f("\\u041A\\u043E\\u043B\\u0438\\u0447\\u0435\\u0441\\u0442\\u0432\\u043E \\u043C\\u0435\\u0441\\u0442 \\u043C\\u0430\\u0448\\u0438\\u043D\\u044B \\u043D\\u0435 \\u0441\\u043E\\u0432\\u043F\\u0430\\u0434\\u0430\\u0435\\u0442 \\u0441 \\u0435\\u0451 \\u0441\\u043E\\u0441\\u0442\\u0430\\u0432\\u043E\\u043C.");c+=y}let w=new Map;for(let i of e.unplaced)(!l.has(i.id)||!Number.isInteger(i.qty)||i.qty<1)&&f("\\u041D\\u0435\\u043A\\u043E\\u0440\\u0440\\u0435\\u043A\\u0442\\u043D\\u044B\\u0439 \\u043E\\u0441\\u0442\\u0430\\u0442\\u043E\\u043A \\u043F\\u0430\\u0440\\u0442\\u0438\\u0438."),w.set(i.id,(w.get(i.id)||0)+i.qty);for(let i of t)(m.get(i.id)||0)+(w.get(i.id)||0)!==i.qty&&f("\\u0411\\u0430\\u043B\\u0430\\u043D\\u0441 \\u043F\\u0430\\u0440\\u0442\\u0438\\u0438 \\u043D\\u0430\\u0440\\u0443\\u0448\\u0435\\u043D: \\u043C\\u0435\\u0441\\u0442\\u043E \\u043F\\u043E\\u0442\\u0435\\u0440\\u044F\\u043D\\u043E \\u0438\\u043B\\u0438 \\u0434\\u043E\\u0431\\u0430\\u0432\\u043B\\u0435\\u043D\\u043E.");let I=t.reduce((i,y)=>i+y.qty,0);if((e.total!==I||e.placed!==h||e.unplacedCount!==I-h||!g(e.mass,c))&&f("\\u0418\\u0442\\u043E\\u0433\\u0438 \\u043F\\u0430\\u0440\\u0442\\u0438\\u0438 \\u043D\\u0435 \\u0441\\u043E\\u0432\\u043F\\u0430\\u0434\\u0430\\u044E\\u0442 \\u0441 \\u0441\\u043E\\u0441\\u0442\\u0430\\u0432\\u043E\\u043C \\u043C\\u0430\\u0448\\u0438\\u043D."),e.modelVersion==="6.0.0"){let i=N(e.trucks.flatMap(y=>y.places));["pallets","boxes","palletMass"].some(y=>!g(e[y],i[y]))&&f("\\u0418\\u0442\\u043E\\u0433\\u0438 \\u043F\\u0430\\u043B\\u043B\\u0435\\u0442 \\u0438 \\u043A\\u043E\\u0440\\u043E\\u0431\\u043E\\u043A \\u043F\\u0430\\u0440\\u0442\\u0438\\u0438 \\u043D\\u0435\\u0432\\u0435\\u0440\\u043D\\u044B.")}for(let i of o.anchors||[]){let y=e.trucks.find(x=>x.number===i.truck);for(let x=0;x<i.units.length;x++){let k=y?.places.find(q=>q.unitId===i.units[x]);(!k||k.x!==i.x||k.y!==i.y||k.tier!==x+1||k.rotated!==i.rotated)&&f("\\u0417\\u0430\\u043A\\u0440\\u0435\\u043F\\u043B\\u0451\\u043D\\u043D\\u0430\\u044F \\u0441\\u0442\\u043E\\u043F\\u043A\\u0430 \\u0438\\u0437\\u043C\\u0435\\u043D\\u0438\\u043B\\u0430 \\u043F\\u043E\\u043B\\u043E\\u0436\\u0435\\u043D\\u0438\\u0435.")}}return{ok:s.length===0,errors:[...new Set(s)],checkedPlaces:h,checks:["\\u0411\\u0430\\u043B\\u0430\\u043D\\u0441 \\u043F\\u0430\\u0440\\u0442\\u0438\\u0438","\\u0413\\u0440\\u0430\\u043D\\u0438\\u0446\\u044B \\u043A\\u0443\\u0437\\u043E\\u0432\\u0430","\\u041C\\u0430\\u0441\\u0441\\u0430 \\u0433\\u0440\\u0443\\u0437\\u0430","\\u041F\\u043E\\u0432\\u043E\\u0440\\u043E\\u0442 \\u0438 \\u044F\\u0440\\u0443\\u0441\\u044B","\\u041F\\u0435\\u0440\\u0435\\u0441\\u0435\\u0447\\u0435\\u043D\\u0438\\u044F \\u0438 \\u0437\\u0430\\u0437\\u043E\\u0440\\u044B","\\u041F\\u043E\\u043B\\u043D\\u043E\\u0435 \\u043E\\u043F\\u0438\\u0440\\u0430\\u043D\\u0438\\u0435","\\u0417\\u0430\\u043A\\u0440\\u0435\\u043F\\u043B\\u0451\\u043D\\u043D\\u044B\\u0435 \\u0441\\u0442\\u043E\\u043F\\u043A\\u0438","\\u0418\\u0442\\u043E\\u0433\\u043E\\u0432\\u044B\\u0435 \\u043F\\u043E\\u043A\\u0430\\u0437\\u0430\\u0442\\u0435\\u043B\\u0438","\\u0421\\u043E\\u0441\\u0442\\u0430\\u0432 \\u043F\\u0430\\u043B\\u043B\\u0435\\u0442","\\u041C\\u0430\\u0441\\u0441\\u0430 \\u0443\\u043F\\u0430\\u043A\\u043E\\u0432\\u043A\\u0438"]}}var U="6.0.0";function ft(e={}){let t=e.gap??0;if(!Number.isInteger(t)||t<0||t>200)throw new Error("\\u0417\\u0430\\u0437\\u043E\\u0440: \\u0446\\u0435\\u043B\\u043E\\u0435 \\u0447\\u0438\\u0441\\u043B\\u043E \\u043E\\u0442 0 \\u0434\\u043E 200 \\u043C\\u043C.");let r=(e.anchors||[]).map(o=>({key:String(o.key),id:o.id,truck:o.truck,x:o.x,y:o.y,rotated:!!o.rotated,units:[...o.units||[]]}));if(r.length>2e3||r.some(o=>o.key!==o.units[0]||!Number.isInteger(o.id)||!Number.isInteger(o.truck)||o.truck<1||o.truck>2e3||![o.x,o.y].every(Number.isSafeInteger)||o.units.length<1||o.units.length>27||o.units.some(s=>typeof s!="string"||s.length>40)))throw new Error("\\u041D\\u0435\\u043A\\u043E\\u0440\\u0440\\u0435\\u043A\\u0442\\u043D\\u044B\\u0435 \\u0437\\u0430\\u043A\\u0440\\u0435\\u043F\\u043B\\u0451\\u043D\\u043D\\u044B\\u0435 \\u0441\\u0442\\u043E\\u043F\\u043A\\u0438.");return{gap:t,anchors:r}}var W=e=>e.rotate&&e.l!==e.w?[[e.l,e.w,!1],[e.w,e.l,!0]]:[[e.l,e.w,!1]],Y=(e,t)=>e.x<t.x+t.l&&e.x+e.l>t.x&&e.y<t.y+t.w&&e.y+e.w>t.y;function Q(e,t){let r=[];for(let o of e){if(!Y(o,t)){r.push(o);continue}t.x>o.x&&r.push({...o,l:t.x-o.x}),t.x+t.l<o.x+o.l&&r.push({...o,x:t.x+t.l,l:o.x+o.l-t.x-t.l}),t.y>o.y&&r.push({...o,w:t.y-o.y}),t.y+t.w<o.y+o.w&&r.push({...o,y:t.y+t.w,w:o.y+o.w-t.y-t.w})}return r.filter((o,s)=>o.l>0&&o.w>0&&!r.some((m,n)=>n!==s&&o.x>=m.x&&o.y>=m.y&&o.x+o.l<=m.x+m.l&&o.y+o.w<=m.y+m.w&&(o.x!==m.x||o.y!==m.y||o.l!==m.l||o.w!==m.w||n<s)))}function mt(e,t,r){let o=[{x:r,y:r,l:t.l-r,w:t.w-r}];for(let s of e.places.filter(m=>m.z===0))o=Q(o,{x:s.x,y:s.y,l:s.l+r,w:s.w+r});return o}var Z=(e,t,r,o,s,m,n,a)=>({id:e.id,name:e.name,color:e.color,x:t,y:r,z:(n-1)*e.h,l:o,w:s,h:e.h,mass:e.mass,rotated:m,tier:n,unitId:a,instanceId:a}),X=()=>({places:[],mass:0});function G(e,t,r,o,s,m){let n=mt(e,r,o),a=[l=>l.l*l.w,l=>l.l*l.w*l.h,l=>l.mass,l=>Math.max(l.l,l.w)];for(let l of[...t].sort((h,c)=>a[s](c)-a[s](h)||h.id-c.id))for(;l.qty>0;){let h=Math.min(l.qty,l.tiers,Math.floor(r.h/l.h),Math.floor((r.mass-e.mass+1e-7)/l.mass));if(!h)break;let c=null;for(let i of n)for(let[y,x,k]of W(l)){if(y+o>i.l||x+o>i.w)continue;let q=[Math.min(i.l-y-o,i.w-x-o),i.l*i.w-y*x,i.x,i.y,k?1:0];(!c||q.some((S,u)=>S<c.score[u]&&q.slice(0,u).every((d,p)=>d===c.score[p])))&&(c={f:i,l:y,w:x,r:k,score:q})}if(!c)break;let{f,l:g,w,r:I}=c;for(let i=0;i<h;i++)e.places.push(Z(l,f.x,f.y,g,w,I,i+1,m.get(l.id).shift()));e.mass+=h*l.mass,l.qty-=h,n=Q(n,{x:f.x,y:f.y,l:g+o,w:w+o})}return e}function v(e,t,r){return e.mass>t.mass?"\\u041C\\u0430\\u0441\\u0441\\u0430 \\u043E\\u0434\\u043D\\u043E\\u0433\\u043E \\u043C\\u0435\\u0441\\u0442\\u0430 \\u043F\\u0440\\u0435\\u0432\\u044B\\u0448\\u0430\\u0435\\u0442 \\u0434\\u043E\\u043F\\u0443\\u0441\\u0442\\u0438\\u043C\\u0443\\u044E \\u043C\\u0430\\u0441\\u0441\\u0443 \\u0433\\u0440\\u0443\\u0437\\u0430":e.h>t.h?"\\u0412\\u044B\\u0441\\u043E\\u0442\\u0430 \\u043E\\u0434\\u043D\\u043E\\u0433\\u043E \\u043C\\u0435\\u0441\\u0442\\u0430 \\u043F\\u0440\\u0435\\u0432\\u044B\\u0448\\u0430\\u0435\\u0442 \\u0432\\u044B\\u0441\\u043E\\u0442\\u0443 \\u043A\\u0443\\u0437\\u043E\\u0432\\u0430":W(e).some(([o,s])=>o<=t.l-2*r&&s<=t.w-2*r)?null:"\\u041E\\u0441\\u043D\\u043E\\u0432\\u0430\\u043D\\u0438\\u0435 \\u043D\\u0435 \\u0432\\u0445\\u043E\\u0434\\u0438\\u0442 \\u0432 \\u043A\\u0443\\u0437\\u043E\\u0432 \\u0441 \\u0437\\u0430\\u0434\\u0430\\u043D\\u043D\\u044B\\u043C \\u0437\\u0430\\u0437\\u043E\\u0440\\u043E\\u043C \\u0434\\u043E \\u0441\\u0442\\u0435\\u043D"}function ht(e,t,r,o){let s=[],m=new Set,n=structuredClone(e),a=new Map(e.map(c=>[c.id,c]));for(let c of r.anchors){let f=a.get(c.id);if(!f)throw new Error("\\u0417\\u0430\\u043A\\u0440\\u0435\\u043F\\u043B\\u0451\\u043D\\u043D\\u0430\\u044F \\u0441\\u0442\\u043E\\u043F\\u043A\\u0430 \\u0441\\u0441\\u044B\\u043B\\u0430\\u0435\\u0442\\u0441\\u044F \\u043D\\u0430 \\u0443\\u0434\\u0430\\u043B\\u0451\\u043D\\u043D\\u044B\\u0439 \\u0433\\u0440\\u0443\\u0437. \\u0421\\u043D\\u0438\\u043C\\u0438\\u0442\\u0435 \\u0437\\u0430\\u043A\\u0440\\u0435\\u043F\\u043B\\u0435\\u043D\\u0438\\u044F.");let g=c.rotated?f.w:f.l,w=c.rotated?f.l:f.w;if(c.rotated&&!f.rotate||c.units.length>f.tiers||c.units.length*f.h>t.h||c.x<r.gap||c.y<r.gap||c.x+g>t.l-r.gap||c.y+w>t.w-r.gap)throw new Error("\\u0417\\u0430\\u043A\\u0440\\u0435\\u043F\\u043B\\u0451\\u043D\\u043D\\u0430\\u044F \\u0441\\u0442\\u043E\\u043F\\u043A\\u0430 \\u043D\\u0435 \\u0441\\u043E\\u043E\\u0442\\u0432\\u0435\\u0442\\u0441\\u0442\\u0432\\u0443\\u0435\\u0442 \\u0442\\u0435\\u043A\\u0443\\u0449\\u0438\\u043C \\u0433\\u0430\\u0431\\u0430\\u0440\\u0438\\u0442\\u0430\\u043C, \\u0437\\u0430\\u0437\\u043E\\u0440\\u0443 \\u0438\\u043B\\u0438 \\u043F\\u0440\\u0430\\u0432\\u0438\\u043B\\u0430\\u043C. \\u0421\\u043D\\u0438\\u043C\\u0438\\u0442\\u0435 \\u0437\\u0430\\u043A\\u0440\\u0435\\u043F\\u043B\\u0435\\u043D\\u0438\\u0435 \\u043B\\u0438\\u0431\\u043E \\u0432\\u0435\\u0440\\u043D\\u0438\\u0442\\u0435 \\u043F\\u0430\\u0440\\u0430\\u043C\\u0435\\u0442\\u0440\\u044B.");for(;s.length<c.truck;)s.push(X());let I=s[c.truck-1];for(let i of I.places.filter(y=>y.z===0))if(Y({x:c.x,y:c.y,l:g+r.gap,w:w+r.gap},{...i,l:i.l+r.gap,w:i.w+r.gap}))throw new Error("\\u0417\\u0430\\u043A\\u0440\\u0435\\u043F\\u043B\\u0451\\u043D\\u043D\\u044B\\u0435 \\u0441\\u0442\\u043E\\u043F\\u043A\\u0438 \\u043F\\u0435\\u0440\\u0435\\u0441\\u0435\\u043A\\u0430\\u044E\\u0442\\u0441\\u044F \\u0438\\u043B\\u0438 \\u043D\\u0430\\u0440\\u0443\\u0448\\u0430\\u044E\\u0442 \\u0437\\u0430\\u0437\\u043E\\u0440.");if(c.units.forEach((i,y)=>{let x=Number(i.split(":")[1]);if(i!==`${f.id}:${x}`||x<1||x>f.qty||!Number.isInteger(x)||m.has(i))throw new Error("\\u0417\\u0430\\u043A\\u0440\\u0435\\u043F\\u043B\\u0451\\u043D\\u043D\\u044B\\u0435 \\u043C\\u0435\\u0441\\u0442\\u0430 \\u043D\\u0435 \\u0432\\u0445\\u043E\\u0434\\u044F\\u0442 \\u0432 \\u0442\\u0435\\u043A\\u0443\\u0449\\u0443\\u044E \\u043F\\u0430\\u0440\\u0442\\u0438\\u044E.");m.add(i),I.places.push(Z(f,c.x,c.y,g,w,c.rotated,y+1,i)),I.mass+=f.mass}),I.mass>t.mass+1e-7)throw new Error("\\u041C\\u0430\\u0441\\u0441\\u0430 \\u0437\\u0430\\u043A\\u0440\\u0435\\u043F\\u043B\\u0451\\u043D\\u043D\\u044B\\u0445 \\u0441\\u0442\\u043E\\u043F\\u043E\\u043A \\u043F\\u0440\\u0435\\u0432\\u044B\\u0448\\u0430\\u0435\\u0442 \\u043E\\u0433\\u0440\\u0430\\u043D\\u0438\\u0447\\u0435\\u043D\\u0438\\u0435 \\u0442\\u0440\\u0430\\u043D\\u0441\\u043F\\u043E\\u0440\\u0442\\u0430.")}let l=new Map(e.map(c=>[c.id,Array.from({length:c.qty},(f,g)=>`${c.id}:${g+1}`).filter(f=>!m.has(f))])),h=[];for(let c of n){c.qty=l.get(c.id).length;let f=v(c,t,r.gap);f&&c.qty&&(h.push({...c,reason:f,proven:!0}),c.qty=0)}for(let c of s)G(c,n,t,r.gap,o,l);for(;n.some(c=>c.qty);){let c=G(X(),n,t,r.gap,o,l);if(!c.places.length){for(let f of n.filter(g=>g.qty))h.push({...f,reason:"\\u042D\\u0432\\u0440\\u0438\\u0441\\u0442\\u0438\\u043A\\u0430 \\u043D\\u0435 \\u043D\\u0430\\u0448\\u043B\\u0430 \\u0440\\u0430\\u0437\\u043C\\u0435\\u0449\\u0435\\u043D\\u0438\\u0435; \\u043D\\u0435\\u0432\\u043E\\u0437\\u043C\\u043E\\u0436\\u043D\\u043E\\u0441\\u0442\\u044C \\u043D\\u0435 \\u0434\\u043E\\u043A\\u0430\\u0437\\u0430\\u043D\\u0430",proven:!1});break}s.push(c)}return{source:structuredClone(e),vehicle:{...t},trucks:s.filter(c=>c.places.length),unplaced:h,total:e.reduce((c,f)=>c+f.qty,0),capacity:null}}function pt(e){let t=o=>Array.isArray(o)?o.map(t):o&&typeof o=="object"?Object.fromEntries(Object.keys(o).filter(s=>s!=="name"&&s!=="color").sort().map(s=>[s,t(o[s])])):o,r=2166136261;for(let o of JSON.stringify(t(e)))r^=o.charCodeAt(0),r=Math.imul(r,16777619);return(r>>>0).toString(16).padStart(8,"0")}function J(e,t,r,o){e.source=structuredClone(t),e.unplaced=e.unplaced.map(n=>({...structuredClone(t.find(a=>a.id===n.id)),qty:n.qty,reason:n.reason,proven:n.proven}));let s=new Map(t.map(n=>[n.id,new Set]));for(let n of e.trucks)for(let a of n.places)a.unitId&&s.get(a.id).add(a.unitId);let m=new Map(t.map(n=>[n.id,Array.from({length:n.qty},(a,l)=>`${n.id}:${l+1}`).filter(a=>!s.get(n.id).has(a))]));for(let n=0;n<e.trucks.length;n++){let a=e.trucks[n];a.number=n+1,a.count=a.places.length,a.counts={},a.mass=0,a.volume=0,a.floorArea=0;for(let l of a.places)K(l,t.find(h=>h.id===l.id)),l.unitId||=m.get(l.id).shift(),l.instanceId=l.unitId,l.stackKey=a.places.find(h=>h.id===l.id&&h.x===l.x&&h.y===l.y&&h.z===0)?.unitId||l.unitId,a.counts[l.id]=(a.counts[l.id]||0)+1,a.mass+=l.mass,a.volume+=l.l*l.w*l.h/1e9,l.z||(a.floorArea+=l.l*l.w);a.mass=Math.round(a.mass*1e3)/1e3,a.volumePercent=a.volume/(r.l*r.w*r.h/1e9)*100,a.floorPercent=a.floorArea/(r.l*r.w)*100,a.massPercent=a.mass/r.mass*100,Object.assign(a,N(a.places))}for(let n of e.trucks)for(let a of n.places)a.stackKey=n.places.find(l=>l.id===a.id&&l.x===a.x&&l.y===a.y&&l.z===0).unitId;e.settings=structuredClone(o);for(let n of e.settings.anchors){let a=e.trucks.find(l=>l.places.some(h=>h.unitId===n.units[0]));n.truck=a?.number||n.truck}if(Object.assign(e,N(e.trucks.flatMap(n=>n.places))),e.placed=e.trucks.reduce((n,a)=>n+a.count,0),e.unplacedCount=e.unplaced.reduce((n,a)=>n+a.qty,0),e.mass=e.trucks.reduce((n,a)=>n+a.mass,0),e.modelVersion=U,e.planId=pt({rows:t,vehicle:r,settings:e.settings,modelVersion:U}),e.certificate=H(e,t,r,e.settings),!e.certificate.ok)throw new Error("\\u0420\\u0435\\u0437\\u0443\\u043B\\u044C\\u0442\\u0430\\u0442 \\u043D\\u0435 \\u043F\\u0440\\u0438\\u043D\\u044F\\u0442 \\u043F\\u0440\\u043E\\u0432\\u0435\\u0440\\u043A\\u043E\\u0439: "+e.certificate.errors.join(" "));return e}function tt(e,t=E,r={}){let o=$(e).concat(O(t));if(o.length)throw new Error(o.join(`\n`));let s=ft(r);if(2*s.gap>=Math.min(t.l,t.w))throw new Error("\\u0417\\u0430\\u0437\\u043E\\u0440 \\u043D\\u0435 \\u043E\\u0441\\u0442\\u0430\\u0432\\u043B\\u044F\\u0435\\u0442 \\u043F\\u043E\\u043B\\u0435\\u0437\\u043D\\u043E\\u0433\\u043E \\u043F\\u0440\\u043E\\u0441\\u0442\\u0440\\u0430\\u043D\\u0441\\u0442\\u0432\\u0430 \\u0432 \\u043A\\u0443\\u0437\\u043E\\u0432\\u0435.");if(!s.gap&&!s.anchors.length)return J(D(e,t),e,t,s);let m=e.map(A),n=null;for(let l=0;l<4;l++){let h=ht(m,t,s,l);(!n||h.trucks.length<n.trucks.length)&&(n=h)}let a=F(m.filter(l=>!v(l,t,s.gap)),{...t,l:t.l-2*s.gap,w:t.w-2*s.gap});return n.diagnostics={evaluated:4,lowerBound:a,baselineTrucks:n.trucks.length,savedTrucks:0,method:"\\u0421\\u0432\\u043E\\u0431\\u043E\\u0434\\u043D\\u044B\\u0439 \\u043F\\u043E\\u043B \\u0441 \\u0437\\u0430\\u043A\\u0440\\u0435\\u043F\\u043B\\u0435\\u043D\\u0438\\u044F\\u043C\\u0438 \\u0438 \\u0437\\u0430\\u0437\\u043E\\u0440\\u043E\\u043C",boundReached:n.trucks.length===a},J(n,e,t,s)}self.onmessage=e=>{try{let t=e.data;self.postMessage({result:tt(Array.isArray(t)?t:t.rows,Array.isArray(t)?void 0:t.vehicle,t.settings)})}catch(t){self.postMessage({error:t.message})}};})();\n';function xh(){let n=null,e=null,t=null,i=0;function s(){n?.terminate(),n=null,e&&URL.revokeObjectURL(e),e=null}function r(){i++,s(),t&&(t(new DOMException("Calculation cancelled","AbortError")),t=null)}function a(o,l,c){r();let u=i;return new Promise((d,h)=>{t=h;let f=!1,g=(m,p)=>{f||u!==i||(f=!0,s(),t=null,m?h(m):d(p))},x=()=>{s(),setTimeout(()=>{if(!(u!==i||f))try{g(null,Ic(o,l,c))}catch(m){g(m)}},0)};try{e=URL.createObjectURL(new Blob([Qf],{type:"text/javascript"})),n=new Worker(e),n.onmessage=m=>m.data.error?g(new Error(m.data.error)):g(null,m.data.result),n.onerror=m=>{m.preventDefault?.(),x()},n.postMessage({rows:o,vehicle:l,settings:c})}catch{x()}})}return{run:a,cancel:r,dispose:r}}function ep(n,e){let t=n[e];return e==="rotate"?typeof t=="boolean"?"":"\u0423\u043A\u0430\u0436\u0438\u0442\u0435 \u0434\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u043E\u0441\u0442\u044C \u043F\u043E\u0432\u043E\u0440\u043E\u0442\u0430.":e==="name"?String(t||"").trim()?"":"\u0423\u043A\u0430\u0436\u0438\u0442\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0433\u0440\u0443\u0437\u0430.":Number.isFinite(t)?["l","w","h"].includes(e)&&(!Number.isInteger(t)||t<100||t>1e5)?"\u0426\u0435\u043B\u043E\u0435 \u0447\u0438\u0441\u043B\u043E \u043E\u0442 100 \u0434\u043E 100 000 \u043C\u043C.":e==="mass"&&(t<=0||t>1e6||Math.abs(t*1e3-Math.round(t*1e3))>1e-6)?"\u041E\u0442 0,001 \u0434\u043E 1 000 000 \u043A\u0433; \u0434\u043E \u0442\u0440\u0451\u0445 \u0437\u043D\u0430\u043A\u043E\u0432 \u043F\u043E\u0441\u043B\u0435 \u0437\u0430\u043F\u044F\u0442\u043E\u0439.":e==="qty"&&(!Number.isInteger(t)||t<1||t>2e3)?"\u0426\u0435\u043B\u043E\u0435 \u0447\u0438\u0441\u043B\u043E \u043E\u0442 1 \u0434\u043E 2 000 \u043C\u0435\u0441\u0442.":e==="tiers"&&(!Number.isInteger(t)||t<1||t>27)?"\u0426\u0435\u043B\u043E\u0435 \u0447\u0438\u0441\u043B\u043E \u043E\u0442 1 \u0434\u043E 27 \u044F\u0440\u0443\u0441\u043E\u0432.":"":"\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 \u043F\u043E\u043B\u0435 \u0447\u0438\u0441\u043B\u043E\u043C."}var Mi={name:"",logo:null};function _h(n){Mi.name=typeof n?.name=="string"?n.name.slice(0,80):"",Mi.logo=typeof n?.logo=="string"&&/^data:image\/(png|jpeg|webp);base64,/.test(n.logo)&&n.logo.length<14e6?n.logo:null}async function tp(n){if(!n||!["image/png","image/jpeg","image/webp"].includes(n.type))throw new Error("\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 PNG, JPEG \u0438\u043B\u0438 WebP.");if(n.size>10*1024*1024)throw new Error("\u0420\u0430\u0437\u043C\u0435\u0440 \u043B\u043E\u0433\u043E\u0442\u0438\u043F\u0430 \u2014 \u043D\u0435 \u0431\u043E\u043B\u0435\u0435 10 \u041C\u0411.");let e=await new Promise((r,a)=>{let o=new FileReader;o.onload=()=>r(o.result),o.onerror=()=>a(new Error("\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043F\u0440\u043E\u0447\u0438\u0442\u0430\u0442\u044C \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435.")),o.readAsDataURL(n)}),t=new Image;if(t.src=e,await t.decode(),t.width>8192||t.height>8192)throw new Error("\u0420\u0430\u0437\u043C\u0435\u0440 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F \u2014 \u043D\u0435 \u0431\u043E\u043B\u0435\u0435 8192 \u043F\u0438\u043A\u0441\u0435\u043B\u0435\u0439 \u043F\u043E \u043A\u0430\u0436\u0434\u043E\u0439 \u0441\u0442\u043E\u0440\u043E\u043D\u0435.");let i=Math.min(1,1024/Math.max(t.width,t.height)),s=document.createElement("canvas");return s.width=Math.max(1,Math.round(t.width*i)),s.height=Math.max(1,Math.round(t.height*i)),s.getContext("2d").drawImage(t,0,0,s.width,s.height),s.toDataURL("image/png")}async function np(n){let e;if(document.querySelector("#pristine-ui"))e=document.documentElement.cloneNode(!0);else{let o=new AbortController,l=setTimeout(()=>o.abort(),2e4);try{let c=await fetch(new URL("ZAGRUZKA_OFFLINE.html",document.baseURI),{signal:o.signal});if(!c.ok)throw new Error("\u0410\u0432\u0442\u043E\u043D\u043E\u043C\u043D\u044B\u0439 \u0444\u0430\u0439\u043B \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u0435\u043D. \u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u0435 \u043F\u0440\u043E\u0435\u043A\u0442 \u0432 JSON.");e=new DOMParser().parseFromString(await c.text(),"text/html").documentElement}finally{clearTimeout(l)}}let t=e.querySelector("body"),i=e.querySelector("#pristine-ui");if(!i)throw new Error("\u041D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430 \u0430\u0432\u0442\u043E\u043D\u043E\u043C\u043D\u0430\u044F \u043A\u043E\u043F\u0438\u044F. \u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u0435 \u043F\u0440\u043E\u0435\u043A\u0442 \u0432 JSON.");let s=[...t.children].filter(o=>o.hasAttribute("data-package"));t.replaceChildren(i.content.cloneNode(!0),i,...s),t.removeAttribute("class"),t.removeAttribute("style"),e.querySelector("#saved-project").textContent=JSON.stringify(n).replace(/</g,"\\u003c"),e.querySelector("#author-snapshot").textContent=JSON.stringify({author:Kn.author}).replace(/</g,"\\u003c"),e.querySelector("#profile-code")?.remove();let r=URL.createObjectURL(new Blob([`<!doctype html>
`,e.outerHTML],{type:"text/html;charset=utf-8"})),a=document.createElement("a");a.href=r,a.download="ZAGRUZKA_My_Project.html",a.click(),setTimeout(()=>URL.revokeObjectURL(r),6e4)}var yh=[{name:"\u042F\u0449\u0438\u043A 1200 \xD7 800",l:1200,w:800,h:1e3,mass:350,rotate:!1,tiers:1},{name:"\u041A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440 1600 \xD7 1200",l:1600,w:1200,h:1e3,mass:580,rotate:!1,tiers:1},{name:"\u041A\u043E\u0440\u043E\u0431\u043A\u0438 \u043D\u0430 \u043F\u0430\u043B\u043B\u0435\u0442\u0435 1200 \xD7 800",l:400,w:300,h:250,mass:12,rotate:!0,tiers:1,pallet:{l:1200,w:800,h:144,mass:25,boxes:12}}];function sa(n){if(!n||![2,3,4,5,6,7].includes(n.version)||!Array.isArray(n.rows))throw new Error("\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043F\u0440\u043E\u0435\u043A\u0442 \xAB\u0417\u0410\u0413\u0420\u0423\u0417\u041A\u0410\xBB \u0432\u0435\u0440\u0441\u0438\u0438 2\u20137.");let e=n.rows.map((d,h)=>({id:d.id,name:d.name,l:d.l,w:d.w,h:d.h,mass:d.mass,qty:d.qty,rotate:d.rotate,tiers:d.tiers,color:/^#[\da-f]{6}$/i.test(d.color)?d.color:ai[h%ai.length],...d.pallet!=null?{pallet:zc(d.pallet)}:{}})),t={...Sn,...n.vehicle,name:String(n.vehicle?.name||"\u0415\u0432\u0440\u043E\u0444\u0443\u0440\u0430").slice(0,80)},i=mn(e).concat(vi(t));if(e.some(d=>!Number.isSafeInteger(d.id)||d.id<1)&&i.push("\u041D\u0435\u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u044B\u0435 \u0438\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440\u044B \u0433\u0440\u0443\u0437\u0430."),(typeof n.batchName!="string"||!n.batchName.trim()||n.batchName.length>80)&&i.push("\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043F\u0430\u0440\u0442\u0438\u0438: \u043E\u0442 1 \u0434\u043E 80 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432."),i.length)throw new Error(i[0]);let s=(Array.isArray(n.templates)?n.templates:[]).slice(0,50).map((d,h)=>({...d,id:h+1,qty:1,color:ai[h%ai.length]}));if(mn(s).length)throw new Error("\u041D\u0435\u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u044B\u0435 \u0448\u0430\u0431\u043B\u043E\u043D\u044B \u0433\u0440\u0443\u0437\u0430.");let r={name:String(n.branding?.name||"").slice(0,80),logo:typeof n.branding?.logo=="string"&&/^data:image\/(png|jpeg|webp);base64,/.test(n.branding.logo)&&n.branding.logo.length<14e6?n.branding.logo:null},a=null;n.baseline&&(a={project:sa({...n.baseline.project,baseline:null}),label:String(n.baseline.label||"\u0418\u0441\u0445\u043E\u0434\u043D\u044B\u0439 \u0432\u0430\u0440\u0438\u0430\u043D\u0442").slice(0,80)});let o=nr(n.settings),l=Oy(n.pilot),c=n.history?{past:(n.history.past||[]).slice(-30).map(ip),future:(n.history.future||[]).slice(-30).map(ip)}:{past:[],future:[]},u=sp(n.planSnapshot,e,t,o);return{schema:"zagruzka-project",version:7,modelVersion:gn,batchName:n.batchName.trim(),rows:e,vehicle:t,templates:s,branding:r,baseline:a,settings:o,pilot:l,history:c,planSnapshot:u}}function ip(n){if(!n||mn(n.rows).length||vi(n.vehicle).length)throw new Error("\u041D\u0435\u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u0430\u044F \u0438\u0441\u0442\u043E\u0440\u0438\u044F \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439.");return{rows:n.rows,vehicle:n.vehicle,batchName:String(n.batchName||"\u041F\u0430\u0440\u0442\u0438\u044F").slice(0,80),settings:nr(n.settings),planSnapshot:By(n)}}function By(n){return sp(n.planSnapshot,n.rows,n.vehicle,n.settings)}function sp(n,e,t,i){if(!n||!["4.0.0",gn].includes(n.modelVersion))return null;let s=bi(n,e,t,i),r=Rs({rows:e,vehicle:t,settings:i,modelVersion:n.modelVersion});if(!s.ok||n.planId!==r)throw new Error("\u0421\u043E\u0445\u0440\u0430\u043D\u0451\u043D\u043D\u0430\u044F \u0441\u0445\u0435\u043C\u0430 \u043D\u0435 \u043F\u0440\u043E\u0448\u043B\u0430 \u043D\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043C\u0443\u044E \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0443.");let a=structuredClone(n);a.modelVersion=gn,a.planId=Rs({rows:e,vehicle:t,settings:i,modelVersion:gn});for(let o of a.trucks)Object.assign(o,$i(o.places));if(Object.assign(a,$i(a.trucks.flatMap(o=>o.places))),a.certificate=bi(a,e,t,i),!a.certificate.ok)throw new Error("\u0421\u043E\u0445\u0440\u0430\u043D\u0451\u043D\u043D\u0430\u044F \u0441\u0445\u0435\u043C\u0430 \u043D\u0435 \u043F\u0440\u043E\u0448\u043B\u0430 \u043D\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043C\u0443\u044E \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0443.");return a}function Oy(n=[]){if(!Array.isArray(n)||n.length>100)throw new Error("\u0416\u0443\u0440\u043D\u0430\u043B \u043F\u0438\u043B\u043E\u0442\u0430: \u0434\u043E 100 \u043D\u0430\u0431\u043B\u044E\u0434\u0435\u043D\u0438\u0439.");return n.map(e=>{if(!["accepted","corrected","rejected"].includes(e.status)||!Number.isInteger(e.actualTrucks)||e.actualTrucks<0||e.actualTrucks>2e3||!Number.isInteger(e.plannedTrucks)||e.plannedTrucks<0||e.plannedTrucks>2e3||typeof e.reason!="string"||e.reason.length>500||!Number.isFinite(Date.parse(e.date)))throw new Error("\u041D\u0435\u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u0430\u044F \u0437\u0430\u043F\u0438\u0441\u044C \u043F\u0438\u043B\u043E\u0442\u0430.");return{id:String(e.id).slice(0,80),date:e.date,status:e.status,actualTrucks:e.actualTrucks,plannedTrucks:e.plannedTrucks,reason:e.reason,batchName:String(e.batchName||"").slice(0,80),planId:String(e.planId||"").slice(0,30),modelVersion:String(e.modelVersion||"").slice(0,30)}})}function Pc(n,e,t="application/json"){let i=URL.createObjectURL(new Blob([e],{type:t})),s=document.createElement("a");s.href=i,s.download=n,document.body.append(s),s.click(),s.remove(),setTimeout(()=>URL.revokeObjectURL(i),1500)}function rp(n){n=n.replace(/^\uFEFF/,"");let e=n.split(/\r?\n/)[0]||"",t=e.includes(";")?";":e.includes("	")?"	":",",i=[],s=[],r="",a=!1;for(let d=0;d<n.length;d++){let h=n[d];if(h==='"')if(a&&n[d+1]==='"')r+='"',d++;else if(a||!r)a=!a;else throw new Error("\u041D\u0435\u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u044B\u0435 \u043A\u0430\u0432\u044B\u0447\u043A\u0438 \u0432 CSV.");else!a&&(h===t||h===`
`||h==="\r")?(s.push(r),r="",h!==t&&(s.some(f=>f.trim())&&i.push(s),s=[],h==="\r"&&n[d+1]===`
`&&d++)):r+=h}if(a)throw new Error("\u0412 CSV \u043D\u0435 \u0437\u0430\u043A\u0440\u044B\u0442\u044B \u043A\u0430\u0432\u044B\u0447\u043A\u0438.");if(s.push(r),s.some(d=>d.trim())&&i.push(s),i.length<2)throw new Error("\u0412 CSV \u043D\u0435\u0442 \u0441\u0442\u0440\u043E\u043A \u0433\u0440\u0443\u0437\u0430.");let o={name:"name",\u043D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435:"name",\u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435:"name",l:"l",\u0434\u043B\u0438\u043D\u0430:"l",\u0434\u043B\u0438\u043D\u0430_\u043C\u043C:"l",w:"w",\u0448\u0438\u0440\u0438\u043D\u0430:"w",\u0448\u0438\u0440\u0438\u043D\u0430_\u043C\u043C:"w",h:"h",\u0432\u044B\u0441\u043E\u0442\u0430:"h",\u0432\u044B\u0441\u043E\u0442\u0430_\u043C\u043C:"h",mass:"mass",\u043C\u0430\u0441\u0441\u0430:"mass",\u043C\u0430\u0441\u0441\u0430_\u043A\u0433:"mass",qty:"qty",\u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E:"qty",rotate:"rotate",\u043F\u043E\u0432\u043E\u0440\u043E\u0442:"rotate",tiers:"tiers",\u044F\u0440\u0443\u0441\u044B:"tiers",pallet_l:"pallet_l",\u043F\u0430\u043B\u043B\u0435\u0442\u0430_\u0434\u043B\u0438\u043D\u0430:"pallet_l",pallet_w:"pallet_w",\u043F\u0430\u043B\u043B\u0435\u0442\u0430_\u0448\u0438\u0440\u0438\u043D\u0430:"pallet_w",pallet_h:"pallet_h",\u043F\u0430\u043B\u043B\u0435\u0442\u0430_\u0432\u044B\u0441\u043E\u0442\u0430:"pallet_h",pallet_mass:"pallet_mass",\u043F\u0430\u043B\u043B\u0435\u0442\u0430_\u043C\u0430\u0441\u0441\u0430:"pallet_mass",boxes_per_pallet:"boxes_per_pallet",\u043A\u043E\u0440\u043E\u0431\u043E\u043A_\u043D\u0430_\u043F\u0430\u043B\u043B\u0435\u0442\u0435:"boxes_per_pallet"},l=i.shift().map(d=>o[d.trim().toLowerCase().replace(/\s+/g,"_")]);for(let d of["name","l","w","h","mass","qty"])if(!l.includes(d))throw new Error("\u0412 CSV \u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u043A\u043E\u043B\u043E\u043D\u043A\u0430 "+d+".");if(new Set(l.filter(Boolean)).size!==l.filter(Boolean).length)throw new Error("\u041F\u043E\u0432\u0442\u043E\u0440\u044F\u044E\u0449\u0438\u0435\u0441\u044F \u043A\u043E\u043B\u043E\u043D\u043A\u0438 CSV.");let c=i.map((d,h)=>{if(d.length!==l.length)throw new Error(`\u0421\u0442\u0440\u043E\u043A\u0430 ${h+2}: \u0447\u0438\u0441\u043B\u043E \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0439 \u043D\u0435 \u0441\u043E\u0432\u043F\u0430\u0434\u0430\u0435\u0442 \u0441 \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043A\u043E\u043C.`);let f=!1,g={id:h+1,rotate:!1,tiers:1,color:ai[h%ai.length]};l.forEach((x,m)=>{if(!x)return;let p=d[m].trim();if(p&&["pallet_l","pallet_w","pallet_h","pallet_mass","boxes_per_pallet"].includes(x)&&(f=!0),x==="name")g[x]=p;else if(x==="rotate")if(!p)g[x]=!1;else if(/^(да|yes|true|1)$/i.test(p))g[x]=!0;else if(/^(нет|no|false|0)$/i.test(p))g[x]=!1;else throw new Error(`\u0421\u0442\u0440\u043E\u043A\u0430 ${h+2}: \u043F\u043E\u0432\u043E\u0440\u043E\u0442 \u2014 \u0434\u0430 \u0438\u043B\u0438 \u043D\u0435\u0442.`);else x==="tiers"&&!p?g[x]=1:g[x]=p?Number(p.replace(",",".")):NaN}),f&&(g.pallet={l:g.pallet_l,w:g.pallet_w,h:g.pallet_h,mass:g.pallet_mass,boxes:g.boxes_per_pallet});for(let x of["pallet_l","pallet_w","pallet_h","pallet_mass","boxes_per_pallet"])delete g[x];return g}),u=mn(c);if(u.length)throw new Error(u[0]);return c}var ap=`name;l;w;h;mass;qty;rotate;tiers;pallet_l;pallet_w;pallet_h;pallet_mass;boxes_per_pallet\r
\u041A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440\u044B \u0441 \u043A\u043E\u0440\u043F\u0443\u0441\u0430\u043C\u0438;1600;1200;1000;580;12;\u0434\u0430;2;;;;;\r
\u042F\u0449\u0438\u043A\u0438 \u0441 \u043A\u0440\u043E\u043D\u0448\u0442\u0435\u0439\u043D\u0430\u043C\u0438;1200;800;900;320;12;\u0434\u0430;2;;;;;\r
\u041F\u0430\u043B\u043B\u0435\u0442\u044B \u0441 \u043A\u0440\u0435\u043F\u0435\u0436\u043E\u043C;1200;1000;956;615;6;\u0434\u0430;1;1200;1000;144;25;1\r
`;var ky=n=>String(n??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),zy=0,Vy=n=>{let e=String(n).replace("#",""),t=[0,2,4].map(s=>parseInt(e.slice(s,s+2),16)/255).map(s=>s<=.04045?s/12.92:((s+.055)/1.055)**2.4);return t[0]*.2126+t[1]*.7152+t[2]*.0722>.24?"#172432":"#f4f7fb"};function Dc(n,e,{width:t=900,height:i=320,layer:s=0,selected:r=null,anchors:a=[],ghosts:o=[],activeStack:l=null,light:c=!1,reserveBottom:u=0,origin:d=null,changed:h=null}={}){let f=t<450,g=f?45:52,x=Math.max(.001,Math.min((t-g*2)/(f?e.w:e.l),(i-u-100)/(f?e.l:e.w))),m=(f?e.w:e.l)*x,p=(f?e.l:e.w)*x,S=(t-m)/2,I=(i-u-p)/2,M={x:S,y:I,s:x,vertical:f},b=c?"#697681":"#a7b8ca",w="plan-grid-"+ ++zy,T=new Map;n.places.forEach((A,U)=>{s&&A.tier!==s||(!T.has(A.stackKey)||T.get(A.stackKey).p.tier<A.tier)&&T.set(A.stackKey,{p:A,i:U})});let y=`<title>\u041C\u0430\u0448\u0438\u043D\u0430 ${n.number||1}: \u0442\u043E\u0447\u043D\u044B\u0439 \u043F\u043B\u0430\u043D \u0441\u0432\u0435\u0440\u0445\u0443</title><defs><pattern id="${w}" width="${1e3*x}" height="${1e3*x}" patternUnits="userSpaceOnUse"><path d="M ${1e3*x} 0 L 0 0 0 ${1e3*x}" fill="none" stroke="${b}" stroke-opacity=".15" stroke-width=".6"/></pattern></defs><rect x="${S}" y="${I}" width="${m}" height="${p}" rx="3" fill="${c?"#eef0ed":"#172432"}" stroke="${b}" stroke-opacity=".7"/><rect x="${S}" y="${I}" width="${m}" height="${p}" fill="url(#${w})"/>`,E=(A,U="")=>{let H=S+(f?A.y:A.x)*x,V=I+(f?A.x:A.y)*x,z=(f?A.w:A.l)*x,F=(f?A.l:A.w)*x;return{px:H,py:V,pw:z,ph:F,markup:`x="${H+.5}" y="${V+.5}" width="${Math.max(.2,z-1)}" height="${Math.max(.2,F-1)}" ${U}`}};for(let{p:A,i:U}of T.values()){let H=a.some(Ke=>Ke.key===A.stackKey),V=l?l===A.stackKey:A.id===r,z=h?.has(A.stackKey),{px:F,py:W,pw:ne,ph:ie,markup:_e}=E(A),ve=Vy(A.color),Ee=`${A.id}${A.pallet?" \xB7 \u041F":A.tier>1?" \xB7 "+A.tier:""}`;y+=`<rect data-place="${U}" ${_e} rx="2" fill="${A.color}" opacity="${V||!l&&r===null?1:.56}" stroke="${V||z?"#f2ba8d":c?"#fff":"#0f1a27"}" stroke-width="${V||z?2:1}"><title>${ky(A.name)} \xB7 ${A.pallet?`\u041F\u0430\u043B\u043B\u0435\u0442\u0430 \xB7 ${A.pallet.boxes} \u043A\u043E\u0440\u043E\u0431\u043E\u043A`:`${A.tier} \u044F\u0440\u0443\u0441`}${H?" \xB7 \u0437\u0430\u043A\u0440\u0435\u043F\u043B\u0435\u043D\u043E":""}${z?" \xB7 \u0440\u0430\u0437\u043C\u0435\u0449\u0435\u043D\u0438\u0435 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u043E":""}</title></rect>`,ne>Math.max(24,Ee.length*6+8)&&ie>18&&(y+=`<text x="${F+ne/2}" y="${W+ie/2+3}" text-anchor="middle" pointer-events="none" fill="${ve}" font-size="10" font-weight="600">${Ee}</text>`),H&&ne>14&&ie>14&&(y+=`<circle cx="${F+6}" cy="${W+6}" r="3" fill="${ve}" stroke="${A.color}" stroke-width="1" pointer-events="none"/>`)}if(d){let{markup:A}=E(d);y+=`<rect ${A} rx="2" fill="none" stroke="${c?"#a26e47":"#edb182"}" stroke-opacity=".65" stroke-dasharray="2 4" pointer-events="none"/>`}for(let A of o){let{px:U,py:H,markup:V}=E(A);y+=`<rect ${V} rx="2" fill="${A.invalid?"#d66f56":"#8fb8a7"}" fill-opacity=".28" stroke="${A.invalid?"#f1a18d":"#b8e0ce"}" stroke-dasharray="4 3" stroke-width="2" pointer-events="none"/>`,d&&(y+=`<path d="M ${S} ${H} H ${U} M ${U} ${I} V ${H}" fill="none" stroke="${b}" stroke-opacity=".35" stroke-dasharray="2 3" pointer-events="none"/>`)}let D=(A,U,H,V="start")=>`<text x="${A}" y="${U}" text-anchor="${V}" fill="${b}" font-size="10" font-family="Manrope,Arial,sans-serif">${H}</text>`;return y+=D(S,I-15,f?"\u041F\u0435\u0440\u0435\u0434\u043D\u044F\u044F \u0441\u0442\u0435\u043D\u043A\u0430":"\u2190 \u041A\u0430\u0431\u0438\u043D\u0430")+D(S+m,I+p+23,f?"\u0414\u0432\u0435\u0440\u0438 \u2193":"\u0414\u0432\u0435\u0440\u0438 \u2192","end")+D(t/2,i-u-13,`${e.l.toLocaleString("ru-RU")} \xD7 ${e.w.toLocaleString("ru-RU")} \u043C\u043C`,"middle"),y+=`<path d="${f?`M ${S-13} ${I} h -6 M ${S-16} ${I} v ${p} M ${S-13} ${I+p} h -6`:`M ${S} ${I-27} v -6 M ${S} ${I-30} h ${m} M ${S+m} ${I-27} v -6`}" stroke="${b}" stroke-opacity=".5" fill="none"/>`,{html:y,geometry:M,viewBox:`0 0 ${t} ${i}`}}var P=n=>document.querySelector(n),Nn=n=>[...document.querySelectorAll(n)],ut=n=>String(n??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),Ue=(n,e=0)=>Number(n).toLocaleString("ru-RU",{maximumFractionDigits:e}),xn=(n,e,t,i)=>n%100>=11&&n%100<=14?i:n%10===1?e:n%10>=2&&n%10<=4?t:i,Th=xh(),Mh="zagruzka-v7:"+location.pathname+":"+[...P("#saved-project").textContent].reduce((n,e)=>Math.imul(n,31)+e.charCodeAt(0)|0,0),Qe={gap:0,anchors:[]},Yt=[],on={past:[],future:[]},Lc=!1,Sh="",op=0,Xn=null,Ln=null,dp=null,Bt=null,Ps=!1,Is=!1,$n=-1,ra=[],lp=0,wh=null,ht=uh("mixed"),Rt={...Sn,name:"\u0415\u0432\u0440\u043E\u0444\u0443\u0440\u0430"},wn="\u0421\u043C\u0435\u0448\u0430\u043D\u043D\u0430\u044F \u043F\u0430\u0440\u0442\u0438\u044F",ss=[],Pn=null,ln=1,oi=0,ce=null,He=null,bn=!0,as=!1,ho=0,rs=0,Si="perspective",co=!1,uo=!1,aa=0,Eh=0,fp=null,Nc="",En="",oa=!1,fo=!1,_n=()=>ce?.trucks[oi]||{places:[],count:0,counts:{},mass:0,volume:0,volumePercent:0,floorArea:0,floorPercent:0,massPercent:0},pp=()=>({rows:structuredClone(ht),vehicle:{...Rt},batchName:wn,settings:structuredClone(Qe),planSnapshot:!bn&&ce?structuredClone(ce):null}),mp=()=>!mn(ht).length&&!vi(Rt).length&&!!wn.trim(),wi=()=>({schema:"zagruzka-project",version:7,modelVersion:gn,batchName:wn.trim()||"\u041D\u043E\u0432\u0430\u044F \u043F\u0430\u0440\u0442\u0438\u044F",rows:structuredClone(ht),vehicle:{...Rt},templates:structuredClone(ss),branding:{...Mi},baseline:Pn?structuredClone(Pn):null,settings:structuredClone(Qe),pilot:structuredClone(Yt),history:structuredClone(on),planSnapshot:!bn&&ce?structuredClone(ce):null});function Ei(n="action"){if(Lc||!mp())return;let e=performance.now();if(n==="action"||Sh!==n||e-op>1e3){for(on.past.push(pp()),on.past=on.past.slice(-30);JSON.stringify(on).length>15e5&&on.past.length>1;)on.past.shift();on.future=[]}op=e,Sh=n,Fc()}function Fc(){P("#undo").disabled=!on.past.length,P("#redo").disabled=!on.future.length}function Ch(n){let e=on[n],t=on[n==="past"?"future":"past"];if(!e.length)return;mp()&&t.push(pp());let i=e.pop();Lc=!0;try{Ai({...wi(),...i,history:on})}finally{Lc=!1}Sh="",Fc()}P("#undo").onclick=()=>Ch("past");P("#redo").onclick=()=>Ch("future");function St(n,e,t){clearTimeout(Eh),P("#toast").hidden=!1,P("#toast").innerHTML=`<span>${ut(n)}</span>${t?`<button id="toast-action">${ut(e)}</button>`:""}<button id="toast-close" aria-label="\u0421\u043A\u0440\u044B\u0442\u044C \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435">\xD7</button>`,t&&(P("#toast-action").onclick=()=>{P("#toast").hidden=!0,t()}),P("#toast-close").onclick=()=>P("#toast").hidden=!0,Eh=setTimeout(()=>P("#toast").hidden=!0,t?14e3:6500)}function gp(){aa=0;try{if(mn(ht).length||vi(Rt).length||!wn.trim())return;localStorage.setItem(Mh,JSON.stringify(wi())),P("#save-state").textContent="\u0427\u0435\u0440\u043D\u043E\u0432\u0438\u043A \u0441\u043E\u0445\u0440\u0430\u043D\u0451\u043D \u0432 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0435"}catch{P("#save-state").textContent="\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u0435 \u043F\u0440\u043E\u0435\u043A\u0442 \u0447\u0435\u0440\u0435\u0437 \u043C\u0435\u043D\u044E \xAB\u041F\u0440\u043E\u0435\u043A\u0442\xBB"}}function yn(){clearTimeout(aa),aa=setTimeout(gp,500)}function Rh(){P("#batch-name").value=wn,P("#vehicle-caption").textContent=`${Rt.name} \xB7 ${Ue(Rt.mass/1e3,2)} \u0442`}function Ds(){P("#cargo-list").innerHTML=ht.length?ht.map(n=>`<button class="cargo-row ${n.id===ln?"selected":""}" data-cargo="${n.id}" style="--cargo-color:${n.color}" aria-pressed="${n.id===ln}"><i class="swatch" style="background:${n.color}"></i><span class="cargo-name"><b>${ut(n.name)||"\u0411\u0435\u0437 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u044F"}</b><small>${n.pallet?`\u041F\u0430\u043B\u043B\u0435\u0442\u0430 ${Ue(n.pallet.l)} \xD7 ${Ue(n.pallet.w)} \xB7 ${Ue(n.pallet.boxes)} ${xn(n.pallet.boxes,"\u043A\u043E\u0440\u043E\u0431\u043A\u0430","\u043A\u043E\u0440\u043E\u0431\u043A\u0438","\u043A\u043E\u0440\u043E\u0431\u043E\u043A")}`:`${Ue(n.l)} \xD7 ${Ue(n.w)} \xD7 ${Ue(n.h)} \u043C\u043C`}</small></span><span class="cargo-qty">${Number.isFinite(n.qty)?Ue(n.qty):"\u2014"} ${n.pallet?"\u043F\u0430\u043B.":"\u0448\u0442."}</span></button>`).join(""):'<p class="muted tiny" style="padding:18px 0">\u0414\u043E\u0431\u0430\u0432\u044C\u0442\u0435 \u043F\u0435\u0440\u0432\u0443\u044E \u043F\u043E\u0437\u0438\u0446\u0438\u044E \u0433\u0440\u0443\u0437\u0430.</p>',Nn("[data-cargo]").forEach(n=>n.onclick=()=>Ih(Number(n.dataset.cargo)))}function Ih(n){Xn=null,Ln=null,$n=-1,ra=[],He?.setGhosts([]),He?.selectStack(null),P("#scene-overlay").hidden=!0,ln=n,Ds(),rr(),He?.highlight(n),P("#selection").hidden=!0,vn()}function sr(n,e,t,i="number",s=""){return`<div class="field"><label for="cargo-${n}">${e}</label><input id="cargo-${n}" name="${n}" type="${i}" value="${ut(Number.isNaN(t[n])?"":t[n])}" ${s} aria-describedby="error-${n}"><small id="error-${n}" class="field-error"></small></div>`}function cp(){let n=ht.find(e=>e.id===ln);P("#rules-summary")&&n&&(P("#rules-summary").textContent=`${n.rotate?"\u041F\u043E\u0432\u043E\u0440\u043E\u0442 \u0440\u0430\u0437\u0440\u0435\u0448\u0451\u043D":"\u0411\u0435\u0437 \u043F\u043E\u0432\u043E\u0440\u043E\u0442\u0430"} \xB7 ${n.pallet?"\u043F\u0430\u043B\u043B\u0435\u0442\u044B \u0432 \u043E\u0434\u0438\u043D \u044F\u0440\u0443\u0441":n.tiers===1?"\u043E\u0434\u0438\u043D \u044F\u0440\u0443\u0441":`\u0434\u043E ${n.tiers} \u044F\u0440\u0443\u0441\u043E\u0432`}`)}function rr(){let n=ht.find(e=>e.id===ln);if(P("#cargo-description").textContent=n?.pallet?"\u041F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B \u043E\u0434\u043D\u043E\u0439 \u043A\u043E\u0440\u043E\u0431\u043A\u0438. \u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u2014 \u043F\u0430\u043B\u043B\u0435\u0442 \u0441 \u0433\u0440\u0443\u0437\u043E\u043C.":"\u0413\u0430\u0431\u0430\u0440\u0438\u0442\u044B \u0438 \u043C\u0430\u0441\u0441\u0430 \u043E\u0434\u043D\u043E\u0433\u043E \u043C\u0435\u0441\u0442\u0430 \u0441 \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u043E\u0439.",!n){P("#cargo-form").innerHTML="";return}P("#cargo-form").innerHTML=`<div class="form-title"><span>${n.pallet?"\u041F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B \u043E\u0434\u043D\u043E\u0439 \u043A\u043E\u0440\u043E\u0431\u043A\u0438":"\u041F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B \u043E\u0434\u043D\u043E\u0433\u043E \u043C\u0435\u0441\u0442\u0430"}</span><button type="button" id="delete-cargo">\u0423\u0434\u0430\u043B\u0438\u0442\u044C</button></div>${sr("name","\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435",n,"text",'maxlength="80"')}<div class="fields">${sr("l","\u0414\u043B\u0438\u043D\u0430, \u043C\u043C",n)}${sr("w","\u0428\u0438\u0440\u0438\u043D\u0430, \u043C\u043C",n)}${sr("h","\u0412\u044B\u0441\u043E\u0442\u0430, \u043C\u043C",n)}</div><div class="fields two">${sr("mass",n.pallet?"\u0411\u0440\u0443\u0442\u0442\u043E \u043A\u043E\u0440\u043E\u0431\u043A\u0438, \u043A\u0433":"\u0411\u0440\u0443\u0442\u0442\u043E, \u043A\u0433",n,"number",'step="any"')}${sr("qty",n.pallet?"\u041F\u0430\u043B\u043B\u0435\u0442 \u0432 \u043F\u0430\u0440\u0442\u0438\u0438":"\u041C\u0435\u0441\u0442 \u0432 \u043F\u0430\u0440\u0442\u0438\u0438",n)}</div><button id="pallet-settings" class="packaging-button" type="button">${n.pallet?`\u041F\u0430\u043B\u043B\u0435\u0442\u0430 \xB7 ${n.pallet.boxes} ${xn(n.pallet.boxes,"\u043A\u043E\u0440\u043E\u0431\u043A\u0430","\u043A\u043E\u0440\u043E\u0431\u043A\u0438","\u043A\u043E\u0440\u043E\u0431\u043E\u043A")} \u2197`:"+ \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043F\u0430\u043B\u043B\u0435\u0442\u0443"}</button><details class="cargo-rules"><summary>\u041F\u0440\u0430\u0432\u0438\u043B\u0430 \u0443\u043A\u043B\u0430\u0434\u043A\u0438</summary><label class="check"><input name="rotate" type="checkbox" ${n.rotate?"checked":""}> \u041F\u043E\u0432\u043E\u0440\u043E\u0442 \u043D\u0430 90\xB0 \u0440\u0430\u0437\u0440\u0435\u0448\u0451\u043D</label>${n.pallet?'<p class="tiny muted" style="margin:12px 0">\u041F\u0430\u043B\u043B\u0435\u0442\u044B \u0441 \u0433\u0440\u0443\u0437\u043E\u043C \u0440\u0430\u0437\u043C\u0435\u0449\u0430\u044E\u0442\u0441\u044F \u0432 \u043E\u0434\u0438\u043D \u044F\u0440\u0443\u0441.</p>':sr("tiers","\u041C\u0430\u043A\u0441\u0438\u043C\u0443\u043C \u044F\u0440\u0443\u0441\u043E\u0432",n)}<button type="button" id="save-template" class="quiet template-save">\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u043A\u0430\u043A \u0448\u0430\u0431\u043B\u043E\u043D \u2197</button></details><p id="rules-summary" class="rules-summary"></p>`,cp(),P("#pallet-settings").onclick=()=>Gy(n),P("#delete-cargo").onclick=()=>{let e=wi();Ei(),ht=ht.filter(t=>t.id!==ln),ln=ht[0]?.id??null,Ds(),rr(),Ls(),St(`\u0423\u0434\u0430\u043B\u0435\u043D\u0430 \u043F\u043E\u0437\u0438\u0446\u0438\u044F \xAB${n.name}\xBB`,"\u0412\u0435\u0440\u043D\u0443\u0442\u044C",()=>Ai(e,"\u041F\u043E\u0437\u0438\u0446\u0438\u044F \u0432\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u0430"))},P("#save-template").onclick=()=>{if(mn([{...n,qty:1}]).length){St("\u0418\u0441\u043F\u0440\u0430\u0432\u044C\u0442\u0435 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B \u043F\u0435\u0440\u0435\u0434 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435\u043C \u0448\u0430\u0431\u043B\u043E\u043D\u0430.");return}if(ss.length>=50){St("\u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u043E 50 \u0448\u0430\u0431\u043B\u043E\u043D\u043E\u0432. \u0423\u0434\u0430\u043B\u0438\u0442\u0435 \u043D\u0435\u043D\u0443\u0436\u043D\u044B\u0439 \u0432 \u0441\u043F\u0438\u0441\u043A\u0435 \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u044F.");return}ss.push({...n,qty:1}),yn(),St("\u0428\u0430\u0431\u043B\u043E\u043D \u0441\u043E\u0445\u0440\u0430\u043D\u0451\u043D \u0432 \u0432\u0430\u0448\u0435\u043C \u043F\u0440\u043E\u0435\u043A\u0442\u0435.")},P("#cargo-form").oninput=e=>{let t=e.target.name;t&&(Ei("cargo:"+ln+":"+t),n[t]=t==="name"?e.target.value:t==="rotate"?e.target.checked:e.target.value===""?NaN:Number(e.target.value),Ds(),cp(),Ls())},P("#cargo-form").onsubmit=e=>{e.preventDefault(),Ns()},bn&&Ph()}function Gy(n){let e=n.pallet||{l:n.l,w:n.w,h:144,mass:25,boxes:1};qn("\u041F\u0430\u043B\u043B\u0435\u0442\u0430 \u0441 \u043A\u043E\u0440\u043E\u0431\u043A\u0430\u043C\u0438",`<p>\u041E\u0434\u043D\u043E \u0433\u0440\u0443\u0437\u043E\u0432\u043E\u0435 \u043C\u0435\u0441\u0442\u043E \u2014 \u043E\u0434\u043D\u0430 \u043F\u0430\u043B\u043B\u0435\u0442\u0430 \u0441 \u043E\u0434\u0438\u043D\u0430\u043A\u043E\u0432\u044B\u043C\u0438 \u043A\u043E\u0440\u043E\u0431\u043A\u0430\u043C\u0438. \u0420\u0430\u0437\u043C\u0435\u0440\u044B \u0438 \u043C\u0430\u0441\u0441\u0430 \u043A\u043E\u0440\u043E\u0431\u043A\u0438 \u0437\u0430\u0434\u0430\u043D\u044B \u0441\u043B\u0435\u0432\u0430; \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0432 \u043F\u0430\u0440\u0442\u0438\u0438 \u043E\u0431\u043E\u0437\u043D\u0430\u0447\u0430\u0435\u0442 \u0447\u0438\u0441\u043B\u043E \u043F\u0430\u043B\u043B\u0435\u0442.</p><label class="check"><input id="use-pallet" type="checkbox" ${n.pallet?"checked":""}> \u0420\u0430\u0437\u043C\u0435\u0449\u0430\u0442\u044C \u0433\u0440\u0443\u0437 \u043D\u0430 \u043F\u0430\u043B\u043B\u0435\u0442\u0430\u0445</label><div id="pallet-fields" ${n.pallet?"":"hidden"}><div class="fields">${["l","w","h"].map((s,r)=>`<div class="field"><label for="pallet-${s}">${["\u0414\u043B\u0438\u043D\u0430","\u0428\u0438\u0440\u0438\u043D\u0430","\u0412\u044B\u0441\u043E\u0442\u0430"][r]}, \u043C\u043C</label><input id="pallet-${s}" type="number" value="${e[s]}"></div>`).join("")}</div><div class="fields two"><div class="field"><label for="pallet-mass">\u041C\u0430\u0441\u0441\u0430 \u043F\u0443\u0441\u0442\u043E\u0439 \u043F\u0430\u043B\u043B\u0435\u0442\u044B, \u043A\u0433</label><input id="pallet-mass" type="number" step="any" value="${e.mass}"></div><div class="field"><label for="pallet-boxes">\u041A\u043E\u0440\u043E\u0431\u043E\u043A \u043D\u0430 \u043A\u0430\u0436\u0434\u043E\u0439 \u043F\u0430\u043B\u043B\u0435\u0442\u0435</label><input id="pallet-boxes" type="number" value="${e.boxes}"></div></div><div class="pallet-preview" id="pallet-preview"></div><p class="formula-note">\u041A\u043E\u0440\u043E\u0431\u043A\u0438 \u0440\u0430\u0441\u043F\u043E\u043B\u0430\u0433\u0430\u044E\u0442\u0441\u044F \u0440\u043E\u0432\u043D\u044B\u043C\u0438 \u0440\u044F\u0434\u0430\u043C\u0438, \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0435 \u0441\u043B\u043E\u0438 \u0441\u0442\u043E\u044F\u0442 \u043D\u0430 \u0442\u0435\u0445 \u0436\u0435 \u043C\u0435\u0441\u0442\u0430\u0445. \u041F\u043E\u0432\u043E\u0440\u043E\u0442 \u043A\u043E\u0440\u043E\u0431\u043E\u043A \u0432\u043D\u0443\u0442\u0440\u0438 \u043F\u0430\u043B\u043B\u0435\u0442\u044B \u0438 \u0441\u043C\u0435\u0448\u0430\u043D\u043D\u044B\u0439 \u0441\u043E\u0441\u0442\u0430\u0432 \u043D\u0435 \u043C\u043E\u0434\u0435\u043B\u0438\u0440\u0443\u044E\u0442\u0441\u044F. \u0417\u043D\u0430\u0447\u0435\u043D\u0438\u044F 144 \u043C\u043C / 25 \u043A\u0433 \u2014 \u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u0443\u0435\u043C\u044B\u0435 \u0438\u0441\u0445\u043E\u0434\u043D\u044B\u0435 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B, \u0430 \u043D\u0435 \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u0435 \u0445\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043A \u0432\u0430\u0448\u0435\u0439 \u043F\u0430\u043B\u043B\u0435\u0442\u044B.</p></div><p id="pallet-error" class="form-error" role="alert"></p><button id="apply-pallet" class="primary">\u041F\u0440\u0438\u043C\u0435\u043D\u0438\u0442\u044C \u2197</button>`,"pallet");let t=()=>Object.fromEntries(["l","w","h","mass","boxes"].map(s=>[s,Number(P("#pallet-"+s).value)])),i=()=>{let s=P("#use-pallet").checked;P("#pallet-fields").hidden=!s;let r={...n,pallet:s?t():null},a=s?mn([{...r,qty:1}]):[];if(P("#pallet-error").textContent=a[0]||"",P("#apply-pallet").disabled=!!a.length,s&&!a.length){let o=hn(r),l=_o(r);P("#pallet-preview").innerHTML=`<strong>\u041E\u0434\u043D\u043E \u043C\u0435\u0441\u0442\u043E: ${Ue(o.l)} \xD7 ${Ue(o.w)} \xD7 ${Ue(o.h)} \u043C\u043C \xB7 ${Ue(o.mass,3)} \u043A\u0433</strong><small>\u0421\u0435\u0442\u043A\u0430 ${l.columns} \xD7 ${l.rows} \xB7 ${l.layers} ${xn(l.layers,"\u0441\u043B\u043E\u0439","\u0441\u043B\u043E\u044F","\u0441\u043B\u043E\u0451\u0432")} \xB7 ${r.pallet.boxes} ${xn(r.pallet.boxes,"\u043A\u043E\u0440\u043E\u0431\u043A\u0430","\u043A\u043E\u0440\u043E\u0431\u043A\u0438","\u043A\u043E\u0440\u043E\u0431\u043E\u043A")}</small>`}else P("#pallet-preview").textContent=""};P("#use-pallet").onchange=i,Nn("#pallet-fields input").forEach(s=>s.oninput=i),i(),P("#apply-pallet").onclick=()=>{Ei(),P("#use-pallet").checked?n.pallet=t():delete n.pallet,Ds(),rr(),Ls(),Dn(),Ns()}}function Ph(){let n=ht.find(e=>e.id===ln);n&&Nn("#cargo-form input").forEach(e=>{let t=ep(n,e.name),i=P("#error-"+e.name);i&&(i.textContent=t),e.setAttribute("aria-invalid",String(!!t))})}function Ls(){Ln=null,Xn=null,$n=-1,He?.setGhosts([]),He?.selectStack(null),He?.showSequence(null),P("#scene-overlay").hidden=!0,Fc(),ho++,Th.cancel(),as=!1,bn=!0,document.body.classList.add("dirty"),He?.finishAnimation(),P("#plan-status").textContent="\u041D\u0443\u0436\u0435\u043D \u043F\u0435\u0440\u0435\u0441\u0447\u0451\u0442",P("#stale-scene").hidden=!ce,P("#calculate").disabled=!1,P("#calculate").innerHTML="\u041F\u0435\u0440\u0435\u0441\u0447\u0438\u0442\u0430\u0442\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0443 <span>\u2197</span>",P("#report").disabled=!0,P("#selection").hidden=!0,P("#form-error").textContent=mn(ht)[0]||"",P("#project-caption").textContent="\u0418\u0437\u043C\u0435\u043D\u0451\u043D\u043D\u0430\u044F \u043F\u0430\u0440\u0442\u0438\u044F",Ph(),yn(),Nc==="compare"&&Dn()}async function Ns(){let n=mn(ht).concat(vi(Rt));if(wn.trim()||n.unshift("\u0423\u043A\u0430\u0436\u0438\u0442\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043F\u0430\u0440\u0442\u0438\u0438."),n.length){P("#form-error").textContent=n[0],Ph(),P("#cargo-form [aria-invalid=true]")?.focus();return}let e=++ho;as=!0,P("#calculate").disabled=!0,P("#calculate").textContent="\u0420\u0430\u0441\u0441\u0447\u0438\u0442\u044B\u0432\u0430\u0435\u043C\u2026",P("#plan-status").textContent="\u041F\u043E\u0434\u0431\u0438\u0440\u0430\u0435\u043C \u0440\u0430\u0437\u043C\u0435\u0449\u0435\u043D\u0438\u0435";let t=performance.now();try{let i=await Th.run(ht,Rt,Qe);if(e!==ho)return;i.elapsedMs=Math.round(performance.now()-t),Dh(i)}catch(i){if(i.name==="AbortError")return;as=!1,P("#calculate").disabled=!1,P("#calculate").textContent="\u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u044C \u0440\u0430\u0441\u0447\u0451\u0442",P("#form-error").textContent=i.message,P("#plan-status").textContent=bn?"\u041F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u0443\u0441\u043B\u043E\u0432\u0438\u044F":"\u0421\u043E\u0445\u0440\u0430\u043D\u0451\u043D \u043F\u0440\u0435\u0436\u043D\u0438\u0439 \u043F\u043B\u0430\u043D"}}function Dh(n){let e=bi(n,ht,Rt,n.settings);if(!e.ok)throw new Error("\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 \u043D\u0435 \u043F\u0440\u0438\u043D\u044F\u0442: "+e.errors.join(" "));n.certificate=e,Qe=n.settings,ce=n,ce.elapsedMs??=0,oi=0,bn=as=!1,document.body.classList.remove("dirty"),P("#calculate").disabled=!1,P("#calculate").innerHTML="\u0420\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u0442\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0443 <span>\u2197</span>",P("#report").disabled=!1,P("#stale-scene").hidden=!0,P("#form-error").textContent="",P("#plan-status").textContent=n.unplacedCount?"\u0415\u0441\u0442\u044C \u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u0438\u044F":"\u041F\u043B\u0430\u043D \u043F\u0440\u043E\u0432\u0435\u0440\u0435\u043D",He?.setVehicle(Rt),He?.view(Si==="plan"?"perspective":Si),Uc(),yn()}function Uc(){Ln=null,$n=-1,P("#scene-overlay").hidden=!0,He?.setGhosts([]),He?.showSequence(null),Xn=null,He?.selectStack(null);let n=_n(),e=ce.vehicle;P("#result-title").textContent=`${ce.trucks.length} ${xn(ce.trucks.length,"\u043C\u0430\u0448\u0438\u043D\u0430","\u043C\u0430\u0448\u0438\u043D\u044B","\u043C\u0430\u0448\u0438\u043D")} \xB7 ${Ue(ce.placed)} \u0438\u0437 ${Ue(ce.total)} \u043C\u0435\u0441\u0442`,P("#scene-caption").textContent=ce.trucks.length?`\u041C\u0430\u0448\u0438\u043D\u0430 ${oi+1} \xB7 ${Ue(n.count)} \u043C\u0435\u0441\u0442${n.pallets?` \xB7 ${n.pallets} ${xn(n.pallets,"\u043F\u0430\u043B\u043B\u0435\u0442\u0430","\u043F\u0430\u043B\u043B\u0435\u0442\u044B","\u043F\u0430\u043B\u043B\u0435\u0442")}`:""}`:"\u041F\u0430\u0440\u0442\u0438\u044F \u043D\u0435 \u0440\u0430\u0437\u043C\u0435\u0449\u0435\u043D\u0430",P("#scene-size").textContent=`${Ue(e.l/1e3,2)} \xD7 ${Ue(e.w/1e3,2)} \xD7 ${Ue(e.h/1e3,2)} \u043C`,P("#machines").innerHTML=ce.trucks.map((i,s)=>`<button data-truck="${s}" class="${oi===s?"active":""}" aria-pressed="${oi===s}">${s+1} <span class="muted">\xB7 ${Ue(i.count)} \u043C\u0435\u0441\u0442</span></button>`).join(""),P("#machine-total").textContent=n.pallets?`${Ue(n.pallets)} ${xn(n.pallets,"\u043F\u0430\u043B\u043B\u0435\u0442\u0430","\u043F\u0430\u043B\u043B\u0435\u0442\u044B","\u043F\u0430\u043B\u043B\u0435\u0442")} \xB7 ${Ue(n.boxes)} \u0435\u0434. \u0433\u0440\u0443\u0437\u0430`:ce.trucks.length>1?`${ce.trucks.length} \u043C\u0430\u0448\u0438\u043D \u0432 \u043F\u043B\u0430\u043D\u0435`:"\u0412\u0441\u044F \u043F\u0430\u0440\u0442\u0438\u044F",Nn("[data-truck]").forEach(i=>i.onclick=()=>{bn||(oi=Number(i.dataset.truck),Uc())}),P("#metrics").innerHTML=[[n.pallets?"\u041C\u0430\u0441\u0441\u0430 \u0441 \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u043E\u0439":"\u041C\u0430\u0441\u0441\u0430 \u0433\u0440\u0443\u0437\u0430",Ue(n.mass/1e3,2),`/ ${Ue(e.mass/1e3,2)} \u0442`,n.mass/e.mass*100,`\u0417\u0430\u043F\u0430\u0441 ${Ue((e.mass-n.mass)/1e3,2)} \u0442`],["\u041F\u043B\u043E\u0449\u0430\u0434\u044C \u043F\u043E\u043B\u0430",Ue(n.floorPercent,1),"%",n.floorPercent,`\u041E\u0441\u043D\u043E\u0432\u0430\u043D\u0438\u044F ${Ue(n.floorArea/1e6,2)} \u043C\xB2`],["\u041E\u0431\u044A\u0451\u043C \u043A\u0443\u0437\u043E\u0432\u0430",Ue(n.volumePercent,1),"%",n.volumePercent,`${Ue(n.volume,2)} \u0438\u0437 ${Ue(e.l*e.w*e.h/1e9,2)} \u043C\xB3`]].map(([i,s,r,a,o])=>`<div><div class="metric-label">${i}</div><div class="metric-value">${s} <small>${r}</small></div><div class="track"><div style="width:${a}%"></div></div><div class="metric-note">${o}</div></div>`).join("");let t=Math.max(1,...n.places.map(i=>i.tier));rs>t&&(rs=0),P("#layer-control").hidden=t<2,P("#layer").innerHTML='<option value="0">\u0412\u0441\u0435</option>'+Array.from({length:t},(i,s)=>`<option value="${s+1}">\u042F\u0440\u0443\u0441 ${s+1}</option>`).join(""),P("#layer").value=rs,He?.setCargo(n.places),He?.setPins(Qe.anchors.filter(i=>i.truck===n.number)),He?.setLayer(rs),He?.highlight(ln),_p(),P("#selection").hidden=!0,P("#unplaced").hidden=!ce.unplacedCount,P("#unplaced").innerHTML=`<b>\u0412\u043D\u0435 \u043F\u043B\u0430\u043D\u0430: ${Ue(ce.unplacedCount)} \u043C\u0435\u0441\u0442</b>`+ce.unplaced.map(i=>`<div class="unplaced-row"><div>${ut(i.name)} \xB7 ${Ue(i.qty)} ${i.pallet?"\u043F\u0430\u043B.":"\u0448\u0442."}<p>${ut(i.reason)}</p></div><button data-unplaced="${i.id}">\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u2197</button></div>`).join(""),Nn("[data-unplaced]").forEach(i=>i.onclick=()=>{Ih(Number(i.dataset.unplaced)),P("#cargo-form").scrollIntoView({behavior:"smooth",block:"center"})}),P("#plan-note").textContent=ce.unplacedCount?"\u041F\u043B\u0430\u043D \u043F\u043E\u0441\u0442\u0440\u043E\u0435\u043D \u0434\u043B\u044F \u0434\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u043E\u0433\u043E \u0433\u0440\u0443\u0437\u0430. \u041F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u043F\u0440\u0438\u0447\u0438\u043D\u044B \u043D\u0435\u0440\u0430\u0437\u043C\u0435\u0449\u0435\u043D\u0438\u044F.":ce.diagnostics.boundReached?"\u0427\u0438\u0441\u043B\u043E \u043C\u0430\u0448\u0438\u043D \u0441\u043E\u0432\u043F\u0430\u043B\u043E \u0441 \u043D\u0438\u0436\u043D\u0435\u0439 \u043E\u0446\u0435\u043D\u043A\u043E\u0439 \u0440\u0430\u0441\u0447\u0451\u0442\u043D\u043E\u0439 \u043C\u043E\u0434\u0435\u043B\u0438.":"\u041D\u0430\u0439\u0434\u0435\u043D\u0430 \u0434\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u0430\u044F \u0441\u0445\u0435\u043C\u0430; \u043C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0435 \u0447\u0438\u0441\u043B\u043E \u043C\u0430\u0448\u0438\u043D \u043D\u0435 \u0434\u043E\u043A\u0430\u0437\u0430\u043D\u043E.",En="",vn()}function Bc(n){bn||as||(Ih(n.id),Xn=n,P("#selection").style.setProperty("--selection-color",n.color),He?.selectStack(n.stackKey),xp(),En="",vn())}function xp(){let n=Xn;if(!n)return;P("#selection").style.setProperty("--selection-color",n.color);let e=ir(_n(),n),t=Qe.anchors.some(i=>i.key===n.stackKey);P("#selection").hidden=!1,P("#selection").innerHTML=`<div class="selection-info"><b>${ut(n.name)}</b><small>${n.l} \xD7 ${n.w} \xD7 ${n.h} \u043C\u043C \xB7 ${Ue(n.mass,3)} \u043A\u0433 \xB7 \u0441\u0442\u043E\u043F\u043A\u0430 ${e.length} ${xn(e.length,"\u043C\u0435\u0441\u0442\u043E","\u043C\u0435\u0441\u0442\u0430","\u043C\u0435\u0441\u0442")}${t?" \xB7 \u0437\u0430\u043A\u0440\u0435\u043F\u043B\u0435\u043D\u0430":""}</small><small>${n.pallet?`${n.pallet.boxes} ${xn(n.pallet.boxes,"\u043A\u043E\u0440\u043E\u0431\u043A\u0430","\u043A\u043E\u0440\u043E\u0431\u043A\u0438","\u043A\u043E\u0440\u043E\u0431\u043E\u043A")} \xB7 \u043F\u0430\u043B\u043B\u0435\u0442\u0430 ${n.pallet.mass} \u043A\u0433 \xB7 `:""}X ${Ue(n.x)} / Y ${Ue(n.y)} \u043C\u043C \xB7 \u043C\u0430\u0441\u0441\u0430 \u0441\u0442\u043E\u043F\u043A\u0438 ${Ue(e.reduce((i,s)=>i+s.mass,0),2)} \u043A\u0433</small></div><div class="selection-actions"><button id="pin-stack" class="outline">${t?"\u041E\u0442\u043A\u0440\u0435\u043F\u0438\u0442\u044C":"\u0417\u0430\u043A\u0440\u0435\u043F\u0438\u0442\u044C"}</button><button id="move-stack" class="quiet">\u041F\u0435\u0440\u0435\u0434\u0432\u0438\u043D\u0443\u0442\u044C</button><button id="residual" class="quiet">\u0427\u0442\u043E \u0435\u0449\u0451 \u0432\u043E\u0439\u0434\u0451\u0442?</button><button id="close-selection" aria-label="\u0421\u043A\u0440\u044B\u0442\u044C \u0441\u0432\u0435\u0434\u0435\u043D\u0438\u044F \u043E \u043C\u0435\u0441\u0442\u0435">\xD7</button></div>`,P("#close-selection").onclick=()=>{Xn=null,Ln=null,He?.selectStack(null),He?.setGhosts([]),P("#selection").hidden=!0,P("#scene-overlay").hidden=!0,En="",vn()},P("#pin-stack").onclick=()=>{Ei(),Qe.anchors=Qe.anchors.filter(i=>i.key!==n.stackKey),t||Qe.anchors.push(ph(_n(),n)),ce.settings=structuredClone(Qe),ce.planId=Rs({rows:ht,vehicle:Rt,settings:Qe,modelVersion:gn}),ce.certificate=bi(ce,ht,Rt,Qe),He?.setPins(Qe.anchors.filter(i=>i.truck===_n().number)),xp(),En="",vn(),yn(),St(t?"\u0421\u0442\u043E\u043F\u043A\u0430 \u043E\u0442\u043A\u0440\u0435\u043F\u043B\u0435\u043D\u0430.":"\u0421\u0442\u043E\u043F\u043A\u0430 \u0437\u0430\u043A\u0440\u0435\u043F\u043B\u0435\u043D\u0430. \u041F\u0435\u0440\u0435\u0441\u0447\u0451\u0442 \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442 \u0435\u0451 \u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435.")},P("#move-stack").onclick=()=>Hy(),P("#residual").onclick=()=>Wy()}function vn(){if(!ce||Si!=="plan")return;let n=P("#floor-plan"),e=Math.round(n.clientWidth||700),t=Math.round(n.clientHeight||400),i=Number.isInteger(Ln?.found)||$n>=0?Math.max(130,Math.ceil(P("#scene-overlay").getBoundingClientRect().height)+60):0,s=[ho,oi,rs,ln,e,t,i,Xn?.stackKey,JSON.stringify(Qe.anchors),JSON.stringify(Ln)].join("/");if(s===En)return;En=s;let r=Dc(_n(),ce.vehicle,{width:e,height:t,layer:rs,selected:ln,anchors:Qe.anchors,ghosts:Ln?.places||[],origin:Bt?.moved?Bt.base:null,reserveBottom:i,activeStack:Xn?.stackKey});dp=r.geometry,n.setAttribute("viewBox",r.viewBox),n.innerHTML=r.html}P("#floor-plan").onclick=n=>{if(Bt?.moved)return;let e=n.target.closest("[data-place]");e&&Bc(_n().places[Number(e.dataset.place)])};function _p(){P("#scene-hint").textContent=Si==="plan"?"\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u0442\u043E\u043F\u043A\u0443 \xB7 \u043F\u0435\u0440\u0435\u0442\u0430\u0449\u0438\u0442\u0435 \u0434\u043B\u044F \u043F\u0435\u0440\u0435\u043C\u0435\u0449\u0435\u043D\u0438\u044F":Is?"\u0420\u0430\u0437\u0431\u043E\u0440 \u044F\u0440\u0443\u0441\u043E\u0432 \u2014 \u0443\u0441\u043B\u043E\u0432\u043D\u044B\u0435 \u0440\u0430\u0441\u0441\u0442\u043E\u044F\u043D\u0438\u044F":He?.diagnostics().detailMode==="blocks"?"\u0411\u043E\u043B\u044C\u0448\u0430\u044F \u043F\u0430\u0440\u0442\u0438\u044F: \u0433\u0440\u0443\u0437 \u043D\u0430 \u043F\u0430\u043B\u043B\u0435\u0442\u0430\u0445 \u043F\u043E\u043A\u0430\u0437\u0430\u043D \u043E\u0431\u0449\u0438\u043C\u0438 \u0431\u043B\u043E\u043A\u0430\u043C\u0438":"\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0433\u0440\u0443\u0437 \xB7 \u0432\u0440\u0430\u0449\u0430\u0439\u0442\u0435 \u0441\u0446\u0435\u043D\u0443"}function ar(n){let e=++lp,t=Si;Si=n,Nn("[data-view]").forEach(r=>{r.classList.toggle("active",r.dataset.view===n),r.setAttribute("aria-pressed",String(r.dataset.view===n))});let i=matchMedia("(prefers-reduced-motion: reduce)").matches,s=oa&&!fo&&!i;n==="plan"?s&&t!=="plan"?(He?.view("top",!0),setTimeout(()=>{e===lp&&(P("#floor-plan").toggleAttribute("hidden",!1),P("#scene").hidden=!0,He?.setVisible(!1),En="",vn(),P("#floor-plan").animate([{opacity:0},{opacity:1}],{duration:180}))},460)):(P("#floor-plan").toggleAttribute("hidden",!1),P("#scene").hidden=!0,He?.setVisible(!1),En="",vn()):(P("#floor-plan").toggleAttribute("hidden",!0),P("#scene").hidden=!1,He?.setVisible(!0),He?.view(n,s)),_p()}Nn("[data-view]").forEach(n=>n.onclick=()=>ar(n.dataset.view));P("#layer").onchange=n=>{rs=Number(n.target.value),He?.setLayer(rs),vn()};function Fn(){P("#project-menu").hidden=P("#scene-menu").hidden=!0,P("#project-menu-button").setAttribute("aria-expanded","false"),P("#scene-menu-button").setAttribute("aria-expanded","false")}for(let n of["project","scene"])P("#"+n+"-menu-button").onclick=()=>{let e=P("#"+n+"-menu"),t=e.hidden;Fn(),e.hidden=!t,P("#"+n+"-menu-button").setAttribute("aria-expanded",String(t))};document.addEventListener("click",n=>{n.target.closest(".menu-wrap")||Fn()});function qn(n,e,t=""){Fn(),fp=document.activeElement,Nc=t,P("#drawer-title").textContent=n,P("#drawer-content").innerHTML=e,P("#drawer").hidden=P("#drawer-backdrop").hidden=!1,document.body.style.overflow="hidden",P("#close-drawer").focus()}function Dn(){P("#drawer").hidden=P("#drawer-backdrop").hidden=!0,document.body.style.overflow="",Nc="",fp?.focus?.()}P("#close-drawer").onclick=P("#drawer-backdrop").onclick=Dn;document.addEventListener("keydown",n=>{if(n.key==="Escape"&&(Dn(),Fn()),n.key==="Tab"&&!P("#drawer").hidden){let e=Nn("#drawer button:not(:disabled),#drawer input,#drawer select,#drawer textarea,#drawer a").filter(s=>s.getClientRects().length),t=e[0],i=e.at(-1);n.shiftKey&&document.activeElement===t?(n.preventDefault(),i?.focus()):!n.shiftKey&&document.activeElement===i&&(n.preventDefault(),t?.focus())}});function Ai(n,e,t=!1){Fn();let i=sa(n);Ei(),(Lc||t)&&(on=i.history),Qe=i.settings,Yt=i.pilot,ht=i.rows,Rt=i.vehicle,wn=i.batchName,ss=i.templates,Pn=i.baseline,_h(i.branding),ln=ht[0]?.id??null,Rh(),Ds(),rr(),Ls(),Dn(),la(),i.planSnapshot?Dh(i.planSnapshot):Ns(),e&&St(e)}P("#batch-name").oninput=n=>{Ei("batch"),wn=n.target.value,Ls()};P("#save-project").onclick=()=>{try{let n=sa(wi());Pc("ZAGRUZKA_Project.json",JSON.stringify(n,null,2)),Fn(),St("\u041F\u0440\u043E\u0435\u043A\u0442 \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D \u043A \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044E.")}catch(n){St(n.message)}};P("#open-project").onclick=()=>{Fn(),P("#project-file").click()};P("#import-csv").onclick=()=>{Fn(),P("#csv-file").click()};P("#csv-sample").onclick=()=>{Fn(),Pc("ZAGRUZKA_Cargo.csv","\uFEFF"+ap,"text/csv;charset=utf-8")};P("#project-file").onchange=async n=>{let e=n.target.files[0];if(e)try{if(e.size>20*1024*1024)throw new Error("\u0424\u0430\u0439\u043B \u043F\u0440\u043E\u0435\u043A\u0442\u0430 \u0441\u043B\u0438\u0448\u043A\u043E\u043C \u0431\u043E\u043B\u044C\u0448\u043E\u0439.");let t=wi();Ai(JSON.parse(await e.text()),null,!0),St("\u041F\u0440\u043E\u0435\u043A\u0442 \u043E\u0442\u043A\u0440\u044B\u0442.","\u0412\u0435\u0440\u043D\u0443\u0442\u044C \u043F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0438\u0439",()=>Ai(t))}catch(t){St(t.message)}finally{P("#project-file").value=""}};P("#csv-file").onchange=async n=>{let e=n.target.files[0];if(e)try{if(e.size>2*1024*1024)throw new Error("CSV \u0441\u043B\u0438\u0448\u043A\u043E\u043C \u0431\u043E\u043B\u044C\u0448\u043E\u0439.");let t=rp(await e.text()),i=wi();Ai({...i,planSnapshot:null,settings:{...Qe,anchors:[]},rows:t,batchName:e.name.replace(/\.[^.]+$/,"").slice(0,80),baseline:null}),St(`\u0418\u043C\u043F\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u043E ${t.length} \u043F\u043E\u0437\u0438\u0446\u0438\u0439.`,"\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C",()=>Ai(i))}catch(t){St(t.message)}finally{P("#csv-file").value=""}};P("#new-project").onclick=()=>{let n=wi();Ai({...n,planSnapshot:null,settings:{...Qe,anchors:[]},rows:[],batchName:"\u041D\u043E\u0432\u0430\u044F \u043F\u0430\u0440\u0442\u0438\u044F",baseline:null}),St("\u0421\u043E\u0437\u0434\u0430\u043D\u0430 \u043F\u0443\u0441\u0442\u0430\u044F \u043F\u0430\u0440\u0442\u0438\u044F.","\u0412\u0435\u0440\u043D\u0443\u0442\u044C \u043F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0443\u044E",()=>Ai(n))};function up(n){if(ht.length>=50){St("\u0412 \u043F\u0430\u0440\u0442\u0438\u0438 \u0443\u0436\u0435 50 \u043F\u043E\u0437\u0438\u0446\u0438\u0439.");return}Ei();let e=Math.max(0,...ht.map(t=>t.id))+1;ht.push({...n,id:e,qty:1,color:ai[(e-1)%ai.length]}),ln=e,Dn(),Ds(),rr(),Ls(),P("#cargo-name")?.focus()}P("#add").onclick=()=>{qn("\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0433\u0440\u0443\u0437",`<button class="choice-row" id="blank-cargo"><span><b>\u041D\u043E\u0432\u043E\u0435 \u0433\u0440\u0443\u0437\u043E\u0432\u043E\u0435 \u043C\u0435\u0441\u0442\u043E</b><small>\u0417\u0430\u0434\u0430\u0442\u044C \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B \u0432\u0440\u0443\u0447\u043D\u0443\u044E</small></span><span class="choice-arrow">\u2197</span></button><h3>\u0421\u0442\u0430\u0440\u0442\u043E\u0432\u044B\u0435 \u043F\u0440\u0438\u043C\u0435\u0440\u044B</h3><p class="formula-note">\u0420\u0430\u0437\u043C\u0435\u0440\u044B \u0438 \u043C\u0430\u0441\u0441\u0430 \u2014 \u0443\u0441\u043B\u043E\u0432\u043D\u044B\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F. \u0423\u0442\u043E\u0447\u043D\u0438\u0442\u0435 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B \u0442\u0430\u0440\u044B \u043F\u0435\u0440\u0435\u0434 \u0440\u0430\u0441\u0447\u0451\u0442\u043E\u043C.</p>${yh.map((n,e)=>`<button class="choice-row" data-template="starter:${e}"><span><b>${ut(n.name)}</b><small>${n.l} \xD7 ${n.w} \xD7 ${n.h} \u043C\u043C \xB7 ${n.mass} \u043A\u0433</small></span><span class="choice-arrow">+</span></button>`).join("")}${ss.length?"<h3>\u0412\u0430\u0448\u0438 \u0448\u0430\u0431\u043B\u043E\u043D\u044B</h3>":""}${ss.map((n,e)=>`<div style="display:flex;align-items:center"><button class="choice-row" data-template="user:${e}"><span><b>${ut(n.name)}</b><small>${n.l} \xD7 ${n.w} \xD7 ${n.h} \u043C\u043C \xB7 ${n.mass} \u043A\u0433</small></span><span class="choice-arrow">+</span></button><button data-delete-template="${e}" aria-label="\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0448\u0430\u0431\u043B\u043E\u043D ${ut(n.name)}">\xD7</button></div>`).join("")}`),P("#blank-cargo").onclick=()=>up({name:"\u041D\u043E\u0432\u0430\u044F \u043F\u043E\u0437\u0438\u0446\u0438\u044F",l:1200,w:800,h:1e3,mass:350,rotate:!1,tiers:1}),Nn("[data-template]").forEach(n=>n.onclick=()=>{let[e,t]=n.dataset.template.split(":");up((e==="starter"?yh:ss)[Number(t)])}),Nn("[data-delete-template]").forEach(n=>n.onclick=()=>{ss.splice(Number(n.dataset.deleteTemplate),1),yn(),P("#add").click()})};P("#examples").onclick=()=>{qn("\u0423\u0447\u0435\u0431\u043D\u044B\u0435 \u043F\u0440\u0438\u043C\u0435\u0440\u044B","<p>\u041F\u0440\u0438\u043C\u0435\u0440\u044B \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044E\u0442 \u0443\u0441\u043B\u043E\u0432\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435. \u0422\u0435\u043A\u0443\u0449\u0443\u044E \u043F\u0430\u0440\u0442\u0438\u044E \u043C\u043E\u0436\u043D\u043E \u0432\u0435\u0440\u043D\u0443\u0442\u044C \u043F\u043E\u0441\u043B\u0435 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438.</p>"+Object.entries(tr).map(([n,e])=>`<button class="choice-row" data-example="${n}"><span><b>${ut(e.name)}</b><small>${e.rows.length} \u043F\u043E\u0437\u0438\u0446\u0438\u0439 \u0433\u0440\u0443\u0437\u0430</small></span><span class="choice-arrow">\u2197</span></button>`).join("")),Nn("[data-example]").forEach(n=>n.onclick=()=>{let e=wi(),t=n.dataset.example;Ai({...e,planSnapshot:null,settings:{gap:0,anchors:[]},rows:uh(t),vehicle:{...Sn,name:"\u0415\u0432\u0440\u043E\u0444\u0443\u0440\u0430"},batchName:tr[t].name,baseline:null}),P("#project-caption").textContent="\u0423\u0447\u0435\u0431\u043D\u044B\u0439 \u043F\u0440\u0438\u043C\u0435\u0440",St("\u0423\u0447\u0435\u0431\u043D\u044B\u0439 \u043F\u0440\u0438\u043C\u0435\u0440 \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D.","\u0412\u0435\u0440\u043D\u0443\u0442\u044C \u043F\u0430\u0440\u0442\u0438\u044E",()=>Ai(e))})};P("#vehicle-button").onclick=()=>{qn("\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442",`<p>\u0412\u043D\u0443\u0442\u0440\u0435\u043D\u043D\u0438\u0435 \u0440\u0430\u0437\u043C\u0435\u0440\u044B \u0433\u0440\u0443\u0437\u043E\u0432\u043E\u0433\u043E \u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0441\u0442\u0432\u0430 \u0438 \u0434\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u0430\u044F \u043C\u0430\u0441\u0441\u0430 \u0433\u0440\u0443\u0437\u0430. \u0421\u0446\u0435\u043D\u0430 \u0438 \u0440\u0430\u0441\u0447\u0451\u0442 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044E\u0442 \u043E\u0434\u043D\u0438 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B.</p><form id="vehicle-form" novalidate><div class="field"><label for="vehicle-name">\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043F\u0440\u043E\u0444\u0438\u043B\u044F</label><input id="vehicle-name" maxlength="80" value="${ut(Rt.name)}"></div><div class="fields">${["l","w","h"].map((n,e)=>`<div class="field"><label for="vehicle-${n}">${["\u0414\u043B\u0438\u043D\u0430","\u0428\u0438\u0440\u0438\u043D\u0430","\u0412\u044B\u0441\u043E\u0442\u0430"][e]}, \u043C\u043C</label><input id="vehicle-${n}" type="number" value="${Rt[n]}"></div>`).join("")}</div><div class="field"><label for="vehicle-mass">\u0414\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u0430\u044F \u043C\u0430\u0441\u0441\u0430 \u0433\u0440\u0443\u0437\u0430, \u043A\u0433</label><input id="vehicle-mass" type="number" step="any" value="${Rt.mass}"></div><p id="vehicle-error" class="form-error" role="alert"></p><button class="primary" type="submit">\u041F\u0440\u0438\u043C\u0435\u043D\u0438\u0442\u044C \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B <span>\u2197</span></button><button id="default-vehicle" class="quiet" type="button" style="margin-top:12px">\u0412\u0435\u0440\u043D\u0443\u0442\u044C \u0443\u0447\u0435\u0431\u043D\u0443\u044E \u0435\u0432\u0440\u043E\u0444\u0443\u0440\u0443</button></form>`),P("#default-vehicle").onclick=()=>{for(let n of["l","w","h","mass"])P("#vehicle-"+n).value=Sn[n];P("#vehicle-name").value="\u0415\u0432\u0440\u043E\u0444\u0443\u0440\u0430"},P("#vehicle-form").onsubmit=n=>{n.preventDefault();let e={name:P("#vehicle-name").value.trim()||"\u041C\u043E\u0439 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442"};for(let i of["l","w","h","mass"])e[i]=Number(P("#vehicle-"+i).value);let t=vi(e);if(t.length){P("#vehicle-error").textContent=t[0];return}Ei(),Rt=e,Rh(),Dn(),Ls(),Ns()}};function hp(n){let e=n.trucks.length,t=n.vehicle;return{trucks:e,placed:n.placed,total:n.total,volume:e?n.trucks.reduce((i,s)=>i+s.volume,0)/(e*t.l*t.w*t.h/1e9)*100:0,floor:e?n.trucks.reduce((i,s)=>i+s.floorArea,0)/(e*t.l*t.w)*100:0}}P("#compare-button").onclick=()=>{if(bn||as||!ce){St("\u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u0440\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u0439\u0442\u0435 \u0442\u0435\u043A\u0443\u0449\u0443\u044E \u043F\u0430\u0440\u0442\u0438\u044E.");return}if(!Pn){qn("\u0421\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u0435 \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u043E\u0432",'<p>\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u0435 \u0442\u0435\u043A\u0443\u0449\u0438\u0439 \u0432\u0430\u0440\u0438\u0430\u043D\u0442 \u043A\u0430\u043A \u0438\u0441\u0445\u043E\u0434\u043D\u044B\u0439. \u0417\u0430\u0442\u0435\u043C \u0438\u0437\u043C\u0435\u043D\u0438\u0442\u0435 \u043F\u0430\u0440\u0442\u0438\u044E, \u043F\u0440\u0430\u0432\u0438\u043B\u0430 \u0443\u043A\u043B\u0430\u0434\u043A\u0438 \u0438\u043B\u0438 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442 \u0438 \u043F\u0435\u0440\u0435\u0441\u0447\u0438\u0442\u0430\u0439\u0442\u0435 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0443.</p><button class="primary" id="pin-baseline">\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0438\u0441\u0445\u043E\u0434\u043D\u044B\u0439 \u0432\u0430\u0440\u0438\u0430\u043D\u0442 <span>\u2197</span></button>',"compare"),P("#pin-baseline").onclick=()=>{Pn={project:{...wi(),baseline:null},label:wn},yn(),Dn(),St("\u0418\u0441\u0445\u043E\u0434\u043D\u044B\u0439 \u0432\u0430\u0440\u0438\u0430\u043D\u0442 \u0441\u043E\u0445\u0440\u0430\u043D\u0451\u043D. \u0422\u0435\u043F\u0435\u0440\u044C \u043C\u043E\u0436\u043D\u043E \u043C\u0435\u043D\u044F\u0442\u044C \u0443\u0441\u043B\u043E\u0432\u0438\u044F.")};return}let n=Pn.project.planSnapshot||Ic(Pn.project.rows,Pn.project.vehicle,Pn.project.settings),e=hp(n),t=hp(ce),i=JSON.stringify(n.source)===JSON.stringify(ce.source);qn("\u0421\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u0435 \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u043E\u0432",`<p>\u0418\u0441\u0445\u043E\u0434\u043D\u044B\u0439: ${ut(Pn.label)}<br>\u0422\u0435\u043A\u0443\u0449\u0438\u0439: ${ut(wn)}</p>${Xy(n,ce)}${i?"":'<p class="comparison-warning">\u0421\u043E\u0441\u0442\u0430\u0432 \u043F\u0430\u0440\u0442\u0438\u0439 \u0440\u0430\u0437\u043B\u0438\u0447\u0430\u0435\u0442\u0441\u044F. \u042D\u0442\u043E \u0441\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u0435 \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u0435\u0432, \u0430 \u043D\u0435 \u0434\u043E\u043A\u0430\u0437\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E \u044D\u043A\u043E\u043D\u043E\u043C\u0438\u0438 \u043D\u0430 \u043E\u0434\u043D\u043E\u0439 \u043F\u0430\u0440\u0442\u0438\u0438.</p>'}<table><thead><tr><th>\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u0435\u043B\u044C</th><th>\u0418\u0441\u0445\u043E\u0434\u043D\u044B\u0439</th><th>\u0422\u0435\u043A\u0443\u0449\u0438\u0439</th></tr></thead><tbody>${[["\u041C\u0430\u0448\u0438\u043D\u044B",e.trucks,t.trucks],["\u0420\u0430\u0437\u043C\u0435\u0449\u0435\u043D\u043E \u043C\u0435\u0441\u0442",`${e.placed}/${e.total}`,`${t.placed}/${t.total}`],["\u0421\u0440\u0435\u0434\u043D\u044F\u044F \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u043F\u043E\u043B\u0430",Ue(e.floor,1)+" %",Ue(t.floor,1)+" %"],["\u0421\u0440\u0435\u0434\u043D\u044F\u044F \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u043E\u0431\u044A\u0451\u043C\u0430",Ue(e.volume,1)+" %",Ue(t.volume,1)+" %"]].map(s=>`<tr>${s.map(r=>`<td>${r}</td>`).join("")}</tr>`).join("")}</tbody></table><p>${e.trucks===t.trucks?"\u0427\u0438\u0441\u043B\u043E \u043C\u0430\u0448\u0438\u043D \u043D\u0435 \u0438\u0437\u043C\u0435\u043D\u0438\u043B\u043E\u0441\u044C.":e.trucks>t.trucks?`\u0412 \u0442\u0435\u043A\u0443\u0449\u0435\u043C \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u0438 \u043D\u0430 ${e.trucks-t.trucks} \u043C\u0430\u0448\u0438\u043D \u043C\u0435\u043D\u044C\u0448\u0435.`:`\u0412 \u0442\u0435\u043A\u0443\u0449\u0435\u043C \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u0438 \u043D\u0430 ${t.trucks-e.trucks} \u043C\u0430\u0448\u0438\u043D \u0431\u043E\u043B\u044C\u0448\u0435.`}</p><div class="drawer-actions"><button id="restore-baseline" class="outline">\u0412\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F \u043A \u0438\u0441\u0445\u043E\u0434\u043D\u043E\u043C\u0443</button><button id="replace-baseline" class="outline">\u0421\u0434\u0435\u043B\u0430\u0442\u044C \u0442\u0435\u043A\u0443\u0449\u0438\u0439 \u0438\u0441\u0445\u043E\u0434\u043D\u044B\u043C</button><button id="clear-baseline" class="quiet">\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u0441\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u0435</button></div>`,"compare"),P("#compare-scene").onclick=()=>{Dn(),ar("perspective"),He?.compare(n.trucks[0]?.places||[],_n().places),St("\u041F\u0435\u0440\u0435\u0445\u043E\u0434: \u0438\u0441\u0445\u043E\u0434\u043D\u044B\u0439 \u0432\u0430\u0440\u0438\u0430\u043D\u0442 \u2192 \u0442\u0435\u043A\u0443\u0449\u0438\u0439.")},P("#restore-baseline").onclick=()=>{let s=structuredClone(Pn);Ai({...s.project,baseline:s},"\u0412\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D \u0438\u0441\u0445\u043E\u0434\u043D\u044B\u0439 \u0432\u0430\u0440\u0438\u0430\u043D\u0442.")},P("#replace-baseline").onclick=()=>{Pn={project:{...wi(),baseline:null},label:wn},yn(),Dn(),St("\u0418\u0441\u0445\u043E\u0434\u043D\u044B\u0439 \u0432\u0430\u0440\u0438\u0430\u043D\u0442 \u043E\u0431\u043D\u043E\u0432\u043B\u0451\u043D.")},P("#clear-baseline").onclick=()=>{Pn=null,yn(),Dn()}};var Lh="\u0414\u043B\u044F \u043F\u0430\u043B\u043B\u0435\u0442 \u0437\u0430\u0434\u0430\u044E\u0442\u0441\u044F \u043E\u0434\u0438\u043D\u0430\u043A\u043E\u0432\u044B\u0435 \u043A\u043E\u0440\u043E\u0431\u043A\u0438, \u0431\u0435\u0437 \u0441\u0432\u0435\u0441\u0430 \u0438 \u0431\u0435\u0437 \u043F\u043E\u0432\u043E\u0440\u043E\u0442\u0430 \u0432\u043D\u0443\u0442\u0440\u0438 \u043F\u0430\u043B\u043B\u0435\u0442\u044B. \u041F\u0430\u043B\u043B\u0435\u0442\u044B \u0441 \u0433\u0440\u0443\u0437\u043E\u043C \u043D\u0435 \u0448\u0442\u0430\u0431\u0435\u043B\u0438\u0440\u0443\u044E\u0442\u0441\u044F. \u041E\u0431\u044A\u0451\u043C \u0441\u0447\u0438\u0442\u0430\u0435\u0442\u0441\u044F \u043F\u043E \u0432\u043D\u0435\u0448\u043D\u0435\u043C\u0443 \u0433\u0430\u0431\u0430\u0440\u0438\u0442\u0443 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u043D\u043E\u0433\u043E \u043C\u0435\u0441\u0442\u0430. \u041F\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043B\u044C\u043D\u0430\u044F \u043C\u043E\u0434\u0435\u043B\u044C \u043F\u0440\u044F\u043C\u043E\u0443\u0433\u043E\u043B\u044C\u043D\u044B\u0445 \u043C\u0435\u0441\u0442. \u0421\u0442\u043E\u043F\u043A\u0438 \u0441\u043E\u0441\u0442\u043E\u044F\u0442 \u0438\u0437 \u043E\u0434\u0438\u043D\u0430\u043A\u043E\u0432\u044B\u0445 \u043C\u0435\u0441\u0442 \u0441 \u043F\u043E\u043B\u043D\u044B\u043C \u043E\u043F\u0438\u0440\u0430\u043D\u0438\u0435\u043C. \u041F\u0440\u043E\u0432\u0435\u0440\u0435\u043D\u044B \u0433\u0430\u0431\u0430\u0440\u0438\u0442\u044B, \u043C\u0430\u0441\u0441\u0430, \u043F\u043E\u0432\u043E\u0440\u043E\u0442 \u0438 \u044F\u0440\u0443\u0441\u043D\u043E\u0441\u0442\u044C. \u041E\u0441\u0435\u0432\u044B\u0435 \u043D\u0430\u0433\u0440\u0443\u0437\u043A\u0438, \u043A\u0440\u0435\u043F\u043B\u0435\u043D\u0438\u0435 \u0433\u0440\u0443\u0437\u0430 \u0438 \u043F\u0440\u043E\u0447\u043D\u043E\u0441\u0442\u044C \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0438 \u043E\u0446\u0435\u043D\u0438\u0432\u0430\u044E\u0442\u0441\u044F \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u043E.";function yp(){let n=_n(),e=ce.vehicle,t=null;if(oa)try{t=He?.snapshot()}catch{}let i=Dc(n,e,{width:900,height:260,light:!0,anchors:Qe.anchors}),s=gh(n);return`<div class="report-cover"><img class="report-company-logo" src="${Mi.logo||ua("ta-logo.png")}" alt="\u0422\u043E\u0447\u043D\u044B\u0435 \u0430\u0432\u0442\u043E\u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u044B"><span class="eyebrow">\u0417\u0410\u0413\u0420\u0423\u0417\u041A\u0410 / \u041F\u041B\u0410\u041D \u041F\u0415\u0420\u0415\u0412\u041E\u0417\u041A\u0418</span><h1>${ut(wn)}</h1><p>${ut(Mi.name||"\u0422\u043E\u0447\u043D\u044B\u0435 \u0430\u0432\u0442\u043E\u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u044B")}</p>${Kn.author?`<p class="report-author">\u0410\u0432\u0442\u043E\u0440: ${ut(Kn.author)}</p>`:""}<span class="report-id">\u041F\u043B\u0430\u043D ${ce.planId} \xB7 \u043C\u043E\u0434\u0435\u043B\u044C ${gn} \xB7 ${new Date().toLocaleDateString("ru-RU")}</span><div class="report-kpis"><div><label>\u041C\u0430\u0448\u0438\u043D</label><strong>${ce.trucks.length}</strong></div><div><label>\u0420\u0430\u0437\u043C\u0435\u0449\u0435\u043D\u043E \u043C\u0435\u0441\u0442</label><strong>${ce.placed}/${ce.total}</strong></div><div><label>\u041C\u0430\u0441\u0441\u0430 \u0432 \u043F\u043B\u0430\u043D\u0435</label><strong>${Ue(ce.mass/1e3,2)} \u0442</strong></div></div>${t?`<img class="report-image" src="${t}" alt="\u041C\u0430\u0448\u0438\u043D\u0430 ${oi+1}: \u0441\u0445\u0435\u043C\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u0432 \u043F\u0435\u0440\u0441\u043F\u0435\u043A\u0442\u0438\u0432\u0435">`:""}<svg class="report-plan" viewBox="${i.viewBox}" role="img" aria-label="\u041C\u0430\u0448\u0438\u043D\u0430 ${oi+1}: \u0442\u043E\u0447\u043D\u044B\u0439 \u043F\u043B\u0430\u043D \u0441\u0432\u0435\u0440\u0445\u0443">${i.html}</svg><div class="report-legend">${ht.map(r=>`<span><i style="background:${r.color}"></i>${r.id} \xB7 ${ut(r.name)}</span>`).join("")}</div><div class="report-cert">\u2713 \u041D\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043C\u0430\u044F \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0430 \u043F\u0440\u043E\u0439\u0434\u0435\u043D\u0430 \xB7 ${ce.certificate.checkedPlaces} \u043C\u0435\u0441\u0442</div></div><div class="report-detail"><h3>\u0423\u0441\u043B\u043E\u0432\u0438\u044F \u0440\u0430\u0441\u0447\u0451\u0442\u0430</h3><p>${ut(e.name)}: ${Ue(e.l)} \xD7 ${Ue(e.w)} \xD7 ${Ue(e.h)} \u043C\u043C; \u0434\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u0430\u044F \u043C\u0430\u0441\u0441\u0430 ${Ue(e.mass)} \u043A\u0433.<br>\u0413\u043E\u0440\u0438\u0437\u043E\u043D\u0442\u0430\u043B\u044C\u043D\u044B\u0439 \u0437\u0430\u0437\u043E\u0440: ${Qe.gap} \u043C\u043C \xB7 \u0437\u0430\u043A\u0440\u0435\u043F\u043B\u0435\u043D\u043E \u0441\u0442\u043E\u043F\u043E\u043A: ${Qe.anchors.length}.${ce.pallets?`<br>\u0412 \u043F\u043B\u0430\u043D\u0435 ${ce.pallets} ${xn(ce.pallets,"\u043F\u0430\u043B\u043B\u0435\u0442\u0430","\u043F\u0430\u043B\u043B\u0435\u0442\u044B","\u043F\u0430\u043B\u043B\u0435\u0442")}; \u043C\u0430\u0441\u0441\u0430 \u043F\u0443\u0441\u0442\u044B\u0445 \u043F\u0430\u043B\u043B\u0435\u0442 ${Ue(ce.palletMass,3)} \u043A\u0433 \u0432\u043A\u043B\u044E\u0447\u0435\u043D\u0430 \u0432 \u043E\u0431\u0449\u0443\u044E \u043C\u0430\u0441\u0441\u0443.`:""}</p><table><thead><tr><th>\u041C\u0430\u0448\u0438\u043D\u0430</th><th>\u041C\u0435\u0441\u0442</th><th>\u041C\u0430\u0441\u0441\u0430, \u0442</th><th>\u041F\u043E\u043B, %</th><th>\u041E\u0431\u044A\u0451\u043C, %</th></tr></thead><tbody>${ce.trucks.map(r=>`<tr><td>${r.number}</td><td>${r.count}</td><td>${Ue(r.mass/1e3,2)}</td><td>${Ue(r.floorPercent,1)}</td><td>${Ue(r.volumePercent,1)}</td></tr>`).join("")}</tbody></table><h3>\u0421\u043E\u0441\u0442\u0430\u0432 \u043F\u0430\u0440\u0442\u0438\u0438</h3><table><thead><tr><th>\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435</th><th>\u0413\u0430\u0431\u0430\u0440\u0438\u0442\u044B, \u043C\u043C</th><th>\u0411\u0440\u0443\u0442\u0442\u043E \u043C\u0435\u0441\u0442\u0430, \u043A\u0433</th><th>\u0412 \u043F\u043B\u0430\u043D\u0435 / \u0432\u0441\u0435\u0433\u043E</th></tr></thead><tbody>${ce.source.map(r=>`<tr><td>${ut(r.name)}<small style="display:block">${r.rotate?"\u041F\u043E\u0432\u043E\u0440\u043E\u0442 90\xB0":"\u0411\u0435\u0437 \u043F\u043E\u0432\u043E\u0440\u043E\u0442\u0430"} \xB7 ${r.pallet?`${r.pallet.boxes} ${xn(r.pallet.boxes,"\u043A\u043E\u0440\u043E\u0431\u043A\u0430","\u043A\u043E\u0440\u043E\u0431\u043A\u0438","\u043A\u043E\u0440\u043E\u0431\u043E\u043A")} \u043D\u0430 \u043F\u0430\u043B\u043B\u0435\u0442\u0435`:`\u0434\u043E ${r.tiers} \u044F\u0440\u0443\u0441\u043E\u0432`}</small></td><td>${hn(r).l} \xD7 ${hn(r).w} \xD7 ${hn(r).h}${r.pallet?`<small style="display:block">\u041A\u043E\u0440\u043E\u0431\u043A\u0430 ${r.l} \xD7 ${r.w} \xD7 ${r.h}; \u043F\u0430\u043B\u043B\u0435\u0442\u0430 ${r.pallet.h} \u043C\u043C</small>`:""}</td><td>${Ue(hn(r).mass,3)}${r.pallet?`<small style="display:block">\u041F\u0430\u043B\u043B\u0435\u0442\u0430 ${Ue(r.pallet.mass)} \u043A\u0433</small>`:""}</td><td>${ce.trucks.reduce((a,o)=>a+(o.counts[r.id]||0),0)} / ${r.qty}</td></tr>`).join("")}</tbody></table>${ce.unplacedCount?"<h3>\u0412\u043D\u0435 \u043F\u043B\u0430\u043D\u0430</h3>"+ce.unplaced.map(r=>`<p>${ut(r.name)}: ${r.qty} ${r.pallet?"\u043F\u0430\u043B.":"\u0448\u0442."} \u2014 ${ut(r.reason)}.</p>`).join(""):""}<p>\u041D\u0438\u0436\u043D\u044F\u044F \u043E\u0446\u0435\u043D\u043A\u0430 \u0434\u043B\u044F \u0434\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u043E\u0439 \u0447\u0430\u0441\u0442\u0438 \u043F\u0430\u0440\u0442\u0438\u0438: ${ce.diagnostics.lowerBound} ${xn(ce.diagnostics.lowerBound,"\u043C\u0430\u0448\u0438\u043D\u0430","\u043C\u0430\u0448\u0438\u043D\u044B","\u043C\u0430\u0448\u0438\u043D")}. ${ce.diagnostics.boundReached?"\u041E\u0446\u0435\u043D\u043A\u0430 \u0434\u043E\u0441\u0442\u0438\u0433\u043D\u0443\u0442\u0430 \u0432 \u043F\u0440\u0435\u0434\u0435\u043B\u0430\u0445 \u0440\u0430\u0441\u0447\u0451\u0442\u043D\u043E\u0439 \u043C\u043E\u0434\u0435\u043B\u0438.":"\u041C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0435 \u0447\u0438\u0441\u043B\u043E \u043C\u0430\u0448\u0438\u043D \u043D\u0435 \u0434\u043E\u043A\u0430\u0437\u0430\u043D\u043E."}</p><details class="report-sequence-details"><summary>\u041F\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u043F\u043E\u0440\u044F\u0434\u043E\u043A \xB7 \u043C\u0430\u0448\u0438\u043D\u0430 ${oi+1}</summary><ol class="report-sequence">${s.map(r=>`<li>${ut(r.name)} \xB7 ${r.places.length} ${xn(r.places.length,"\u043C\u0435\u0441\u0442\u043E","\u043C\u0435\u0441\u0442\u0430","\u043C\u0435\u0441\u0442")} \xB7 X ${Ue(r.x)}, Y ${Ue(r.y)} \u043C\u043C; \u0441\u043D\u0438\u0437\u0443 \u0432\u0432\u0435\u0440\u0445.</li>`).join("")}</ol></details><p class="formula-note">${Lh} \u041F\u043E\u0440\u044F\u0434\u043E\u043A \u043F\u043E\u0433\u0440\u0443\u0437\u043A\u0438 \u043D\u0435 \u0443\u0447\u0438\u0442\u044B\u0432\u0430\u0435\u0442 \u0434\u0432\u0435\u0440\u043D\u043E\u0439 \u043F\u0440\u043E\u0451\u043C \u0438 \u043C\u0430\u043D\u0451\u0432\u0440\u044B \u0442\u0435\u0445\u043D\u0438\u043A\u0438; \u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044F \u043F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u0430\u044F \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0430.</p>${Yt.some(r=>r.planId===ce.planId)?`<h3>\u0424\u0430\u043A\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u043D\u0430\u0431\u043B\u044E\u0434\u0435\u043D\u0438\u044F \u043F\u043E \u044D\u0442\u043E\u043C\u0443 \u043F\u043B\u0430\u043D\u0443</h3>${Yt.filter(r=>r.planId===ce.planId).map(r=>`<p>${new Date(r.date).toLocaleDateString("ru-RU")} \xB7 ${Sp[r.status]} \xB7 \u043F\u043B\u0430\u043D / \u0444\u0430\u043A\u0442 ${r.plannedTrucks} / ${r.actualTrucks} \u043C\u0430\u0448\u0438\u043D. ${ut(r.reason)}</p>`).join("")}`:""}</div>`}P("#report").onclick=()=>{bn||as||(qn("\u041E\u0442\u0447\u0451\u0442",yp()+'<button id="print" class="primary">\u041F\u0435\u0447\u0430\u0442\u044C / \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C PDF <span>\u2197</span></button>'),P("#print").onclick=()=>window.print())};window.addEventListener("beforeprint",()=>{P("#print-report").innerHTML=!ce||bn||as?"<h1>\u041D\u0443\u0436\u0435\u043D \u043F\u0435\u0440\u0435\u0441\u0447\u0451\u0442</h1><p>\u0420\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u0439\u0442\u0435 \u0430\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u0443\u044E \u043F\u0430\u0440\u0442\u0438\u044E \u043F\u0435\u0440\u0435\u0434 \u043F\u0435\u0447\u0430\u0442\u044C\u044E.</p>":yp(),Nn("#print-report details").forEach(n=>n.open=!0)});P("#calculation-details").onclick=()=>{if(!ce)return;let n=ce.diagnostics;qn("\u041A\u0430\u043A \u043F\u043E\u043B\u0443\u0447\u0435\u043D \u043F\u043B\u0430\u043D",`<div class="validation-checks">${ce.certificate.checks.map(e=>`<span>\u2713 ${ut(e)}</span>`).join("")}</div><p style="margin-top:18px">\u041F\u043B\u0430\u043D ${ce.planId} \xB7 \u043C\u043E\u0434\u0435\u043B\u044C ${gn} \xB7 \u0437\u0430\u0437\u043E\u0440 ${Qe.gap} \u043C\u043C.</p><p>\u041F\u0440\u043E\u0432\u0435\u0440\u0435\u043D\u043E \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u043E\u0432 \u043F\u043B\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F: ${n.evaluated}. \u0412\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u0439 \u043F\u043E\u0434\u0445\u043E\u0434: ${ut(n.method)}.</p><table><tr><td>\u041C\u0430\u0448\u0438\u043D \u043F\u043E \u043D\u0430\u0439\u0434\u0435\u043D\u043D\u043E\u0439 \u0441\u0445\u0435\u043C\u0435</td><td>${ce.trucks.length}</td></tr><tr><td>\u041D\u0438\u0436\u043D\u044F\u044F \u043E\u0446\u0435\u043D\u043A\u0430</td><td>${n.lowerBound}</td></tr>${ce.capacity!==null?`<tr><td>\u0412\u043C\u0435\u0441\u0442\u0438\u043C\u043E\u0441\u0442\u044C \u043F\u043E \u043E\u0434\u043D\u043E\u0440\u043E\u0434\u043D\u043E\u0439 \u0441\u0445\u0435\u043C\u0435</td><td>${ce.capacity===2e3?"2000+":ce.capacity} \u043C\u0435\u0441\u0442</td></tr>`:""}<tr><td>\u0418\u0441\u0445\u043E\u0434\u043D\u0430\u044F \u044D\u0432\u0440\u0438\u0441\u0442\u0438\u043A\u0430</td><td>${n.baselineTrucks}</td></tr><tr><td>\u041C\u0435\u043D\u044C\u0448\u0435 \u043C\u0430\u0448\u0438\u043D \u043F\u043E\u0441\u043B\u0435 \u043F\u043E\u0438\u0441\u043A\u0430</td><td>${n.savedTrucks}</td></tr><tr><td>\u0420\u0430\u0441\u0447\u0451\u0442 \u0438 \u043E\u0431\u043C\u0435\u043D \u0441 Worker</td><td>${ce.elapsedMs} \u043C\u0441</td></tr></table><p>\u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u0441\u0442\u0440\u043E\u0438\u0442\u0441\u044F \u0438\u0441\u0445\u043E\u0434\u043D\u044B\u0439 \u043F\u043B\u0430\u043D. \u0415\u0441\u043B\u0438 \u043D\u0438\u0436\u043D\u044F\u044F \u043E\u0446\u0435\u043D\u043A\u0430 \u0435\u0449\u0451 \u043D\u0435 \u0434\u043E\u0441\u0442\u0438\u0433\u043D\u0443\u0442\u0430, \u0441\u0440\u0430\u0432\u043D\u0438\u0432\u0430\u044E\u0442\u0441\u044F \u043F\u043B\u0430\u043D\u044B \u0432\u0441\u0435\u0439 \u043F\u0430\u0440\u0442\u0438\u0438 \u0441 \u0440\u0430\u0437\u043D\u044B\u043C\u0438 \u043F\u043E\u0440\u044F\u0434\u043A\u0430\u043C\u0438 \u0438 \u0434\u0432\u0443\u043C\u044F \u0441\u043F\u043E\u0441\u043E\u0431\u0430\u043C\u0438 \u043F\u043E\u0438\u0441\u043A\u0430 \u0441\u0432\u043E\u0431\u043E\u0434\u043D\u043E\u0433\u043E \u043F\u043E\u043B\u0430. \u0412\u044B\u0431\u0438\u0440\u0430\u0435\u0442\u0441\u044F \u043F\u043B\u0430\u043D \u0441 \u043C\u0435\u043D\u044C\u0448\u0438\u043C \u0447\u0438\u0441\u043B\u043E\u043C \u043C\u0430\u0448\u0438\u043D.</p><p>\u041D\u0438\u0436\u043D\u044F\u044F \u043E\u0446\u0435\u043D\u043A\u0430 \u0443\u0447\u0438\u0442\u044B\u0432\u0430\u0435\u0442 \u043C\u0430\u0441\u0441\u0443, \u043E\u0431\u044A\u0451\u043C \u0438 \u043C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u0443\u044E \u043F\u043B\u043E\u0449\u0430\u0434\u044C \u043E\u0441\u043D\u043E\u0432\u0430\u043D\u0438\u0439 \u0434\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u044B\u0445 \u0441\u0442\u043E\u043F\u043E\u043A. \u0421\u043E\u0432\u043F\u0430\u0434\u0435\u043D\u0438\u0435 \u0441 \u043D\u0435\u0439 \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0430\u0435\u0442 \u0447\u0438\u0441\u043B\u043E \u043C\u0430\u0448\u0438\u043D \u0442\u043E\u043B\u044C\u043A\u043E \u0432 \u0434\u0430\u043D\u043D\u043E\u0439 \u043C\u043E\u0434\u0435\u043B\u0438.</p><p class="formula-note">${Lh}</p>`)};async function la(){P(".brand small").textContent="\u041F\u043B\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u0430";let n=P(".brand-image");n||(n=document.createElement("img"),n.className="brand-image",n.alt="\u0422\u043E\u0447\u043D\u044B\u0435 \u0430\u0432\u0442\u043E\u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u044B \u2014 \u0448\u0430\u0441\u0441\u0438",P(".brand").prepend(n));let e=Mi.logo||ua("ta-logo.png");n.src=e,n.hidden=!1,P(".brand-mark").hidden=!0;let t=P("#author-name");t.textContent=Kn.author?"\u0410\u0432\u0442\u043E\u0440: "+Kn.author:"",t.title=Kn.author,t.hidden=!Kn.author;try{await He?.setLogo(e)}catch{St("\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043E\u0442\u043E\u0431\u0440\u0430\u0437\u0438\u0442\u044C \u043B\u043E\u0433\u043E\u0442\u0438\u043F \u043D\u0430 \u043C\u043E\u0434\u0435\u043B\u0438.")}}P("#appearance").onclick=()=>{qn("\u041E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u0438\u0435",`<p>\u0424\u0438\u0440\u043C\u0435\u043D\u043D\u044B\u0439 \u043B\u043E\u0433\u043E\u0442\u0438\u043F \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F \u0432 \u0448\u0430\u043F\u043A\u0435, \u043D\u0430 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u0435 \u0438 \u0432 \u043E\u0442\u0447\u0451\u0442\u0435. \u0418\u043C\u044F \u0430\u0432\u0442\u043E\u0440\u0430 \u0437\u0430\u0434\u0430\u0451\u0442\u0441\u044F \u0432 \u0444\u0430\u0439\u043B\u0435 AUTHOR.txt \u0440\u044F\u0434\u043E\u043C \u0441 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435\u043C.</p><div class="field"><label for="company-name">\u041F\u0440\u0435\u0434\u043F\u0440\u0438\u044F\u0442\u0438\u0435 / \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0434\u043B\u044F \u043E\u0442\u0447\u0451\u0442\u0430</label><input id="company-name" maxlength="80" value="${ut(Mi.name)}"></div><div class="field"><label for="logo-file">\u041B\u043E\u0433\u043E\u0442\u0438\u043F PNG, JPEG \u0438\u043B\u0438 WebP</label><input id="logo-file" type="file" accept="image/png,image/jpeg,image/webp"></div><div class="drawer-actions"><button id="remove-logo" class="outline">\u0412\u0435\u0440\u043D\u0443\u0442\u044C \u0444\u0438\u0440\u043C\u0435\u043D\u043D\u044B\u0439 \u043B\u043E\u0433\u043E\u0442\u0438\u043F</button><button id="save-html" class="primary">\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0430\u0432\u0442\u043E\u043D\u043E\u043C\u043D\u0443\u044E HTML-\u043A\u043E\u043F\u0438\u044E \u2197</button></div><p id="branding-message" role="status" style="margin-top:16px">HTML-\u043A\u043E\u043F\u0438\u044F \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u0442 \u0442\u0435\u043A\u0443\u0449\u0443\u044E \u043F\u0430\u0440\u0442\u0438\u044E, \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442, \u0448\u0430\u0431\u043B\u043E\u043D\u044B \u0438 \u0441\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u0435.</p>`),P("#company-name").oninput=n=>{Mi.name=n.target.value,P(".brand small").textContent="\u041F\u043B\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u0430",yn()},P("#logo-file").onchange=async n=>{try{Mi.logo=await tp(n.target.files[0]),await la(),yn(),P("#branding-message").textContent="\u041B\u043E\u0433\u043E\u0442\u0438\u043F \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D."}catch(e){P("#branding-message").textContent=e.message}},P("#remove-logo").onclick=()=>{Mi.logo=null,la(),yn()},P("#save-html").onclick=async()=>{let n=P("#save-html"),e=P("#branding-message");n.disabled=!0;try{await np(sa(wi())),e.textContent="HTML-\u043A\u043E\u043F\u0438\u044F \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u0430 \u043A \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044E."}catch(t){e.textContent=t.message}finally{n.disabled=!1}}};P("#help").onclick=()=>qn("\u041A\u0430\u043A \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C\u0441\u044F",'<h3>1. \u041F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u044C\u0442\u0435 \u043F\u0430\u0440\u0442\u0438\u044E</h3><p>\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043F\u043E\u0437\u0438\u0446\u0438\u044E, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u043D\u0435\u0448\u043D\u0438\u0435 \u0433\u0430\u0431\u0430\u0440\u0438\u0442\u044B \u0438 \u043C\u0430\u0441\u0441\u0443 \u0431\u0440\u0443\u0442\u0442\u043E \u043E\u0434\u043D\u043E\u0433\u043E \u043C\u0435\u0441\u0442\u0430. \u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043E\u0442\u043D\u043E\u0441\u0438\u0442\u0441\u044F \u043A\u043E \u0432\u0441\u0435\u0439 \u043F\u0430\u0440\u0442\u0438\u0438. \u0420\u0430\u0437\u0440\u0435\u0448\u0435\u043D\u0438\u0435 \u043F\u043E\u0432\u043E\u0440\u043E\u0442\u0430 \u0438 \u044F\u0440\u0443\u0441\u043D\u043E\u0441\u0442\u044C \u0437\u0430\u0434\u0430\u044E\u0442\u0441\u044F \u043F\u043E \u0443\u0441\u043B\u043E\u0432\u0438\u044F\u043C \u0442\u0430\u0440\u044B.</p><h3>2. \u0420\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u0439\u0442\u0435 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0443</h3><p>\u041F\u043E\u0441\u043B\u0435 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u0434\u0430\u043D\u043D\u044B\u0445 \u043F\u0440\u0435\u0436\u043D\u044F\u044F \u0441\u0445\u0435\u043C\u0430 \u043E\u0442\u043C\u0435\u0447\u0435\u043D\u0430 \u043A\u0430\u043A \u0443\u0441\u0442\u0430\u0440\u0435\u0432\u0448\u0430\u044F. \u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u0435\u0434\u0438\u043D\u0441\u0442\u0432\u0435\u043D\u043D\u0443\u044E \u043A\u043D\u043E\u043F\u043A\u0443 \u0440\u0430\u0441\u0447\u0451\u0442\u0430. \u041A\u0430\u0440\u0442\u043E\u0447\u043A\u0438 \u043F\u043E\u0434 \u0441\u0446\u0435\u043D\u043E\u0439 \u043F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0430\u044E\u0442 \u043C\u0430\u0448\u0438\u043D\u044B.</p><h3>3. \u041F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442</h3><p>\u0421\u043C\u043E\u0442\u0440\u0438\u0442\u0435 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0443 \u043F\u043E \u043C\u0430\u0441\u0441\u0435, \u043F\u043B\u043E\u0449\u0430\u0434\u0438 \u043F\u043E\u043B\u0430 \u0438 \u043E\u0431\u044A\u0451\u043C\u0443. \u0414\u043B\u044F \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0438 \u0441\u0445\u0435\u043C\u044B \u0435\u0441\u0442\u044C \u043F\u043B\u0430\u043D \u0441\u0432\u0435\u0440\u0445\u0443, \u0432\u044B\u0431\u043E\u0440 \u043C\u0435\u0441\u0442\u0430 \u0438 \u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440 \u044F\u0440\u0443\u0441\u043E\u0432. \u0421\u0432\u043E\u0431\u043E\u0434\u043D\u044B\u0439 \u043E\u0431\u044A\u0451\u043C \u043D\u0435 \u0433\u0430\u0440\u0430\u043D\u0442\u0438\u0440\u0443\u0435\u0442 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u043F\u043E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0435\u0449\u0451 \u043E\u0434\u043D\u043E \u043C\u0435\u0441\u0442\u043E.</p><h3>4. \u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u0435 \u0440\u0430\u0431\u043E\u0442\u0443</h3><p>\xAB\u041F\u0440\u043E\u0435\u043A\u0442 \u2192 \u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u043F\u0440\u043E\u0435\u043A\u0442\xBB \u0441\u043E\u0437\u0434\u0430\u0451\u0442 \u043D\u0435\u0431\u043E\u043B\u044C\u0448\u043E\u0439 JSON-\u0444\u0430\u0439\u043B. \u0415\u0433\u043E \u043C\u043E\u0436\u043D\u043E \u043E\u0442\u043A\u0440\u044B\u0442\u044C \u043D\u0430 \u0434\u0440\u0443\u0433\u043E\u043C \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u0435 \u0441 \u044D\u0442\u0438\u043C \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435\u043C. \u0410\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0447\u0435\u0440\u043D\u043E\u0432\u0438\u043A \u0445\u0440\u0430\u043D\u0438\u0442\u0441\u044F \u0442\u043E\u043B\u044C\u043A\u043E \u0432 \u0442\u0435\u043A\u0443\u0449\u0435\u043C \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0435. HTML-\u043A\u043E\u043F\u0438\u044F \u043F\u0435\u0440\u0435\u043D\u043E\u0441\u0438\u0442 \u0432\u043C\u0435\u0441\u0442\u0435 \u0441 \u0434\u0430\u043D\u043D\u044B\u043C\u0438 \u0432\u0441\u0451 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435.</p><h3>CSV</h3><p>\u0420\u0430\u0437\u043C\u0435\u0440\u044B \u0432 \u043C\u0438\u043B\u043B\u0438\u043C\u0435\u0442\u0440\u0430\u0445, \u043C\u0430\u0441\u0441\u0430 \u0432 \u043A\u0438\u043B\u043E\u0433\u0440\u0430\u043C\u043C\u0430\u0445. \u041A\u043E\u043B\u043E\u043D\u043A\u0438: name, l, w, h, mass, qty, rotate, tiers. \u0420\u0430\u0437\u0434\u0435\u043B\u0438\u0442\u0435\u043B\u044C \u2014 \u0442\u043E\u0447\u043A\u0430 \u0441 \u0437\u0430\u043F\u044F\u0442\u043E\u0439, \u0437\u0430\u043F\u044F\u0442\u0430\u044F \u0438\u043B\u0438 \u0442\u0430\u0431\u0443\u043B\u044F\u0446\u0438\u044F. \u041F\u043E\u0432\u043E\u0440\u043E\u0442: \u0434\u0430/\u043D\u0435\u0442. \u0414\u043B\u044F \u043F\u0430\u043B\u043B\u0435\u0442 \u0434\u043E\u0431\u0430\u0432\u044C\u0442\u0435 pallet_l, pallet_w, pallet_h, pallet_mass, boxes_per_pallet. \u0412 \u044D\u0442\u043E\u043C \u0441\u043B\u0443\u0447\u0430\u0435 qty \u2014 \u0447\u0438\u0441\u043B\u043E \u043F\u0430\u043B\u043B\u0435\u0442, \u0430 \u0440\u0430\u0437\u043C\u0435\u0440\u044B \u0438 \u043C\u0430\u0441\u0441\u0430 \u043E\u0442\u043D\u043E\u0441\u044F\u0442\u0441\u044F \u043A \u043E\u0434\u043D\u043E\u0439 \u043A\u043E\u0440\u043E\u0431\u043A\u0435. \u0411\u0435\u0437 \u0437\u0430\u0434\u0430\u043D\u043D\u044B\u0445 \u043F\u0440\u0430\u0432\u0438\u043B \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044E\u0442\u0441\u044F \u0437\u0430\u043F\u0440\u0435\u0442 \u043F\u043E\u0432\u043E\u0440\u043E\u0442\u0430 \u0438 \u043E\u0434\u0438\u043D \u044F\u0440\u0443\u0441.</p><h3>\u0418\u043C\u044F \u0430\u0432\u0442\u043E\u0440\u0430</h3><p>\u0412\u043F\u0438\u0448\u0438\u0442\u0435 \u0441\u0432\u043E\u0451 \u0438\u043C\u044F \u043E\u0434\u043D\u043E\u0439 \u0441\u0442\u0440\u043E\u043A\u043E\u0439 \u0432 AUTHOR.txt. \u041D\u0430 \u0441\u0430\u0439\u0442\u0435 \u0438\u043C\u044F \u043F\u043E\u044F\u0432\u0438\u0442\u0441\u044F \u043F\u043E\u0441\u043B\u0435 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B. \u0414\u043B\u044F \u043B\u043E\u043A\u0430\u043B\u044C\u043D\u043E\u0439 \u0432\u0435\u0440\u0441\u0438\u0438 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 OPEN_ZAGRUZKA.cmd (Windows) \u0438\u043B\u0438 open-zagruzka.py; \u0437\u0430\u043F\u0443\u0441\u043A \u043E\u0431\u043D\u043E\u0432\u043B\u044F\u0435\u0442 \u0438\u043C\u044F \u0438\u0437 \u0444\u0430\u0439\u043B\u0430.</p><h3>\u041B\u043E\u043A\u0430\u043B\u044C\u043D\u044B\u0439 \u0437\u0430\u043F\u0443\u0441\u043A</h3><p>\u041F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u0431\u0435\u0437 \u0438\u043D\u0442\u0435\u0440\u043D\u0435\u0442\u0430 \u0438 \u0441\u0435\u0440\u0432\u0435\u0440\u0430. \u0414\u0430\u043D\u043D\u044B\u0435 \u043D\u0435 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u044F\u044E\u0442\u0441\u044F \u043D\u0430 \u0432\u043D\u0435\u0448\u043D\u0438\u0435 \u0441\u0435\u0440\u0432\u0438\u0441\u044B. \u041F\u0440\u0438 \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u043D\u043E\u043C WebGL \u0440\u0430\u0441\u0447\u0451\u0442 \u0438 \u043F\u043B\u0430\u043D \u0441\u0432\u0435\u0440\u0445\u0443 \u043F\u0440\u043E\u0434\u043E\u043B\u0436\u0430\u044E\u0442 \u0440\u0430\u0431\u043E\u0442\u0430\u0442\u044C.</p><p class="formula-note">'+Lh+"</p>");P("#cargo-focus").onclick=()=>{co=!co,He?.focusCargo(co),P("#cargo-focus").textContent=co?"\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0432\u0435\u0441\u044C \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442":"\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0442\u043E\u043B\u044C\u043A\u043E \u043A\u0443\u0437\u043E\u0432",Fn()};P("#dimensions").onclick=()=>{uo=!uo,He?.dimensions(uo),P("#dimensions").textContent=uo?"\u0421\u043A\u0440\u044B\u0442\u044C \u0440\u0430\u0437\u043C\u0435\u0440\u044B":"\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0440\u0430\u0437\u043C\u0435\u0440\u044B",Fn()};P("#animate").onclick=()=>{Fn(),$y()};P("#reset-view").onclick=()=>{ar("perspective"),Fn()};P("#calculate").onclick=Ns;function vp(n){if(!n.ok){St(n.errors[0]);return}Ei(),ce=n.result,Qe=ce.settings,ce.certificate=bi(ce,ht,Rt,Qe),ce.planId=Rs({rows:ht,vehicle:Rt,settings:Qe,modelVersion:gn}),ho++;let e=n.anchor.key;Uc(),Bc(_n().places.find(t=>t.stackKey===e)),yn(),St("\u0421\u0442\u043E\u043F\u043A\u0430 \u043F\u0435\u0440\u0435\u043C\u0435\u0449\u0435\u043D\u0430 \u0438 \u0437\u0430\u043A\u0440\u0435\u043F\u043B\u0435\u043D\u0430. \u041E\u0441\u0442\u0430\u043B\u044C\u043D\u0430\u044F \u0441\u0445\u0435\u043C\u0430 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0430.")}function Hy(){let n=Xn;if(!n)return;ar("plan");let e=ir(_n(),n)[0],t=ht.find(r=>r.id===n.id);qn("\u041F\u0435\u0440\u0435\u043C\u0435\u0441\u0442\u0438\u0442\u044C \u0441\u0442\u043E\u043F\u043A\u0443",`<p>\u0414\u0432\u0438\u0433\u0430\u0439\u0442\u0435 \u0441\u0442\u043E\u043F\u043A\u0443 \u043D\u0430 \u043F\u043B\u0430\u043D\u0435 \u0438\u043B\u0438 \u0437\u0430\u0434\u0430\u0439\u0442\u0435 \u043A\u043E\u043E\u0440\u0434\u0438\u043D\u0430\u0442\u044B \u0435\u0451 \u043D\u0438\u0436\u043D\u0435\u0433\u043E \u043F\u0435\u0440\u0435\u0434\u043D\u0435\u0433\u043E \u0443\u0433\u043B\u0430. X \u2014 \u043E\u0442 \u043F\u0435\u0440\u0435\u0434\u043D\u0435\u0439 \u0441\u0442\u0435\u043D\u043A\u0438, Y \u2014 \u043E\u0442 \u043B\u0435\u0432\u043E\u0439 \u0441\u0442\u0435\u043D\u043A\u0438. \u041F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u043F\u0440\u043E\u0432\u0435\u0440\u044F\u0435\u0442\u0441\u044F \u043F\u043E \u0444\u0430\u043A\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u043C \u0433\u0430\u0431\u0430\u0440\u0438\u0442\u0430\u043C.</p><div class="fields two"><div class="field"><label for="move-x">X, \u043C\u043C</label><input id="move-x" type="number" step="10" value="${e.x}"></div><div class="field"><label for="move-y">Y, \u043C\u043C</label><input id="move-y" type="number" step="10" value="${e.y}"></div></div><label class="check"><input id="move-rotation" type="checkbox" ${e.rotated?"checked":""} ${t.rotate?"":"disabled"}> \u041F\u043E\u0432\u043E\u0440\u043E\u0442 \u043E\u0441\u043D\u043E\u0432\u0430\u043D\u0438\u044F \u043D\u0430 90\xB0</label><p id="move-error" class="form-error" role="status"></p><button id="apply-move" class="primary">\u041F\u0440\u0438\u043C\u0435\u043D\u0438\u0442\u044C \u0438 \u0437\u0430\u043A\u0440\u0435\u043F\u0438\u0442\u044C \u2197</button><p class="formula-note" style="margin-top:18px">\u041F\u0435\u0440\u0435\u043C\u0435\u0449\u0430\u0435\u0442\u0441\u044F \u0446\u0435\u043B\u0430\u044F \u043E\u0434\u043D\u043E\u0440\u043E\u0434\u043D\u0430\u044F \u0441\u0442\u043E\u043F\u043A\u0430. \u0412\u0435\u0440\u0445\u043D\u0438\u0435 \u043C\u0435\u0441\u0442\u0430 \u0441\u043E\u0445\u0440\u0430\u043D\u044F\u044E\u0442 \u043F\u043E\u043B\u043D\u043E\u0435 \u043E\u043F\u0438\u0440\u0430\u043D\u0438\u0435.</p>`,"move");let i,s=()=>{i=mh(ce,oi,e.stackKey,Number(P("#move-x").value),Number(P("#move-y").value),P("#move-rotation").checked),P("#move-error").textContent=i.ok?"\u041F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u0434\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u043E \u0432 \u0440\u0430\u0441\u0447\u0451\u0442\u043D\u043E\u0439 \u043C\u043E\u0434\u0435\u043B\u0438.":i.errors[0],P("#apply-move").disabled=!i.ok};P("#move-x").oninput=P("#move-y").oninput=P("#move-rotation").onchange=s,P("#apply-move").onclick=()=>{s(),i.ok&&(Dn(),vp(i))},s()}var bp=n=>{let e=P("#floor-plan").getBoundingClientRect(),t=dp;if(!t)return null;let i=(n.clientX-e.left-t.x)/t.s,s=(n.clientY-e.top-t.y)/t.s;return t.vertical?{x:s,y:i}:{x:i,y:s}};P("#floor-plan").addEventListener("pointerdown",n=>{let e=n.target.closest("[data-place]");if(!e||bn||as||n.button!==0)return;let t=_n().places[Number(e.dataset.place)],i=bp(n);if(!i)return;Bc(t);let s=ir(_n(),t)[0];Bt={key:s.stackKey,base:s,offset:{x:i.x-s.x,y:i.y-s.y},start:{x:n.clientX,y:n.clientY},pointerId:n.pointerId,moved:!1},P("#floor-plan").setPointerCapture(n.pointerId)});P("#floor-plan").addEventListener("pointermove",n=>{if(!Bt||n.pointerId!==Bt.pointerId||Math.hypot(n.clientX-Bt.start.x,n.clientY-Bt.start.y)<5&&!Bt.moved)return;Bt.moved=!0,n.preventDefault();let e=bp(n),t=n.altKey?1:10,i=Math.round((e.x-Bt.offset.x)/t)*t,s=Math.round((e.y-Bt.offset.y)/t)*t;Bt.candidate=mh(ce,oi,Bt.key,i,s,Bt.base.rotated),Ln={places:[{...Bt.base,x:i,y:s,invalid:!Bt.candidate.ok}]},He?.setGhosts(Ln.places),P("#scene-hint").textContent=Bt.candidate.ok?`X ${Ue(i)} \xB7 Y ${Ue(s)} \u043C\u043C \xB7 \u0434\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u043E`:"\u041F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u043D\u0435\u0434\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u043E: "+Bt.candidate.errors[0],En="",vn()});function Mp(n,e=!1){if(!Bt||n.pointerId!==Bt.pointerId)return;let t=Bt;Ln=null,He?.setGhosts([]),P("#floor-plan").releasePointerCapture(n.pointerId),t.moved&&!e&&(t.candidate?.ok?vp(t.candidate):St(t.candidate?.errors[0]||"\u041F\u0435\u0440\u0435\u043C\u0435\u0449\u0435\u043D\u0438\u0435 \u043E\u0442\u043C\u0435\u043D\u0435\u043D\u043E.")),setTimeout(()=>Bt=null,0),P("#scene-hint").textContent="\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u0442\u043E\u043F\u043A\u0443 \xB7 \u043F\u0435\u0440\u0435\u0442\u0430\u0449\u0438\u0442\u0435 \u0434\u043B\u044F \u043F\u0435\u0440\u0435\u043C\u0435\u0449\u0435\u043D\u0438\u044F",En="",vn()}P("#floor-plan").addEventListener("pointerup",n=>Mp(n));P("#floor-plan").addEventListener("pointercancel",n=>Mp(n,!0));function Wy(){if(bn||!Xn)return;let n=ht.find(t=>t.id===Xn.id),e=jf(_n(),n,Rt,Qe);Ln=e,He?.setGhosts(e.places),En="",vn(),P("#scene-overlay").hidden=!1,P("#scene-overlay").innerHTML=`<div><strong>${e.found?`\u041D\u0430\u0439\u0434\u0435\u043D\u043E \u0435\u0449\u0451 ${Ue(e.found)} ${xn(e.found,"\u043C\u0435\u0441\u0442\u043E","\u043C\u0435\u0441\u0442\u0430","\u043C\u0435\u0441\u0442")}`:"\u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u0440\u0430\u0437\u043C\u0435\u0449\u0435\u043D\u0438\u0435 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E"}</strong><small>${ut(n.name)} \xB7 ${Ue(e.mass/1e3,2)} \u0442${e.found?" \xB7 \u043A\u043E\u043D\u0442\u0443\u0440\u044B \u043F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u044E\u0442 \u043D\u0430\u0439\u0434\u0435\u043D\u043D\u044B\u0435 \u043F\u043E\u0437\u0438\u0446\u0438\u0438":""}</small><small>\u042D\u0432\u0440\u0438\u0441\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u043F\u043E\u0438\u0441\u043A \u0432 \u0442\u0435\u043A\u0443\u0449\u0435\u0439 \u043C\u0430\u0448\u0438\u043D\u0435. \u041C\u0430\u043A\u0441\u0438\u043C\u0443\u043C \u043D\u0435 \u0434\u043E\u043A\u0430\u0437\u0430\u043D.</small></div><button id="close-preview" aria-label="\u0417\u0430\u043A\u0440\u044B\u0442\u044C \u043F\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440">\xD7</button>`,En="",vn(),P("#close-preview").onclick=()=>{Ln=null,He?.setGhosts([]),P("#scene-overlay").hidden=!0,En="",vn()}}P("#planning-settings").onclick=()=>{qn("\u0423\u0441\u043B\u043E\u0432\u0438\u044F \u043F\u043B\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F",`<p>\u0417\u0430\u0437\u043E\u0440 \u043F\u0440\u0438\u043C\u0435\u043D\u044F\u0435\u0442\u0441\u044F \u043C\u0435\u0436\u0434\u0443 \u0441\u043E\u0441\u0435\u0434\u043D\u0438\u043C\u0438 \u0441\u0442\u043E\u043F\u043A\u0430\u043C\u0438 \u043F\u043E \u0433\u043E\u0440\u0438\u0437\u043E\u043D\u0442\u0430\u043B\u0438 \u0438 \u0434\u043E \u0441\u0442\u0435\u043D \u043A\u0443\u0437\u043E\u0432\u0430. \u041C\u0435\u0436\u0434\u0443 \u044F\u0440\u0443\u0441\u0430\u043C\u0438 \u0441\u043E\u0445\u0440\u0430\u043D\u044F\u0435\u0442\u0441\u044F \u043A\u043E\u043D\u0442\u0430\u043A\u0442. \u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0432\u044B\u0431\u0438\u0440\u0430\u0435\u0442\u0441\u044F \u043F\u043E \u0444\u0430\u043A\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u043C \u0443\u0441\u043B\u043E\u0432\u0438\u044F\u043C \u043F\u0435\u0440\u0435\u0432\u043E\u0437\u043A\u0438.</p><div class="field"><label for="planning-gap">\u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0437\u0430\u0437\u043E\u0440, \u043C\u043C</label><input id="planning-gap" type="number" min="0" max="200" step="1" value="${Qe.gap}"></div><p class="formula-note">\u0413\u0430\u0431\u0430\u0440\u0438\u0442\u044B \u0442\u0430\u0440\u044B \u043D\u0435 \u0438\u0437\u043C\u0435\u043D\u044F\u044E\u0442\u0441\u044F. \u0420\u0430\u0441\u0447\u0451\u0442 \u0440\u0435\u0437\u0435\u0440\u0432\u0438\u0440\u0443\u0435\u0442 \u0441\u0432\u043E\u0431\u043E\u0434\u043D\u043E\u0435 \u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0441\u0442\u0432\u043E \u0432\u043E\u043A\u0440\u0443\u0433 \u043E\u0441\u043D\u043E\u0432\u0430\u043D\u0438\u0439.</p><p>${Qe.anchors.length?`\u0417\u0430\u043A\u0440\u0435\u043F\u043B\u0435\u043D\u043E \u0441\u0442\u043E\u043F\u043E\u043A: ${Qe.anchors.length}. \u0418\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0435 \u0437\u0430\u0437\u043E\u0440\u0430 \u043C\u043E\u0436\u0435\u0442 \u043F\u043E\u0442\u0440\u0435\u0431\u043E\u0432\u0430\u0442\u044C \u0441\u043D\u044F\u0442\u044C \u0437\u0430\u043A\u0440\u0435\u043F\u043B\u0435\u043D\u0438\u044F.`:"\u0417\u0430\u043A\u0440\u0435\u043F\u043B\u0451\u043D\u043D\u044B\u0445 \u0441\u0442\u043E\u043F\u043E\u043A \u043D\u0435\u0442."}</p><div class="drawer-actions"><button id="apply-settings" class="primary">\u041F\u0440\u0438\u043C\u0435\u043D\u0438\u0442\u044C \u2197</button><button id="clear-anchors" class="outline" ${Qe.anchors.length?"":"disabled"}>\u0421\u043D\u044F\u0442\u044C \u0432\u0441\u0435 \u0437\u0430\u043A\u0440\u0435\u043F\u043B\u0435\u043D\u0438\u044F</button></div><p id="settings-error" class="form-error" role="status"></p><h3>\u0423\u0441\u0442\u043E\u0439\u0447\u0438\u0432\u043E\u0441\u0442\u044C \u043F\u043B\u0430\u043D\u0430</h3><p>\u041F\u0440\u043E\u0432\u0435\u0440\u0438\u043C \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0443\u0432\u0435\u043B\u0438\u0447\u0435\u043D\u043D\u044B\u0445 \u0437\u0430\u0437\u043E\u0440\u043E\u0432. \u042D\u0442\u043E \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u0438 \u0447\u0443\u0432\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438, \u0430 \u043D\u0435 \u0434\u043E\u043A\u0430\u0437\u0430\u043D\u043D\u044B\u0439 \u043F\u0440\u0435\u0434\u0435\u043B \u0432\u043C\u0435\u0441\u0442\u0438\u043C\u043E\u0441\u0442\u0438.</p><button id="sensitivity" class="outline">\u041F\u0440\u043E\u0432\u0435\u0440\u0438\u0442\u044C \u0437\u0430\u043F\u0430\u0441 \u043F\u043E \u0437\u0430\u0437\u043E\u0440\u0443</button><div id="sensitivity-result"></div>`,"settings"),P("#apply-settings").onclick=()=>{try{let n=nr({...Qe,gap:Number(P("#planning-gap").value)});Ei(),Qe=n,Dn(),Ls(),Ns()}catch(n){P("#settings-error").textContent=n.message}},P("#clear-anchors").onclick=()=>{Ei(),Qe.anchors=[],!bn&&ce&&(ce.settings=structuredClone(Qe),ce.planId=Rs({rows:ht,vehicle:Rt,settings:Qe,modelVersion:gn}),ce.certificate=bi(ce,ht,Rt,Qe),Uc()),yn(),Dn(),St("\u0412\u0441\u0435 \u0441\u0442\u043E\u043F\u043A\u0438 \u043E\u0442\u043A\u0440\u0435\u043F\u043B\u0435\u043D\u044B.")},P("#sensitivity").onclick=async()=>{let n=P("#sensitivity"),e=P("#sensitivity-result"),t=Number(P("#planning-gap").value),i=[...new Set([t,t+5,t+10,t+20].map(a=>Math.min(200,a)))];try{nr({gap:t})}catch(a){P("#settings-error").textContent=a.message;return}n.disabled=!0,n.textContent="\u041F\u0440\u043E\u0432\u0435\u0440\u044F\u0435\u043C\u2026";let s=xh(),r=[];try{for(let a of i)try{let o=await s.run(ht,Rt,{gap:a,anchors:Qe.anchors});r.push([a,`${o.trucks.length} ${xn(o.trucks.length,"\u043C\u0430\u0448\u0438\u043D\u0430","\u043C\u0430\u0448\u0438\u043D\u044B","\u043C\u0430\u0448\u0438\u043D")}`,`${o.placed}/${o.total}`])}catch(o){r.push([a,"\u041D\u0435\u0434\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u044B\u0435 \u0443\u0441\u043B\u043E\u0432\u0438\u044F",o.message])}e.isConnected&&(e.innerHTML=`<table><thead><tr><th>\u0417\u0430\u0437\u043E\u0440, \u043C\u043C</th><th>\u041C\u0430\u0448\u0438\u043D</th><th>\u0420\u0430\u0437\u043C\u0435\u0449\u0435\u043D\u043E</th></tr></thead><tbody>${r.map(a=>`<tr>${a.map(o=>`<td>${ut(o)}</td>`).join("")}</tr>`).join("")}</tbody></table><p class="formula-note">\u0421\u0440\u0430\u0432\u043D\u0438\u0432\u0430\u044E\u0442\u0441\u044F \u043E\u0434\u0438\u043D\u0430\u043A\u043E\u0432\u0430\u044F \u043F\u0430\u0440\u0442\u0438\u044F \u0438 \u0437\u0430\u043A\u0440\u0435\u043F\u043B\u0435\u043D\u0438\u044F. \u0427\u0438\u0441\u043B\u043E \u043C\u0430\u0448\u0438\u043D \u043E\u0442\u043D\u043E\u0441\u0438\u0442\u0441\u044F \u043A \u043D\u0430\u0439\u0434\u0435\u043D\u043D\u044B\u043C \u0441\u0445\u0435\u043C\u0430\u043C.</p>`)}finally{s.dispose(),n.disabled=!1,n.textContent="\u041F\u0440\u043E\u0432\u0435\u0440\u0438\u0442\u044C \u0437\u0430\u043F\u0430\u0441 \u043F\u043E \u0437\u0430\u0437\u043E\u0440\u0443"}}};function $y(){bn||!ce||(Ln=null,He?.setGhosts([]),ra=gh(_n()),$n=0,ar(fo?"plan":"perspective"),Ps=!1,P("#shell-toggle").textContent="\u041A\u0443\u0437\u043E\u0432 \u043E\u0442\u043A\u0440\u044B\u0442",P("#shell-toggle").setAttribute("aria-pressed","false"),He?.setShell(!1),Ah())}function Ah(){let n=ra[$n];if(!n)return;let e=ra.slice(0,$n+1).flatMap(t=>t.places.map(i=>i.unitId));He?.showSequence({key:n.key,visible:e}),Xn=n.places[0],ln=Xn.id,Ds(),rr(),En="",vn(),P("#scene-overlay").hidden=!1,P("#scene-overlay").innerHTML=`<div><strong>\u0421\u0442\u043E\u043F\u043A\u0430 ${$n+1} \u0438\u0437 ${ra.length}</strong><small>${ut(n.name)} \xB7 ${n.places.length} ${xn(n.places.length,"\u043C\u0435\u0441\u0442\u043E","\u043C\u0435\u0441\u0442\u0430","\u043C\u0435\u0441\u0442")} \xB7 X ${Ue(n.x)} / Y ${Ue(n.y)} \u043C\u043C</small><small>\u041F\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u043F\u043E\u0440\u044F\u0434\u043E\u043A: \u043E\u0442 \u043F\u0435\u0440\u0435\u0434\u043D\u0435\u0439 \u0441\u0442\u0435\u043D\u043A\u0438, \u0441\u043D\u0438\u0437\u0443 \u0432\u0432\u0435\u0440\u0445.</small></div><div class="step-actions"><button id="step-prev" aria-label="\u041F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0430\u044F \u0441\u0442\u043E\u043F\u043A\u0430" ${$n?"":"disabled"}>\u2190</button><button id="step-next" aria-label="\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0430\u044F \u0441\u0442\u043E\u043F\u043A\u0430" ${$n<ra.length-1?"":"disabled"}>\u2192</button><button id="step-close" aria-label="\u0417\u0430\u043A\u0440\u044B\u0442\u044C \u043F\u043E\u0440\u044F\u0434\u043E\u043A \u043F\u043E\u0433\u0440\u0443\u0437\u043A\u0438">\xD7</button></div>`,En="",vn(),P("#step-prev").onclick=()=>{$n--,Ah()},P("#step-next").onclick=()=>{$n++,Ah()},P("#step-close").onclick=()=>{$n=-1,He?.showSequence(null),P("#scene-overlay").hidden=!0}}P("#shell-toggle").onclick=()=>{Ps=!Ps,He?.setShell(Ps,!0),P("#shell-toggle").textContent=Ps?"\u041A\u0443\u0437\u043E\u0432 \u0437\u0430\u043A\u0440\u044B\u0442":"\u041A\u0443\u0437\u043E\u0432 \u043E\u0442\u043A\u0440\u044B\u0442",P("#shell-toggle").setAttribute("aria-pressed",String(Ps))};P("#explode").onclick=()=>{Is=!Is,Is&&(Ps=!1,P("#shell-toggle").textContent="\u041A\u0443\u0437\u043E\u0432 \u043E\u0442\u043A\u0440\u044B\u0442",P("#shell-toggle").setAttribute("aria-pressed","false")),He?.setExploded(Is,!0),P("#explode").textContent=Is?"\u0421\u043E\u0431\u0440\u0430\u0442\u044C \u044F\u0440\u0443\u0441\u044B":"\u0420\u0430\u0437\u043E\u0431\u0440\u0430\u0442\u044C \u044F\u0440\u0443\u0441\u044B",P("#scene-hint").textContent=Is?"\u0420\u0430\u0437\u0431\u043E\u0440 \u044F\u0440\u0443\u0441\u043E\u0432 \u2014 \u0443\u0441\u043B\u043E\u0432\u043D\u044B\u0435 \u0440\u0430\u0441\u0441\u0442\u043E\u044F\u043D\u0438\u044F":"\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0433\u0440\u0443\u0437 \xB7 \u0432\u0440\u0430\u0449\u0430\u0439\u0442\u0435 \u0441\u0446\u0435\u043D\u0443",Fn(),Si==="plan"&&ar("perspective")};function Xy(n,e){let t=new Map(n.trucks.flatMap(c=>c.places.map(u=>[u.unitId,{...u,truck:c.number}]))),i=new Map(e.trucks.flatMap(c=>c.places.map(u=>[u.unitId,{...u,truck:c.number}]))),s=(c,u)=>!u||["x","y","z","truck","rotated"].some(d=>c[d]!==u[d]),r=new Set,a=new Set,o=0;for(let c of i.values()){let u=t.get(c.unitId);s(c,u)&&a.add(c.stackKey),u&&s(c,u)&&(r.add(u.stackKey),o++)}for(let c of t.values())i.has(c.unitId)||r.add(c.stackKey);let l=(c,u)=>{let d=c.trucks[0]||{places:[]},h=Dc(d,c.vehicle,{width:460,height:175,light:!1,changed:u});return`<svg viewBox="${h.viewBox}" role="img" aria-label="\u0421\u0445\u0435\u043C\u0430 \u043F\u0435\u0440\u0432\u043E\u0439 \u043C\u0430\u0448\u0438\u043D\u044B">${h.html}</svg>`};return`<div class="visual-compare"><div><span>\u0418\u0441\u0445\u043E\u0434\u043D\u044B\u0439 \xB7 \u043C\u0430\u0448\u0438\u043D\u0430 1</span>${l(n,r)}</div><div><span>\u0422\u0435\u043A\u0443\u0449\u0438\u0439 \xB7 \u043C\u0430\u0448\u0438\u043D\u0430 1</span>${l(e,a)}</div></div><p class="formula-note">\u0418\u0437\u043C\u0435\u043D\u0438\u043B\u0438 \u0440\u0430\u0437\u043C\u0435\u0449\u0435\u043D\u0438\u0435 ${o} \u043C\u0435\u0441\u0442 \u0441 \u043E\u0434\u0438\u043D\u0430\u043A\u043E\u0432\u044B\u043C\u0438 \u0438\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440\u0430\u043C\u0438. \u042F\u043D\u0442\u0430\u0440\u043D\u044B\u043C \u043A\u043E\u043D\u0442\u0443\u0440\u043E\u043C \u043E\u0442\u043C\u0435\u0447\u0435\u043D\u044B \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u0438 \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u0435 \u0438\u043B\u0438 \u0443\u0434\u0430\u043B\u0451\u043D\u043D\u044B\u0435 \u0441\u0442\u043E\u043F\u043A\u0438. \u041F\u043B\u0430\u043D\u044B \u0441\u0432\u0435\u0440\u0445\u0443 \u043F\u043E\u043A\u0430\u0437\u0430\u043D\u044B \u0432 \u043E\u0434\u043D\u043E\u043C \u043C\u0430\u0441\u0448\u0442\u0430\u0431\u0435 \u043F\u0440\u0438 \u043E\u0434\u0438\u043D\u0430\u043A\u043E\u0432\u043E\u043C \u043A\u0443\u0437\u043E\u0432\u0435.</p><button id="compare-scene" class="outline" ${["l","w","h"].every(c=>n.vehicle[c]===e.vehicle[c])?"":"disabled"}>\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u043F\u0435\u0440\u0435\u0445\u043E\u0434 \u0432 3D \u2197</button>`}var Sp={accepted:"\u041F\u0440\u0438\u043D\u044F\u0442",corrected:"\u0421\u043A\u043E\u0440\u0440\u0435\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D",rejected:"\u041E\u0442\u043A\u043B\u043E\u043D\u0451\u043D"};P("#pilot").onclick=()=>{qn("\u0416\u0443\u0440\u043D\u0430\u043B \u043F\u0438\u043B\u043E\u0442\u0430",`<p>\u0417\u0430\u043F\u0438\u0441\u044B\u0432\u0430\u0439\u0442\u0435 \u0444\u0430\u043A\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F \u043F\u043B\u0430\u043D\u0430. \u0416\u0443\u0440\u043D\u0430\u043B \u0445\u0440\u0430\u043D\u0438\u0442\u0441\u044F \u0432 \u043F\u0440\u043E\u0435\u043A\u0442\u0435; \u0443\u0447\u0435\u0431\u043D\u044B\u0435 \u0440\u0430\u0441\u0447\u0451\u0442\u044B \u043D\u0435 \u0441\u043E\u0437\u0434\u0430\u044E\u0442 \u043D\u0430\u0431\u043B\u044E\u0434\u0435\u043D\u0438\u0439 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438.</p><div class="pilot-summary"><strong>${Yt.length}</strong><span>\u043D\u0430\u0431\u043B\u044E\u0434\u0435\u043D\u0438\u0439 \xB7 \u043F\u0440\u0438\u043D\u044F\u0442\u043E ${Yt.filter(n=>n.status==="accepted").length}</span></div>${ce&&!bn&&ce.total?`<h3>\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 \u0442\u0435\u043A\u0443\u0449\u0435\u0433\u043E \u043F\u043B\u0430\u043D\u0430</h3><p class="formula-note">${ut(wn)} \xB7 \u043F\u043B\u0430\u043D ${ce.planId} \xB7 ${ce.trucks.length} \u043C\u0430\u0448\u0438\u043D</p><form id="pilot-form"><div class="field"><label for="pilot-status">\u0420\u0435\u0448\u0435\u043D\u0438\u0435 \u043F\u043E \u043F\u043B\u0430\u043D\u0443</label><select id="pilot-status"><option value="accepted">\u041F\u0440\u0438\u043D\u044F\u0442 \u0431\u0435\u0437 \u043A\u043E\u0440\u0440\u0435\u043A\u0442\u0438\u0440\u043E\u0432\u043A\u0438</option><option value="corrected">\u0421\u043A\u043E\u0440\u0440\u0435\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D</option><option value="rejected">\u041E\u0442\u043A\u043B\u043E\u043D\u0451\u043D</option></select></div><div class="field"><label for="pilot-actual">\u0424\u0430\u043A\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u043E \u043C\u0430\u0448\u0438\u043D</label><input id="pilot-actual" type="number" min="0" max="2000" value="${ce.trucks.length}"></div><div class="field"><label for="pilot-reason">\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439 / \u043F\u0440\u0438\u0447\u0438\u043D\u0430 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0439</label><textarea id="pilot-reason" maxlength="500" rows="3" placeholder="\u0422\u043E\u043B\u044C\u043A\u043E \u0444\u0430\u043A\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0435 \u043D\u0430\u0431\u043B\u044E\u0434\u0435\u043D\u0438\u0435"></textarea></div><p id="pilot-error" class="form-error" role="alert"></p><button class="primary" type="submit" ${Yt.length>=100?"disabled":""}>\u0417\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u043D\u0430\u0431\u043B\u044E\u0434\u0435\u043D\u0438\u0435 \u2197</button></form>`:"<p>\u0420\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u0439\u0442\u0435 \u043D\u0435\u043F\u0443\u0441\u0442\u0443\u044E \u043F\u0430\u0440\u0442\u0438\u044E \u0434\u043B\u044F \u0437\u0430\u043F\u0438\u0441\u0438 \u043D\u043E\u0432\u043E\u0433\u043E \u043D\u0430\u0431\u043B\u044E\u0434\u0435\u043D\u0438\u044F.</p>"}<h3>\u041D\u0430\u0431\u043B\u044E\u0434\u0435\u043D\u0438\u044F</h3>${Yt.length?Yt.slice().reverse().map(n=>`<article class="pilot-record"><div><b>${ut(n.batchName)}</b><span class="pilot-badge">${Sp[n.status]}</span></div><small>${new Date(n.date).toLocaleDateString("ru-RU")} \xB7 \u043F\u043B\u0430\u043D / \u0444\u0430\u043A\u0442: ${n.plannedTrucks} / ${n.actualTrucks} \u043C\u0430\u0448\u0438\u043D \xB7 ${n.planId}</small><p>${ut(n.reason)||"\u0411\u0435\u0437 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u044F"}</p><button data-delete-pilot="${ut(n.id)}" class="quiet">\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0437\u0430\u043F\u0438\u0441\u044C</button></article>`).join(""):"<p>\u041F\u043E\u043A\u0430 \u043D\u0435\u0442 \u0444\u0430\u043A\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u043D\u0430\u0431\u043B\u044E\u0434\u0435\u043D\u0438\u0439.</p>"}${Yt.length?'<button id="export-pilot" class="outline">\u0421\u043A\u0430\u0447\u0430\u0442\u044C \u0436\u0443\u0440\u043D\u0430\u043B JSON \u2197</button>':""}`,"pilot"),P("#pilot-form")&&(P("#pilot-form").onsubmit=n=>{n.preventDefault();let e=P("#pilot-status").value,t=Number(P("#pilot-actual").value),i=P("#pilot-reason").value.trim();if(!Number.isInteger(t)||t<0||t>2e3||e!=="accepted"&&!i||e==="accepted"&&t!==ce.trucks.length){P("#pilot-error").textContent=e==="accepted"&&t!==ce.trucks.length?"\u0414\u043B\u044F \u0438\u0437\u043C\u0435\u043D\u0451\u043D\u043D\u043E\u0433\u043E \u0447\u0438\u0441\u043B\u0430 \u043C\u0430\u0448\u0438\u043D \u0432\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \xAB\u0421\u043A\u043E\u0440\u0440\u0435\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\xBB.":"\u0423\u043A\u0430\u0436\u0438\u0442\u0435 \u0447\u0438\u0441\u043B\u043E \u043C\u0430\u0448\u0438\u043D \u0438 \u043F\u0440\u0438\u0447\u0438\u043D\u0443 \u043A\u043E\u0440\u0440\u0435\u043A\u0442\u0438\u0440\u043E\u0432\u043A\u0438 \u0438\u043B\u0438 \u043E\u0442\u043A\u0430\u0437\u0430.";return}Yt.push({id:crypto.randomUUID?.()||String(Date.now()),date:new Date().toISOString(),status:e,actualTrucks:t,plannedTrucks:ce.trucks.length,reason:i,batchName:wn,planId:ce.planId,modelVersion:gn}),yn(),P("#pilot").click(),St("\u0424\u0430\u043A\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0435 \u043D\u0430\u0431\u043B\u044E\u0434\u0435\u043D\u0438\u0435 \u0437\u0430\u043F\u0438\u0441\u0430\u043D\u043E.")}),Nn("[data-delete-pilot]").forEach(n=>n.onclick=()=>{let e=Yt.find(t=>t.id===n.dataset.deletePilot);Yt=Yt.filter(t=>t!==e),yn(),P("#pilot").click(),St("\u0417\u0430\u043F\u0438\u0441\u044C \u0443\u0434\u0430\u043B\u0435\u043D\u0430.","\u0412\u0435\u0440\u043D\u0443\u0442\u044C",()=>{Yt.push(e),Yt.sort((t,i)=>t.date.localeCompare(i.date)),yn(),Nc==="pilot"&&P("#pilot").click()})}),P("#export-pilot")&&(P("#export-pilot").onclick=()=>Pc("ZAGRUZKA_Pilot.json",JSON.stringify({schema:"zagruzka-pilot",version:1,records:Yt},null,2)))};var wp=new ResizeObserver(()=>{Si==="plan"&&vn()});wp.observe(P(".scene-frame"));try{let e=JSON.parse(P("#saved-project").textContent),t=!1;try{let i=localStorage.getItem(Mh)||localStorage.getItem(Mh.replace("zagruzka-v6:","zagruzka-v4:"));i&&(e=JSON.parse(i),t=!0)}catch{}if(e){let i=sa(e);ht=i.rows,Rt=i.vehicle,wn=i.batchName,ss=i.templates,Pn=i.baseline,Qe=i.settings,Yt=i.pilot,on=i.history,wh=i.planSnapshot,_h(i.branding),ln=ht[0]?.id??null,P("#project-caption").textContent=t?"\u0412\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D \u0447\u0435\u0440\u043D\u043E\u0432\u0438\u043A":"\u0421\u043E\u0445\u0440\u0430\u043D\u0451\u043D\u043D\u044B\u0439 \u043F\u0440\u043E\u0435\u043A\u0442"}}catch(n){St(n.message+" \u041E\u0442\u043A\u0440\u044B\u0442 \u0443\u0447\u0435\u0431\u043D\u044B\u0439 \u043F\u0440\u0438\u043C\u0435\u0440.")}Rh();Ds();rr();Fc();P("#report").disabled=!0;var qy=wh?(Dh(wh),Promise.resolve()):Ns();la();zh().then(()=>la());function vh(n){fo=!0,oa=!1,Nn("[data-view]").filter(e=>e.dataset.view!=="plan").forEach(e=>e.disabled=!0),P("#shell-toggle").disabled=!0,["cargo-focus","dimensions","explode","reset-view"].forEach(e=>P("#"+e).disabled=!0),P("#scene-loading").hidden=!0,ar("plan"),St(n+" \u041F\u043B\u0430\u043D \u0441\u0432\u0435\u0440\u0445\u0443 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442. \u0414\u043B\u044F \u0432\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u044F 3D \u043E\u0431\u043D\u043E\u0432\u0438\u0442\u0435 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443.")}var bh=0;function Yy(){let n=++bh;oa=!1,He?.dispose(),He=null,P("#scene canvas")?.remove(),P("#scene-loading").hidden=!1,P("#loading-progress").value=0;try{let e=Vf(P("#scene"),Bc,(t,i)=>{n===bh&&(P("#loading-text").textContent=t,P("#loading-progress").value=i,i===1&&(P("#scene-loading").hidden=!0,oa=!fo))},t=>{n===bh&&vh(t)},()=>{});He=e,e.setVehicle(ce?.vehicle||Rt),e.setCargo(_n().places),e.setPins(Qe.anchors.filter(t=>t.truck===_n().number)),e.setShell(Ps),e.setExploded(Is),e.highlight(ln),e.setLayer(rs),e.focusCargo(co),e.dimensions(uo),e.view(Si==="plan"?"perspective":Si),e.setVisible(Si!=="plan"),la(),e.ready.then(()=>{He===e&&!fo&&(oa=!0)}).catch(t=>{He===e&&vh(t.message)})}catch{vh("3D \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u043D\u043E.")}}qy.then(()=>requestAnimationFrame(()=>setTimeout(Yy,0)));window.addEventListener("pagehide",()=>{aa&&(clearTimeout(aa),gp()),Th.dispose(),He?.dispose(),wp.disconnect(),clearTimeout(aa),clearTimeout(Eh)});Object.defineProperty(window,"zagruzkaDiagnostics",{value:()=>({appVersion:"7.0.0",modelVersion:gn,pallets:ce?.pallets,boxes:ce?.boxes,scene:He?.diagnostics(),solver:ce?.diagnostics,elapsedMs:ce?.elapsedMs,certificate:ce?.certificate,settings:structuredClone(Qe),planId:ce?.planId,history:{past:on.past.length,future:on.future.length},pilotCount:Yt.length,residualFound:Ln?.found}),configurable:!0});document.addEventListener("keydown",n=>{(n.ctrlKey||n.metaKey)&&(n.code==="KeyZ"&&!n.target.matches("input,textarea,[contenteditable]")?(n.preventDefault(),Ch(n.shiftKey?"future":"past")):n.code==="KeyS"?(n.preventDefault(),P("#save-project").click()):n.code==="KeyO"?(n.preventDefault(),P("#open-project").click()):n.code==="Enter"&&P("#drawer").hidden&&(n.preventDefault(),Ns()))});})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
