 import jwt_decode from 'jwt-decode'

var username = ''

function componentDidMount() {
    const token = localStorage.usertoken
    const decoded = jwt_decode(token)
    username=decoded.username
  }

componentDidMount()

 export default {
  items: [
    {
      name: username,
      url: '/profile',
      icon: 'icon-speedometer',
      badge: {
        variant: 'info',
        text: 'NEW',
      },
    },
    {
      title: true,
      name: 'Main',
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: ''             // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: 'User',
      url: '/profile/user',
      icon: 'icon-drop',
    },
    {
      name: 'Order',
      url: '/profile/forms',
      icon: 'icon-pencil',
    },
    {
      title: true,
      name: 'Components',
      wrapper: {
        element: '',
        attributes: {},
      },
    },
    {
      name: 'History',
      url: '/base',
      icon: 'icon-puzzle',
      children: [
        {
          name: 'Orders',
          url: '/profile/order',
          icon: 'icon-puzzle',
        },
        {
          name: 'Cards',
          url: '/base/cards',
          icon: 'icon-puzzle',
        },
        {
          name: 'Carousels',
          url: '/base/carousels',
          icon: 'icon-puzzle',
        },
      ],
    },
  ],
};
