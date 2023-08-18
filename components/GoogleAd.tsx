import { useEffect } from "react";

declare global{
    interface Window{
        adsbygoogle : any;
    }
}
const GoogleAd=()=>{
    useEffect(()=>{
            (window.adsbygoogle = window.adsbygoogle || []).push({})
    },[]);

return(
<div className="googleAd-container">
<ins className="adsbygoogle"
     style={{display:'block'}}
     data-ad-client="ca-pub-8904224703245079"
     data-ad-slot="5293648806"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
</div>
    );
};

export default GoogleAd