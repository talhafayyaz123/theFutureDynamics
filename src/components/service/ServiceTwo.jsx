import React,{ useState } from "react";
import { Link } from "react-router-dom";

const ServiceTwo = () => {
// const [isPower, setIsPower] = useState(false);
const [isApp, setIsApp] = useState(false);
const [isWeb, setIsWeb] = useState(false);
const [isSeo, setIsSeo] = useState(false);
// const [isDevops, setIsDevops] = useState(false);
const [isQa, setIsQa] = useState(false);
const [isUiInterface, setUiInterface] = useState(false);
const [isUxInterface, setUxInterface] = useState(false);
// const [isGraphics, setIsGraphics] = useState(false);
const [isDigital, setIsDigital] = useState(false);
const [isTransform, setIsTransform] = useState(false);
const [isResource, setIsResource] = useState(false);

  return (
    <>
{/* 
 <div class="col-md-4 col-lg-4 col-xl-4 home_page_services" onMouseEnter={() => setIsPower(true)}
onMouseLeave={() => setIsPower(false)}  style={{backgroundColor: isPower ? 'black' : 'white',"border": "0.5px solid rgb(246, 246, 246)",
    "padding": " 28px"
    }}>
<a  href="/service-details" style={{ "height": "30vh", "width": " 100%", "margin": " 0px" }}>

 {isPower ?  <img src={`assets/img/home/studio/power_bi_white.png`} alt="UI/UX" style={{ "width": "10%","margin-top": "4%","margin-left": "83%",'display':'block'}}/>

:  <img src={`assets/img/home/studio/power_bi.png`} alt="UI/UX" style={{ "width": "12%","margin-top": "4%","margin-left": "81%",'display':'block'}}/>

}
<p className="text-left service_small_heading" style={{"font-weight":'900','paddingLeft':'14%','position':'relative',
    'bottom':'32px',color: isPower ? 'white' : 'black'}}>Data Analytics-Power BI</p>

<p className="text-center" style={{"font-weight":'500',color: isPower ? 'white' : 'black'}}>Power BI plays an important role to visualize your Data that helps to take business decisions.</p>
</a>

</div> 


<div class="col-md-4 col-lg-4 col-xl-4 home_page_services" onMouseEnter={() => setIsDevops(true)} onMouseLeave={() => setIsDevops(false)} style={{backgroundColor: isDevops ? 'black' : 'white', "border": "0.5px solid rgb(246, 246, 246)", "padding": " 28px" }}>
<a  href="/service-details" style={{ "height": "30vh", "width": " 100%", "margin": " 0px" }}>
 
 {isDevops  ?  <img src={`assets/img/home/studio/aws-white.png`} alt="UI/UX" style={{ backgroundColor: isDevops ? 'white' : '',"width": "17%","margin-top": "4%","margin-left": "78%",'display':'block'}}/>
:  <img src={`assets/img/home/studio/aws.svg`} alt="UI/UX" style={{ backgroundColor: isDevops ? 'white' : '',"width": "12%","margin-top": "4%","margin-left": "81%",'display':'block'}}/>
}

<p class="text-left service_small_heading" style={{ color: isDevops ? 'white' : 'black',"font-weight":'900','paddingLeft':'18%','position':'relative','bottom':'37px'}}>DevOps - AWS/ Azure</p>

<p class="text-center" style={{color: isDevops ? 'white' : 'black',"margin-top": "13%","font-weight":'500'}}>The AWS Toolkit for Azure DevOps is an extension for hosted and on-premises Microsoft Azure DevOps that make it easy to manage and deploy applications using AWS.</p>

</a></div>
*/}


<div class="col-md-4 col-lg-4 col-xl-4 home_page_services" onMouseEnter={() => setIsApp(true)}
    onMouseLeave={() => setIsApp(false)} style={{backgroundColor: isApp ? 'black' : 'white',"border": "0.5px solid rgb(246, 246, 246)",
    "padding": " 28px"
    }}>

<Link  to="/service/mobile-app-development" style={{ "height": "30vh", "width": " 100%", "margin": " 0px" }}>

{isApp  ?  <img src={`assets/img/home/studio/ux-white.png`} alt="UI/UX" style={{backgroundColor: isApp ? 'white' : '', "width": "12%","margin-top": "4%","margin-left": "81%",'display':'block'}}/>
   : <img src={`assets/img/home/studio/ux.svg`} alt="UI/UX" style={{backgroundColor: isApp ? 'white' : '', "width": "12%","margin-top": "4%","margin-left": "81%",'display':'block'}}/>
}

<p class="text-left service_small_heading" style={{"font-weight":'900','paddingLeft':'11%','position':'relative',
    'bottom':'53px',color: isApp ? 'white' : 'black'}}>Mobile App Development</p>

<p class="text-center" style={{"font-weight":'500',color: isApp ? 'white' : 'black'}}>
Our developed Mobile Apps offer enhanced user-engagement, accessibility, brand visibility, direct communication, data insights, customer loyalty & monetization.</p>
</Link>

</div>



<div class="col-md-4 col-lg-4 col-xl-4 home_page_services" onMouseEnter={() => setIsWeb(true)} onMouseLeave={() => setIsWeb(false)}
style={{backgroundColor: isWeb ? 'black' : 'white', "border": "0.5px solid rgb(246, 246, 246)", "padding": " 28px" }}>
<Link  to="/service/website-development" style={{ "height": "30vh", "width": " 100%", "margin": " 0px" }}>

{ isWeb ?   <img src={`assets/img/home/studio/website-white.png`} alt="UI/UX" style={{backgroundColor: isWeb ? 'white' : '', "width": "12%","margin-top": "4%","margin-left": "81%",'display':'block'}}/>
:  <img src={`assets/img/home/studio/website.jpg`} alt="UI/UX" style={{backgroundColor: isWeb ? 'white' : '', "width": "12%","margin-top": "4%","margin-left": "81%",'display':'block'}}/>
}

<p class="text-left service_small_heading" style={{color: isWeb ? 'white' : 'black',"font-weight":'900','paddingLeft':'16%','position':'relative','bottom':'31px'}}>Website Development</p>

<p class="text-center" style={{ "font-weight":'500',color: isWeb ? 'white' : 'black','paddingTop': '35px'}}>Strategic online assets that align with your business goals, whether it's to attract customers, drive sales, or share your message</p>

</Link></div>



<div class="col-md-4 col-lg-4 col-xl-4 home_page_services" onMouseEnter={() => setIsSeo(true)} onMouseLeave={() => setIsSeo(false)}
style={{backgroundColor: isSeo ? 'black' : 'white', "border": "0.5px solid rgb(246, 246, 246)", "padding": " 28px" }}>
<Link  to="/service/seo" style={{ "height": "30vh", "width": " 100%", "margin": " 0px" }}>

{isSeo  ?  <img src={`assets/img/home/studio/seo-white.png`} alt="UI/UX" style={{backgroundColor: isSeo ? 'white' : '', "width": "12%","margin-top": "4%","margin-left": "81%",'display':'block'}}/>
 :  <img src={`assets/img/home/studio/seo.svg`} alt="UI/UX" style={{backgroundColor: isSeo ? 'white' : '', "width": "12%","margin-top": "4%","margin-left": "81%",'display':'block'}}/>
}

<p class="text-left service_small_heading" style={{ color: isSeo ? 'white' : 'black',"font-weight":'900','paddingLeft':'9%','position':'relative','bottom':'53px'}}>Search Engine Optimization</p>

<p class="text-center" style={{color: isSeo ? 'white' : 'black',"margin-top": "9%","font-weight":'500'}}>Our digital marketers make sure our SEO is done right that increases traffic, organic traffic, more leads, conversions, and revenue for their business.</p>

</Link></div>


<div class="col-md-4 col-lg-4 col-xl-4 home_page_services" onMouseEnter={() => setIsQa(true)} onMouseLeave={() => setIsQa(false)}
style={{backgroundColor: isQa ? 'black' : 'white', "border": "0.5px solid rgb(246, 246, 246)", "padding": " 28px" }}>
<Link  to="/service/performance-marketing" style={{ "height": "30vh", "width": " 100%", "margin": " 0px" }}>

{isQa ?  <img src={`assets/img/home/studio/performance_marketing-white.png`} alt="UI/UX" style={{backgroundColor: isQa ? 'white' : '', "width": "10%","margin-top": "4%","margin-left": "81%",'display':'block'}}/>
:  <img src={`assets/img/home/studio/performance_marketing.png`} alt="UI/UX" style={{backgroundColor: isQa ? 'white' : '', "width": "10%","margin-top": "4%","margin-left": "81%",'display':'block'}}/> 
}
<p class="text-left service_small_heading" style={{color: isQa ? 'white' : 'black',"font-weight":'900','paddingLeft':'22%','position':'relative','bottom':'38px'}}>Performance Marketing</p>
<p  class="text-center" style={{ color: isQa ? 'white' : 'black',"margin-top": "13%","font-weight":'500'}}>ROI based performance marketing is done right after listening to your business goals, understanding specific needs & custom strategies.</p>
</Link></div>


<div class="col-md-4 col-lg-4 col-xl-4 home_page_services" onMouseEnter={() => setUiInterface(true)} onMouseLeave={() => setUiInterface(false)}  style={{backgroundColor: isUiInterface ? 'black' : 'white', "border": "0.5px solid rgb(246, 246, 246)", "padding": " 28px" }}>
<Link  to="/service/ui-ux" style={{ "height": "30vh", "width": " 100%", "margin": " 0px" }}>

{isUiInterface ? 
 <img src={`assets/img/home/studio/design_white.png`} alt="UI/UX"  style={{ backgroundColor: isUiInterface ? 'white' : '',"width": "10%","margin-top": "4%","margin-left": "81%",'display':'block'}}/>

:  <img src={`assets/img/home/studio/design.png`} alt="UI/UX"  style={{ backgroundColor: isUiInterface ? 'white' : '',"width": "10%","margin-top": "4%","margin-left": "81%",'display':'block'}}/>

}

<p class="text-left service_small_heading" style={{color: isUiInterface ? 'white' : 'black', "font-weight":'900','paddingLeft':'38%','position':'relative','bottom':'36px'}}>UI/UX</p>

<p  class="text-center" style={{ color: isUiInterface ? 'white' : 'black',"margin-top": "13%","font-weight":'500'}}>Our user-centric approach & well-crafted UI/UX smooth your user experience journey, increase conversions, reduce bounce rate and are responsive to all devices.
</p>

</Link></div>



<div class="col-md-4 col-lg-4 col-xl-4 home_page_services" onMouseEnter={() => setUxInterface(true)} onMouseLeave={() => setUxInterface(false)} style={{backgroundColor: isUxInterface ? 'black' : 'white', "border": "0.5px solid rgb(246, 246, 246)", "padding": " 28px" }}>
<Link  to="/service/e-commerce" style={{ "height": "30vh", "width": " 100%", "margin": " 0px" }}>

{isUxInterface ? <img src={`assets/img/home/studio/e-commerce-white.png`} alt="UI/UX" style={{backgroundColor: isUxInterface ? 'white' : '', "width": "11%","margin-top": "4%","margin-left": "78%",'display':'block'}}/>

:  <img src={`assets/img/home/studio/e-commerce.png`} alt="UI/UX" style={{backgroundColor: isUxInterface ? 'white' : '', "width": "11%","margin-top": "4%","margin-left": "78%",'display':'block'}}/>

}

<p class="text-left service_small_heading" style={{color: isUxInterface ? 'white' : 'black',"font-weight":'900','paddingLeft':'27%','position':'relative','bottom':'43px'}}>E-Commerce</p>

<p  class="text-center" style={{ color: isUxInterface ? 'white' : 'black',"margin-top": "13%","font-weight":'500'}}>The world of commerce is evolving rapidly, and the shift to e-commerce is no longer an option but a strategic imperative for businesses of all sizes and industries.</p>

</Link></div>


{/* <div class="col-md-4 col-lg-4 col-xl-4 home_page_services" onMouseEnter={() => setIsGraphics(true)} onMouseLeave={() => setIsGraphics(false)} style={{backgroundColor: isGraphics ? 'black' : 'white', "border": "0.5px solid rgb(246, 246, 246)", "padding": " 28px" }}>
<a  href="/service-details" style={{ "height": "30vh", "width": " 100%", "margin": " 0px" }}>

{isGraphics ?  <img src={`assets/img/home/studio/graphics-design-white.png`} alt="UI/UX" style={{backgroundColor: isGraphics ? 'white' : '',  "width": "11%","margin-top": "7%","margin-left": "80%",'display':'block'}}/>
  :  <img src={`assets/img/home/studio/graphics-design.png`} alt="UI/UX" style={{backgroundColor: isGraphics ? 'white' : '',  "width": "11%","margin-top": "7%","margin-left": "80%",'display':'block'}}/>
}


<p class="text-left service_small_heading" style={{color: isGraphics ? 'white' : 'black',"font-weight":'900','paddingLeft':'28%','position':'relative','bottom':'33px'}}>Graphic Design</p>

<p class="text-center" style={{color: isGraphics ? 'white' : 'black',"font-weight":'500'}}>Graphic design is the practice of composing and arranging the visual elements of a project.</p>
</a></div>
 */}

<div class="col-md-4 col-lg-4 col-xl-4 home_page_services" onMouseEnter={() => setIsDigital(true)} onMouseLeave={() => setIsDigital(false)} style={{backgroundColor: isDigital ? 'black' : 'white', "border": "0.5px solid rgb(246, 246, 246)", "padding": " 28px" }}>
<Link  to="/service/digital-content" style={{ "height": "30vh", "width": " 100%", "margin": " 0px" }}>

{isDigital ?   <img src={`assets/img/home/studio/digital-white.png`} alt="UI/UX" style={{backgroundColor: isDigital ? 'white' : '', "width": "13%","margin-top": "7%","margin-left": "80%",'display':'block'}}/>
:  <img src={`assets/img/home/studio/digital.png`} alt="UI/UX" style={{backgroundColor: isDigital ? 'white' : '', "width": "13%","margin-top": "7%","margin-left": "80%",'display':'block'}}/>
}

<p  class="text-left service_small_heading" style={{color: isDigital ? 'white' : 'black',"font-weight":'900','paddingLeft':'18%','position':'relative','bottom':'48px'}}>Digital Content Creation</p>

<p class="text-center" style={{color: isDigital ? 'white' : 'black',"font-weight":'500'}}>Unlock the success of your business with engaging and valuable digital content. We empower your business with Digital content, TVC or Brand corporate videos.
</p>

</Link></div>



<div class="col-md-4 col-lg-4 col-xl-4 home_page_services" onMouseEnter={() => setIsTransform(true)} onMouseLeave={() => setIsTransform(false)}
 style={{ backgroundColor: isTransform ? 'black' : 'white',"border": "0.5px solid rgb(246, 246, 246)", "padding": " 28px" }}>
<Link  to="/service/enterprise-solutions" style={{ "height": "30vh", "width": " 100%", "margin": " 0px" }}>


{isTransform  ? <img src={`assets/img/home/studio/enterprise_solution-white.png`} alt="UI/UX" style={{backgroundColor: isTransform ? 'white' : '', "width": "12%","margin-top": "7%","margin-left": "80%",'display':'block'}}/>
  : <img src={`assets/img/home/studio/enterprise_solution.png`} alt="UI/UX" style={{backgroundColor: isTransform ? 'white' : '', "width": "12%","margin-top": "7%","margin-left": "80%",'display':'block'}}/>
}

<p class="text-left service_small_heading" style={{ color: isTransform ? 'white' : 'black',"font-weight":'900','paddingLeft':'20%','position':'relative','bottom':'42px'}}>Enterprise Solutions</p>

<p class="text-center" style={{ color: isTransform ? 'white' : 'black',"font-weight":'500'}}>Being a Microsoft Gold Partners, we empower your business to thrive in the digital age, ensuring you're prepared for whatever challenges and opportunities lie ahead.
</p>

</Link></div>



<div class="col-md-4 col-lg-4 col-xl-4 home_page_services" onMouseEnter={() => setIsResource(true)} onMouseLeave={() => setIsResource(false)} style={{  backgroundColor: isResource ? 'black' : 'white',"border": "0.5px solid rgb(246, 246, 246)", "padding": " 28px" }}>
<Link  to="/service/growth-uae" style={{ "height": "30vh", "width": " 100%", "margin": " 0px" }}>


{isResource ? <img src={`assets/img/home/studio/business-white.png`} alt="UI/UX" style={{backgroundColor: isResource ? 'white' : '', "width": "12%","margin-top": "7%","margin-left": "78%",'display':'block'}}/>
: <img src={`assets/img/home/studio/business.png`} alt="UI/UX" style={{backgroundColor: isResource ? 'white' : '', "width": "12%","margin-top": "7%","margin-left": "78%",'display':'block'}}/>
}

<p  class="text-left service_small_heading" style={{  color: isResource ? 'white' : 'black',"font-weight":'900','paddingLeft':'15%','position':'relative','bottom':'39px'}}>Business Consulting</p>

<p class="text-center" style={{color: isResource ? 'white' : 'black',"font-weight":'500'}}>We help businesses from various industries to grow and expand their operations and grow into different markets & at the same keep their operations & profits streams smooth.</p>

</Link></div>

    </>
  );
};

export default ServiceTwo;
