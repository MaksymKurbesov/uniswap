"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[5541],{25541:(e,n,i)=>{i.r(n),i.d(n,{LegacyPoolRedirects:()=>mn,LegacyPoolV2Redirects:()=>gn,LegacyPositionPageRedirects:()=>vn,PoolFinderRedirects:()=>jn});var t=i(92936),o=i(5985),r=i(66142),s=i(3115),d=i(99454),l=i(24644),a=i(36664),c=i(43969),p=i(97994);const x=a.ZP.div`
  display: none;
  font-size: 14px;
  padding: 16px;
  border-bottom: 1px solid ${({theme:e})=>e.surface3};

  @media screen and (min-width: ${c.e.deprecated_upToSmall}px) {
    align-items: center;
    display: flex;
    justify-content: space-between;
    & > div:last-child {
      text-align: right;
      margin-right: 12px;
    }
  }
`,u=a.ZP.div`
  font-weight: medium;
  padding: 8px;
  font-weight: 535;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid ${({theme:e})=>e.surface3};

  @media screen and (min-width: ${c.e.deprecated_upToSmall}px) {
    display: none;
  }

  @media screen and (max-width: ${c.e.deprecated_upToExtraSmall}px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`,h=a.ZP.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`,m=a.ZP.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
  color: ${({theme:e})=>e.accent1};
  font-size: 14px;
  font-weight: 485;
`;function g({positions:e,setUserHideClosedPositions:n,userHideClosedPositions:i}){const{t:o}=(0,p.useTranslation)();return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(x,{children:[(0,t.jsxs)("div",{children:[o("pool.positions.title"),e&&" ("+e.length+")"]}),(0,t.jsx)(m,{id:"desktop-hide-closed-positions",onClick:()=>{n(!i)},children:o(i?"pool.showClosed":"pool.hideClosed")})]}),(0,t.jsxs)(u,{children:[o("pool.positions.title"),(0,t.jsx)(h,{children:(0,t.jsx)(m,{onClick:()=>{n(!i)},children:o(i?"pool.showClosed":"pool.hideClosed")})})]}),e.map((e=>(0,t.jsx)(l.Z,{...e},e.tokenId.toString())))]})}var j=i(92241),v=i(55478),f=i(22722),y=i(58534),T=i(15149),w=i(42659),k=i(61190),P=i(51371),b=i(24055),A=i(70359),C=i(22286);const I=new P.vU(C);var _=i(45779),F=i(70854),L=i(74231),S=i(9450);function $(e){if(!e)return!1;return new RegExp("([a-zA-Z0-9]+://)?([a-zA-Z0-9_]+:[a-zA-Z0-9_]+@)?([a-zA-Z0-9.-]+\\.[A-Za-z]{2,4})(:[0-9]+)?(/.*)?").test(e)}function Z(e,n,i,t,o,r,s){try{var d=e[r](s),l=d.value}catch(a){return void i(a)}d.done?n(l):Promise.resolve(l).then(t,o)}function R(e){return function(){var n=this,i=arguments;return new Promise((function(t,o){var r=e.apply(n,i);function s(e){Z(r,t,o,s,d,"next",e)}function d(e){Z(r,t,o,s,d,"throw",e)}s(void 0)}))}}function D(e){const{chainId:n}=(0,f.m)(),{defaultChainId:i}=(0,L.useEnabledChains)(),t=(0,_.useMemo)((()=>function(e){return Array.from(new Set(e.reduce(((e,n)=>e.concat(n.token0,n.token1)),[])))}(e)),[e]),o=(0,y.h)({queries:e.map((e=>function(e,n){return(0,k.TJ)({queryKey:["positionCurrencyInfo",e],queryFn:R((function*(){const i=[T.l.query({query:F.TokenDocument,variables:{address:e.token0,chain:(0,S.toGraphQLChain)(n)},fetchPolicy:"cache-first"}),T.l.query({query:F.TokenDocument,variables:{address:e.token1,chain:(0,S.toGraphQLChain)(n)},fetchPolicy:"cache-first"})],[t,o]=yield Promise.all(i);return{position:e,currency0Info:(0,w.l)(t.data.token),currency1Info:(0,w.l)(o.data.token)}}))})}(e,n??i)))}),r=function(e,n){return(0,b._Y)(e,I,n,void 0,A.DB)}(t,"symbol"),s=(0,_.useMemo)((()=>{const e={};for(let i=0;i<t.length;i++){var n;const o=null===(n=r[i])||void 0===n?void 0:n.result;if(!o)continue;e[t[i]]=o}return e}),[t,r]);return(0,_.useMemo)((()=>o.map((e=>{var n,i,t,o,r,d,l,a;if(!e.data)return;const{currency0Info:c,currency1Info:p,position:x}=e.data;let u=0;if((null===(n=c)||void 0===n?void 0:n.isSpam)||(null===(i=c)||void 0===i?void 0:i.safetyLevel)!==F.SafetyLevel.Verified||u++,(null===(t=p)||void 0===t?void 0:t.isSpam)||(null===(o=p)||void 0===o?void 0:o.safetyLevel)!==F.SafetyLevel.Verified||u++,2===u)return x;let h=0;return $((null===(d=c)||void 0===d||null===(r=d.currency)||void 0===r?void 0:r.symbol)??s[x.token0])&&h++,$((null===(a=p)||void 0===a||null===(l=a.currency)||void 0===l?void 0:l.symbol)??s[x.token1])&&h++,1===u&&h<2||0===h?x:void 0})).filter((e=>!!e))),[s,o])}var q=i(42183),z=i(17125),E=i(61152),B=i(77134),W=i(56363),K=i(33127),V=i(3684),O=i(92139);const N=a.ZP.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  opacity: 0.8;

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    grid-template-columns: auto;
    grid-template-rows: auto;
  `};
