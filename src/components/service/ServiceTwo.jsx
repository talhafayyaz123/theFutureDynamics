import React,{ useState } from "react";

const ServiceTwo = () => {
const [isPower, setIsPower] = useState(false);
const [isApp, setIsApp] = useState(false);
const [isWeb, setIsWeb] = useState(false);
const [isSeo, setIsSeo] = useState(false);
const [isDevops, setIsDevops] = useState(false);
const [isQa, setIsQa] = useState(false);
const [isUiInterface, setUiInterface] = useState(false);
const [isUxInterface, setUxInterface] = useState(false);
const [isGraphics, setIsGraphics] = useState(false);
const [isDigital, setIsDigital] = useState(false);
const [isTransform, setIsTransform] = useState(false);
const [isResource, setIsResource] = useState(false);

  return (
    <>

<div class="col-md-3 col-lg-3 col-xl-3 home_page_services" onMouseEnter={() => setIsPower(true)}
    onMouseLeave={() => setIsPower(false)}  style={{backgroundColor: isPower ? 'black' : 'white',"border": "0.5px solid rgb(246, 246, 246)",
    "padding": " 0px"
    }}>
<a  href="/service-details" style={{ "height": "30vh", "width": " 100%", "margin": " 0px" }}>

 <img src={`assets/img/home/studio/power_bi.png`} alt="UI/UX" style={{ "width": "19%","margin-top": "4%","margin-left": "71%",'display':'block'}}/>

<p className="text-left service_small_heading" style={{"font-weight":'900','paddingLeft':'6%','position':'relative',
    'bottom':'50px',color: isPower ? 'white' : 'black'}}>Data Analytics-Power BI</p>

<p className="text-center" style={{"color": "rgb(0, 0, 0)","font-weight":'500',color: isPower ? 'white' : 'black'}}>Power BI plays an important role to visualize your Data that helps to take business decisions.</p>
</a>

</div>


<div class="col-md-3 col-lg-3 col-xl-3 home_page_services" onMouseEnter={() => setIsApp(true)}
    onMouseLeave={() => setIsApp(false)} style={{backgroundColor: isApp ? 'black' : 'white',"border": "0.5px solid rgb(246, 246, 246)",
    "padding": " 0px"
    }}>
<a  href="/service-details" style={{ "height": "30vh", "width": " 100%", "margin": " 0px" }}>
 <img src={`assets/img/home/studio/ux.svg`} alt="UI/UX" style={{backgroundColor: isApp ? 'white' : '', "width": "19%","margin-top": "4%","margin-left": "71%",'display':'block'}}/>

<p class="text-left service_small_heading" style={{"font-weight":'900','paddingLeft':'6%','position':'relative',
    'bottom':'50px',color: isApp ? 'white' : 'black'}}>Mobile App Development</p>

<p class="text-center" style={{"color": "rgb(0, 0, 0)","font-weight":'500',color: isApp ? 'white' : 'black'}}>
Mobile application development is the set of processes and procedures involved in writing software for small, wireless computing devices etc.</p>

</a></div>



<div class="col-md-3 col-lg-3 col-xl-3 home_page_services" onMouseEnter={() => setIsWeb(true)} onMouseLeave={() => setIsWeb(false)}
style={{backgroundColor: isWeb ? 'black' : 'white', "border": "0.5px solid rgb(246, 246, 246)", "padding": " 0px" }}>
<a  href="/service-details" style={{ "height": "30vh", "width": " 100%", "margin": " 0px" }}>

 <img src={`assets/img/home/studio/website.svg`} alt="UI/UX" style={{backgroundColor: isWeb ? 'white' : '', "width": "17%","margin-top": "4%","margin-left": "71%",'display':'block'}}/>

<p class="text-left service_small_heading" style={{color: isWeb ? 'white' : 'black',"font-weight":'900','paddingLeft':'6%','position':'relative','bottom':'70px'}}>Website Development</p>

<p class="text-center" style={{ "color": "rgb(0, 0, 0)","font-weight":'500',color: isWeb ? 'white' : 'black'}}>Web development usually refers to the main non-design aspects of building Web sites: writing markup and coding.</p>

</a></div>



<div class="col-md-3 col-lg-3 col-xl-3 home_page_services" onMouseEnter={() => setIsSeo(true)} onMouseLeave={() => setIsSeo(false)}
style={{backgroundColor: isSeo ? 'black' : 'white', "border": "0.5px solid rgb(246, 246, 246)", "padding": " 0px" }}>
<a  href="/service-details" style={{ "height": "30vh", "width": " 100%", "margin": " 0px" }}>

 <img src={`assets/img/home/studio/seo.svg`} alt="UI/UX" style={{backgroundColor: isSeo ? 'white' : '', "width": "17%","margin-top": "4%","margin-left": "73%",'display':'block'}}/>

<p class="text-left service_small_heading" style={{ color: isSeo ? 'white' : 'black',"font-weight":'900','paddingLeft':'6%','position':'relative','bottom':'70px'}}>Search Engine Optimization</p>

<p class="text-center" style={{color: isSeo ? 'white' : 'black',"margin-top": "9%","font-weight":'500'}}>Search engine optimization is a set of technical and content practices aimed at aligning a website page with a search engine's ranking algorithm.</p>

</a></div>



<div class="col-md-3 col-lg-3 col-xl-3 home_page_services" onMouseEnter={() => setIsDevops(true)} onMouseLeave={() => setIsDevops(false)} style={{backgroundColor: isDevops ? 'black' : 'white', "border": "0.5px solid rgb(246, 246, 246)", "padding": " 0px" }}>
<a  href="/service-details" style={{ "height": "30vh", "width": " 100%", "margin": " 0px" }}>
 <img src={`assets/img/home/studio/aws.svg`} alt="UI/UX" style={{ backgroundColor: isDevops ? 'white' : '',"width": "19%","margin-top": "4%","margin-left": "70%",'display':'block'}}/>

<p class="text-left service_small_heading" style={{ color: isDevops ? 'white' : 'black',"font-weight":'900','paddingLeft':'10%','position':'relative','bottom':'56px'}}>DevOps - AWS/ Azure</p>

<p class="text-center" style={{color: isDevops ? 'white' : 'black',"margin-top": "13%","font-weight":'500'}}>The AWS Toolkit for Azure DevOps is an extension for hosted and on-premises Microsoft Azure DevOps that make it easy to manage and deploy applications using AWS.</p>

</a></div>




<div class="col-md-3 col-lg-3 col-xl-3 home_page_services" onMouseEnter={() => setIsQa(true)} onMouseLeave={() => setIsQa(false)}
style={{backgroundColor: isQa ? 'black' : 'white', "border": "0.5px solid rgb(246, 246, 246)", "padding": " 0px" }}>
<a  href="/service-details" style={{ "height": "30vh", "width": " 100%", "margin": " 0px" }}>
 <img src={`assets/img/home/studio/quality-assurance.jpg`} alt="UI/UX" style={{backgroundColor: isQa ? 'white' : '', "width": "18%","margin-top": "4%","margin-left": "70%",'display':'block'}}/>

<p class="text-left service_small_heading" style={{color: isQa ? 'white' : 'black',"font-weight":'900','paddingLeft':'10%','position':'relative','bottom':'56px'}}>Quality Assurance</p>

<p  class="text-center" style={{ color: isQa ? 'white' : 'black',"margin-top": "13%","font-weight":'500'}}>Security Testing is a type of Software Testing that uncovers vulnerabilities of the system and determines that the data and resources of the system are protected from possible.</p>

</a></div>


<div class="col-md-3 col-lg-3 col-xl-3 home_page_services" onMouseEnter={() => setUiInterface(true)} onMouseLeave={() => setUiInterface(false)}  style={{backgroundColor: isUiInterface ? 'black' : 'white', "border": "0.5px solid rgb(246, 246, 246)", "padding": " 0px" }}>
<a  href="/service-details" style={{ "height": "30vh", "width": " 100%", "margin": " 0px" }}>

 <img src={`assets/img/home/studio/design.png`} alt="UI/UX"  style={{ backgroundColor: isUiInterface ? 'white' : '',"width": "17%","margin-top": "4%","margin-left": "70%",'display':'block'}}/>

<p class="text-left service_small_heading" style={{color: isUiInterface ? 'white' : 'black', "font-weight":'900','paddingLeft':'10%','position':'relative','bottom':'56px'}}>UI - User Interface</p>

<p  class="text-center" style={{ color: isUiInterface ? 'white' : 'black',"margin-top": "13%","font-weight":'500'}}>User interface (UI) design is the process designers use to build interfaces in software or computerized devices, focusing on looks or style.</p>

</a></div>



<div class="col-md-3 col-lg-3 col-xl-3 home_page_services" onMouseEnter={() => setUxInterface(true)} onMouseLeave={() => setUxInterface(false)} style={{backgroundColor: isUxInterface ? 'black' : 'white', "border": "0.5px solid rgb(246, 246, 246)", "padding": " 0px" }}>
<a  href="/service-details" style={{ "height": "30vh", "width": " 100%", "margin": " 0px" }}>

 <img src={`assets/img/home/studio/ux-design.png`} alt="UI/UX" style={{backgroundColor: isUxInterface ? 'white' : '', "width": "17%","margin-top": "4%","margin-left": "70%",'display':'block'}}/>

<p class="text-left service_small_heading" style={{color: isUxInterface ? 'white' : 'black',"font-weight":'900','paddingLeft':'10%','position':'relative','bottom':'56px'}}>UX - User Experience</p>

<p  class="text-center" style={{ color: isUxInterface ? 'white' : 'black',"margin-top": "13%","font-weight":'500'}}>User experience design is the process of defining the experience a user would go through when interacting with a company, its services, and its products.</p>

</a></div>


<div class="col-md-3 col-lg-3 col-xl-3 home_page_services" onMouseEnter={() => setIsGraphics(true)} onMouseLeave={() => setIsGraphics(false)} style={{backgroundColor: isGraphics ? 'black' : 'white', "border": "0.5px solid rgb(246, 246, 246)", "padding": " 0px" }}>
<a  href="/service-details" style={{ "height": "30vh", "width": " 100%", "margin": " 0px" }}>

 <img src={`assets/img/home/studio/graphics-design.png`} alt="UI/UX" style={{backgroundColor: isGraphics ? 'white' : '',  "width": "19%","margin-top": "7%","margin-left": "71%",'display':'block'}}/>

<p class="text-left service_small_heading" style={{color: isGraphics ? 'white' : 'black',"font-weight":'900','paddingLeft':'6%','position':'relative','bottom':'50px'}}>Graphic Design</p>

<p class="text-center" style={{color: isGraphics ? 'white' : 'black',"font-weight":'500'}}>Graphic design is the practice of composing and arranging the visual elements of a project.</p>
</a></div>


<div class="col-md-3 col-lg-3 col-xl-3 home_page_services" onMouseEnter={() => setIsDigital(true)} onMouseLeave={() => setIsDigital(false)} style={{backgroundColor: isDigital ? 'black' : 'white', "border": "0.5px solid rgb(246, 246, 246)", "padding": " 0px" }}>
<a  href="/service-details" style={{ "height": "30vh", "width": " 100%", "margin": " 0px" }}>

 <img src={`assets/img/home/studio/digital.svg`} alt="UI/UX" style={{backgroundColor: isDigital ? 'white' : '', "width": "18%","margin-top": "7%","margin-left": "71%",'display':'block'}}/>

<p  class="text-left service_small_heading" style={{color: isDigital ? 'white' : 'black',"font-weight":'900','paddingLeft':'6%','position':'relative','bottom':'50px'}}>Digital Content Creation</p>

<p class="text-center" style={{color: isDigital ? 'white' : 'black',"font-weight":'500'}}>Content creation is the act of producing and sharing information or media content for specific audiences, particularly in digital contexts.</p>

</a></div>



<div class="col-md-3 col-lg-3 col-xl-3 home_page_services" onMouseEnter={() => setIsTransform(true)} onMouseLeave={() => setIsTransform(false)}
 style={{ backgroundColor: isTransform ? 'black' : 'white',"border": "0.5px solid rgb(246, 246, 246)", "padding": " 0px" }}>
<a  href="/service-details" style={{ "height": "30vh", "width": " 100%", "margin": " 0px" }}>

<img src={`assets/img/home/studio/content-creator.png`} alt="UI/UX" style={{backgroundColor: isTransform ? 'white' : '', "width": "18%","margin-top": "7%","margin-left": "71%",'display':'block'}}/>

<p class="text-left service_small_heading" style={{ color: isTransform ? 'white' : 'black',"font-weight":'900','paddingLeft':'6%','position':'relative','bottom':'50px'}}>Digital Transformation</p>

<p class="text-center" style={{ color: isTransform ? 'white' : 'black',"font-weight":'500'}}>It is a comprehensive plan that moves your organization or department from point A of using your current digital tools and processes to point B of using newer digital and tech tools. .</p>

</a></div>





<div class="col-md-3 col-lg-3 col-xl-3 home_page_services" onMouseEnter={() => setIsResource(true)} onMouseLeave={() => setIsResource(false)} style={{  backgroundColor: isResource ? 'black' : 'white',"border": "0.5px solid rgb(246, 246, 246)", "padding": " 0px" }}>
<a  href="/service-details" style={{ "height": "30vh", "width": " 100%", "margin": " 0px" }}>

 <img src={`assets/img/home/studio/icons8-people-50.png`} alt="UI/UX" style={{backgroundColor: isResource ? 'white' : '', "width": "19%","margin-top": "7%","margin-left": "71%",'display':'block'}}/>

<p  class="text-left service_small_heading" style={{  color: isResource ? 'white' : 'black',"font-weight":'900','paddingLeft':'6%','position':'relative','bottom':'50px'}}>Resource Augmentation</p>

<p class="text-center" style={{color: isResource ? 'white' : 'black',"font-weight":'500'}}>Resource augmentation is an agile, cost-effective, and flexible outsourcing strategy that allows businesses to hire third-party top tech talent on a contractual basis for a specific project or various projects.</p>

</a></div>

    </>
  );
};

export default ServiceTwo;
