window.googletag = window.googletag || {};
window.googletag.cmd = window.googletag.cmd || [];
(function (W, D, N) {
W[N]=W[N]||{};W[N].cmd=W[N].cmd||[];W[N].cmd2=W[N].cmd2||[];
function getDbg(){var dbg=0,m;try{m = W.location.href.match(/pbjs_debug=(\S*)/) || (D.cookie+';').match(/pbjs_debug=(\S*)\;/);dbg=m && m[1] && 'true'===(m[1].split('&')[0]||'')}catch(e){}D.cookie='pbjs_debug='+dbg+'; path=/; secure';return dbg}
W.G_options=W.G_options||{};
W.G_options.debug=getDbg();
var G_debug=G_options.debug;
function loadScript(url){var o='script',s=document,a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=url;m.parentNode.insertBefore(a,m);};



if(W[N]['affmp2_cardekho.com']){return}W[N]['affmp2_cardekho.com']=1;
loadScript('https://cdn4-hbs.affinitymatrix.com/hvrlib/cardekho.com/1628606704/v2.js');
W[N].cmd.push(function(){
if(!W[N].chkDomain('cardekho.com')){return}
var cfg = {"aff":{"def":{"maxCall":1,"minVisblePerc":50,"delaySec":30,"kw":{"domain":"cardekho.com"},"gads":{"enabled":false},"moat":{"enabled":true}},"aus":[{"au":"/42115163/IP_cardekho.com_ALL_Multisize_RON_HVR_Both","sz":["300x100","300x250","320x100","320x50","336x280","728x90","970x90"],"def":1},{"au":"/21930596546/IP_cardekho.com_ALL_Multisize_RON_HVR_Both_MC","sz":["300x100","300x250","320x100","320x50","336x280","728x90","970x90"],"def":1}],"pbjs":{"enabled":true,"nm":"affpbjs","hbsite":"hvr_man_cardekho.com"}},"pub":{"def":{"maxCall":5,"delaySec":10,"minVisblePerc":60,"reprf":1,"visSec":5,"mszIgnore":["/1089059/CDWEB_CarNews_728x90_MTF"],"kw":{"domain":"cardekho.com"},"excludePatrn":{"enable":1,"patrn":"NO_REFRESH"},"section":{"enable":0,"whitelist":[],"blacklist":[]},"restoreOrgAttr":[{"name":"data-google-query-id"},{"name":"data-load-initially","value":"affhvr"}],"dfpids":{"enable":1,"excIds":{"advId":[36789889,4986391417,4609046330,4996303186,69830569,36789889,2846824740,2847580479,2848985201,34950409]},"incIds":[]},"ignoreEmptyAds":false,"ignireImpForPubAu":0},"rule":[{"tp":"exc","au":["*"],"sz":["1x1"],"lbl":"Ignr 1x1"},{"tp":"inc","au":["*"],"sz":["300x100","300x250","320x100","320x50","336x280","728x90","970x90"],"lbl":"All Au"}],"adspots":[]},"geo":{"enable":false,"srvdrct":true,"cc":["*"]}};
if('function' === typeof W[N].hvrCustCfg ){
    cfg = W[N].hvrCustCfg( cfg );
}
if(cfg.aff.pbjs && cfg.aff.pbjs.enabled){
    var hbsite = cfg.aff.pbjs.hbsite || ('hvr_' + cfg.aff.def.kw.domain),d=new Date(),
    hbInvKey='affhb2_affpbjs_' + cfg.aff.pbjs.hbsite.replace('hvr_man_','hvr_');
    if(!W[N][hbInvKey]){        
    W[N].U.loadScript('https://hbs.ph.affinity.com/v5/' + hbsite + '/affhb.data.js.php?t=' + d.getDate() + d.getMonth() + d.getHours() );
    }
}
if( cfg.aff.def.dfpenblsrv){W[N].U.loadScript("https://securepubads.g.doubleclick.net/tag/js/gpt.js");}

    googletag.cmd.push(function() {
        W[N].AffRefresh(cfg)
    });
});
})(window, document, '__afflib');