`,M=E.css`
  padding: 16px;
  border-radius: 20px;
  position: relative;
  overflow: hidden;
  border: 1px solid ${({theme:e})=>e.surface3};
  text-decoration: none;

  * {
    color: ${({theme:e})=>e.neutral1};
    text-decoration: none !important;
  }

  :hover {
    border: 1px solid ${({theme:e})=>e.surface3};

    * {
      text-decoration: none !important;
    }
  }
`,U=(0,a.ZP)(B.dL)`
  ${M}
`,G=(0,a.ZP)(B.m_)`
  ${M}
`,H=(0,a.ZP)(W.T.DeprecatedLabel)`
  align-items: center;
  display: flex;
  font-size: 16px;
  font-weight: 535 !important;
  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToMedium`
    font-size: 16px;
  `};
`,Y=(0,a.ZP)(v.Tz)`
  grid-template-columns: 1fr;
  width: 100%;
  gap: 8px;

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToMedium`
    gap: 8px;
  `};
  justify-content: space-between;
`;function J(){const{chainId:e}=(0,f.m)(),n=(0,K.getChainInfo)((0,V.Jw)(e)??O.UniverseChainId.Mainnet);return(0,t.jsxs)(N,{children:[(0,t.jsx)(U,{href:"https://support.uniswap.org/hc/en-us/categories/8122334631437-Providing-Liquidity-",children:(0,t.jsxs)(Y,{children:[(0,t.jsxs)(H,{children:[(0,t.jsx)(p.Trans,{i18nKey:"pool.learnLiquidity"})," \u2197"]}),(0,t.jsx)(W.T.DeprecatedBody,{style:{alignItems:"center",display:"flex",fontWeight:485},children:(0,t.jsx)(p.Trans,{i18nKey:"pool.learnv3LP"})})]})}),(0,t.jsx)(G,{"data-testid":"cta-poolslink",to:`/explore/pools/${n.urlParam}`,children:(0,t.jsxs)(Y,{children:[(0,t.jsxs)(H,{style:{alignSelf:"flex-start"},children:[(0,t.jsx)(p.Trans,{i18nKey:"pool.top"})," \u2197"]}),(0,t.jsx)(W.T.DeprecatedBody,{style:{alignSelf:"flex-start",fontWeight:485},children:(0,t.jsx)(p.Trans,{i18nKey:"pool.exporeAnalytics"})})]})})]})}var Q=i(57367),X=i(56250),ee=i(20449),ne=i(8806),ie=i(95625),te=i(39063);const oe=(0,X.z)(ee.e,{display:"flex",flexDirection:"row",alignItems:"center",width:"100%",gap:"$gap12",textDecorationLine:"none",color:"$neutral2",hoverStyle:{color:"$neutral1"}}),re={[F.ProtocolVersion.V4]:{title:(0,p.t)("pool.v4"),link:"/pool"},[F.ProtocolVersion.V3]:{title:(0,p.t)("pool.v3"),link:"/pool"},[F.ProtocolVersion.V2]:{title:(0,p.t)("pool.v2"),link:"/pools/v2"}},se={[F.ProtocolVersion.V4]:"v4",[F.ProtocolVersion.V3]:"v3",[F.ProtocolVersion.V2]:"v2"};function de({protocolVersion:e}){const[n,i]=(0,_.useState)(!1),o=(0,te.useFeatureFlag)(ie.FeatureFlags.LPRedesign);return(0,t.jsx)(d.u,{isOpen:n,menuLabel:(0,t.jsx)(ne.xv,{variant:"body1",children:se[e]}),internalMenuItems:(0,t.jsx)(t.Fragment,{children:Object.entries(re).filter((([n,i])=>!(!o&&n===F.ProtocolVersion.V4)&&i.title!==re[e].title)).map((([,e])=>(0,t.jsxs)(oe,{href:e.link,children:[(0,t.jsx)(Q.K,{width:"20px",height:"20px"}),(0,t.jsx)(ne.xv,{variant:"body1",style:{color:"inherit"},children:e.title})]},e.title)))}),toggleOpen:i,buttonStyle:{height:36},adaptToSheet:!1})}var le=i(83639),ae=i(57221),ce=i(13310),pe=i(74928),xe=i(48274),ue=i(97142),he=i(43454),me=i(16138),ge=i(11947),je=i(48313);const ve=(0,a.ZP)(v.Tz)`
  padding: 68px 8px 0px;
  max-width: 870px;
  width: 100%;

  @media (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    max-width: 800px;
    padding-top: 48px;
  }

  @media (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    max-width: 500px;
    padding-top: 20px;
  }
