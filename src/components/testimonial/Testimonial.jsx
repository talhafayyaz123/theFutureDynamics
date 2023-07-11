import React from "react";
import Slider from "react-slick";

const testimonialContent = [
  {
    descriptions: ` “I feel like I have gained an internal team of the company, working with theFuture DYNAMICS as our offshore development company has been extremely pleasant. They provide highly skilled team. The scalibility, flexibility, and innovation of this team is off the charts. They are trustworthy and very open for ideas. They are very professional regarding their working ethics. It feels like you are a part of their family when you work with theFuture DYNAMICS. They believe in “We Are One” in short theFuture DYNAMICS Rocks!”`,
    name: "Rizwan Hafeez",
    designation: "Founder & CEO at GoServeMe.",
  },
  {
    descriptions: ` “I have been engaged with enormous projects for significant companies and the group at theFuture DYNAMICS is the best that I have worked with. They are timely, proficient and utilize best practices in their development work. They move our task along rapidly and keep us sufficiently agile to be competitive. I would recommend them to anybody”`,
    name: "Usman Hafaz",
    designation: "Managing Director at AkzoNobel",
  },
{
    descriptions: ` “It has been an extremely positive affair for me and my organization. theFuture DYNAMICS have been a credible partner in helping to resolve the most complicated issues. The nature of the work done has been high quality. I would recommend them to everyone.”`,
    name: "Carey Osenbau",
    designation: "CEO at Cor Marketing Group",
  },
{
    descriptions: ` “I am extremely satisfied with the Project Management ability. theFuture DYNAMICS group has astounding communication abilities and a quick reaction and turnaround time. Highest work quality. I can state that theFuture DYNAMICS is authentic and modest group of individuals with the most highest spirit, hard working attitude I have seen for a development team..”`,
    name: "Faizan Aslam",
    designation: "Founder & CEO at Bookme.pK",
  },
{
    descriptions: ` “I am extremely impressed by the characteristics of the team working for us. They provide exclusively top quality code which many software houses cannot compose yet this team shows a genuine comprehension of our issues and gets together with our suggestions. They never “simply acknowledge” what we tell them, they question and propose is the most ideal approach to resolve the issue. This has prompted to a better overall product, and one that we are extremely confident about moving ahead. In future also for all the development I will choose theFuture DYNAMICS as our partner.”`,
    name: "Zahid Hussain",
    designation: "Founder & CEO at Islam 360.",
  },
];

const Testimonial = () => {
  const settings = {
    dots: false,
    arrow: false,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <>
      <Slider {...settings} className="arrow-none">
        {testimonialContent.map((val, i) => (
          <div
            className="ptf-animated-block"
            data-aos="fade"
            data-aos-delay="100"
            key={i}
          >
            <div
              className="ptf-testimonial ptf-testimonial--style-2"
              style={{
                "--ptf-text-align": "left",
                "--ptf-content-color": "var(--ptf-color-white)",
                "--ptf-author-color": "var(--ptf-color-white)",
                "--ptf-info-color": "var(--ptf-color-white)",
              }}
            >
              <div className="ptf-testimonial__content">
                <p style={{ 'fontSize':'80%' }}>{val.descriptions}</p>
              </div>
              <div className="ptf-testimonial__meta">
                <h6 className="ptf-testimonial__author">{val.name}</h6>
                <div className="ptf-testimonial__info">{val.designation}</div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default Testimonial;
