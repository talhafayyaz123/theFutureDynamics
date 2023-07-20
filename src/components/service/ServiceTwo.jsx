import React from "react";
import { Link } from "react-router-dom";

const serviceContent = [
  {
    delayAnimation: "0",
    title: "Technology",
    serviceList: [
      "Data Analytics - Power BI",
      "Mobile App Development",
      "Website Development",
      "SEO - Search Engine Optimization",
      "DevOps - AWS/ Azure ",
      "Security & Functionality Testing/ Quality Assurance",
    ],
  },
  {
    delayAnimation: "100",
    title: "Design",
    serviceList: [
      "UI - User Interface",
      "UX - User Experience ",
      "Graphic Design",
      "Digital Content Creation",
    ],
  },
  {
    delayAnimation: "200",
    title: "Business Growth",
    serviceList: [
      "Digital Transformation Roadmapping",
      "Technology Resource Augmentation",
    ],
  },
];

const ServiceTwo = () => {
  return (
    <>
     {/*  {serviceContent.map((item, i) => (
        <div className="col-12 col-md-6 col-lg-4" key={i}>

          <div
            className="ptf-animated-block"
            data-aos="fade"
            data-aos-delay={item.delayAnimation}
          >
            <h6 className="fz-16 text-uppercase has-3-color fw-normal">
              {item.title}
            </h6>

            <div
              className="ptf-spacer"
              style={{ "--ptf-xxl": "2.8125rem" }}
            ></div>

            <ul className="ptf-services-list ptf-services-list--style-2">
              {item.serviceList.map((val, i) => (
                <li key={i}>
                  <Link to="/service-details" style={{fontSize:25}}>{val}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))} */}




<div class="col-md-3 col-lg-3 col-xl-3" style={{ "border": "1.3px solid rgb(231 221 221)", "padding": " 0px" }}>
<a  href="/service-details" style={{ "height": "30vh", "width": " 100%", "margin": " 0px" }}>

 <img src={`assets/img/home/studio/power_bi.png`} alt="UI/UX" style={{ "width": "24%","margin-top": "4%","margin-left": "71%",'display':'block'}}/>

<p class="text-left" style={{ "color": "rgb(0, 0, 0)","font-weight":'900','padding-left':'6%','position':'relative','bottom':'50px'}}>Data Analytics-Power BI</p>

<p class="text-center" style={{ "color": "rgb(0, 0, 0)","font-weight":'500'}}>Power BI plays an important role to visualize your Data that helps to take business decisions.</p>
</a></div>



<div class="col-md-3 col-lg-3 col-xl-3" style={{ "border": "1.3px solid rgb(231 221 221)", "padding": " 0px" }}>
<a  href="/service-details" style={{ "height": "30vh", "width": " 100%", "margin": " 0px" }}>
 <img src={`assets/img/home/studio/ux.svg`} alt="UI/UX" style={{ "width": "24%","margin-top": "4%","margin-left": "71%",'display':'block'}}/>

<p class="text-left" style={{ "color": "rgb(0, 0, 0)","font-weight":'900','padding-left':'6%','position':'relative','bottom':'70px'}}>Mobile App Development</p>

<p class="text-center" style={{ "color": "rgb(0, 0, 0)","font-weight":'500'}}>Mobile application development is the set of processes and procedures involved in writing software for small, wireless computing devices etc.</p>

</a></div>



<div class="col-md-3 col-lg-3 col-xl-3" style={{ "border": "1.3px solid rgb(231 221 221)", "padding": " 0px" }}>
<a  href="/service-details" style={{ "height": "30vh", "width": " 100%", "margin": " 0px" }}>

 <img src={`assets/img/home/studio/website.svg`} alt="UI/UX" style={{ "width": "23%","margin-top": "4%","margin-left": "71%",'display':'block'}}/>

<p class="text-left" style={{ "color": "rgb(0, 0, 0)","font-weight":'900','padding-left':'6%','position':'relative','bottom':'70px'}}>Website Development</p>

<p class="text-center" style={{ "color": "rgb(0, 0, 0)","font-weight":'500'}}>Web development usually refers to the main non-design aspects of building Web sites: writing markup and coding.</p>

</a></div>



<div class="col-md-3 col-lg-3 col-xl-3" style={{ "border": "1.3px solid rgb(231 221 221)", "padding": " 0px" }}>
<a  href="/service-details" style={{ "height": "30vh", "width": " 100%", "margin": " 0px" }}>

 <img src={`assets/img/home/studio/seo.svg`} alt="UI/UX" style={{ "width": "23%","margin-top": "4%","margin-left": "73%",'display':'block'}}/>

<p class="text-left" style={{ "color": "rgb(0, 0, 0)","font-weight":'900','padding-left':'6%','position':'relative','bottom':'70px'}}>Search Engine Optimization</p>

<p class="text-center" style={{ "color": "rgb(0, 0, 0)","margin-top": "9%","font-weight":'500'}}>Search engine optimization is a set of technical and content practices aimed at aligning a website page with a search engine's ranking algorithm.</p>

</a></div>



<div class="col-md-3 col-lg-3 col-xl-3" style={{ "border": "1.3px solid rgb(231 221 221)", "padding": " 0px" }}>
<a  href="/service-details" style={{ "height": "30vh", "width": " 100%", "margin": " 0px" }}>
 <img src={`assets/img/home/studio/aws.svg`} alt="UI/UX" style={{ "width": "23%","margin-top": "4%","margin-left": "70%",'display':'block'}}/>

<p class="text-left" style={{ "color": "rgb(0, 0, 0)","font-weight":'900','padding-left':'10%','position':'relative','bottom':'56px'}}>DevOps - AWS/ Azure</p>

<p class="text-center" style={{ "color": "rgb(0, 0, 0)","margin-top": "13%","font-weight":'500'}}>The AWS Toolkit for Azure DevOps is an extension for hosted and on-premises Microsoft Azure DevOps that make it easy to manage and deploy applications using AWS.</p>

</a></div>




<div class="col-md-3 col-lg-3 col-xl-3" style={{ "border": "1.3px solid rgb(231 221 221)", "padding": " 0px" }}>
<a  href="/service-details" style={{ "height": "30vh", "width": " 100%", "margin": " 0px" }}>
 <img src={`assets/img/home/studio/quality-assurance.jpg`} alt="UI/UX" style={{ "width": "23%","margin-top": "4%","margin-left": "70%",'display':'block'}}/>

<p class="text-left" style={{ "color": "rgb(0, 0, 0)","font-weight":'900','padding-left':'10%','position':'relative','bottom':'56px'}}>Quality Assurance</p>

<p  class="text-center" style={{ "color": "rgb(0, 0, 0)","margin-top": "13%","font-weight":'500'}}>Security Testing is a type of Software Testing that uncovers vulnerabilities of the system and determines that the data and resources of the system are protected from possible.</p>

</a></div>


<div class="col-md-3 col-lg-3 col-xl-3" style={{ "border": "1.3px solid rgb(231 221 221)", "padding": " 0px" }}>
<a  href="/service-details" style={{ "height": "30vh", "width": " 100%", "margin": " 0px" }}>

 <img src={`assets/img/home/studio/design.png`} alt="UI/UX"  style={{ "width": "23%","margin-top": "4%","margin-left": "70%",'display':'block'}}/>

<p class="text-left" style={{ "color": "rgb(0, 0, 0)","font-weight":'900','padding-left':'10%','position':'relative','bottom':'56px'}}>UI - User Interface</p>

<p  class="text-center" style={{ "color": "rgb(0, 0, 0)","margin-top": "13%","font-weight":'500'}}>User interface (UI) design is the process designers use to build interfaces in software or computerized devices, focusing on looks or style.</p>

</a></div>



<div class="col-md-3 col-lg-3 col-xl-3" style={{ "border": "1.3px solid rgb(231 221 221)", "padding": " 0px" }}>
<a  href="/service-details" style={{ "height": "30vh", "width": " 100%", "margin": " 0px" }}>

 <img src={`assets/img/home/studio/ux-design.png`} alt="UI/UX" style={{ "width": "23%","margin-top": "4%","margin-left": "70%",'display':'block'}}/>

<p class="text-left" style={{ "color": "rgb(0, 0, 0)","font-weight":'900','padding-left':'10%','position':'relative','bottom':'56px'}}>UX - User Experience</p>

<p  class="text-center" style={{ "color": "rgb(0, 0, 0)","margin-top": "13%","font-weight":'500'}}>User experience design is the process of defining the experience a user would go through when interacting with a company, its services, and its products.</p>

</a></div>


<div class="col-md-3 col-lg-3 col-xl-3" style={{ "border": "1.3px solid rgb(231 221 221)", "padding": " 0px" }}>
<a  href="/service-details" style={{ "height": "30vh", "width": " 100%", "margin": " 0px" }}>

 <img src={`assets/img/home/studio/graphics-design.png`} alt="UI/UX" style={{ "width": "24%","margin-top": "7%","margin-left": "71%",'display':'block'}}/>

<p class="text-left" style={{ "color": "rgb(0, 0, 0)","font-weight":'900','padding-left':'6%','position':'relative','bottom':'50px'}}>Graphic Design</p>

<p class="text-center" style={{ "color": "rgb(0, 0, 0)","font-weight":'500'}}>Graphic design is the practice of composing and arranging the visual elements of a project.</p>
</a></div>


<div class="col-md-3 col-lg-3 col-xl-3" style={{ "border": "1.3px solid rgb(231 221 221)", "padding": " 0px" }}>
<a  href="/service-details" style={{ "height": "30vh", "width": " 100%", "margin": " 0px" }}>

 <img src={`assets/img/home/studio/digital.svg`} alt="UI/UX" style={{ "width": "24%","margin-top": "7%","margin-left": "71%",'display':'block'}}/>

<p  class="text-left" style={{ "color": "rgb(0, 0, 0)","font-weight":'900','padding-left':'6%','position':'relative','bottom':'50px'}}>Digital Content Creation</p>

<p class="text-center" style={{ "color": "rgb(0, 0, 0)","font-weight":'500'}}>Content creation is the act of producing and sharing information or media content for specific audiences, particularly in digital contexts.</p>

</a></div>



<div class="col-md-3 col-lg-3 col-xl-3" style={{ "border": "1.3px solid rgb(231 221 221)", "padding": " 0px" }}>
<a  href="/service-details" style={{ "height": "30vh", "width": " 100%", "margin": " 0px" }}>

<img src={`assets/img/home/studio/content-creator.png`} alt="UI/UX" style={{ "width": "24%","margin-top": "7%","margin-left": "71%",'display':'block'}}/>

<p class="text-left" style={{ "color": "rgb(0, 0, 0)","font-weight":'900','padding-left':'6%','position':'relative','bottom':'50px'}}>Digital Transformation</p>

<p class="text-center" style={{ "color": "rgb(0, 0, 0)","font-weight":'500'}}>It is a comprehensive plan that moves your organization or department from point A of using your current digital tools and processes to point B of using newer digital and tech tools. .</p>

</a></div>





<div class="col-md-3 col-lg-3 col-xl-3" style={{ "border": "1.3px solid rgb(231 221 221)", "padding": " 0px" }}>
<a  href="/service-details" style={{ "height": "30vh", "width": " 100%", "margin": " 0px" }}>

 <img src={`assets/img/home/studio/icons8-people-50.png`} alt="UI/UX" style={{ "width": "24%","margin-top": "7%","margin-left": "71%",'display':'block'}}/>

<p  class="text-left" style={{ "color": "rgb(0, 0, 0)","font-weight":'900','padding-left':'6%','position':'relative','bottom':'50px'}}>Resource Augmentation</p>

<p class="text-center" style={{ "color": "rgb(0, 0, 0)","font-weight":'500'}}>Resource augmentation is an agile, cost-effective, and flexible outsourcing strategy that allows businesses to hire third-party top tech talent on a contractual basis for a specific project or various projects.</p>

</a></div>

    </>
  );
};

export default ServiceTwo;