`,fe=(0,X.z)(ee.e,{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",width:"100%",fontWeight:"$book",p:"$spacing8",textDecorationLine:"none",color:"$neutral2",hoverStyle:{color:"$neutral1"}}),ye=a.ZP.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  max-width: 300px;
  min-height: 25vh;
`,Te=E.css`
  width: 48px;
  height: 48px;
  margin-bottom: 0.5rem;
`,we=(0,a.ZP)(ae.Z)`
  ${Te}
`,ke=(0,a.ZP)(ce.Z)`
  ${Te}
`,Pe=(0,a.ZP)(s.DF)`
  border-radius: 12px;
  font-size: 16px;
  padding: 6px 8px;
  white-space: nowrap;
  @media (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    flex: 1 1 auto;
    width: 50%;
  }
`,be=a.ZP.main`
  background-color: ${({theme:e})=>e.surface1};
  border: 1px solid ${({theme:e})=>e.surface3};
  padding: 0;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;function Ae(){return(0,t.jsxs)(le.pr,{children:[(0,t.jsx)("div",{}),(0,t.jsx)("div",{}),(0,t.jsx)("div",{}),(0,t.jsx)("div",{}),(0,t.jsx)("div",{}),(0,t.jsx)("div",{}),(0,t.jsx)("div",{}),(0,t.jsx)("div",{}),(0,t.jsx)("div",{}),(0,t.jsx)("div",{}),(0,t.jsx)("div",{}),(0,t.jsx)("div",{})]})}function Ce(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(ve,{children:(0,t.jsx)(v.Tz,{gap:"lg",justify:"center",children:(0,t.jsxs)(v.Tz,{gap:"lg",style:{width:"100%"},children:[(0,t.jsx)(ge.k,{row:!0,p:"$none",gap:"$gap12",children:(0,t.jsx)(ne.xv,{variant:"heading2",children:(0,p.t)("pool.positions")})}),(0,t.jsx)(be,{children:(0,t.jsx)(ye,{children:(0,t.jsxs)(ne.xv,{variant:"body1",color:"$neutral3",textAlign:"center",children:[(0,t.jsx)(we,{strokeWidth:1.2}),(0,t.jsx)("div",{"data-testid":"pools-unsupported-err",children:(0,p.t)("pool.connection.networkUnsupported")})]})})})]})})}),(0,t.jsx)(j.c,{})]})}function Ie(){var e;const{t:n}=(0,p.useTranslation)(),i=(0,f.m)(),l=(0,V.Nb)(i.chainId),a=(0,q.G)(),c=(0,r.Q)(),[x,u]=(0,_.useState)(!1),h=(0,E.useTheme)(),[m,y]=(0,me.QP)(),{positions:T,loading:w}=(0,z.W)(i.address),[k,P]=(null===(e=T)||void 0===e?void 0:e.reduce(((e,n)=>{var i;return e[(null===(i=n.liquidity)||void 0===i?void 0:i.isZero())?1:0].push(n),e}),[[],[]]))??[[],[]],b=D((0,_.useMemo)((()=>[...k,...m?[]:P]),[P,k,m]));if(!l)return(0,t.jsx)(Ce,{});const A=Boolean(!i),C=[(0,t.jsxs)(fe,{href:"/migrate/v2",children:[n("common.migrate"),(0,t.jsx)(pe.Z,{size:16})]},"migrate"),(0,t.jsxs)(fe,{href:"/pools/v2",children:[n("pool.v2liquidity"),(0,t.jsx)(xe.Z,{size:16})]},"v2-liquidity"),(0,t.jsxs)(fe,{href:"https://support.uniswap.org/hc/en-us/categories/8122334631437-Providing-Liquidity-",children:[n("pool.learn"),(0,t.jsx)(ue.Z,{size:16})]},"learn")];return(0,t.jsxs)(je.default,{logImpression:!0,page:o.yJ.POOL_PAGE,children:[(0,t.jsx)(ve,{children:(0,t.jsx)(v.Tz,{gap:"lg",justify:"center",children:(0,t.jsxs)(v.Tz,{gap:"lg",style:{width:"100%"},children:[(0,t.jsxs)(ge.k,{row:!0,alignItems:"center",justifyContent:"space-between",p:"$none",gap:"$gap12",$md:{flexWrap:"wrap",width:"100%"},children:[(0,t.jsxs)(ge.k,{row:!0,alignItems:"center",gap:"$spacing8",width:"min-content",children:[(0,t.jsx)(ne.xv,{variant:"heading2",children:n("pool.positions")}),(0,t.jsx)("div",{children:(0,t.jsx)(de,{protocolVersion:F.ProtocolVersion.V3})})]}),(0,t.jsxs)(ge.k,{row:!0,gap:"8px",$md:{width:"100%"},children:[a&&(0,t.jsx)(ge.k,{grow:!0,$md:{width:"calc(50% - 4px)"},children:(0,t.jsx)(d.u,{isOpen:x,toggleOpen:u,menuLabel:(0,t.jsx)(t.Fragment,{children:n("common.more")}),internalMenuItems:(0,t.jsx)(t.Fragment,{children:[...C]}),buttonStyle:{height:40,justifyContent:"center"},dropdownStyle:{width:200,top:"calc(100% + 20px)"},adaptToSheet:!1})}),(0,t.jsx)(Pe,{"data-cy":"join-pool-button",id:"join-pool-button",as:he.Link,to:"/add/ETH",children:n("pool.newPosition.plus")})]})]}),(0,t.jsx)(be,{children:w?(0,t.jsx)(Ae,{}):b&&P&&b.length>0?(0,t.jsx)(g,{positions:b,setUserHideClosedPositions:y,userHideClosedPositions:m}):(0,t.jsxs)(ye,{children:[(0,t.jsxs)(W.T.BodyPrimary,{color:h.neutral3,textAlign:"center",children:[(0,t.jsx)(ke,{strokeWidth:1,style:{marginTop:"2em"}}),(0,t.jsx)("div",{children:n("pool.activePositions.appear")})]}),!A&&P.length>0&&(0,t.jsx)(s.oD,{style:{marginTop:".5rem"},onClick:()=>y(!m),children:n("pool.showClosed")}),A&&(0,t.jsx)(je.default,{logPress:!0,eventOnTrigger:o.Je.CONNECT_WALLET_BUTTON_CLICKED,properties:{received_swap_quote:!1},element:o.xo.CONNECT_WALLET_BUTTON,children:(0,t.jsx)(s.DF,{style:{marginTop:"2em",marginBottom:"2em",padding:"8px 16px"},onClick:c.open,children:n("common.connectAWallet.button")})})]})}),(0,t.jsx)(B.Pw,{children:(0,t.jsx)(J,{})})]})})}),(0,t.jsx)(j.c,{})]})}var _e=i(32507),Fe=i(32409),Le=i(89045),Se=i(17256),$e=i(83792),Ze=i(44609),Re=i(61808),De=i(22407),qe=i(99300),ze=i(61592),Ee=i.n(ze),Be=i(97047),We=i(22953),Ke=i(4570),Ve=i(76078),Oe=i(12972),Ne=i(6409),Me=i(40834),Ue=i(25105);const Ge=new P.vU(Ke.Mt),He={1:[{tokens:[Me.WRAPPED_NATIVE_CURRENCY[O.UniverseChainId.Mainnet],Me.DAI],stakingRewardAddress:"0xa1484C3aa22a66C62b77E0AE78E15258bd0cB711"},{tokens:[Me.WRAPPED_NATIVE_CURRENCY[O.UniverseChainId.Mainnet],Me.USDC_MAINNET],stakingRewardAddress:"0x7FBa4B8Dc5E7616e59622806932DBea72537A56b"},{tokens:[Me.WRAPPED_NATIVE_CURRENCY[O.UniverseChainId.Mainnet],Me.USDT],stakingRewardAddress:"0x6C3e4cb2E96B01F4b866965A91ed4437839A121a"},{tokens:[Me.WRAPPED_NATIVE_CURRENCY[O.UniverseChainId.Mainnet],Me.WBTC],stakingRewardAddress:"0xCA35e32e7926b96A9988f61d510E038108d8068e"}]};const Ye=(0,a.ZP)(v.Tz)`
  max-width: 640px;
  width: 100%;

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    padding: 0px 8px;
  `};
`,Je=(0,a.ZP)(Ze.I8)`
  background: radial-gradient(76.02% 75.41% at 1.84% 0%, #27ae60 0%, #000000 100%);
  margin: 0 0 16px 0;
  overflow: hidden;
`,Qe=(0,a.ZP)($e.DA)`
  gap: 8px;
  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    width: 100%;
    flex-direction: row-reverse;
    justify-content: space-between;
  `};
