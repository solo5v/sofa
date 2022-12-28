import {
  RANDOM_DISCOUNT,
  RANDOM_ID,
  RANDOM_LOREM_IPSUM,
  RANDOM_PRICE,
  RANDOM_SHIPMENT_PRICE,
} from "./helpers.js";

const STATE = {
  registerMode: "signup",
  user: {
    name: "",
    email: "",
    password: "",
    userFav: [],
    userProducts: [],
    userIsValid: false,
    isLoggedIn: false,
    registerMode: "signup",
  },
};

const TESTIMOILAS = [
  {
    id: RANDOM_ID(),
    image: "/img/testimonials/ts2.jpg",
    title: "We couldn't live without these chairs anymore",
    description:
      "Proin nec pretium justo. Suspendisse pulvinar pulvinar elementum. Praesent est nulla,  Veniam velit anim quis consectetur et pariatur. Incididunt nisi tempor esse laborum ea. Veniam enim id sunt nisi non. Nostrud ullamco velit amet irure consequat proident aliquip tempor officia qui.",
    author: "Troy Lewis",
  },
  {
    id: RANDOM_ID(),
    image: "/img/testimonials/customers.jpg",
    title: "Vivamus nulla mi, porta sit amet imperdiet in, sofa",
    description:
      "non sapien. Pellentesque suscipit ligula et ornare ornare. risus. quis consectetur et pariatur. Incididunt nisi tempor esse laborum ea. Veniam enim id sunt nisi non. Nostrud ullamco velit amet irure consequat proident aliquip tempor officia qui.",
    author: "Randy Mack",
  },
  {
    id: RANDOM_ID(),
    image: "/img/testimonials/ts4.jpg",
    title: "We couldn't live without these chairs anymore",
    description:
      " Veniam enim id sunt nisi non. Nostrud ullamco velit amet irure consequat proident aliquip tempor officia qui.",
    author: "Mayra Crawford",
  },

  {
    id: RANDOM_ID(),
    image: "/img/testimonials/ts3.jpg",
    title: "We couldn't live without these chairs anymore",
    description:
      "Veniam velit anim quis consectetur et pariatur. Incididunt nisi tempor esse laborum ea. Veniam enim id sunt nisi non. Nostrud ullamco velit amet irure consequat proident aliquip tempor officia qui.",
    author: "Mayra Crawford",
  },
];

const FAQ = [
  {
    question: "How long do I have to return my chair?",
    description:
      "Accusantium dolor at sequi obcaecati cupiditate. Voluptates repellendus cupiditate aperiam! Incidunt amet quo neque.",
    points: {
      p1: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      p2: "Quasi accusamus corporis totam tempora suscipit abobcaecati.",
      p3: "Tempora, et atque officia at consequatur laborum!",
      p4: "Repudiandae praesentium illo voluptate in, atque enim.",
    },
  },
  {
    question: "Do you ship to countries outside the EU?",
    description: `repellendus cupiditate aperiam! Incidunt amet quo neque.
    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
    Accusantium dolor at sequi obcaecati cupiditate. Voluptates`,

    points: {
      p1: "Quasi accusamus corporis totam tempora suscipit abobcaecati.",
      p2: "Tempora, et atque officia at consequatur laborum!",
    },
  },
  {
    question: "Where are these chairs assembled?",
    description: `Incidunt amet quo neque.
    Accusantium dolor at sequi obcaecati cupiditate. Voluptates`,

    points: {
      p1: " sit amet consectetur adipisicing elit.",
      p2: "Quasi accusamus corporis totam tempora suscipit abobcaecati.",
      p3: "Repudiandae praesentium illo voluptate in, atque enim.",
    },
  },
  {
    question: "do you ship to the Middle East?",
    description: `Incidunt amet quo neque.
    Accusantium dolor at sequi obcaecati cupiditate. Voluptates`,

    points: {
      p1: " sit amet consectetur adipisicing elit.",
      p2: " praesentium illo voluptate in, atque enim.",
    },
  },
];

