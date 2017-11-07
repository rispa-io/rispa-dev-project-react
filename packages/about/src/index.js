import Loadable from 'react-loadable'

const loadable = context => Loadable({
  LoadingComponent: () => null,
  loader: () => import('./register'),
  resolveModule: module => module.default(context),
})

const createRoute = context => ({
  path: '/about',
  component: loadable(context),
})

export default createRoute
