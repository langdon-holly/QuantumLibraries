$wnd.jsme.runAsyncCallback1('var W5="Assignment of aromatic double bonds failed";function X5(a,b){var c;c=a.x[b];return 3<=c&&4>=c||11<=c&&13>=c||19<=c&&31>=c||37<=c&&51>=c||55<=c&&84>=c||87<=c&&103>=c}function $(a,b){var c,d;c=b;for(d=0;0!=b;)0==a.c&&(a.e=(a.a[++a.d]&63)<<11,a.c=6),d|=(65536&a.e)>>16-c+b,a.e<<=1,--b,--a.c;return d}function Y5(a,b,c){a.c=6;a.d=c;a.a=b;a.e=(b[a.d]&63)<<11}function Z5(a,b){var c,d;c=~~(b/2);(d=a>=c)&&(a-=c);c=~~(b/32)*a/(c-a);return d?-c:c}function $5(){this.b=!0}x(24,1,{},$5);_.a=null;_.b=!1;\n_.c=0;_.d=0;_.e=0;_.f=null;function a6(a,b){var c,d,e;1==a.b.B[b]&&Sn(a.b,b,2);for(d=0;2>d;++d){c=D(a.b,d,b);cr(a.b,c,!1);for(e=0;e<a.b.f[c];++e)a.a[Un(a.b,c,e)]=!1}}function b6(a){var b,c,d,e,f,g,h;do{h=!1;for(c=0;c<a.b.d;++c)if(a.a[c]){f=!1;for(e=0;2>e;++e){b=!1;d=D(a.b,e,c);for(g=0;g<a.b.f[d];++g)if(c!=Un(a.b,d,g)&&a.a[Un(a.b,d,g)]){b=!0;break}if(!b){f=!0;break}}f&&(h=!0,a6(a,c))}}while(h)}function c6(){}x(29,1,{},c6);_.a=null;_.b=null;\nfunction d6(a,b,c,d){a.b||(4==a.i||3==a.i&&-1!=a.c?a.b=!0:(a.j[a.i]=d,a.f[a.i]=b,a.k[a.i]=c,++a.i))}\nfunction e6(a,b){var c,d,e,f;if(a.b)return 3;-1!=a.c&&(a.c=b[a.c]);for(e=0;e<a.i;++e)2147483647!=a.f[e]&&(a.f[e]=b[a.f[e]]);if(-1==a.c&&0==a.d){d=2147483647;f=-1;for(e=0;e<a.i;++e)d>a.k[e]&&(d=a.k[e],f=e);a.c=a.f[f];for(e=f+1;e<a.i;++e)a.f[e-1]=a.f[e],a.k[e-1]=a.k[e],a.j[e-1]=a.j[e];--a.i}f=(-1==a.c?0:1)+a.d+a.i;if(4<f||3>f)return 3;c=-1==a.c&&1==a.d||-1!=a.c&&xr(a.n.b,a.c);d=-1;for(e=0;e<a.i;++e)if(a.j[e]){if(-1!=d||c)return 3;d=e}f=!1;if(-1!=d)for(e=0;e<a.i;++e)!a.j[e]&&a.f[d]<a.f[e]&&(f=!f);d=\n!1;if(-1!=a.c&&!c)for(e=0;e<a.i;++e)a.c<a.f[e]&&(d=!d);e=a.f;c=a.k;var g,h,j;h=!1;for(g=1;g<a.i;++g)for(j=0;j<g;++j)e[j]>e[g]&&(h=!h),c[j]>c[g]&&(h=!h);return a.e^h^d^f?2:1}function f6(a,b,c,d,e,f){this.n=a;0!=d&&1!=d?this.b=!0:(this.a=b,this.c=c,this.d=d,this.e=f,this.i=0,this.j=C(Rn,Im,-1,4,2),this.f=C(B,v,-1,4,1),this.k=C(B,v,-1,4,1),-1!=c&&1==d&&(d6(this,2147483647,e,!0),this.d=0))}x(30,1,{},f6);_.a=0;_.b=!1;_.c=0;_.d=0;_.e=!1;_.f=null;_.i=0;_.j=null;_.k=null;_.n=null;\nfunction g6(a){Qn(a,15);if(a.b){var a=a.b,b;for(b=0;b<a.H.c;++b)if(0==(a.H.s[b]&67108864)&&3==a.S[b]){var c=a.H;c.s[b]|=67108864;c.K&=3}for(b=0;b<a.H.d;++b)3==a.k[b]&&2==Yn(a.H,b)&&Sn(a.H,b,26)}}function h6(){this.e=1}x(33,1,{},h6);\nfunction i6(a){var b;if(null==a||0==a.length||0==Xr(a).length)return CO(new aN,m,!0);b=new ks;var c=new c6,d=dU(Xr(a)),e,f,g,h,j,l,n,q,r,t,A,u,w,F,H,s,Q,da,Y,W,ia,tb,Sa,cb,M,vb,ua,P,Ba,lb,va,ib,R,Xc,ra,ob,jb;c.b=b;Mq(c.b);Sa=null;h=C(B,v,-1,64,1);h[0]=-1;vb=C(B,v,-1,64,1);ua=C(B,v,-1,64,1);for(w=0;64>w;++w)vb[w]=-1;f=M=0;P=cb=lb=!1;l=0;Ba=d.length;for(j=1;32>=d[M];)++M;for(;M<Ba;)if(va=d[M++]&65535,j6(va)||42==va){g=0;A=-1;F=tb=H=!1;if(lb)82==va&&dM(d[M]&65535)?(da=null!=String.fromCharCode(d[M+1]&\n65535).match(/\\d/)?2:1,g=or(Nq(d,M-1,1+da)),M+=da):(s=String.fromCharCode(d[M]&65535).toLowerCase().charCodeAt(0)==(d[M]&65535)&&j6(d[M]&65535)?2:1,g=or(Nq(d,M-1,s)),M+=s-1,A=0),64==d[M]&&(++M,64==d[M]&&(F=!0,++M),tb=!0),72==d[M]&&(++M,A=1,dM(d[M]&65535)&&(A=d[M]-48,++M));else if(42==va)g=6,H=!0;else switch(String.fromCharCode(va).toUpperCase().charCodeAt(0)){case 66:M<Ba&&114==d[M]?(g=35,++M):g=5;break;case 67:M<Ba&&108==d[M]?(g=17,++M):g=6;break;case 70:g=9;break;case 73:g=53;break;case 78:g=7;\nbreak;case 79:g=8;break;case 80:g=15;break;case 83:g=16}if(0==g)throw new To("SmilesParser: unknown element label found");e=Hq(c.b,g);H?(P=!0,fr(c.b,e,1)):cr(c.b,e,String.fromCharCode(va).toLowerCase().charCodeAt(0)==va&&j6(va));if(-1!=A&&1!=g){n=C(tp,jn,-1,1,1);n[0]=A<<24>>24;var $a=c.b,Xa=e,db=n;null!=db&&0==db.length&&(db=null);null==db?null!=$a.r&&($a.r[Xa]=null):(null==$a.r&&($a.r=C(Fq,o,3,$a.G,0)),$a.r[Xa]=db)}u=h[l];-1!=h[l]&&128!=j&&Lq(c.b,e,h[l],j);j=1;h[l]=e;0!=f&&(dr(c.b,e,f),f=0);(W=!Sa?\nnull:Nr(Sa,yP(u)))&&d6(W,e,M,1==g);tb&&(!Sa&&(Sa=new es),fs(Sa,yP(e),new f6(c,e,u,A,M,F)))}else if(46==va)j=128;else if(61==va)j=2;else if(35==va)j=4;else if(dM(va))if(Y=va-48,lb){for(;M<Ba&&dM(d[M]&65535);)Y=10*Y+d[M]-48,++M;f=Y}else{cb&&M<Ba&&dM(d[M]&65535)&&(Y=10*Y+d[M]-48,++M);cb=!1;if(64<=Y)throw new To("SmilesParser: ringClosureAtom number out of range");if(-1==vb[Y])vb[Y]=h[l],ua[Y]=M-1;else{if(vb[Y]==h[l])throw new To("SmilesParser: ring closure to same atom");Sa&&((W=Nr(Sa,yP(vb[Y])))&&d6(W,\nh[l],ua[Y],!1),(W=Nr(Sa,yP(h[l])))&&d6(W,vb[Y],M-1,!1));Lq(c.b,h[l],vb[Y],j);vb[Y]=-1}j=1}else if(43==va){if(!lb)throw new To("SmilesParser: \'+\' found outside brackets");for(q=1;43==d[M];)++q,++M;1==q&&dM(d[M]&65535)&&(q=d[M]-48,++M);Xq(c.b,h[l],q)}else if(45==va){if(lb){for(q=-1;45==d[M];)--q,++M;-1==q&&dM(d[M]&65535)&&(q=48-d[M],++M);Xq(c.b,h[l],q)}}else if(40==va){if(-1==h[l])throw new To("Smiles with leading parenthesis are not supported");h[l+1]=h[l];++l}else if(41==va)--l;else if(91==va){if(lb)throw new To("SmilesParser: nested square brackets found");\nlb=!0}else if(93==va){if(!lb)throw new To("SmilesParser: closing bracket without opening one");lb=!1}else if(37==va)cb=!0;else if(58==va)if(lb){for(Q=0;dM(d[M]&65535);)Q=10*Q+d[M]-48,++M;c.b.u[h[l]]=Q}else j=64;else if(47==va)j=17;else if(92==va)j=9;else throw new To("SmilesParser: unexpected character found: \'"+String.fromCharCode(va)+Eb);if(1!=j)throw new To("SmilesParser: dangling open bond");for(w=0;64>w;++w)if(-1!=vb[w])throw new To("SmilesParser: dangling ring closure");var Ia=c.b,la,V,Fb,Xb,\nea,Nc;Nc=C(B,v,-1,Ia.o,1);Xb=C(Rn,Im,-1,Ia.o,2);for(V=0;V<Ia.p;++V)for(Fb=0;2>Fb;++Fb)xr(Ia,Ia.y[Fb][V])&&!xr(Ia,Ia.y[1-Fb][V])&&(Xb[Ia.y[Fb][V]]=!0);for(ea=Ia.o-1;0<=ea&&Xb[ea];)Nc[ea]=ea,--ea;for(la=0;la<=ea;++la)if(Xb[la]){Nc[la]=ea;Nc[ea]=la;for(--ea;0<=ea&&Xb[ea];)Nc[ea]=ea,--ea}else Nc[la]=la;c.b.J=!0;Qn(c.b,1);for(e=0;e<c.b.o;++e)if(null!=(null==b.r?null:null==b.r[e]?null:Nq(b.r[e],0,b.r[e].length))&&!Uq(c.b,e))if(t=(null==c.b.r?null:c.b.r[e])[0],c.b.x[e]<(Po(),Eq).length&&null!=Eq[c.b.x[e]]){r=\n!1;ib=Ap(c.b,e);ib-=Cp(c.b,e,ib);for(Xc=Eq[c.b.x[e]],ra=0,ob=Xc.length;ra<ob;++ra)if(R=Xc[ra],ib<=R){r=!0;R!=ib+t&&Wq(c.b,e,ib+t);break}r||Wq(c.b,e,ib+t)}var G,S,Nb,Gb;for(G=0;G<c.b.c;++G)if(7==c.b.x[G]&&0==c.b.q[G]&&3<Ap(c.b,G)&&0<c.b.k[G])for(Gb=0;Gb<c.b.f[G];++Gb)if(S=Vn(c.b,G,Gb),Nb=Un(c.b,G,Gb),1<Yn(c.b,Nb)&&qr(c.b.x[S])){4==c.b.B[Nb]?Sn(c.b,Nb,2):Sn(c.b,Nb,1);Xq(c.b,G,c.b.q[G]+1);Xq(c.b,S,c.b.q[S]-1);break}var Oc,Yb,ja,mb,Hb,xa,nb,Pc,N,Ha,tc,yc,ub,fc,wb,xb;Qn(c.b,1);c.a=C(Rn,Im,-1,c.b.d,2);\nfor(ja=0;ja<c.b.d;++ja)64==c.b.B[ja]&&(Sn(c.b,ja,1),c.a[ja]=!0);xb=new Tn(c.b,3);Pc=C(Rn,Im,-1,xb.i.c,2);for(ub=0;ub<xb.i.c;++ub){fc=ao(xb.i,ub);Pc[ub]=!0;for(nb=0;nb<fc.length;++nb)if(!Uq(c.b,fc[nb])){Pc[ub]=!1;break}if(Pc[ub]){wb=ao(xb.j,ub);for(nb=0;nb<wb.length;++nb)c.a[wb[nb]]=!0}}for(ja=0;ja<c.b.d;++ja)if(!c.a[ja]&&0!=xb.b[ja]&&Uq(c.b,D(c.b,0,ja))&&Uq(c.b,D(c.b,1,ja)))a:{var pb=c,Qc=ja,Ja=void 0,K=void 0,Ob=void 0,Yc=void 0,Ic=void 0,Cc=void 0,Zb=void 0,qb=void 0,Dc=void 0,lc=void 0,Zc=void 0,\noa=void 0,gc=void 0,qb=C(B,v,-1,pb.b.c,1),Cc=C(B,v,-1,pb.b.c,1),Zb=C(B,v,-1,pb.b.c,1),Dc=C(B,v,-1,pb.b.c,1),Ja=D(pb.b,0,Qc),K=D(pb.b,1,Qc);Cc[0]=Ja;Cc[1]=K;Zb[0]=-1;Zb[1]=Qc;qb[Ja]=1;qb[K]=2;Dc[Ja]=-1;Dc[K]=Ja;for(lc=Ic=1;Ic<=lc&&15>qb[Cc[Ic]];){gc=Cc[Ic];for(Zc=0;Zc<pb.b.f[gc];++Zc)if(Ob=Vn(pb.b,gc,Zc),Ob!=Dc[gc]){Yc=Un(pb.b,gc,Zc);if(Ob==Ja){Zb[0]=Yc;for(oa=0;oa<=lc;++oa)pb.a[Zb[Zc]]=!0;break a}Uq(pb.b,Ob)&&0==qb[Ob]&&(++lc,Cc[lc]=Ob,Zb[lc]=Yc,qb[Ob]=qb[gc]+1,Dc[Ob]=gc)}++Ic}}Qn(c.b,3);for(ub=0;ub<\nxb.i.c;++ub)if(Pc[ub]){fc=ao(xb.i,ub);for(nb=0;nb<fc.length;++nb){var $c;var dc=c,ab=fc[nb],Tb=void 0;16==dc.b.x[ab]&&0>=dc.b.q[ab]||6==dc.b.x[ab]&&0!=dc.b.q[ab]||!Uq(dc.b,ab)?$c=!1:(Tb=null==Ip(dc.b,ab)?0:(null==dc.b.r?null:dc.b.r[ab])[0],$c=1>Sq(dc.b,ab)-Ap(dc.b,ab)-Tb||5!=dc.b.x[ab]&&6!=dc.b.x[ab]&&7!=dc.b.x[ab]&&8!=dc.b.x[ab]&&15!=dc.b.x[ab]&&16!=dc.b.x[ab]&&33!=dc.b.x[ab]&&34!=dc.b.x[ab]?!1:!0);if(!$c){cr(c.b,fc[nb],!1);for(Ha=0;Ha<c.b.f[fc[nb]];++Ha)c.a[Un(c.b,fc[nb],Ha)]=!1}}}b6(c);for(ub=\n0;ub<xb.i.c;++ub)if(Pc[ub]&&6==ao(xb.j,ub).length){wb=ao(xb.j,ub);N=!0;for(mb=0,Hb=wb.length;mb<Hb;++mb)if(ja=wb[mb],!c.a[ja]){N=!1;break}N&&(a6(c,wb[0]),a6(c,wb[2]),a6(c,wb[4]),b6(c))}for(yc=5;4<=yc;--yc){do{tc=!1;for(ja=0;ja<c.b.d;++ja)if(c.a[ja]){for(nb=Oc=0;2>nb;++nb){xa=D(c.b,nb,ja);for(Ha=0;Ha<c.b.f[xa];++Ha)c.a[Un(c.b,xa,Ha)]&&++Oc}if(Oc==yc){a6(c,ja);b6(c);tc=!0;break}}}while(tc)}for(ja=0;ja<c.b.d;++ja)if(c.a[ja])throw new To(W5);for(Yb=0;Yb<c.b.c;++Yb)if(Uq(c.b,Yb))throw new To(W5);c.b.r=\nnull;c.b.J=!1;var Pb,hc,zc,rb,nd,Id,Ad,Sd,eb,uc,ad;Qn(c.b,3);eb=!1;uc=C(B,v,-1,2,1);ad=C(B,v,-1,2,1);Sd=C(B,v,-1,2,1);for(hc=0;hc<c.b.d;++hc)if(!Eo(c.b,hc)&&2==c.b.B[hc]){for(rb=0;2>rb;++rb){uc[rb]=-1;Sd[rb]=-1;Pb=D(c.b,rb,hc);for(Ad=0;Ad<c.b.f[Pb];++Ad)zc=Un(c.b,Pb,Ad),zc!=hc&&(17==c.b.B[zc]||9==c.b.B[zc]?(uc[rb]=Vn(c.b,Pb,Ad),ad[rb]=zc):Sd[rb]=Vn(c.b,Pb,Ad));if(-1==uc[rb])break}if(-1!=uc[0]&&-1!=uc[1]){Id=c.b.B[ad[0]]!=c.b.B[ad[1]];nd=!1;for(rb=0;2>rb;++rb)-1!=Sd[rb]&&Sd[rb]<uc[rb]&&(nd=!nd);kr(c.b,\nhc,Id^nd?2:1,!1);eb=!0}}for(hc=0;hc<c.b.d;++hc)(17==c.b.B[hc]||9==c.b.B[hc])&&Sn(c.b,hc,1);eb&&(c.b.K|=4);Fs(new h6,c.b);if(Sa){for(ia=k6((jb=new fV(Sa),new l6(Sa,jb)));zU(ia.a.a);)W=(ia.a.b=aq(ia.a.a)).Ai(),er(c.b,W.a,e6(W,Nc),!1);c.b.K|=4}yr(c.b);g6(c.b);P&&mr(c.b,!0);return(new Hr(b)).a.a.a}function j6(a){return null!=String.fromCharCode(a).match(/[A-Z]/i)}function k6(a){a=new iV(a.b.a);return new m6(a)}function l6(a,b){this.a=a;this.b=b}x(662,650,{},l6);\n_.xi=function(a){a:{var b,c;for(c=new iV((new fV(this.a)).a);zU(c.a);)if(b=c.b=aq(c.a),b=b.Ai(),null==a?null==b:kw(a,b)){a=!0;break a}a=!1}return a};_.Ze=function(){return k6(this)};_.sg=function(){return this.b.a.c};_.a=null;_.b=null;function m6(a){this.a=a}x(663,1,{},m6);_.ye=function(){return zU(this.a.a)};_.ze=function(){return(this.a.b=aq(this.a.a)).Ai()};_.Ae=function(){hV(this.a)};_.a=null;function n6(){NU();this.a=6122;this.b=12230397}x(679,1,{},n6);x(727,622,mn);\n_.$d=function(){var a,b,c,d,e;a=b=d=null;if(this.b.a==(IP(),JP)&&this.b.i==(KP(),LP))try{var f=this.b.b,g,h,j;j=null;h=new ks;Sr(new hs,h,new mL(new rL(f)))&&(g=new Hr(h),j=g.a.a.a);b=j;if(null==b)throw new To("V3000 read failed.");a=Jk;this.a.Ec.a="V3000 conversion provided by OpenChemLib"}catch(l){if(l=Go(l),E(l,103))c=l,d=c.Yd();else throw l;}else if(this.b.a==$V)try{var n=this.b.b,q,r,t,A,u,w,F;b=-1!=n.indexOf(Pd)?(q=bU(n,Pd),r=3<=q.length&&0<q[2].length,t=2<=q.length&&0<q[1].length,A=i6(q[0]),\nu=r?i6(q[2]):i6(m),w=t?i6(q[1]):i6(m),F=m,F+=kb,F+=yQ(1,3)+yQ(1,3),t&&(F+=yQ(1,3)),F+=aa,F+=bb+A,F+=bb+u,t&&(F+=bb+w),F):i6(n);this.b.f==(FP(),OP)?a="readSMIRKS":this.b.f==XV&&(a="readSMILES");this.a.Ec.a="SMILES conversion provided by OpenChemLib"}catch(H){if(H=Go(H),E(H,103))c=H,d="SMILES parsing error:"+c.Yd();else throw H;}else if(d="Invalid or unsupported input",this.a.Vc&&!this.b.d)try{var s=new $5,Q=Xr(this.b.b),da;if(null==Q||0==Q.length)da=null;else{var Y=dU(Q),W,ia,tb,Sa,cb;if(null==Y)da=\nnull;else{Y5(s,Y,0);W=$(s,4);Sa=$(s,4);8<W&&(W=Sa);ia=$(s,W);tb=$(s,Sa);cb=new Zr(ia,tb);var M=null,vb,ua,P,Ba,lb,va,ib,R,Xc,ra,ob,jb,$a,Xa,db,Ia,la,V,Fb,Xb,ea,Nc,G,S,Nb,Gb,Oc,Yb,ja,mb,Hb,xa,nb,Pc,N,Ha,tc,yc,ub,fc,wb,xb,pb,Qc,Ja,K,Ob,Yc,Ic,Cc,Zb,qb,Dc,lc,Zc,oa,gc,$c,dc,ab,Tb,Pb,hc,zc,rb,nd,Id,Ad,Sd,eb,uc,ad;nd=8;s.f=cb;Mq(s.f);if(!(null==Y||0==Y.length))if(null!=M&&0==M.length&&(M=null),Y5(s,Y,0),P=$(s,4),Ia=$(s,4),8<P&&(nd=P,P=Ia),0==P)mr(s.f,1==$(s,1));else{Ba=$(s,P);lb=$(s,Ia);Zc=$(s,P);dc=$(s,\nP);$c=$(s,P);Nb=$(s,P);for(R=0;R<Ba;++R)Hq(s.f,6);for(K=0;K<Zc;++K)Kq(s.f,$(s,P),7);for(K=0;K<dc;++K)Kq(s.f,$(s,P),8);for(K=0;K<$c;++K)Kq(s.f,$(s,P),$(s,8));for(K=0;K<Nb;++K)Xq(s.f,$(s,P),$(s,4)-8);Gb=1+lb-Ba;nb=$(s,4);db=0;gr(s.f,0,0);hr(s.f,0,0);ir(s.f,0,0);Pc=null!=M&&39<=M[0];ad=eb=Ad=rb=0;mb=ja=!1;Pc&&(M.length>2*Ba-2&&39==M[2*Ba-2]||M.length>3*Ba-3&&39==M[3*Ba-3]?(mb=!0,Ob=(ja=M.length==3*Ba-3+9)?3*Ba-3:2*Ba-2,Xa=86*(M[Ob+1]-40)+M[Ob+2]-40,rb=Math.pow(10,Xa/2E3-1),Ob+=2,Id=86*(M[Ob+1]-40)+M[Ob+\n2]-40,Ad=Math.pow(10,Id/1500-1),Ob+=2,Sd=86*(M[Ob+1]-40)+M[Ob+2]-40,eb=Math.pow(10,Sd/1500-1),ja&&(Ob+=2,uc=86*(M[Ob+1]-40)+M[Ob+2]-40,ad=Math.pow(10,uc/1500-1))):ja=M.length==3*Ba-3);s.b&&ja&&(M=null,Pc=!1);for(K=1;K<Ba;++K)N=$(s,nb),0==N?(Pc&&(gr(s.f,K,s.f.D[0].a+8*(M[2*K-2]-83)),hr(s.f,K,s.f.D[0].b+8*(M[2*K-1]-83)),ja&&ir(s.f,K,s.f.D[0].c+8*(M[2*Ba-3+K]-83))),++Gb):(db+=N-1,Pc&&(gr(s.f,K,no(s.f,db)+M[2*K-2]-83),hr(s.f,K,oo(s.f,db)+M[2*K-1]-83),ja&&ir(s.f,K,po(s.f,db)+(M[2*Ba-3+K]-83))),Lq(s.f,\ndb,K,1));for(K=0;K<Gb;++K)Lq(s.f,$(s,P),$(s,P),1);Ic=C(Rn,Im,-1,lb,2);for(V=0;V<lb;++V)switch(ea=$(s,2),ea){case 0:X5(s.f,D(s.f,0,V))||X5(s.f,D(s.f,1,V))?Sn(s.f,V,32):Ic[V]=!0;break;case 2:Sn(s.f,V,2);break;case 3:Sn(s.f,V,4)}ua=$(s,P);for(K=0;K<ua;++K)if(R=$(s,P),8==nd)ab=$(s,2),3==ab?(Zq(s.f,R,1,0),er(s.f,R,1,!1)):er(s.f,R,ab,!1);else switch(ab=$(s,3),ab){case 4:er(s.f,R,1,!1);Zq(s.f,R,1,$(s,3));break;case 5:er(s.f,R,2,!1);Zq(s.f,R,1,$(s,3));break;case 6:er(s.f,R,1,!1);Zq(s.f,R,2,$(s,3));break;\ncase 7:er(s.f,R,2,!1);Zq(s.f,R,2,$(s,3));break;default:er(s.f,R,ab,!1)}8==nd&&0==$(s,1)&&(s.f.F=!0);vb=$(s,Ia);for(K=0;K<vb;++K)if(V=$(s,Ia),1==s.f.B[V])switch(ab=$(s,3),ab){case 4:kr(s.f,V,1,!1);jr(s.f,V,1,$(s,3));break;case 5:kr(s.f,V,2,!1);jr(s.f,V,1,$(s,3));break;case 6:kr(s.f,V,1,!1);jr(s.f,V,2,$(s,3));break;case 7:kr(s.f,V,2,!1);jr(s.f,V,2,$(s,3));break;default:kr(s.f,V,ab,!1)}else kr(s.f,V,$(s,2),!1);mr(s.f,1==$(s,1));ib=null;for(gc=0;1==$(s,1);)switch(xa=gc+$(s,4),xa){case 0:oa=$(s,P);for(K=\n0;K<oa;++K)R=$(s,P),fr(s.f,R,2048);break;case 1:oa=$(s,P);for(K=0;K<oa;++K)R=$(s,P),Dc=$(s,8),dr(s.f,R,Dc);break;case 2:oa=$(s,Ia);for(K=0;K<oa;++K)V=$(s,Ia),Sn(s.f,V,64);break;case 3:oa=$(s,P);for(K=0;K<oa;++K)R=$(s,P),fr(s.f,R,4096);break;case 4:oa=$(s,P);for(K=0;K<oa;++K)R=$(s,P),zc=$(s,4)<<3,fr(s.f,R,zc);break;case 5:oa=$(s,P);for(K=0;K<oa;++K)R=$(s,P),va=$(s,2)<<1,fr(s.f,R,va);break;case 6:oa=$(s,P);for(K=0;K<oa;++K)R=$(s,P),fr(s.f,R,1);break;case 7:oa=$(s,P);for(K=0;K<oa;++K)R=$(s,P),Qc=$(s,\n4)<<7,fr(s.f,R,Qc);break;case 8:oa=$(s,P);for(K=0;K<oa;++K){R=$(s,P);ob=$(s,4);Xc=C(B,v,-1,ob,1);for(Cc=0;Cc<ob;++Cc)ra=$(s,8),Xc[Cc]=ra;var Bd=s.f,Td=R,Rc=Xc;null==Bd.t&&(Bd.t=C(uo,an,93,Bd.G,0));null!=Rc&&cp(Rc);Bd.t[Td]=Rc;Bd.K=0;Bd.E=!0}break;case 9:oa=$(s,Ia);for(K=0;K<oa;++K)V=$(s,Ia),zc=$(s,2)<<4,lr(s.f,V,zc);break;case 10:oa=$(s,Ia);for(K=0;K<oa;++K)V=$(s,Ia),Nc=$(s,4),lr(s.f,V,Nc);break;case 11:oa=$(s,P);for(K=0;K<oa;++K)R=$(s,P),fr(s.f,R,8192);break;case 12:oa=$(s,Ia);for(K=0;K<oa;++K)V=\n$(s,Ia),G=$(s,8)<<6,lr(s.f,V,G);break;case 13:oa=$(s,P);for(K=0;K<oa;++K)R=$(s,P),Tb=$(s,3)<<14,fr(s.f,R,Tb);break;case 14:oa=$(s,P);for(K=0;K<oa;++K)R=$(s,P),lc=$(s,5)<<17,fr(s.f,R,lc);break;case 15:gc=16;break;case 16:oa=$(s,P);for(K=0;K<oa;++K)R=$(s,P),hc=$(s,3)<<22,fr(s.f,R,hc);break;case 17:oa=$(s,P);for(K=0;K<oa;++K)R=$(s,P),Wq(s.f,R,$(s,4));break;case 18:oa=$(s,P);qb=$(s,4);for(K=0;K<oa;++K){R=$(s,P);Hb=$(s,qb);Zb=C(tp,jn,-1,Hb,1);for(Cc=0;Cc<Hb;++Cc)Zb[Cc]=$(s,7)<<24>>24;var Ib=s.f,Jc=R,Qb=\nNq(Zb,0,Zb.length),od=void 0;if(null!=Qb)if(0==Qb.length)Qb=null;else if(od=or(Qb),0!=od&&O(Qb,Bq[od])||O(Qb,Qd))Kq(Ib,Jc,od),Qb=null;null==Qb?null!=Ib.r&&(Ib.r[Jc]=null):(null==Ib.r&&(Ib.r=C(Fq,o,3,Ib.G,0)),Ib.r[Jc]=dU(Qb))}break;case 19:oa=$(s,P);for(K=0;K<oa;++K)R=$(s,P),S=$(s,3)<<25,fr(s.f,R,S);break;case 20:oa=$(s,Ia);for(K=0;K<oa;++K)V=$(s,Ia),hc=$(s,3)<<14,lr(s.f,V,hc);break;case 21:oa=$(s,P);for(K=0;K<oa;++K)R=$(s,P),ar(s.f,R,$(s,2)<<4);break;case 22:oa=$(s,P);for(K=0;K<oa;++K)R=$(s,P),fr(s.f,\nR,268435456);break;case 23:oa=$(s,Ia);for(K=0;K<oa;++K)V=$(s,Ia),lr(s.f,V,131072);break;case 24:oa=$(s,Ia);for(K=0;K<oa;++K)V=$(s,Ia),va=$(s,2)<<18,lr(s.f,V,va);break;case 25:for(K=0;K<Ba;++K)if(1==$(s,1)){var yb=s.f;yb.s[K]|=512}break;case 26:oa=$(s,Ia);ib=C(B,v,-1,oa,1);for(K=0;K<oa;++K)ib[K]=$(s,Ia);break;case 27:oa=$(s,P);for(K=0;K<oa;++K)R=$(s,P),fr(s.f,R,536870912)}Pn(new bo(s.f),Ic);if(null!=ib)for(Fb=0,Xb=ib.length;Fb<Xb;++Fb)V=ib[Fb],Sn(s.f,V,2==s.f.B[V]?4:2);Oc=0;if(null==M&&Y.length>s.d+\n1&&(32==Y[s.d+1]||9==Y[s.d+1]))M=Y,Oc=s.d+2;if(null!=M)try{if(33==M[Oc]||35==M[Oc]){Y5(s,M,Oc+1);ja=1==$(s,1);mb=1==$(s,1);Pb=2*$(s,4);la=1<<Pb;V=0;for(R=1;R<Ba;++R)V<lb&&D(s.f,1,V)==R?(xb=D(s.f,0,V++),wb=1):(xb=0,wb=8),gr(s.f,R,no(s.f,xb)+wb*($(s,Pb)-~~(la/2))),hr(s.f,R,oo(s.f,xb)+wb*($(s,Pb)-~~(la/2))),ja&&ir(s.f,R,po(s.f,xb)+wb*($(s,Pb)-~~(la/2)));$a=ja?1.5:(Po(),24);jb=Oq(s.f,Ba,lb,$a);if(35==M[Oc]){Ja=0;pb=C(B,v,-1,Ba,1);for(R=0;R<Ba;++R)Ja+=pb[R]=bp(s.f,R);for(R=0;R<Ba;++R)for(K=0;K<pb[R];++K)Qc=\nHq(s.f,1),Lq(s.f,R,Qc,1),gr(s.f,Qc,no(s.f,R)+($(s,Pb)-~~(la/2))),hr(s.f,Qc,oo(s.f,R)+($(s,Pb)-~~(la/2))),ja&&ir(s.f,Qc,po(s.f,R)+($(s,Pb)-~~(la/2)));Ba+=Ja}if(mb){var Ud=$(s,Pb),Ub=Math.log(2E3)*Math.LOG10E*Ud/(la-1)-1;rb=Math.pow(10,Ub);Ad=rb*Z5($(s,Pb),la);eb=rb*Z5($(s,Pb),la);ja&&(ad=rb*Z5($(s,Pb),la));wb=rb/jb;for(R=0;R<Ba;++R)gr(s.f,R,Ad+wb*no(s.f,R)),hr(s.f,R,eb+wb*oo(s.f,R)),ja&&ir(s.f,R,ad+wb*po(s.f,R))}else{wb=1.5/jb;for(R=0;R<Ba;++R)gr(s.f,R,wb*no(s.f,R)),hr(s.f,R,wb*oo(s.f,R)),ja&&ir(s.f,\nR,wb*po(s.f,R))}}else if(ja&&!mb&&0==rb&&(rb=1.5),0!=rb&&0!=s.f.p){for(V=jb=0;V<s.f.p;++V)Ha=no(s.f,D(s.f,0,V))-no(s.f,D(s.f,1,V)),tc=oo(s.f,D(s.f,0,V))-oo(s.f,D(s.f,1,V)),yc=ja?po(s.f,D(s.f,0,V))-po(s.f,D(s.f,1,V)):0,jb+=Math.sqrt(Ha*Ha+tc*tc+yc*yc);jb/=s.f.p;fc=rb/jb;for(R=0;R<s.f.o;++R)gr(s.f,R,no(s.f,R)*fc+Ad),hr(s.f,R,oo(s.f,R)*fc+eb),ja&&ir(s.f,R,po(s.f,R)*fc+ad)}}catch(bc){if(bc=Go(bc),E(bc,103))ub=bc,ub.Yd(),M=null,ja=!1;else throw bc;}if((Yb=null!=M&&!ja)||s.b){Qn(s.f,3);for(V=0;V<s.f.d;++V)if(2==\nYn(s.f,V)&&!Eo(s.f,V)&&0==(s.f.z[V]&3)){var Ka=s.f;Ka.z[V]|=16777216}}!Yb&&s.b&&(s.f.K|=4,Yc=new h6,Yc.i=new n6,Fs(Yc,s.f),Yb=!0);Yb?(yr(s.f),g6(s.f)):ja||(s.f.K|=4)}da=cb}}b=(new Hr(da)).a.a.a;a="readOCLCode";d=null}catch(pd){if(pd=Go(pd),!E(pd,103))throw pd;}e=!1;if(null!=b&&null==d)try{if((e=MP(this.a,b,!1))&&this.c){var Ie=this.a;if(Ie.v){var Jb=Ie.v;Jb.a=a;XN(Jb,Ie.Tb,0,0,0)}Ie.Dc=!0}}catch(fe){if(fe=Go(fe),E(fe,103))d="Invalid converted molfile";else throw fe;}this.a.ac=e;this.e?e?UP(this.e):\nVP(this.e,new To(d)):null!=d&&s2(this.a,d);this.d&&TI(this.a)};Z(662);Z(663);Z(24);Z(29);Z(30);T(RZ)(1);\n//@ sourceURL=1.js\n')