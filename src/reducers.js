
const initialState = {
  Products: [
    {
        "image": "https://static.wixstatic.com/media/c837a6_2a025d5f690d4a979d6730a13ea3c96d~mv2.jpg/v1/fill/w_530,h_706,al_c,q_85,enc_auto/c837a6_2a025d5f690d4a979d6730a13ea3c96d~mv2.jpg",
        "title": "Steering Rack",
        "price": 120.00,
        "category": "Steering"
    },
    {
        "image": "https://static.wixstatic.com/media/c837a6_a8e7987786e34028b9723172e527831f~mv2.jpg/v1/fill/w_530,h_706,al_c,q_85,enc_auto/c837a6_a8e7987786e34028b9723172e527831f~mv2.jpg",
        "title": "Brake Hoses",
        "price": 108.50,
        "category": "Brakes"
    },
    {
        "image": "https://static.wixstatic.com/media/c837a6_8020737c00fa4fbe923f97bbeab12351~mv2.jpg/v1/fill/w_530,h_706,al_c,q_85,enc_auto/c837a6_8020737c00fa4fbe923f97bbeab12351~mv2.jpg",
        "title": "Brake Cylinder",
        "price": 135.00,
        "category": "Brakes"
    },
    {
        "image": "https://static.wixstatic.com/media/c837a6_992b4187f25f4e1fb04f759f9bbc3ee5~mv2.jpg/v1/fill/w_530,h_706,al_c,q_85,enc_auto/c837a6_992b4187f25f4e1fb04f759f9bbc3ee5~mv2.jpg",
        "title": "Brake Disc",
        "price": 160.00,
        "category": "Brakes"
    },
    {
        "image": "https://static.wixstatic.com/media/c837a6_c9623e6a69114f69abd6d83635f7c554~mv2.jpg/v1/fill/w_530,h_706,al_c,q_85,enc_auto/c837a6_c9623e6a69114f69abd6d83635f7c554~mv2.jpg",
        "title": "Power Steering Pump",
        "price": 120.00,
        "category": "Steering"
    },
    {
        "image": "https://static.wixstatic.com/media/c837a6_27f58b0f50264a97a4b9d82f1a75b01f~mv2.jpg/v1/fill/w_530,h_706,al_c,q_85,enc_auto/c837a6_27f58b0f50264a97a4b9d82f1a75b01f~mv2.jpg",
        "title": "Brake Pads",
        "price": 126.50,
        "category": "Brakes"
    }
]

};

const Productreducer = (state = initialState, action) => {
  switch (action.type) {
    case 'Add_Product':
      return {
        ...state,
        Products: [...state.Products, action.payload]
      };
      case 'Update_product':
        return {
          ...state,
          Products: state.Products.map((prod) =>
            prod.title === action.payload.title ? action.payload : prod
          ),
        };      

    case 'Delete_product' :
      return {
        ...state , 
        Products : state.Products.filter((prod)=>prod.title !== action.payload) 
      };
    case 'search_product' : 
      return {
        ...state ,
        Products : state.Products.filter((prod)=>prod.title.toLowerCase().includes(action.payload.toLocaleLowerCase()))
      }
    
    case 'filter_product' :   
      const { category } = action.payload;
      return {
        ...state ,
        Products : state.Products.filter((prod)=> 
          { 
            const categoryFilter = !category || (prod.category === category)
            return  categoryFilter ;
          })
      }
    default:
      return state;
  }
};

export default Productreducer;