const PRODUCTS = [
  {
    id: "SOF452345",
    category: "sofa",
    title: "Bonded Leather",
    total: {
      price: RANDOM_PRICE(),
      shipment: RANDOM_SHIPMENT_PRICE(),
      discount: RANDOM_DISCOUNT(),
    },
    image:
      "https://images.unsplash.com/photo-1567016432779-094069958ea5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHNvZmFzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
    description: RANDOM_LOREM_IPSUM(),
    quantity: 1,
  },
  {
    id: "SOF456456",
    category: "sofa",
    title: "Faux Leather",
    total: {
      price: RANDOM_PRICE(),
      shipment: RANDOM_SHIPMENT_PRICE(),
      discount: RANDOM_DISCOUNT(),
    },
    image:
      "https://images.unsplash.com/photo-1519961655809-34fa156820ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c29mYXN8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60",
    description: RANDOM_LOREM_IPSUM(),
    quantity: 1,
  },
  {
    id: "SOF45675676",
    category: "sofa",
    title: "Bi-Cast Leather",
    total: {
      price: RANDOM_PRICE(),
      shipment: RANDOM_SHIPMENT_PRICE(),
      discount: RANDOM_DISCOUNT(),
    },
    image:
      "https://images.unsplash.com/photo-1630585308572-f53438fc684f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c29mYXN8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60",
    description: RANDOM_LOREM_IPSUM(),
    quantity: 1,
  },

  {
    id: "SOF4523456",
    category: "sofa",
    title: "Royalin",
    total: {
      price: RANDOM_PRICE(),
      shipment: RANDOM_SHIPMENT_PRICE(),
      discount: RANDOM_DISCOUNT(),
    },
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c29mYXN8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60",
    description: RANDOM_LOREM_IPSUM(),
    quantity: 1,
  },
  {
    id: "SOF45768906",
    category: "sofa",
    title: "Bi-Cast Leather",
    total: {
      price: RANDOM_PRICE(),
      shipment: RANDOM_SHIPMENT_PRICE(),
      discount: RANDOM_DISCOUNT(),
    },
    image:
      "https://images.unsplash.com/photo-1512212621149-107ffe572d2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHNvZmFzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
    description: RANDOM_LOREM_IPSUM(),
    quantity: 1,
  },
  {
    id: "SOF4534556",
    category: "sofa",
    title: "Bi-Cast Leather",
    total: {
      price: RANDOM_PRICE(),
      shipment: RANDOM_SHIPMENT_PRICE(),
      discount: RANDOM_DISCOUNT(),
    },
    image:
      "https://images.unsplash.com/photo-1600447653990-02fbebf8dd24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzd8fHNvZmFzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
    description: RANDOM_LOREM_IPSUM(),
    quantity: 1,
  },

  {
    id: "SOF45356754",
    category: "sofa",
    title: "Nubuck Leather",
    total: {
      price: RANDOM_PRICE(),
      shipment: RANDOM_SHIPMENT_PRICE(),
      discount: RANDOM_DISCOUNT(),
    },
    image:
      "https://images.unsplash.com/photo-1464564531096-f0163633a18a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fHNvZmFzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
    description: RANDOM_LOREM_IPSUM(),
    quantity: 1,
  },
  {
    id: "SOF4673454",
    category: "sofa",
    title: "Split Grain Leather",
    total: {
      price: RANDOM_PRICE(),
      shipment: RANDOM_SHIPMENT_PRICE(),
      discount: RANDOM_DISCOUNT(),
    },
    image:
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fHNvZmFzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
    description: RANDOM_LOREM_IPSUM(),
    quantity: 1,
  },
  {
    id: "SOF434545",
    category: "sofa",
    title: "Faux Leather",
    total: {
      price: RANDOM_PRICE(),
      shipment: RANDOM_SHIPMENT_PRICE(),
      discount: RANDOM_DISCOUNT(),
    },
    image:
      "https://images.unsplash.com/photo-1540574163026-643ea20ade25?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c29mYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60",
    description: RANDOM_LOREM_IPSUM(),
    quantity: 1,
  },

  // armchair

  {
    id: "ARMCH56567",
    category: "armchair",
    title: "WINGBACK Armchair",
    total: {
      price: RANDOM_PRICE(),
      shipment: RANDOM_SHIPMENT_PRICE(),
      discount: RANDOM_DISCOUNT(),
    },
    image:
      "https://images.unsplash.com/photo-1579488085123-6a6a3630f0f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YXJtY2hhaXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60",
    description: RANDOM_LOREM_IPSUM(),
    quantity: 1,
  },
  {
    id: "ARMCH545767",
    category: "armchair",
    title: "Wooden Frame Armchair",
    total: {
      price: RANDOM_PRICE(),
      shipment: RANDOM_SHIPMENT_PRICE(),
      discount: RANDOM_DISCOUNT(),
    },
    image:
      "https://images.unsplash.com/photo-1617364852223-75f57e78dc96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGFybWNoYWlyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
    description: RANDOM_LOREM_IPSUM(),
    quantity: 1,
  },
  {
    id: "ARMCH55657",
    category: "armchair",
    title: "Low Back Armchair",
    total: {
      price: RANDOM_PRICE(),
      shipment: RANDOM_SHIPMENT_PRICE(),
      discount: RANDOM_DISCOUNT(),
    },
    image:
      "https://images.unsplash.com/photo-1589361558560-58fd95e47b3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGFybWNoYWlyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
    description: RANDOM_LOREM_IPSUM(),
    quantity: 1,
  },

  {
    id: "ARMCH5545647",
    category: "armchair",
    title: "Low Back Armchair",
    total: {
      price: RANDOM_PRICE(),
      shipment: RANDOM_SHIPMENT_PRICE(),
      discount: RANDOM_DISCOUNT(),
    },
    image:
      "https://images.unsplash.com/photo-1619992677751-cb736bd47e2e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGFybWNoYWlyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
    description: RANDOM_LOREM_IPSUM(),
    quantity: 1,
  },
  {
    id: "ARMCH556787",
    category: "armchair",
    title: "Chesterfield Armchair",
    total: {
      price: RANDOM_PRICE(),
      shipment: RANDOM_SHIPMENT_PRICE(),
      discount: RANDOM_DISCOUNT(),
    },
    image:
      "https://images.unsplash.com/photo-1631700679578-621a258507bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YXJtY2hhaXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60",
    description: RANDOM_LOREM_IPSUM(),
    quantity: 1,
  },
  {
    id: "ARMCH5589822",
    category: "armchair",
    title: "Low Back Armchair",
    total: {
      price: RANDOM_PRICE(),
      shipment: RANDOM_SHIPMENT_PRICE(),
      discount: RANDOM_DISCOUNT(),
    },
    image:
      "https://images.unsplash.com/photo-1583760671582-4e193a23ac44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTcxfHxhcm1jaGFpcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60",
    description: RANDOM_LOREM_IPSUM(),
    quantity: 1,
  },

  {
    id: "ARMCH55895672",
    category: "armchair",
    title: "Modern Contemporary Armchair",
    total: {
      price: RANDOM_PRICE(),
      shipment: RANDOM_SHIPMENT_PRICE(),
      discount: RANDOM_DISCOUNT(),
    },
    image:
      "https://images.unsplash.com/photo-1566663409293-585e129d2e71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTU4fHxhcm1jaGFpcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60",
    description: RANDOM_LOREM_IPSUM(),
    quantity: 1,
  },
  {
    id: "ARMCH552372",
    category: "armchair",
    title: "WINGBACK Armchair",
    total: {
      price: RANDOM_PRICE(),
      shipment: RANDOM_SHIPMENT_PRICE(),
      discount: RANDOM_DISCOUNT(),
    },
    image:
      "https://images.unsplash.com/photo-1520453714493-d85cdd7b033b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTMyfHxhcm1jaGFpcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60",
    description: RANDOM_LOREM_IPSUM(),
    quantity: 1,
  },
  {
    id: "ARMCH5525672",
    category: "armchair",
    title: "Faux Leather Armchairs",
    total: {
      price: RANDOM_PRICE(),
      shipment: RANDOM_SHIPMENT_PRICE(),
      discount: RANDOM_DISCOUNT(),
    },
    image:
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDV8fGFybWNoYWlyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
    description: RANDOM_LOREM_IPSUM(),
    quantity: 1,
  },

  // chair

  {
    id: "CHA6575767",
    category: "chair",
    title: "Metallic plastic chair",
    total: {
      price: RANDOM_PRICE(),
      shipment: RANDOM_SHIPMENT_PRICE(),
      discount: RANDOM_DISCOUNT(),
    },
    image:
      "https://images.unsplash.com/photo-1561224608-4033a2c44c4c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTMzfHxjaGFpcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60",
    description: RANDOM_LOREM_IPSUM(),
    quantity: 1,
  },
  {
    id: "CHA65754567",
    category: "chair",
    title: "Leather chair",
    total: {
      price: RANDOM_PRICE(),
      shipment: RANDOM_SHIPMENT_PRICE(),
      discount: RANDOM_DISCOUNT(),
    },
    image:
      "https://images.unsplash.com/photo-1636212644134-5867a3807ef9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTQxfHxjaGFpcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60",
    description: RANDOM_LOREM_IPSUM(),
    quantity: 1,
  },
  {
    id: "CHA657545345",
    category: "chair",
    title: "steel plastic chair",
    total: {
      price: RANDOM_PRICE(),
      shipment: RANDOM_SHIPMENT_PRICE(),
      discount: RANDOM_DISCOUNT(),
    },
    image:
      "https://images.unsplash.com/photo-1592885331172-bf57d2281135?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTU0fHxjaGFpcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60",
    description: RANDOM_LOREM_IPSUM(),
    quantity: 1,
  },

  {
    id: "CHA6544565",
    category: "chair",
    title: "Fabric chair",
    total: {
      price: RANDOM_PRICE(),
      shipment: RANDOM_SHIPMENT_PRICE(),
      discount: RANDOM_DISCOUNT(),
    },
    image:
      "https://images.unsplash.com/photo-1573500020435-82d72d6459b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTk1fHxjaGFpcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60",
    description: RANDOM_LOREM_IPSUM(),
    quantity: 1,
  },
  {
    id: "CHA6545575",
    category: "chair",
    title: "Fabric chair",
    total: {
      price: RANDOM_PRICE(),
      shipment: RANDOM_SHIPMENT_PRICE(),
      discount: RANDOM_DISCOUNT(),
    },
    image:
      "https://images.unsplash.com/photo-1611464908623-07f19927264e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjI2fHxjaGFpcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60",
    description: RANDOM_LOREM_IPSUM(),
    quantity: 1,
  },
  {
    id: "CHA654345",
    category: "chair",
    title: "Fabric chair",
    total: {
      price: RANDOM_PRICE(),
      shipment: RANDOM_SHIPMENT_PRICE(),
      discount: RANDOM_DISCOUNT(),
    },
    image:
      "https://images.unsplash.com/photo-1541558869434-2840d308329a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjcxfHxjaGFpcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60",
    description: RANDOM_LOREM_IPSUM(),
    quantity: 1,
  },

  // poufs

  {
    id: "POF54543589",
    category: "poufs",
    title: "Mesh poufs",
    total: {
      price: RANDOM_PRICE(),
      shipment: RANDOM_SHIPMENT_PRICE(),
      discount: RANDOM_DISCOUNT(),
    },
    image:
      "https://img.edilportale.com/product-thumbs/h_tobit-paola-lenti-549559-rela163eff2.jpg",
    description: RANDOM_LOREM_IPSUM(),
    quantity: 1,
  },
  {
    id: "POF5434589",
    category: "poufs",
    title: "Nubuck Leather",
    total: {
      price: RANDOM_PRICE(),
      shipment: RANDOM_SHIPMENT_PRICE(),
      discount: RANDOM_DISCOUNT(),
    },
    image:
      "https://img.edilportale.com/product-thumbs/h_buddy-212-pedrali-535222-rel34f87be7.jpg",
    description: RANDOM_LOREM_IPSUM(),
    quantity: 1,
  },
  {
    id: "POF54345679",
    category: "poufs",
    title: "Nubuck Leather",
    total: {
      price: RANDOM_PRICE(),
      shipment: RANDOM_SHIPMENT_PRICE(),
      discount: RANDOM_DISCOUNT(),
    },
    image:
      "https://img.edilportale.com/product-thumbs/h_sumo-brugnotto-586509-rel3465ea85.jpg",
    description: RANDOM_LOREM_IPSUM(),
    quantity: 1,
  },

  {
    id: "POF5434239",
    category: "poufs",
    title: "Nubuck Leather",
    total: {
      price: RANDOM_PRICE(),
      shipment: RANDOM_SHIPMENT_PRICE(),
      discount: RANDOM_DISCOUNT(),
    },
    image:
      "https://img.edilportale.com/product-thumbs/h_pouf-sancal-600704-relab1fd031.jpg",
    description: RANDOM_LOREM_IPSUM(),
    quantity: 1,
  },
  {
    id: "POF5433459",
    category: "poufs",
    title: "Fabric plastic poufs",
    total: {
      price: RANDOM_PRICE(),
      shipment: RANDOM_SHIPMENT_PRICE(),
      discount: RANDOM_DISCOUNT(),
    },
    image:
      "https://img.edilportale.com/product-thumbs/h_CLOUD-Pouf-Gallotti-Radice-308095-rel1a649e59.jpg",
    description: RANDOM_LOREM_IPSUM(),
    quantity: 1,
  },
  {
    id: "POF54356759",
    category: "poufs",
    title: "Fabric Wooden poufs",
    total: {
      price: RANDOM_PRICE(),
      shipment: RANDOM_SHIPMENT_PRICE(),
      discount: RANDOM_DISCOUNT(),
    },
    image:
      "https://img.edilportale.com/product-thumbs/h_reversible-yellow-gan-by-gandia-blasco-596994-rel78ab4385.png",
    description: RANDOM_LOREM_IPSUM(),
    quantity: 1,
  },

  // desktopchairs

  {
    id: "DSK345453",
    category: "desktopchairs",
    title: "Faux Leather",
    total: {
      price: RANDOM_PRICE(),
      shipment: RANDOM_SHIPMENT_PRICE(),
      discount: RANDOM_DISCOUNT(),
    },
    image:
      "https://images.unsplash.com/photo-1505797149-43b0069ec26b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8b2ZmaWNlJTIwY2hhaXJzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
    description: RANDOM_LOREM_IPSUM(),
    quantity: 1,
  },
  {
    id: "DSK345343",
    category: "desktopchairs",
    title: "Fabric Wooden",
    total: {
      price: RANDOM_PRICE(),
      shipment: RANDOM_SHIPMENT_PRICE(),
      discount: RANDOM_DISCOUNT(),
    },
    image:
      "https://images.unsplash.com/photo-1541533260371-b8fc9b596d84?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG9mZmljZSUyMGNoYWlyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60",
    description: RANDOM_LOREM_IPSUM(),
    quantity: 1,
  },
  {
    id: "DSK345343",
    category: "desktopchairs",
    title: "Fabric steel ",
    total: {
      price: RANDOM_PRICE(),
      shipment: RANDOM_SHIPMENT_PRICE(),
      discount: RANDOM_DISCOUNT(),
    },
    image:
      "https://images.unsplash.com/photo-1628269989095-ef8569497706?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTh8fG9mZmljZSUyMGNoYWlyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60",
    description: RANDOM_LOREM_IPSUM(),
    quantity: 1,
  },

  {
    id: "DSK343443",
    category: "desktopchairs",
    title: "High back mesh",
    total: {
      price: RANDOM_PRICE(),
      shipment: RANDOM_SHIPMENT_PRICE(),
      discount: RANDOM_DISCOUNT(),
    },
    image:
      "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fGRlc2t0b3AlMjBjaGFpcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60",
    description: RANDOM_LOREM_IPSUM(),
    quantity: 1,
  },
  {
    id: "DSK34356567",
    category: "desktopchairs",
    title: "High back mesh",
    total: {
      price: RANDOM_PRICE(),
      shipment: RANDOM_SHIPMENT_PRICE(),
      discount: RANDOM_DISCOUNT(),
    },
    image:
      "https://images.unsplash.com/photo-1658855964357-1fb10b28b18c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTE3fHxkZXNrdG9wJTIwY2hhaXJzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
    description: RANDOM_LOREM_IPSUM(),
    quantity: 1,
  },
  {
    id: "DSK34376573",
    category: "desktopchairs",
    title: "High back mesh",
    total: {
      price: RANDOM_PRICE(),
      shipment: RANDOM_SHIPMENT_PRICE(),
      discount: RANDOM_DISCOUNT(),
    },
    image:
      "https://images.unsplash.com/photo-1658856039235-7745824f88db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTIyfHxkZXNrdG9wJTIwY2hhaXJzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
    description: RANDOM_LOREM_IPSUM(),
    quantity: 1,
  },
];

export { FAQ, STATE, PRODUCTS, RANDOM_LOREM_IPSUM, TESTIMOILAS };
