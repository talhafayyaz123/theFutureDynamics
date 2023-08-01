import React from "react";
import { Item } from "react-photoswipe-gallery";

const imageList = [
  {
    img: "/assets/img/portfolio/single-work/content-image-4.png",
    column: "col-lg-12",
    alt: "image 3",
    width: "600",
    height: "400",
  },
];

const ImageGridThree = () => {
  return (

      <div
        className="ptf-justified-gallery row"
        style={{
          "--bs-gutter-x": "2rem",
          "--bs-gutter-y": "2rem",
        }}
      >
        {imageList.map((val, i) => (
          <div className={val.column} key={i}>
            <div className="ptf-gallery__item">
                <Item
                  original={val.img}
                  thumbnail={val.img}
                  width={val.width}
                  height={val.height}
                >
                  {({ ref, open }) => (
                    <img
                      src={val.img}
                      alt="works gallery"
                      role="button"
                      ref={ref}
                      onClick={open}
                    />
                  )}
                </Item>

            </div>
          </div>
        ))}
      </div>

  );
};

export default ImageGridThree;
