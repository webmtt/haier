import React, { lazy } from 'react'
import { Route } from 'react-router-dom'

const MessageList = lazy(() => import('./pages/messageList/MessageList'))
const MessageClassify = lazy(() => import('./pages/messageClassify/MessageClassify'))
const MessageSetting = lazy(() => import('./pages/messageSetting/MessageSetting'))
const DeviceSetting = lazy(() => import('./pages/messageSetting/DeviceSetting'))
const ServeSetting = lazy(() => import('./pages/messageSetting/ServeSetting'))

export const RouteWithSubRoutes = route => (
	<Route path={route.path} render={props => (
		<route.component {...props} routes={route.routes} />
	)}
	/>
)
// 路由配置
const routes = [
	{
		path: '/classify/:id',
		component: MessageClassify,
	},
	{
		path: '/deviceSetting',
		component: DeviceSetting,
	},
	{
		path: '/serveSetting',
		component: ServeSetting,
	},
	{
		path: '/setting',
		component: MessageSetting,
	},
	{
		path: '/',
		component: MessageList,
		exact: true,
	},
]

export default routes
