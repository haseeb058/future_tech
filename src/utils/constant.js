import blog1 from "assets/images/blog/blog-01.jpg";
import blog2 from "assets/images/blog/blog-02.jpg";
import blog3 from "assets/images/blog/blog-03.jpg";
import blog4 from "assets/images/blog/blog-04.jpg";

export const portfolioSlick = {
  dots: true,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 420,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

export const portfolioSlick2 = {
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  dots: true,
  arrows: true,
  responsive: [
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 993,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 481,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

export const slickDot = {
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 993,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 580,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 481,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

export const slideSlick = {
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  arrows: true,
  fade: true,
  easing: "fade",
  adaptiveHeight: true,
};

export const SlideList = [
  {
    textPosition: "text-left",
    bgImage: "bg_image--17",
    category: "",
    title: "Grow business.",
    description:
      "There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration.",
    buttonText: "Contact Us",
    buttonLink: "/contact-us",
  },
  {
    textPosition: "text-left",
    bgImage: "bg_image--18",
    category: "",
    title: "Development.",
    description:
      "There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration.",
    buttonText: "Contact Us",
    buttonLink: "/contact-us",
  },
  {
    textPosition: "text-left",
    bgImage: "bg_image--19",
    category: "",
    title: "Marketing.",
    description:
      "There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration.",
    buttonText: "Contact Us",
    buttonLink: "/contact-us",
  },
];

export const BlogContent = [
  {
    images: blog1,
    title: " Getting tickets to the big show",
    category: "Development",
  },
  {
    images: blog2,
    title: "A big ticket gone to be an interesting ",
    category: "Management",
  },

  {
    images: blog3,
    title: "The Home of the Future Could Bebes",
    category: "Design",
  },
  {
    images: blog4,
    title: " Getting tickets to the big show",
    category: "Development",
  },
  {
    images: blog1,
    title: "A big ticket gone to be an interesting ",
    category: "Management",
  },
  {
    images: blog2,
    title: "The Home of the Future Could Bebes",
    category: "Design",
  },
];
