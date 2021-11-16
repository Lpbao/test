import React from "react";
import "./style.css";
import IMG1 from "../../../../image/css-icon1.png";
import IMG2 from "../../../../image/html-icon1.png";
import IMG3 from "../../../../image/url-icon1.png";

const box_arr = [
  {
    id: "floated_3",
    title: "Lorem ipsum dolor sit amet",
    image: IMG1,
    text_: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui
    sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit
    accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa
    in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at
    ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est
    ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta
    massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.`,
  },
];

const Box = () => {
  return (
    // <div className="box">
    //       <div className="box_title">Lorem ipsum dolor sit amet</div>
    //       <div className="box-content">
    //         <div id="floated">
    //           <img src={IMG1} alt="IMG" />
    //         </div>
    //         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui
    //  sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit
    //  accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa
    //  in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at
    //  ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est
    //  ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta
    //  massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.
    //       </div>
    //     </div>
    // <>
    //   {box_arr.map((element) => (
    //     <div className="box">
    //       <div className="box_title">{element.title}</div>
    //       <div className="box-content">
    //         <div id={element.id}>
    //           <img src={element.image} alt="IMG" />
    //         </div>
    //         {element.text_}
    //       </div>
    //     </div>
    //   ))}
    // </>
    <div className="box-content">
      <div>
        <div id="floated_1">
          <img src={IMG1} alt="IMG" />
        </div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui
        sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit
        accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa
        in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at
        ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est
        ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta
        massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.
      </div>

      <div >
        <div id="floated_2">
          <img src={IMG1} alt="IMG" />
        </div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui
        sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit
        accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa
        in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at
        ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est
        ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta
        massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.
      </div>
      <div >
        <div id="floated_3">
          <img src={IMG1} alt="IMG" />
        </div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui
        sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit
        accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa
        in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at
        ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est
        ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta
        massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.
      </div>
    </div>
  );
};

export default Box;