`,Xe=(0,a.ZP)(s.DF)`
  height: 40px;
  width: fit-content;
  border-radius: 12px;
  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    width: 48%;
  `};
`,en=(0,a.ZP)(s.PL)`
  height: 40px;
  width: fit-content;
  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    width: 48%;
  `};
`,nn=a.ZP.div`
  border: 1px solid ${({theme:e})=>e.neutral2};
  padding: 16px 12px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,tn=(0,a.ZP)(W.T.H1Small)`
  margin-top: 8px;
  justify-self: flex-start;
  font-weight: 535;
  text-wrap: nowrap;
`;function on(){var e,n,i,r,d,l,a;const c=(0,E.useTheme)(),x=(0,f.m)(),u=(0,q.G)();let h=(0,me.B3)();u||(h=[]);const m=(0,_.useMemo)((()=>h.map((e=>({liquidityToken:(0,me.Ce)(e),tokens:e})))),[h]),[g,y]=(0,Be.bv)(x.address,m.map((({liquidityToken:e})=>e)),!(null===(e=x)||void 0===e?void 0:e.address)),T=(0,_.useMemo)((()=>m.filter((({liquidityToken:e})=>{var n;return null===(n=g[e.address])||void 0===n?void 0:n.greaterThan(0)}))),[m,g]),w=(0,qe.OY)(T.map((({tokens:e})=>e))),k=y||(null===(n=w)||void 0===n?void 0:n.length)<T.length||(null===(i=w)||void 0===i?void 0:i.some((e=>!e))),P=w.map((([,e])=>e)).filter((e=>Boolean(e))),C=function(e){const n=(0,f.m)(),i=(0,Ne.Z)(A.DB),t=(0,_.useMemo)((()=>{var i;return n.chainId?(null===(i=He[n.chainId])||void 0===i?void 0:i.filter((n=>void 0===e||null!==e&&e.involvesToken(n.tokens[0])&&e.involvesToken(n.tokens[1]))))??[]:[]}),[n.chainId,e]),o=n.chainId?Me.UNI[n.chainId]:void 0,r=(0,_.useMemo)((()=>t.map((({stakingRewardAddress:e})=>e))),[t]),s=(0,_.useMemo)((()=>[n.address]),[n.address]),d=(0,b._Y)(r,Ge,"balanceOf",s),l=(0,b._Y)(r,Ge,"earned",s),a=(0,b._Y)(r,Ge,"totalSupply"),c=(0,b._Y)(r,Ge,"rewardRate",void 0,A.DB),p=(0,b._Y)(r,Ge,"periodFinish",void 0,A.DB);return(0,_.useMemo)((()=>n.chainId&&o?r.reduce(((e,n,r)=>{var s,x;const u=d[r],h=l[r],m=a[r],g=c[r],j=p[r];if(!(null===(s=u)||void 0===s?void 0:s.loading)&&!(null===(x=h)||void 0===x?void 0:x.loading)&&m&&!m.loading&&g&&!g.loading&&j&&!j.loading){var v,f,y,T,w,k,P,b,A,C;if((null===(v=u)||void 0===v?void 0:v.error)||(null===(f=h)||void 0===f?void 0:f.error)||m.error||g.error||j.error)return Ue.logger.warn("stake/hooks","useStakingInfo","Failed to load staking rewards info"),e;const s=t[r].tokens,d=new Oe.Pair(Ve.CurrencyAmount.fromRawAmount(s[0],"0"),Ve.CurrencyAmount.fromRawAmount(s[1],"0")),l=Ve.CurrencyAmount.fromRawAmount(d.liquidityToken,Ee().BigInt((null===(T=u)||void 0===T||null===(y=T.result)||void 0===y?void 0:y[0])??0)),a=Ve.CurrencyAmount.fromRawAmount(d.liquidityToken,Ee().BigInt(null===(w=m.result)||void 0===w?void 0:w[0])),c=Ve.CurrencyAmount.fromRawAmount(o,Ee().BigInt(null===(k=g.result)||void 0===k?void 0:k[0])),p=(e,n,i)=>Ve.CurrencyAmount.fromRawAmount(o,Ee().greaterThan(n.quotient,Ee().BigInt(0))?Ee().divide(Ee().multiply(i.quotient,e.quotient),n.quotient):Ee().BigInt(0)),x=p(l,a,c),I=null===(b=j.result)||void 0===b||null===(P=b[0])||void 0===P?void 0:P.toNumber(),_=1e3*I,F=!I||!i||I>i.toNumber();e.push({stakingRewardAddress:n,tokens:t[r].tokens,periodFinish:_>0?new Date(_):void 0,earnedAmount:Ve.CurrencyAmount.fromRawAmount(o,Ee().BigInt((null===(C=h)||void 0===C||null===(A=C.result)||void 0===A?void 0:A[0])??0)),rewardRate:x,totalRewardRate:c,stakedAmount:l,totalStakedAmount:a,getHypotheticalRewardRate:p,active:F})}return e}),[]):[]),[d,n.chainId,i,l,t,p,c,r,a,o])}(),I=null===(r=C)||void 0===r?void 0:r.filter((e=>Ee().greaterThan(e.stakedAmount.quotient,De.iV))),L=(0,qe.OY)(null===(d=I)||void 0===d?void 0:d.map((e=>e.tokens))),S=P.filter((e=>{var n;return 0===(null===(n=L)||void 0===n?void 0:n.map((e=>e[1])).filter((n=>{var i;return(null===(i=n)||void 0===i?void 0:i.liquidityToken.address)===e.liquidityToken.address})).length)}));return(0,t.jsx)(je.default,{logImpression:!0,page:o.yJ.POOL_PAGE,children:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(Ye,{children:[(0,t.jsxs)(Je,{children:[(0,t.jsx)(Ze.sq,{}),(0,t.jsx)(Ze.RF,{}),(0,t.jsx)(Ze.uO,{children:(0,t.jsxs)(v.Tz,{gap:"md",children:[(0,t.jsx)($e.m0,{children:(0,t.jsx)(W.T.DeprecatedWhite,{fontWeight:535,children:(0,t.jsx)(p.Trans,{i18nKey:"pool.liquidity.rewards"})})}),(0,t.jsx)($e.m0,{children:(0,t.jsx)(W.T.DeprecatedWhite,{fontSize:14,children:(0,t.jsx)(p.Trans,{i18nKey:"pool.liquidity.earn.fee"})})}),(0,t.jsx)(B.dL,{style:{color:c.white,textDecoration:"underline"},target:"_blank",href:"https://docs.uniswap.org/contracts/v2/concepts/core-concepts/pools",children:(0,t.jsx)(W.T.DeprecatedWhite,{fontSize:14,children:(0,t.jsx)(p.Trans,{i18nKey:"pool.learnAbout"})})})]})}),(0,t.jsx)(Ze.sq,{}),(0,t.jsx)(Ze.RF,{})]}),u?(0,t.jsx)(v.Tz,{gap:"lg",justify:"center",children:(0,t.jsxs)(v.Tz,{gap:"md",style:{width:"100%"},children:[(0,t.jsxs)($e.ZP,{gap:"md",justify:"space-between",style:{marginTop:"1rem"},padding:"0",children:[(0,t.jsxs)($e.ZP,{gap:"md",width:"content",children:[(0,t.jsx)(B.Pw,{children:(0,t.jsx)(tn,{children:(0,t.jsx)(p.Trans,{i18nKey:"pool.yourv2"})})}),(0,t.jsx)(de,{protocolVersion:F.ProtocolVersion.V2})]}),(0,t.jsxs)(Qe,{children:[(0,t.jsx)(en,{as:he.Link,padding:"6px 8px",to:"/add/v2/ETH",children:(0,t.jsx)(p.Trans,{i18nKey:"pool.create.pair"})}),(0,t.jsx)(Xe,{id:"find-pool-button",as:he.Link,to:"/pools/v2/find",padding:"6px 8px",children:(0,t.jsx)(We.xv,{fontWeight:535,fontSize:16,children:(0,t.jsx)(p.Trans,{i18nKey:"pool.import"})})}),(0,t.jsx)(Xe,{id:"join-pool-button",as:he.Link,to:"/add/v2/ETH",padding:"6px 8px",children:(0,t.jsx)(We.xv,{fontWeight:535,fontSize:16,children:(0,t.jsx)(p.Trans,{i18nKey:"pool.v2.add"})})})]})]}),x?k?(0,t.jsx)(nn,{children:(0,t.jsx)(W.T.DeprecatedBody,{color:c.neutral3,textAlign:"center",children:(0,t.jsx)(Re.bb,{children:(0,t.jsx)(p.Trans,{i18nKey:"common.loading"})})})}):(null===(l=P)||void 0===l?void 0:l.length)>0||(null===(a=L)||void 0===a?void 0:a.length)>0?(0,t.jsxs)(t.Fragment,{children:[S.map((e=>(0,t.jsx)(Le.ZP,{pair:e},e.liquidityToken.address))),L.map(((e,n)=>e[1]&&(0,t.jsx)(Le.ZP,{pair:e[1],stakedBalance:I[n].stakedAmount},I[n].stakingRewardAddress))),(0,t.jsx)($e.DA,{justify:"center",style:{width:"100%"},children:(0,t.jsxs)(s.JU,{as:he.Link,to:"/migrate/v2",id:"import-pool-link",style:{padding:"8px 16px",margin:"0 4px",borderRadius:"12px",width:"fit-content",fontSize:"14px"},children:[(0,t.jsx)(pe.Z,{size:16,style:{marginRight:"8px"}}),(0,t.jsx)(p.Trans,{i18nKey:"pool.v2.migratev3"})]})})]}):(0,t.jsx)(nn,{children:(0,t.jsx)(W.T.DeprecatedBody,{color:c.neutral3,textAlign:"center",children:(0,t.jsx)(p.Trans,{i18nKey:"pool.noLiquidity"})})}):(0,t.jsx)(Fe.ZP,{padding:"40px",children:(0,t.jsx)(W.T.DeprecatedBody,{color:c.neutral3,textAlign:"center",children:(0,t.jsx)(p.Trans,{i18nKey:"pool.liquidity.connectToAdd"})})})]})}):(0,t.jsx)(Se.A,{})]}),(0,t.jsx)(j.c,{})]})})}var rn=i(58543),sn=i(76394),dn=i(26410),ln=i(11712),an=i(57809),cn=i(6282),pn=i(85209);function xn(){var e;const n=new URLSearchParams((0,cn.TH)().search),i=(0,f.m)(),[r,d]=(0,_.useState)(!1),[l,a]=(0,_.useState)(1),[c,x]=(0,_.useState)((()=>i.chainId?(0,Me.nativeOnChain)(i.chainId):null)),[u,h]=(0,_.useState)(null),[m,g]=(0,qe.Oo)(c??void 0,u??void 0),y=(0,me.uB)();(0,_.useEffect)((()=>{g&&y(g)}),[g,y]);const T=m===qe._G.NOT_EXISTS||Boolean(m===qe._G.EXISTS&&g&&Ee().equal(g.reserve0.quotient,Ee().BigInt(0))&&Ee().equal(g.reserve1.quotient,Ee().BigInt(0))),w=(0,Be.mM)(i.address,null===(e=g)||void 0===e?void 0:e.liquidityToken),k=Boolean(w&&Ee().greaterThan(w.quotient,Ee().BigInt(0))),P=(0,_.useCallback)((e=>{0===l?x(e):h(e)}),[l]),b=(0,_.useCallback)((()=>{d(!1)}),[d]),A=(0,t.jsx)(Fe.hl,{padding:"45px 10px",children:(0,t.jsx)(We.xv,{textAlign:"center",children:i.isConnected?(0,t.jsx)(p.Trans,{i18nKey:"poolFinder.selectToken"}):(0,t.jsx)(p.Trans,{i18nKey:"poolFinder.connect"})})});return(0,q.G)()?(0,t.jsx)(je.default,{logImpression:!0,page:o.yJ.POOL_PAGE,children:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(ln.Z,{children:[(0,t.jsx)(sn.q,{origin:n.get("origin")??"/pools/v2"}),(0,t.jsxs)(v.Tz,{style:{padding:"1rem"},gap:"md",children:[(0,t.jsx)(Fe.Pj,{children:(0,t.jsx)(v.Tz,{gap:"10px",children:(0,t.jsx)(W.T.DeprecatedLink,{fontWeight:485,color:"accent1",children:(0,t.jsx)(p.Trans,{i18nKey:"poolFinder.tip"})})})}),(0,t.jsx)(s.KA,{onClick:()=>{d(!0),a(0)},children:c?(0,t.jsxs)($e.ZP,{children:[(0,t.jsx)(rn.Z,{currency:c}),(0,t.jsx)(We.xv,{fontWeight:535,fontSize:20,marginLeft:"12px",children:c.symbol})]}):(0,t.jsx)(We.xv,{fontWeight:535,fontSize:20,marginLeft:"12px",children:(0,t.jsx)(p.Trans,{i18nKey:"common.selectToken.label"})})}),(0,t.jsx)(v.lg,{children:(0,t.jsx)(an.Z,{size:"16",color:"#888D9B"})}),(0,t.jsx)(s.KA,{onClick:()=>{d(!0),a(1)},children:u?(0,t.jsxs)($e.ZP,{children:[(0,t.jsx)(rn.Z,{currency:u}),(0,t.jsx)(We.xv,{fontWeight:535,fontSize:20,marginLeft:"12px",children:u.symbol})]}):(0,t.jsx)(We.xv,{fontWeight:535,fontSize:20,marginLeft:"12px",children:(0,t.jsx)(p.Trans,{i18nKey:"common.selectToken.label"})})}),k&&(0,t.jsxs)(v.lg,{style:{justifyItems:"center",backgroundColor:"",padding:"12px 0px",borderRadius:"12px"},children:[(0,t.jsx)(We.xv,{textAlign:"center",fontWeight:535,children:(0,t.jsx)(p.Trans,{i18nKey:"poolFinder.found"})}),(0,t.jsx)(B.m_,{to:"/pools/v2",children:(0,t.jsx)(We.xv,{textAlign:"center",children:(0,t.jsx)(p.Trans,{i18nKey:"poolFinder.managePool"})})})]}),c&&u?m===qe._G.EXISTS?k&&g?(0,t.jsx)(Le.WP,{pair:g,border:"1px solid #CED0D9"}):(0,t.jsx)(Fe.hl,{padding:"45px 10px",children:(0,t.jsxs)(v.Tz,{gap:"sm",justify:"center",children:[(0,t.jsx)(We.xv,{textAlign:"center",children:(0,t.jsx)(p.Trans,{i18nKey:"poolFinder.noLiquidity"})}),(0,t.jsx)(B.m_,{to:`/add/v2/${(0,pn.H)(c)}/${(0,pn.H)(u)}`,children:(0,t.jsx)(We.xv,{textAlign:"center",children:(0,t.jsx)(p.Trans,{i18nKey:"common.addLiquidity"})})})]})}):T?(0,t.jsx)(Fe.hl,{padding:"45px 10px",children:(0,t.jsxs)(v.Tz,{gap:"sm",justify:"center",children:[(0,t.jsx)(We.xv,{textAlign:"center",children:(0,t.jsx)(p.Trans,{i18nKey:"poolFinder.noPoolFound"})}),(0,t.jsx)(B.m_,{to:`/add/${(0,pn.H)(c)}/${(0,pn.H)(u)}`,children:(0,t.jsx)(p.Trans,{i18nKey:"poolFinder.create"})})]})}):m===qe._G.INVALID?(0,t.jsx)(Fe.hl,{padding:"45px 10px",children:(0,t.jsx)(v.Tz,{gap:"sm",justify:"center",children:(0,t.jsx)(We.xv,{textAlign:"center",fontWeight:535,children:(0,t.jsx)(p.Trans,{i18nKey:"common.invalidPair"})})})}):m===qe._G.LOADING?(0,t.jsx)(Fe.hl,{padding:"45px 10px",children:(0,t.jsx)(v.Tz,{gap:"sm",justify:"center",children:(0,t.jsxs)(We.xv,{textAlign:"center",children:[(0,t.jsx)(p.Trans,{i18nKey:"common.loading"}),(0,t.jsx)(le.bb,{})]})})}):null:A]}),(0,t.jsx)(dn.Z,{isOpen:r,onCurrencySelect:P,onDismiss:b,selectedCurrency:(0===l?u:c)??void 0})]}),(0,t.jsx)(j.c,{})]})}):(0,t.jsx)(Se.A,{})}var un=i(29936),hn=i(590);function mn(){return(0,te.useFeatureFlag)(ie.FeatureFlags.LPRedesign)?(0,t.jsx)(cn.Fg,{to:"/positions",replace:!0}):(0,t.jsx)(Ie,{})}function gn(){return(0,te.useFeatureFlag)(ie.FeatureFlags.LPRedesign)?(0,t.jsx)(cn.Fg,{to:"/positions",replace:!0}):(0,t.jsx)(on,{})}function jn(){return(0,te.useFeatureFlag)(ie.FeatureFlags.LPRedesign)?(0,t.jsx)(cn.Fg,{to:"/positions",replace:!0}):(0,t.jsx)(xn,{})}function vn(){const e=(0,te.useFeatureFlag)(ie.FeatureFlags.LPRedesign),{tokenId:n}=(0,cn.UO)(),[i]=(0,he.useSearchParams)(),{chainId:o}=(0,hn.m)(),{defaultChainId:r}=(0,L.useEnabledChains)();if(e){var s;const e=(null===(s=(0,un.oC)(i.get("chain")))||void 0===s?void 0:s.toLowerCase())??(0,S.toGraphQLChain)(o??r).toLowerCase();return(0,t.jsx)(cn.Fg,{to:`/positions/v3/${e}/${n}`,replace:!0})}return(0,t.jsx)(_e.Z,{})}}}]);
//# sourceMappingURL=5541.a3a1fff0.chunk.js.map